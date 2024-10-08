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
      <h1 className="text-4xl font-bold mb-4">People Scaled</h1>
      <h2 className="text-3xl mb-8">Software Engineering Leadership</h2>
      <div className="flex flex-col sm:flex-row items-center sm:items-center mb-8">
        <img src="https://github.com/jlleblanc.png" alt="Joe" className="w-36 h-36 rounded-full mb-4 sm:mb-0 sm:mr-8 border border-gray-200 shadow-sm" />
        <div className="text-2xl sm:text-left sm:self-center">
          <p>
            Hi, I&apos;m Joe! I&apos;m a hands-on software engineering leader of products, teams, and startups.
          </p>
          <p className="mt-3">

          </p>
        </div>
      </div>
      <h3 className="text-2xl font-semibold mb-6">Ship fast today. Scale for tomorrow.</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h4 className="text-xl font-semibold mb-2">Strategic Technical Planning</h4>
          <p>Choose technology serving short-term needs and long-term goals.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h4 className="text-xl font-semibold mb-2">Judiciously Applied Technology</h4>
          <p>Use generative AI, cloud platforms, and new APIs when they serve your needs.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h4 className="text-xl font-semibold mb-2">Leadership Development</h4>
          <p>Nurture your team&apos;s potential and create a culture of continuous improvement.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h4 className="text-xl font-semibold mb-2">Scalable Architecture</h4>
          <p>Build systems that grow with your business, from MVP to market leader.</p>
        </div>
      </div>
      <div className="text-center">
        <Link href="/services" className="bg-blue-500 text-white font-bold py-3 px-6 rounded-full text-lg hover:bg-blue-600 transition duration-300">
          Explore My Services
        </Link>
      </div>
    </Layout>
  )
}