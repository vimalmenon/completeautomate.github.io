export interface IBlogEntry {
  description: string;
  href: string;
  id: string;
  readTime: string;
  status: 'Draft' | 'Live' | 'Planned';
  title: string;
}

export interface IBlogCollection {
  description: string;
  entries: IBlogEntry[];
  id: string;
  title: string;
}

export const BlogCollections: IBlogCollection[] = [
  {
    description:
      'Frameworks for identifying repetitive work, scoping the right automations, and avoiding brittle systems.',
    entries: [
      {
        description:
          'A practical workflow for mapping bottlenecks, handoffs, and high-friction tasks before building anything.',
        href: '#workflow-audit',
        id: 'workflow-audit',
        readTime: '6 min read',
        status: 'Live',
        title: 'How to Audit a Manual Workflow Before Automating It',
      },
      {
        description:
          'A decision model for spotting which processes are stable enough for automation and which still need cleanup first.',
        href: '#automation-readiness',
        id: 'automation-readiness',
        readTime: '5 min read',
        status: 'Live',
        title: 'Automation Readiness Checklist for Small Teams',
      },
    ],
    id: 'strategy',
    title: 'Strategy',
  },
  {
    description:
      'Playbooks for using AI to tighten operations, speed up content workflows, and remove repetitive decisions.',
    entries: [
      {
        description:
          'A clean architecture for turning briefs, prompts, approvals, and publishing into one reliable operating loop.',
        href: '#content-pipeline',
        id: 'content-pipeline',
        readTime: '8 min read',
        status: 'Draft',
        title: 'Designing an AI Content Pipeline Without Losing Quality',
      },
      {
        description:
          'How to use AI copilots to assist teams without introducing hidden rework or inconsistent outputs.',
        href: '#team-copilots',
        id: 'team-copilots',
        readTime: '7 min read',
        status: 'Planned',
        title: 'Where AI Copilots Actually Save Time for Operations Teams',
      },
    ],
    id: 'ai-systems',
    title: 'AI Systems',
  },
  {
    description:
      'Deeper implementation notes covering orchestration, approval layers, observability, and sustainable system design.',
    entries: [
      {
        description:
          'Patterns for combining automations with human checkpoints so you keep trust, quality, and accountability.',
        href: '#human-review',
        id: 'human-review',
        readTime: '6 min read',
        status: 'Live',
        title: 'Where Human Review Should Stay in an Automated System',
      },
      {
        description:
          'A monitoring baseline for jobs, retries, alerts, and logs so automated workflows remain calm under load.',
        href: '#observability',
        id: 'observability',
        readTime: '9 min read',
        status: 'Planned',
        title: 'Operational Observability for AI-Driven Workflows',
      },
    ],
    id: 'implementation',
    title: 'Implementation',
  },
];
