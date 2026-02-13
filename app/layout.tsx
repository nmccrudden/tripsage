import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "TripSage — See more. Spend less.",
  description: "Find the best-value tickets for top attractions and shows, with minimal fuss.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "system-ui", background: "#ffffff", color: "#111" }}>
        {/* Header */}
        <header
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 50,
            background: "rgba(255,255,255,0.95)",
            backdropFilter: "blur(10px)",
            borderBottom: "1px solid #eee",
          }}
        >
          <div
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
              padding: "16px 24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Link href="/" style={{ textDecoration: "none", color: "#111", fontWeight: 700, fontSize: "20px" }}>
              TripSage
            </Link>

            <div style={{ display: "flex", gap: "16px" }}>
              <Link href="/new-york" style={{ textDecoration: "none", color: "#111", fontSize: "14px" }}>
                New York
              </Link>
              <Link href="/about" style={{ textDecoration: "none", color: "#111", fontSize: "14px" }}>
                About
              </Link>
            </div>
          </div>
        </header>

        <div style={{ paddingTop: "72px", minHeight: "100vh" }}>{children}</div>

        <footer
          style={{
            borderTop: "1px solid #eee",
            padding: "24px",
            textAlign: "center",
            fontSize: "12px",
            color: "#777",
            background: "#fafafa",
          }}
        >
          TripSage may earn a small commission if you book through our links, at no extra cost to you.
        </footer>
      </body>
    </html>
  );
}
