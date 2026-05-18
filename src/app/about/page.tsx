import { JSX } from 'react';

import Link from 'next/link';

const values = [
  {
    description:
      'Every system we build is tested against real workflows and designed to handle edge cases — not just the happy path.',
    icon: '🎯',
    title: 'Precision First',
  },
  {
    description:
      'No black boxes. We design systems where every decision is traceable, auditable, and explainable to your team.',
    icon: '🔍',
    title: 'Radical Clarity',
  },
  {
    description:
      'Automation is a force multiplier, not a replacement. We build to amplify what your team does best.',
    icon: '🤝',
    title: 'Human-Centered',
  },
];

export default function AboutPage(): JSX.Element {
  return (
    <div className="px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-4xl">
        <div className="rounded-[2rem] border border-border/60 bg-surface/75 p-8 shadow-[0_24px_60px_rgb(15_23_42/0.12)] backdrop-blur-xl sm:p-12">
          <p className="text-xs font-semibold tracking-[0.34em] text-primary uppercase">About</p>
          <h1 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-foreground sm:text-4xl">
            We build the invisible infrastructure that makes your business run better.
          </h1>

          <div className="mt-10 space-y-6 text-base leading-8 text-muted">
            <p>
              CompleteAutomate was founded on a simple observation: most teams spend more time
              managing their tools than doing the work those tools were meant to enable. We exist to
              change that.
            </p>
            <p>
              We design and deploy AI-powered automation systems that eliminate repetitive work,
              tighten operations, and give your team a calmer system to run the business on. Our
              clients range from solo operators scaling their first real process to established
              teams looking to remove friction from workflows they&apos;ve outgrown.
            </p>
            <p>
              Every engagement starts with an honest audit of where your time actually goes. We
              don&apos;t sell one-size-fits-all solutions. We study your operations, identify the
              highest-impact bottlenecks, and build tailored automations that fit how your team
              actually works.
            </p>
          </div>

          <hr className="my-10 border-border/40" />

          <h2 className="text-2xl font-semibold tracking-[-0.04em] text-foreground">How We Work</h2>

          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-[1.5rem] border border-border/60 bg-background/60 p-6"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-xl">
                  {value.icon}
                </span>
                <h3 className="mt-4 text-lg font-semibold tracking-[-0.03em] text-foreground">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 text-center">
          <Link
            className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition hover:bg-primary-dark"
            href="/contact"
          >
            Start a Conversation
          </Link>
        </div>
      </div>
    </div>
  );
}
