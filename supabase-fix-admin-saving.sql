-- Correção rápida para o Admin da Cacauê salvar no Supabase.
-- Rode este arquivo no SQL Editor do projeto Supabase Cacaue.

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
    where lower(email) = lower(auth.jwt() ->> 'email')
  );
$$;

create or replace function public.is_cacaue_owner()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.admin_profiles
    where lower(email) = lower(auth.jwt() ->> 'email')
      and role = 'owner'
  );
$$;

alter table public.admin_profiles enable row level security;
alter table public.products enable row level security;
alter table public.campaigns enable row level security;
alter table public.store_settings enable row level security;
alter table public.orders enable row level security;

grant usage on schema public to anon, authenticated;
grant execute on function public.is_cacaue_admin() to anon, authenticated;
grant execute on function public.is_cacaue_owner() to authenticated;
grant select on public.admin_profiles to authenticated;
grant select on public.products, public.campaigns, public.store_settings to anon, authenticated;
grant insert on public.orders to anon, authenticated;
grant select, insert, update, delete on public.products, public.campaigns, public.store_settings to authenticated;
grant select on public.orders to authenticated;
grant select on storage.objects to anon, authenticated;
grant insert, update, delete on storage.objects to authenticated;

insert into storage.buckets (id, name, public)
values ('cacaue-images', 'cacaue-images', true)
on conflict (id) do update set public = true;

drop policy if exists "Admins can manage products" on public.products;
create policy "Admins can manage products"
on public.products for all
using (public.is_cacaue_admin())
with check (public.is_cacaue_admin());

drop policy if exists "Admins can manage campaigns" on public.campaigns;
create policy "Admins can manage campaigns"
on public.campaigns for all
using (public.is_cacaue_admin())
with check (public.is_cacaue_admin());

drop policy if exists "Admins can manage store settings" on public.store_settings;
create policy "Admins can manage store settings"
on public.store_settings for all
using (public.is_cacaue_admin())
with check (public.is_cacaue_admin());

drop policy if exists "Admins can upload Cacaue images" on storage.objects;
create policy "Admins can upload Cacaue images"
on storage.objects for insert
with check (bucket_id = 'cacaue-images' and public.is_cacaue_admin());

drop policy if exists "Admins can update Cacaue images" on storage.objects;
create policy "Admins can update Cacaue images"
on storage.objects for update
using (bucket_id = 'cacaue-images' and public.is_cacaue_admin())
with check (bucket_id = 'cacaue-images' and public.is_cacaue_admin());

drop policy if exists "Admins can delete Cacaue images" on storage.objects;
create policy "Admins can delete Cacaue images"
on storage.objects for delete
using (bucket_id = 'cacaue-images' and public.is_cacaue_admin());
