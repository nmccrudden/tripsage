import Link from "next/link";

export default function Home() {
  return (
    <main style={{ fontFamily: "system-ui", background: "#0b1220", color: "white", minHeight: "100vh" }}>
      {/* Hero */}
      <section
        style={{
          position: "relative",
          minHeight: "80vh",
          backgroundImage:
            "linear-gradient(rgba(11,18,32,0.6), rgba(11,18,32,0.85)), url('https://images.unsplash.com/photo-1549640364-6f7b43bfbac4?q=80&w=2070&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "80px 24px",
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <header style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "120px" }}>
            <div
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "12px",
                background: "linear-gradient(135deg, #5b8cff, #7b5bff)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 800,
                fontSize: "18px",
              }}
            >
              TS
            </div>
            <span style={{ fontSize: "20px", fontWeight: 700 }}>TripSage</span>
          </header>

          <h1 style={{ fontSize: "64px", lineHeight: 1.1, maxWidth: "700px", marginBottom: "20px" }}>
            Find the best-value tickets for top attractions
          </h1>
          <p style={{ fontSize: "20px", color: "#d1d5db", maxWidth: "640px", marginBottom: "32px" }}>
            Skip the clutter. TripSage shows you the best options based on your situation — value, flexibility, and
            last-minute availability.
          </p>

          <Link
            href="/new-york/one-world-observatory"
            style={{
              display: "inline-block",
              background: "linear-gradient(135deg, #5b8cff, #7b5bff)",
              padding: "14px 22px",
              borderRadius: "12px",
              color: "white",
              textDecoration: "none",
              fontWeight: 600,
            }}
          >
            Explore New York →
          </Link>
        </div>
      </section>

      {/* Featured City */}
      <section style={{ padding: "80px 24px", background: "#0f172a" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "36px", marginBottom: "24px" }}>New York City</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "20px",
            }}
          >
            <CityCard title="One World Observatory" href="/new-york/one-world-observatory" />
            <CityCard title="Top of the Rock" href="/new-york/top-of-the-rock" />
            <CityCard title="Empire State Building" href="/new-york/empire-state-building" />
            <CityCard title="SUMMIT One Vanderbilt" href="/new-york/summit-one-vanderbilt" />
            <CityCard title="Statue of Liberty" href="/new-york/statue-of-liberty" />
          </div>
        </div>
      </section>

      {/* Trust */}
      <section style={{ padding: "80px 24px", background: "#020617" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
          <h3 style={{ fontSize: "28px", marginBottom: "12px" }}>Why TripSage?</h3>
          <p style={{ color: "#9ca3af" }}>
            We compare tickets across trusted providers and highlight the best options for different types of travellers.
            No upsells. No spam. Just better choices.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: "40px 24px", background: "#020617", color: "#9ca3af", fontSize: "13px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          TripSage may earn a small commission if you book through our links, at no extra cost to you.
        </div>
      </footer>
    </main>
  );
}

function CityCard({ title, href }: { title: string; href: string }) {
  return (
    <Link href={href} style={{ textDecoration: "none" }}>
      <div
        style={{
          background: "#020617",
          borderRadius: "16px",
          padding: "22px",
          border: "1px solid #1f2933",
          transition: "transform 0.15s ease",
        }}
      >
        <h3 style={{ fontSize: "18px", marginBottom: "6px", color: "white" }}>{title}</h3>
        <p style={{ color: "#9ca3af", fontSize: "14px" }}>Compare tickets →</p>
      </div>
    </Link>
  );
}
