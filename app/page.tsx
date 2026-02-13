import "./globals.css";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "TripSage — See more. Spend less.",
  description: "Find the best-value tickets for top attractions and shows.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "system-ui, -apple-system, sans-serif", background: "#ffffff", color: "#111" }}>
        <header
          style={{
            position: "sticky",
            top: 0,
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
              padding: "14px 24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Link href="/" style={{ textDecoration: "none", color: "#111", fontWeight: 700, fontSize: "20px" }}>
              TripSage
            </Link>

            <nav style={{ display: "flex", gap: "16px" }}>
              <Link href="/" style={{ textDecoration: "none", color: "#111", fontSize: "14px" }}>
                Home
              </Link>
              <Link href="/new-york/one-world-observatory" style={{ textDecoration: "none", color: "#111", fontSize: "14px" }}>
                New York
              </Link>
            </nav>
          </div>
        </header>

        <main>{children}</main>

        <Analytics />
      </body>
    </html>
  );
}
