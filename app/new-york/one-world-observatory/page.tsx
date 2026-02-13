import Link from "next/link";

export default function OneWorld() {
  return (
    <main
      style={{
        fontFamily: "system-ui",
        background: "#fafafa",
        minHeight: "100vh",
        padding: "80px 24px",
      }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <Link href="/" style={{ textDecoration: "none", color: "#666", fontSize: "14px" }}>
          ← Back to New York
        </Link>

        <h1 style={{ fontSize: "48px", marginTop: "16px", marginBottom: "12px" }}>
          One World Observatory Tickets
        </h1>

        <p style={{ fontSize: "18px", color: "#555", maxWidth: "700px" }}>
          Compare ticket options for One World Observatory.  
          We highlight the best-value option, the most flexible ticket, and the best choice for last-minute bookings.
        </p>

        <div style={{ display: "grid", gap: "24px", marginTop: "48px" }}>
          <OfferCard
            title="Best Value Ticket"
            description="The cheapest reliable option with instant confirmation."
            href="https://www.getyourguide.com/new-york-city-l59/nyc-one-world-observatory-skip-the-line-ticket-t552373/?partner_id=UXBBWLN&utm_medium=online_publisher"
            button="View best deal"
          />

          <OfferCard
            title="Flexible Refundable Ticket"
            description="Free cancellation available if your plans change."
            href="PASTE_YOUR_REFUNDABLE_LINK"
            button="View flexible option"
          />

          <OfferCard
            title="Last-Minute Tickets"
            description="Same-day or next-day availability."
            href="PASTE_YOUR_LAST_MINUTE_LINK"
            button="View last-minute availability"
          />
        </div>

        <p style={{ marginTop: "60px", fontSize: "12px", color: "#777" }}>
          TripSage may earn a small commission if you book through our links, at no extra cost to you.
        </p>
      </div>
    </main>
  );
}

function OfferCard({
  title,
  description,
  href,
  button,
}: {
  title: string;
  description: string;
  href: string;
  button: string;
}) {
  return (
    <div
      style={{
        background: "white",
        borderRadius: "18px",
        padding: "24px",
        border: "1px solid #eee",
        boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
      }}
    >
      <h3 style={{ fontSize: "20px", marginBottom: "6px" }}>{title}</h3>
      <p style={{ color: "#555", marginBottom: "12px" }}>{description}</p>

      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-block",
          padding: "10px 16px",
          borderRadius: "10px",
          background: "#111",
          color: "white",
          textDecoration: "none",
          fontSize: "14px",
        }}
      >
        {button}
      </a>
    </div>
  );
}
