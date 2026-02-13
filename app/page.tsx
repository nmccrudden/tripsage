import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section
        style={{
          minHeight: "90vh",
          backgroundImage:
            "url(https://images.unsplash.com/photo-1542222024-c39e2281f121?q=80&w=2400&auto=format&fit=crop)",
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
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.55), rgba(0,0,0,0.75))",
          }}
        />

        <div
          style={{
            position: "relative",
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "120px 24px",
            color: "white",
          }}
        >
          <h1
            style={{
              fontSize: "clamp(42px, 6vw, 72px)",
              lineHeight: 1.05,
              maxWidth: "720px",
              marginBottom: "16px",
            }}
          >
            See more.
            <br />
            Spend less.
          </h1>

          <p
            style={{
              fontSize: "20px",
              maxWidth: "520px",
              opacity: 0.95,
            }}
          >
            Compare the best attraction tickets so you can book confidently — with
            minimal fuss.
          </p>

          <div style={{ display: "flex", gap: "12px", marginTop: "28px", flexWrap: "wrap" }}>
            <Link
              href="/new-york"
              style={{
                padding: "14px 22px",
                background: "white",
                color: "#111",
                borderRadius: "999px",
                textDecoration: "none",
                fontWeight: 600,
              }}
            >
              Explore New York
            </Link>

            <Link
              href="/about"
              style={{
                padding: "14px 22px",
                border: "1px solid rgba(255,255,255,0.6)",
                color: "white",
                borderRadius: "999px",
                textDecoration: "none",
                fontWeight: 500,
                backdropFilter: "blur(4px)",
              }}
            >
              Why trust TripSage?
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURED GRID */}
      <section style={{ background: "#fff" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "96px 24px" }}>
          <h2 style={{ fontSize: "40px", marginBottom: "32px" }}>
            Top New York attractions
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
                title: "SUMMIT One Vanderbilt",
                image:
                  "https://s3.amazonaws.com/hines-images/one-vanderbilt/SLGreen_OneVanderbiltAve_05_ChrystlerAerial_082515_hres_web.jpg",
                href: "/new-york/summit-one-vanderbilt",
              },
            ].map((item) => (
              <Link
                key={item.title}
                href={item.href}
                style={{
                  textDecoration: "none",
                  color: "#111",
                  borderRadius: "20px",
                  overflow: "hidden",
                  background: "white",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  style={{ width: "100%", height: "220px", objectFit: "cover" }}
                />
                <div style={{ padding: "18px" }}>
                  <h3 style={{ margin: 0, fontSize: "20px" }}>{item.title}</h3>
                  <p style={{ color: "#666", marginTop: "6px" }}>
                    Compare tickets & availability
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section style={{ background: "#fafafa" }}>
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "96px 24px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "32px",
          }}
        >
          <div>
            <h3>Trusted platforms only</h3>
            <p style={{ color: "#555" }}>
              We link to established booking sites — no shady resellers.
            </p>
          </div>

          <div>
            <h3>No sponsored rankings</h3>
            <p style={{ color: "#555" }}>
              We don’t sell placements. Rankings are based on value and flexibility.
            </p>
          </div>

          <div>
            <h3>Built for real travelers</h3>
            <p style={{ color: "#555" }}>
              Designed to save time and avoid overpaying.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
