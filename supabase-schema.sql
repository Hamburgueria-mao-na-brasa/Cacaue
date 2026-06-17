create extension if not exists "uuid-ossp";

create table users (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  email text unique not null,
  role text not null check (role in ('owner', 'admin')),
  permissions jsonb not null default '{}',
  created_at timestamptz not null default now()
);

create table customers (
  id uuid primary key default uuid_generate_v4(),
  full_name text not null,
  whatsapp text not null unique,
  email text,
  saved_address jsonb,
  orders_count integer not null default 0,
  total_spent numeric(12,2) not null default 0,
  last_purchase_at timestamptz,
  created_at timestamptz not null default now()
);

create table categories (
  id uuid primary key default uuid_generate_v4(),
  name text not null unique,
  slug text not null unique,
  sort_order integer not null default 0
);

create table products (
  id uuid primary key default uuid_generate_v4(),
  category_id uuid references categories(id),
  name text not null,
  photo_url text,
  price numeric(12,2) not null,
  short_description text,
  full_description text,
  minimum_order integer not null default 1,
  is_featured boolean not null default false,
  is_best_seller boolean not null default false,
  is_new boolean not null default false,
  is_available boolean not null default true,
  is_sold_out boolean not null default false,
  is_order_only boolean not null default false,
  views_count integer not null default 0,
  favorites_count integer not null default 0,
  created_at timestamptz not null default now()
);

create table orders (
  id uuid primary key default uuid_generate_v4(),
  protocol text not null unique,
  customer_id uuid references customers(id),
  customer_snapshot jsonb not null,
  fulfillment_type text not null check (fulfillment_type in ('entrega', 'retirada')),
  delivery_address jsonb,
  pickup_at timestamptz,
  subtotal numeric(12,2) not null,
  delivery_fee numeric(12,2) not null default 0,
  total numeric(12,2) not null,
  status text not null default 'novo',
  whatsapp_message text,
  created_at timestamptz not null default now()
);

create table order_items (
  id uuid primary key default uuid_generate_v4(),
  order_id uuid not null references orders(id) on delete cascade,
  product_id uuid references products(id),
  product_snapshot jsonb not null,
  quantity integer not null,
  unit_price numeric(12,2) not null,
  total numeric(12,2) not null
);

create table favorites (
  id uuid primary key default uuid_generate_v4(),
  customer_id uuid references customers(id) on delete cascade,
  product_id uuid references products(id) on delete cascade,
  created_at timestamptz not null default now(),
  unique (customer_id, product_id)
);

create table campaigns (
  id uuid primary key default uuid_generate_v4(),
  title text not null,
  description text,
  image_url text,
  starts_at date not null,
  ends_at date not null,
  is_active boolean not null default true,
  created_at timestamptz not null default now()
);

create table testimonials (
  id uuid primary key default uuid_generate_v4(),
  customer_name text not null,
  message text not null,
  rating integer check (rating between 1 and 5),
  status text not null default 'pending' check (status in ('pending', 'approved', 'rejected')),
  created_at timestamptz not null default now()
);

create table gallery (
  id uuid primary key default uuid_generate_v4(),
  title text,
  image_url text not null,
  sort_order integer not null default 0,
  is_visible boolean not null default true
);

create table settings (
  id uuid primary key default uuid_generate_v4(),
  key text not null unique,
  value jsonb not null,
  updated_at timestamptz not null default now()
);

create table banners (
  id uuid primary key default uuid_generate_v4(),
  title text not null,
  subtitle text,
  image_url text not null,
  cta_label text,
  cta_url text,
  is_active boolean not null default true,
  sort_order integer not null default 0
);

create index idx_products_category on products(category_id);
create index idx_orders_customer on orders(customer_id);
create index idx_orders_created_at on orders(created_at);
create index idx_campaigns_active_window on campaigns(is_active, starts_at, ends_at);
create index idx_testimonials_status on testimonials(status);
