export default function Home() {
  return (
    <main style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}>
      <section style={{ maxWidth: 960, margin: "0 auto", padding: "64px 24px" }}>
        <h1 style={{ fontSize: 42, fontWeight: 800, marginBottom: 12 }}>
          TripSage — See More. Spend Less.
        </h1>
        <p style={{ fontSize: 18, color: "#555", maxWidth: 720 }}>
          Find the best value way to experience top attractions — based on price,
          flexibility, and availability. No voucher codes. No hassle.
        </p>

        <a
          href="/new-york"
          style={{
            display: "inline-block",
            marginTop: 24,
            padding: "14px 20px",
            background: "#1F3A5F",
            color: "#fff",
            borderRadius: 8,
            textDecoration: "none",
            fontWeight: 600,
          }}
        >
          Find the Best Value Tickets in NYC
        </a>

        <p style={{ marginTop: 12, fontSize: 13, color: "#777" }}>
          No sign-up • Trusted partners • Verified picks
        </p>
      </section>

      <section style={{ background: "#f7f9fc" }}>
        <div style={{ maxWidth: 960, margin: "0 auto", padding: "48px 24px" }}>
          <h2>How TripSage works</h2>
          <ul style={{ lineHeight: 1.8 }}>
            <li>
              <strong>Pick a city</strong> — E.g New York.
            </li>
            <li>
              <strong>Pick what to see</strong> — Top attractions.
            </li>
            <li>
              <strong>Choose what fits your plans</strong> — Best value by situation.
            </li>
          </ul>
        </div>
      </section>

      <section style={{ maxWidth: 960, margin: "0 auto", padding: "48px 24px" }}>
        <h2>Example</h2>
        <p>
          <strong>Top of the Rock</strong>
          <br />
          Official price: $44
          <br />
          Best value pick: <strong>$31</strong>
          <br />
          Based on price + availability
        </p>
      </section>

      <footer style={{ borderTop: "1px solid #eee" }}>
        <div style={{ maxWidth: 960, margin: "0 auto", padding: "24px" }}>
          <p style={{ fontSize: 13, color: "#777" }}>
            We may earn a small commission if you buy through our links — at no extra cost to you.
          </p>
          <p style={{ fontSize: 13, color: "#777" }}>
            Contact: hello@tripsage.app
          </p>
        </div>
      </footer>
    </main>
  );
}
