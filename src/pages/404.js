import Layout from '../components/Layout'
import FeedPost from '../components/FeedPost'
import Link from 'next/link'
import siteConfig from '../config/siteConfig'

export default function Custom404() {
  return (
    <Layout
      title="404"
      description="The page you're looking for doesn't exist."
      canonicalUrl={`${siteConfig.siteUrl}/404`}
      feedTitle="Not found"
    >
      <FeedPost label="Error 404">
        <p className="text-[15px] text-slate-800 dark:text-slate-200 mb-4">
          This page doesn&apos;t exist — it may have been moved or deleted.
        </p>
        <div className="flex flex-wrap gap-3 text-sm font-medium">
          <Link href="/" className="text-lime-700 dark:text-lime-500 hover:underline">
            Home
          </Link>
          <Link href="/blog" className="text-lime-700 dark:text-lime-500 hover:underline">
            Blog
          </Link>
          <Link href="/contact" className="text-lime-700 dark:text-lime-500 hover:underline">
            Contact
          </Link>
        </div>
      </FeedPost>
    </Layout>
  )
}
