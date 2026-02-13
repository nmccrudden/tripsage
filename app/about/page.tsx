export const metadata = {
  title: "About TripSage — How we help you save on attractions",
  description:
    "Learn how TripSage finds the best-value tickets for attractions and shows. Transparent picks, trusted partners, no sponsored rankings.",
};

export default function About() {
  return (
    <main
      style={{
        fontFamily: "system-ui",
        color: "#111",
        maxWidth: "900px",
        margin: "0 auto",
        padding: "120px 24px 80px",
      }}
    >
      <h1 style={{ fontSize: "48px", marginBottom: "16px" }}>About TripSage</h1>

      <p style={{ fontSize: "18px", color: "#444", lineHeight: 1.6 }}>
        TripSage helps travelers find the best-value tickets for popular attractions and shows — with minimal fuss.
        We focus on what actually matters when you’re booking: price, flexibility, and availability.
      </p>

      <h2 style={{ fontSize: "28px", marginTop: "48px" }}>How TripSage works</h2>
      <ul style={{ fontSize: "17px", color: "#444", lineHeight: 1.7 }}>
        <li>We compare ticket options across trusted booking platforms.</li>
        <li>We surface the best-value option for different needs (best value, refundable, late planners).</li>
        <li>We update recommendations regularly based on price and availability.</li>
      </ul>

      <h2 style={{ fontSize: "28px", marginTop: "48px" }}>How we make money</h2>
      <p style={{ fontSize: "17px", color: "#444", lineHeight: 1.7 }}>
        TripSage may earn a small commission if you book through our links, at no extra cost to you.
        This never affects how we rank or recommend options — we focus on best value for your situation.
      </p>

      <h2 style={{ fontSize: "28px", marginTop: "48px" }}>Why trust TripSage?</h2>
      <ul style={{ fontSize: "17px", color: "#444", lineHeight: 1.7 }}>
        <li>No sponsored rankings</li>
        <li>Transparent affiliate disclosure</li>
        <li>Built for real trip planning</li>
      </ul>

      <p style={{ marginTop: "48px", color: "#777", fontSize: "14px" }}>
        Questions or feedback? This is an early MVP — we’re building TripSage in the open.
      </p>
    </main>
  );
}
