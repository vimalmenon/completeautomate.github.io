export interface IBlogEntry {
  description: string;
  href: string;
  id: string;
  readTime: string;
  status: 'Draft' | 'Live' | 'Planned';
  title: string;
  content: string[];
  youtubeId?: string;
  uploadDate?: string;
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
          'Learn how to audit a manual workflow before automating it. A practical guide for small business owners on mapping bottlenecks, finding high-friction tasks, and choosing the right processes for AI workflow automation.',
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
          'An automation readiness checklist for small teams. Use this decision framework to spot which business processes are stable enough for AI automation and which still need cleanup first.',
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
        content: [
          'AI content pipelines can transform how small teams produce and manage content, but only if the quality controls are baked in from the start. Without intentional design, AI-generated content quickly becomes generic, inconsistent, or worse — factually wrong.',
          'The key is building a pipeline with clear stages: brief creation, AI drafting, human review, and final polish. Each stage has a specific purpose and a specific gate. The brief defines tone, audience, structure, and key messages. The AI draft follows the brief closely — use a lower temperature setting (0.3–0.5) for consistency. The human review catches brand voice drift, factual errors, and structural issues. The final polish handles formatting, links, and publication.',
          'Where most pipelines fail is the review stage. If reviewers are asked to edit raw AI output without a structured checklist, quality degrades quickly. Create a review rubric: check accuracy, brand voice, structure, call-to-action alignment, and readability score. Limit the review pass to these items and nothing else. If you try to review everything, you will review nothing well.',
          'For operations teams, the real win is not speed — it is consistency. A well-designed AI content pipeline ensures every piece of content meets the same quality bar, every time. That is the difference between AI that produces volume and AI that produces value.',
          'Start small. Pick one content type — blog posts, social updates, or email newsletters. Build the brief, draft, review, and polish pipeline for that type first. Prove the quality, then expand to other formats.',
        ],
        description:
          'How to design an AI content pipeline without losing quality. A practical guide for operations teams on AI-powered content workflows with structured human review and quality control.',
        href: '/blogs/content-pipeline',
        id: 'content-pipeline',
        readTime: '8 min read',
        status: 'Live',
        title: 'Designing an AI Content Pipeline Without Losing Quality',
      },
      {
        content: [
          'AI copilots promise to save time, but the reality depends entirely on where you deploy them. Put a copilot on the wrong task and you create more work — reviewing, correcting, and redoing output that would have been faster to do yourself.',
          'The best places for AI copilots in operations teams are tasks that are high-volume, low-variance, and have clear success criteria. Think: drafting standard responses, summarizing meeting notes, extracting data from documents, generating status reports, and triaging incoming requests.',
          'The worst places are tasks that require deep context, subjective judgment, or creative direction. AI copilots cannot read between the lines of a client email, understand office politics, or make a strategic call about which project to prioritize. When teams force copilots into these roles, they introduce hidden rework — the AI produces something, a human has to redo it, and the net time saved is negative.',
          'The winning pattern is simple: use copilots for the first 80% of structured, repetitive work. Keep humans for the last 20% — the judgment, the context, and the decisions. When done right, the copilot becomes a force multiplier that handles the grunt work so your team can focus on the work that actually needs human attention.',
        ],
        description:
          'Where AI copilots actually save time for operations teams. Learn which tasks benefit from AI assistance and where to keep human judgment for maximum productivity.',
        href: '/blogs/team-copilots',
        id: 'team-copilots',
        readTime: '7 min read',
        status: 'Live',
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
          'Where human review should stay in automated systems. Patterns for combining AI automation with human checkpoints to maintain trust, quality, and accountability in business workflows.',
        href: '/blogs/human-review',
        id: 'human-review',
        readTime: '6 min read',
        status: 'Live',
        title: 'Where Human Review Should Stay in an Automated System',
      },
      {
        content: [
          "Observability is what separates a calm automated system from one that burns your team's time in fire drills. Without good observability, every failure is a mystery — you find out about it from a customer complaint, then spend hours tracing through logs to understand what broke.",
          'Start with three layers of observability. First, job-level monitoring: every automated task should report whether it succeeded, failed, or timed out, along with a reason. Second, business-level alerts: not every failure matters equally. A failed invoice sync is urgent. A failed analytics report can wait. Route alerts based on business impact, not technical error codes. Third, audit trails: every action an automation takes should leave a traceable record — who triggered it, what data it used, what decision it made, and what the outcome was.',
          'Retries need a sane policy. Automations should retry transient failures (network timeouts, rate limits) up to three times with exponential backoff. But non-transient failures (bad data, missing permissions) should never retry — they should surface for human review immediately.',
          'The simplest observability setup that works: a dashboard showing the last 24 hours of automation runs, a log aggregator searchable by job ID, and a notification channel (email or Slack) for business-level failures. Start with that and add detail as the system grows.',
        ],
        description:
          'A monitoring baseline for AI-driven workflows — learn how to set up job monitoring, retry policies, business-level alerts, and audit logs so your automated workflows stay calm under load.',
        href: '/blogs/observability',
        id: 'observability',
        readTime: '9 min read',
        status: 'Live',
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
          'AI vs agents vs workflows explained simply. Understand the difference between AI, AI agents with tool calling, and automated workflows. Plus tokens explained and how AI pricing works.',
        href: '/blogs/ai-vs-agents-vs-workflows-tokens',
        id: 'ai-vs-agents-vs-workflows-tokens',
        readTime: '14 min video',
        status: 'Live',
        title: 'AI vs. Agents vs. Workflows | Tokens & Automation Explained',
        uploadDate: '2026-03-25T00:00:00+08:00',
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
          'AI terms explained simply — what temperature does, why context windows matter, how hallucination happens, and how tool calling creates AI agents. Perfect for beginners learning AI concepts.',
        href: '/blogs/ai-terms-temperature-context-tool-calling',
        id: 'ai-terms-temperature-context-tool-calling',
        readTime: '25 min video',
        status: 'Live',
        title: 'AI Terms Explained | Temperature, Context & Tool Calling',
        uploadDate: '2026-04-01T00:00:00+08:00',
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
          'AI vs AI agents vs agentic AI explained. Understand the three tiers: plain AI (knowledge without action), AI agents with tools, and autonomous agentic AI that orchestrates entire workflows.',
        href: '/blogs/ai-agents-vs-agentic-ai',
        id: 'ai-agents-vs-agentic-ai',
        readTime: '17 min video',
        status: 'Live',
        title: 'AI vs. AI Agents vs. Agentic AI: Understanding the Differences',
        uploadDate: '2026-04-21T00:00:00+08:00',
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
          'AI models explained: what parameters mean, how multimodal models work with images and audio, why context size matters, and how to choose the right model for your task. Beginner-friendly guide.',
        href: '/blogs/ai-models-parameters-multimodal-context',
        id: 'ai-models-parameters-multimodal-context',
        readTime: '9 min video',
        status: 'Live',
        title: 'AI Models Explained: Parameters, Multimodal & Context Size',
        uploadDate: '2026-04-28T00:00:00+08:00',
        youtubeId: 'zEBPv_KT6js',
      },
      {
        content: [
          'The fundamental problem in AI has always been the gap between human meaning and machine numbers. When I say the word "dog," you immediately understand what a dog is — you know a puppy is a baby dog, a cat is a related animal, and a television has nothing to do with any of it. A computer, on the other hand, sees every word as a random label. Just ones and zeros. No understanding. No relationships. This is where vector embeddings come in.',
          'A vector embedding is simply a list of numbers — a long row of coordinates that represents something. A word, a sentence, an image, any piece of data. The embedding for "dog" might look something like [0.12, -0.84, 0.53, 0.97, -0.31, ...] — sometimes hundreds of numbers long. You can think of these numbers as coordinates on a map, just like latitude and longitude. And the beautiful part is: similar things end up close together. If you plot the embeddings of words, you will see "dog," "puppy," and "hound" all clustered in one region. "Cat" is nearby because they are both animals. But "TV" and "phone"? Those are way over on the other side of the map — the electronics neighbourhood. Similar things have similar coordinates.',
          'This is where embeddings get truly remarkable. Because they are just numbers, you can do math with meaning. There is a famous example: take the vector for "King," subtract the vector for "Man," add the vector for "Woman." What do you get? The vector for "Queen." The computer never learned a dictionary. Nobody told it that a king is the male ruler of a kingdom and a queen is the female ruler. It figured out that relationship purely by reading patterns in text. King minus Man plus Woman equals Queen. This works for all kinds of relationships: Paris minus France plus Italy equals Rome. Running minus run plus swim equals swimming. The model learned these patterns from billions of sentences without anyone writing a single rule.',
          'How are these embeddings actually created? It is surprisingly simple. You take a massive amount of text — billions of sentences — and train a model with a single rule: words that appear in similar contexts should have similar embeddings. Imagine a window sliding across a sentence: "The cat sat on the mat." The model looks at pairs of words that appear near each other — "the" and "cat," "cat" and "sat," "sat" and "on" — and it slowly learns that "cat" and "mat" share a context. Do this ten billion times across every type of text you can find — books, articles, the entire internet — and the model builds a map of meaning. No dictionary. No grammar rules. Just patterns from data.',
          'So why should you actually care about vector embeddings? Because they are running behind the scenes in almost every AI tool you use today. First, semantic search: when you type "cheap hotels near the beach" and the search engine finds results that match what you meant, not just the exact keywords you typed — that is embeddings. Second, RAG (Retrieval-Augmented Generation): when you ask ChatGPT a question, it converts your query to an embedding, looks up relevant facts by meaning, and then generates an answer based on what it found. Third, recommendations: Netflix, Amazon, Spotify, YouTube — every recommendation engine uses embeddings to find things that are similar to what you already like. Search, AI assistants, recommendations — embeddings are the invisible engine behind all of them.',
          'Embeddings are the bridge between human meaning and machine numbers. Simple numbers. Simple idea. And it powers everything. If you want to understand why modern AI actually understands intent rather than just matching keywords, embeddings are the answer.',
        ],
        description:
          'Vector embeddings explained simply — what they are, how they turn words into coordinates on a map, the mind-blowing "King − Man + Woman = Queen" analogy, how they are created, and why they power semantic search, ChatGPT\'s memory, and Netflix recommendations.',
        href: '/blogs/vector-embeddings-explained',
        id: 'vector-embeddings-explained',
        readTime: '5 min video',
        status: 'Live',
        title: 'Vector Embeddings Explained Simply | AI Terms #5',
        uploadDate: '2026-06-04T00:00:00+08:00',
        youtubeId: 'zZwhT8GYj28',
      },
    ],
    id: 'ai-terms',
    title: 'AI Terms',
  },
];
