import Link from "next/link";
import Product3DViewer from "../../../components/Product3DViewer";

const product = {
  name: "Flower Clip",
  description: "Soft petals, gentle clasp for daily wear.",
  price: "$6.50",
  colors: ["#f04e98", "#f4b4d3", "#fdd862", "#ffffff", "#1f1f1f"],
  modelLabel: "Flower Clip Model"
};

export default function ProductDetailPage() {
  return (
    <section style={{ display: "grid", gap: 24 }}>
      <div className="grid" style={{ gridTemplateColumns: "1.2fr 1fr" }}>
        <Product3DViewer
          modelLabel={product.modelLabel}
          selectedColor="Rose Pink"
        />
        <div className="card" style={{ display: "grid", gap: 12 }}>
          <h2 style={{ margin: 0 }}>{product.name}</h2>
          <p style={{ color: "#5c5c6d" }}>{product.description}</p>
          <strong>{product.price}</strong>
          <div>
            <span className="badge">Select color</span>
            <div className="swatches">
              {product.colors.map((color) => (
                <span
                  key={color}
                  className="swatch"
                  style={{ background: color }}
                />
              ))}
            </div>
          </div>
          <button className="button" type="button">
            Add to cart
          </button>
          <Link href="/cart">Go to cart</Link>
        </div>
      </div>
      <div className="notice">
        COD only. Orders placed before 2pm ship the next day.
      </div>
    </section>
  );
}
