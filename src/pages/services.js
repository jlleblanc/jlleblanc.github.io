import Layout from '../components/Layout'
import FAQ from '../components/FAQ'

export default function Services() {
  const faqs = [
    {
      question: "What technologies do you specialize in?",
      answer: "I specialize in Next.js, Supabase, OpenAI, and Anthropic technologies, helping startups build scalable and innovative solutions."
    },
    {
      question: "How can you help my startup scale?",
      answer: "I offer services in software planning, team leadership, process improvement, and AI integration, all tailored to help your startup grow efficiently and effectively."
    },
    // Add more FAQs as needed
  ]

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Software Engineering Leadership",
    "provider": {
      "@type": "Person",
      "name": "[Your Name]"
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
            "name": "AI Integration for Startup Products"
          }
        }
      ]
    }
  };

  return (
    <Layout
      title="Services - Software Engineering Leadership"
      description="Expert services in software planning, team leadership, process improvement, and AI integration for startups using Next.js, Supabase, OpenAI, and Anthropic."
      canonicalUrl="https://www.yourwebsite.com/services"
      jsonLd={jsonLd}
    >
      <h1 className="text-3xl font-bold mb-4">Services</h1>
      <ul className="mb-8">
        <li className="mb-4">
          <h3 className="text-xl font-semibold">Software Planning for Startups</h3>
          <p>I help you map out your tech strategy, ensuring you&apos;re building the right things in the right order with technologies like Next.js and Supabase.</p>
        </li>
        <li className="mb-4">
          <h3 className="text-xl font-semibold">Engineering Team Leadership</h3>
          <p>I guide your team to success, fostering a culture of innovation and continuous improvement while leveraging cutting-edge tools and practices.</p>
        </li>
        <li className="mb-4">
          <h3 className="text-xl font-semibold">Process Improvement for Fast-Growing Teams</h3>
          <p>I optimize your workflows, helping your team move faster without sacrificing quality, using efficient development practices and tools.</p>
        </li>
        <li className="mb-4">
          <h3 className="text-xl font-semibold">AI Integration for Startup Products</h3>
          <p>I help you leverage cutting-edge AI technologies like OpenAI and Anthropic to give your product a competitive edge in the market.</p>
        </li>
      </ul>
      <FAQ faqs={faqs} />
    </Layout>
  )
}
