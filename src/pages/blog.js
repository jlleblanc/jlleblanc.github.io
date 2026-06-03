import Layout from '../components/Layout'
import Link from 'next/link'
import FeedPost from '../components/FeedPost'
import siteConfig from '../config/siteConfig'
import { ExternalLink } from 'lucide-react'

export default function Blog() {
  const posts = [
    {
      headline: 'Always pick #1 first',
      url: '/blog/always-pick-number-one-first',
      abstract: 'You have less time than you think. Always pick a proven winner first!',
      external: false,
    },
    {
      headline: "Don't automate yourself",
      url: 'https://www.linkedin.com/pulse/dont-automate-yourself-joe-leblanc/',
      abstract: 'Automation is essential for scaling. But the one thing you should not automate is yourself.',
      external: true,
    },
    {
      headline: "An office won't develop your career",
      url: 'https://www.linkedin.com/pulse/office-wont-develop-your-career-joe-leblanc/',
      abstract: "Offices won't magically grow your career. Here's what will.",
      external: true,
    },
    {
      headline: 'Rethinking Hackathons: 7 affordable alternatives',
      url: 'https://emhub.substack.com/p/rethinking-hackathons-7-affordable',
      abstract: 'Hackathons drain time and resources without providing value. Try these low-cost alternatives instead.',
      external: true,
    },
  ]

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    blogPost: posts.map((post) => ({
      '@type': 'BlogPosting',
      headline: post.headline,
      url: post.external ? post.url : `${siteConfig.siteUrl}${post.url}`,
      abstract: post.abstract,
      author: { '@type': 'Person', name: siteConfig.name },
    })),
  }

  return (
    <Layout
      title="Blog"
      description="Tips, insights, and thoughts on software engineering, startup challenges, and tech leadership."
      canonicalUrl={`${siteConfig.siteUrl}/blog`}
      jsonLd={jsonLd}
      feedTitle="Blog"
    >
      {posts.map((post) => (
        <FeedPost key={post.url} label="Article">
          <h3 className="text-[17px] font-bold text-slate-900 dark:text-white mb-1">
            {post.external ? (
              <a
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {post.headline}
              </a>
            ) : (
              <Link href={post.url} className="hover:underline">
                {post.headline}
              </Link>
            )}
          </h3>
          <p className="text-[15px] text-slate-600 dark:text-slate-400 leading-relaxed">
            {post.abstract}
          </p>
          <div className="mt-3">
            {post.external ? (
              <a
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-lime-700 dark:text-lime-500 hover:underline"
              >
                Read on {post.url.includes('linkedin') ? 'LinkedIn' : 'Substack'}
                <ExternalLink size={14} />
              </a>
            ) : (
              <Link
                href={post.url}
                className="text-sm font-medium text-lime-700 dark:text-lime-500 hover:underline"
              >
                Read more →
              </Link>
            )}
          </div>
        </FeedPost>
      ))}
    </Layout>
  )
}
