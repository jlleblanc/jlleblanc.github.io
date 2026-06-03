import Layout from '../components/Layout'
import FeedPost from '../components/FeedPost'
import siteConfig from '../config/siteConfig'

const roles = [
  {
    title: 'Software Engineering Lead at Emerge Haus',
    period: 'March 2024 – Present',
    bullets: [
      'Technical due diligence on a startup acquisition',
      'Led technical GTM for post-acquisition integration',
      'Implemented features in Next.js, Supabase, and Express',
      'Strategic direction for technical projects',
    ],
  },
  {
    title: 'Software Engineering Manager at FORM',
    period: 'Nov 2022 – Feb 2024',
    bullets: [
      'Managed remote team on FieldConnector, a real-time comms tool for frontline employees',
      'Django/Python, React Native, PostgreSQL',
      'Improved development processes and team productivity',
    ],
  },
  {
    title: 'Software Engineering Manager at Transfix',
    period: 'Mar 2022 – Oct 2022',
    bullets: [
      'Managed 7 remote software engineers',
      'Improved Fleet Management System (Rails, React, PostgreSQL)',
      'Story point estimation and regular retrospectives',
    ],
  },
  {
    title: 'Software Engineering Manager at True Link Financial',
    period: 'Apr 2020 – Mar 2022',
    bullets: [
      'Managed team of 4–7 remote engineers',
      'Refactored Rails and React codebase for new features',
      'Advisory support to Infosec team',
    ],
  },
  {
    title: 'Senior Fullstack Engineer at True Link Financial',
    period: 'Jun 2018 – Apr 2020',
    bullets: [
      'Developed and maintained key fintech platform features',
      'Cross-functional collaboration on new product features',
      'Architectural decisions and code quality improvements',
    ],
  },
  {
    title: 'Software Engineer at BigCommerce',
    period: 'Nov 2013 – Jun 2018',
    bullets: [
      'Billing and provisioning system in Rails',
      'Redis, MySQL, JavaScript/CoffeeScript, Sentry, Zuora',
      'Marketing website (Drupal) and internal ETL (PHP/MySQL)',
    ],
  },
]

export default function Experience() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: roles.map((role, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Organization',
        name: role.title.split(' at ')[1] || role.title,
        description: role.title,
      },
    })),
  }

  return (
    <Layout
      title="Experience"
      description="Professional experience in software engineering leadership and development."
      canonicalUrl={`${siteConfig.siteUrl}/experience`}
      jsonLd={jsonLd}
      feedTitle="Experience"
    >
      {roles.map((role) => (
        <FeedPost key={role.title} label={role.period}>
          <h3 className="text-[17px] font-bold text-slate-900 dark:text-white mb-2">
            {role.title}
          </h3>
          <ul className="text-[15px] text-slate-700 dark:text-slate-300 space-y-1.5 list-none p-0 m-0">
            {role.bullets.map((item) => (
              <li key={item}>→ {item}</li>
            ))}
          </ul>
        </FeedPost>
      ))}

      <FeedPost label="Earlier">
        <ul className="text-[15px] text-slate-700 dark:text-slate-300 space-y-1.5 list-none p-0 m-0">
          <li>→ Programmer at Sears Holdings Corporation (2013)</li>
          <li>→ Author at lynda.com (2008–2013)</li>
          <li>→ Programmer at Cory Webb Media (2011–2013)</li>
          <li>→ Self-employed Joomla Developer (2006–2011)</li>
          <li>→ Programmer at The Bivings Group (2005–2006)</li>
        </ul>
      </FeedPost>

      <FeedPost label="Education">
        <p className="text-[15px] text-slate-800 dark:text-slate-200">
          BS in Management Information Systems — Oral Roberts University (2000–2004)
        </p>
      </FeedPost>

      <FeedPost label="Publications">
        <ul className="text-[15px] text-slate-700 dark:text-slate-300 space-y-1.5 list-none p-0 m-0">
          <li>→ Supabase Essential Training, LinkedIn Learning</li>
          <li>→ Up and Running with NoSQL Databases, lynda.com</li>
          <li>→ Learning Joomla! 1.5 Extension Development, Packt</li>
          <li>→ Joomla! 1.7: Programming and Packaging Extensions, lynda.com</li>
          <li>→ Up and Running with Backbone.js, lynda.com</li>
          <li>→ Up and Running with PHP: PEAR, PECL, and Composer, lynda.com</li>
        </ul>
      </FeedPost>
    </Layout>
  )
}
