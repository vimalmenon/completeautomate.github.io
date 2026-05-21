import { Metadata } from 'next';

import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  description:
    'AI-powered automation that eliminates repetitive work, tightens operations, and gives your team calmer systems to run on.',
  openGraph: {
    description:
      'AI-powered automation that eliminates repetitive work, tightens operations, and gives your team calmer systems to run on.',
    title: 'CompleteAutomate — AI Automation Systems',
  },
  title: 'CompleteAutomate — AI Automation Systems',
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-zinc-200 dark:border-zinc-800">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 via-white to-indigo-50/30 dark:from-zinc-900 dark:via-zinc-950 dark:to-zinc-900" />

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <p className="inline-block rounded-full border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/50 px-4 py-1.5 text-xs font-semibold tracking-widest text-blue-700 dark:text-blue-300 uppercase">
              sleek automation systems
            </p>

            <h1 className="mt-8 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-zinc-900 dark:text-white">
              AI automation that feels precise, fast, and invisible.
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
              We design AI workflows that remove repetitive work, tighten your operations, and give
              your team a calmer system to run the business on.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/admin"
                className="inline-flex items-center justify-center rounded-lg bg-zinc-900 dark:bg-white px-6 py-3 text-sm font-semibold text-white dark:text-zinc-900 shadow-sm hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
              >
                Start Building
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 px-6 py-3 text-sm font-semibold text-zinc-900 dark:text-zinc-100 hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-colors"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Live Stats Section */}
      <section className="border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="text-center">
            <p className="text-xs font-semibold tracking-widest text-blue-600 dark:text-blue-400 uppercase">
              Operations Snapshot
            </p>
            <p className="mt-1 text-[10px] font-bold tracking-[0.3em] text-green-600 dark:text-green-400 uppercase">
              Live
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="text-center">
              <p className="text-4xl font-bold text-zinc-900 dark:text-white">500+</p>
              <p className="mt-2 text-sm font-medium text-zinc-500 dark:text-zinc-400">
                Hours Saved
              </p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-zinc-900 dark:text-white">50+</p>
              <p className="mt-2 text-sm font-medium text-zinc-500 dark:text-zinc-400">
                Businesses Automated
              </p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-zinc-900 dark:text-white">98%</p>
              <p className="mt-2 text-sm font-medium text-zinc-500 dark:text-zinc-400">
                Client Satisfaction
              </p>
            </div>
          </div>

          <div className="mt-12 max-w-2xl mx-auto text-center">
            <p className="text-lg font-semibold text-zinc-900 dark:text-white">
              Manual work is where momentum leaks.
            </p>
            <p className="mt-3 text-zinc-600 dark:text-zinc-400 leading-relaxed">
              We rebuild repetitive processes into AI-backed systems with clear handoffs, reliable
              outputs, and visible business impact.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="border-b border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-widest text-blue-600 dark:text-blue-400 uppercase">
              What We Do
            </p>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">
              Systems designed to look simple on the surface and do serious work underneath.
            </h2>
            <p className="mt-4 text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Every engagement is built around operational clarity: fewer clicks, fewer delays, and
              cleaner execution for your team.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Card 1 */}
            <div className="group rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800/50 p-6 transition-colors hover:border-blue-200 dark:hover:border-blue-800">
              <span className="text-3xl">⚙️</span>
              <h3 className="mt-4 text-lg font-semibold text-zinc-900 dark:text-white">
                Workflow Automation
              </h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Eliminate manual processes. From data entry to approvals, we automate the workflows
                that slow you down.
              </p>
            </div>

            {/* Card 2 */}
            <div className="group rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800/50 p-6 transition-colors hover:border-blue-200 dark:hover:border-blue-800">
              <span className="text-3xl">🤖</span>
              <h3 className="mt-4 text-lg font-semibold text-zinc-900 dark:text-white">
                AI Assistance
              </h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Smart assistants that handle inquiries, draft content, and support your team 24/7.
              </p>
            </div>

            {/* Card 3 */}
            <div className="group rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800/50 p-6 transition-colors hover:border-blue-200 dark:hover:border-blue-800">
              <span className="text-3xl">🧭</span>
              <h3 className="mt-4 text-lg font-semibold text-zinc-900 dark:text-white">
                Consultancy
              </h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Not sure where to start? We audit your operations and build a custom AI automation
                roadmap.
              </p>
            </div>

            {/* Card 4 */}
            <div className="group rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800/50 p-6 transition-colors hover:border-blue-200 dark:hover:border-blue-800">
              <span className="text-3xl">🚀</span>
              <h3 className="mt-4 text-lg font-semibold text-zinc-900 dark:text-white">
                AI Productivity
              </h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Supercharge your team with AI tools that draft, summarize, and analyze — so your
                people focus on what matters.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center">
            <p className="text-xs font-semibold tracking-widest text-blue-600 dark:text-blue-400 uppercase">
              Trusted Outcome
            </p>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">
              Real business value, not automation theatre.
            </h2>
          </div>

          <blockquote className="mt-12 mx-auto max-w-3xl text-center">
            <p className="text-xl sm:text-2xl font-medium text-zinc-700 dark:text-zinc-300 italic leading-relaxed">
              &ldquo;CompleteAutomate cut our invoice processing time by 80%. It removed the
              bottleneck without making the workflow harder for the team.&rdquo;
            </p>
            <footer className="mt-6 text-sm font-semibold tracking-widest text-zinc-500 dark:text-zinc-400 uppercase">
              Small Business Owner
            </footer>
          </blockquote>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/80 dark:bg-zinc-900/80">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
          <p className="text-xs font-semibold tracking-widest text-blue-600 dark:text-blue-400 uppercase">
            Ready to Automate
          </p>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">
            Move from manual operations to a system your team can trust.
          </h2>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Book a consultation and map the highest-friction parts of your business into cleaner,
            faster AI workflows.
          </p>

          <div className="mt-10">
            <Link
              href="/admin"
              className="inline-flex items-center justify-center rounded-lg bg-zinc-900 dark:bg-white px-8 py-4 text-base font-semibold text-white dark:text-zinc-900 shadow-[0_4px_14px_rgb(0_0_0/0.15)] hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center">
            <p className="text-xs font-semibold tracking-widest text-blue-600 dark:text-blue-400 uppercase">
              Contact Us
            </p>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">
              Let&apos;s automate something together.
            </h2>
            <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto leading-relaxed">
              Reach out directly or follow along on X for updates, tips, and automation insights.
            </p>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-6">
            <a
              href="mailto:hello@completeautomate.com"
              className="group flex items-center gap-4 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800/50 px-6 py-4 transition-colors hover:border-blue-200 dark:hover:border-blue-800"
            >
              <Image
                src="/email.svg"
                alt="Email"
                width={24}
                height={24}
                className="opacity-60 dark:opacity-40 group-hover:opacity-100 transition-opacity"
              />
              <div className="text-left">
                <p className="text-xs font-semibold tracking-widest text-zinc-500 dark:text-zinc-400 uppercase">
                  Email
                </p>
                <p className="text-sm font-medium text-zinc-900 dark:text-white">
                  hello@completeautomate.com
                </p>
              </div>
            </a>

            <a
              href="https://x.com/TotalAutomate"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800/50 px-6 py-4 transition-colors hover:border-blue-200 dark:hover:border-blue-800"
            >
              <Image
                src="/x.svg"
                alt="X"
                width={24}
                height={24}
                className="opacity-60 dark:opacity-40 group-hover:opacity-100 transition-opacity"
              />
              <div className="text-left">
                <p className="text-xs font-semibold tracking-widest text-zinc-500 dark:text-zinc-400 uppercase">
                  X (Twitter)
                </p>
                <p className="text-sm font-medium text-zinc-900 dark:text-white">@TotalAutomate</p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
