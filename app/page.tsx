export default function Home() {
  return (
    <main style={{ padding: "60px", fontFamily: "system-ui", maxWidth: "900px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "48px", marginBottom: "10px" }}>TripSage</h1>
      <p style={{ fontSize: "20px", color: "#555" }}>See more. Spend less.</p>

      <div style={{ marginTop: "40px" }}>
        <h2>New York</h2>
        <ul style={{ lineHeight: "2", fontSize: "18px" }}>
          <li><a href="/new-york/one-world-observatory">One World Observatory</a></li>
          <li><a href="/new-york/top-of-the-rock">Top of the Rock</a></li>
          <li><a href="/new-york/empire-state-building">Empire State Building</a></li>
          <li><a href="/new-york/statue-of-liberty">Statue of Liberty</a></li>
          <li><a href="/new-york/summit-one-vanderbilt">SUMMIT One Vanderbilt</a></li>
        </ul>
      </div>
    </main>
  );
}
