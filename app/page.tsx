import Link from "next/link";

export const metadata = {
  title: "TripSage — See more. Spend less.",
  description:
    "Compare the best-value tickets for New York’s top attractions. Find the cheapest, refundable, and last-minute options with minimal fuss.",
};

export default function Home() {
  return (
    <main style={{ fontFamily: "system-ui", color: "#111" }}>
      {/* Hero */}
      <section
        style={{
          minHeight: "85vh",
          backgroundImage:
            "url(https://cdn.britannica.com/73/114973-050-2DC46083/Midtown-Manhattan-Empire-State-Building-New-York.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "120px 24px",
            color: "white",
            background: "rgba(0,0,0,0.55)",
          }}
        >
          <h1 style={{ fontSize: "72px", lineHeight: 1.02 }}>
            See more.<br />Spend less.
          </h1>

          <p style={{ fontSize: "20px", maxWidth: "560px", marginTop: "24px" }}>
            Compare the best-value tickets for New York’s top attractions — with minimal fuss.
          </p>

          <Link
            href="/new-york"
            style={{
              display: "inline-block",
              marginTop: "36px",
              padding: "14px 24px",
              background: "white",
              color: "#111",
              borderRadius: "999px",
              textDecoration: "none",
              fontWeight: 600,
              fontSize: "15px",
            }}
          >
            Explore New York attractions
          </Link>
        </div>
      </section>

      {/* Trust Signals */}
      <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "80px 24px" }}>
        <h2 style={{ fontSize: "36px", marginBottom: "32px" }}>
          Why travelers use TripSage
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "32px",
          }}
        >
          <div>
            <h3 style={{ fontSize: "20px", marginBottom: "8px" }}>Best value, not sponsored</h3>
            <p style={{ color: "#555" }}>
              We highlight the best-value tickets based on price, flexibility, and availability —
              not paid placements.
            </p>
          </div>

          <div>
            <h3 style={{ fontSize: "20px", marginBottom: "8px" }}>Trusted booking partners</h3>
            <p style={{ color: "#555" }}>
              We link to well-known ticket platforms used by millions of travelers worldwide.
            </p>
          </div>

          <div>
            <h3 style={{ fontSize: "20px", marginBottom: "8px" }}>Designed for real trips</h3>
            <p style={{ color: "#555" }}>
              Whether you’re booking ahead or last minute, TripSage helps you find the best option
              for your situation.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
