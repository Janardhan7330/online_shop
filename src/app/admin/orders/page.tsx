const orders = [
  {
    id: "OC-1203",
    customer: "Riya Sharma",
    status: "Shipped",
    total: "$19.50"
  },
  {
    id: "OC-1204",
    customer: "Maya Patel",
    status: "Pending",
    total: "$14.75"
  }
];

export default function AdminOrdersPage() {
  return (
    <section style={{ display: "grid", gap: 20 }}>
      <h2>Orders</h2>
      <div className="card">
        <table className="table">
          <thead>
            <tr>
              <th>Order</th>
              <th>Customer</th>
              <th>Status</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.customer}</td>
                <td>{order.status}</td>
                <td>{order.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="card">
        <h3>Status Updates</h3>
        <p style={{ color: "#5c5c6d" }}>
          Update status to Confirmed, Shipped, Delivered, or Cancelled.
        </p>
      </div>
    </section>
  );
}
