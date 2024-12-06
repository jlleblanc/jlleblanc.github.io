import Layout from '../components/Layout'
import Link from 'next/link'
import siteConfig from '../config/siteConfig'

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": `${siteConfig.name} - Software Engineering Leadership`,
    "description": siteConfig.description,
    "url": siteConfig.siteUrl,
    "sameAs": [
      siteConfig.socialLinks.linkedin,
      siteConfig.socialLinks.github
    ],
    "founder": {
      "@type": "Person",
      "name": siteConfig.name
    }
  };

  return (
    <Layout
      title={siteConfig.title}
      description={siteConfig.description}
      canonicalUrl={siteConfig.siteUrl}
      jsonLd={jsonLd}
    >
      <div className="container mx-auto px-4 max-w-3xl">
      <h2 className="text-3xl font-bold mt-8">{siteConfig.title}</h2>
      <div className="flex flex-col sm:flex-row items-center sm:items-center mt-8">
          <img src="https://github.com/jlleblanc.png" alt="Joe" className="w-36 h-36 rounded-full mb-4 sm:mb-0 sm:mr-8 border border-gray-200 shadow-sm" />
          <div className="text-xl sm:text-left sm:self-center">
            <p>
              I&apos;m a hands-on software engineering leader of products, teams, and startups.
            </p>
            <p className="mt-4">
              Beyond product engineering and management, I&apos;ve helped companies create payment solutions, onboard new customers, and keep them subscribed.
            </p>
          </div>
        </div>
      </div>
      <div className="text-center mt-12">
        <Link href="/contact" className="border-2 border-emerald-800 text-emerald-800 text-grey-900 font-bold py-3 px-6 rounded-full text-xl hover:border-teal-500 transition duration-300">
          Get In Touch
        </Link>
      </div>
    </Layout>
  )
}