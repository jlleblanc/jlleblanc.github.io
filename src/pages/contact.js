import { useState } from 'react'
import Layout from '../components/Layout'
import siteConfig from '../config/siteConfig'

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
      description="Get in touch to discuss how we can work together to make your startup's software dreams a reality."
      canonicalUrl={`${siteConfig.siteUrl}/contact`}
      jsonLd={jsonLd}
    >
      <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
      <form onSubmit={handleSubmit} className="max-w-md">
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block mb-2">Message</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded"
            rows="4"
          ></textarea>
        </div>
        <button type="submit" className="bg-blue-500 text-white font-bold py-2 px-4 rounded">
          Send Message
        </button>
      </form>
    </Layout>
  )
}