import Link from "next/link";

export default function OneWorld() {
  return (
    <main style={{ fontFamily: "system-ui", color: "#111" }}>
      {/* Hero */}
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
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(180deg, rgba(0,0,0,0.7), rgba(0,0,0,0.35))",
          }}
        />

        <div
          style={{
            position: "relative",
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "140px 24px 80px",
            color: "white",
          }}
        >
          <Link href="/new-york" style={{ color: "white", textDecoration: "none", fontSize: "14px" }}>
            ← Back to New York
          </Link>

          <h1 style={{ fontSize: "52px", marginTop: "16px", maxWidth: "700px", lineHeight: 1.1 }}>
            One World Observatory tickets
          </h1>

          <p style={{ fontSize: "20px", maxWidth: "560px", marginTop: "16px", opacity: 0.95 }}>
            Compare the best-value tickets for One World Observatory — with minimal fuss.
          </p>
        </div>
      </section>

      {/* Content */}
      <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "80px 24px" }}>
        <h2 style={{ fontSize: "32px", marginBottom: "24px" }}>Best options right now</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
          }}
        >
          {/* Best Value */}
          <div
            style={{
              border: "1px solid #eee",
              borderRadius: "18px",
              padding: "24px",
              background: "white",
              boxShadow: "0 12px 30px rgba(0,0,0,0.06)",
            }}
          >
            <h3 style={{ marginTop: 0 }}>Best value overall</h3>
            <p style={{ color: "#555" }}>
              The cheapest reliable ticket with no unnecessary extras.
            </p>
            <a
              href="https://www.getyourguide.com/new-york-city-l59/nyc-one-world-observatory-skip-the-line-ticket-t552373/?partner_id=UXBBWLN&utm_medium=online_publisher"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                marginTop: "12px",
                padding: "12px 18px",
                borderRadius: "999px",
                background: "#111",
                color: "white",
                textDecoration: "none",
                fontWeight: 600,
                fontSize: "14px",
              }}
            >
              View best deal
            </a>
          </div>

          {/* Refundable */}
          <div
            style={{
              border: "1px solid #eee",
              borderRadius: "18px",
              padding: "24px",
              background: "white",
              boxShadow: "0 12px 30px rgba(0,0,0,0.06)",
            }}
          >
            <h3 style={{ marginTop: 0 }}>Best refundable option</h3>
            <p style={{ color: "#555" }}>
              Flexible ticket with free cancellation if plans change.
            </p>
            <a
              href="https://www.getyourguide.com/new-york-city-l59/nyc-one-world-observatory-skip-the-line-ticket-t552373/?partner_id=UXBBWLN&utm_medium=online_publisher"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                marginTop: "12px",
                padding: "12px 18px",
                borderRadius: "999px",
                background: "#111",
                color: "white",
                textDecoration: "none",
                fontWeight: 600,
                fontSize: "14px",
              }}
            >
              View refundable ticket
            </a>
          </div>

          {/* Late planners */}
          <div
            style={{
              border: "1px solid #eee",
              borderRadius: "18px",
              padding: "24px",
              background: "white",
              boxShadow: "0 12px 30px rgba(0,0,0,0.06)",
            }}
          >
            <h3 style={{ marginTop: 0 }}>Best for late planners</h3>
            <p style={{ color: "#555" }}>
              Available today or tomorrow with instant confirmation.
            </p>
            <a
              href="https://www.getyourguide.com/new-york-city-l59/nyc-one-world-observatory-skip-the-line-ticket-t552373/?partner_id=UXBBWLN&utm_medium=online_publisher"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                marginTop: "12px",
                padding: "12px 18px",
                borderRadius: "999px",
                background: "#111",
                color: "white",
                textDecoration: "none",
                fontWeight: 600,
                fontSize: "14px",
              }}
            >
              View last-minute options
            </a>
          </div>
        </div>

        <p style={{ marginTop: "48px", fontSize: "12px", color: "#777" }}>
          TripSage may earn a small commission if you book through our links, at no extra cost to you.
        </p>
      </section>
    </main>
  );
}
