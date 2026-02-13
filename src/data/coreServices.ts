/**
 * caseStudies.ts — MasterNode Core Services
 *
 * These are the 3 flagship service offerings displayed
 * in the "Core Services" section. Same card structure,
 * repurposed for services instead of case studies.
 *
 * Fields:
 *   industry     → Service category badge
 *   title        → Service headline
 *   challenge    → Service description (body copy)
 *   results      → Key capability highlights
 *   techStack    → Technologies / tools involved
 */

export interface CoreService {
  id: string;
  industry: string;
  industryColor: string;
  client: string;
  title: string;
  challenge: string;
  solution: string;
  results: { label: string; value: string }[];
  techStack: string[];
}

export const coreServices: CoreService[] = [
  {
    id: "svc-apps",
    industry: "AI-Powered Development",
    industryColor: "bg-mn-electric/20 text-mn-electric",
    client: "MasterNode",
    title: "Lightning-Fast AI Applications Built to Scale",
    challenge:
      "Modern problems demand modern interfaces. We architect blazing-fast, infinitely scalable applications using React, Tailwind, and cutting-edge AI tooling — from polished corporate landing pages to complex enterprise dashboards. Our bot armies and AI-augmented workflows let us deliver pixel-perfect, production-grade software at a fraction of the traditional cost and timeline.",
    solution: "",
    results: [
      { label: "Delivery Speed", value: "3× Faster" },
      { label: "Cost Savings", value: "Up to 60%" },
      { label: "Lighthouse Score", value: "95+" },
      { label: "Scalability", value: "∞" },
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Vercel", "AI Copilots"],
  },
  {
    id: "svc-agents",
    industry: "Automation & Agentic AI",
    industryColor: "bg-mn-emerald/20 text-mn-emerald",
    client: "MasterNode",
    title: "AI Agents That Work 24/7 So You Don't Have To",
    challenge:
      "Your competitors aren't sleeping — and neither are their AI agents. From customer acquisition to data processing, sales pipelines to accounting, order fulfillment to support — there's a cutting-edge automation solution you're missing while your competition saves money and moves at twice your speed. Our agentic AI solutions never call in sick, never get tired, and never stop optimizing.",
    solution: "",
    results: [
      { label: "Tasks Automated", value: "500+/day" },
      { label: "Time Reclaimed", value: "40 hrs/wk" },
      { label: "Error Rate", value: "< 0.1%" },
      { label: "ROI Timeline", value: "30 days" },
    ],
    techStack: ["LangChain", "CrewAI", "n8n", "Python", "OpenAI API", "Zapier"],
  },
  {
    id: "svc-aim-pa",
    industry: "AI Master Personal Assistant",
    industryColor: "bg-mn-violet/20 text-mn-violet",
    client: "MasterNode",
    title: "AIM PA — Your Personal Jarvis, Powered by Humans + AI",
    challenge:
      "Think Iron Man's Jarvis meets a Swiss Army Knife. MasterNode's elite AIM PA program pairs our most gifted AI specialists — armed with their own agentic crews and bleeding-edge tooling — directly with Fortune 500 executives. From rapid idea prototyping to investor decks, ML pipelines to personal knowledge bases, curated time management to strategic deliverables — we convert your creative energy into action items, software artifacts, and shipped solutions. Bonus: sustainability points for the ethical fusion of human brilliance and AI horsepower.",
    solution: "",
    results: [
      { label: "Exec. Productivity", value: "+300%" },
      { label: "Idea → Prototype", value: "48 hrs" },
      { label: "Human + AI Crew", value: "Dedicated" },
      { label: "Ethical AI Score", value: "A+" },
    ],
    techStack: ["Claude", "GPT-4", "Cursor", "Notion AI", "Custom Agents", "MCP Servers"],
  },
];
