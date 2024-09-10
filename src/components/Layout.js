import Link from 'next/link'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Breadcrumbs from './Breadcrumbs'
import siteConfig from '../config/siteConfig'

const Layout = ({ children, title, description, canonicalUrl, jsonLd }) => {
  const router = useRouter()

  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonicalUrl} />
        {jsonLd && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
        )}
      </Head>
      <header className="bg-gray-800 text-white p-4">
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/" className={router.pathname === '/' ? 'font-bold' : ''}>Home</Link></li>
            <li><Link href="/about" className={router.pathname === '/about' ? 'font-bold' : ''}>About</Link></li>
            <li><Link href="/services" className={router.pathname === '/services' ? 'font-bold' : ''}>Services</Link></li>
            <li><Link href="/experience" className={router.pathname === '/experience' ? 'font-bold' : ''}>Experience</Link></li>
            <li><Link href="/blog" className={router.pathname === '/blog' ? 'font-bold' : ''}>Blog</Link></li>
            <li><Link href="/contact" className={router.pathname === '/contact' ? 'font-bold' : ''}>Contact</Link></li>
          </ul>
        </nav>
      </header>
      <main className="flex-grow container mx-auto px-4 py-8">
        <Breadcrumbs />
        {children}
      </main>
      <footer className="bg-gray-800 text-white p-4">
        <div className="container mx-auto">
          <p>&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <div className="mt-2">
            <a href={siteConfig.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="mr-4">LinkedIn</a>
            <a href={siteConfig.socialLinks.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout