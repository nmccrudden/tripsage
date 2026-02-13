import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "TripSage – See more. Spend less.",
  description: "Your smart guide to the best-value attractions and shows.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "system-ui, -apple-system, sans-serif" }}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
