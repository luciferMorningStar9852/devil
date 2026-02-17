import Link from "next/link";

const Sandeep = () => {
  return (
    <div className="space-y-8">
      <section className="rounded-3xl border border-slate-200 bg-white/85 p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">Profile</p>
        <h1 className="mt-2 text-4xl font-bold text-slate-900">Sandeep</h1>
        <p className="mt-4 max-w-2xl text-slate-600">
          Sandeep leads product direction and frontend engineering at Devil Studio. He
          focuses on converting rough ideas into clean, usable interfaces and dependable
          delivery plans.
        </p>
      </section>

      <section className="grid gap-5 md:grid-cols-3">
        <article className="rounded-2xl border border-slate-200 bg-white p-5">
          <h2 className="font-semibold text-slate-900">Core Skills</h2>
          <p className="mt-2 text-sm text-slate-600">Next.js, React, UI systems, performance tuning.</p>
        </article>
        <article className="rounded-2xl border border-slate-200 bg-white p-5">
          <h2 className="font-semibold text-slate-900">Project Focus</h2>
          <p className="mt-2 text-sm text-slate-600">Business sites, product pages, and app frontends.</p>
        </article>
        <article className="rounded-2xl border border-slate-200 bg-white p-5">
          <h2 className="font-semibold text-slate-900">Working Style</h2>
          <p className="mt-2 text-sm text-slate-600">Iterative builds, honest feedback, stable deadlines.</p>
        </article>
      </section>

      <Link
        href="/contact-us"
        className="inline-block rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700"
      >
        Work with Sandeep
      </Link>
    </div>
  );
};

export default Sandeep;
