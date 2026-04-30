import { JSX } from 'react';

const services = [
  {
    description:
      'Eliminate manual processes. From data entry to approvals, we automate the workflows that slow you down.',
    icon: '⚙️',
    title: 'Workflow Automation',
  },
  {
    description:
      'Smart assistants that handle inquiries, draft content, and support your team 24/7.',
    icon: '🤖',
    title: 'AI Assistance',
  },
  {
    description:
      'Not sure where to start? We audit your operations and build a custom AI automation roadmap.',
    icon: '🧭',
    title: 'Consultancy',
  },
  {
    description:
      'Supercharge your team with AI tools that draft, summarize, and analyze — so your people focus on what matters.',
    icon: '🚀',
    title: 'AI Productivity',
  },
];

const stats = [
  { label: 'Hours Saved', value: '500+' },
  { label: 'Businesses Automated', value: '50+' },
  { label: 'Client Satisfaction', value: '98%' },
];

export default function Home(): JSX.Element {
  return (
    <>
      <section className="px-6 pb-16 pt-20 sm:pt-24">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-xs font-semibold tracking-[0.28em] text-primary uppercase">
              Sleek Automation Systems
            </div>
            <h1 className="mt-6 max-w-3xl text-5xl font-semibold tracking-[-0.06em] text-foreground sm:text-6xl lg:text-7xl">
              AI automation that feels precise, fast, and invisible.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted sm:text-xl">
              We design AI workflows that remove repetitive work, tighten your operations, and give
              your team a calmer system to run the business on.
            </p>
            <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row">
              <a
                href="/admin"
                className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition hover:bg-primary-dark"
              >
                Start Building
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-full border border-border/70 bg-surface/70 px-8 py-3.5 text-sm font-semibold text-foreground transition hover:border-primary/40 hover:text-primary"
              >
                Explore Services
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-x-12 top-8 h-32 rounded-full bg-primary/20 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-border/60 bg-surface/75 p-6 shadow-[0_30px_80px_rgb(15_23_42/0.18)] backdrop-blur-xl">
              <div className="rounded-[1.5rem] border border-border/50 bg-surface-dark/70 p-6">
                <div className="flex items-center justify-between text-xs font-medium tracking-[0.24em] text-muted uppercase">
                  <span>Operations Snapshot</span>
                  <span>Live</span>
                </div>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-2xl border border-border/50 bg-surface/80 p-5"
                    >
                      <p className="text-3xl font-semibold tracking-[-0.04em] text-foreground">
                        {stat.value}
                      </p>
                      <p className="mt-2 text-xs font-semibold tracking-[0.24em] text-muted uppercase">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="mt-4 rounded-2xl border border-primary/20 bg-primary/10 p-5">
                  <p className="text-sm font-medium text-foreground">
                    Manual work is where momentum leaks.
                  </p>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    We rebuild repetitive processes into AI-backed systems with clear handoffs,
                    reliable outputs, and visible business impact.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.32em] text-primary uppercase">
              What We Do
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-foreground sm:text-4xl">
              Systems designed to look simple on the surface and do serious work underneath.
            </h2>
            <p className="mt-4 text-base leading-7 text-muted sm:text-lg">
              Every engagement is built around operational clarity: fewer clicks, fewer delays, and
              cleaner execution for your team.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <div
                key={service.title}
                className="group rounded-[1.75rem] border border-border/60 bg-surface/75 p-7 shadow-[0_18px_45px_rgb(15_23_42/0.08)] backdrop-blur transition hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_26px_60px_rgb(8_145_178/0.14)]"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-2xl text-primary">
                  {service.icon}
                </span>
                <h3 className="mt-5 text-xl font-semibold tracking-[-0.03em] text-foreground">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-8 sm:py-12">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-border/60 bg-surface/70 p-8 shadow-[0_24px_60px_rgb(15_23_42/0.12)] backdrop-blur-xl sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold tracking-[0.32em] text-primary uppercase">
                Trusted Outcome
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-foreground">
                Real business value, not automation theatre.
              </h2>
            </div>
            <blockquote className="rounded-[1.5rem] border border-border/50 bg-background/60 p-8">
              <p className="text-lg leading-8 text-foreground/85">
                &ldquo;CompleteAutomate cut our invoice processing time by 80%. It removed the
                bottleneck without making the workflow harder for the team.&rdquo;
              </p>
              <cite className="mt-4 block text-sm font-medium tracking-[0.24em] text-muted uppercase not-italic">
                Small Business Owner
              </cite>
            </blockquote>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] border border-primary/20 bg-[linear-gradient(135deg,rgba(8,145,178,0.16),rgba(15,23,42,0.9))] px-8 py-12 text-center shadow-[0_30px_80px_rgb(8_145_178/0.18)] sm:px-12">
          <p className="text-xs font-semibold tracking-[0.34em] text-primary-light uppercase">
            Ready To Automate
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
            Move from manual operations to a system your team can trust.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg">
            Book a consultation and map the highest-friction parts of your business into cleaner,
            faster AI workflows.
          </p>
          <a
            href="/admin"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
          >
            Book a Consultation
          </a>
        </div>
      </section>
    </>
  );
}
