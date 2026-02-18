export default function CheckoutPage() {
  return (
    <section style={{ display: "grid", gap: 20, maxWidth: 720 }}>
      <h2>Checkout</h2>
      <div className="card">
        <p className="notice">Cash on Delivery only.</p>
        <form className="form">
          <label>
            Full Name
            <input placeholder="Riya Sharma" />
          </label>
          <label>
            Phone Number
            <input placeholder="+91 98765 43210" />
          </label>
          <label>
            Shipping Address
            <textarea rows={3} placeholder="House, street, city, pin code" />
          </label>
          <label>
            Delivery Notes (optional)
            <textarea rows={2} placeholder="Any landmarks or timing" />
          </label>
          <button className="button" type="button">
            Place COD Order
          </button>
        </form>
      </div>
    </section>
  );
}
