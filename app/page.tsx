import Link from "next/link";

export default function Home() {
  return (
    <main style={{ background: "#fff", color: "#111" }}>
      {/* HERO */}
      <section
        style={{
          minHeight: "100vh",
          backgroundImage:
            "url(https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Statue_of_Liberty_and_Manhattan_skyline.jpg/1920px-Statue_of_Liberty_and_Manhattan_skyline.jpg)",
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
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.75) 100%)",
          }}
        />

        {/* Content */}
        <div
          style={{
            position: "relative",
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 24px",
            width: "100%",
          }}
        >
          <div style={{ maxWidth: "720px" }}>
            <h1
              style={{
                fontSize: "64px",
                lineHeight: 1.05,
                fontWeight: 700,
                color: "#fff",
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
                lineHeight: 1.5,
                color: "rgba(255,255,255,0.9)",
                maxWidth: "560px",
                marginBottom: "28px",
              }}
            >
              TripSage compares ticket prices for the most popular attractions so
              you can book confidently — with minimal fuss.
            </p>

            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <Link
                href="/new-york"
                style={{
                  background: "#fff",
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
                  color: "#fff",
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
        </div>
      </section>

      {/* TRUST SECTION */}
      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "100px 24px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "48px",
        }}
      >
        <div>
          <h3 style={{ fontSize: "22px", marginBottom: "8px" }}>
            Transparent comparisons
          </h3>
          <p style={{ color: "#555", lineHeight: 1.6 }}>
            We compare tickets based on price, flexibility (refunds), and
            availability — not paid placements.
          </p>
        </div>

        <div>
          <h3 style={{ fontSize: "22px", marginBottom: "8px" }}>
            Trusted booking partners
          </h3>
          <p style={{ color: "#555", lineHeight: 1.6 }}>
            We only link to established platforms like GetYourGuide and Viator so
            you can book with confidence.
          </p>
        </div>

        <div>
          <h3 style={{ fontSize: "22px", marginBottom: "8px" }}>
            No fake discounts
          </h3>
          <p style={{ color: "#555", lineHeight: 1.6 }}>
            No inflated “was” prices. No sponsored rankings. Just clear
            comparisons.
          </p>
        </div>
      </section>

      {/* FOOTER NOTE */}
      <section
        style={{
          background: "#fafafa",
          borderTop: "1px solid #eee",
          padding: "40px 24px",
          textAlign: "center",
          fontSize: "14px",
          color: "#666",
        }}
      >
        TripSage may earn a small commission if you book through our links, at no
        extra cost to you.
      </section>
    </main>
  );
}
