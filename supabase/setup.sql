-- Required extensions
create extension if not exists pgcrypto;

-- Create table for inbound leads collected from the onboard flow
create table if not exists public.intake_leads (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  tasks jsonb not null default '[]'::jsonb,
  notes text,
  utm_source text,
  utm_medium text,
  utm_campaign text,
  utm_term text,
  utm_content text,
  referrer text,
  created_at timestamptz not null default now()
);

-- Enable RLS
alter table public.intake_leads enable row level security;

-- Allow anonymous inserts from the client
create policy if not exists "Allow anonymous inserts" on public.intake_leads
  for insert
  to anon
  with check (true);

-- Allow authenticated admin to read all leads (replace email as needed)
drop policy if exists "Allow admin read" on public.intake_leads;
create policy "Allow admin read" on public.intake_leads
  for select
  to authenticated
  using ((auth.jwt() ->> 'email') = 'contact@jlleblanc.com');

-- OPTIONAL: Webhook on new lead (uncomment and configure to enable)
-- Requires: create extension if not exists http; OR pg_net depending on plan
-- and storing a secret named 'lead_webhook_url' in Vault
-- create or replace function public.notify_new_lead()
-- returns trigger as $$
-- declare
--   url text;
--   payload jsonb;
-- begin
--   select decrypted_secret into url from vault.decrypted_secrets where name = 'lead_webhook_url';
--   payload := jsonb_build_object(
--     'email', new.email,
--     'tasks', new.tasks,
--     'notes', new.notes,
--     'utm_source', new.utm_source,
--     'utm_medium', new.utm_medium,
--     'utm_campaign', new.utm_campaign,
--     'utm_term', new.utm_term,
--     'utm_content', new.utm_content,
--     'referrer', new.referrer,
--     'created_at', new.created_at
--   );
--   perform net.http_post(url, 'application/json', payload::text);
--   return new;
-- end;
-- $$ language plpgsql security definer;
-- drop trigger if exists trg_notify_new_lead on public.intake_leads;
-- create trigger trg_notify_new_lead after insert on public.intake_leads
-- for each row execute function public.notify_new_lead();

-- Backfill-safe column additions for existing projects
alter table public.intake_leads add column if not exists utm_source text;
alter table public.intake_leads add column if not exists utm_medium text;
alter table public.intake_leads add column if not exists utm_campaign text;
alter table public.intake_leads add column if not exists utm_term text;
alter table public.intake_leads add column if not exists utm_content text;
alter table public.intake_leads add column if not exists referrer text;

-- Optionally allow the same email to read back their submission (disabled by default)
-- create policy "Allow self read" on public.intake_leads
--   for select using (false);

