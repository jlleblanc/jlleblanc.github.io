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
      <h1 className="text-4xl font-bold mb-4">{siteConfig.title}</h1>
      <h2 className="text-3xl mb-8">Delivering today and planning for tomorrow.</h2>
      <div className="flex flex-col sm:flex-row items-center sm:items-center mb-8">
        <img src="https://github.com/jlleblanc.png" alt="Joe" className="w-36 h-36 rounded-full mb-4 sm:mb-0 sm:mr-8 border border-gray-200 shadow-sm" />
        <div className="text-xl sm:text-left sm:self-center">
          <p>
            Hi, I&apos;m Joe! I&apos;m a software engineering leader helping startups build great products and services.
            I bring years of experience to help you move fast now, while planning ahead for the future.
          </p>
          <p className="mt-3">
            Whether you&apos;re an entrepreneur seeking technical direction, an experienced developer moving into leadership, or an early career software engineer, I'm here to help.
          </p>
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-4">Key Skills:</h3>
      <ul className="list-disc list-inside mb-8">
        <li>Next.js development</li>
        <li>Supabase integration</li>
        <li>OpenAI implementation</li>
        <li>Anthropic AI solutions</li>
      </ul>
      <Link href="/contact" className="bg-blue-500 text-white font-bold py-2 px-4 rounded">
        Let&apos;s Talk
      </Link>
    </Layout>
  )
}