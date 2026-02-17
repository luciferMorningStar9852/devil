import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Devil Studio",
  description: "Creative web studio landing pages built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen">
          <header className="border-b border-slate-200/80 bg-white/70 backdrop-blur">
            <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
              <Link href="/" className="text-xl font-bold tracking-tight text-slate-900">
                Devil Studio
              </Link>
              <div className="flex items-center gap-5 text-sm font-medium text-slate-700">
                <Link href="/">Home</Link>
                <Link href="/about-us">About</Link>
                <Link href="/about-us/sandeep">Sandeep</Link>
                <Link href="/contact-us">Contact</Link>
              </div>
            </nav>
          </header>
          <main className="mx-auto w-full max-w-6xl px-6 py-10">{children}</main>
          <footer className="border-t border-slate-200/80 py-6 text-center text-sm text-slate-600">
            Built with care at Devil Studio
          </footer>
        </div>
      </body>
    </html>
  );
}
