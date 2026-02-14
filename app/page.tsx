import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section
        style={{
          minHeight: "92vh",
          backgroundImage:
            "url(https://upload.wikimedia.org/wikipedia/commons/4/47/New_York_City_skyline_with_Statue_of_Liberty.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* Dark overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.55)",
          }}
        />

        {/* Content */}
        <div
          style={{
            position: "relative",
            maxWidth: "1100px",
            margin: "0 auto",
            padding: "120px 24px",
            color: "white",
          }}
        >
          <h1 style={{ fontSize: "56px", lineHeight: 1.1, maxWidth: "720px" }}>
            See more.
            <br />
            Spend less.
          </h1>

          <p style={{ fontSize: "20px", maxWidth: "620px", marginTop: "20px", opacity: 0.95 }}>
            TripSage compares ticket prices for the most popular attractions so you can book confidently — with minimal fuss.
          </p>

          <div style={{ display: "flex", gap: "14px", marginTop: "28px", flexWrap: "wrap" }}>
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
                fontWeight: 500,
              }}
            >
              Why trust TripSage?
            </Link>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "80px 24px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "32px",
        }}
      >
        <div>
          <h3 style={{ marginBottom: "8px" }}>Transparent comparisons</h3>
          <p style={{ color: "#555" }}>
            We compare tickets based on price, flexibility (refunds), and availability — not paid placements.
          </p>
        </div>

        <div>
          <h3 style={{ marginBottom: "8px" }}>Trusted booking partners</h3>
          <p style={{ color: "#555" }}>
            We only link to established platforms like GetYourGuide so you can book with confidence.
          </p>
        </div>

        <div>
          <h3 style={{ marginBottom: "8px" }}>No fake discounts</h3>
          <p style={{ color: "#555" }}>
            No inflated “was” prices. No sponsored rankings. Just clear comparisons.
          </p>
        </div>
      </section>
    </main>
  );
}
