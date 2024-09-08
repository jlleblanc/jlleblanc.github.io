const FAQ = ({ faqs }) => {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }

  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
      <dl>
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4">
            <dt className="font-semibold mb-2">{faq.question}</dt>
            <dd>{faq.answer}</dd>
          </div>
        ))}
      </dl>
      <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
    </section>
  )
}

export default FAQ