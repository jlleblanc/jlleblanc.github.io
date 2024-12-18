import Layout from '../components/Layout'
import siteConfig from '../config/siteConfig'
import Link from 'next/link';

export default function Contact() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": `Contact ${siteConfig.name} - Software Engineering Leadership`,
    "description": "Get in touch to discuss how we can make billing and support work for your startup1"
  };

  return (
    <Layout
      title="Contact"
      description="Get in touch to discuss how we can make billing and support work for your startup!"
      canonicalUrl={`${siteConfig.siteUrl}/contact`}
      jsonLd={jsonLd}
    >
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-bold mb-4">Contact me</h2>
        <p className="mb-4">Get in touch to discuss how we can make billing and support work for your startup!</p>
        <p>
          <Link className="text-blue-500" href="mailto:contact@jlleblanc.com?subject=I'm ready to bill my customers!">
          contact@jlleblanc.com
          </Link>
        </p>
      </div>
    </Layout>
  )
}