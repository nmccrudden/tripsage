import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section
        style={{
          minHeight: "90vh",
          backgroundImage: "url(/hero-nyc.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        {/* Overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.45), rgba(0,0,0,0.65))",
          }}
        />

        <div
          style={{
            position: "relative",
            maxWidth: "820px",
            padding: "0 24px",
            color: "white",
          }}
        >
          <h1
            style={{
              fontSize: "64px",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              marginBottom: "20px",
            }}
          >
            See more.
            <br />
            Spend less.
          </h1>

          <p
            style={{
              fontSize: "20px",
              opacity: 0.95,
              maxWidth: "640px",
              margin: "0 auto 32px",
            }}
          >
            TripSage compares ticket prices for the most popular attractions so you can book confidently — with minimal fuss.
          </p>

          <div
            style={{
              display: "flex",
              gap: "12px",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
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
                border: "1px solid rgba(255,255,255,0.6)",
                color: "white",
                borderRadius: "12px",
                textDecoration: "none",
                fontWeight: 500,
                backdropFilter: "blur(4px)",
              }}
            >
              Why trust TripSage?
            </Link>
          </div>
        </div>
      </section>

      {/* Trust */}
      <section
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "96px 24px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "48px",
        }}
      >
        <div>
          <h3 style={{ fontSize: "20px", marginBottom: "8px" }}>
            Transparent comparisons
          </h3>
          <p style={{ color: "#555" }}>
            We compare tickets based on price, flexibility (refunds), and availability — not paid placements.
          </p>
        </div>

        <div>
          <h3 style={{ fontSize: "20px", marginBottom: "8px" }}>
            Trusted booking partners
          </h3>
          <p style={{ color: "#555" }}>
            We only link to established platforms like GetYourGuide and Viator so you can book with confidence.
          </p>
        </div>

        <div>
          <h3 style={{ fontSize: "20px", marginBottom: "8px" }}>
            No fake discounts
          </h3>
          <p style={{ color: "#555" }}>
            No inflated “was” prices. No sponsored rankings. Just clear comparisons.
          </p>
        </div>
      </section>
    </main>
  );
}
