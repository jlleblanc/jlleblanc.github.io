import Layout from '../components/Layout'
import Link from 'next/link'
import siteConfig from '../config/siteConfig'

export default function Blog() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "blogPost": [
      {
        "@type": "BlogPosting",
        "headline": "5 Tips for Scaling Your Startup's Tech Stack",
        "url": `${siteConfig.siteUrl}/blog/scaling-your-startup`,
        "author": {
          "@type": "Person",
          "name": siteConfig.name
        }
      },
      // Add more blog posts here
    ]
  };

  return (
    <Layout
      title="Blog - Insights on Software Engineering Leadership"
      description="Tips, insights, and thoughts on software engineering, startup challenges, and tech leadership using Next.js, Supabase, OpenAI, and Anthropic."
      canonicalUrl={`${siteConfig.siteUrl}/blog`}
      jsonLd={jsonLd}
    >
      <h1 className="text-3xl font-bold mb-4">Blog</h1>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">
          <Link href="/blog/scaling-your-startup">
            5 Tips for Scaling Your Startup&apos;s Tech Stack
          </Link>
        </h2>
        <p>Learn how to prepare your technology for rapid growth without breaking the bank, using powerful tools like Next.js and Supabase.</p>
      </div>
      {/* Add more blog post previews here */}
    </Layout>
  )
}