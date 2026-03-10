import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { supabase } from '../utils/supabaseClient';
import siteConfig from '../config/siteConfig';
import {
  CheckCircle2,
  Menu,
  X,
  Send,
  Mail,
  ArrowRight
} from 'lucide-react';

export default function Home({ intro, brunch, workingTogether }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    problem: '',
    help_options: []
  });
  const [status, setStatus] = useState('idle');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (option) => {
    setFormData(prev => {
      const help_options = prev.help_options.includes(option)
        ? prev.help_options.filter(item => item !== option)
        : [...prev.help_options, option];
      return { ...prev, help_options };
    });
  };

  const handleGetStartedClick = (e) => {
    e.preventDefault();
    setIsHeaderVisible(false);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      const { data, error } = await supabase.rpc('cmd_submit_intake', {
        p_payload: {
          name: formData.name,
          email: formData.email,
          problem: formData.problem,
          help_options: formData.help_options
        }
      });

      if (error) throw error;
      setStatus('success');
      setFormData({ name: '', email: '', problem: '', help_options: [] });
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
    }
  };

  return (
    <div className="dark:bg-black min-h-screen bg-slate-50 text-slate-900 dark:text-slate-200 font-sans selection:bg-lime-500/30 transition-colors duration-300">
      <Head>
        <title>Joe LeBlanc | Strategic Engineering & Technical Leadership</title>
        <meta name="description" content="Helping organizations build digital tools that scale." />
      </Head>

      {/* Navigation */}
      <nav className={`fixed w-full z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-all duration-300 ${isHeaderVisible ? 'top-0' : '-top-20'}`}>
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold tracking-tighter text-slate-900 dark:text-white flex items-center gap-2">
            <span className="text-lime-700 dark:text-lime-500 font-sans text-2xl">Joe LeBlanc</span>
          </Link>

          <div className="flex items-center gap-4">
            <a 
              href="#contact" 
              onClick={handleGetStartedClick}
              className="bg-lime-700 text-white px-6 py-2.5 rounded-xl text-sm font-bold hover:bg-lime-800 transition-colors shadow-lg shadow-lime-500/10"
            >
              Get Started
            </a>

            <button className="md:hidden text-slate-900 dark:text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 p-6 flex flex-col gap-4">
             <a href="#contact" className="text-slate-600 dark:text-slate-300" onClick={(e) => { setIsMenuOpen(false); handleGetStartedClick(e); }}>Get Started</a>
          </div>
        )}
      </nav>

      <main className="pt-32 pb-24 px-6 max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row gap-6 justify-start items-center mb-16">
          <img src="https://github.com/jlleblanc.png" alt="Joe LeBlanc" className="w-32 h-32 rounded-full border-2 border-lime-500/20 shadow-xl" />
          <div className="text-center sm:text-left">
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-2 leading-tight">
              Joe LeBlanc
            </h1>
            <p className="text-xl text-lime-700 dark:text-lime-500 font-bold uppercase tracking-wide">
              Strategic Software Development &amp;<br className="hidden sm:block" /> Technical Leadership
            </p>
          </div>
        </div>

        {/* Intro Section - Clean Prose */}
        <section className="mb-20">
          <article className="prose prose-slate dark:prose-invert prose-lime lg:prose-xl max-w-none">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {intro}
            </ReactMarkdown>
          </article>
        </section>

        {/* Brunch Section - Highlighted style */}
        <section className="mb-20 py-10 px-8 bg-lime-50/50 dark:bg-lime-900/10 rounded-3xl border border-lime-200/50 dark:border-lime-500/20">
          <article className="prose prose-slate dark:prose-invert prose-lime lg:prose-xl max-w-none">
            <h2 className="flex h-14 items-center font-serif-text text-4xl tracking-tight text-lime-700 dark:text-lime-500 hover:opacity-80 transition-opacity active">brunch</h2>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {brunch}
            </ReactMarkdown>
            <div className="mt-16 text-center not-prose">
              <p className="text-2xl font-bold text-slate-900 dark:text-white mb-8">
                Want to see <br className="md:hidden" />Brunch in action?
              </p>
              <a href="https://brunch-buffet.onrender.com" className="bg-lime-700 text-white px-6 py-2.5 rounded-xl text-sm font-bold hover:bg-lime-800 transition-colors shadow-lg shadow-lime-500/10">
                Demo
              </a>
            </div>
          </article>
        </section>

        {/* Working Together Section - Bordered style */}
        <section className="mb-20 py-10 px-8 bg-white dark:bg-slate-900/50 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <article className="prose prose-slate dark:prose-invert prose-lime lg:prose-xl max-w-none">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {workingTogether}
            </ReactMarkdown>
            <div className="mt-16 text-center not-prose">
              <p className="text-2xl font-bold text-slate-900 dark:text-white mb-8">
                Ready to work together?
              </p>
              <a 
                href="#contact" 
                onClick={handleGetStartedClick}
                className="inline-flex items-center gap-3 bg-lime-700 text-white px-10 py-4 rounded-2xl text-xl font-bold hover:bg-lime-800 transition-all hover:scale-[1.05] active:scale-[0.95] shadow-xl shadow-lime-500/20 no-underline group"
              >
                Get Started
                <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </article>
        </section>

        {/* Newsletter Section */}
        <section className="mb-20 py-12 px-8 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">The Brunch Buffet Newsletter</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-8 text-lg">
              Keep up with my latest work on Brunch, software strategy, and building smarter digital tools.
            </p>
            <form
              action="https://buttondown.com/api/emails/embed-subscribe/jlleblanc"
              method="post"
              target="popupwindow"
              className="flex flex-col sm:flex-row gap-4"
            >
              <input 
                type="email" 
                name="email" 
                className="flex-1 bg-slate-50 dark:bg-black border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-lime-500" 
                placeholder="you@example.com" 
                required 
              />
              <button 
                type="submit" 
                className="bg-lime-700 text-white px-8 py-3 rounded-xl font-bold hover:bg-lime-800 transition-colors shadow-lg shadow-lime-500/10"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section id="contact" className="mt-20 py-12 px-8 bg-white dark:bg-slate-900 text-slate-900 dark:text-white rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden relative">
          <div className="relative z-10 max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Let&apos;s Start a Conversation</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-10 text-lg">
              Tell me a bit about what you&apos;re working on, and I&apos;ll get back to you within 24 hours.
            </p>

            <a 
              href="mailto:contact@jlleblanc.com?subject=Let's work together"
              className="inline-flex items-center gap-3 bg-lime-700 hover:bg-lime-800 text-white font-bold py-4 px-10 rounded-xl shadow-lg transition-all text-xl"
            >
              Email Me <Mail size={24} />
            </a>

            {/* Form is hidden for now but preserved in code */}
            {false && (
              <form onSubmit={handleSubmit} className="mt-12 space-y-6 text-left border-t border-slate-200 dark:border-slate-800 pt-12">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-wide">Name</label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-slate-50 dark:bg-black border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-lime-500 transition-all" 
                      placeholder="Your Name" 
                      required 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-wide">Email</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-slate-50 dark:bg-black border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-lime-500 transition-all" 
                      placeholder="you@example.com" 
                      required 
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-wide">What are you looking to build or solve?</label>
                  <textarea 
                    name="problem"
                    value={formData.problem}
                    onChange={handleInputChange}
                    className="w-full bg-slate-50 dark:bg-black border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-lime-500 transition-all min-h-[120px]" 
                    placeholder="Briefly describe your project or challenge..." 
                    required
                  ></textarea>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-500 dark:text-slate-400 mb-4 uppercase tracking-wide">How can I help?</label>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {[
                      'Install & Configure Brunch',
                      'Ongoing Technical Partnership',
                      'One-off Assessment / Consultation',
                      'Something else'
                    ].map((option) => (
                      <label key={option} className={`flex items-center gap-3 p-3 rounded-xl border transition-all cursor-pointer ${
                        formData.help_options.includes(option) 
                          ? 'bg-lime-500/10 border-lime-500 text-lime-700 dark:text-lime-400' 
                          : 'bg-slate-50 dark:bg-black border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:border-slate-400 dark:hover:border-slate-500'
                      }`}>
                        <input 
                          type="checkbox" 
                          className="sr-only"
                          checked={formData.help_options.includes(option)}
                          onChange={() => handleCheckboxChange(option)}
                        />
                        <div className={`w-5 h-5 rounded border flex items-center justify-center transition-all ${
                          formData.help_options.includes(option) ? 'bg-lime-600 border-lime-600' : 'border-slate-300 dark:border-slate-600'
                        }`}>
                          {formData.help_options.includes(option) && <CheckCircle2 size={14} className="text-white" />}
                        </div>
                        <span className="text-sm font-medium">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <button 
                  type="submit" 
                  disabled={status === 'submitting'}
                  className="w-full bg-lime-700 hover:bg-lime-800 text-white font-bold py-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  {status === 'submitting' ? (
                    'Sending...'
                  ) : (
                    <>Send Message <Send size={20} /></>
                  )}
                </button>
                {status === 'error' && (
                  <p className="text-red-500 text-sm text-center">There was an error sending your message. Please try again or email contact@jlleblanc.com.</p>
                )}
              </form>
            )}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-200 dark:border-slate-800 text-center transition-colors duration-300 bg-white dark:bg-black">
        <div className="flex justify-center gap-6 mb-8">
          <a href={siteConfig.socialLinks.github} className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
          </a>
          <a href={siteConfig.socialLinks.linkedin} className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
          </a>
        </div>
        <p className="text-slate-500 text-sm">
          © 2002 - {new Date().getFullYear()} People Scaled LLC. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export async function getStaticProps() {
  const introPath = path.join(process.cwd(), 'content/intro.md');
  const brunchPath = path.join(process.cwd(), 'content/brunch.md');
  const workingTogetherPath = path.join(process.cwd(), 'content/working-together.md');

  const intro = fs.readFileSync(introPath, 'utf8');
  const brunch = fs.readFileSync(brunchPath, 'utf8');
  const workingTogether = fs.readFileSync(workingTogetherPath, 'utf8');

  return {
    props: {
      intro,
      brunch,
      workingTogether,
    },
  };
}
