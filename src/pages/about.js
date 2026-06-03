import Layout from '../components/Layout'
import FeedPost from '../components/FeedPost'
import siteConfig from '../config/siteConfig'
import Link from 'next/link'

export default function About() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    mainEntity: {
      '@type': 'Person',
      name: siteConfig.name,
      jobTitle: 'Software Engineering Leader',
      description: siteConfig.description,
      sameAs: [siteConfig.socialLinks.linkedin, siteConfig.socialLinks.github],
    },
  }

  return (
    <Layout
      title="About"
      description={`Learn more about ${siteConfig.name}, a software engineering leader helping startups build great products.`}
      canonicalUrl={`${siteConfig.siteUrl}/about`}
      jsonLd={jsonLd}
      feedTitle="About"
    >
      <FeedPost label="Bio" pinned>
        <p className="text-[15px] leading-relaxed text-slate-800 dark:text-slate-200 mb-3">
          Hi, I&apos;m {siteConfig.name}. I&apos;m a software engineering leader with a passion for helping startups build great products and scale efficiently.
        </p>
        <p className="text-[15px] leading-relaxed text-slate-800 dark:text-slate-200 mb-3">
          With years of experience in the tech industry, I&apos;ve developed a deep understanding of the challenges that fast-growing companies face. My expertise spans Next.js, Supabase, OpenAI, and Anthropic.
        </p>
        <p className="text-[15px] leading-relaxed text-slate-800 dark:text-slate-200">
          I believe in a human-scaled approach to software development — solutions that align with the needs of both the development team and end-users.
        </p>
      </FeedPost>

      <FeedPost label="Approach">
        <ul className="text-[15px] text-slate-800 dark:text-slate-200 space-y-2 list-none p-0 m-0">
          <li>→ Scalable and maintainable code architecture</li>
          <li>→ AI technologies for complex problems</li>
          <li>→ Agile methodologies adapted to each team</li>
          <li>→ Continuous learning and emerging tech</li>
        </ul>
      </FeedPost>

      <FeedPost label="Connect">
        <p className="text-[15px] text-slate-800 dark:text-slate-200 mb-3">
          Always excited to take on new challenges. If you need a leader who delivers today while planning for tomorrow, let&apos;s talk.
        </p>
        <a
          href={`mailto:${siteConfig.email}`}
          className="text-[15px] font-medium text-lime-700 dark:text-lime-500 hover:underline"
        >
          {siteConfig.email}
        </a>
        <span className="text-slate-400 mx-2">·</span>
        <a
          href={siteConfig.socialLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[15px] font-medium text-lime-700 dark:text-lime-500 hover:underline"
        >
          LinkedIn
        </a>
        <div className="mt-3">
          <Link href="/contact" className="text-sm font-medium text-lime-700 dark:text-lime-500 hover:underline">
            Contact page →
          </Link>
        </div>
      </FeedPost>
    </Layout>
  )
}
