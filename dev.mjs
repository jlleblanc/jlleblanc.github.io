#!/usr/bin/env node
// Local preview for the static jlleblanc.com site.
//
//   npm run dev
//   node dev.mjs [--host 0.0.0.0] [--port 1983]
//
// It binds to 0.0.0.0 by default so the site is reachable from a phone or
// another machine on the same network. There is no build step and no watch:
// edit the HTML or CSS and reload the browser.

import { createReadStream } from 'node:fs'
import { readFile, stat } from 'node:fs/promises'
import { createServer } from 'node:http'
import { networkInterfaces } from 'node:os'
import { extname, join, resolve, sep } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(fileURLToPath(new URL('.', import.meta.url)))

// The retired pages from the old site all land on the one remaining page.
const LEGACY = new Set([
  '/blog',
  '/blog/always-pick-number-one-first',
  '/writing',
  '/experience',
  '/about',
  '/contact',
  '/always-pick-number-one-first',
])

const CONTENT_TYPES = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.ico': 'image/x-icon',
  '.jpeg': 'image/jpeg',
  '.jpg': 'image/jpeg',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.map': 'application/json; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.ttf': 'font/ttf',
  '.txt': 'text/plain; charset=utf-8',
  '.webp': 'image/webp',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.xml': 'application/xml; charset=utf-8',
}

function flag(name, fallback) {
  const index = process.argv.indexOf(name)
  const value = index === -1 ? undefined : process.argv[index + 1]
  return value ?? fallback
}

const host = flag('--host', process.env.HOST ?? '0.0.0.0')
const port = Number(flag('--port', process.env.PORT ?? 1983))

function send(req, res, status, headers, body) {
  res.writeHead(status, headers)
  res.end(req.method === 'HEAD' ? undefined : body)
}

async function sendFile(req, res, file, status = 200) {
  let info
  try {
    info = await stat(file)
  } catch {
    return false
  }
  if (!info.isFile()) return false

  res.writeHead(status, {
    'content-type': CONTENT_TYPES[extname(file)] ?? 'application/octet-stream',
    'content-length': info.size,
    'cache-control': 'no-store',
    'x-content-type-options': 'nosniff',
  })

  if (req.method === 'HEAD') {
    res.end()
    return true
  }

  const stream = createReadStream(file)
  stream.on('error', () => res.destroy())
  stream.pipe(res)
  return true
}

async function sendNotFound(req, res) {
  const body = await readFile(join(root, '404.html')).catch(() => null)
  if (!body) {
    send(
      req,
      res,
      404,
      { 'content-type': 'text/plain; charset=utf-8' },
      'Not found',
    )
    return
  }
  res.writeHead(404, {
    'content-type': 'text/html; charset=utf-8',
    'content-length': body.length,
    'cache-control': 'no-store',
    'x-content-type-options': 'nosniff',
  })
  res.end(req.method === 'HEAD' ? undefined : body)
}

const server = createServer(async (req, res) => {
  const url = new URL(
    req.url ?? '/',
    `http://${req.headers.host ?? 'localhost'}`,
  )

  if (req.method !== 'GET' && req.method !== 'HEAD') {
    res.setHeader('allow', 'GET, HEAD')
    send(
      req,
      res,
      405,
      { 'content-type': 'text/plain; charset=utf-8' },
      'Method not allowed',
    )
    return
  }

  const pathname = url.pathname
  const clean = pathname.replace(/\/+$/, '') || '/'

  if (LEGACY.has(clean)) {
    res.writeHead(301, {
      location: `/${url.search}`,
      'cache-control': 'no-store',
    })
    res.end()
    return
  }

  let decoded
  try {
    decoded = decodeURIComponent(pathname)
  } catch {
    await sendNotFound(req, res)
    return
  }

  // Never expose dotfiles such as .git, even on the local network.
  if (decoded.split('/').some((part) => part.startsWith('.'))) {
    await sendNotFound(req, res)
    return
  }

  const candidate = resolve(join(root, decoded))
  if (candidate !== root && !candidate.startsWith(root + sep)) {
    await sendNotFound(req, res)
    return
  }

  try {
    const info = await stat(candidate)
    if (info.isDirectory()) {
      if (await sendFile(req, res, join(candidate, 'index.html'))) return
      await sendNotFound(req, res)
      return
    }
    if (await sendFile(req, res, candidate)) return
  } catch {
    // Fall through to the 404 page.
  }

  await sendNotFound(req, res)
})

server.on('error', (error) => {
  if (error.code === 'EADDRINUSE') {
    console.error(`Port ${port} is already in use. Try --port with another number.`)
    process.exit(1)
  }
  throw error
})

server.listen(port, host, () => {
  console.log(`jlleblanc.com dev server on http://${host}:${port}/`)

  if (host === '0.0.0.0' || host === '::') {
    for (const addresses of Object.values(networkInterfaces())) {
      for (const address of addresses ?? []) {
        if (address.family === 'IPv4' && !address.internal) {
          console.log(`  network: http://${address.address}:${port}/`)
        }
      }
    }
  }
})
