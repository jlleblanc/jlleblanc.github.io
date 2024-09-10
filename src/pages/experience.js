import Layout from '../components/Layout'
import siteConfig from '../config/siteConfig'

export default function Experience() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "Organization",
          "name": "Emerge Haus",
          "description": "Software Engineering Lead",
          "startDate": "2024-03"
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "Organization",
          "name": "FORM",
          "description": "Software Engineering Manager",
          "startDate": "2022-11",
          "endDate": "2024-02"
        }
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": {
          "@type": "Organization",
          "name": "Transfix",
          "description": "Software Engineering Manager",
          "startDate": "2022-03",
          "endDate": "2022-10"
        }
      },
      {
        "@type": "ListItem",
        "position": 4,
        "item": {
          "@type": "Organization",
          "name": "True Link Financial",
          "description": "Software Engineering Manager",
          "startDate": "2020-04",
          "endDate": "2022-03"
        }
      },
      {
        "@type": "ListItem",
        "position": 5,
        "item": {
          "@type": "Organization",
          "name": "BigCommerce",
          "description": "Software Engineer",
          "startDate": "2013-11",
          "endDate": "2018-06"
        }
      }
    ]
  };

  return (
    <Layout
      title="Experience - Software Engineering Leadership"
      description="Comprehensive overview of Joe LeBlanc's professional experience in software engineering leadership and development."
      canonicalUrl={`${siteConfig.siteUrl}/experience`}
      jsonLd={jsonLd}
    >
      <h1 className="text-3xl font-bold mb-6">Professional Experience</h1>

      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Software Engineering Lead at Emerge Haus</h2>
        <p className="text-gray-600 mb-3">March 2024 - Present</p>
        <ul className="list-disc list-inside space-y-2">
          <li>Leading software development initiatives for startups</li>
          <li>Implementing new features in Next.js, Supabase, and Express</li>
          <li>Providing strategic direction for technical projects</li>
          <li>Refining a lightweight, agile Software Development Life Cycle</li>
        </ul>
      </div>

      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Software Engineering Manager at FORM</h2>
        <p className="text-gray-600 mb-3">November 2022 - February 2024</p>
        <ul className="list-disc list-inside space-y-2">
          <li>Managed a remote team maintaining and extending FieldConnector, a real-time communications tool for frontline employees</li>
          <li>Worked with Django/Python, React Native, and PostgreSQL</li>
          <li>Improved development processes and team productivity</li>
        </ul>
      </div>

      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Software Engineering Manager at Transfix</h2>
        <p className="text-gray-600 mb-3">March 2022 - October 2022</p>
        <ul className="list-disc list-inside space-y-2">
          <li>Managed a team of 7 remote software engineers</li>
          <li>Improved a Fleet Management System (FMS) using Rails, React, and PostgreSQL</li>
          <li>Implemented story point estimation and conducted regular retrospectives</li>
        </ul>
      </div>

      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Software Engineering Manager at True Link Financial</h2>
        <p className="text-gray-600 mb-3">April 2020 - March 2022</p>
        <ul className="list-disc list-inside space-y-2">
          <li>Managed a team ranging from 4-7 remote software engineers</li>
          <li>Refactored Rails and React codebase for new features</li>
          <li>Provided advisory support to the Infosec team</li>
        </ul>
      </div>

      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Senior Fullstack Engineer at True Link Financial</h2>
        <p className="text-gray-600 mb-3">June 2018 - April 2020</p>
        <ul className="list-disc list-inside space-y-2">
          <li>Developed and maintained key features of the fintech platform</li>
          <li>Collaborated with cross-functional teams to implement new product features</li>
          <li>Contributed to architectural decisions and code quality improvements</li>
        </ul>
      </div>

      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Software Engineer at BigCommerce</h2>
        <p className="text-gray-600 mb-3">November 2013 - June 2018</p>
        <ul className="list-disc list-inside space-y-2">
          <li>Maintained and expanded a billing and provisioning system in Rails</li>
          <li>Worked with Redis, MySQL, JavaScript/CoffeeScript, Sentry, and Zuora</li>
          <li>Contributed to the marketing website (Drupal) and an internal ETL tool (PHP/MySQL)</li>
        </ul>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Earlier Career Highlights</h2>
        <ul className="list-disc list-inside space-y-3">
          <li>Programmer at Sears Holdings Corporation (2013)</li>
          <li>Author at lynda.com (2008-2013)</li>
          <li>Programmer at Cory Webb Media, LLC (2011-2013)</li>
          <li>Self-Employed Joomla Developer (2006-2011)</li>
          <li>Programmer at The Bivings Group (2005-2006)</li>
        </ul>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Education</h2>
        <p>BS in Management Information Systems from Oral Roberts University (2000-2004)</p>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Publications</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Learning Joomla! 1.5 Extension Development, Packt Publishing</li>
          <li>Up and Running with NoSQL Databases, lynda.com</li>
          <li>Up and Running with Backbone.js, lynda.com</li>
          <li>Up and Running with PHP: PEAR, PECL, and Composer, lynda.com</li>
          <li>Joomla! 1.7: Programming and Packaging Extensions, lynda.com</li>
        </ul>
      </div>
    </Layout>
  )
}