import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Trust TripSage? | How We Find the Best Ticket Deals",
  description:
    "Learn how TripSage compares attraction tickets, how we make money, and why travelers trust our recommendations.",
};

export default function TrustPage() {
  return (
    <main style={{ maxWidth: "900px", margin: "0 auto", padding: "80px 24px", fontFamily: "system-ui" }}>
      <Link href="/" style={{ textDecoration: "none", color: "#555" }}>
        ← Back to TripSage
      </Link>

      <h1 style={{ fontSize: "42px", marginTop: "16px" }}>
        Why Trust TripSage?
      </h1>

      <p style={{ fontSize: "18px", color: "#555", marginTop: "16px", maxWidth: "720px" }}>
        TripSage exists for one reason: to help travelers find great-value attraction tickets without wasting
        time comparing dozens of booking sites.
      </p>

      <section style={{ marginTop: "48px", display: "grid", gap: "32px" }}>
        <div>
          <h2>How TripSage works</h2>
          <p style={{ color: "#555", maxWidth: "720px" }}>
            We compare ticket options across trusted booking platforms and highlight the best value based on:
            price, flexibility (refunds), and availability. Our goal is to save you time and help you avoid
            overpaying.
          </p>
        </div>

        <div>
          <h2>Are you sponsored?</h2>
          <p style={{ color: "#555", maxWidth: "720px" }}>
            No. TripSage does not accept paid placements or sponsored rankings. We may earn a small commission
            if you book through our links, but this does not affect how we rank deals. The price you pay is
            the same.
          </p>
        </div>

        <div>
          <h2>Why you can trust our picks</h2>
          <ul style={{ color: "#555", paddingLeft: "20px" }}>
            <li>We only link to established booking platforms</li>
            <li>We prioritize value, flexibility, and availability</li>
            <li>No sponsored placements</li>
            <li>No inflated “fake discounts”</li>
          </ul>
        </div>

        <div>
          <h2>Who TripSage is for</h2>
          <p style={{ color: "#555", maxWidth: "720px" }}>
            TripSage is built for travelers who want to see the best attractions without spending hours
            researching tickets. If you want clear recommendations with minimal fuss, you’re in the right place.
          </p>
        </div>
      </section>
    </main>
  );
}
