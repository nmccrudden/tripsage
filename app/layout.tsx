import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "TripSage — See more. Spend less.",
  description:
    "TripSage compares ticket prices for the most popular attractions so you can book confidently — with minimal fuss.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          fontFamily:
            "system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial",
          background: "#fff",
          color: "#111",
        }}
      >
        {/* HEADER */}
        <header
          style={{
            position: "sticky",
            top: 0,
            zIndex: 50,
            background: "rgba(255,255,255,0.9)",
            backdropFilter: "blur(12px)",
            borderBottom: "1px solid #eee",
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
            <Link
              href="/"
              style={{
                textDecoration: "none",
                fontWeight: 700,
                fontSize: "20px",
                letterSpacing: "-0.3px",
                color: "#111",
              }}
            >
              TripSage
            </Link>

            <nav style={{ display: "flex", gap: "20px" }}>
              <Link href="/new-york" style={navLink}>
                New York
              </Link>
              <Link href="/about" style={navLink}>
                About
              </Link>
            </nav>
          </div>
        </header>

        {children}

        {/* FOOTER */}
        <footer
          style={{
            borderTop: "1px solid #eee",
            marginTop: "120px",
            padding: "48px 24px",
            background: "#fafafa",
          }}
        >
          <div style={{ maxWidth: "1200px", margin: "0 auto", fontSize: "14px", color: "#555" }}>
            <strong>TripSage</strong>
            <p style={{ maxWidth: "600px", marginTop: "8px" }}>
              TripSage compares ticket prices for the most popular attractions so you can book confidently — with minimal fuss.
            </p>

            <p style={{ marginTop: "16px", fontSize: "12px", color: "#777" }}>
              TripSage may earn a small commission if you book through our links, at no extra cost to you.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}

const navLink = {
  textDecoration: "none",
  color: "#444",
  fontSize: "15px",
  fontWeight: 500,
};
