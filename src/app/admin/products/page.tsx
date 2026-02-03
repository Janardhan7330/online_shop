const products = [
  {
    name: "Flower Clip",
    variants: 4,
    stock: 120
  },
  {
    name: "Star Clip",
    variants: 5,
    stock: 80
  }
];

export default function AdminProductsPage() {
  return (
    <section style={{ display: "grid", gap: 20 }}>
      <h2>Products</h2>
      <div className="card">
        <table className="table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Variants</th>
              <th>Stock</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.name}>
                <td>{product.name}</td>
                <td>{product.variants}</td>
                <td>{product.stock}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="card">
        <h3>Variant Manager</h3>
        <p style={{ color: "#5c5c6d" }}>
          Add color variants, set price overrides, and manage SKU-level stock.
        </p>
      </div>
    </section>
  );
}
