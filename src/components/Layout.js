import Head from 'next/head'
import Link from 'next/link'
import Breadcrumbs from './Breadcrumbs'

export default function Layout({ children, title, description, canonicalUrl, jsonLd }) {
  return (
    <div className="container mx-auto px-4">
      <Head>
        <title>{title} | Software Engineering Leadership</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <link rel="icon" href="/favicon.ico" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Head>
      <nav className="py-4">
        <ul className="flex space-x-4">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About Me</Link></li>
          <li><Link href="/services">Services</Link></li>
          <li><Link href="/case-studies">Case Studies</Link></li>
          <li><Link href="/blog">Blog</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
      <Breadcrumbs />
      <main className="py-8">{children}</main>
      <footer className="py-8">
        <p>© 2023 [Your Name]. All rights reserved.</p>
      </footer>
    </div>
  )
}