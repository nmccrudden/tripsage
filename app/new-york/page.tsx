import Link from "next/link";

export default function NewYork() {
  return (
    <main style={{ fontFamily: "system-ui", color: "#111" }}>
      {/* Hero */}
      <section
        style={{
          minHeight: "60vh",
          backgroundImage:
            "url(https://cdn.britannica.com/61/93061-050-99147DCE/Statue-of-Liberty-Island-New-York-Bay.jpg)",
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
            background: "linear-gradient(180deg, rgba(0,0,0,0.65), rgba(0,0,0,0.35))",
          }}
        />

        <div
          style={{
            position: "relative",
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "120px 24px 80px",
            color: "white",
          }}
        >
          <h1 style={{ fontSize: "52px", marginBottom: "12px" }}>New York attractions</h1>
          <p style={{ fontSize: "20px", maxWidth: "600px", opacity: 0.95 }}>
            Compare the best-value tickets for New York’s most popular sights — with minimal fuss.
          </p>
        </div>
      </section>

      {/* Attractions Grid */}
      <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "80px 24px" }}>
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
              <div style={{ height: "200px", overflow: "hidden" }}>
                <img
                  src={item.image}
                  alt={item.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div style={{ padding: "16px" }}>
                <h3 style={{ margin: 0 }}>{item.title}</h3>
                <p style={{ color: "#555", marginTop: "6px" }}>
                  Compare tickets & availability
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Disclosure */}
        <p style={{ marginTop: "48px", fontSize: "12px", color: "#777" }}>
          TripSage may earn a small commission if you book through our links, at no extra cost to you.
        </p>
      </section>
    </main>
  );
}
