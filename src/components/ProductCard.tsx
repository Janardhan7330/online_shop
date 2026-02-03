import Link from "next/link";

type ProductCardProps = {
  name: string;
  price: string;
  description: string;
  slug: string;
  badge?: string;
};

export default function ProductCard({
  name,
  price,
  description,
  slug,
  badge
}: ProductCardProps) {
  return (
    <div className="card">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h3>{name}</h3>
        {badge ? <span className="badge">{badge}</span> : null}
      </div>
      <p style={{ color: "#5c5c6d", fontSize: 14 }}>{description}</p>
      <p style={{ fontWeight: 600 }}>{price}</p>
      <Link className="button" href={`/products/${slug}`}>
        View
      </Link>
    </div>
  );
}
