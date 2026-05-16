export interface IBlogPostContent {
  id: string;
  title: string;
  collection: string;
  date: string;
  readTime: string;
  content: string;
}

export const BlogContents: Record<string, IBlogPostContent> = {
  'workflow-audit': {
    id: 'workflow-audit',
    title: 'How to Audit a Manual Workflow Before Automating It',
    collection: 'strategy',
    date: 'May 4, 2026',
    readTime: '6 min read',
    content: `
      <h2 class="mt-8 mb-4 text-2xl font-semibold tracking-[-0.03em] text-foreground">Why Audit First?</h2>
      <p class="mb-5 leading-7 text-muted">Before you automate anything, you need to know exactly what you're working with. A proper workflow audit reveals which steps are worth automating, which need rethinking first, and which are better left alone. Skip this step, and you risk building a fast version of a broken process.</p>

      <h2 class="mt-8 mb-4 text-2xl font-semibold tracking-[-0.03em] text-foreground">Step 1: Shadow the Process</h2>
      <p class="mb-5 leading-7 text-muted">Sit with the people who actually do the work. Watch them go through the motion from start to finish. Take notes on:</p>
      <ul class="mb-5 list-disc space-y-1 pl-6 text-muted">
        <li>Every single step they perform, no matter how small</li>
        <li>Which tools or systems they touch at each stage</li>
        <li>Where they wait — for approvals, data, or other people</li>
        <li>Any workarounds or manual fixes they've created</li>
      </ul>
      <p class="mb-5 leading-7 text-muted">Ask open-ended questions: <em>"What would make this easier?"</em> and <em>"What part of this process frustrates you most?"</em> The answers often reveal the best automation opportunities.</p>

      <h2 class="mt-8 mb-4 text-2xl font-semibold tracking-[-0.03em] text-foreground">Step 2: Document the Full Flow</h2>
      <p class="mb-5 leading-7 text-muted">Create a detailed map of the workflow. Include every decision point, handoff, approval gate, and data transfer. Tools like <code class="rounded bg-surface-dark/50 px-1.5 py-0.5 text-sm font-medium text-primary">Lucidchart</code> or even a whiteboard work well for this. The goal is a visual that shows:</p>
      <ul class="mb-5 list-disc space-y-1 pl-6 text-muted">
        <li>Who does what, and in what order</li>
        <li>Where information enters and leaves the process</li>
        <li>Which steps depend on others completing first</li>
      </ul>

      <h2 class="mt-8 mb-4 text-2xl font-semibold tracking-[-0.03em] text-foreground">Step 3: Time Each Step</h2>
      <p class="mb-5 leading-7 text-muted">Measure how long each step actually takes. Not the ideal time — the real time, including delays, rework, and waiting. A simple spreadsheet works:</p>
      <ul class="mb-5 list-disc space-y-1 pl-6 text-muted">
        <li>Step name, average duration, frequency per week</li>
        <li>Who performs it, what tools are used</li>
        <li>How often errors or exceptions occur</li>
      </ul>
      <p class="mb-5 leading-7 text-muted">This data becomes your baseline. After automation, you'll measure against these numbers to prove impact.</p>

      <h2 class="mt-8 mb-4 text-2xl font-semibold tracking-[-0.03em] text-foreground">Step 4: Find the 20% Causing 80% of the Friction</h2>
      <p class="mb-5 leading-7 text-muted">Look at your timing data and identify the bottlenecks. The Pareto principle almost always applies: a handful of steps cause most of the delays, rework, or frustration. Prioritize those for automation first.</p>
      <p class="mb-5 leading-7 text-muted">Signs a step is a good automation candidate:</p>
      <ul class="mb-5 list-disc space-y-1 pl-6 text-muted">
        <li>It's repetitive and rule-based</li>
        <li>It involves moving data between systems</li>
        <li>It requires checking the same information repeatedly</li>
        <li>Errors in this step have downstream consequences</li>
      </ul>

      <h2 class="mt-8 mb-4 text-2xl font-semibold tracking-[-0.03em] text-foreground">Conclusion</h2>
      <p class="mb-5 leading-7 text-muted">A thorough audit turns automation from a gamble into a strategy. You'll know exactly what to build, why it matters, and how to measure success. The time you spend auditing pays for itself many times over in avoided rework and focused effort.</p>
    `,
  },
  'automation-readiness': {
    id: 'automation-readiness',
    title: 'Automation Readiness Checklist for Small Teams',
    collection: 'strategy',
    date: 'May 11, 2026',
    readTime: '5 min read',
    content: `
      <h2 class="mt-8 mb-4 text-2xl font-semibold tracking-[-0.03em] text-foreground">Not Every Process Is Ready to Automate</h2>
      <p class="mb-5 leading-7 text-muted">The temptation is to automate everything that feels repetitive. But automating a messy process just gives you a faster mess. Before you commit, run through this checklist to decide if a process is genuinely ready — or if it needs cleanup first.</p>

      <h2 class="mt-8 mb-4 text-2xl font-semibold tracking-[-0.03em] text-foreground">The Readiness Checklist</h2>

      <h3 class="mb-3 mt-6 text-lg font-semibold text-foreground">1. Process Stability</h3>
      <p class="mb-5 leading-7 text-muted">Does this workflow stay roughly the same week to week? If the steps, tools, or decision rules change frequently, automation will be a maintenance burden rather than a time saver. Stable processes are the best candidates.</p>

      <h3 class="mb-3 mt-6 text-lg font-semibold text-foreground">2. Volume Threshold</h3>
      <p class="mb-5 leading-7 text-muted">How many times does this process run per week? A rule of thumb: if it takes longer to set up the automation than the manual work would require over six months, reconsider. High-volume, low-complexity tasks are ideal.</p>

      <h3 class="mb-3 mt-6 text-lg font-semibold text-foreground">3. Exception Rate</h3>
      <p class="mb-5 leading-7 text-muted">What percentage of cases can't follow the standard path? If more than 10-15% of cases require manual intervention, the process may need redesign before automation will work well. Exceptions break automated flows.</p>

      <h3 class="mb-3 mt-6 text-lg font-semibold text-foreground">4. Data Quality</h3>
      <p class="mb-5 leading-7 text-muted">Is the input data clean, consistent, and accessible? Automation can't fix bad data — it will just process bad data faster. Check for missing fields, inconsistent formats, and data locked in PDFs or scanned documents.</p>

      <h3 class="mb-3 mt-6 text-lg font-semibold text-foreground">5. Team Readiness</h3>
      <p class="mb-5 leading-7 text-muted">Is your team prepared to adopt automation? They need to trust the system, understand what it does, and know how to handle exceptions. Resistance often comes from fear of being replaced, not from the tool itself.</p>

      <h2 class="mt-8 mb-4 text-2xl font-semibold tracking-[-0.03em] text-foreground">Decision Matrix</h2>
      <p class="mb-5 leading-7 text-muted">If a process scores well on stability, volume, exception rate, and data quality — automate it. If it scores well on volume but poorly on stability or exceptions, redesign the process first, then automate. If it scores poorly across the board, leave it manual for now.</p>

      <h2 class="mt-8 mb-4 text-2xl font-semibold tracking-[-0.03em] text-foreground">Conclusion</h2>
      <p class="mb-5 leading-7 text-muted">This checklist keeps you from wasting time on processes that aren't ready. Use it before every automation decision, and you'll build a system that runs reliably instead of one that needs constant attention.</p>
    `,
  },
  'human-review': {
    id: 'human-review',
    title: 'Where Human Review Should Stay in an Automated System',
    collection: 'implementation',
    date: 'May 18, 2026',
    readTime: '6 min read',
    content: `
      <h2 class="mt-8 mb-4 text-2xl font-semibold tracking-[-0.03em] text-foreground">Automation Plus Judgment</h2>
      <p class="mb-5 leading-7 text-muted">The best automated systems aren't fully autonomous — they know when to hand off to a human. The goal isn't to remove people from the loop entirely. It's to remove them from the boring, repetitive parts so they have energy for the decisions that actually need their judgment.</p>

      <h2 class="mt-8 mb-4 text-2xl font-semibold tracking-[-0.03em] text-foreground">Where Humans Add Value</h2>

      <h3 class="mb-3 mt-6 text-lg font-semibold text-foreground">Approval Checkpoints</h3>
      <p class="mb-5 leading-7 text-muted">Some decisions have consequences that automation shouldn't make alone. High-value transactions, contract changes, customer-facing communications, and anything with legal or financial risk benefits from a human checkpoint. Design your system to route these to an approval queue rather than processing them fully automatically.</p>

      <h3 class="mb-3 mt-6 text-lg font-semibold text-foreground">Quality Gates</h3>
      <p class="mb-5 leading-7 text-muted">Before automated output reaches a customer or stakeholder, a human should review it for tone, accuracy, and context. AI-generated content, automated email drafts, and system-generated reports all benefit from a quick human pass. This catches the subtle issues that rule-based systems miss.</p>

      <h3 class="mb-3 mt-6 text-lg font-semibold text-foreground">Exception Handling</h3>
      <p class="mb-5 leading-7 text-muted">Even the best-designed automation encounters cases it can't handle. Missing data, ambiguous inputs, unusual edge cases — these should be flagged and escalated, not guessed at. Build your system to recognize when it's outside its confidence threshold and route to a human with context about what went wrong.</p>

      <h3 class="mb-3 mt-6 text-lg font-semibold text-foreground">Compliance and Audit</h3>
      <p class="mb-5 leading-7 text-muted">Regulated industries require human oversight for good reason. An automated system can process and flag, but a human needs to sign off on compliance-sensitive actions. Build audit trails into your automation from day one — every automated action should be traceable to a decision, a rule, and a timestamp.</p>

      <h2 class="mt-8 mb-4 text-2xl font-semibold tracking-[-0.03em] text-foreground">Designing the Handoff</h2>
      <p class="mb-5 leading-7 text-muted">The key is designing smooth human handoffs. When the system escalates to a person, it should provide context: what happened, what it tried, what it recommends, and what information is missing. A dashboard or notification with all relevant data lets the human decide quickly and get back to their real work.</p>

      <h2 class="mt-8 mb-4 text-2xl font-semibold tracking-[-0.03em] text-foreground">Conclusion</h2>
      <p class="mb-5 leading-7 text-muted">Automation handles the routine. Humans handle the important. When you design for this partnership rather than full autonomy, you get systems that are reliable, trustworthy, and actually adopted by the teams they're meant to help.</p>
    `,
  },
};
