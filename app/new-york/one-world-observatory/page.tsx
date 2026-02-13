import Link from "next/link";

export const metadata = {
  title: "Best One World Observatory Tickets (2026) — TripSage",
  description:
    "Compare the cheapest, refundable, and last-minute One World Observatory tickets. Find the best-value option with minimal fuss.",
};

export default function OneWorld() {
  return (
    <main style={{ fontFamily: "system-ui", color: "#111" }}>
      <section
        style={{
          minHeight: "70vh",
          backgroundImage:
            "url(https://media.cntraveler.com/photos/53e2ea84dddaa35c30f643ad/master/pass/one-world-observatory.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(0,0,0,0.7), rgba(0,0,0,0.35))" }} />

        <div style={{ position: "relative", maxWidth: "1200px", margin: "0 auto", padding: "140px 24px 80px", color: "white" }}>
          <Link href="/new-york" style={{ color: "white", textDecoration: "none", fontSize: "14px" }}>
            ← Back to New York
          </Link>

          <h1 style={{ fontSize: "52px", marginTop: "16px" }}>One World Observatory tickets</h1>
          <p style={{ fontSize: "20px", maxWidth: "560px", marginTop: "16px", opacity: 0.95 }}>
            Compare the best-value tickets for One World Observatory — with minimal fuss.
          </p>
        </div>
      </section>

      <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "80px 24px" }}>
        <h2 style={{ fontSize: "32px", marginBottom: "24px" }}>Best options right now</h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
          {["View best deal", "View refundable ticket", "View last-minute options"].map((label) => (
            <div key={label} style={{ border: "1px solid #eee", borderRadius: "18px", padding: "24px", background: "white", boxShadow: "0 12px 30px rgba(0,0,0,0.06)" }}>
              <h3>{label.replace("View ", "").replace(" options", "")}</h3>
              <p style={{ color: "#555" }}>Compare current availability and pricing from trusted platforms.</p>
              <a
                href="https://www.getyourguide.com/new-york-city-l59/nyc-one-world-observatory-skip-the-line-ticket-t552373/?partner_id=UXBBWLN&utm_medium=online_publisher"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "inline-block", marginTop: "12px", padding: "12px 18px", borderRadius: "999px", background: "#111", color: "white", textDecoration: "none", fontWeight: 600, fontSize: "14px" }}
              >
                {label}
              </a>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
