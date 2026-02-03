export default function AdminLoginPage() {
  return (
    <section style={{ display: "grid", gap: 20, maxWidth: 480 }}>
      <h2>Admin Login</h2>
      <div className="card">
        <form className="form">
          <label>
            Email
            <input placeholder="admin@bloomclips.com" />
          </label>
          <label>
            Password
            <input type="password" placeholder="••••••••" />
          </label>
          <button className="button" type="button">
            Sign in
          </button>
        </form>
      </div>
    </section>
  );
}
