import Link from "next/link";

export default function Home() {
  return (
    <main style={{ fontFamily: "system-ui", color: "#111" }}>
      {/* Header */}
      <header
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 10,
          padding: "24px",
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          color: "white",
        }}
      >
        <Link href="/" style={{ textDecoration: "none", color: "white" }}>
          <strong style={{ fontSize: "22px", letterSpacing: "0.4px" }}>
            TripSage
          </strong>
        </Link>

        <nav>
          <Link href="/new-york" style={{ color: "white", textDecoration: "none", fontSize: "14px" }}>
            New York
          </Link>
        </nav>
      </header>

      {/* Hero */}
      <section
        style={{
          minHeight: "95vh",
          backgroundImage:
            "url(https://cdn.britannica.com/73/114973-050-2DC46083/Midtown-Manhattan-Empire-State-Building-New-York.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(180deg, rgba(0,0,0,0.75), rgba(0,0,0,0.35))",
          }}
        />

        <div
          style={{
            position: "relative",
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "160px 24px 120px",
            color: "white",
            textAlign: "left",
          }}
        >
          <h1 style={{ fontSize: "72px", maxWidth: "700px", lineHeight: 1.02 }}>
            See more.<br />Spend less.
          </h1>

          <p style={{ fontSize: "20px", maxWidth: "520px", marginTop: "24px", opacity: 0.95 }}>
            Find the best-value tickets for New York’s top attractions — without the overwhelm.
          </p>

          <Link
            href="/new-york"
            style={{
              display: "inline-block",
              marginTop: "36px",
              padding: "14px 24px",
              background: "white",
              color: "#111",
              borderRadius: "999px",
              textDecoration: "none",
              fontWeight: 600,
              fontSize: "15px",
            }}
          >
            Explore New York attractions
          </Link>
        </div>
      </section>

      {/* Trust */}
      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "96px 24px 72px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "32px",
        }}
      >
        <div>
          <h3 style={{ fontSize: "20px", marginBottom: "8px" }}>Curated deals</h3>
          <p style={{ color: "#555" }}>
            We highlight the best-value tickets across trusted booking platforms.
          </p>
        </div>

        <div>
          <h3 style={{ fontSize: "20px", marginBottom: "8px" }}>Transparent picks</h3>
          <p style={{ color: "#555" }}>
            No sponsored rankings — we focus on price, flexibility, and availability.
          </p>
        </div>

        <div>
          <h3 style={{ fontSize: "20px", marginBottom: "8px" }}>Built for travelers</h3>
          <p style={{ color: "#555" }}>
            Simple comparisons designed to help you book confidently in minutes.
          </p>
        </div>
      </section>

      {/* Featured Attractions */}
      <section style={{ background: "#fafafa", padding: "88px 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "36px", marginBottom: "32px" }}>
            Popular New York attractions
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "24px",
            }}
          >
            {[
              {
                title: "SUMMIT One Vanderbilt",
                image:
                  "https://s3.amazonaws.com/hines-images/one-vanderbilt/SLGreen_OneVanderbiltAve_05_ChrystlerAerial_082515_hres_web.jpg",
                href: "/new-york/summit-one-vanderbilt",
              },
              {
                title: "One World Observatory",
                image:
                  "https://media.cntraveler.com/photos/53e2ea84dddaa35c30f643ad/master/pass/one-world-observatory.jpg",
                href: "/new-york/one-world-observatory",
              },
              {
                title: "Empire State Building",
                image:
                  "https://cdn.britannica.com/73/114973-050-2DC46083/Midtown-Manhattan-Empire-State-Building-New-York.jpg",
                href: "/new-york/empire-state-building",
              },
              {
                title: "Top of the Rock",
                image:
                  "https://images.rove.me/w_1920%2Cq_85/ippbg9nihky4ojskja8l/new-york-top-of-the-rock.jpg",
                href: "/new-york/top-of-the-rock",
              },
              {
                title: "Statue of Liberty",
                image:
                  "https://cdn.britannica.com/61/93061-050-99147DCE/Statue-of-Liberty-Island-New-York-Bay.jpg",
                href: "/new-york/statue-of-liberty",
              },
            ].map((item) => (
              <Link
                key={item.title}
                href={item.href}
                style={{
                  textDecoration: "none",
                  color: "#111",
                  borderRadius: "18px",
                  overflow: "hidden",
                  background: "white",
                  boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  style={{ width: "100%", height: "200px", objectFit: "cover" }}
                />
                <div style={{ padding: "16px" }}>
                  <h3 style={{ margin: 0 }}>{item.title}</h3>
                  <p style={{ color: "#555", marginTop: "6px" }}>
                    Compare tickets & availability
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          padding: "40px 24px",
          textAlign: "center",
          color: "#777",
          fontSize: "13px",
        }}
      >
        TripSage may earn a small commission if you book through our links, at no extra cost to you.
      </footer>
    </main>
  );
}
