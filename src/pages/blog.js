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
        "headline": "Always pick #1 first",
        "url": `/blog/always-pick-number-one-first`,
        "abstract": "You have less time than you think. Always pick a proven winner first!",
        "author": {
          "@type": "Person",
          "name": siteConfig.name
        }
      },
      {
        "@type": "BlogPosting",
        "headline": "Don't automate yourself",
        "url": `https://www.linkedin.com/pulse/dont-automate-yourself-joe-leblanc/`,
        "abstract": "Automation is essential for scaling. But the one thing you should not automate is yourself.",
        "author": {
          "@type": "Person",
          "name": siteConfig.name
        }
      },
      {
        "@type": "BlogPosting",
        "headline": "An office won't develop your career",
        "url": `https://www.linkedin.com/pulse/office-wont-develop-your-career-joe-leblanc/`,
        "abstract": "Offices won't magically grow your career. Here's what will.",
        "author": {
          "@type": "Person",
          "name": siteConfig.name
        }
      },
      {
        "@type": "BlogPosting",
        "headline": "Rethinking Hackathons: 7 affordable alternatives for team learning and development",
        "url": `https://emhub.substack.com/p/rethinking-hackathons-7-affordable`,
        "abstract": "Hackathons drain time and resources without providing value. Try these low-cost alternatives instead.",
        "author": {
          "@type": "Person",
          "name": siteConfig.name
        }
      },
    ]
  };

  return (
    <Layout
      title="Blog - Insights on Software Engineering Leadership"
      description="Tips, insights, and thoughts on software engineering, startup challenges, and tech leadership using Next.js, Supabase, OpenAI, and Anthropic."
      canonicalUrl={`${siteConfig.siteUrl}/blog`}
      jsonLd={jsonLd}
    >
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-xl font-bold mb-4">Select blog posts</h2>
        <div className="mb-8 mt-8">
          {jsonLd.blogPost.map((post, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-lg font-semibold mb-2 text-blue-500">
                <Link href={post.url}>{post.headline}</Link>
              </h3>
              <p>{post.abstract}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}