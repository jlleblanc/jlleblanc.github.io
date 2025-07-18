import Layout from '../components/Layout'
import siteConfig from '../config/siteConfig'

export default function About() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Offer",
    "mainEntity": {
      "@type": "Offer",
      "name": "Pick My Brain",
      "description": "Want to chat about your career, your startup, or just want to bounce ideas off of me? Pick My Brain is the service for you!",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": 20,
        "priceCurrency": "USD"
      }
    }
  };

  return (
    <Layout
      title="Pick My Brain"
      description={`Learn more about Pick My Brain, a service where we can chat about your career, your startup, or just bounce ideas around!`}
      canonicalUrl={`${siteConfig.siteUrl}/pick-my-brain`}
      jsonLd={jsonLd}
    >
      <h1 className="text-3xl font-bold mb-4">Pick My Brain</h1>
      <div className="mb-8">
        <p className="mb-4">
          Pick My Brain is a service where we can chat about your career, your startup, or just bounce ideas around!
        </p>
        <p className="mb-4">
          In lieu of a fee, I am asking you donate to West Michigan Voices of Pride, a non-profit organization supporting a queer chorus I am a part of.
        </p>
        <p className="mb-4">
          Please make a donation of $20 or more <a href="https://wmgmchorus.ludus.com/donate.php" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">here</a>, then forward the receipt to <a href="mailto:contact@jlleblanc.com" className="text-blue-500 hover:underline">contact@jlleblanc.com</a>.
        </p>
        <p className="mb-4">
          I look forward to chatting with you!
        </p>
      </div>
    </Layout>
  )
}