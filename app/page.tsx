import Link from "next/link";

export default function Home() {
  return (
    <main style={{ fontFamily: "system-ui", background: "#ffffff", color: "#111", minHeight: "100vh" }}>
      {/* Header */}
      <header
        style={{
          position: "sticky",
          top: 0,
          background: "rgba(255,255,255,0.9)",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid #eee",
          zIndex: 10,
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "18px 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px", fontWeight: 700, fontSize: "18px" }}>
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "12px",
                background: "linear-gradient(135deg, #ff6a88, #ff8e53)",
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "14px",
              }}
            >
              TS
            </div>
            TripSage
          </div>

          <Link href="/new-york/one-world-observatory" style={{ textDecoration: "none", color: "#111", fontWeight: 500 }}>
            Explore New York
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section
        style={{
          position: "relative",
          height: "72vh",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=2070&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.25), rgba(0,0,0,0.55))",
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
          <h1 style={{ fontSize: "64px", maxWidth: "760px", lineHeight: 1.05 }}>
            See more. Spend less.
          </h1>
          <p style={{ fontSize: "20px", maxWidth: "620px", marginTop: "16px", color: "#f3f4f6" }}>
            TripSage helps you find the best-value tickets for top attractions and shows —
            based on what matters to you.
          </p>

          <Link
            href="/new-york/one-world-observatory"
            style={{
              display: "inline-block",
              marginTop: "28px",
              background: "#ff5a5f",
              padding: "14px 22px",
              borderRadius: "999px",
              color: "white",
              textDecoration: "none",
              fontWeight: 600,
            }}
          >
            Start exploring New York
          </Link>
        </div>
      </section>

      {/* City section */}
      <section style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "34px", marginBottom: "24px" }}>New York City</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "24px",
            }}
          >
            <AttractionCard
              title="One World Observatory"
              image="https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=1932&auto=format&fit=crop"
              href="/new-york/one-world-observatory"
            />
            <AttractionCard
              title="Top of the Rock"
              image="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?q=80&w=1932&auto=format&fit=crop"
              href="/new-york/top-of-the-rock"
            />
            <AttractionCard
              title="Empire State Building"
              image="https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?q=80&w=1932&auto=format&fit=crop"
              href="/new-york/empire-state-building"
            />
            <AttractionCard
              title="SUMMIT One Vanderbilt"
              image="https://images.unsplash.com/photo-1684500038750-29fa8b9a2b5b?q=80&w=1932&auto=format&fit=crop"
              href="/new-york/summit-one-vanderbilt"
            />
            <AttractionCard
              title="Statue of Liberty"
              image="https://images.unsplash.com/photo-1562004760-aceed7bb0fe3?q=80&w=1932&auto=format&fit=crop"
              href="/new-york/statue-of-liberty"
            />
          </div>
        </div>
      </section>

      {/* Trust */}
      <section style={{ padding: "80px 24px", background: "#fafafa" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
          <h3 style={{ fontSize: "28px", marginBottom: "12px" }}>Why TripSage?</h3>
          <p style={{ color: "#555" }}>
            We compare tickets across trusted providers and surface the best options for different travel situations —
            value, flexibility, and last-minute availability. No clutter. No pressure.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: "40px 24px", borderTop: "1px solid #eee", fontSize: "13px", color: "#666" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          TripSage may earn a small commission if you book through our links, at no extra cost to you.
        </div>
      </footer>
    </main>
  );
}

function AttractionCard({
  title,
  image,
  href,
}: {
  title: string;
  image: string;
  href: string;
}) {
  return (
    <Link href={href} style={{ textDecoration: "none" }}>
      <div
        style={{
          borderRadius: "20px",
          overflow: "hidden",
          boxShadow: "0 12px 28px rgba(0,0,0,0.12)",
          transition: "transform 0.15s ease",
          background: "white",
        }}
      >
        <div
          style={{
            height: "190px",
            backgroundImage: `url('${image}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div style={{ padding: "16px" }}>
          <h3 style={{ fontSize: "18px", color: "#111", marginBottom: "4px" }}>{title}</h3>
          <p style={{ fontSize: "14px", color: "#666" }}>Compare ticket options</p>
        </div>
      </div>
    </Link>
  );
}
