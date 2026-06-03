import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import siteConfig from '../config/siteConfig';

const AVATAR_URL = 'https://github.com/jlleblanc.png';

export default function FeedPost({
  content,
  label,
  pinned = false,
  highlight = false,
  children,
  footer,
}) {
  return (
    <article
      className={`feed-post border-b border-slate-200 dark:border-slate-800 px-4 py-4 transition-colors hover:bg-slate-50/80 dark:hover:bg-slate-900/40 ${
        highlight ? 'bg-lime-50/40 dark:bg-lime-950/20' : ''
      }`}
    >
      <div className="flex gap-3">
        <img
          src={AVATAR_URL}
          alt={siteConfig.name}
          className="h-10 w-10 shrink-0 rounded-full border border-slate-200 dark:border-slate-700"
        />
        <div className="min-w-0 flex-1">
          <header className="mb-1 flex flex-wrap items-center gap-x-1 gap-y-0.5 text-[15px] leading-tight">
            <span className="font-bold text-slate-900 dark:text-white">{siteConfig.name}</span>
            <span className="text-slate-500 dark:text-slate-400">@jlleblanc</span>
            <span className="text-slate-400 dark:text-slate-600">·</span>
            {label && (
              <span className="text-slate-500 dark:text-slate-400">{label}</span>
            )}
            {pinned && (
              <span className="ml-auto flex items-center gap-1 text-xs font-medium text-lime-700 dark:text-lime-500">
                <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M16 12V4h1V2H7v2h1v8l-2 2v2h5v6l1 1 1-1v-6h5v-2l-2-2z" />
                </svg>
                Pinned
              </span>
            )}
          </header>

          {content && (
            <div className="feed-post-body prose prose-sm prose-slate dark:prose-invert prose-p:my-2 prose-headings:my-2 prose-ul:my-2 prose-li:my-0 max-w-none text-[15px] leading-relaxed text-slate-800 dark:text-slate-200">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
            </div>
          )}

          {children}

          {footer && <footer className="mt-3">{footer}</footer>}
        </div>
      </div>
    </article>
  );
}
