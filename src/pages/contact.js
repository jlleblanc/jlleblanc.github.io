import Layout from '../components/Layout'
import FeedPost from '../components/FeedPost'
import siteConfig from '../config/siteConfig'
import { Mail } from 'lucide-react'

export default function Contact() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: `Contact ${siteConfig.name}`,
    description: 'Get in touch to discuss software engineering leadership and your project.',
  }

  return (
    <Layout
      title="Contact"
      description="Get in touch to discuss how we can work together."
      canonicalUrl={`${siteConfig.siteUrl}/contact`}
      jsonLd={jsonLd}
      feedTitle="Contact"
    >
      <FeedPost label="DM">
        <p className="text-[15px] leading-relaxed text-slate-800 dark:text-slate-200 mb-4">
          Let&apos;s build together! Send me an email and I&apos;ll get back to you within 24 hours.
        </p>
        <a
          href="mailto:contact@jlleblanc.com?subject=Let's work together"
          className="inline-flex items-center gap-2 rounded-full bg-lime-700 px-6 py-3 text-sm font-bold text-white hover:bg-lime-800 transition-colors"
        >
          <Mail size={18} />
          contact@jlleblanc.com
        </a>
      </FeedPost>
    </Layout>
  )
}
