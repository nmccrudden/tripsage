import { NextResponse } from "next/server";

const LINKS: Record<string, string> = {
  "one-world": "https://www.getyourguide.com/new-york-city-l59/nyc-one-world-observatory-skip-the-line-ticket-t552373/?partner_id=UXBBWLN&utm_medium=online_publisher",
  vanderbilt: "https://www.getyourguide.com/new-york-city-l59/summit-one-vanderbilt-t411587/?partner_id=UXBBWLN&utm_medium=online_publisher",
  empire: "https://www.getyourguide.com/new-york-city-l59/empire-state-building-t1017/?partner_id=UXBBWLN&utm_medium=online_publisher",
  "top-of-the-rock": "https://www.getyourguide.com/new-york-city-l59/top-of-the-rock-t1366/?partner_id=UXBBWLN&utm_medium=online_publisher",
  "statue-of-liberty": "https://www.getyourguide.com/new-york-city-l59/statue-of-liberty-ellis-island-t154/?partner_id=UXBBWLN&utm_medium=online_publisher",
};

export async function GET(
  _req: Request,
  { params }: { params: { slug: string } }
) {
  const url = LINKS[params.slug];

  if (!url) {
    return NextResponse.redirect(new URL("/", "https://tripsage.app"));
  }

  return NextResponse.redirect(new URL(url));
}
