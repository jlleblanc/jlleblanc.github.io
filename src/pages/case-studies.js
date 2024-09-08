import Layout from '../components/Layout'

export default function CaseStudies() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "Article",
          "position": 1,
          "url": "https://www.yourwebsite.com/case-studies#startup-x",
          "name": "Startup X: Scaling to 1 Million Users"
        },
        // Add more case studies here
      ]
    }
  };

  return (
    <Layout
      title="Case Studies - Software Engineering Success Stories"
      description="Real-world examples of how I've helped startups overcome challenges and achieve success using Next.js, Supabase, OpenAI, and Anthropic."
      canonicalUrl="https://www.yourwebsite.com/case-studies"
      jsonLd={jsonLd}
    >
      <h1 className="text-3xl font-bold mb-4">Case Studies</h1>
      <div id="startup-x" className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Startup X: Scaling to 1 Million Users</h2>
        <p className="mb-2"><strong>Challenge:</strong> Startup X was facing performance issues as they rapidly grew to 1 million users.</p>
        <p className="mb-2"><strong>Solution:</strong> I implemented a new database strategy using Supabase and optimized their Next.js frontend.</p>
        <p><strong>Result:</strong> 50% improvement in load times and seamless scaling to handle peak traffic.</p>
      </div>
      {/* Add 2-3 more case studies here */}
    </Layout>
  )
}