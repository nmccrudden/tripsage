import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section
        style={{
          minHeight: "80vh",
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
              "linear-gradient(90deg, rgba(0,0,0,0.75), rgba(0,0,0,0.45), rgba(0,0,0,0.2))",
          }}
        />

        <div
          style={{
            position: "relative",
            maxWidth: "1100px",
            margin: "0 auto",
            padding: "120px 24px",
            color: "white",
          }}
        >
          <h1 style={{ fontSize: "56px", lineHeight: 1.1, marginBottom: "16px" }}>
            See more.
            <br />
            Spend less.
          </h1>

          <p style={{ fontSize: "20px", maxWidth: "560px", opacity: 0.95 }}>
            TripSage compares ticket prices for the most popular attractions so you can
            book confidently — with minimal fuss.
          </p>

          <div style={{ marginTop: "32px", display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <Link
              href="/new-york"
              style={{
                background: "white",
                color: "#111",
                padding: "14px 22px",
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
                border: "1px solid rgba(255,255,255,0.6)",
                color: "white",
                padding: "14px 22px",
                borderRadius: "12px",
                textDecoration: "none",
                fontWeight: 500,
              }}
            >
              Why trust TripSage?
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "100px 24px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "40px",
        }}
      >
        <div>
          <h3>Transparent comparisons</h3>
          <p>
            We compare tickets based on price, flexibility (refunds), and availability —
            not paid placements.
          </p>
        </div>

        <div>
          <h3>Trusted booking partners</h3>
          <p>
            We only link to established platforms like GetYourGuide and Viator so you
            can book with confidence.
          </p>
        </div>

        <div>
          <h3>No fake discounts</h3>
          <p>
            No inflated “was” prices. No sponsored rankings. Just clear comparisons.
          </p>
        </div>
      </section>
    </main>
  );
}
