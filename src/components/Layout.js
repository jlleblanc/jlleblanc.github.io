import MicroblogShell from './MicroblogShell'

export default function Layout({ children, title, description, canonicalUrl, jsonLd, feedTitle }) {
  return (
    <MicroblogShell
      title={title}
      description={description}
      canonicalUrl={canonicalUrl}
      jsonLd={jsonLd}
      feedTitle={feedTitle || title || 'Page'}
    >
      {children}
    </MicroblogShell>
  )
}
