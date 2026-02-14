import "./globals.css";
import Link from "next/link";

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
      <body>
        <header
          style={{
            position: "sticky",
            top: 0,
            zIndex: 50,
            background: "rgba(20,20,20,0.9)",
            backdropFilter: "blur(6px)",
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
              color: "white",
            }}
          >
            <Link
              href="/"
              style={{
                fontWeight: 800,
                fontSize: "20px",
                color: "white",
                textDecoration: "none",
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

        {children}

        <footer
          style={{
            background: "#fafafa",
            borderTop: "1px solid #eee",
            marginTop: "80px",
          }}
        >
          <div
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
              padding: "40px 24px",
              fontSize: "14px",
              color: "#666",
            }}
          >
            TripSage may earn a small commission if you book through our links, at no
            extra cost to you.
          </div>
        </footer>
      </body>
    </html>
  );
}
