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
      <div className="container mx-auto px-4 max-w-3xl">
      <h2 className="text-3xl font-bold mb-16 mt-8">{siteConfig.title}</h2>
      <div className="flex flex-col sm:flex-row items-center sm:items-center mb-8 mt-8">
          <img src="https://github.com/jlleblanc.png" alt="Joe" className="w-36 h-36 rounded-full mb-4 sm:mb-0 sm:mr-8 border border-gray-200 shadow-sm" />
          <div className="text-xl sm:text-left sm:self-center">
            <p>
              I&apos;m a hands-on software engineering leader of products, teams, and startups.
            </p>
            <p className="mt-4">
              Over 20 years, I&apos;ve helped companies create payment solutions, onboard new customers, and keep them subscribed.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-8 mt-12">
          {/* <div>
            <h3 className="text-xl font-semibold mb-2">Architectural Expertise</h3>
            <p>I keep track of the cookies, the databases, and servers, while you keep your paying customers happy.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Author</h3>
            <p>Over a dozen books and video series authored, most recently <Link className="text-blue-500" href="https://www.linkedin.com/learning/supabase-essential-training/developing-application-backends-using-supabase">Supabase Essential Training</Link> on LinkedIn Learning.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Leadership Development</h3>
            <p>Nurture your team&apos;s potential and create a culture of continuous improvement.</p>
          </div> */}
        </div>
      </div>
      <div className="text-center">
        <Link href="/services" className="bg-blue-500 text-white font-bold py-3 px-6 rounded-full text-lg hover:bg-blue-600 transition duration-300">
          Explore My Services
        </Link>
      </div>
    </Layout>
  )
}