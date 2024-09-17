import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Breadcrumbs from './Breadcrumbs'
import siteConfig from '../config/siteConfig'

export default function Layout({ children, title, description, canonicalUrl, jsonLd, notFound = false}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/experience', label: 'Experience' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>{title ? `${title} | ${siteConfig.name}` : siteConfig.name}</title>
        <meta name="description" content={description || siteConfig.description} />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {jsonLd && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
        )}
      </Head>

      <header className="bg-white shadow-md">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center text-xl font-bold text-gray-800 uppercase">
            People Scaled
            <img src="https://github.com/jlleblanc.png" alt="Avatar of Joe LeBlanc" className="w-6 h-6 rounded-full ml-2 border border-gray-100 shadow-lg" />
          </Link>

          {/* Hamburger menu for mobile */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
              </svg>
            </button>
          </div>

          {/* Desktop menu */}
          <ul className="hidden md:flex space-x-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={`text-gray-800 hover:text-blue-600 ${router.pathname === item.href ? 'font-bold' : ''}`}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white py-2">
            <ul className="flex flex-col items-center">
              {navItems.map((item) => (
                <li key={item.href} className="py-2">
                  <Link href={item.href} className={`text-gray-800 hover:text-blue-600 ${router.pathname === item.href ? 'font-bold' : ''}`} onClick={toggleMenu}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <Breadcrumbs notFound={notFound} />
        {children}
      </main>

      <footer className="bg-gray-100 py-4">
        <div className="container mx-auto px-4 text-center text-gray-600">
          © 2002 - {new Date().getFullYear()} People Scaled LLC. All rights reserved.
        </div>
      </footer>
    </div>
  )
}