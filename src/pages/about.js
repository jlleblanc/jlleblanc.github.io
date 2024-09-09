import Layout from '../components/Layout'
import siteConfig from '../config/siteConfig'

export default function About() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "Person",
      "name": siteConfig.name,
      "jobTitle": "Software Engineering Leader",
      "description": siteConfig.description,
      "sameAs": [
        siteConfig.socialLinks.linkedin,
        siteConfig.socialLinks.github
      ]
    }
  };

  return (
    <Layout
      title="About Me"
      description={`Learn more about ${siteConfig.name}, a software engineering leader helping startups build great products.`}
      canonicalUrl={`${siteConfig.siteUrl}/about`}
      jsonLd={jsonLd}
    >
      <h1 className="text-3xl font-bold mb-4">About Me</h1>
      <div className="mb-8">
        <p className="mb-4">
          Hi, I&apos;m {siteConfig.name}. I&apos;m a software engineering leader with a passion for helping startups build great products and scale efficiently.
        </p>
        <p className="mb-4">
          With years of experience in the tech industry, I&apos;ve developed a deep understanding of the challenges that fast-growing companies face. My expertise spans across various technologies, with a particular focus on Next.js, Supabase, OpenAI, and Anthropic.
        </p>
        <p className="mb-4">
          I believe in a human-scaled approach to software development. This means creating solutions that are not only technologically advanced but also align with the human needs of both the development team and the end-users.
        </p>
        <h2 className="text-2xl font-semibold mb-2">My Approach</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Emphasis on scalable and maintainable code architecture</li>
          <li>Integration of cutting-edge AI technologies to solve complex problems</li>
          <li>Agile methodologies adapted to each team&apos;s unique needs</li>
          <li>Continuous learning and adaptation to emerging technologies</li>
        </ul>
        <h2 className="text-2xl font-semibold mb-2">Let&apos;s Connect</h2>
        <p className="mb-4">
          I&apos;m always excited to take on new challenges and help startups reach their full potential. If you&apos;re looking for a software engineering leader who can help your team deliver today while planning for tomorrow, let&apos;s talk.
        </p>
        <p>
          You can reach me at <a href={`mailto:${siteConfig.email}`} className="text-blue-500 hover:underline">{siteConfig.email}</a> or connect with me on <a href={siteConfig.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">LinkedIn</a>.
        </p>
      </div>
    </Layout>
  )
}