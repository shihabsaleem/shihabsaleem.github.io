const caseStudies = [
  {
    id: 1,
    slug: "inventory-dashboard-ux",
    name: "Inventory Dashboard",
    client: "Snack Manufacturing",
    clientLink: "https://www.jadbery.com/",
    year: "2024",
    role: "Lead UI/UX Designer",
    duration: "6 Weeks",
    timeline: "Jan 2024 - Feb 2024",
    platform: "Web Application (Desktop & Tablet)",
    team: ["1 Product Manager", "1 Lead Designer", "2 Frontend Developers"],
    tools: ["Figma", "Miro", "Notion", "React"],
    
    heroImage: "/assets/inventory/inventory.jpg",
    overview: "A comprehensive B2B dashboard redesign that centralizes inventory tracking, production workflows, and distribution metrics. The new system replaces fragmented spreadsheets with a visual, intuitive interface—reducing cognitive load for factory floor managers and significantly cutting data entry errors.",
    
    // THE PROBLEM
    theProblem: {
      title: "Fragmented systems leading to costly fulfillment delays.",
      description: "Jadbery's factory floor managers were relying on three different legacy systems and physical spreadsheets to track raw materials and final product stock. This disconnect caused a 25% error rate in daily inventory logs, leading to over-purchasing of raw materials and delayed fulfillment times.",
      goals: [
        "Unify inventory and production tracking into a single source of truth.",
        "Reduce onboarding time for new factory floor managers.",
        "Provide real-time low-stock alerts to the purchasing department."
      ]
    },

    // RESEARCH & DISCOVERY
    research: {
      title: "Understanding the Factory Floor Reality",
      description: "We started by shadowing shift managers during their daily routines. We discovered that speed and visibility were paramount. Managers couldn't afford to click through 4 layers of menus just to log a batch completion.",
      insights: [
        {
          title: "Speed over Aesthetics",
          text: "Users needed high-contrast, immediately readable data. Subtle gray text was useless under factory lighting."
        },
        {
          title: "The Tablet is King",
          text: "90% of data entry happened on iPads carried around the warehouse, making touch-friendly targets crucial."
        },
        {
          title: "Status Paralysis",
          text: "Users couldn't quickly tell if a batch was delayed due to missing ingredients or machine failure without calling someone."
        }
      ]
    },

    // PERSONAS
    personas: [
      {
        name: "David, Warehouse Supervisor",
        quote: "I just need to know what's running out today so the lines don't stop tomorrow.",
        painPoints: [
          "Hates manual data entry.",
          "Frustrated by system timeouts.",
          "Needs a high-level overview of critical shortages."
        ]
      },
      {
        name: "Sarah, Logistics Coordinator",
        quote: "If the warehouse numbers are wrong, my delivery schedules are ruined.",
        painPoints: [
          "Wastes 2 hours a day cross-referencing spreadsheets.",
          "Misses urgent dispatch windows due to delayed updates."
        ]
      }
    ],

    // IDEATION & WIREFRAMING
    ideation: {
      title: "Mapping the New Workflow",
      description: "We completely restructured the Information Architecture (IA). Instead of organizing by 'Department', we organized by 'Action State' (E.g., Needs Attention, In Production, Ready to Ship). We then moved into low-fidelity wireframing to test these concepts quickly with David and his team.",
      image: "/assets/inventory/inventory-1.jpg" // You can replace with a sketch/wireframe image later
    },

    // HIGH FIDELITY DESIGN
    design: {
      title: "Designing for Clarity and Speed",
      description: "Moving into High-Fidelity, the focus shifted to a robust design system. We implemented a strict color-coding standard: Red for urgent low-stock blocks, Yellow for impending delays, and standard Black/White for nominal data. We ensured all primary actions were reachable with a single thumb tap on an iPad.",
      features: [
        {
          title: "The 'Glance' Dashboard",
          text: "A modular home screen that immediately surfaces the top 5 urgent actions needed across the factory."
        },
        {
          title: "One-Tap Logging",
          text: "A quick-action drawer that pulls up from the bottom of the screen, allowing users to log stock changes without leaving the current view."
        }
      ],
      images: [
        "/assets/inventory/inventory-2.jpg",
        "/assets/inventory/inventory-3.jpg",
      ]
    },

    // TESTING & ITERATION
    testing: {
      title: "Usability Testing & Iteration",
      description: "We conducted moderated usability tests with 5 warehouse managers. They were asked to log a new shipment of raw materials and check the status of 'Batch 4A'.",
      feedback: "While logging materials was 60% faster, users struggled to read the 'Batch Status' table. The rows were too dense for quick scanning on a tablet.",
      iteration: "We increased the row height by 24px, added alternating zebra-striping for contrast, and replaced text-based statuses with distinct recognizable icons."
    },

    // OUTCOMES
    outcomes: {
      title: "Measurable Business Impact",
      description: "The new dashboard system was rolled out across the main production facility over two weeks.",
      metrics: [
        "40% reduction in daily inventory processing time.",
        "Inventory discrepancy errors dropped from 25% down to 3%.",
        "New employee onboarding for the system reduced from 3 days to exactly 4 hours."
      ],
      takeaways: "This project reinforced that enterprise software shouldn't look boring—it should look clear. By designing for the specific physical environment (a brightly lit factory floor with tablets), we solved the actual user problems rather than just making a prettier spreadsheet."
    },

    tags: ["UX Research", "UI Design", "Enterprise Dashboard", "Figma", "Usability Testing"],
    
    // Bottom Gallery
    gallery: [
      "/assets/inventory/inventory-0.jpg",
      "/assets/inventory/inventory-1.jpg",
      "/assets/inventory/inventory-2.jpg",
      "/assets/inventory/inventory-3.jpg",
    ]
  }
];

export default caseStudies;
