export default function Home() {
  return (
    <main className="w-full">

      {/* HERO */}
      <section
        className="relative flex min-h-[70vh] items-center bg-cover bg-center"
        style={{ backgroundImage: "url('/hero-nyc.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 mx-auto max-w-6xl px-6 text-white">
          <h1 className="text-5xl font-semibold leading-tight md:text-6xl">
            See more.<br />Spend less.
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/90">
            TripSage compares ticket prices for the most popular attractions so you can book confidently — with minimal fuss.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/new-york"
              className="rounded-md bg-white px-6 py-3 text-sm font-medium text-black"
            >
              Explore New York
            </a>
            <a
              href="/about"
              className="rounded-md border border-white/70 px-6 py-3 text-sm font-medium text-white"
            >
              Why trust TripSage?
            </a>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3 text-center">

            <div>
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
                🔍
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                Transparent comparisons
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                We compare tickets based on price, flexibility (refunds), and availability — not paid placements.
              </p>
            </div>

            <div>
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
                🤝
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                Trusted booking partners
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                We only link to established platforms like GetYourGuide and Viator so you can book with confidence.
              </p>
            </div>

            <div>
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
                💸
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                No fake discounts
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                No inflated “was” prices. No sponsored rankings. Just clear comparisons.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* COMMISSION (single, not duplicated) */}
      <footer className="border-t border-gray-200 py-8">
        <p className="text-center text-xs text-gray-500">
          TripSage may earn a small commission if you book through our links, at no extra cost to you.
        </p>
      </footer>

    </main>
  );
}
