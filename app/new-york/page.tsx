import Link from "next/link";

export default function NewYork() {
  return (
    <main style={{ maxWidth: "1200px", margin: "0 auto", padding: "80px 24px", fontFamily: "system-ui" }}>
      <h1 style={{ fontSize: "42px", marginBottom: "16px" }}>New York attractions</h1>

      <p style={{ fontSize: "18px", color: "#555", maxWidth: "600px" }}>
        Compare the best-value tickets for New York’s most popular attractions — with minimal fuss.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "24px",
          marginTop: "40px",
        }}
      >
        {[
          { title: "SUMMIT One Vanderbilt", href: "/new-york/summit-one-vanderbilt" },
          { title: "One World Observatory", href: "/new-york/one-world-observatory" },
          { title: "Empire State Building", href: "/new-york/empire-state-building" },
          { title: "Top of the Rock", href: "/new-york/top-of-the-rock" },
          { title: "Statue of Liberty", href: "/new-york/statue-of-liberty" },
        ].map((item) => (
          <Link
            key={item.title}
            href={item.href}
            style={{
              padding: "20px",
              borderRadius: "14px",
              background: "white",
              textDecoration: "none",
              color: "#111",
              boxShadow: "0 10px 24px rgba(0,0,0,0.06)",
            }}
          >
            <h3 style={{ margin: 0 }}>{item.title}</h3>
            <p style={{ color: "#555", marginTop: "6px" }}>
              Compare tickets & availability
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
}
