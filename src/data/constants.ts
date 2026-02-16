/**
 * constants.ts — Site-wide configuration
 * 
 * Central place for all site-wide strings, links, and config.
 * Update company info, navigation, social links, etc. here.
 */

export const SITE = {
  name: "MasterNode",
  tagline: "AI Solutions That Actually Deliver",
  description:
    "MasterNode is a premium AI consulting firm helping businesses unlock competitive advantage through intelligent automation, machine learning, and generative AI.",
  url: "https://masternode.ai",
  email: "hello@masternode.ai",
  phone: "+1 (555) 000-0000",
};

export const NAV_LINKS = [
  { label: "Services", href: "/#services" },
  { label: "Studies", href: "/#case-studies" },
  { label: "Process", href: "/#process" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Team", href: "/#team" },
  { label: "Demo", href: "/demo" },
];

export const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "https://linkedin.com/company/masternode-ai", icon: "Linkedin" },
  { label: "Twitter / X", href: "https://x.com/masternode_ai", icon: "Twitter" },
  { label: "GitHub", href: "https://github.com/masternode-ai", icon: "Github" },
];

export const METRICS = [
  { value: 200, suffix: "+", label: "Projects Delivered" },
  { value: 2.4, suffix: "B", prefix: "$", label: "Value Created for Clients" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 15, suffix: "+", label: "Industries Served" },
];

export const CLIENT_LOGOS = [
  "TechVault",
  "FinEdge",
  "MediCore",
  "RetailNova",
  "LogiStream",
  "DataForge",
  "CloudPeak",
  "NeuralPath",
  "QuantumLeap",
  "SynapseIO",
  "CortexLabs",
  "AlphaGrid",
];

export const PROCESS_STEPS = [
  {
    step: 1,
    title: "Discovery & Assessment",
    description:
      "We deep-dive into your data, systems, and business goals. Our AI readiness assessment identifies the highest-impact opportunities and potential roadblocks.",
    duration: "1-2 weeks",
    icon: "Search",
  },
  {
    step: 2,
    title: "Strategy & Architecture",
    description:
      "We design your AI solution architecture — selecting the right models, data pipelines, and integration points. You get a clear blueprint with milestones and success metrics.",
    duration: "1-2 weeks",
    icon: "PenTool",
  },
  {
    step: 3,
    title: "Build & Integrate",
    description:
      "Our engineers build, test, and deploy your AI solution in agile sprints. You see progress weekly, with working demos at every milestone.",
    duration: "4-8 weeks",
    icon: "Cpu",
  },
  {
    step: 4,
    title: "Scale & Optimize",
    description:
      "We monitor performance, retrain models, and optimize for scale. Your team gets full training and documentation so you own your AI — not us.",
    duration: "Ongoing",
    icon: "TrendingUp",
  },
];

/** 
 * Social proof toast notifications — simulated activity.
 * Replace with real webhook data or keep as placeholders.
 */
export const SOCIAL_PROOF_MESSAGES = [
  { company: "Acme Corp", action: "just booked a consultation", time: "2 min ago" },
  { company: "A Fortune 500 company", action: "started a Professional engagement", time: "15 min ago" },
  { company: "A healthcare startup", action: "completed their AI assessment", time: "1 hour ago" },
  { company: "DataForge Inc.", action: "just signed up for the Starter tier", time: "3 hours ago" },
  { company: "A fintech leader", action: "renewed their Enterprise contract", time: "Today" },
];
