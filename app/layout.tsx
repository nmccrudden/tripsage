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
            background: "white",
            borderBottom: "1px solid #eee",
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
                fontWeight: 700,
                fontSize: "20px",
                textDecoration: "none",
                color: "#111",
              }}
            >
              TripSage
            </Link>

            <nav style={{ display: "flex", gap: "16px" }}>
              <Link href="/new-york" style={{ textDecoration: "none", color: "#555" }}>
                New York
              </Link>
              <Link href="/about" style={{ textDecoration: "none", color: "#555" }}>
                About
              </Link>
            </nav>
          </div>
        </header>

        {children}

        <footer
          style={{
            borderTop: "1px solid #eee",
            padding: "32px 24px",
            textAlign: "center",
            color: "#777",
            fontSize: "13px",
          }}
        >
          TripSage may earn a small commission if you book through our links, at no extra cost to you.
        </footer>
      </body>
    </html>
  );
}
