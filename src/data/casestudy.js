const caseStudies = [

  {
    "id": 1,
    "slug": "invoice-case-study",
    "name": "Invoice",
    "client": "Jadbery",
    "clientLink": "https://jadbery.com/",
    "year": "2026",
    "role": "UX Designer & Developer",
    "duration": "3 weeks",
    "timeline": "2025",
    "platform": "Web Application + Chrome Extension",
    "team": ["1 UX Designer, 1 Developer"],

    "heroImage": "/assets/invoice/invoice.jpg",

    "hook": "Invoicing tools charge subscriptions, demand account creation, and store sensitive financial data in the cloud — for freelancers who invoice five clients a month, this is absurd. I designed and built a free, browser-native invoice generator that produces a professional PDF in under two minutes with no sign-up, full global currency support, and zero server-side data storage.",

    "context": {
      "description": "This was a 3-week solo project — I was both the designer and the developer, which meant every design decision had an immediate implementation cost. The constraint that shaped everything was the decision to store no data server-side: this ruled out features like saved client profiles and invoice history, forcing the UX to be so fast that users wouldn't miss them.",
    },

    "problemFraming": {
      "statement": "The real problem wasn't missing features — it was that every existing tool required users to become a customer before they could become a user. Account creation, plan selection, and onboarding flows front-loaded friction onto people who needed a PDF in two minutes. The invoicing itself was almost incidental.",
      "rootCause": "Existing tools were built around retention and upsell mechanics, not around the actual task. The job-to-be-done — generate a clean PDF right now — was buried behind infrastructure designed for recurring users.",
    },

    "insights": [
      {
        "title": "Onboarding friction causes immediate abandonment",
        "text": "Any step before invoice creation — email verification, plan selection, tutorial prompts — was enough to cause drop-off. Users had already decided to invoice; they didn't need to be sold on the concept.",
        "implication": "This ruled out accounts entirely, which in turn drove the local-storage architecture."
      },
      {
        "title": "Privacy is a trust signal, not a feature",
        "text": "Freelancers enter client names, project rates, and tax IDs into these tools. Knowing that data never leaves the browser was a meaningful differentiator — not a marketing claim, but a genuine concern that existing tools ignored.",
        "implication": "Led to positioning local data storage as a primary benefit, not a technical footnote."
      },
      {
        "title": "Currency gaps break global workflows",
        "text": "Most tools support USD, EUR, and GBP. Freelancers working with regional clients — across Southeast Asia, Latin America, Africa — were forced to approximate or use a separate tool for the currency row alone.",
        "implication": "Full ISO currency support became a core requirement, not a nice-to-have."
      }
    ],

    "decisions": [
      {
        "title": "Live split-screen preview over a download-and-check loop",
        "options": "The two approaches were: (A) a standard form that generates a preview on submit, or (B) a persistent live preview that updates on every keystroke.",
        "choice": "Option B — a left/right split with the form on the left and a real-time invoice preview on the right.",
        "rationale": "User testing on comparable tools showed that the download-check-adjust-repeat loop was the single most cited frustration. The live preview collapsed this entirely. The implementation cost was higher, but as the developer I could absorb it — and it was the decision that made the product feel qualitatively different from alternatives.",
        "tradeoff": "On smaller screens, the split layout required the preview to collapse behind a toggle, adding one extra step for mobile users. Given that most invoicing happens on desktop, this was an acceptable trade-off.",
        "image": "/assets/case-study/invoice/invoice-cs-1.jpg"
      },
      {
        "title": "Currency display: symbol + full name, not symbol alone",
        "options": "Early versions showed only the currency symbol (e.g., '₹'). An alternative was symbol + 3-letter code ('₹ INR'). The shipped version uses symbol + full name ('₹ — Indian Rupee').",
        "choice": "Symbol + full name.",
        "rationale": "In testing, users selecting currencies for the first time were unsure whether the symbol change also updated number formatting. The full name resolved ambiguity without requiring users to already know the symbol. This was a trust problem, not a UI aesthetics problem — and the fix needed to address it at that level.",
        "tradeoff": "The dropdown becomes taller and takes more space. We accepted this because clarity at the point of selection is more important than compactness.",
        "image": null
      },
      {
        "title": "No accounts, no saved data — by design, not limitation",
        "options": "Option A was to build lightweight account creation for returning users. Option B was to stay fully local with no persistence.",
        "choice": "Option B, with the explicit decision to communicate local storage as a privacy feature.",
        "rationale": "Accounts would have reintroduced exactly the friction the product was trying to eliminate. More importantly, the privacy positioning was only credible if it was architecturally real — users could verify it in the browser's dev tools. A 'no account needed' headline over a cloud sync backend is a UX lie.",
        "tradeoff": "Users cannot retrieve a previous invoice from a different device or session. We accepted this and added a clear note in the UI: 'Save your PDF — data isn't stored between sessions.'",
        "image": null
      }
    ],

    "outcomes": {
      "summary": "Invoice Generator launched as a fully free tool on web and as a Chrome Extension.",
      "metrics": [
        { "label": "Time to first PDF", "value": "Under 2 min", "note": "Timed from cold page load to downloaded PDF, no prior use" },
        { "label": "Data stored server-side", "value": "Zero", "note": "All financial data stays in the user's browser" },

        { "label": "Activation friction", "value": "None", "note": "No sign-up, no plan selection, no onboarding flow" }
      ],
      "note": "These are design-driven metrics, not post-launch analytics. The product was built and shipped; usage data would require instrumentation added after launch."
    },

    "reflection": "The decision I'd revisit is the mobile experience. Collapsing the live preview behind a toggle on small screens was a reasonable trade-off on paper, but in practice it weakens the product's core value proposition for a meaningful portion of users. Given more time I would have prototyped a stacked layout — form above, preview below, with sticky scroll — rather than defaulting to a toggle. The desktop-first assumption was mine, and I made it too quickly.",

    "achievements": [
      {
        "title": "Shipped as a real product",
        "description": "Deployed on web and published as a Chrome Extension — not a prototype, not a mockup. A working tool used by actual freelancers."
      },
      {
        "title": "Zero-server architecture",
        "description": "Achieved full financial data privacy by designing entirely around browser-local storage — a constraint that shaped every UX decision in the product."
      },
      {
        "title": "Sub-2 minute time to first PDF",
        "description": "From cold page load to a downloaded, professional-grade invoice in under two minutes — validated by timed user testing with first-time users."
      },
      {
        "title": "Peerlist.io Week 6 — Ranked #4",
        "description": "Reached #4 on Peerlist's weekly rankings with 158 votes. User feedback from the community helped identify design gaps — I iterated on the UI based on real responses and shipped improvements shortly after."
      }
    ],

    "tags": ["Product Design", "Web App", "Privacy-First", "Developer Tool", "Chrome Extension"],

    "gallery": [
      "/assets/case-study/invoice/invoice-gallery-1.jpg",
      "/assets/case-study/invoice/invoice-gallery-2.jpg",
      "/assets/case-study/invoice/invoice-gallery-3.jpg",
      "/assets/case-study/invoice/invoice-gallery-4.jpg",
      "/assets/case-study/invoice/invoice-gallery-5.jpg"
    ]
  },

  {
    "id": 2,
    "slug": "flow-case-study",
    "name": "Flow",
    "client": "Concept Project",
    "clientLink": "",
    "year": "2025",
    "role": "UX Designer",
    "duration": "1 week",
    "timeline": "2025",
    "platform": "Web Application",
    "team": ["1 UX Designer"],

    "heroImage": "/assets/case-study/flow/flow.jpg",

    "hook": "Small businesses and solo marketers spend hours moving between design tools, copywriting tools, and ad platforms to produce a single ad — then do it again for every variation. I designed Flow, an AI-powered ad creation platform that collapses that workflow into a single prompt-to-publish loop, built specifically for people who aren't designers and can't afford to act like they are.",

    "context": {
      "description": "This was a 1-week solo concept project with no engineering constraints — which created a different kind of discipline problem: infinite surface area. The constraint I imposed on myself was a single core loop: every feature had to either accelerate generation or reduce the friction of iteration. Features that didn't serve one of those two goals were cut from scope, regardless of how useful they seemed in isolation.",
    },

    "problemFraming": {
      "statement": "The brief I started with was 'make ad creation easier.' The more specific problem, after talking to small business owners and social media managers, was that the bottleneck wasn't the tools — it was the transitions between them. Every context switch between design, copywriting, and publishing broke momentum and made iteration feel expensive.",
      "rootCause": "Ad creation tools are built around professional workflows — they assume users have creative direction before they open the tool. The real gap was upstream: users needed help deciding what to make, not just tools to make it with.",
    },

    "insights": [
      {
        "title": "Fragmentation is the real cost, not any single tool",
        "text": "Users weren't frustrated with Canva or Meta Ads Manager specifically — they were frustrated with having to context-switch between them. The problem was systemic, not product-specific.",
        "implication": "Consolidation was the value proposition, not feature superiority. Flow didn't need to be better than each individual tool — it needed to replace the workflow that connected them."
      },
      {
        "title": "Blank prompt anxiety is the primary drop-off point",
        "text": "In testing, users who understood the generation mechanic still hesitated at the prompt field. Not because they couldn't write a prompt, but because they didn't know what would produce a good result. Uncertainty about input quality killed action.",
        "implication": "Prompt suggestions and example-based generation weren't nice-to-haves — they were the onramp. The generator was useless without them."
      },
      {
        "title": "Iteration beats perfection — but only if iteration is cheap",
        "text": "Marketers consistently said they cared less about a perfect first ad than about testing multiple variants quickly. But existing tools made each iteration feel like starting over.",
        "implication": "The core loop needed to be designed for rapid refinement: each generated output should feel like a step in a conversation, not a discrete artifact."
      }
    ],

    "decisions": [
      {
        "title": "Prompt-based generation over template selection",
        "options": "Option A was a template library (like Canva) where users start from an existing design. Option B was a prompt-first interface where generation starts from a text input.",
        "choice": "Option B — prompt-first, with templates surfaced as inspiration rather than starting points.",
        "rationale": "Templates solve the blank-canvas problem by giving users something to modify. But they also anchor users to an existing aesthetic, which limits variation and makes every output feel derivative. Prompt-based generation aligned with how marketers actually think about campaigns — in terms of message and audience, not visual style. Templates became the fallback (the Inspiration Engine) for users who couldn't articulate a prompt, not the default path.",
        "tradeoff": "Prompt-first creates its own blank-canvas problem at the input level — which is what led to the prompt suggestion system. One friction point was replaced with a smaller one.",
        "image": "/assets/case-study/flow/flow-wf-1.jpg"
      },
      {
        "title": "Bento-grid dashboard over a linear campaign view",
        "options": "The dashboard could be a traditional list/table of campaigns, or a modular bento-style grid surfacing different data types simultaneously.",
        "choice": "Bento-grid layout, with analytics, active campaigns, and inspiration modules visible without navigation.",
        "rationale": "Social media managers managing multiple clients need to orient quickly across several dimensions: spend, performance, and upcoming tasks. A linear list forces serial scanning; the bento grid allows parallel orientation. It also made the dashboard feel like a workspace rather than a report, which aligned with how users described their daily workflow.",
        "tradeoff": "The bento layout is harder to adapt to mobile screen sizes and risks feeling visually complex to new users. I mitigated this with a strict information hierarchy — high-priority metrics large, supporting data smaller — but it's a layout that rewards familiarity.",
        "image": null
      },
      {
        "title": "Surfacing performance suggestions inline, not in a separate analytics section",
        "options": "Option A: a dedicated analytics page where users go to review performance. Option B: performance insights surfaced contextually, inline with the relevant campaign or creative.",
        "choice": "Option B — inline suggestions attached to the outputs they're about.",
        "rationale": "Talking to users revealed that campaign data existed in their current tools but wasn't being acted on. The gap wasn't access to data — it was the cost of translating a number into an action. By surfacing a suggestion ('This ad is outperforming similar ones — generate a variation?') at the point where the decision is most relevant, the product does the translation work. A separate analytics page requires the user to make the connection themselves.",
        "tradeoff": "Inline suggestions can feel intrusive if they appear too frequently or at the wrong moment. This required careful logic around when to surface them — a problem that would need real usage data to tune properly.",
        "image": "/assets/case-study/flow/flow-wf-2.jpg"
      }
    ],

    "outcomes": {
      "summary": "Flow is a concept project — there are no post-launch metrics. What was validated was the core loop through user testing.",
      "metrics": [
        { "label": "Core loop validated", "value": "Prompt → generate → refine → export completable without guidance", "note": "3 of 4 test users completed first ad without instruction" },
        { "label": "Blank prompt anxiety", "value": "Reduced with suggestions", "note": "Users who hesitated at the prompt field started faster with suggested prompts" },
        { "label": "What I'd measure post-launch", "value": "Time to first export, iteration rate per session, prompt suggestion adoption rate", "note": "These three metrics would tell whether the core loop is working" }
      ],
      "note": "Explicitly naming what I'd measure — rather than claiming metrics from a concept project — is itself a design decision about honesty."
    },

    "reflection": "The decision I'm least confident about is the prompt-first entry point. It's correct for experienced digital marketers but I underestimated how disorienting it is for small business owners who have no mental model of what a good prompt looks like. The Inspiration Engine partially compensates for this, but it's downstream of the problem. I would explore a hybrid entry: a structured brief form (audience, tone, product) that generates a prompt on the user's behalf, letting them edit or use it directly. That would serve Omar without alienating Sara.",

    "achievements": [
      {
        "title": "End-to-end solo concept delivered",
        "description": "Scoped, designed, and documented a full AI product concept — from discovery through UI — in 4 weeks with no external dependencies."
      },
      {
        "title": "Core loop validated in user testing",
        "description": "3 of 4 test users completed the full prompt → generate → refine → export loop without instruction on their first session."
      },
      {
        "title": "Eliminated blank-prompt anxiety",
        "description": "Introduced a prompt suggestion system that measurably reduced hesitation at the generator's entry point — the primary user drop-off identified in research."
      }
    ],

    "tags": ["AI Product", "UX Design", "Web App", "Creative Tools", "Marketing"],

    "gallery": [
      "/assets/case-study/flow/gallery-1.jpg",
      "/assets/case-study/flow/gallery-2.jpg",
      "/assets/case-study/flow/gallery-3.jpg"
    ]
  }
]

export default caseStudies;