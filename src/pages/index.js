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
      <h2 className="text-2xl mb-8">{siteConfig.description}</h2>
      <p className="mb-8">
        Hi, I&apos;m {siteConfig.name}. I&apos;m a software engineering leader who works closely with startups to build great products. I bring years of experience to help your team move fast and plan for growth.
      </p>
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