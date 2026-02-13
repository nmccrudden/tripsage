import { NextResponse } from "next/server";

const LINKS = {
  "one-world": "https://www.getyourguide.com/new-york-city-l59/nyc-one-world-observatory-skip-the-line-ticket-t552373/?partner_id=UXBBWLN&utm_medium=online_publisher",
  vanderbilt: "https://www.getyourguide.com/new-york-city-l59/summit-one-vanderbilt-t411587/?partner_id=UXBBWLN&utm_medium=online_publisher",
  empire: "https://www.getyourguide.com/new-york-city-l59/empire-state-building-t1017/?partner_id=UXBBWLN&utm_medium=online_publisher",
  "top-of-the-rock": "https://www.getyourguide.com/new-york-city-l59/top-of-the-rock-t1366/?partner_id=UXBBWLN&utm_medium=online_publisher",
  "statue-of-liberty": "https://www.getyourguide.com/new-york-city-l59/statue-of-liberty-ellis-island-t154/?partner_id=UXBBWLN&utm_medium=online_publisher",
} as const;

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const url = LINKS[slug as keyof typeof LINKS];

  if (!url) {
    return NextResponse.redirect("https://tripsage.app");
  }

  return NextResponse.redirect(url);
}
