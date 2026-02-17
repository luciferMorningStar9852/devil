import Link from "next/link";

const ContactUs = () => {
  return (
    <div className="space-y-8">
      <section className="rounded-3xl border border-slate-200 bg-white/85 p-8 shadow-sm">
        <h1 className="text-4xl font-bold text-slate-900">
          Let&apos;s Build Something Great
        </h1>
        <p className="mt-3 max-w-2xl text-slate-600">
          Share your idea and we&apos;ll help shape it into a practical,
          high-quality web experience.
        </p>
      </section>

      <section className="grid gap-5 md:grid-cols-2">
        <article className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-xl font-semibold text-slate-900">Reach us</h2>
          <p className="mt-3 text-slate-600">Email: hello@devilstudio.dev</p>
          <p className="text-slate-600">Phone: +1 (555) 820-1940</p>
          <p className="text-slate-600">
            Hours: Monday to Friday, 9:00 AM to 6:00 PM
          </p>
        </article>

        <article className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-xl font-semibold text-slate-900">
            Quick project brief
          </h2>
          <form className="mt-3 space-y-3">
            <input
              type="text"
              placeholder="Your name"
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-500"
            />
            <input
              type="email"
              placeholder="Email address"
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-500"
            />
            <textarea
              placeholder="Tell us about your project"
              rows={4}
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-500"
            />
            <button
              type="button"
              className="rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
            >
              Send Inquiry
            </button>
          </form>
        </article>
      </section>

      <Link
        href="/about-us"
        className="text-sm font-semibold text-blue-700 hover:text-blue-800"
      >
        Back to About Us
      </Link>
    </div>
  );
};

export default ContactUs;
