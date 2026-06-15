alter table public.products
  add column if not exists image_fit text not null default 'cover',
  add column if not exists image_position text not null default 'center';
