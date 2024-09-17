import Layout from '../components/Layout'
import FAQ from '../components/FAQ'
import siteConfig from '../config/siteConfig'

export default function Services() {
  const faqs = [
    {
      question: "How can you help my startup scale?",
      answer: "Scaling means more than just efficient algorithms and cloud platforms. You need planning, process improvement, and (most importantly) team leadership. Without these, your team will burnout. I can help you get unstuck today, while avoiding burnout in the future."
    },
    {
      question: "What technologies do you specialize in?",
      answer: "I specialize in Next.js, Supabase, Vercel, OpenAI, and Anthropic. But I take care to use the right tools for the job."
    },
    {
      question: "Should I just use AI for everything?",
      answer: "No. If a hard-coded algorithm will work better than using an LLM, don't burn your tokens: let's build it right. I can help!"
    },
  ]

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Software Engineering Leadership",
    "provider": {
      "@type": "Person",
      "name": siteConfig.name
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Software Engineering Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Software Planning for Startups"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Engineering Team Leadership"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Process Improvement for Fast-Growing Teams"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI Integrations"
          }
        }
      ]
    }
  };

  return (
    <Layout
      title="Services - Software Engineering Leadership"
      description="Expert services in software planning, team leadership, process improvement, and AI integration for startups using Next.js, Supabase, OpenAI, and Anthropic."
      canonicalUrl={`${siteConfig.siteUrl}/services`}
      jsonLd={jsonLd}
    >
      <h1 className="text-3xl font-bold mb-4">Services</h1>
      <h2 className="text-2xl font-bold mb-4">Fractional CTO, at your service</h2>
      <p className="mb-4">I&apos;m a seasoned software engineering leader, available for a fraction of the cost.</p>
      <ul className="mb-8">
        <li className="mb-4">
          <h3 className="text-xl font-semibold">Software Planning for Startups</h3>
          <p>Map out your strategy, ensuring you&apos;re building the right thing now, while giving yourself room to grow later.</p>
        </li>
        <li className="mb-4">
          <h3 className="text-xl font-semibold">Engineering Team Leadership</h3>
          <p>Guide your team to success, creating a culture of continuous improvement while using new tools and practices.</p>
        </li>
        <li className="mb-4">
          <h3 className="text-xl font-semibold">Process Improvement for Fast-Growing Teams</h3>
          <p>Optimize your workflows, helping your team move faster without sacrificing quality. Release with confidence. Keep feedback loops short.</p>
        </li>
        <li className="mb-4">
          <h3 className="text-xl font-semibold">AI Integrations</h3>
          <p>Use generative AI APIs like OpenAI and Anthropic, while keeping your monthly spend under control.</p>
        </li>
      </ul>
      <FAQ faqs={faqs} />
    </Layout>
  )
}