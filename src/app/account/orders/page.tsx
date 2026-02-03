const orders = [
  {
    id: "OC-1203",
    date: "2024-07-12",
    status: "Shipped",
    total: "$19.50"
  },
  {
    id: "OC-1188",
    date: "2024-07-01",
    status: "Delivered",
    total: "$7.25"
  }
];

export default function OrdersPage() {
  return (
    <section style={{ display: "grid", gap: 20 }}>
      <h2>My Orders</h2>
      <div className="card">
        <table className="table">
          <thead>
            <tr>
              <th>Order</th>
              <th>Date</th>
              <th>Status</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.date}</td>
                <td>{order.status}</td>
                <td>{order.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
