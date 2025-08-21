import { useEffect, useMemo, useState } from 'react'
import Layout from '../components/Layout'
import siteConfig from '../config/siteConfig'
import { getSupabaseClient } from '../utils/supabaseClient'

export default function Onboard() {
  const jsonLd = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": `Onboard with ${siteConfig.name}`,
    "description": "Task-focused onboarding to plan how we will work together",
  }), [])

  const supabase = getSupabaseClient()
  const [emailAddress, setEmailAddress] = useState('')
  const [selectedTasks, setSelectedTasks] = useState([])
  const [notes, setNotes] = useState('')
  const [statusMessage, setStatusMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [utmParams, setUtmParams] = useState({
    utm_source: '',
    utm_medium: '',
    utm_campaign: '',
    utm_term: '',
    utm_content: '',
    referrer: ''
  })

  useEffect(() => {
    if (typeof window === 'undefined') return
    const url = new URL(window.location.href)
    const get = (key) => url.searchParams.get(key) || ''
    setUtmParams({
      utm_source: get('utm_source'),
      utm_medium: get('utm_medium'),
      utm_campaign: get('utm_campaign'),
      utm_term: get('utm_term'),
      utm_content: get('utm_content'),
      referrer: document.referrer || ''
    })
  }, [])

  const tasks = [
    { id: 'discovery', label: 'Rapid product discovery workshop' },
    { id: 'prototype', label: 'Clickable prototype (Figma / Next.js)' },
    { id: 'billing', label: 'Subscription and payments (Stripe)' },
    { id: 'auth', label: 'Auth and user onboarding' },
    { id: 'mvp', label: 'MVP build sprint' },
    { id: 'metrics', label: 'Activation metrics and attribution' },
  ]

  function toggleTask(taskId) {
    setSelectedTasks((prev) =>
      prev.includes(taskId) ? prev.filter((t) => t !== taskId) : [...prev, taskId]
    )
  }

  async function handleSubmit(event) {
    event.preventDefault()
    setIsSubmitting(true)
    setStatusMessage('')

    try {
      const supabaseClient = getSupabaseClient()
      if (!supabaseClient) {
        throw new Error('Supabase client not initialized')
      }

      const payload = {
        email: emailAddress,
        tasks: selectedTasks,
        notes,
        ...utmParams,
        created_at: new Date().toISOString(),
      }

      const { error } = await supabaseClient.from('intake_leads').insert(payload)
      if (error) throw error

      setStatusMessage('Thanks! I will follow up shortly. Check your inbox for a confirmation email.')
      setSelectedTasks([])
      setNotes('')
      setEmailAddress('')
    } catch (err) {
      setStatusMessage('Something went wrong. Please email contact@jlleblanc.com and I will respond quickly.')
      // eslint-disable-next-line no-console
      console.error(err)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Layout
      title="Plan our first sprint"
      description="Task-focused onboarding to visualize how we will work together"
      canonicalUrl={`${siteConfig.siteUrl}/onboard`}
      jsonLd={jsonLd}
    >
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-bold mb-2">Plan our first sprint</h2>
        <p className="text-lg mb-6">Pick the tasks that resonate. I will shape a concrete one-week plan and next steps.</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">Your email</label>
            <input
              type="email"
              required
              value={emailAddress}
              onChange={(e) => setEmailAddress(e.target.value)}
              className="border border-gray-200 rounded-md p-2 w-full"
              placeholder="you@company.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-3">Select tasks</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {tasks.map((task) => (
                <button
                  key={task.id}
                  type="button"
                  onClick={() => toggleTask(task.id)}
                  className={`text-left p-3 rounded-md border transition ${
                    selectedTasks.includes(task.id)
                      ? 'border-lime-500 bg-lime-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      readOnly
                      checked={selectedTasks.includes(task.id)}
                      className="mr-2 mt-1"
                    />
                    <span>{task.label}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Notes (optional)</label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="border border-gray-200 rounded-md p-2 w-full"
              rows={4}
              placeholder="Links, context, constraints, timeline..."
            />
          </div>

          <div className="flex items-center gap-3">
            <button
              type="submit"
              disabled={isSubmitting || !emailAddress || selectedTasks.length === 0}
              className="bg-lime-700 hover:bg-lime-800 disabled:opacity-60 text-white font-bold py-2 px-6 rounded-md"
            >
              {isSubmitting ? 'Submitting...' : 'Get my plan'}
            </button>
            {statusMessage && (
              <span className="text-sm text-gray-700">{statusMessage}</span>
            )}
          </div>
        </form>
      </div>
      <div className="container mx-auto px-4 max-w-3xl mt-10">
        <h3 className="text-2xl font-bold mb-3">What your Week 1 plan looks like</h3>
        <div className="bg-white border rounded-md p-4">
          <ul className="space-y-3 text-gray-800">
            <li>
              <span className="font-semibold">Day 1:</span> 60-min kickoff, clarify success metrics, finalize task scope
            </li>
            <li>
              <span className="font-semibold">Day 2-4:</span> Execute selected tasks with async updates and a live preview link
            </li>
            <li>
              <span className="font-semibold">Day 5:</span> Review deliverables, timeboxed polish, discuss Week 2 options
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  )
}

