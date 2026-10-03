-- Household Budget — run once in Supabase SQL Editor.
-- Replace the two emails (lowercase) before running.

create table if not exists public.budget_entries (
  household_id text        not null,
  period_id    text        not null,   -- e.g. 2026-10-A (1st–15th), 2026-10-B (16th–end)
  user_key     text        not null,   -- imroze | nooriah
  data         jsonb       not null default '{}'::jsonb,
  updated_at   timestamptz not null default now(),
  primary key (household_id, period_id, user_key)
);

alter table public.budget_entries enable row level security;

grant select, insert, update, delete on public.budget_entries to authenticated;

drop policy if exists "household members only" on public.budget_entries;
create policy "household members only" on public.budget_entries
  for all to authenticated
  using      (lower(auth.jwt() ->> 'email') in ('imroze@example.com', 'nooriah@example.com'))
  with check (lower(auth.jwt() ->> 'email') in ('imroze@example.com', 'nooriah@example.com'));

-- Live sync between both devices
alter publication supabase_realtime add table public.budget_entries;
