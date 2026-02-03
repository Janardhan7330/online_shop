import Link from "next/link";

const cartItems = [
  {
    name: "Flower Clip",
    color: "Rose Pink",
    quantity: 2,
    price: "$6.50"
  },
  {
    name: "Star Clip",
    color: "Silver",
    quantity: 1,
    price: "$7.25"
  }
];

export default function CartPage() {
  return (
    <section style={{ display: "grid", gap: 20 }}>
      <h2>Cart</h2>
      <div className="card">
        <table className="table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Variant</th>
              <th>Qty</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={`${item.name}-${item.color}`}>
                <td>{item.name}</td>
                <td>{item.color}</td>
                <td>{item.quantity}</td>
                <td>{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="card" style={{ display: "grid", gap: 12 }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span>Subtotal</span>
          <strong>$20.25</strong>
        </div>
        <Link className="button" href="/checkout">
          Proceed to Checkout
        </Link>
      </div>
    </section>
  );
}
