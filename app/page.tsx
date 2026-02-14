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
              "linear-gradient(to right, rgba(0,0,0,0.65), rgba(0,0,0,0.25))",
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
          <h1 style={{ fontSize: "56px", lineHeight: 1.1, maxWidth: "700px" }}>
            See more.
            <br />
            Spend less.
          </h1>

          <p style={{ fontSize: "20px", maxWidth: "620px", marginTop: "20px" }}>
            TripSage compares ticket prices for the most popular attractions so you can
            book confidently — with minimal fuss.
          </p>

          <div style={{ display: "flex", gap: "12px", marginTop: "28px" }}>
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
                border: "1px solid white",
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

      {/* Trust section */}
      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "80px 24px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "32px",
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
            We only link to established platforms like GetYourGuide and Viator so you can
            book with confidence.
          </p>
        </div>

        <div>
          <h3>No fake discounts</h3>
          <p>No inflated “was” prices. No sponsored rankings. Just clear comparisons.</p>
        </div>
      </section>
    </main>
  );
}
