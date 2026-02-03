# Bloom Clips MVP

A lightweight MVP scaffold for a ladies hair clip e-commerce shop with customer and admin flows.

## Included
- Customer storefront pages with product listing, detail, cart, checkout, and order history.
- Admin pages for login, dashboard, products, and orders.
- Placeholder 3D viewer component.
- Prisma schema for products, variants, users, and orders.

## Getting Started
1. Install dependencies.
2. Add `DATABASE_URL` to `.env` for Prisma.
3. Run the dev server.

```bash
npm install
npm run dev
```

## Notes
- The 3D viewer is a placeholder component ready to be wired to Three.js.
- Checkout uses Cash on Delivery only.
