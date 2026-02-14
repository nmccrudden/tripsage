import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Statue of Liberty Tickets (Best Deals & Skip-the-Line) | TripSage",
  description:
    "Compare Statue of Liberty ticket prices, skip-the-line access, and refundable options. Find the best deal and avoid overpaying with TripSage.",
};

export default function StatueOfLibertyPage() {
  return (
    <main style={{ maxWidth: "1100px", margin: "0 auto", padding: "60px 24px", fontFamily: "system-ui" }}>
      <Link href="/new-york" style={{ textDecoration: "none", color: "#555" }}>
        ← Back to New York attractions
      </Link>

      <h1 style={{ fontSize: "42px", marginTop: "16px" }}>
        Statue of Liberty Tickets – Compare the Best Deals
      </h1>

      <p style={{ fontSize: "18px", color: "#555", maxWidth: "720px", marginTop: "12px" }}>
        Find the best Statue of Liberty tickets by comparing trusted platforms for price, flexibility,
        and last-minute availability — with minimal fuss.
      </p>

      <section style={{ marginTop: "48px", display: "grid", gap: "20px" }}>
        <div style={cardStyle}>
          <h3>Best value ticket</h3>
          <p>Reliable ferry and entry access at the lowest typical price.</p>
          <a href="/out/statue-of-liberty" style={buttonStyle} target="_blank" rel="noopener noreferrer">
            View best deal
          </a>
        </div>

        <div style={cardStyle}>
          <h3>Refundable ticket</h3>
          <p>Free cancellation if your plans change.</p>
          <a href="/out/statue-of-liberty" style={buttonStyle} target="_blank" rel="noopener noreferrer">
            View refundable option
          </a>
        </div>

        <div style={cardStyle}>
          <h3>Last-minute tickets</h3>
          <p>Available today or tomorrow with instant confirmation.</p>
          <a href="/out/statue-of-liberty" style={buttonStyle} target="_blank" rel="noopener noreferrer">
            View last-minute availability
          </a>
        </div>
      </section>
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
  display: "inline-block",
  marginTop: "12px",
  padding: "12px 16px",
  borderRadius: "12px",
  background: "#111",
  color: "white",
  textDecoration: "none",
  fontWeight: 600,
};
