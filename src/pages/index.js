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
      <h2 className="text-3xl font-bold mt-8">{siteConfig.title}</h2>
      <div className="flex flex-col sm:flex-row items-center sm:items-center mt-8">
          <img src="https://github.com/jlleblanc.png" alt="Joe" className="w-36 h-36 rounded-full mb-4 sm:mb-0 sm:mr-8 border border-gray-200 shadow-sm" />
          <div className="text-xl sm:text-left sm:self-center">
            <p>
              I&apos;m a hands-on software engineering leader of products, teams, and startups.
            </p>
            <p className="mt-4">
              Beyond product engineering and management, I&apos;ve helped companies create payment solutions, onboard new customers, and keep them subscribed.
            </p>
          </div>
        </div>
      </div>
      <div className="text-center mt-12">
        <Link href="/contact" className="border-2 border-lime-900 text-lime-900 text-lime-900 font-bold py-3 px-6 rounded-md text-xl hover:border-lime-700 hover:text-lime-700 transition duration-300">
          Get In Touch
        </Link>
      </div>
      <div className="md:mt-20 mt-12 container mx-auto px-4 max-w-3xl">
        <div className="flex flex-col md:flex-row md:items-start md:gap-8">
          <div className="md:flex-1">
            <h2 className="text-3xl font-bold">Subscribe to my newsletter</h2>
            <p className="text-lg mt-4">
              Code Like an Investor is a newsletter about choosing the right technology for your next startup or side project.
            </p>
          </div>

          <div className="mt-4 md:mt-0 md:flex-1">
            <form
              action="https://buttondown.com/api/emails/embed-subscribe/jlleblanc"
              method="post"
              target="popupwindow"
              onsubmit="window.open('https://buttondown.com/jlleblanc?tag=website', 'popupwindow')"
              className="embeddable-buttondown-form"
            >
              <label htmlFor="bd-email" className="text-lg sr-only">Enter your email</label>
              <div className="flex items-center">
                <input type="email" name="email" id="bd-email" className="border border-gray-200 rounded-md p-2 w-full" placeholder="Enter your email" />
              </div>
              <div className="flex items-center mt-2">
                <input type="submit" value="Subscribe" className="bg-lime-900 text-white rounded-md p-2 px-4" />
              </div>
              <p className="text-sm mt-2">
                <a href="https://buttondown.com/refer/jlleblanc" target="_blank" className="text-lime-900">Powered by Buttondown.</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  )
}