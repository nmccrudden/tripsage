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
      <body style={{ margin: 0, fontFamily: "system-ui", color: "#111", background: "#ffffff" }}>
        <header
          style={{
            position: "sticky",
            top: 0,
            zIndex: 50,
            background: "rgba(255,255,255,0.9)",
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

            <nav style={{ display: "flex", gap: "16px" }}>
              <Link href="/new-york" style={{ textDecoration: "none", color: "#111", fontSize: "14px" }}>
                New York
              </Link>
            </nav>
          </div>
        </header>

        <main>{children}</main>
      </body>
    </html>
  );
}
