import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import siteConfig from '../config/siteConfig';
import { 
  CheckCircle2, 
  ArrowRight,
  Menu,
  X,
  ChevronDown,
  ChevronUp,
  BarChart3,
  Split,
  LineChart,
  Users,
  ShieldCheck,
  Rocket
} from 'lucide-react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": `${siteConfig.title}`,
    "description": siteConfig.description,
    "url": siteConfig.siteUrl,
    "sameAs": [
      siteConfig.socialLinks.linkedin,
      siteConfig.socialLinks.github
    ],
    "founder": {
      "@type": "Person",
      "name": siteConfig.name
    }
  };

  return (
    <div className="dark:bg-black">
      <Head>
        <title>{siteConfig.title} | {siteConfig.name}</title>
        <meta name="description" content={siteConfig.description} />
        <link rel="canonical" href={siteConfig.siteUrl} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <div className="min-h-screen bg-slate-50 dark:bg-black text-slate-900 dark:text-slate-200 font-sans selection:bg-lime-500/30 transition-colors duration-300">
        
        {/* Navigation */}
        <nav className="fixed w-full z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <Link href="/" className="text-xl font-bold tracking-tighter text-slate-900 dark:text-white flex items-center gap-2">
              <span className="text-lime-700 dark:text-lime-500 font-sans text-2xl">Joe LeBlanc</span>
              <span className="hidden sm:inline-block text-sm font-normal text-slate-500 dark:text-slate-400 border-l border-slate-300 dark:border-slate-700 pl-3 ml-1">Fractional Founding Engineer</span>
            </Link>

            <div className="hidden md:flex gap-8 text-sm font-medium text-slate-600 dark:text-slate-400">
              <a href="#bridge" className="hover:text-lime-700 dark:hover:text-white transition-colors">Method</a>
              <a href="#comparison" className="hover:text-lime-700 dark:hover:text-white transition-colors">Compare</a>
              <a href="#growth" className="hover:text-lime-700 dark:hover:text-white transition-colors">Growth Stack</a>
              <a href="#pricing" className="hover:text-lime-700 dark:hover:text-white transition-colors">Pricing</a>
            </div>

            <div className="flex items-center gap-4">
              <a href="#pricing" className="hidden md:block bg-lime-700 dark:bg-white text-white dark:text-black px-6 py-2.5 rounded-xl text-sm font-bold hover:bg-lime-800 dark:hover:bg-slate-200 transition-colors shadow-lg shadow-lime-500/10">
                View Plans
              </a>

              <button className="md:hidden text-slate-900 dark:text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 p-6 flex flex-col gap-4">
              <a href="#bridge" className="text-slate-600 dark:text-slate-300" onClick={() => setIsMenuOpen(false)}>Method</a>
              <a href="#comparison" className="text-slate-600 dark:text-slate-300" onClick={() => setIsMenuOpen(false)}>Compare</a>
              <a href="#growth" className="text-slate-600 dark:text-slate-300" onClick={() => setIsMenuOpen(false)}>Growth Stack</a>
              <a href="#pricing" className="text-slate-600 dark:text-slate-300" onClick={() => setIsMenuOpen(false)}>Pricing</a>
            </div>
          )}
        </nav>

        {/* Hero Section */}
        <section className="pt-32 pb-24 px-6 relative overflow-hidden">
          {/* Background Elements */}
          {/* <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 dark:opacity-20 pointer-events-none"></div> */}
          {/* <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-lime-500/10 dark:bg-lime-600/20 rounded-full blur-[128px] pointer-events-none"></div> */}
          {/* <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 dark:bg-cyan-600/10 rounded-full blur-[128px] pointer-events-none"></div> */}

          <div className="max-w-5xl mx-auto text-center relative z-10">
           
            <h1 className="text-5xl md:text-8xl font-bold tracking-tight text-slate-900 dark:text-white mb-8 leading-[1.1]">
              Don&apos;t give away <span className="bg-yellow-300/50 dark:bg-yellow-500 px-1 rounded inline-block">half</span> your equity.<br /><br className="md:hidden" />
              <span className="text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-lime-700 to-cyan-600 dark:from-lime-400 dark:to-cyan-300">Rent a Founding Engineer</span>
            </h1>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4">
              <img src="https://github.com/jlleblanc.png" alt="Joe" className="w-36 h-36 rounded-full mb-4 sm:mb-0 sm:mr-8 border border-gray-200 shadow-sm" />
            </div>
            
            <p className="text-left md:text-center text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-10 max-w-3xl mx-auto leading-relaxed">
              Take your early-stage startup from <strong>Day 0 to Series A</strong>. 
              I&apos;ll set the architecture and deliver the MVP. Then we&apos;ll hire your team.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="#pricing" className="px-8 py-4 bg-lime-700 dark:bg-white text-white dark:text-black rounded-xl font-bold text-lg hover:bg-lime-800 dark:hover:bg-slate-200 transition-all flex items-center gap-2 shadow-xl hover:translate-y-[-2px]">
                View Strategy Plans <ArrowRight size={20} />
              </a>
              <a href="#bridge" className="px-8 py-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white rounded-lg font-medium hover:border-slate-400 dark:hover:border-slate-500 transition-all">
                The Fractional Method
              </a>
            </div>

            {/* Social Proof */}
            {/* <div className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800/50 flex flex-col items-center gap-4 text-slate-500 text-sm">
              <span className="uppercase tracking-widest text-xs font-bold opacity-70">The Stack Investors Trust</span>
              <div className="flex flex-wrap justify-center gap-8 opacity-70 grayscale transition-all hover:grayscale-0">
                 <span className="font-bold text-slate-600 dark:text-slate-400 flex items-center gap-2"><Briefcase size={16}/> Linear</span>
                 <span className="font-bold text-slate-600 dark:text-slate-400 flex items-center gap-2"><BarChart3 size={16}/> PostHog</span>
                 <span className="font-bold text-slate-600 dark:text-slate-400 flex items-center gap-2"><Code2 size={16}/> Next.js</span>
                 <span className="font-bold text-slate-600 dark:text-slate-400 flex items-center gap-2"><ShieldCheck size={16}/> Supabase</span>
              </div>
            </div> */}
          </div>
        </section>

        {/* THE BRIDGE MODEL - Core Strategy Visual */}
        <section id="bridge" className="py-24 bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Countdown to handoff.</h2>
                    <p className="text-left text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-[1.3]">
                        Freelancers go MIA. Agencies rack up billable hours. And cutting in a technical co-founder is a gamble, assuming you can even find one.<br /><br />
                        There&apos;s a better way. And it scales with your startup.
                    </p>
                </div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-0 right-0 h-1 bg-gradient-to-r from-lime-500 via-cyan-500 to-emerald-500 opacity-30 rounded-full"></div>

                    <div className="grid md:grid-cols-3 gap-12">
                        {/* Phase 1 */}
                        <div className="relative pt-8">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-lime-600 border-4 border-white dark:border-slate-900 z-10 flex items-center justify-center text-white text-lg font-bold">1</div>
                            <div className="bg-slate-50 dark:bg-black border border-slate-200 dark:border-slate-800 p-8 rounded-2xl h-full hover:border-lime-500/50 transition-colors">
                                <div className="w-12 h-12 bg-lime-100 dark:bg-lime-900/30 text-lime-700 dark:text-lime-400 rounded-xl flex items-center justify-center mb-6">
                                    <Rocket size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Build</h3>
                                <div className="text-xs font-mono text-slate-500 uppercase tracking-wide mb-4">Months 1-3</div>
                                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                                    Move fast. We choose a modern stack (e.g., Next.js/Supabase), set up our deployment pipeline, and ship the MVP. No technical debt, just scalable foundations.
                                </p>
                                <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
                                    <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-lime-600"/> Core Features</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-lime-600"/> Auth & Payments</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-lime-600"/> Security Best Practices</li>
                                </ul>
                            </div>
                        </div>

                        {/* Phase 2 */}
                        <div className="relative pt-8">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-cyan-500 border-4 border-white dark:border-slate-900 z-10 flex items-center justify-center text-white text-lg font-bold">2</div>
                            <div className="bg-slate-50 dark:bg-black border border-slate-200 dark:border-slate-800 p-8 rounded-2xl h-full hover:border-cyan-500/50 transition-colors">
                                <div className="w-12 h-12 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400 rounded-xl flex items-center justify-center mb-6">
                                    <LineChart size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Iterate</h3>
                                <div className="text-xs font-mono text-slate-500 uppercase tracking-wide mb-4">Months 4-6</div>
                                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                                    Ruthlessly refine. Product analytics are operating (e.g. PostHog), A/B tests are running, and pivots are made based on real user data. You walk into investor negotiations with confidence.
                                </p>
                                <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
                                    <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-cyan-500"/> Test hypotheses</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-cyan-500"/> Feature Flagging</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-cyan-500"/> Investor Data Room</li>
                                </ul>
                            </div>
                        </div>

                        {/* Phase 3 */}
                        <div className="relative pt-8">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-emerald-500 border-4 border-white dark:border-slate-900 z-10 flex items-center justify-center text-white text-lg font-bold">3</div>
                            <div className="bg-slate-50 dark:bg-black border border-slate-200 dark:border-slate-800 p-8 rounded-2xl h-full hover:border-emerald-500/50 transition-colors">
                                <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-xl flex items-center justify-center mb-6">
                                    <Users size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Handoff</h3>
                                <div className="text-xs font-mono text-slate-500 uppercase tracking-wide mb-4">Month 7+</div>
                                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                                    You&apos;re growing. I write the job descriptions, interview your first full-time hires, and onboard them to the code. Then, I step back.
                                </p>
                                <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
                                    <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-500"/> Hiring Strategy</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-500"/> Technical Interviews</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-500"/> Knowledge Transfer</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* COMPARISON - Why Me? */}
        <section id="comparison" className="py-24 px-6 bg-slate-50 dark:bg-slate-900/50 transition-colors duration-300">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 text-center">Scale up without burning through your runway.</h2>
                
                <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-12 md:text-center">Compare the Fractional method to freelancers and agencies.</p>

                {/* Desktop Table - hidden on mobile */}
                <div className="hidden md:block">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-slate-200 dark:border-slate-700">
                                <th className="py-4 px-6 text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider"></th>
                                <th className="py-4 px-6 text-sm font-bold text-slate-500 dark:text-slate-400 w-1/4">Freelancer</th>
                                <th className="py-4 px-6 text-sm font-bold text-slate-500 dark:text-slate-400 w-1/4">Dev Agency</th>
                                <th className="py-4 px-6 text-lg font-bold text-lime-700 dark:text-lime-400 w-1/3 bg-lime-50/50 dark:bg-lime-900/10 border-t-2 border-lime-600">Fractional</th>
                            </tr>
                        </thead>
                        <tbody className="text-slate-600 dark:text-slate-300">
                            <tr className="border-b border-slate-200 dark:border-slate-800">
                                <td className="py-4 px-6 font-bold">Goal</td>
                                <td className="py-4 px-6">Finish Tickets</td>
                                <td className="py-4 px-6">Bill Hours</td>
                                <td className="py-4 px-6 font-bold text-slate-900 dark:text-white bg-lime-50/50 dark:bg-lime-900/10">Launch</td>
                            </tr>
                            <tr className="border-b border-slate-200 dark:border-slate-800">
                                <td className="py-4 px-6 font-bold">Tech Stack</td>
                                <td className="py-4 px-6">Whatever you ask</td>
                                <td className="py-4 px-6">Whatever they know</td>
                                <td className="py-4 px-6 font-bold text-slate-900 dark:text-white bg-lime-50/50 dark:bg-lime-900/10">Strategic Selection</td>
                            </tr>
                            <tr className="border-b border-slate-200 dark:border-slate-800">
                                <td className="py-4 px-6 font-bold">Analytics</td>
                                <td className="py-4 px-6">None</td>
                                <td className="py-4 px-6">Extra Charge</td>
                                <td className="py-4 px-6 font-bold text-slate-900 dark:text-white bg-lime-50/50 dark:bg-lime-900/10">Built-in</td>
                            </tr>
                            <tr className="border-b border-slate-200 dark:border-slate-800">
                                <td className="py-4 px-6 font-bold">Investor Data Room</td>
                                <td className="py-4 px-6">Thinks it&rsquo;s a data center</td>
                                <td className="py-4 px-6">Hasn&apos;t done it before</td>
                                <td className="py-4 px-6 font-bold text-slate-900 dark:text-white bg-lime-50/50 dark:bg-lime-900/10">Ongoing</td>
                            </tr>
                            <tr className="border-b-0">
                                <td className="py-4 px-6 font-bold">Hiring Support</td>
                                <td className="py-4 px-6 text-slate-400"><X size={16}/></td>
                                <td className="py-4 px-6 text-slate-400"><X size={16}/></td>
                                <td className="py-4 px-6 font-bold text-emerald-600 bg-lime-50/50 dark:bg-lime-900/10 flex items-center gap-2"><CheckCircle2 size={16}/> Included</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Mobile Cards - hidden on desktop */}
                <div className="md:hidden space-y-4">
                  {[
                    { label: "Goal", freelancer: "Finish Tickets", agency: "Bill Hours", me: "Launch" },
                    { label: "Tech Stack", freelancer: "Whatever you ask", agency: "Whatever they know", me: "Strategic Selection" },
                    { label: "Analytics", freelancer: "None", agency: "Extra Charge", me: "Built-in" },
                    { label: "Investor Data Room", freelancer: "(thinks it's a data center)", agency: "\"Never heard of it\"", me: "Ongoing" }, 
                    { label: "Hiring Support", freelancer: null, agency: null, me: "Included" },
                  ].map((row, i) => (
                    <div key={i} className="bg-white dark:bg-black border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden">
                      <div className="bg-slate-100 dark:bg-slate-900 px-4 py-3 border-b border-slate-200 dark:border-slate-800">
                        <h3 className="font-bold text-slate-900 dark:text-white">{row.label}</h3>
                      </div>
                      <div className="divide-y divide-slate-100 dark:divide-slate-800">
                        <div className="flex justify-between items-center px-4 py-3">
                          <span className="text-sm text-slate-500">Freelancer</span>
                          {row.freelancer ? (
                            <span className="text-sm text-slate-600 dark:text-slate-400">{row.freelancer}</span>
                          ) : (
                            <X size={16} className="text-slate-400" />
                          )}
                        </div>
                        <div className="flex justify-between items-center px-4 py-3">
                          <span className="text-sm text-slate-500">Dev Agency</span>
                          {row.agency ? (
                            <span className="text-sm text-slate-600 dark:text-slate-400">{row.agency}</span>
                          ) : (
                            <X size={16} className="text-slate-400" />
                          )}
                        </div>
                        <div className="flex justify-between items-center px-4 py-3 bg-lime-50 dark:bg-lime-900/20">
                          <span className="text-sm font-bold text-lime-700 dark:text-lime-400">Fractional</span>
                          <span className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1 text-right">
                            {row.label === "Hiring Support" && <CheckCircle2 size={14} className="text-emerald-600" />}
                            {row.me}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
            </div>
        </section>

        {/* Growth Stack - Condensed */}
        <section id="growth" className="py-20 bg-gray-900 text-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
                <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 right-0 w-64 h-64 bg-purple-500 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">The Growth Stack<br/><span className="text-blue-400">(Hint: it&apos;s not code)</span></h2>
                        <div className="space-y-8">
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 h-12 w-12 rounded bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                                    <i data-lucide="eye" className="text-blue-400 w-6 h-6"></i>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold mb-2">TODO</h4>
                                    <p className="text-gray-400 leading-relaxed">TODO</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="flex-shrink-0 h-12 w-12 rounded bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                                    <i data-lucide="hammer" className="text-blue-400 w-6 h-6"></i>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold mb-2">TODO</h4>
                                    <p className="text-gray-400 leading-relaxed">TODO</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="flex-shrink-0 h-12 w-12 rounded bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                                    <i data-lucide="trending-up" className="text-blue-400 w-6 h-6"></i>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold mb-2">TODO</h4>
                                    <p className="text-gray-400 leading-relaxed">TODO</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* <div className="bg-gray-800 p-8 rounded-lg border border-gray-700 shadow-2xl">
                        <div className="flex items-center gap-2 mb-6 pb-4 border-b border-gray-700">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            <span className="text-gray-500 font-mono text-sm ml-2">philosophy.md</span>
                        </div>
                        <div className="font-mono text-sm md:text-base text-gray-300 space-y-4">
                            <p><span className="text-purple-400">const</span> <span className="text-blue-400">goal</span> = <span className="text-green-300">"Build a Company"</span>;</p>
                            <p>
                                <span className="text-gray-500">// Instead of:</span><br/>
                                <span className="text-red-400">founder.giveEquity(50%);</span><br/>
                                <span className="text-red-400">developer.buildInSecret();</span>
                            </p>
                            <p>
                                <span className="text-gray-500">// We do:</span><br/>
                                <span className="text-blue-400">while</span> (<span className="text-yellow-300">!product.isSuccessful</span>) {'{'}<br/>
                                &nbsp;&nbsp;<span className="text-blue-400">await</span> builder.code();<br/>
                                &nbsp;&nbsp;<span className="text-blue-400">await</span> founder.sell();<br/>
                                &nbsp;&nbsp;builder.teach(founder);<br/>
                                {'}'}
                            </p>
                            <p><span className="text-gray-500">// Result: Control remains with the founder.</span></p>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>

        {/* PRICING - The Pivot */}
        <section id="pricing" className="py-24 px-6 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
          <div className="max-w-6xl mx-auto">
             <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Pricing</h2>
              <p className="text-slate-600 dark:text-slate-400 text-xl">Plans for every step from idea to exit.</p>
            </div>

            <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">

              <div className="bg-white dark:bg-black border border-slate-200 dark:border-slate-800 p-8 rounded-3xl relative hover:border-slate-300 dark:hover:border-slate-700 transition-colors">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Consultation</h3>
                <p className="text-slate-500 text-xs font-mono uppercase tracking-wide mb-6">One-time</p>
                <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2">$495</div>
                <p className="text-slate-500 text-sm mb-8">Choose a topic or task to dive into.</p>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex gap-3 text-slate-600 dark:text-slate-300 text-sm">
                    <CheckCircle2 className="text-lime-700 dark:text-lime-500 shrink-0" size={18} /> Pre-session research
                  </li>
                  <li className="flex gap-3 text-slate-600 dark:text-slate-300 text-sm">
                    <CheckCircle2 className="text-lime-700 dark:text-lime-500 shrink-0" size={18} /> 60 min session
                  </li>
                  <li className="flex gap-3 text-slate-600 dark:text-slate-300 text-sm">
                    <CheckCircle2 className="text-lime-700 dark:text-lime-500 shrink-0" size={18} /> Follow-up action plan
                  </li>
                </ul>
                <button className="w-full py-3 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                  Book Consultation
                </button>
              </div>


              {/* Tier 1 - Audit */}
              <div className="bg-white dark:bg-black border border-slate-200 dark:border-slate-800 p-8 rounded-3xl relative hover:border-slate-300 dark:hover:border-slate-700 transition-colors">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Roadmap</h3>
                <p className="text-slate-500 text-xs font-mono uppercase tracking-wide mb-6">One-time</p>
                <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2">$995</div>
                <p className="text-slate-500 text-sm mb-8">Turn your vision into an actionable plan.</p>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex gap-3 text-slate-600 dark:text-slate-300 text-sm">
                    <CheckCircle2 className="text-lime-700 dark:text-lime-500 shrink-0" size={18} /> Delivered in Notion
                  </li>
                  <li className="flex gap-3 text-slate-600 dark:text-slate-300 text-sm">
                    <CheckCircle2 className="text-lime-700 dark:text-lime-500 shrink-0" size={18} /> 60 min review session
                  </li>
                  <li className="flex gap-3 text-slate-600 dark:text-slate-300 text-sm">
                    <CheckCircle2 className="text-lime-700 dark:text-lime-500 shrink-0" size={18} /> Cost goes towards your first month&apos;s subscription
                  </li>
                </ul>
                <button className="w-full py-3 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                  Book Roadmap
                </button>
              </div>

              {/* Tier 2 - The Builder */}
              <div className="bg-white dark:bg-black border border-slate-200 dark:border-slate-800 p-8 rounded-3xl relative hover:border-lime-500/50 transition-colors">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">The Builder</h3>
                <p className="text-slate-500 text-xs font-mono uppercase tracking-wide mb-6">Build it together</p>
                <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2">$6,950<span className="text-lg text-slate-500 font-normal">/mo</span></div>
                <p className="text-slate-500 text-sm mb-8">For solo founders with a roadmap.</p>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex gap-3 text-slate-600 dark:text-slate-300 text-sm">
                    <CheckCircle2 className="text-lime-700 dark:text-lime-500 shrink-0" size={18} /> <span className="font-bold">Async support</span>
                  </li>
                  <li className="flex gap-3 text-slate-600 dark:text-slate-300 text-sm">
                    <CheckCircle2 className="text-lime-700 dark:text-lime-500 shrink-0" size={18} /> One active task
                  </li>
                  <li className="flex gap-3 text-slate-600 dark:text-slate-300 text-sm">
                    <CheckCircle2 className="text-lime-700 dark:text-lime-500 shrink-0" size={18} /> 2-3 day task turnaround
                  </li>
                  <li className="flex gap-3 text-slate-600 dark:text-slate-300 text-sm">
                    <CheckCircle2 className="text-lime-700 dark:text-lime-500 shrink-0" size={18} /> Pause anytime
                  </li>
                </ul>
                <button className="w-full py-3 rounded-xl bg-slate-900 dark:bg-slate-800 text-white font-bold hover:bg-slate-700 dark:hover:bg-slate-700 transition-colors">
                  Subscribe
                </button>
              </div>

              {/* Tier 3 - Founding Engineer (The Winner) */}
              <div className="bg-lime-900 dark:bg-lime-950/30 border border-lime-600 p-8 rounded-3xl relative shadow-2xl shadow-lime-500/20 transform scale-105 z-10">
                <div className="absolute top-0 right-0 bg-lime-600 text-white text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-2xl">
                  INVESTOR-READY
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Founding Engineer</h3>
                <p className="text-lime-200 text-xs font-mono uppercase tracking-wide mb-6">Fractional CTO Partner</p>
                <div className="text-3xl font-bold text-white mb-2">$11,500<span className="text-lg text-slate-400 font-normal">/mo</span></div>
                <p className="text-slate-300 text-sm mb-8">For early-stage founders who need strategy, architecture, and hiring support.</p>
                
                <ul className="space-y-4 mb-8">

                  <li className="flex gap-3 text-white text-sm">
                    <CheckCircle2 className="text-lime-400 shrink-0" size={18} /> <span className="font-bold">Weekly Strategy Sync</span>
                  </li>
                  <li className="flex gap-3 text-slate-300 text-sm">
                    <CheckCircle2 className="text-lime-500 shrink-0" size={18} /> <span className="text-lime-200">Hiring Support & Interviews</span>
                  </li>
                  <li className="flex gap-3 text-slate-300 text-sm">
                    <CheckCircle2 className="text-lime-500 shrink-0" size={18} /> Investor Data Room
                  </li>
                  <li className="flex gap-3 text-slate-300 text-sm">
                    <CheckCircle2 className="text-lime-500 shrink-0" size={18} /> Priority Queue
                  </li>
                </ul>
                <button className="w-full py-3 rounded-xl bg-white text-black font-bold hover:bg-lime-50 transition-colors shadow-lg">
                  Apply for Partner Spot
                </button>
              </div>

            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-24 px-6 bg-white dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 text-center">Common Questions</h2>
            <div className="space-y-4">
              {[
                { q: "What is the difference between 'Builder' and 'Founding Engineer'?", a: "The Builder plan is for execution—you have a roadmap ready to go, we use it to build together. The Founding Engineer plan includes more of what you need around funding events: investor data room and weekly sync meetings. It's also for when you are ready to start bringing on full-time engineers." },
                { q: "Do I own the Intellectual Property (IP)?", a: "Yes, 100%. You own every line of code, every design asset, and every account. We work together in your GitHub repository and your cloud accounts." },
                { q: "What is your tech stack?", a: "It changes. Currently, I use Next.js, Supabase, Tailwind CSS, and PostHog. This toolset is modern, flexible, and scalable. But I am also always looking at new tools and frameworks to deliver meaningful value faster." },
                { q: "How does the 'Hiring Support' work?", a: "As your startup grows, you will need to hire full-time engineers. I can help you with that. I write the job descriptions, screen candidates, and conduct technical interviews to find your first full-time engineer. I then onboard them to the codebase so you have a seamless transition." },
                { q: "Can I pause my subscription?", a: "Yes. You can pause the Builder subscription at any time. Sometimes you're waiting on investor diligence. Other times, you may need to wait a week or two on user feedback to see how a feature is received." },
                 { q: "Why don't you charge equity?", a: "In an equity-based model, we decide how much time we are willing to spend on building the startup before we raise a round of funding. This can often translate into lost momentum, delays in generating revenue, and a higher risk of failure. Instead, I charge a subscription to my services, which forces us to be efficient and focused. This is better for you, because you get the seniority of a co-founder without the permanent dilution." }
              ].map((faq, i) => (
                <div key={i} className="border border-slate-200 dark:border-slate-800 rounded-xl bg-slate-50 dark:bg-black overflow-hidden transition-colors">
                  <button 
                    onClick={() => toggleFaq(i)}
                    className="w-full flex justify-between items-center p-6 text-left hover:bg-white dark:hover:bg-slate-900 transition-colors"
                  >
                    <span className="font-bold text-slate-900 dark:text-slate-200 pr-4">{faq.q}</span>
                    {activeFaq === i ? <ChevronUp className="text-lime-700 dark:text-lime-500 shrink-0" /> : <ChevronDown className="text-slate-400 shrink-0" />}
                  </button>
                  {activeFaq === i && (
                    <div className="p-6 pt-4 text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-200 dark:border-slate-800/50 bg-white dark:bg-black">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 px-6 bg-slate-50 dark:bg-black border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-start md:gap-8">
              <div className="md:flex-1">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Subscribe to my newsletter</h2>
                <p className="text-lg mt-4 text-slate-600 dark:text-slate-400">
                  Code Like an Investor is a newsletter about choosing the right technology for your next startup or side project.
                </p>
              </div>

              <div className="mt-4 md:mt-0 md:flex-1">
                <form
                  action="https://buttondown.com/api/emails/embed-subscribe/jlleblanc"
                  method="post"
                  target="popupwindow"
                  className="embeddable-buttondown-form"
                >
                  <label htmlFor="bd-email" className="text-lg sr-only">Enter your email</label>
                  <div className="flex items-center">
                    <input type="email" name="email" id="bd-email" className="border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white rounded-md p-2 w-full" placeholder="Enter your email" />
                  </div>
                  <div className="flex items-center mt-2">
                    <input type="submit" value="Subscribe" className="bg-lime-700 dark:bg-white text-white dark:text-black px-6 py-2.5 rounded-xl text-sm font-bold hover:bg-lime-800 dark:hover:bg-slate-200 transition-colors shadow-lg shadow-lime-500/10" />
                  </div>
                  <p className="text-sm mt-2">
                    <a href="https://buttondown.com/refer/jlleblanc" target="_blank" rel="noopener noreferrer" className="text-lime-700 dark:text-lime-400">Powered by Buttondown.</a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 border-t border-slate-200 dark:border-slate-800 text-center transition-colors duration-300 bg-white dark:bg-black">
          <div className="flex justify-center gap-6 mb-8">
              <a href={siteConfig.socialLinks.github} className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
              <a href={siteConfig.socialLinks.linkedin} className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
          </div>
          <p className="text-slate-500 text-sm">
            © 2002 - {new Date().getFullYear()} People Scaled LLC. All rights reserved.
          </p>
        </footer>

      </div>
    </div>
  );
}