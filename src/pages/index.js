import { useState } from 'react';
import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import { ArrowRight, ExternalLink, Mail } from 'lucide-react';
import MicroblogShell from '../components/MicroblogShell';
import FeedPost from '../components/FeedPost';
import siteConfig from '../config/siteConfig';

const AVATAR_URL = 'https://github.com/jlleblanc.png';

export default function Home({ intro, brunch, workingTogether }) {
  const [activeTab, setActiveTab] = useState('posts');

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.name,
    url: siteConfig.siteUrl,
    jobTitle: 'Strategic Software Development & Technical Leadership',
    sameAs: [siteConfig.socialLinks.linkedin, siteConfig.socialLinks.github],
  };

  return (
    <MicroblogShell
      description="Helping organizations build digital tools that scale."
      canonicalUrl={siteConfig.siteUrl}
      jsonLd={jsonLd}
      feedTitle="Joe LeBlanc"
      showCompose
    >
      {/* Profile banner — microblog profile header */}
      <div className="border-b border-slate-200 dark:border-slate-800">
        <div className="h-32 bg-gradient-to-br from-lime-600 via-lime-700 to-slate-800 sm:h-40" />
        <div className="relative px-4 pb-4">
          <img
            src={AVATAR_URL}
            alt="Joe LeBlanc"
            className="-mt-12 mb-3 h-24 w-24 rounded-full border-4 border-white dark:border-black sm:-mt-16 sm:h-32 sm:w-32"
          />
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white sm:text-2xl">
                Joe LeBlanc
              </h2>
              <p className="text-slate-500 dark:text-slate-400">@jlleblanc</p>
              <p className="mt-3 text-[15px] leading-relaxed text-slate-800 dark:text-slate-200">
                Strategic Software Development &amp; Technical Leadership
              </p>
            </div>
            <a
              href="mailto:contact@jlleblanc.com?subject=Let's work together"
              className="inline-flex shrink-0 items-center justify-center rounded-full border border-slate-300 px-5 py-2 text-sm font-bold hover:bg-slate-100 dark:border-slate-600 dark:hover:bg-slate-900 transition-colors"
            >
              Message
            </a>
          </div>

          {/* Profile tabs (visual only) */}
          <div className="mt-4 flex border-b border-slate-200 dark:border-slate-800 -mx-4">
            {[
              { id: 'posts', label: 'Posts' },
              { id: 'about', label: 'About' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 py-4 text-center text-sm font-medium transition-colors relative ${
                  activeTab === tab.id
                    ? 'font-bold text-slate-900 dark:text-white'
                    : 'text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-900'
                }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <span className="absolute bottom-0 left-1/2 h-1 w-14 -translate-x-1/2 rounded-full bg-lime-600" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {activeTab === 'posts' ? (
        <>
          <FeedPost content={intro} label="Intro" pinned />

          <FeedPost content={brunch} label="Brunch" highlight>
            <div className="mt-3 flex flex-wrap gap-2">
              <a
                href="https://brunch-buffet.onrender.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-lime-700 px-4 py-2 text-sm font-bold text-white hover:bg-lime-800 transition-colors"
              >
                Demo
                <ExternalLink size={14} />
              </a>
            </div>
          </FeedPost>

          <FeedPost
            content={workingTogether}
            label="Working together"
            footer={
              <a
                href="mailto:contact@jlleblanc.com?subject=Let's work together"
                className="inline-flex items-center gap-2 rounded-full bg-lime-700 px-5 py-2.5 text-sm font-bold text-white hover:bg-lime-800 transition-colors"
              >
                Get started
                <ArrowRight size={16} />
              </a>
            }
          />

          <FeedPost label="Contact">
            <p className="text-[15px] leading-relaxed text-slate-800 dark:text-slate-200">
              Tell me what you&apos;re working on — I typically reply within 24 hours.
            </p>
            <a
              href="mailto:contact@jlleblanc.com?subject=Let's work together"
              className="mt-3 inline-flex items-center gap-2 text-lime-700 dark:text-lime-500 font-medium hover:underline"
            >
              contact@jlleblanc.com
              <Mail size={16} />
            </a>
          </FeedPost>
        </>
      ) : (
        <FeedPost label="About">
          <p className="text-[15px] leading-relaxed text-slate-800 dark:text-slate-200 mb-3">
            Over 20 years helping small businesses, nonprofits, and startups build software that scales — without endless acronyms or disappearing freelancers.
          </p>
          <p className="text-[15px] leading-relaxed text-slate-800 dark:text-slate-200 mb-3">
            I focus on Next.js, Supabase, and subscription systems. Creator of{' '}
            <a
              href="https://brunch-buffet.onrender.com"
              className="text-lime-700 dark:text-lime-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Brunch
            </a>
            , a platform for launching custom web apps fast.
          </p>
          <div className="flex flex-wrap gap-3 mt-2">
            <Link href="/experience" className="text-sm text-lime-700 dark:text-lime-500 hover:underline font-medium">
              View experience →
            </Link>
            <Link href="/blog" className="text-sm text-lime-700 dark:text-lime-500 hover:underline font-medium">
              Read blog →
            </Link>
          </div>
        </FeedPost>
      )}
    </MicroblogShell>
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
