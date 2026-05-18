export interface IBlogEntry {
  description: string;
  href: string;
  id: string;
  readTime: string;
  status: 'Draft' | 'Live' | 'Planned';
  title: string;
  content: string[];
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
        content: [
          'Every automation project begins not with code, but with understanding. Before you automate anything, you need a clear, honest map of how work actually flows through your team — not how you imagine it flows, not how it was documented three years ago, but how it moves right now.',
          'The most effective technique I have seen is walking the work end to end. Pick one task — say, publishing a blog post or processing a client intake — and physically follow it through every pair of hands, every tool, every approval gate. Write down who touches it, what they do, how long it waits between steps, and where information degrades or gets re-entered.',
          'Pay special attention to handoffs. Every time work moves from one person to another, context leaks. A Slack message replaces a spreadsheet row. A quick verbal instruction substitutes for a written spec. These handoffs are where errors compound and where automation often delivers the highest return — because you are eliminating not a keystroke but a chain of misinterpretation.',
          'Once you have the map, look for the three signals of a good automation candidate: repetition (the same inputs produce the same outputs), volume (it happens more than once a day), and stability (the steps have not changed in the last quarter). If a process scores high on all three, it is ready. If it changes every week, automated or not, your bottleneck is not speed — it is clarity.',
          'Finally, prioritize by pain, not by ease. The task that frustrates your team the most is almost always the best place to start. That frustration is a signal that the workflow is misaligned with how people actually think and work. Fix that alignment first, wrap automation around it second, and you will have a system that people trust rather than tolerate.',
        ],
        description:
          'A practical workflow for mapping bottlenecks, handoffs, and high-friction tasks before building anything.',
        href: '/blogs/workflow-audit',
        id: 'workflow-audit',
        readTime: '6 min read',
        status: 'Live',
        title: 'How to Audit a Manual Workflow Before Automating It',
      },
      {
        content: [
          'One of the most common mistakes I see in small teams is automating a process that should never have been automated. The process itself is broken — inconsistent inputs, unclear ownership, frequent exceptions — and automation simply makes the chaos faster. The result is a system that breaks more often and is harder to fix than the manual version.',
          'To avoid this, use a simple readiness filter before you write a single line of integration code. Ask three questions about the process you want to automate.',
          "First: Is the process documented? If nobody has written down the steps, the process exists only in someone's head. That means it changes every time that person handles it. Document the steps first. If you cannot write them down, you cannot automate them.",
          'Second: Are the inputs predictable? Automation thrives on consistent, structured inputs. If every request arrives in a different format — sometimes email, sometimes a Slack message, sometimes a verbal ask — you need a standardization layer first, not an automation layer. Create a template, a form, or a intake channel before you build the pipeline.',
          'Third: What is the exception rate? If more than ten percent of cases require human judgment or a different path, your automation will spend most of its life in an error handler. The right move is not to build a smarter error handler — it is to stabilize the process so the exceptions become truly exceptional.',
          'Processes that pass all three filters are ready for automation. Processes that fail one or two need cleanup before code touches them. And processes that fail all three? Those are opportunities not for automation but for redesign. Fix the process, then automate it.',
        ],
        description:
          'A decision model for spotting which processes are stable enough for automation and which still need cleanup first.',
        href: '/blogs/automation-readiness',
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
        content: [],
        description:
          'A clean architecture for turning briefs, prompts, approvals, and publishing into one reliable operating loop.',
        href: '/blogs/content-pipeline',
        id: 'content-pipeline',
        readTime: '8 min read',
        status: 'Draft',
        title: 'Designing an AI Content Pipeline Without Losing Quality',
      },
      {
        content: [],
        description:
          'How to use AI copilots to assist teams without introducing hidden rework or inconsistent outputs.',
        href: '/blogs/team-copilots',
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
        content: [
          'The question is never "should we automate this?" but rather "where does human judgment add value that a machine cannot replicate?" The most successful automated systems I have seen are not fully autonomous — they are hybrid systems that route work between humans and machines based on what each does best.',
          'Human review should stay in three places. First, at any decision point that affects trust with a customer or partner. If an automated action sends an email to a client, changes a price, or modifies a contract, a human should see it before it goes out. The cost of one bad automated message to a customer far exceeds the labor savings of removing that review step.',
          'Second, human review belongs at the boundary between systems. When data moves from one platform to another — especially if the schemas are different or the mapping requires interpretation — a human checkpoint catches the edge cases that integration tests never seem to cover. The most expensive bugs in automation happen not inside a system but at its edges.',
          'Third, keep humans in the loop when the output changes a process itself. Automations that modify workflows — re-routing tasks, reassigning ownership, changing SLAs — should be reviewed because they alter the operating model. An automation that optimizes itself is powerful. An automation that optimizes itself into a corner is a fire drill waiting to happen.',
          'The pattern that works: let automation handle the volume and the repetition, let humans handle the variance and the judgment. Build checkpoints that are fast to review (one click to approve, a text box to override) so they do not become bottlenecks themselves. When done well, the human review layer becomes not a drag on speed but a quality amplifier that makes your automation trustworthy.',
        ],
        description:
          'Patterns for combining automations with human checkpoints so you keep trust, quality, and accountability.',
        href: '/blogs/human-review',
        id: 'human-review',
        readTime: '6 min read',
        status: 'Live',
        title: 'Where Human Review Should Stay in an Automated System',
      },
      {
        content: [],
        description:
          'A monitoring baseline for jobs, retries, alerts, and logs so automated workflows remain calm under load.',
        href: '/blogs/observability',
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
