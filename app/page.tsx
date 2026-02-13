import Link from "next/link";

export default function Home() {
  return (
    <main style={{ fontFamily: "system-ui", background: "#ffffff", color: "#111", minHeight: "100vh" }}>
      {/* Header */}
      <header
        style={{
          position: "sticky",
          top: 0,
          background: "rgba(255,255,255,0.9)",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid #eee",
          zIndex: 10,
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "18px 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px", fontWeight: 700, fontSize: "18px" }}>
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "12px",
                background: "linear-gradient(135deg, #ff6a88, #ff8e53)",
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "14px",
              }}
            >
              TS
            </div>
            TripSage
          </div>

          <Link href="/new-york/one-world-observatory" style={{ textDecoration: "none", color: "#111", fontWeight: 500 }}>
            Explore New York
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section
        style={{
          position: "relative",
          height: "72vh",
          backgroundImage:
            "url('https://cdn.britannica.com/61/93061-050-99147DCE/Statue-of-Liberty-Island-New-York-Bay.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to bottom, rgba(0,0,0,0.35), rgba(0,0,0,0.65))",
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
          <h1 style={{ fontSize: "64px", maxWidth: "760px", lineHeight: 1.05 }}>
            See more. Spend less.
          </h1>
          <p style={{ fontSize: "20px", maxWidth: "620px", marginTop: "16px", color: "#f3f4f6" }}>
            Find the best-value tickets for New York’s top attractions — without the overwhelm.
          </p>

          <Link
            href="/new-york/one-world-observatory"
            style={{
              display: "inline-block",
              marginTop: "28px",
              background: "#ff5a5f",
              padding: "14px 22px",
              borderRadius: "999px",
              color: "white",
              textDecoration: "none",
              fontWeight: 600,
            }}
          >
            Start exploring New York
          </Link>
        </div>
      </section>

      {/* City section */}
      <section style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "34px", marginBottom: "24px" }}>New York City</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "24px",
            }}
          >
            <AttractionCard
              title="One Vanderbilt (SUMMIT)"
              image="https://s3.amazonaws.com/hines-images/one-vanderbilt/SLGreen_OneVanderbiltAve_05_ChrystlerAerial_082515_hres_web.jpg"
              href="/new-york/summit-one-vanderbilt"
            />
            <AttractionCard
              title="Empire State Building"
              image="https://cdn.britannica.com/73/114973-050-2DC46083/Midtown-Manhattan-Empire-State-Building-New-York.jpg"
              href="/new-york/empire-state-building"
            />
            <AttractionCard
              title="One World Observatory"
              image="https://media.cntraveler.com/photos/53e2ea84dddaa35c30f643ad/master/pass/one-world-observatory.jpg"
              href="/new-york/one-world-observatory"
            />
            <AttractionCard
              title="Top of the Rock"
              image="https://images.rove.me/w_1920%2Cq_85/ippbg9nihky4ojskja8l/new-york-top-of-the-rock.jpg"
              href="/new-york/top-of-the-rock"
            />
            <AttractionCard
              title="Statue of Liberty"
              image="https://cdn.britannica.com/61/93061-050-99147DCE/Statue-of-Liberty-Island-New-York-Bay.jpg"
              href="/new-york/statue-of-liberty"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: "40px 24px", borderTop: "1px solid #eee", fontSize: "13px", color: "#666" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          TripSage may earn a small commission if you book through our links, at no extra cost to you.
        </div>
      </footer>
    </main>
  );
}

function AttractionCard({
  title,
  image,
  href,
}: {
  title: string;
  image: string;
  href: string;
}) {
  return (
    <Link href={href} style={{ textDecoration: "none" }}>
      <div
        style={{
          borderRadius: "20px",
          overflow: "hidden",
          boxShadow: "0 12px 28px rgba(0,0,0,0.12)",
          background: "white",
        }}
      >
        <div
          style={{
            height: "190px",
            backgroundImage: `url('${image}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div style={{ padding: "16px" }}>
          <h3 style={{ fontSize: "18px", color: "#111", marginBottom: "4px" }}>{title}</h3>
          <p style={{ fontSize: "14px", color: "#666" }}>Compare ticket options</p>
        </div>
      </div>
    </Link>
  );
}
