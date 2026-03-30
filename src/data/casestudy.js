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
    "tools": ["Figma", "Nextjs", "Tailwind CSS", "PDF Generation"],

    "heroImage": "/assets/invoice/invoice.jpg",
    "overview": "A free, browser-native invoice generator built for global freelancers and small businesses who need speed, flexibility, and control. Users can create professional PDF invoices instantly — with any currency, custom branding, and zero sign-up. Unlike traditional invoicing platforms, all data stays on-device, eliminating friction, subscriptions, and privacy concerns.",

    "theProblem": {
      "title": "Invoicing tools are restrictive, bloated, and not built for global freelancers.",
      "description": "Freelancers and micro-businesses are forced into subscription-based invoicing platforms designed for larger teams. These tools require account creation, store sensitive financial data in the cloud, and limit flexibility in key areas like currency support and branding. Many platforms only support major currencies, creating friction for users working with local or less common currencies. There was no fast, private, and globally flexible option for users who just need to generate an invoice instantly.",
      "goals": [
        "Eliminate all friction — no sign-up, no payment, no onboarding required.",
        "Support all global currencies, not just major ones.",
        "Allow users to customize invoices with their own branding.",
        "Keep all financial data local to the user's browser for complete privacy.",
        "Deliver a live preview so users see exactly what they'll download before they download it."
      ]
    },

    "research": {
      "title": "Understanding the Freelancer Invoicing Workflow",
      "description": "The target user is someone who invoices infrequently and values their time. Existing tools were audited alongside common freelancer complaints. The core finding was that users abandoned invoicing tools not because of missing features, but because of unnecessary steps before they could create their first invoice.",
      "insights": [
        {
          "title": "Zero Patience for Onboarding",
          "text": "Users want to create an invoice in under two minutes. Any friction before that — email verification, plan selection, tutorial flows — causes immediate drop-off."
        },
        {
          "title": "Privacy is a Real Concern",
          "text": "Freelancers enter sensitive client names, project amounts, and tax IDs. Knowing that data stays in the browser is a meaningful trust signal, not a marketing claim."
        },
        {
          "title": "Currency Limitations Break Global Workflows",
          "text": "Many tools only support major currencies like USD or EUR, forcing freelancers working with local or international clients to compromise or switch tools. Currency flexibility is not an edge case — it's a core requirement for global users."
        },
        {
          "title": "WYSIWYG is Non-Negotiable",
          "text": "The [ download - check - adjust - repeat ] loop is a major pain point. Users want to see the final invoice as they fill in the form."
        }
      ]
    },

    "personas": [
      {
        "name": "Amir, Freelance Developer",
        "quote": "I invoice maybe five clients a month. I don't need accounting software, I just need a clean PDF fast.",
        "painPoints": [
          "Doesn't want to create yet another account for a tool he uses occasionally.",
          "Frustrated by watermarks and branding on free-tier invoicing tools.",
          "Wants his invoices to look professional without spending time on formatting."
        ]
      },
      {
        "name": "Priya, SEO Expert",
        "quote": "My clients expect a proper invoice with their details, my details, and a breakdown. That should take two minutes, not twenty.",
        "painPoints": [
          "Wastes time exporting and re-formatting PDFs from web-based tools.",
          "Uncomfortable storing client financial details on third-party cloud platforms."
        ]
      }
    ],

    "ideation": {
      "title": "Stripping the Flow to Its Essentials",
      "description": "The information architecture was designed around a single linear flow: company details → client details → invoice metadata → line items → download. No menus, no dashboards, no settings pages. The left-right split layout — form on the left, live preview on the right — was chosen to collapse the feedback loop entirely, eliminating the need to navigate away to verify the output.",
      "image": "/assets/case-study/invoice/invoice-cs-1.jpg"
    },

    "design": {
      "title": "Designing for Speed and Professional Output",
      "description": "The UI was kept intentionally minimal to maintain focus on the invoice preview. Brand customization (logo and colors) was prioritized early so users immediately see a personalized output. Full global currency support was introduced as a core feature, ensuring users are not restricted to major currencies. Clear currency labeling (symbol + full name) was designed to eliminate ambiguity and improve trust during invoice creation.",
      "features": [
        {
          "title": "Live Invoice Preview",
          "text": "A real-time preview renders alongside the form — every keystroke updates the invoice instantly, so the download is always exactly what the user sees."
        }, {
          "title": "Global Currency Support",
          "text": "Users can select from all international currencies with clear labels and symbols, enabling seamless invoicing for global clients without workarounds."
        },
        {
          "title": "One-Click PDF Export",
          "text": "No email, no account, no confirmation step. The download button exports a print-ready PDF immediately."
        },
      ],
      "images": [
        "/assets/case-study/invoice/invoice-gallery-1.jpg",
        "/assets/case-study/invoice/invoice-gallery-2.jpg"
      ]
    },

    "testing": {
      "title": "Validation & Iteration",
      "description": "Early users tested the flow by creating a real invoice for an actual client. The primary task was timed from page load to PDF download.",
      "feedback": "Users completed the core task quickly but were initially confused about whether the currency selector affected only the symbol or also the number formatting.",
      "iteration": "Currency selection was refined to display both symbol and full name (e.g., 'USD — US Dollar') to reduce ambiguity. This clarified whether formatting and symbol were linked. Additional microcopy was introduced to reinforce that all currencies are supported. The 'Clear Client' action was also redesigned to prevent accidental data loss."
    },

    "outcomes": {
      "title": "A Zero-Friction Tool That Earns Repeat Use",
      "description": "Invoice Generator launched as a fully free, no-account tool available on the web and as a Chrome Extension, positioned as a fast and globally flexible alternative to traditional invoicing platforms.",
      "metrics": [
        "Invoice creation flow completable in under 2 minutes from a cold start.",
        "Supports all global currencies, removing a key limitation found in competing tools.",
        "Zero server-side data storage — 100% of financial data stays in the user's browser.",
        "Chrome Extension published, reducing activation time to a single toolbar click."
      ],
      "takeaways": "The key product decision was focusing on real user constraints rather than feature parity. By removing friction (no sign-up), enabling global flexibility (currency support), and prioritizing ownership (custom branding and local data storage), the product solves practical problems that most invoicing tools overlook. Simplicity becomes a competitive advantage when it directly aligns with user needs."
    },

    "tags": ["Product Design", "Web App", "Privacy-First", "Social Good", "Developer Tool", "Chrome Extension"],

    "gallery": [
      "/assets/case-study/invoice/invoice-gallery-1.jpg",
      "/assets/case-study/invoice/invoice-gallery-2.jpg",
      "/assets/case-study/invoice/invoice-gallery-3.jpg",
      "/assets/case-study/invoice/invoice-gallery-4.jpg",
      "/assets/case-study/invoice/invoice-gallery-5.jpg",
    ]
  }, {
    "id": 2,
    "slug": "flow-case-study",
    "name": "Flow",
    "client": "Concept Project",
    "clientLink": "",
    "year": "2026",
    "role": "UX Designer",
    "duration": "4 weeks",
    "timeline": "2025",
    "platform": "Web Application",
    "team": ["1 UX Designer"],
    "tools": ["Figma", "AI Tools", "FigJam"],

    "heroImage": "/assets/case-study/flow/flow.jpg",

    "overview": "Flow is an AI-powered ad creation platform designed for small businesses, social media managers, and digital marketers who need to produce high-quality ads quickly. It combines prompt-based creative generation with performance insights, helping users move from idea to published ad without relying on designers or complex tools.",

    "theProblem": {
      "title": "Ad creation is time-consuming, fragmented, and often out of reach for small teams.",
      "description": "Small businesses and marketers often juggle multiple tools to create ads — design software, copywriting tools, and ad managers. This process is slow, requires creative expertise, and makes it difficult to iterate quickly. Many users lack the time, budget, or skills to produce consistent, high-quality ad creatives, resulting in missed opportunities and underperforming campaigns.",
      "goals": [
        "Enable users to generate ad creatives and copy without design skills.",
        "Reduce the time it takes to go from idea to live ad.",
        "Centralize campaign insights and spending across platforms.",
        "Provide inspiration and suggestions to improve ad performance.",
        "Create a simple, no-code workflow powered by AI."
      ]
    },

    "research": {
      "title": "Understanding How Ads Are Actually Created",
      "description": "I spoke with small business owners and marketers to understand how they currently create ads. I also reviewed existing tools like Canva and Meta Ads Manager. The biggest insight was that the problem isn’t a lack of tools — it’s the fragmentation between them.",
      "insights": [
        {
          "title": "Too Many Steps, Too Many Tools",
          "text": "Users switch between design tools, copywriting, and ad platforms. This breaks momentum and slows down iteration."
        },
        {
          "title": "Creative Block is Real",
          "text": "Users often don’t know what to create. They need inspiration just as much as they need tools."
        },
        {
          "title": "Iteration Matters More Than Perfection",
          "text": "Marketers care less about a perfect first ad and more about quickly testing multiple variations."
        },
        {
          "title": "Data is Underused",
          "text": "Campaign insights exist, but users don’t know how to act on them. Suggestions need to be clearer and more actionable."
        }
      ]
    },

    "personas": [
      {
        "name": "Sara, Social Media Manager",
        "quote": "I manage multiple clients — I don’t have time to design every ad from scratch.",
        "painPoints": [
          "Switches between tools to design, write, and publish ads.",
          "Struggles to generate fresh ideas for campaigns.",
          "Needs to produce content quickly for multiple clients."
        ]
      },
      {
        "name": "Omar, Small Business Owner",
        "quote": "I just want something that works. I’m not a designer or a marketer.",
        "painPoints": [
          "Lacks design skills and relies on templates.",
          "Finds ad platforms confusing and overwhelming.",
          "Needs affordable and fast solutions to promote products."
        ]
      }
    ],

    "ideation": {
      "title": "From Complex Workflow to a Simple Loop",
      "description": "The product was designed around a single core loop: prompt → generate → refine → export. Instead of separating tools, Flow brings everything into one place. The idea was to reduce friction and make ad creation feel like an iterative conversation rather than a technical process.",
      "image": "/assets/case-study/flow/flow-cs-1.jpg",
      "image": "/assets/case-study/flow/flow-cs-2.jpg"
    },

    "design": {
      "title": "Designing for Clarity, Speed, and Creativity",
      "description": "The interface uses a clean, modular layout to make complex functionality feel simple. A bento-style grid helps organize features like analytics, campaigns, and inspiration without overwhelming the user. The visual style is minimal, with strong use of white space and soft colors to keep the focus on content and output.",
      "features": [
        {
          "title": "FlowGen (AI Ad Generator)",
          "text": "Users can generate ad visuals and copy using prompts, then refine results by adjusting style, tone, or content in an iterative loop."
        },
        {
          "title": "Smart Dashboard",
          "text": "A centralized view of ad spend, performance, and platform comparisons, with suggestions like generating similar high-performing ads."
        },
        {
          "title": "Inspiration Engine",
          "text": "Curated ad examples help users overcome creative block, with one-click prompt generation based on selected ads."
        },
        {
          "title": "Campaign Management",
          "text": "A simple table view lets users track performance metrics and manage multiple campaigns without complexity."
        }
      ],
      "images": [
        "/assets/case-study/flow/flow-cs-1.jpg",
        "/assets/case-study/flow/flow-cs-2.jpg"
      ]
    },

    "testing": {
      "title": "Validation & Iteration",
      "description": "Users were asked to create an ad from scratch using Flow. The goal was to see how quickly they could go from idea to export.",
      "feedback": "Users understood the generation flow quickly but sometimes hesitated when writing prompts, unsure what would produce the best results.",
      "iteration": "Prompt suggestions and example-based generation were introduced to guide users. The inspiration feature was strengthened to reduce blank-page anxiety and help users start faster."
    },

    "outcomes": {
      "title": "From Idea to Ad in Minutes",
      "description": "Flow demonstrates how AI can simplify and accelerate ad creation by combining generation, inspiration, and analytics into one experience.",
      "metrics": [
        "Reduced ad creation time from hours to minutes.",
        "Enabled non-designers to create professional-quality ads.",
        "Improved iteration speed through prompt-based workflows.",
        "Centralized creative and performance workflows into a single platform."
      ],
      "takeaways": "The biggest insight was that users don’t just need generation — they need guidance. By combining inspiration, suggestions, and iteration into one flow, the product supports both creativity and decision-making. Simplicity and direction are more valuable than raw power."
    },

    "tags": ["AI Product", "UX Design", "Web App", "Creative Tools", "Marketing"],

    "gallery": [
      "/assets/case-study/flow/flow-gallery-1.jpg",
      "/assets/case-study/flow/flow-gallery-2.jpg",
      "/assets/case-study/flow/flow-gallery-3.jpg",
    ]
  }
]

export default caseStudies;
