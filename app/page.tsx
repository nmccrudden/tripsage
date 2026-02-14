import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section
        style={{
          minHeight: "85vh",
          backgroundImage: "url('/hero-nyc.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to right, rgba(0,0,0,0.6), rgba(0,0,0,0.2))",
          }}
        />

        <div
          style={{
            position: "relative",
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "120px 24px",
            color: "white",
          }}
        >
          <h1 style={{ fontSize: "64px", maxWidth: "700px", lineHeight: 1.05 }}>
            See more.
            <br />
            Spend less.
          </h1>

          <p style={{ fontSize: "20px", maxWidth: "620px", marginTop: "20px", opacity: 0.95 }}>
            TripSage compares ticket prices for the most popular attractions so you can book confidently — with minimal fuss.
          </p>

          <div style={{ display: "flex", gap: "12px", marginTop: "28px", flexWrap: "wrap" }}>
            <Link
              href="/new-york"
              style={{
                padding: "14px 22px",
                background: "white",
                color: "#111",
                borderRadius: "12px",
                textDecoration: "none",
                fontWeight: 600,
              }}
            >
              Explore New York
            </Link>

            <Link
              href="/about"
              style={{
                padding: "14px 22px",
                border: "1px solid rgba(255,255,255,0.7)",
                color: "white",
                borderRadius: "12px",
                textDecoration: "none",
                fontWeight: 600,
              }}
            >
              Why trust TripSage?
            </Link>
          </div>
        </div>
      </section>

      {/* Trust */}
      <section style={{ padding: "80px 24px", maxWidth: "1200px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "36px", marginBottom: "32px" }}>Why travelers trust TripSage</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "24px",
          }}
        >
          <div>
            <strong>Transparent comparisons</strong>
            <p style={{ color: "#555" }}>
              We compare tickets based on price, flexibility (refunds), and availability — not paid placements.
            </p>
          </div>

          <div>
            <strong>Trusted booking partners</strong>
            <p style={{ color: "#555" }}>
              We only link to established platforms like GetYourGuide and Viator.
            </p>
          </div>

          <div>
            <strong>No fake discounts</strong>
            <p style={{ color: "#555" }}>
              No inflated “was” prices. Just clear comparisons.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
