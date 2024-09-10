import Link from 'next/link'
import { useRouter } from 'next/router'
import siteConfig from '../config/siteConfig'

const Breadcrumbs = () => {
  const router = useRouter()
  const pathSegments = router.asPath.split('/').filter(segment => segment !== '')

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": siteConfig.siteUrl
      },
      ...pathSegments.map((segment, index) => ({
        "@type": "ListItem",
        "position": index + 2,
        "name": segment.charAt(0).toUpperCase() + segment.slice(1),
        "item": `${siteConfig.siteUrl}/${pathSegments.slice(0, index + 1).join('/')}`
      }))
    ]
  }

  return (
    <>
      <nav aria-label="Breadcrumb" className="mb-4">
        <ol className="flex">
          <li>
            <Link href="/">
              Home
            </Link>
          </li>
          {pathSegments.map((segment, index) => (
            <li key={index} className="flex items-center">
              <span className="mx-2">/</span>
              <Link href={`/${pathSegments.slice(0, index + 1).join('/')}`}>
                {segment.charAt(0).toUpperCase() + segment.slice(1)}
              </Link>
            </li>
          ))}
        </ol>
      </nav>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }}
      />
    </>
  )
}

export default Breadcrumbs