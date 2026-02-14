import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-900">
        <header className="border-b border-gray-200">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <a href="/" className="text-lg font-semibold">
              TripSage
            </a>
            <nav className="space-x-6 text-sm text-gray-600">
              <a href="/new-york" className="hover:text-black">New York</a>
              <a href="/about" className="hover:text-black">About</a>
            </nav>
          </div>
        </header>

        {children}
      </body>
    </html>
  );
}
