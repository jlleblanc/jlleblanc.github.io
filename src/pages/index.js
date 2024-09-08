import Layout from '../components/Layout'
import Link from 'next/link'

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "[Your Name] - Software Engineering Leadership",
    "description": "I help startups deliver today and plan for tomorrow. Expertise in Next.js, Supabase, OpenAI, and Anthropic.",
    "url": "https://www.yourwebsite.com",
    "sameAs": [
      "https://www.linkedin.com/in/yourprofile",
      "https://github.com/yourgithub"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "[Your City]",
      "addressRegion": "[Your State]",
      "addressCountry": "[Your Country]"
    },
    "founder": {
      "@type": "Person",
      "name": "[Your Name]"
    }
  };

  return (
    <Layout
      title="Software Engineering Leadership at Human Scale"
      description="I help startups deliver today and plan for tomorrow. Expertise in Next.js, Supabase, OpenAI, and Anthropic."
      canonicalUrl="https://www.yourwebsite.com"
      jsonLd={jsonLd}
    >
      <h1 className="text-4xl font-bold mb-4">Software Engineering Leadership at Human Scale</h1>
      <h2 className="text-2xl mb-8">I help startups deliver today and plan for tomorrow</h2>
      <p className="mb-8">
        Hi, I&apos;m [Your Name]. I&apos;m a software engineering leader who works closely with startups to build great products. I bring years of experience to help your team move fast and plan for growth.
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
