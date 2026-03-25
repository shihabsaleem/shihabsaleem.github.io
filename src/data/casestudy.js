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
    "overview": "A free, browser-native invoice generator that lets freelancers and small businesses create professional PDF invoices instantly — no account, no subscription, and no data ever leaving the user's device. The tool replaces overweight invoicing platforms with a focused, zero-friction experience built around a live preview and one-click PDF export.",

    "theProblem": {
      "title": "Invoicing platforms are overkill for freelancers who just need a PDF.",
      "description": "Freelancers and micro-businesses are forced into subscription-based invoicing platforms designed for larger teams. These tools require account creation, expose sensitive financial data to cloud storage, and bury simple invoice creation behind complex onboarding flows. There was no fast, private, free option for users who only need to generate an occasional invoice.",
      "goals": [
        "Eliminate all friction — no sign-up, no payment, no onboarding required.",
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
          "title": "WYSIWYG is Non-Negotiable",
          "text": "The 'download, check, adjust, repeat' loop is a major pain point. Users want to see the final invoice as they fill in the form."
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
        "name": "Priya, Independent Consultant",
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
      "image": "/assets/invoice/invoice-1.jpg"
    },

    "design": {
      "title": "Designing for Speed and Professional Output",
      "description": "The UI was kept intentionally minimal to keep focus on the invoice preview. Brand colour selection and logo upload were prioritised as early inputs so the live preview feels personalised from the first interaction. Global currency support and per-item tax fields were included to handle the edge cases that usually force freelancers back to spreadsheets.",
      "features": [
        {
          "title": "Live Invoice Preview",
          "text": "A real-time preview renders alongside the form — every keystroke updates the invoice instantly, so the download is always exactly what the user sees."
        },
        {
          "title": "One-Click PDF Export",
          "text": "No email, no account, no confirmation step. The download button exports a print-ready PDF immediately."
        }
      ],
      "images": [
        "/assets/invoice/invoice-2.jpg",
        "/assets/invoice/invoice-3.jpg"
      ]
    },

    "testing": {
      "title": "Validation & Iteration",
      "description": "Early users tested the flow by creating a real invoice for an actual client. The primary task was timed from page load to PDF download.",
      "feedback": "Users completed the core task quickly but were initially confused about whether the currency selector affected only the symbol or also the number formatting.",
      "iteration": "Currency labels were updated to show both the symbol and the full currency name (e.g., 'USD — US Dollar') to remove ambiguity. The 'Clear Client' button was made more prominent after users accidentally cleared their own company details instead."
    },

    "outcomes": {
      "title": "A Zero-Friction Tool That Earns Repeat Use",
      "description": "Invoice Generator launched as a fully free, no-account tool available on the web and as a Chrome Extension.",
      "metrics": [
        "Invoice creation flow completable in under 2 minutes from a cold start.",
        "Zero server-side data storage — 100% of financial data stays in the user's browser.",
        "Chrome Extension published, reducing activation time to a single toolbar click."
      ],
      "takeaways": "The strongest product decision was choosing to do less. By refusing to add account management, cloud sync, or a feature roadmap driven by enterprise needs, Invoice Generator remains genuinely faster and more private than any paid alternative for its target user. Simplicity, when it's intentional, is a competitive advantage."
    },

    "tags": ["Product Design", "Web App", "Privacy-First", "Developer Tool", "Chrome Extension"],

    "gallery": [
      "/assets/invoice/invoice-0.jpg",
      "/assets/invoice/invoice-1.jpg",
      "/assets/invoice/invoice-2.jpg",
      "/assets/invoice/invoice-3.jpg"
    ]
  }
]

export default caseStudies;
