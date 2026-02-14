import Link from "next/link";

export default function Home() {
  return (
    <main style={{ fontFamily: "system-ui" }}>
      {/* HERO */}
      <section
        style={{
          minHeight: "92vh",
          backgroundImage: "url(/nyc-hero.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* Overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.55)",
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
          <h1
            style={{
              fontSize: "64px",
              lineHeight: 1.05,
              marginBottom: "16px",
            }}
          >
            See more.
            <br />
            Spend less.
          </h1>

          <p style={{ fontSize: "22px", maxWidth: "620px", opacity: 0.95 }}>
            TripSage compares ticket prices for the most popular attractions so you can book
            confidently — with minimal fuss.
          </p>

          <div style={{ marginTop: "28px", display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <Link
              href="/new-york"
              style={{
                display: "inline-block",
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
                display: "inline-block",
                padding: "14px 22px",
                border: "1px solid rgba(255,255,255,0.6)",
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

      {/* TRUST STRIP */}
      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "80px 24px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "40px",
        }}
      >
        <div>
          <h3>Transparent comparisons</h3>
          <p>
            We compare tickets based on price, flexibility (refunds), and availability — not paid
            placements.
          </p>
        </div>

        <div>
          <h3>Trusted booking partners</h3>
          <p>
            We only link to established platforms like GetYourGuide so you can book with confidence.
          </p>
        </div>

        <div>
          <h3>No fake discounts</h3>
          <p>No inflated “was” prices. No sponsored rankings. Just clear comparisons.</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          padding: "40px 24px",
          borderTop: "1px solid #eee",
          textAlign: "center",
          fontSize: "13px",
          color: "#666",
        }}
      >
        TripSage may earn a small commission if you book through our links, at no extra cost to you.
      </footer>
    </main>
  );
}
