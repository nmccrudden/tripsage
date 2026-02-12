import Link from "next/link";

export default function Home() {
  return (
    <main style={{ padding: "40px", fontFamily: "system-ui" }}>
      <h1>TripSage</h1>
      <p>See more. Spend less.</p>
      <p>Your smart guide to the best-value attractions and shows.</p>

      <ul>
        <li><Link href="/new-york/one-world-observatory">One World Observatory</Link></li>
        <li><Link href="/new-york/top-of-the-rock">Top of the Rock</Link></li>
        <li><Link href="/new-york/empire-state-building">Empire State Building</Link></li>
        <li><Link href="/new-york/summit-one-vanderbilt">Summit One Vanderbilt</Link></li>
        <li><Link href="/new-york/statue-of-liberty">Statue of Liberty</Link></li>
      </ul>
    </main>
  );
}
