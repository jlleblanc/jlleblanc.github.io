import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Menu, X, Home, Briefcase, BookOpen, Mail, Rss } from 'lucide-react';
import siteConfig from '../config/siteConfig';

const AVATAR_URL = 'https://github.com/jlleblanc.png';

const navItems = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/experience', label: 'Experience', icon: Briefcase },
  { href: '/blog', label: 'Blog', icon: BookOpen },
  { href: '/contact', label: 'Contact', icon: Mail },
];

function NavLink({ item, active, onClick }) {
  const Icon = item.icon;
  return (
    <Link
      href={item.href}
      onClick={onClick}
      className={`flex items-center gap-4 rounded-full px-4 py-3 text-lg font-medium transition-colors ${
        active
          ? 'font-bold text-slate-900 dark:text-white'
          : 'text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-900'
      }`}
    >
      <Icon size={26} strokeWidth={active ? 2.5 : 2} />
      <span className="hidden xl:inline">{item.label}</span>
    </Link>
  );
}

function ProfileCard() {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 dark:border-slate-800 dark:bg-slate-900">
      <div className="h-16 bg-gradient-to-r from-lime-600 to-lime-800" />
      <div className="relative px-4 pb-4">
        <img
          src={AVATAR_URL}
          alt={siteConfig.name}
          className="-mt-8 mb-3 h-16 w-16 rounded-full border-4 border-slate-100 dark:border-slate-900"
        />
        <h2 className="text-lg font-bold text-slate-900 dark:text-white">{siteConfig.name}</h2>
        <p className="text-sm text-slate-500 dark:text-slate-400">@jlleblanc</p>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
          Strategic software development &amp; technical leadership.
        </p>
        <div className="mt-3 flex gap-4 text-sm">
          <span>
            <strong className="text-slate-900 dark:text-white">20+</strong>{' '}
            <span className="text-slate-500">yrs exp</span>
          </span>
          <span>
            <strong className="text-slate-900 dark:text-white">Brunch</strong>{' '}
            <span className="text-slate-500">creator</span>
          </span>
        </div>
      </div>
    </div>
  );
}

function RightSidebar() {
  return (
    <aside className="hidden lg:block w-[350px] shrink-0 px-4 py-2">
      <div className="sticky top-2 space-y-4">
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-black">
          <h3 className="px-4 py-3 text-xl font-bold text-slate-900 dark:text-white">Subscribe</h3>
          <div className="px-4 pb-4">
            <p className="mb-3 text-sm text-slate-600 dark:text-slate-400">
              The Brunch Buffet — software strategy, Brunch updates, and building smarter tools.
            </p>
            <form
              action="https://buttondown.com/api/emails/embed-subscribe/jlleblanc"
              method="post"
              target="popupwindow"
              className="space-y-2"
            >
              <input
                type="email"
                name="email"
                className="w-full rounded-full border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-lime-500 dark:border-slate-700 dark:bg-slate-900"
                placeholder="you@example.com"
                required
              />
              <button
                type="submit"
                className="w-full rounded-full bg-lime-700 py-2.5 text-sm font-bold text-white hover:bg-lime-800 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-black">
          <h3 className="px-4 py-3 text-xl font-bold text-slate-900 dark:text-white">Links</h3>
          <ul className="px-2 pb-2">
            {[
              { href: 'https://brunch-buffet.onrender.com', label: 'Brunch demo', external: true },
              { href: siteConfig.socialLinks.github, label: 'GitHub', external: true },
              { href: siteConfig.socialLinks.linkedin, label: 'LinkedIn', external: true },
            ].map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                  className="block rounded-lg px-3 py-2.5 text-sm hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
                >
                  <span className="font-medium text-slate-900 dark:text-white">{link.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-black">
          <a
            href="mailto:contact@jlleblanc.com?subject=Let's work together"
            className="flex w-full items-center justify-center gap-2 rounded-full bg-lime-700 py-3 text-sm font-bold text-white hover:bg-lime-800 transition-colors"
          >
            <Mail size={18} />
            Get in touch
          </a>
        </div>

        <p className="px-2 text-xs text-slate-500">
          © 2002 – {new Date().getFullYear()} People Scaled LLC
        </p>
      </div>
    </aside>
  );
}

export default function MicroblogShell({
  children,
  title,
  description,
  canonicalUrl,
  jsonLd,
  feedTitle = 'Home',
  showCompose = false,
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const pageTitle = title ? `${title} | ${siteConfig.name}` : `${siteConfig.name} (@jlleblanc)`;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-black dark:text-slate-200 font-sans selection:bg-lime-500/30">
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={description || siteConfig.description} />
        {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {jsonLd && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
        )}
      </Head>

      <div className="mx-auto flex max-w-[1280px] justify-center">
        {/* Left sidebar */}
        <header className="hidden sm:flex w-[68px] xl:w-[275px] shrink-0 flex-col px-2 py-2">
          <div className="sticky top-2 flex flex-col gap-1">
            <Link href="/" className="mb-2 flex h-[52px] w-[52px] items-center justify-center rounded-full p-3 hover:bg-slate-100 dark:hover:bg-slate-900 xl:w-auto xl:justify-start xl:px-4">
              <span className="text-xl font-bold tracking-tight text-lime-700 dark:text-lime-500 xl:text-2xl">
                <span className="xl:hidden">JL</span>
                <span className="hidden xl:inline">Joe LeBlanc</span>
              </span>
            </Link>

            <nav className="flex flex-col">
              {navItems.map((item) => (
                <NavLink
                  key={item.href}
                  item={item}
                  active={router.pathname === item.href}
                />
              ))}
            </nav>

            {showCompose ? (
              <Link
                href="/contact"
                className="mt-4 flex h-[52px] w-[52px] items-center justify-center rounded-full bg-lime-700 text-white font-bold hover:bg-lime-800 transition-colors xl:w-full xl:py-3.5"
              >
                <Mail size={24} className="xl:hidden" />
                <span className="hidden xl:inline">Get Started</span>
              </Link>
            ) : (
              <Link
                href="mailto:contact@jlleblanc.com"
                className="mt-4 hidden xl:flex items-center justify-center rounded-full bg-lime-700 py-3.5 font-bold text-white hover:bg-lime-800 transition-colors"
              >
                Contact
              </Link>
            )}

            <div className="mt-4 hidden xl:block">
              <ProfileCard />
            </div>
          </div>
        </header>

        {/* Center feed */}
        <main className="w-full max-w-[600px] min-h-screen border-x border-slate-200 dark:border-slate-800 bg-white dark:bg-black sm:max-w-[600px]">
          {/* Mobile top bar */}
          <div className="sticky top-0 z-40 flex items-center justify-between border-b border-slate-200 bg-white/90 px-4 py-3 backdrop-blur-md dark:border-slate-800 dark:bg-black/90 sm:hidden">
            <Link href="/" className="text-lg font-bold text-lime-700 dark:text-lime-500">
              Joe LeBlanc
            </Link>
            <button
              type="button"
              className="rounded-full p-2 text-slate-900 dark:text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="border-b border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-black sm:hidden">
              <nav className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <NavLink
                    key={item.href}
                    item={item}
                    active={router.pathname === item.href}
                    onClick={() => setIsMenuOpen(false)}
                  />
                ))}
              </nav>
            </div>
          )}

          {/* Feed header */}
          <div className="sticky top-0 z-30 hidden border-b border-slate-200 bg-white/85 px-4 py-3 backdrop-blur-md dark:border-slate-800 dark:bg-black/85 sm:block">
            <h1 className="text-xl font-bold text-slate-900 dark:text-white">{feedTitle}</h1>
          </div>

          {children}
        </main>

        <RightSidebar />
      </div>

      {/* Mobile bottom nav */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 flex justify-around border-t border-slate-200 bg-white/95 py-2 backdrop-blur-md dark:border-slate-800 dark:bg-black/95 sm:hidden">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = router.pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center gap-0.5 p-2 ${
                active ? 'text-lime-700 dark:text-lime-500' : 'text-slate-500'
              }`}
            >
              <Icon size={22} strokeWidth={active ? 2.5 : 2} />
              <span className="text-[10px] font-medium">{item.label}</span>
            </Link>
          );
        })}
        <a
          href="https://buttondown.com/api/emails/embed-subscribe/jlleblanc"
          className="flex flex-col items-center gap-0.5 p-2 text-slate-500"
          aria-label="Newsletter"
        >
          <Rss size={22} />
          <span className="text-[10px] font-medium">Subscribe</span>
        </a>
      </nav>

      <div className="h-16 sm:hidden" aria-hidden />
    </div>
  );
}
