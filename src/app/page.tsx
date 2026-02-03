import ProductCard from "../components/ProductCard";

const products = [
  {
    name: "Flower Clip",
    price: "$6.50",
    description: "Soft petals, gentle clasp for daily wear.",
    slug: "flower-clip",
    badge: "Best Seller"
  },
  {
    name: "Star Clip",
    price: "$7.25",
    description: "Five-point star with metallic sheen.",
    slug: "star-clip",
    badge: "New"
  },
  {
    name: "Pearl Clip",
    price: "$8.00",
    description: "Elegant pearl look for festive styling.",
    slug: "pearl-clip"
  }
];

export default function HomePage() {
  return (
    <section style={{ display: "grid", gap: 24 }}>
      <div className="card">
        <h1 style={{ margin: 0 }}>Bloom Clips</h1>
        <p style={{ color: "#5c5c6d" }}>
          Discover hair clips with color-rich variants and a 3D preview to help
          customers feel confident before ordering.
        </p>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <span className="tag">Cash on Delivery</span>
          <span className="tag">Color variants</span>
          <span className="tag">3D rotation</span>
        </div>
      </div>

      <div className="grid">
        {products.map((product) => (
          <ProductCard key={product.slug} {...product} />
        ))}
      </div>
    </section>
  );
}
