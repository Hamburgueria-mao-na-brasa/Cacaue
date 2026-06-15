create table if not exists public.admin_profiles (
  email text primary key,
  role text not null default 'admin',
  created_at timestamptz not null default now()
);

insert into public.admin_profiles (email, role)
values ('edifevi2404@gmail.com', 'owner')
on conflict (email) do update set role = excluded.role;

create or replace function public.is_cacaue_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.admin_profiles
    where email = auth.jwt() ->> 'email'
  );
$$;

create table if not exists public.products (
  id text primary key,
  name text not null,
  image text not null,
  image_fit text not null default 'cover',
  image_position text not null default 'center',
  category text not null,
  price numeric not null default 0,
  short_description text not null default '',
  description text not null default '',
  minimum integer not null default 1,
  available boolean not null default true,
  made_to_order boolean not null default true,
  tags text[] not null default '{}',
  sort_order integer not null default 0,
  updated_at timestamptz not null default now()
);

create table if not exists public.campaigns (
  id text primary key,
  title text not null,
  image text not null,
  description text not null default '',
  starts date not null,
  ends date not null,
  sort_order integer not null default 0,
  updated_at timestamptz not null default now()
);

create table if not exists public.store_settings (
  id text primary key default 'main',
  settings jsonb not null,
  updated_at timestamptz not null default now()
);

create table if not exists public.orders (
  id uuid primary key default gen_random_uuid(),
  protocol text not null,
  customer jsonb not null,
  items jsonb not null,
  subtotal numeric not null default 0,
  delivery_fee numeric not null default 0,
  total numeric not null default 0,
  status text not null default 'novo',
  created_at timestamptz not null default now()
);

alter table public.admin_profiles enable row level security;
alter table public.products enable row level security;
alter table public.campaigns enable row level security;
alter table public.store_settings enable row level security;
alter table public.orders enable row level security;

alter table public.products
  add column if not exists image_fit text not null default 'cover',
  add column if not exists image_position text not null default 'center';

drop policy if exists "Public can read products" on public.products;
create policy "Public can read products"
on public.products for select
using (true);

drop policy if exists "Admins can manage products" on public.products;
create policy "Admins can manage products"
on public.products for all
using (public.is_cacaue_admin())
with check (public.is_cacaue_admin());

drop policy if exists "Public can read campaigns" on public.campaigns;
create policy "Public can read campaigns"
on public.campaigns for select
using (true);

drop policy if exists "Admins can manage campaigns" on public.campaigns;
create policy "Admins can manage campaigns"
on public.campaigns for all
using (public.is_cacaue_admin())
with check (public.is_cacaue_admin());

drop policy if exists "Public can read store settings" on public.store_settings;
create policy "Public can read store settings"
on public.store_settings for select
using (true);

drop policy if exists "Admins can manage store settings" on public.store_settings;
create policy "Admins can manage store settings"
on public.store_settings for all
using (public.is_cacaue_admin())
with check (public.is_cacaue_admin());

drop policy if exists "Public can create orders" on public.orders;
create policy "Public can create orders"
on public.orders for insert
with check (true);

drop policy if exists "Admins can read orders" on public.orders;
create policy "Admins can read orders"
on public.orders for select
using (public.is_cacaue_admin());

insert into public.store_settings (id, settings)
values (
  'main',
  '{
    "whatsapp": "(64) 99253-8620",
    "instagram": "https://instagram.com/",
    "city": "Mineiros - GO",
    "weekHours": "Seg a sab 08h as 18h",
    "sundayHours": "Domingo 09h as 15h",
    "orderRule": "50% na confirmacao e restante na retirada",
    "heroEyebrow": "Cardapio online",
    "heroTitle": "Cacaue",
    "heroText": "Bolos, doces, sobremesas, kits e presenteaveis feitos com carinho em Mineiros - GO.",
    "heroImage": "assets/hero-cacaue.png"
  }'::jsonb
)
on conflict (id) do nothing;

grant usage on schema public to anon, authenticated;
grant select on public.products, public.campaigns, public.store_settings to anon, authenticated;
grant insert on public.orders to anon, authenticated;
grant select, insert, update, delete on public.products, public.campaigns, public.store_settings to authenticated;
grant select on public.orders to authenticated;

insert into storage.buckets (id, name, public)
values ('cacaue-images', 'cacaue-images', true)
on conflict (id) do update set public = true;

drop policy if exists "Public can read Cacaue images" on storage.objects;
create policy "Public can read Cacaue images"
on storage.objects for select
using (bucket_id = 'cacaue-images');

drop policy if exists "Admins can upload Cacaue images" on storage.objects;
create policy "Admins can upload Cacaue images"
on storage.objects for insert
with check (bucket_id = 'cacaue-images' and public.is_cacaue_admin());

drop policy if exists "Admins can update Cacaue images" on storage.objects;
create policy "Admins can update Cacaue images"
on storage.objects for update
using (bucket_id = 'cacaue-images' and public.is_cacaue_admin())
with check (bucket_id = 'cacaue-images' and public.is_cacaue_admin());
