import Head from 'next/head'
import Link from 'next/link'
import siteConfig from '../config/siteConfig'

export default function Layout({ children, title, description, canonicalUrl, jsonLd }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>{`${title} | ${siteConfig.name}`}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        {jsonLd && (
          <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        )}
      </Head>

      <header className="bg-gray-800 text-white p-4">
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/case-studies">Case Studies</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>

      <footer className="bg-gray-800 text-white p-4">
        <p>&copy; 2002 - {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
      </footer>
    </div>
  )
}