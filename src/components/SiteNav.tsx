import Link from "next/link";

const links = [
  { href: "/", label: "Shop" },
  { href: "/cart", label: "Cart" },
  { href: "/account/orders", label: "My Orders" },
  { href: "/admin/login", label: "Admin" }
];

export default function SiteNav() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <strong>Bloom Clips</strong>
        <div className="nav-links">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
