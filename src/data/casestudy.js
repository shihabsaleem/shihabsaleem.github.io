const caseStudies = [
  {
    "id": 1,
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
    "coverImage": "/assets/case-study/flow/cover.jpg",
    "heroImage": "/assets/case-study/flow/flow.jpg",

    "hook": "Small businesses and solo marketers spend hours moving between design tools, copywriting tools, and ad platforms to produce a single ad — then do it again for every variation. I designed Flow, an AI-powered ad creation platform that collapses that workflow into a single prompt-to-publish loop, built specifically for people who aren't designers and can't afford to act like they are.",

    "context": {
      "description": "This was a 1-week solo concept project centered on a prompt-to-image generation workflow with iterative refinement built into a chat window. Instead of a canvas-based editor, users generate ad visuals through natural-language prompts and alter them conversationally — requesting changes, swapping elements, or adjusting tone without leaving the chat interface. The constraint I imposed was a single core loop: every feature had to either accelerate generation or reduce the friction of iteration. Features that didn't serve one of those two goals were cut from scope, regardless of how useful they seemed in isolation.",
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

    "reflection": "The decision I'm least confident about is the prompt-first entry point. It's correct for experienced digital marketers but I underestimated how disorienting it is for small business owners who have no mental model of what a good prompt looks like. The Inspiration Engine partially compensates for this, but it's downstream of the problem. I would explore a hybrid entry: a structured brief form (audience, tone, product) that generates a prompt on the user's behalf, letting them edit or use it directly. That would serve first-time users without alienating power users who prefer writing their own prompts.",

    "achievements": [
      {
        "title": "End-to-end solo concept delivered",
        "description": "Scoped, designed, and documented a full AI product concept — from discovery through UI — in 1 week with no external dependencies."
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
  },
  {
    "id": 2,
    "slug": "invoice-case-study",
    "name": "Invoice",
    "client": "Jadbery",
    "clientLink": "https://jadbery.com/",
    "year": "2025",
    "role": "Product Designer & Developer",
    "duration": "4 Weeks",
    "timeline": "2025",
    "platform": "Web App + Chrome Extension",
    "team": ["Solo Designer & Developer"],
    "coverImage": "/assets/case-study/invoice/invoice.jpg",
    "heroImage": "/assets/case-study/invoice/invoice.jpg",

    "hook": "Most invoicing tools are built around subscriptions, onboarding flows, and cloud storage. Freelancers who simply need to send a professional invoice are forced through unnecessary friction before they can complete a basic task. Invoice was designed as a privacy-first, offline-capable invoice generator that creates branded PDF invoices, estimates, and receipts directly in the browser — with no sign-up, no tracking, and no server-side data storage.",

    "context": {
      "description": "Invoice was conceived as a lightweight alternative to traditional invoicing platforms. The goal was simple: allow freelancers and small business owners to generate professional documents within minutes while maintaining full ownership of their data. As both designer and developer, I was responsible for research, UX, visual design, front-end development, PDF generation, and deployment."
    },

    "problemFraming": {
      "statement": "Most invoicing tools optimize for user retention instead of task completion. Users are asked to create accounts, verify emails, choose plans, and learn new interfaces before generating a single invoice.",
      "rootCause": "The core job-to-be-done — create a professional invoice quickly — becomes secondary to business models built around subscriptions and recurring engagement."
    },

    "goals": [
      "Enable users to generate a professional PDF invoice in under two minutes.",
      "Eliminate account creation and onboarding friction.",
      "Keep all invoice data on the user's device.",
      "Support global currencies and international freelancers.",
      "Provide a fast and intuitive experience across web and browser extension environments."
    ],

    "insights": [
      {
        "title": "Speed is the primary value proposition",
        "text": "Users arriving at invoicing tools typically have an immediate task to complete. Every additional step before invoice creation increases abandonment risk.",
        "implication": "The product removes account creation, onboarding, and setup requirements entirely."
      },
      {
        "title": "Privacy builds trust",
        "text": "Invoices often contain sensitive client information, project rates, tax identifiers, and business details.",
        "implication": "A fully local architecture became both a technical decision and a product differentiator."
      },
      {
        "title": "Global freelancers need global currency support",
        "text": "Many existing tools prioritize only a handful of major currencies.",
        "implication": "Full ISO currency support was included from the beginning to support international workflows."
      }
    ],

    "decisions": [
      {
        "title": "Real-Time Invoice Preview",
        "options": "Option A was a traditional form-then-download flow where users fill in fields and click a button to generate a PDF. Option B was a split-screen layout with a live preview that updates as the user types.",
        "choice": "Option B — a split-screen editor with a live PDF preview updating in real time.",
        "rationale": "The traditional generate-download-check cycle adds unnecessary friction for a tool whose entire value is fast document creation. A live preview collapses that loop: users see exactly what they're producing as they produce it, which builds confidence and reduces errors before export. It also makes the product feel more immediate and responsive — closer to a design tool than a form.",
        "tradeoff": "The split-screen layout requires sufficient horizontal screen space to be useful. On narrow screens, one panel must give way to the other, which undermines the core benefit. This made mobile an open problem from the start.",
        "impact": "Reduced friction and increased user confidence during invoice creation.",
        "image": null
      },
      {
        "title": "Privacy-first, local-only architecture",
        "options": "Option A was a server-side model where invoice data is stored in a database and users access their invoices via an account. Option B was a fully local model where all data lives in the browser and nothing is transmitted to a server.",
        "choice": "Option B — all invoice data stored locally in the browser, with no server-side storage.",
        "rationale": "Invoices contain sensitive business data: client details, rates, tax identifiers, project values. Asking users to trust a third-party server with that information adds a meaningful barrier — especially for freelancers who have had bad experiences with platforms that lock or lose their data. A local-only architecture makes the privacy guarantee credible because it's structural, not just a policy claim. It also enables offline use as a natural side effect.",
        "tradeoff": "Local storage means no cross-device sync and no data recovery if the user clears their browser. For a tool targeting professionals who may switch devices, this is a real limitation. The decision was accepted as a deliberate trade against privacy and simplicity.",
        "impact": "Users retain full ownership of their business data with no dependency on an external service.",
        "image": null
      },
      {
        "title": "Progressive Web App over native app",
        "options": "Option A was a native mobile or desktop application requiring installation through an app store. Option B was a Progressive Web App installable directly from the browser, with offline support built in.",
        "choice": "Option B — a PWA with offline capability, accessible from any browser without an app store.",
        "rationale": "Freelancers need to generate invoices in inconsistent environments — in a café, on a client call, on a slow connection. A PWA can be added to the home screen like a native app but requires no store submission, no update approval cycle, and no platform-specific build. Offline support followed naturally from the local-first architecture: since no data touches a server, the app continues working regardless of network state.",
        "tradeoff": "PWAs have lower discoverability than App Store or Google Play listings. Users who search for invoicing tools on mobile are more likely to find a native app. A Chrome Extension was added to partially compensate for this — meeting users in the browser context where they already work.",
        "impact": "Invoice creation remains available across environments, including offline, with no installation friction.",
        "image": null
      },
      {
        "title": "Custom branding support from day one",
        "options": "Option A was a fixed professional template where all invoices share the same layout and visual style. Option B was a customisable template that accepts logos, brand colors, and document-level styling.",
        "choice": "Option B — full branding support including logo upload, custom colors, and document customisation.",
        "rationale": "A generic invoice template may be functional, but it signals that the sender is using a free tool rather than running a professional business. For freelancers, the invoice is often the last impression they leave with a client. Supporting branding closes the gap between 'document generated by a tool' and 'document from a business.' It also differentiates the product from bare-minimum generators that produce identical outputs for every user.",
        "tradeoff": "Branding options add UI complexity. More fields, more decisions, more potential for a user to feel like they need to set things up before getting started. This was managed by making all branding fields optional — the product works without them, and users can add personalisation progressively.",
        "impact": "Generated documents feel client-ready and reflect the user's professional identity rather than the tool's defaults.",
        "image": null
      }
    ],
    "features": [
      "Professional PDF invoice generation",
      "Custom logos and brand colors",
      "Invoices, estimates, and receipts",
      "Global currency support",
      "Offline functionality",
      "No sign-up required",
      "Chrome Extension",
      "One-click PDF export",
      "Privacy-first local data storage"
    ],

    "outcomes": {
      "summary": "Invoice launched as a free web application and Chrome Extension focused on speed, simplicity, and privacy.",
      "metrics": [
        {
          "label": "Time to First Invoice",
          "value": "< 2 Minutes",
          "note": ""
        },
        {
          "label": "Account Creation",
          "value": "0 Steps",
          "note": ""
        },
        {
          "label": "Server-Side Data Storage",
          "value": "0%",
          "note": ""
        },
        {
          "label": "Supported Platforms",
          "value": "Web + Chrome Extension",
          "note": ""
        }
      ]


    },

    "achievements": [
      {
        "title": "Shipped as a Production Product",
        "description": "Successfully launched on the web and as a Chrome Extension."
      },
      {
        "title": "Privacy-First Architecture",
        "description": "All invoice generation happens locally without transmitting user data to external servers."
      },
      {
        "title": "Fast Document Creation",
        "description": "Users can generate professional invoices in under two minutes."
      },
      {
        "title": "Peerlist Week 6 Ranking",
        "description": "Reached #4 on Peerlist with 158 community votes and valuable user feedback."
      }
    ],

    "reflection": "The biggest improvement opportunity is the mobile workflow. While the desktop experience benefits greatly from the split-screen layout, future iterations could explore a stacked editing and preview experience that better preserves the live-preview advantage on smaller screens.",

    "tags": [
      "Product Design",
      "UX Design",
      "Web Application",
      "Chrome Extension",
      "Privacy-First",
      "PWA"
    ],

    "gallery": [
      "/assets/case-study/invoice/gallery-1.jpg",
      "/assets/case-study/invoice/gallery-2.jpg",
      "/assets/case-study/invoice/gallery-3.jpg"
    ]
  },
  {
    "id": 3,
    "slug": "milkow-case-study",
    "name": "Milkow Delivery CRM",
    "client": "Milkow Fresh",
    "clientLink": "https://www.milkow.in/",
    "year": "2026",
    "role": "Product Designer & Developer",
    "duration": "16 Weeks",
    "timeline": "2026",
    "platform": "Mobile first web app",
    "team": ["1 Product Designer & 3 Developers"],
    "coverImage": "/assets/case-study/milkow/cover.jpg",
    "heroImage": "/assets/case-study/milkow/milkow.jpg",

    "hook": "Milkow is a full-stack Customer Relationship Management (CRM) and route management application designed specifically for the unique, fast-paced operational needs of daily milk delivery businesses. Built on a robust tech stack, it acts as a mobile-first Progressive Web App (PWA) bridging the gap between chaotic physical logistics and digital precision.",

    "context": {
      "description": "This case study details the end-to-end UX research, design, and engineering process used to transform a legacy paper-based industry into a streamlined digital experience. The process began with direct immersion into the users' environment, conducting 'ride-alongs' with delivery drivers during their 4:00 AM morning shifts to understand constraints like one-handed operation, low light, and network unreliability."
    },

    "problemFraming": {
      "statement": "The daily milk delivery industry operates with chaotic physical logistics and paper-based tracking. Drivers operate under severe environmental constraints (one hand, gloves, low/high light, poor network), while franchise owners struggle with irregular cash flow and inventory leakage.",
      "rootCause": "Traditional logistics apps are overkill (requiring barcode scanning and signatures), while basic apps fail due to tiny buttons, multiple taps, and freezing when networks drop. Rigid billing cycles fail because customers pay ad-hoc, and end-of-shift physical stock reconciliation rarely matches paper ledgers."
    },

    "insights": [
      {
        "title": "The 'Three-Second' Rule",
        "text": "If logging a delivery takes more than three seconds, the driver abandons the app in favor of remembering it later, leading to massive data inaccuracy.",
        "implication": "The UI must be instant. State mutations need to be staged locally, and background syncing is required to hide network latency."
      },
      {
        "title": "Irregular Cash Flow & Ad-hoc Payments",
        "text": "Customers don't follow strict daily, weekly, or monthly payment schedules. They pay randomly (ad-hoc), making rigid billing cycles useless.",
        "implication": "The billing system needs to act as a Unified Running Ledger. Any delivery debits the ledger, and any payment credits it."
      },
      {
        "title": "Environmental Constraints Dictate Design",
        "text": "Drivers operate outdoors, often in blinding high sunlight, making standard subtle grays and low-contrast modern UI trends fail miserably.",
        "implication": "The UI requires a stark black-and-white theme and extremely padded button hitboxes to accommodate gloved, walking users."
      }
    ],

    "decisions": [
      {
        "title": "Decimal-Based Route Ordering",
        "options": "SQL linked list vs. String-based sorting vs. Decimal-based system",
        "choice": "Decimal-based system for the delivery_order column with a visual Drag-and-Drop interface.",
        "rationale": "We needed a way to dynamically insert new customers between existing ones. A linked list proved overly complex and fragile during bulk updates. String-based sorting had length limits. A decimal-based system provides ample numerical room to insert records without triggering massive, system-wide database recalculations.",
        "tradeoff": "Requires careful management of the decimal precision over time, but avoids immediate re-indexing performance hits.",
        "impact": "Drivers have an efficient, easily updatable route sequence.",
        "image": null
      },
      {
        "title": "Optimistic UI & Offline-First Execution",
        "options": "Traditional request-response model vs. Optimistic UI with Background Syncing",
        "choice": "Optimistic UI where state mutations are staged in local storage and synced silently.",
        "rationale": "To solve 'The Three-Second Rule', we couldn't wait for network requests. When a driver taps a delivery checkbox, the UI updates instantly. A custom syncBatchDeliveries() function batches interactions and pushes them to the backend when the network is restored.",
        "tradeoff": "Increases front-end complexity to handle conflict resolution and failed sync states.",
        "impact": "Interaction time per stop reduced to under one second, eliminating loading spinners.",
        "image": null
      },
      {
        "title": "Impersonation Mode for Superadmin",
        "options": "Standard admin panel vs. Impersonation Mode",
        "choice": "Impersonation Mode that safely hijacks the activeFranchiseId.",
        "rationale": "Superadmins need to troubleshoot franchise-specific issues without compromising strict Row Level Security (RLS) that isolates tenant data. Impersonation allows them to instantly view the exact dashboard and UI state that the franchisee sees, enabling rapid, safe debugging.",
        "tradeoff": "Requires strict auditing and logging to ensure the feature isn't abused for unauthorized data access.",
        "impact": "Enabled safe debugging without brittle backend workarounds.",
        "image": null
      },
      {
        "title": "Unified Running Ledger for Billing",
        "options": "Traditional 30-day invoicing vs. Unified Running Ledger",
        "choice": "Unified Running Ledger where deliveries are debits and ad-hoc payments are credits.",
        "rationale": "Franchise owners struggled with generating invoices for customers who paid random amounts in advance. Redesigning the system to act as a running ledger natively solved the unpredictable payment frequency problem.",
        "tradeoff": "Requires educating users to move away from the concept of a 'monthly bill' to a continuous balance.",
        "impact": "Solved spot payment confusion and eliminated manual ledger reconciliation.",
        "image": null
      }
    ],

    "outcomes": {
      "summary": "By aligning technical architecture directly with physical, real-world user research, Milkow achieved significant operational improvements, demonstrating how physical context dictates every layer of the product.",
      "metrics": [
        { "label": "Interaction Time Per Stop", "value": "< 1 Second", "note": "Achieved through Optimistic UI and high-contrast targets" },
        { "label": "Balance Drift", "value": "Eliminated", "note": "Real-time inventory deduction instantly updates balances" },
        { "label": "Manual Ledger Reconciliation", "value": "Eliminated", "note": "Automated daily bill generation replaced manual work" }
      ]
    },

    "reflection": "Milkow serves as a prime example of how deeply understanding the physical context of the user (sunlight, network drops, ad-hoc payments) dictates every layer of the product, from the SQL schema to the CSS color palette.",

    "achievements": [
      {
        "title": "Lightning-Fast Route Execution",
        "description": "Reduced the time spent interacting with the app per stop to under one second by combining Optimistic UI with fat-finger friendly touch targets."
      },
      {
        "title": "Elimination of Balance Drift",
        "description": "Implemented real-time inventory deduction the moment a delivery is marked complete, ensuring immediate accuracy without waiting for end-of-shift batching."
      },
      {
        "title": "Frictionless Collections",
        "description": "Integrated dynamic high-resolution UPI QR code generation on an HTML5 Canvas, allowing admins to instantly share pre-filled payment requests via WhatsApp."
      },
      {
        "title": "End-Customer Empowerment",
        "description": "Designed a minimalist Public View Bill Portal allowing customers to securely view their outstanding ledgers via phone number, drastically reducing support calls."
      }
    ],

    "tags": ["UX Design", "Engineering", "PWA", "Next.js", "Supabase", "Offline-First", "Logistics"],

    "gallery": [
      "/assets/case-study/milkow/gallery-1.jpg",
      "/assets/case-study/milkow/gallery-2.jpg",
      "/assets/case-study/milkow/gallery-3.jpg"
    ]
  }
]

export default caseStudies;