# Ladies Hair Clips E-commerce MVP Plan

## 1) Complete MVP Feature List

### Customer-Facing
- **Responsive storefront** optimized for mobile and low-bandwidth.
- **Authentication** via Email + Password (signup, login, password reset).
- **Product catalog** with categories (e.g., Flower Clips, Star Clips).
- **Variant selection** by color (color swatches + name).
- **3D product viewer** (rotate, zoom, and color change mapped to variant).
- **Product detail page** with images + 3D model + availability.
- **Shopping cart** (add/remove/update quantities).
- **Checkout** with **Cash on Delivery (COD)** only.
- **Order confirmation** and email receipt.
- **User dashboard**: order history + order details.

### Admin Panel
- **Secure admin login**.
- **Product CRUD** (create/read/update/delete).
- **Variant management** for colors (price/stock per color).
- **Asset management** (upload images + 3D model files).
- **Order management** (view, update status: Pending → Confirmed → Shipped → Delivered/Cancelled).
- **Basic sales dashboard** (daily orders, revenue, top products).

## 2) User Flow Diagrams

### Customer Flow
```
Landing/Home
  ↓
Product Listing (filters/search)
  ↓
Product Detail (3D viewer + color selection)
  ↓
Add to Cart
  ↓
Cart Review
  ↓
Checkout (COD + address + phone)
  ↓
Order Confirmation
  ↓
User Dashboard (Order History → Order Detail)
```

### Admin Flow
```
Admin Login
  ↓
Admin Dashboard
  ├─ Products
  │   ├─ Add Product
  │   ├─ Edit Product
  │   └─ Manage Variants (Colors/Stock)
  ├─ Orders
  │   ├─ View Order
  │   └─ Update Status
  └─ Sales Overview
```

## 3) Database Schema (Core Tables)

### Users
| Field | Type | Notes |
|---|---|---|
| id | UUID | Primary key |
| name | string | optional |
| email | string | unique |
| password_hash | string | salted hash |
| phone | string | optional |
| role | enum | `customer`, `admin` |
| created_at | timestamp | |
| updated_at | timestamp | |

### Products
| Field | Type | Notes |
|---|---|---|
| id | UUID | Primary key |
| name | string | e.g., "Flower Clip" |
| slug | string | unique |
| description | text | |
| base_price | decimal | default price |
| category | string | e.g., Flower, Star |
| is_active | boolean | |
| created_at | timestamp | |
| updated_at | timestamp | |

### ProductVariants (Colors)
| Field | Type | Notes |
|---|---|---|
| id | UUID | Primary key |
| product_id | UUID | FK → Products |
| color_name | string | e.g., Red |
| color_hex | string | e.g., #FF0000 |
| price | decimal | optional override |
| stock_qty | integer | |
| sku | string | optional |
| image_url | string | optional per color |
| model_color_map | json | maps variant to 3D material |
| created_at | timestamp | |
| updated_at | timestamp | |

### ProductAssets
| Field | Type | Notes |
|---|---|---|
| id | UUID | Primary key |
| product_id | UUID | FK → Products |
| type | enum | `image`, `model_3d` |
| url | string | CDN/Storage URL |
| created_at | timestamp | |

### Orders
| Field | Type | Notes |
|---|---|---|
| id | UUID | Primary key |
| user_id | UUID | FK → Users |
| status | enum | Pending/Confirmed/Shipped/Delivered/Cancelled |
| total_amount | decimal | |
| shipping_address | text | |
| phone | string | |
| payment_method | enum | `COD` |
| created_at | timestamp | |
| updated_at | timestamp | |

### OrderItems
| Field | Type | Notes |
|---|---|---|
| id | UUID | Primary key |
| order_id | UUID | FK → Orders |
| product_id | UUID | FK → Products |
| variant_id | UUID | FK → ProductVariants |
| quantity | integer | |
| unit_price | decimal | |
| created_at | timestamp | |

## 4) UI/UX Screen List

### Customer
1. Home / Landing
2. Product Listing (grid + filters)
3. Product Detail (3D viewer + color swatches)
4. Cart
5. Checkout (COD + address form)
6. Order Confirmation
7. Login / Signup / Forgot Password
8. User Dashboard
9. Order Detail

### Admin
1. Admin Login
2. Admin Dashboard (sales summary)
3. Product List
4. Add / Edit Product
5. Variant Manager (colors)
6. Asset Upload (images + 3D model)
7. Orders List
8. Order Detail + Status Update

## 5) Recommended Tech Stack

### Frontend
- **Next.js** (React) for SEO, fast page loads, and easy routing.
- **Three.js** (via React Three Fiber) for 3D product viewer.
- **Tailwind CSS** for fast, consistent styling.

### Backend
- **Node.js + Express** or **Next.js API routes** for API endpoints.
- **PostgreSQL** for relational data.
- **Prisma ORM** for schema management.
- **Auth**: NextAuth or custom JWT with bcrypt.

### Storage
- **Cloud storage** (S3-compatible or Cloudinary) for images + 3D models.

### Hosting
- **Vercel** (frontend + API) + **Supabase / Neon** (Postgres).

## 6) Step-by-Step Development Roadmap

### Phase 1: Foundations (Week 1)
1. Setup repo, linting, formatting, and CI.
2. Create database schema + migrations.
3. Implement authentication (Email/Password).

### Phase 2: Core Commerce (Week 2)
1. Build product listing + detail pages.
2. Implement variants (colors) and cart logic.
3. Add checkout with COD.

### Phase 3: Admin Panel (Week 3)
1. Build admin auth + dashboard.
2. Product CRUD + variant management.
3. Order management (status updates).

### Phase 4: 3D Experience (Week 4)
1. Integrate 3D viewer (rotate/zoom).
2. Add color switching mapped to variants.
3. Optimize performance for mobile.

### Phase 5: Polish + Launch (Week 5)
1. QA, performance tuning, and analytics.
2. Add email templates for order confirmation.
3. Deploy and monitor.

## 7) Scalability Suggestions

- **Inventory rules**: low-stock alerts + reorder thresholds.
- **More payment methods**: card, UPI, wallet (future).
- **Localization**: multi-language + multi-currency.
- **Search & recommendations**: “similar clips”.
- **Marketing tools**: coupons, flash sales, referral codes.
- **Performance**: CDN caching + image optimization.
- **Analytics**: funnel tracking for conversion optimization.

---

**Goal:** A fast, mobile-first, simple, and maintainable storefront that lets a small shop owner manage products, colors, and orders with minimal training.
