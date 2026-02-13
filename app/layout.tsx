import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "TripSage — See more. Spend less.",
  description:
    "Compare the best attraction tickets so you can book confidently with minimal fuss.",
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
            borderBottom: "1px solid #eee",
            background: "white",
            position: "sticky",
            top: 0,
            zIndex: 50,
          }}
        >
          <div
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
              padding: "16px 20px",
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
                textDecoration: "none",
                color: "#111",
              }}
            >
              TripSage
            </Link>

            <nav style={{ display: "flex", gap: "16px" }}>
              <Link href="/new-york" style={{ textDecoration: "none", color: "#333" }}>
                New York
              </Link>
              <Link href="/about" style={{ textDecoration: "none", color: "#333" }}>
                About
              </Link>
            </nav>
          </div>
        </header>

        {children}
      </body>
    </html>
  );
}
