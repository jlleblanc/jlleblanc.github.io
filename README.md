# Joe LeBlanc's Personal Website

This is the source code for Joe LeBlanc's personal website, showcasing software engineering leadership and services for startups.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Tailwind CSS](https://tailwindcss.com/docs) - a utility-first CSS framework.

## Deploy

This site is configured for static export. To deploy:

1. Run `npm run build` to generate the static files.
2. The output will be in the `out` directory, which can be deployed to any static hosting service.

## Supabase (Client-side)

This site uses client-side Supabase for the onboarding flow at `/onboard`.

1. Create a Supabase project
2. Run the SQL in `supabase/setup.sql` (enable the `pgcrypto` extension if `gen_random_uuid()` is unavailable)
3. Copy `.env.example` to `.env` and set:

```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

Note: This project uses `next export` for GitHub Pages. All Supabase calls happen client-side and require the anon key only. Apply RLS policies carefully.
