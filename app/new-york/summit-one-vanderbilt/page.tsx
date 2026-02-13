import Link from "next/link";

export default function SummitOneVanderbilt() {
  return (
    <main style={{ padding: "60px 24px", fontFamily: "system-ui", maxWidth: "900px", margin: "0 auto" }}>
      <Link href="/" style={{ textDecoration: "none", color: "#555" }}>← Back to New York</Link>

      <h1 style={{ fontSize: "42px", marginTop: "16px" }}>SUMMIT One Vanderbilt Tickets</h1>

      <p style={{ fontSize: "18px", color: "#555", maxWidth: "700px" }}>
        TripSage compares SUMMIT One Vanderbilt ticket options based on price, flexibility, and last-minute availability.
      </p>

      <div style={{ display: "grid", gap: "20px", marginTop: "40px" }}>
        <div style={cardStyle}>
          <h3>🏆 Best Value Overall</h3>
          <p>Cheapest reliable ticket with no unnecessary extras.</p>
          <a
            href="PASTE_SUMMIT_AFFILIATE_LINK_HERE"
            target="_blank"
            rel="noopener noreferrer"
            style={{ ...buttonStyle, display: "inline-block", textDecoration: "none", textAlign: "center" }}
          >
            View best deal
          </a>
        </div>

        <div style={cardStyle}>
          <h3>🔁 Best Refundable Option</h3>
          <p>Flexible ticket with free cancellation.</p>
          <button style={buttonStyle}>View refundable ticket</button>
        </div>

        <div style={cardStyle}>
          <h3>⏱ Best for Late Planners</h3>
          <p>Available today or tomorrow with instant confirmation.</p>
          <button style={buttonStyle}>View last-minute options</button>
        </div>
      </div>

      <p style={{ marginTop: "40px", fontSize: "12px", color: "#777" }}>
        TripSage may earn a small commission if you book through our links, at no extra cost to you.
      </p>
    </main>
  );
}

const cardStyle: React.CSSProperties = {
  border: "1px solid #eee",
  borderRadius: "16px",
  padding: "20px",
  background: "white",
  boxShadow: "0 10px 24px rgba(0,0,0,0.06)",
};

const buttonStyle: React.CSSProperties = {
  marginTop: "12px",
  padding: "10px 14px",
  borderRadius: "10px",
  border: "none",
  background: "#111",
  color: "white",
  cursor: "pointer",
};
