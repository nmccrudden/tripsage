import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/one-world",
        destination:
          "https://www.getyourguide.com/new-york-city-l59/nyc-one-world-observatory-skip-the-line-ticket-t552373/?partner_id=UXBBWLN&utm_medium=online_publisher",
        permanent: false,
      },
      {
        source: "/vanderbilt",
        destination:
          "https://www.getyourguide.com/new-york-city-l59/summit-one-vanderbilt-t411587/?partner_id=UXBBWLN&utm_medium=online_publisher",
        permanent: false,
      },
      {
        source: "/empire",
        destination:
          "https://www.getyourguide.com/new-york-city-l59/empire-state-building-t1017/?partner_id=UXBBWLN&utm_medium=online_publisher",
        permanent: false,
      },
      {
        source: "/top-of-the-rock",
        destination:
          "https://www.getyourguide.com/new-york-city-l59/top-of-the-rock-t1366/?partner_id=UXBBWLN&utm_medium=online_publisher",
        permanent: false,
      },
      {
        source: "/statue-of-liberty",
        destination:
          "https://www.getyourguide.com/new-york-city-l59/statue-of-liberty-ellis-island-t154/?partner_id=UXBBWLN&utm_medium=online_publisher",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
