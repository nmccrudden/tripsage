import Link from "next/link";

export default function Home() {
  return (
    <main style={{ padding: "80px 24px", fontFamily: "system-ui", maxWidth: "1000px", margin: "0 auto" }}>
      <header style={{ marginBottom: "60px" }}>
        <h1 style={{ fontSize: "56px", letterSpacing: "-1px" }}>TripSage</h1>
        <p style={{ fontSize: "20px", color: "#555", maxWidth: "700px" }}>
          See more. Spend less.  
          Your smart guide to the best-value attractions in top cities.
        </p>
      </header>

      <section>
        <h2 style={{ fontSize: "32px", marginBottom: "24px" }}>New York City</h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "20px" }}>
          <CityCard title="One World Observatory" href="/new-york/one-world-observatory" />
          <CityCard title="Top of the Rock" href="/new-york/top-of-the-rock" />
          <CityCard title="Empire State Building" href="/new-york/empire-state-building" />
          <CityCard title="SUMMIT One Vanderbilt" href="/new-york/summit-one-vanderbilt" />
          <CityCard title="Statue of Liberty" href="/new-york/statue-of-liberty" />
        </div>
      </section>

      <footer style={{ marginTop: "80px", fontSize: "12px", color: "#777" }}>
        TripSage may earn a small commission if you book through our links, at no extra cost to you.
      </footer>
    </main>
  );
}

function CityCard({ title, href }: { title: string; href: string }) {
  return (
    <Link href={href} style={{ textDecoration: "none" }}>
      <div
        style={{
          border: "1px solid #eee",
          borderRadius: "16px",
          padding: "24px",
          background: "white",
          boxShadow: "0 10px 24px rgba(0,0,0,0.06)",
          transition: "transform 0.15s ease",
        }}
      >
        <h3 style={{ fontSize: "20px", color: "#111" }}>{title}</h3>
        <p style={{ color: "#555" }}>Compare tickets →</p>
      </div>
    </Link>
  );
}
