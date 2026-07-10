import works from './projects.js';

const info = [
  {
    name: "Shihab Saleem",
    title: "UI/UX Designer & Developer",
    logo: "/assets/shihab.svg",
    pdesc:
      "Design intuitive digital experiences by blending problem-solving and storytelling, always grounded in a deep understanding of users, their goals, and real-world needs.",
    desc: "I approach design as a blend of problem-solving and storytelling. Each project begins with understanding people, their goals, and the obstacles in their way. From there, I craft interfaces that are simple, thoughtful, and grounded in real user needs, ensuring that every decision serves a clear purpose.",
    seoDesc:
      "UI/UX Designer & Product Designer based in Kerala, India. Specializing in SaaS dashboard design, mobile app UI, branding, and user-centered digital experiences. Building with Figma, React, and Next.js.",
    seoAboutDesc:
      "Meet Shihab Saleem — UI/UX Designer and Product Designer from Kerala, India with 3+ years of experience. Expert in SaaS design, mobile app UI, design systems, and frontend development using Figma, React, and Next.js.",
    seoContactDesc:
      "Hire Shihab Saleem — UI/UX Designer & Product Designer based in Kerala, India. Open to freelance projects, SaaS product design, mobile app UI, and global remote collaborations. Let's build something great.",
    dpDark: "/assets/shihab.png",
    dpLight: "/assets/shihab-Light.png",
    ogImage: "/assets/og.jpg",
    siteUrl: "https://www.shihabsaleem.site",
    phone: "+917907689743",
    email: "hello@shihabsaleem.site",
    linkedin: "linkedin.com/in/shihab-saleem",
    github: "github.com/shihabsaleem",
    behance: "behance.net/shihabrsaleem",
    insta: "instagram.com/shihabrsaleem",
    twitter: "@shihabrsaleem",
    cv: "/assets/shihabrahman_ux.pdf",
    location: "Kerala, India",
  },
];

const education = [
  {
    id: 1,
    qualification: "B. Tech in Computer Science and Engineering",
    College: "College of Engineering, Munnar",
    Aff: "APJA Kalam Technological University, Kerala",
    start: "2020",
    end: "2023",
  },
  {
    id: 2,
    qualification: "Diploma in Computer Engineering",
    College: "St.Marys Polytechnic College, Palakkad",
    Aff: "Board of Technical Education, Kerala",
    start: "2015",
    end: "2018",
  },
];

const experience = [
  {
    Company: "Jadbery Digital",
    CLink: "https://www.jadbery.com/",
    Designation: "Product Designer / Dev",
    start: "Apr 2024",
    end: "Present",
  },
  {
    Company: "Saasyway",
    CLink: "https://saasyway.com/",
    Designation: "Frontend Developer",
    start: "Jan 2025",
    end: "Jun 2025",
  },
  {
    Company: "PDS - EY GDS",
    CLink: "https://www.pdspeermade.com/",
    Designation: "Angular Developer Intern",
    start: "Mar 2024",
    end: "Aug 2024",
  },
  {
    Company: "GJ Infotech p Ltd",
    CLink: "https://www.gjinfotech.net/",
    Designation: "Web Designer",
    start: "May 2018",
    end: "Jun 2019",
  },
];

// Categorized skills for better organization
const skillCategories = {
  "Design & UX": [
    "UI/UX Design",
    "User Research",
    "Design Thinking",
    "Wireframing & Prototyping",
    "Usability Testing",
    "A/B Testing",
    "Interaction Design (IxD)",
    "Information Architecture",
    "Responsive & Adaptive Design",
    "Heuristic Evaluation",
    "High-Fidelity Prototyping",
    "User Journey Mapping",
    "Persona Development",

    "Design Sprint",
  ],
  "Visual Design": [
    "Visual Design",
    "Typography",
    "Color Theory",
    "Branding",
    "Iconography",
    "Design Systems",
    "Design Tokens",
    "Design Handoff",
  ],
  "Design Tools": [
    "Figma",
    "Adobe Photoshop",
    "Adobe Illustrator",
    "Adobe XD",
    "ProtoPie",
    "Miro / FigJam",
  ],
  "Development": [
    "HTML & CSS",
    "JavaScript",
    "ReactJS",
    "Angular",
    "Next.js",
    "Bootstrap",
    "TailwindCSS",
    "WordPress",
    "Shopify",
    "Git & GitHub",
  ],
  "A11y & Standards": [
    "WCAG",
    "Inclusive Design",
    "Cross-Browser & Cross-Device Consistency",
  ],
  "Soft Skills": [
    "Problem Solving",
    "Collaboration",
    "Communication",
    "Attention to Detail",
    "Stakeholder Management",
    "Agile / Scrum",
  ],
};

// Legacy flat skills array (for backward compatibility)
const skills = [
  "UI/UX Design",
  "User Research",
  "Design Thinking",
  "Wireframing & Prototyping",
  "Usability Testing",
  "A/B Testing",
  "Interaction Design (IxD)",
  "Information Architecture",
  "Responsive & Adaptive Design",
  "Heuristic Evaluation",
  "High-Fidelity Prototyping",
  "User Journey Mapping",
  "Persona Development",
  "Design Sprint",
  "Visual Design",
  "Typography",
  "Color Theory",
  "Branding",
  "Iconography",
  "Design Systems",
  "Design Tokens",
  "Design Handoff",
  "Figma",
  "Adobe Photoshop",
  "Adobe Illustrator",
  "Adobe XD",
  "ProtoPie",
  "Miro / FigJam",
  "HTML & CSS",
  "JavaScript",
  "ReactJS",
  "Angular",
  "Next.js",
  "Bootstrap",
  "TailwindCSS",
  "WordPress",
  "Shopify",
  "Git & GitHub",
  "WCAG",
  "Inclusive Design",
  "Cross-Browser & Cross-Device Consistency",
  "Problem Solving",
  "Collaboration",
  "Communication",
  "Attention to Detail",
  "Stakeholder Management",
  "Agile / Scrum",
];

const assetData = {
  works,
  info,
  education,
  experience,
  skills,
  skillCategories,
};

export default assetData;
