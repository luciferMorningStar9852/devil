import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-10">
      <section className="rounded-3xl border border-slate-200 bg-white/80 p-8 shadow-sm md:p-12">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-blue-700">
          Welcome to Devil Studio
        </p>
        <h1 className="max-w-3xl text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
          We design fast, modern websites that feel sharp and convert better.
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-slate-600">
          From landing pages to complete product websites, we build clean interfaces and
          stable code that is ready for production.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/contact-us"
            className="rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            Start a Project
          </Link>
          <Link
            href="/about-us"
            className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400"
          >
            Learn About Us
          </Link>
        </div>
      </section>

      <section className="grid gap-5 md:grid-cols-3">
        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">Strategy First</h2>
          <p className="mt-2 text-sm text-slate-600">
            We align business goals, messaging, and structure before writing code.
          </p>
        </article>
        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">Clean UI System</h2>
          <p className="mt-2 text-sm text-slate-600">
            Reusable components and strong visual hierarchy keep every page consistent.
          </p>
        </article>
        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">Performance Focus</h2>
          <p className="mt-2 text-sm text-slate-600">
            Lightweight pages, responsive layouts, and optimization for real users.
          </p>
        </article>
      </section>
    </div>
  );
}
