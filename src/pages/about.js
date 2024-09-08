import Layout from '../components/Layout'

export default function About() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "Person",
      "name": "[Your Name]",
      "jobTitle": "Software Engineering Leader",
      "description": "Experienced software engineering leader helping startups build amazing products."
    }
  };

  return (
    <Layout
      title="About Me - Software Engineering Leader"
      description="Learn about my journey in software engineering and how I help startups succeed with Next.js, Supabase, OpenAI, and Anthropic."
      canonicalUrl="https://www.yourwebsite.com/about"
      jsonLd={jsonLd}
    >
      <h1 className="text-3xl font-bold mb-4">About Me</h1>
      <p className="mb-4">
        I&apos;ve been in love with software since I was a kid. Now, I use that passion to help startups build amazing products using cutting-edge technologies like Next.js, Supabase, OpenAI, and Anthropic.
      </p>
      <p className="mb-4">
        My goal is to make your startup&apos;s software dreams come true. I do this by leading teams, improving how we work, and leveraging the latest tech to solve real-world problems.
      </p>
      <p className="mb-4">
        With over [X] years of experience in software engineering, I&apos;ve seen firsthand the challenges startups face. From scaling issues to tight deadlines, I&apos;ve been there and solved that using innovative solutions and best practices.
      </p>
      <p className="mb-4">
        What sets me apart is my focus on human-scale solutions. I believe in building software that not only works well but also empowers the people using and developing it, whether it&apos;s through efficient Next.js applications, robust Supabase backends, or cutting-edge AI integrations with OpenAI and Anthropic.
      </p>
    </Layout>
  )
}