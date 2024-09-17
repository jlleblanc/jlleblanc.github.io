import Layout from '../components/Layout'
import Link from 'next/link'
import siteConfig from '../config/siteConfig'

export default function Custom404() {
  return (
    <Layout
      title="404 - Page Not Found"
      description="The page you&apos;re looking for doesn&apos;t exist. Let&apos;s get you back on track."
      canonicalUrl={`${siteConfig.siteUrl}/404`}
      notFound={true}
    >
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="mb-4">Oops! The page you&apos;re looking for doesn&apos;t exist. It might have been moved or deleted.</p>
      <p className="mb-4">Let&apos;s get you back on track:</p>
      <ul className="list-disc list-inside mb-4">
        <li><Link href="/">Go to Homepage</Link></li>
        <li><Link href="/services">Check out our Services</Link></li>
        <li><Link href="/contact">Contact Us</Link></li>
      </ul>
    </Layout>
  )
}