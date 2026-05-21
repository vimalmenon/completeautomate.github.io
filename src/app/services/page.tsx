import { JSX } from 'react';

import { ScrollReveal } from '@common';

import type { Metadata } from 'next';

import Link from 'next/link';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://completeautomate.com/services/',
  },
  description:
    'AI workflow automation services for small business — workflow automation, AI assistants, consultancy, and AI productivity tools. Automate repetitive tasks, tighten operations, and scale without adding headcount.',
  keywords: [
    'AI workflow automation',
    'business automation services',
    'AI automation agency',
    'workflow automation for small business',
    'AI assistant services',
    'AI consultancy',
    'automate business workflows',
  ],
  openGraph: {
    description:
      'AI workflow automation services for small business — workflow automation, AI assistants, consultancy, and AI productivity tools. Automate repetitive work and tighten operations.',
    siteName: 'Complete Automate',
    title: 'AI Workflow Automation Services for Small Business | Complete Automate',
    type: 'website',
    url: 'https://completeautomate.com/services/',
  },
  title: 'AI Workflow Automation Services for Small Business | Complete Automate',
  twitter: {
    card: 'summary_large_image',
    description:
      'AI workflow automation services for small business — automate repetitive tasks, tighten operations, and scale.',
    title: 'AI Workflow Automation Services for Small Business | Complete Automate',
  },
};

const benefits = [
  {
    description:
      'Eliminate manual data entry and repetitive approvals so your team focuses on high-value work instead of admin.',
    icon: '⏱️',
    title: 'Cut Hours of Busywork',
  },
  {
    description:
      'Reduce human error in handoffs, data transfer, and multi-step processes with reliable, auditable AI systems.',
    icon: '🎯',
    title: 'Fewer Mistakes',
  },
  {
    description:
      'Automated workflows scale without adding headcount. Handle more volume with the same team size.',
    icon: '📈',
    title: 'Scale Without Hiring',
  },
  {
    description:
      'Every workflow is designed with human checkpoints where judgment matters — speed without losing control.',
    icon: '🔒',
    title: 'Trustworthy Automation',
  },
];

const faqs = [
  {
    answer:
      'AI workflow automation uses AI models to execute multi-step business processes automatically — routing data between tools, making decisions based on rules, and triggering actions without manual intervention. Unlike traditional automation (which follows rigid if-this-then-that logic), AI workflow automation can handle unstructured inputs like emails, documents, and natural language requests.',
    question: 'What is AI workflow automation for small business?',
  },
  {
    answer:
      'Most clients see results within 2–4 weeks. We start with a workflow audit to identify the highest-friction processes, then build and test the automation in iterative cycles. Simple automations can go live in days; complex multi-system workflows take a few weeks.',
    question: 'How long does it take to automate a business workflow?',
  },
  {
    answer:
      'We work with teams and tools of any size. Small businesses typically benefit most from automating client intake, invoicing, email management, content publishing, data entry, and approval workflows. Our first engagement always includes an audit to identify your highest-ROI opportunities.',
    question: 'What business processes can be automated?',
  },
  {
    answer:
      'Pricing depends on complexity, number of systems integrated, and ongoing maintenance needs. We offer fixed-price engagements for scoped automations and retainers for ongoing workflow management. Book a consultation for a custom quote.',
    question: 'How much does AI automation consulting cost?',
  },
  {
    answer:
      'AI is the technology that can understand and generate text. An AI agent is an AI model equipped with tools — it can search the web, call APIs, and take action. A workflow is a sequence of connected steps that may involve multiple AI agents and traditional integrations working together to complete a business process.',
    question: 'What is the difference between AI, AI agents, and workflows?',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      areaServed: { '@type': 'Country', name: 'Worldwide' },
      description:
        'AI workflow automation, AI assistants, consultancy, and AI productivity tools for small business.',
      name: 'AI Workflow Automation Services',
      provider: {
        '@type': 'Organization',
        logo: 'https://completeautomate.com/logo.svg',
        name: 'Complete Automate',
        url: 'https://completeautomate.com',
      },
      url: 'https://completeautomate.com/services/',
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        acceptedAnswer: { '@type': 'Answer', text: faq.answer },
        name: faq.question,
      })),
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', item: 'https://completeautomate.com/', name: 'Home', position: 1 },
        {
          '@type': 'ListItem',
          item: 'https://completeautomate.com/services/',
          name: 'Services',
          position: 2,
        },
      ],
    },
  ],
};

const services = [
  {
    description:
      'Eliminate manual processes. From data entry to approvals, we automate the workflows that slow you down. We connect your tools — email, spreadsheets, CRMs, accounting software — into seamless pipelines that run on their own.',
    detailPoints: [
      'Automated data entry between tools and systems',
      'Approval workflows with human checkpoints',
      'Invoice and payment processing automation',
      'Client intake and onboarding pipelines',
      'Scheduled reporting and data syncing',
    ],
    icon: '⚙️',
    title: 'Workflow Automation',
  },
  {
    description:
      "Smart AI assistants that handle inquiries, draft content, and support your team 24/7. These aren't simple chatbots — they're AI agents with access to your data, tools, and workflows, capable of taking action on your behalf.",
    detailPoints: [
      'Customer support AI agents for common inquiries',
      'Internal Q&A assistants trained on your knowledge base',
      'Content drafting and summarization agents',
      'Scheduling and calendar management assistants',
      'Data retrieval and reporting agents',
    ],
    icon: '🤖',
    title: 'AI Assistance',
  },
  {
    description:
      'Not sure where to start? We audit your operations and build a custom AI automation roadmap. Every engagement begins with an honest assessment of where your time goes and which processes will deliver the highest return.',
    detailPoints: [
      'Full operational workflow audit',
      'Bottleneck identification and prioritization',
      'Custom AI automation roadmap',
      'Tool stack evaluation and recommendations',
      'Implementation roadmap with timelines and costs',
    ],
    icon: '🧭',
    title: 'AI Consultancy',
  },
  {
    description:
      'Supercharge your team with AI tools that draft, summarize, and analyze — so your people focus on what matters. We help you select, configure, and integrate the right AI tools for your specific workflows.',
    detailPoints: [
      'AI tool selection and setup',
      'Prompt engineering and custom assistants',
      'Document analysis and summarization workflows',
      'Meeting transcription and action item extraction',
      'Data analysis and report generation',
    ],
    icon: '🚀',
    title: 'AI Productivity',
  },
];

export default function ServicesPage(): JSX.Element {
  return (
    <div className="px-6 py-16 sm:py-20">
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        type="application/ld+json"
      />
      <div className="mx-auto max-w-6xl">
        {/* Hero */}
        <ScrollReveal>
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-xs font-semibold tracking-[0.28em] text-primary uppercase">
              AI Workflow Automation Services
            </div>
            <h1 className="mt-6 text-4xl font-semibold tracking-[-0.05em] text-foreground sm:text-5xl lg:text-6xl">
              AI automation designed for small business operations.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-muted sm:text-xl">
              We design and deploy AI-powered automation systems that eliminate repetitive work,
              tighten operations, and help your team scale without adding headcount. From workflow
              automation to AI assistants, every system is built around how your team actually
              works.
            </p>
          </div>
        </ScrollReveal>

        {/* Benefits */}
        <ScrollReveal delay={150} duration={600}>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-[1.5rem] border border-border/60 bg-surface/70 p-6 text-center"
              >
                <span className="text-3xl">{benefit.icon}</span>
                <h3 className="mt-3 text-base font-semibold tracking-[-0.02em] text-foreground">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted">{benefit.description}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Services Detail */}
        <section className="mt-20 space-y-20">
          {services.map((service, index) => (
            <ScrollReveal key={service.title} delay={index * 100} duration={600}>
              <div className="rounded-[2rem] border border-border/60 bg-surface/75 p-8 shadow-[0_24px_60px_rgb(15_23_42/0.1)] backdrop-blur-xl sm:p-12">
                <div className="grid gap-8 lg:grid-cols-[1fr_1.5fr] lg:items-start">
                  <div>
                    <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-3xl text-primary">
                      {service.icon}
                    </span>
                    <h2 className="mt-5 text-2xl font-semibold tracking-[-0.04em] text-foreground">
                      {service.title}
                    </h2>
                    <p className="mt-4 text-sm leading-7 text-muted sm:text-base">
                      {service.description}
                    </p>
                  </div>
                  <div className="rounded-[1.5rem] border border-border/50 bg-background/60 p-6 sm:p-8">
                    <h3 className="text-xs font-semibold tracking-[0.24em] text-primary uppercase">
                      What We Deliver
                    </h3>
                    <ul className="mt-4 space-y-3">
                      {service.detailPoints.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-3 text-sm leading-6 text-foreground"
                        >
                          <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </section>

        {/* CTA */}
        <ScrollReveal delay={400} duration={600}>
          <section className="mt-20 rounded-[2.5rem] border border-primary/20 bg-[linear-gradient(135deg,rgba(8,145,178,0.16),rgba(15,23,42,0.9))] px-8 py-14 text-center sm:px-12">
            <h2 className="text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl">
              Ready to automate your business workflows?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-200">
              Book a free consultation and we&apos;ll map the highest-friction parts of your
              operations into a custom AI automation roadmap.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
                href="/contact"
              >
                Book a Consultation
              </Link>
              <Link
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
                href="/blogs"
              >
                Read Our Guides
              </Link>
            </div>
          </section>
        </ScrollReveal>

        {/* FAQ Section */}
        <ScrollReveal delay={500} duration={600}>
          <section className="mt-20">
            <div className="rounded-[2rem] border border-border/60 bg-surface/75 p-8 shadow-[0_24px_60px_rgb(15_23_42/0.1)] backdrop-blur-xl sm:p-12">
              <h2 className="text-2xl font-semibold tracking-[-0.04em] text-foreground">
                Frequently Asked Questions About AI Automation
              </h2>
              <div className="mt-8 space-y-6">
                {faqs.map((faq) => (
                  <div
                    key={faq.question}
                    className="rounded-[1.25rem] border border-border/50 bg-background/60 p-6"
                  >
                    <h3 className="text-base font-semibold tracking-[-0.02em] text-foreground">
                      {faq.question}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-muted">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </ScrollReveal>
      </div>
    </div>
  );
}
