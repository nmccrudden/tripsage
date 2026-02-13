import Link from "next/link";

export default function Home() {
  return (
    <main style={{ fontFamily: "system-ui", color: "#111" }}>
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

          <p style={{ fontSize: "20px", maxWidth: "520px", marginTop: "24px" }}>
            Find the best-value tickets for New York’s top attractions — with minimal fuss.
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
    </main>
  );
}
