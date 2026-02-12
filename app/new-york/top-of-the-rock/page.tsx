export default function TopOfTheRock() {
  return (
    <main style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}>
      <section style={{ maxWidth: 960, margin: "0 auto", padding: "64px 24px" }}>
        <h1>Top of the Rock — Best Value Options</h1>
        <p>
          TripSage recommends the best value ways to visit Top of the Rock based
          on price, flexibility, and availability.
        </p>

        <div style={{ border: "1px solid #eee", borderRadius: 8, padding: 16, marginTop: 24 }}>
          🏆 <strong>Best Value Overall</strong>
          <p>Price: $XX</p>
          <p>Why: Trusted seller • Good availability</p>
          <a href="#" style={{ color: "#1F3A5F", fontWeight: 600 }}>
            Buy Ticket →
          </a>
        </div>

        <div style={{ border: "1px solid #eee", borderRadius: 8, padding: 16, marginTop: 16 }}>
          🕒 <strong>Best for Late Planners</strong>
          <p>Price: $XX</p>
          <p>Why: Available today</p>
          <a href="#" style={{ color: "#1F3A5F", fontWeight: 600 }}>
            Buy Ticket →
          </a>
        </div>

        <div style={{ border: "1px solid #eee", borderRadius: 8, padding: 16, marginTop: 16 }}>
          🔁 <strong>Best Refundable Option</strong>
          <p>Price: $XX</p>
          <p>Why: Free cancellation available</p>
          <a href="#" style={{ color: "#1F3A5F", fontWeight: 600 }}>
            Buy Ticket →
          </a>
        </div>

        <div style={{ border: "1px solid #eee", borderRadius: 8, padding: 16, marginTop: 16 }}>
          👨‍👩‍👧 <strong>Best for Families</strong>
          <p>Price: $XX</p>
          <p>Why: Child discounts available</p>
          <a href="#" style={{ color: "#1F3A5F", fontWeight: 600 }}>
            Buy Ticket →
          </a>
        </div>

        <p style={{ marginTop: 24, fontSize: 13, color: "#777" }}>
          We may earn a small commission at no extra cost to you.
        </p>
      </section>
    </main>
  );
}
