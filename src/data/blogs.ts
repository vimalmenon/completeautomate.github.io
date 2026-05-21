export interface IBlogEntry {
  description: string;
  href: string;
  id: string;
  readTime: string;
  status: 'Draft' | 'Live' | 'Planned';
  title: string;
  content: string[];
  youtubeId?: string;
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
  {
    description:
      'Clear, practical breakdowns of essential AI concepts — from tokens and temperature to agentic AI and multimodal models. Each post is paired with a video explanation.',
    entries: [
      {
        content: [
          'When you interact with an AI chatbot, you are talking to a system trained on historical data — everything it knows was learned from a fixed dataset up to a certain cutoff date. That is what makes it an AI: it can reason, generate text, and answer questions, but it cannot act on live information unless given the tools to do so.',
          'An AI agent, by contrast, has access to tools. A tool might be a web search function, an API call to your email, or a connection to a spreadsheet application. When you ask an agent "what is the current time in Hong Kong?" it recognises that it needs real-time data, calls a search tool, retrieves the answer, and returns it to you. The same AI without tools would simply tell you it cannot access live information.',
          'A workflow is a sequence of connected steps — some involving AI agents, some using plain integrations. For example, a YouTube content workflow might check for new uploads daily, send the video to an AI agent that analyses its content, generate metadata and tags, and then update the video description automatically. Workflows like these combine AI with traditional process automation (tools like n8n or Langflow) to complete multi-step tasks without manual intervention.',
          'Tokens are how AI models count and charge for text. A token is roughly a word or sub-word. When you send a prompt, the model converts it into tokens, processes them, and generates a response — also measured in tokens. Pricing is typically per million tokens. DeepSeek, for instance, charges $0.26 per million input tokens and $0.38 per million output tokens. Understanding tokens helps you estimate costs and optimise your prompts.',
        ],
        description:
          'What is the difference between plain AI, AI agents with tools, and automated workflows? Plus, a simple explanation of tokens and how AI pricing works.',
        href: '/blogs/ai-vs-agents-vs-workflows-tokens',
        id: 'ai-vs-agents-vs-workflows-tokens',
        readTime: '14 min video',
        status: 'Live',
        title: 'AI vs. Agents vs. Workflows | Tokens & Automation Explained',
        youtubeId: 'Vw_ilJWdzK8',
      },
      {
        content: [
          "Temperature is a setting that controls how creative an AI model's responses are. It ranges from 0 to 1 (and sometimes beyond). A low temperature (near 0) produces predictable, conservative answers — the model picks the most likely word every time. A high temperature (near 1) introduces variation, making the output more creative and less repetitive. If you want factual, consistent results, keep temperature low. If you want varied, imaginative responses, turn it up.",
          'Context refers to the additional information you feed an AI model so it can generate a relevant response. Models have a fixed context window — the maximum amount of text they can process at once. DeepSeek has roughly 164,000 tokens of context. Grok has around 2 million. Staying within this limit is crucial; exceeding it often leads to hallucinations where the model fabricates information with unwarranted confidence.',
          'Hallucination happens when an AI produces an answer that sounds correct but is completely wrong. This occurs most often when the context window is exceeded, the question is poorly framed, or the model lacks the data to answer accurately. The danger is that the response looks convincing — making it easy for users to trust incorrect information.',
          'Tool calling (or function calling) is what transforms a basic AI into an agent. When a user asks a question that requires live data — "what time is it in Hong Kong?" — the AI checks whether it has tools available. If it has a search tool, it calls it, retrieves the data, and returns the answer. If no tools are available, the AI relies solely on its training data, which is often outdated. Tool calling is the mechanism that lets AI perform actions, query APIs, and interact with external systems.',
        ],
        description:
          'How temperature controls AI creativity, why context windows matter, what hallucination is, and how tool calling makes AI agents possible.',
        href: '/blogs/ai-terms-temperature-context-tool-calling',
        id: 'ai-terms-temperature-context-tool-calling',
        readTime: '25 min video',
        status: 'Live',
        title: 'AI Terms Explained | Temperature, Context & Tool Calling',
        youtubeId: 'd4j2OTJdO94',
      },
      {
        content: [
          'AI, in its simplest form, works on historical data. It is trained on a fixed dataset and cannot access real-time information or perform actions on its own. When you ask a plain AI "what time is it in Hong Kong?" it will either guess based on old data or admit it does not know. This limitation is by design — AI models are stateless learners, not executors.',
          'AI agents are AI models equipped with tools. These tools give them the ability to search the internet, call APIs, access databases, or interact with applications. When an agent receives a query that requires live information, it decides which tool to use, executes the call, and returns the result. The key distinction is action: AI understands, agents act.',
          'Agentic AI goes one step further. It is an autonomous system that can break down a complex task into smaller sub-tasks, spawn sub-agents to complete each piece, review the results, iterate, and deliver a final output with minimal human intervention. Tools like Manus AI exemplify this — they can analyse a website, generate logo concepts, justify design choices, and present multiple options without being walked through each step.',
          'The spectrum is clear: AI answers questions, agents perform actions using tools, and agentic AI orchestrates entire workflows autonomously. Most modern AI tools are moving toward the agentic end of this spectrum — reducing the need for human hand-holding and letting the system plan, execute, and refine its own work.',
        ],
        description:
          'A clear breakdown of three tiers: AI (knowledge without action), AI agents (knowledge with tools), and agentic AI (autonomous task orchestration).',
        href: '/blogs/ai-agents-vs-agentic-ai',
        id: 'ai-agents-vs-agentic-ai',
        readTime: '17 min video',
        status: 'Live',
        title: 'AI vs. AI Agents vs. Agentic AI: Understanding the Differences',
        youtubeId: '_HY4496idyk',
      },
      {
        content: [
          "A model's parameter count — measured in billions (B) — determines its capacity. A 27B parameter model can store more knowledge and handle more complex tasks than a 7B model, but it also requires significantly more memory and processing power. Models with higher parameters generally perform better on benchmarks, but they are impractical to run on consumer hardware. For local use, models in the 7B to 24B range are viable; anything beyond requires a server-grade GPU with substantial VRAM.",
          'Multimodal models can process more than just text. Some accept images as input (for analysis, captioning, or reasoning), while others can work with audio, video, or even generate images. When choosing a model, check what input types it supports — if your application needs to analyse screenshots or process audio files, a text-only model like DeepSeek will not work. Qwen, for example, supports both text and image input.',
          'Context size refers to the maximum amount of text a model can process in a single session. DeepSeek offers around 1 million tokens of context, while smaller models may cap at 128K or 256K. A larger context window allows you to feed in entire documents, long conversation histories, or comprehensive instructions before the model starts to lose information. Exceeding the context size often triggers hallucinations — the model starts guessing because it has forgotten the earlier parts of the input.',
          'Not all models support tool calling (or function calling). If you plan to build an AI agent that interacts with APIs, databases, or external services, make sure the model you choose explicitly supports tool calling. This is often listed alongside other model capabilities like context size and supported input types. Tool calling is what turns a static AI model into a dynamic, action-oriented agent.',
        ],
        description:
          'What model parameters mean, how multimodal models handle images and audio, why context size matters, and how to choose the right model for your task.',
        href: '/blogs/ai-models-parameters-multimodal-context',
        id: 'ai-models-parameters-multimodal-context',
        readTime: '9 min video',
        status: 'Live',
        title: 'AI Models Explained: Parameters, Multimodal & Context Size',
        youtubeId: 'zEBPv_KT6js',
      },
    ],
    id: 'ai-terms',
    title: 'AI Terms',
  },
];
