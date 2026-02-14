import "./globals.css";
import Link from "next/link";

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
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 50,
            padding: "20px 24px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "white",
          }}
        >
          <Link
            href="/"
            style={{
              fontWeight: 600,
              fontSize: "20px",
              textDecoration: "none",
              color: "white",
            }}
          >
            TripSage
          </Link>

          <nav style={{ display: "flex", gap: "20px" }}>
            <Link href="/new-york" style={{ color: "white", textDecoration: "none" }}>
              New York
            </Link>
            <Link href="/about" style={{ color: "white", textDecoration: "none" }}>
              About
            </Link>
          </nav>
        </header>

        <main style={{ paddingTop: "80px" }}>{children}</main>

        <footer
          style={{
            borderTop: "1px solid #eee",
            marginTop: "80px",
            padding: "40px 24px",
            textAlign: "center",
            fontSize: "14px",
            color: "#666",
          }}
        >
          TripSage may earn a small commission if you book through our links, at no
          extra cost to you.
        </footer>
      </body>
    </html>
  );
}
