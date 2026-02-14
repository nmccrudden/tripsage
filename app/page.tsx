import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section
        style={{
          minHeight: "92vh",
          backgroundImage: "url(/hero-nyc.jpg)",
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
              "linear-gradient(180deg, rgba(0,0,0,0.35), rgba(0,0,0,0.75))",
          }}
        />

        <div
          style={{
            position: "relative",
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "140px 24px 120px",
            color: "white",
          }}
        >
          <h1
            style={{
              fontSize: "clamp(48px, 7vw, 84px)",
              lineHeight: 1.05,
              maxWidth: "760px",
              marginBottom: "20px",
              letterSpacing: "-0.5px",
            }}
          >
            See more.
            <br />
            Spend less.
          </h1>

          <p style={{ fontSize: "20px", maxWidth: "720px", opacity: 0.95 }}>
            TripSage compares ticket prices for the most popular attractions so you can book confidently — with minimal fuss.
          </p>

          <div style={{ display: "flex", gap: "14px", marginTop: "32px", flexWrap: "wrap" }}>
            <Link
              href="/new-york"
              style={{
                padding: "16px 26px",
                background: "white",
                color: "#111",
                borderRadius: "14px",
                textDecoration: "none",
                fontWeight: 600,
              }}
            >
              Explore New York
            </Link>

            <Link
              href="/about"
              style={{
                padding: "16px 26px",
                border: "1px solid rgba(255,255,255,0.7)",
                color: "white",
                borderRadius: "14px",
                textDecoration: "none",
                fontWeight: 600,
                background: "rgba(0,0,0,0.2)",
              }}
            >
              Why trust TripSage?
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
