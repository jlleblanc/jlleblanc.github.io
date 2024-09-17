import { useState } from 'react'
import Layout from '../components/Layout'
import siteConfig from '../config/siteConfig'
import Link from 'next/link';

export default function Contact() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": `Contact ${siteConfig.name} - Software Engineering Leadership`,
    "description": "Get in touch to discuss how we can work together to make your startup's software dreams a reality."
  };

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log({ name, email, message })
  }

  return (
    <Layout
      title="Contact"
      description="Get in touch to start delivering now and planning for the future!"
      canonicalUrl={`${siteConfig.siteUrl}/contact`}
      jsonLd={jsonLd}
    >
      <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
      <p className="mb-4">Get in touch to start delivering now and planning for the future!</p>
      <p>
        <Link href="mailto:contact@jlleblanc.com?subject=I'm ready for delivery now and planning for the future!">
        contact@jlleblanc.com
        </Link>
      </p>
      <p>

      </p>
    </Layout>
  )
}