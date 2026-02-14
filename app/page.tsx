import Link from "next/link";

export default function Home() {
  return (
    <main style={{ fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial" }}>
      {/* HERO */}
      <section
        style={{
          minHeight: "90vh",
          backgroundImage:
            "url(https://images.unsplash.com/photo-1545420331-8f7c3c1c1d5f?q=80&w=2000&auto=format&fit=crop)",
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
            background: "linear-gradient(180deg, rgba(0,0,0,0.55), rgba(0,0,0,0.75))",
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
          <span
            style={{
              display: "inline-block",
              padding: "8px 14px",
              borderRadius: "999px",
              background: "rgba(255,255,255,0.15)",
              fontSize: "14px",
              marginBottom: "20px",
            }}
          >
            New York attraction tickets, simplified
          </span>

          <h1
            style={{
              fontSize: "64px",
              maxWidth: "700px",
              lineHeight: 1.05,
              marginBottom: "20px",
            }}
          >
            See more. <br /> Spend less.
          </h1>

          <p style={{ fontSize: "20px", maxWidth: "560px", opacity: 0.95 }}>
            TripSage compares the best attraction tickets so you can book confidently — with minimal fuss.
          </p>

          <div style={{ display: "flex", gap: "14px", marginTop: "32px", flexWrap: "wrap" }}>
            <Link
              href="/new-york"
              style={{
                padding: "14px 22px",
                background: "white",
                color: "#111",
                borderRadius: "12px",
                textDecoration: "none",
                fontWeight: 600,
              }}
            >
              Explore New York attractions
            </Link>

            <Link
              href="/about"
              style={{
                padding: "14px 22px",
                border: "1px solid rgba(255,255,255,0.4)",
                color: "white",
                borderRadius: "12px",
                textDecoration: "none",
                fontWeight: 600,
              }}
            >
              Why trust TripSage?
            </Link>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "100px 24px" }}>
        <h2 style={{ fontSize: "36px", marginBottom: "40px" }}>Why travelers trust TripSage</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "32px",
          }}
        >
          <div>
            <h3>Curated deals</h3>
            <p style={{ color: "#555" }}>
              We highlight the best-value tickets across trusted booking platforms.
            </p>
          </div>

          <div>
            <h3>Transparent picks</h3>
            <p style={{ color: "#555" }}>
              No sponsored rankings. We compare price, flexibility, and availability.
            </p>
          </div>

          <div>
            <h3>Designed for travelers</h3>
            <p style={{ color: "#555" }}>
              Built for fast decisions — no spreadsheets, no fake discounts.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section style={{ background: "#fafafa", padding: "100px 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "36px", marginBottom: "40px" }}>
            Top New York attractions
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
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
                  borderRadius: "16px",
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
                <div style={{ padding: "18px" }}>
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
    </main>
  );
}
