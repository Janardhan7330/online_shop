const metrics = [
  { label: "Orders Today", value: "12" },
  { label: "Revenue", value: "$148.50" },
  { label: "Top Product", value: "Flower Clip" }
];

export default function AdminDashboardPage() {
  return (
    <section style={{ display: "grid", gap: 20 }}>
      <h2>Admin Dashboard</h2>
      <div className="grid">
        {metrics.map((metric) => (
          <div key={metric.label} className="card">
            <p style={{ color: "#6a6a7a", margin: 0 }}>{metric.label}</p>
            <h3 style={{ margin: "8px 0 0" }}>{metric.value}</h3>
          </div>
        ))}
      </div>
      <div className="card">
        <h3>Quick Actions</h3>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <span className="tag">Add new product</span>
          <span className="tag">Review pending orders</span>
          <span className="tag">Upload new 3D model</span>
        </div>
      </div>
    </section>
  );
}
