import Layout from '../components/Layout'
import Link from 'next/link'
import siteConfig from '../config/siteConfig'

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": `${siteConfig.title}`,
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

      <div className="py-8 md:mt-20 mt-12">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-left md:text-center mb-6">Let&apos;s build together</h2>
          
          <div className="text-left md:text-center text-xl mb-12 text-lime-900 bg-neutral-50 p-8 rounded-lg shadow-md">
            <p className="mb-2">Tired of the old way of hiring a freelancer to build your app or website?</p>
            <p className="mb-2">The one where you pay hourly and hope they deliver?</p>
            <p className="mb-2">And you have no idea where the process is going?</p>
            <p className="font-bold text-xl">So am I. Let&apos;s change that!</p>
          </div>


          <div className="grid md:grid-cols-2 gap-8">
            {/* Old Way */}
            <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-red-400">
              <h3 className="text-2xl font-bold text-red-600 mb-6">The Old Way</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-red-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span>Static SOW and waterfall phases</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-red-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span>Disconnected process</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-red-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span>Long coding phases</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-red-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span>Hourly rate & hourly estimates</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-red-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span>Strictly what you ordered</span>
                </li>
              </ul>
            </div>

            {/* New Way */}
            <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-lime-500">
              <h3 className="text-2xl font-bold text-lime-700 mb-6">My Approach</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-lime-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Fluid roadmap with weekly sprints</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-lime-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Hands-on co-creation</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-lime-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Task-oriented execution</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-lime-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Tasks broken down weekly</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-lime-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Proactive, value-added approach</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link href="/contact" className="inline-block bg-lime-700 hover:bg-lime-800 text-white font-bold py-3 px-8 rounded-md text-lg transition duration-300">
              Let&apos;s Work Together
            </Link>
          </div>
        </div>
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
                <input type="submit" value="Subscribe" className="bg-lime-700 hover:bg-lime-800 text-white rounded-md p-2 px-4" />
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