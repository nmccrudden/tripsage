import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section
        style={{
          minHeight: "85vh",
          backgroundImage:
            "url(https://images.unsplash.com/photo-1549921296-3a6b5c90b7c8?q=80&w=2000&auto=format&fit=crop)",
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
            background: "rgba(0,0,0,0.5)",
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
          <h1 style={{ fontSize: "60px", maxWidth: "760px", lineHeight: 1.1 }}>
            See more. Spend less.
          </h1>

          <p style={{ fontSize: "20px", maxWidth: "560px", marginTop: "20px", opacity: 0.95 }}>
            TripSage compares the best attraction tickets so you can book confidently — with minimal fuss.
          </p>

          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "32px" }}>
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
              Explore New York attractions
            </Link>

            <Link
              href="/trust"
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

      {/* Trust Signals */}
      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "80px 24px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "32px",
        }}
      >
        <div>
          <h3>Unbiased comparisons</h3>
          <p style={{ color: "#555" }}>
            No sponsored rankings. We compare prices, flexibility, and availability across trusted platforms.
          </p>
        </div>

        <div>
          <h3>Built for travelers</h3>
          <p style={{ color: "#555" }}>
            Designed to save you time and help you book confidently.
          </p>
        </div>

        <div>
          <h3>Transparent commissions</h3>
          <p style={{ color: "#555" }}>
            We may earn a small commission — at no extra cost to you.
          </p>
        </div>
      </section>
    </main>
  );
}
