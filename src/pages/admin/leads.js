import { useEffect, useMemo, useState } from 'react'
import Layout from '../../components/Layout'
import siteConfig from '../../config/siteConfig'
import { getSupabaseClient } from '../../utils/supabaseClient'

export default function AdminLeads() {
  const jsonLd = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": `Leads Admin - ${siteConfig.name}`,
    "description": "Admin view to review inbound leads",
  }), [])

  const supabase = getSupabaseClient()
  const [email, setEmail] = useState('')
  const [leads, setLeads] = useState([])
  const [session, setSession] = useState(null)
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    if (!supabase) return
    const { data: authListener } = supabase.auth.onAuthStateChange((_event, sess) => {
      setSession(sess)
    })
    supabase.auth.getSession().then(({ data }) => setSession(data.session))
    return () => {
      authListener?.subscription?.unsubscribe()
    }
  }, [supabase])

  async function handleMagicLink(e) {
    e.preventDefault()
    if (!supabase) return
    setLoading(true)
    setErrorMessage('')
    try {
      const { error } = await supabase.auth.signInWithOtp({ email, options: { emailRedirectTo: `${typeof window !== 'undefined' ? window.location.origin : siteConfig.siteUrl}/admin/leads` } })
      if (error) throw error
    } catch (err) {
      setErrorMessage('Failed to send magic link. Ensure the email is correct.')
      // eslint-disable-next-line no-console
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  async function fetchLeads() {
    if (!supabase) return
    setLoading(true)
    setErrorMessage('')
    try {
      const { data, error } = await supabase
        .from('intake_leads')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(200)
      if (error) throw error
      setLeads(data || [])
    } catch (err) {
      setErrorMessage('Not authorized or failed to load leads.')
      // eslint-disable-next-line no-console
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (session) fetchLeads()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session])

  return (
    <Layout title="Leads Admin" description="Review inbound leads" canonicalUrl={`${siteConfig.siteUrl}/admin/leads`} jsonLd={jsonLd}>
      <div className="container mx-auto px-4 max-w-5xl">
        {!session ? (
          <div className="max-w-md mx-auto">
            <h2 className="text-2xl font-bold mb-4">Sign in</h2>
            <p className="mb-4 text-gray-700">Enter your email to receive a magic link.</p>
            <form onSubmit={handleMagicLink} className="space-y-4">
              <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="border border-gray-200 rounded-md p-2 w-full" placeholder="you@company.com" />
              <button type="submit" disabled={loading} className="bg-lime-700 hover:bg-lime-800 disabled:opacity-60 text-white font-bold py-2 px-6 rounded-md">
                {loading ? 'Sending...' : 'Send magic link'}
              </button>
            </form>
            {errorMessage && <p className="text-sm text-red-600 mt-3">{errorMessage}</p>}
          </div>
        ) : (
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold">Inbound Leads</h2>
              <button onClick={() => supabase?.auth?.signOut()} className="text-sm text-gray-700 underline">Sign out</button>
            </div>
            {loading && <p>Loading...</p>}
            {errorMessage && <p className="text-sm text-red-600 mb-3">{errorMessage}</p>}
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="text-left border-b">
                    <th className="py-2 pr-4">Created</th>
                    <th className="py-2 pr-4">Email</th>
                    <th className="py-2 pr-4">Tasks</th>
                    <th className="py-2 pr-4">Notes</th>
                    <th className="py-2 pr-4">UTM</th>
                  </tr>
                </thead>
                <tbody>
                  {leads.map((lead) => (
                    <tr key={lead.id} className="border-b align-top">
                      <td className="py-2 pr-4 whitespace-nowrap">{new Date(lead.created_at).toLocaleString()}</td>
                      <td className="py-2 pr-4">{lead.email}</td>
                      <td className="py-2 pr-4">
                        <ul className="list-disc list-inside">
                          {(lead.tasks || []).map((t) => <li key={t}>{t}</li>)}
                        </ul>
                      </td>
                      <td className="py-2 pr-4 max-w-md break-words">{lead.notes}</td>
                      <td className="py-2 pr-4 text-xs text-gray-700">
                        <div>source: {lead.utm_source || '-'}</div>
                        <div>medium: {lead.utm_medium || '-'}</div>
                        <div>campaign: {lead.utm_campaign || '-'}</div>
                        <div>term: {lead.utm_term || '-'}</div>
                        <div>content: {lead.utm_content || '-'}</div>
                        <div>referrer: {lead.referrer || '-'}</div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </Layout>
  )
}

