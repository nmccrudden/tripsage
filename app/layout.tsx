import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "TripSage — See more. Spend less.",
  description: "Compare the best attraction tickets and avoid overpaying.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, sans-serif" }}>
        <header
          style={{
            background: "white",
            borderBottom: "1px solid #eee",
            position: "sticky",
            top: 0,
            zIndex: 100,
          }}
        >
          <div
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
              padding: "14px 24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Link
              href="/"
              style={{
                fontWeight: 800,
                fontSize: "22px",
                color: "#111",
                textDecoration: "none",
                letterSpacing: "-0.02em",
              }}
            >
              TripSage
            </Link>

            <nav style={{ display: "flex", gap: "20px" }}>
              <Link href="/new-york" style={{ color: "#333", textDecoration: "none" }}>
                New York
              </Link>
              <Link href="/about" style={{ color: "#333", textDecoration: "none" }}>
                About
              </Link>
            </nav>
          </div>
        </header>

        <div style={{ paddingTop: "64px" }}>{children}</div>
      </body>
    </html>
  );
}
