import Link from "next/link";

const AboutUs = () => {
  return (
    <div className="space-y-8">
      <section className="rounded-3xl border border-slate-200 bg-white/85 p-8 shadow-sm md:p-10">
        <h1 className="text-4xl font-bold text-slate-900 md:text-5xl">About Devil Studio</h1>
        <p className="mt-4 max-w-3xl text-slate-600">
          We are a small and focused web team helping businesses ship better digital
          experiences. Our work combines thoughtful design, reliable development, and
          practical communication.
        </p>
      </section>

      <section className="grid gap-5 md:grid-cols-2">
        <article className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-xl font-semibold text-slate-900">What we value</h2>
          <ul className="mt-3 space-y-2 text-slate-600">
            <li>Clear communication and transparent delivery</li>
            <li>Simple solutions instead of unnecessary complexity</li>
            <li>Fast and responsive user experience on every screen size</li>
          </ul>
        </article>
        <article className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-xl font-semibold text-slate-900">How we work</h2>
          <ul className="mt-3 space-y-2 text-slate-600">
            <li>Discovery call to align goals</li>
            <li>Wireframe and visual direction</li>
            <li>Development, testing, and launch support</li>
          </ul>
        </article>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6">
        <h3 className="text-2xl font-semibold text-slate-900">Meet the team lead</h3>
        <p className="mt-2 text-slate-600">
          Learn more about Sandeep and his role in architecture, frontend quality, and
          project planning.
        </p>
        <div className="mt-5 flex gap-3">
          <Link
            href="/about-us/sandeep"
            className="rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
          >
            View Sandeep Profile
          </Link>
          <Link
            href="/contact-us"
            className="rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
