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
      <body style={{ margin: 0, fontFamily: "system-ui, -apple-system, sans-serif" }}>
        <header
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 50,
            background: "rgba(0,0,0,0.35)",
            backdropFilter: "blur(10px)",
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
                fontSize: "20px",
                color: "white",
                textDecoration: "none",
                letterSpacing: "-0.02em",
              }}
            >
              TripSage
            </Link>

            <nav style={{ display: "flex", gap: "18px" }}>
              <Link href="/new-york" style={{ color: "white", textDecoration: "none" }}>
                New York
              </Link>
              <Link href="/about" style={{ color: "white", textDecoration: "none" }}>
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
