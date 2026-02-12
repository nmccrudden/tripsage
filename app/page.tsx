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
    desc: "Iconic Rockefeller Center views with a classic NYC skyline.",
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
        padding: "60px 24px",
        maxWidth: "1100px",
        margin: "0 auto",
        fontFamily: "system-ui",
      }}
    >
      <h1 style={{ fontSize: "3rem", marginBottom: "0.5rem" }}>TripSage</h1>
      <p style={{ fontSize: "1.2rem", color: "#666" }}>
        See more. Spend less.
      </p>
      <p style={{ marginBottom: "2.5rem", maxWidth: "700px", color: "#444" }}>
        Your smart guide to the best-value attractions and shows in New York City.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "20px",
        }}
      >
        {attractions.map((a) => (
          <Link
            key={a.href}
            href={a.href}
            style={{
              textDecoration: "none",
              color: "inherit",
              border: "1px solid #eee",
              borderRadius: "14px",
              padding: "20px",
              background: "white",
              boxShadow: "0 8px 20px rgba(0,0,0,0.05)",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
            }}
          >
            <div
              style={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <h3 style={{ marginBottom: "8px", fontSize: "1.25rem" }}>
                  {a.title}
                </h3>
                <p style={{ color: "#666", fontSize: "0.95rem" }}>{a.desc}</p>
              </div>

              <span
                style={{
                  marginTop: "16px",
                  fontWeight: 600,
                  color: "#111",
                }}
              >
                View deals →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
