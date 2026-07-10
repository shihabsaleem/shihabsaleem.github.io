// UAE-specific overrides — only fields that DIFFER from asset.js
// Everything else (name, email, socials, desc, images, etc.) inherits automatically.
//
// Fields used across the site and their UAE values:
//
//  phone    → used for tel: links (contact page) AND WhatsApp wa.me links (hero, home)
//  location → shown on hero, home, contact, about pages
//  cv       → download link on navbar, contact page, home page
//  seoAboutDesc  → meta description on /about
//  seoContactDesc → meta description on /contact
//
// Fields NOT overridden (same for UAE visitors):
//  email, linkedin, github, behance, insta, twitter — same accounts worldwide
//  name, title, desc, pdesc, logo, dp*, ogImage, siteUrl — same worldwide

const aeOverrides = {
  phone: "+971545217895",      
  location: "Abu Dhabi, UAE",
  cv: "/assets/shihabrahman_ux_designer.pdf",
  seoAboutDesc:
    "Meet Shihab Saleem — UI/UX Designer and Product Designer based in Abu Dhabi, UAE with 3+ years of experience. Expert in SaaS design, mobile app UI, design systems, and frontend development using Figma, React, and Next.js.",
  seoContactDesc:
    "Hire Shihab Saleem — UI/UX Designer & Product Designer based in Abu Dhabi, UAE. Available for freelance projects, SaaS product design, mobile app UI, and collaborations across UAE, GCC, and globally.",
};

export default aeOverrides;
