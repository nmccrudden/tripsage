import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "TripSage – See more. Spend less.",
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
      <body>
        <header
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 50,
            background: "rgba(0,0,0,0.6)",
            backdropFilter: "blur(8px)",
            borderBottom: "1px solid rgba(255,255,255,0.15)",
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

            <nav style={{ display: "flex", gap: "20px" }}>
              <Link
                href="/new-york"
                style={{
                  color: "white",
                  textDecoration: "none",
                  fontWeight: 500,
                }}
              >
                New York
              </Link>
              <Link
                href="/about"
                style={{
                  color: "white",
                  textDecoration: "none",
                  fontWeight: 500,
                }}
              >
                About
              </Link>
            </nav>
          </div>
        </header>

        <main style={{ paddingTop: "72px" }}>{children}</main>
      </body>
    </html>
  );
}
