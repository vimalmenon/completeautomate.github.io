
const services = [
  {
    icon: "⚙️",
    title: "Workflow Automation",
    description:
      "Eliminate manual processes. From data entry to approvals, we automate the workflows that slow you down.",
  },
  {
    icon: "🤖",
    title: "AI Assistance",
    description:
      "Smart assistants that handle inquiries, draft content, and support your team 24/7.",
  },
  {
    icon: "🧭",
    title: "Consultancy",
    description:
      "Not sure where to start? We audit your operations and build a custom AI automation roadmap.",
  },
  {
    icon: "🚀",
    title: "AI Productivity",
    description:
      "Supercharge your team with AI tools that draft, summarize, and analyze — so your people focus on what matters.",
  },
];

const stats = [
  { value: "500+", label: "Hours Saved" },
  { value: "50+", label: "Businesses Automated" },
  { value: "98%", label: "Client Satisfaction" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-zinc-900 to-black px-6 py-24 text-center text-yellow-400">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            AI Automation, Built for Your Business
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-yellow-400/80">
            Stop wasting time on repetitive tasks. We build intelligent workflows
            that save hours and scale your operations.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="/admin"
              className="inline-block rounded-lg bg-yellow-400 px-8 py-3 font-semibold text-black transition hover:bg-yellow-300"
            >
              Get Started
            </a>
            <a
              href="#services"
              className="inline-block rounded-lg border border-yellow-400/40 px-8 py-3 font-semibold text-yellow-400 transition hover:bg-yellow-400/10"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-white px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-3xl font-bold text-zinc-900">
            What We Do
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-zinc-600">
            End-to-end AI automation tailored for small businesses — so you can
            focus on growth, not busywork.
          </p>
          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:shadow-md"
              >
                <span className="text-3xl">{service.icon}</span>
                <h3 className="mt-4 text-lg font-semibold text-zinc-900">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="bg-zinc-50 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-8 text-center sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-4xl font-extrabold text-black">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm font-medium tracking-wide text-zinc-500 uppercase">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
          <blockquote className="mt-14 rounded-2xl border border-zinc-200 bg-white p-8 text-center shadow-sm">
            <p className="text-lg italic text-zinc-700">
              &ldquo;CompleteAutomate cut our invoice processing time by 80%. Game
              changer.&rdquo;
            </p>
            <cite className="mt-4 block text-sm font-medium text-zinc-500 not-italic">
              — Small Business Owner
            </cite>
          </blockquote>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black px-6 py-20 text-center text-yellow-400">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold sm:text-4xl">Ready to Automate?</h2>
          <p className="mx-auto mt-4 max-w-lg text-yellow-400/80">
            Book a free consultation and discover how AI can transform your
            business.
          </p>
          <a
            href="/admin"
            className="mt-8 inline-block rounded-lg bg-yellow-400 px-8 py-3 font-semibold text-black transition hover:bg-yellow-300"
          >
            Book a Consultation
          </a>
        </div>
      </section>
    </>
  );
}
