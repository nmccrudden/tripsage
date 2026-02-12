import Link from "next/link";

const attractions = [
  {
    title: "One World Observatory",
    href: "/new-york/one-world-observatory",
    desc: "Sky-high views from the tallest building in the Western Hemisphere.",
  },
  {
    title: "Top of the Rock",
    href: "/new-york/top-of-the-rock",
    desc: "Iconic Rockefeller Center views with classic skyline views.",
  },
  {
    title: "Empire State Building",
    href: "/new-york/empire-state-building",
    desc: "The legendary Art Deco skyscraper experience.",
  },
  {
    title: "SUMMIT One Vanderbilt",
    href: "/new-york/summit-one-vanderbilt",
    desc: "Immersive glass floors, mirrors, and sky boxes.",
  },
  {
    title: "Statue of Liberty",
    href: "/new-york/statue-of-liberty",
    desc: "The most famous symbol of New York and the USA.",
  },
];

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "80px 24px",
        background: "linear-gradient(180deg, #f8fafc 0%, #ffffff 60%)",
        fontFamily: "system-ui",
      }}
    >
      <section
        style={{
          maxWidth: "1100px",
          margin: "0 auto 60px auto",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "56px", marginBottom: "16px" }}>TripSage</h1>
        <p style={{ fontSize: "22px", color: "#555", marginBottom: "12px" }}>
          See more. Spend less.
        </p>
        <p style={{ maxWidth: "680px", margin: "0 auto", color: "#444" }}>
          Find the best-value tickets for New York attractions based on your situation —
          refundable, last-minute, family-friendly, or best overall value.
        </p>
      </section>

      <section
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "24px",
        }}
      >
        {attractions.map((a) => (
          <Link
            key={a.href}
            href={a.href}
            style={{
              textDecoration: "none",
              color: "inherit",
              borderRadius: "16px",
              padding: "24px",
              background: "white",
              boxShadow: "0 10px 24px rgba(0,0,0,0.08)",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
            }}
          >
            <div>
              <h3 style={{ fontSize: "20px", marginBottom: "8px" }}>
                {a.title}
              </h3>
              <p style={{ fontSize: "14px", color: "#666", marginBottom: "16px" }}>
                {a.desc}
              </p>
              <span style={{ fontWeight: 600 }}>View best options →</span>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
