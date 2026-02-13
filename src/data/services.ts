/**
 * services.ts — MasterNode Service Offerings
 * 
 * Edit this file to update the services displayed on the landing page.
 * Each service has an icon (Lucide icon name), title, description,
 * and an array of capability tags.
 */

export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  capabilities: string[];
  color: string; // Tailwind color class for accent
}

export const services: Service[] = [
  {
    id: "strategy",
    icon: "Compass",
    title: "AI Strategy & Roadmapping",
    description:
      "We align AI initiatives with your business goals — identifying high-impact opportunities, assessing readiness, and delivering an actionable roadmap that gets executive buy-in.",
    capabilities: ["AI Maturity Assessment", "Opportunity Mapping", "ROI Modeling", "Executive Workshops"],
    color: "text-mn-electric",
  },
  {
    id: "ml-solutions",
    icon: "Brain",
    title: "Machine Learning Solutions",
    description:
      "From predictive analytics to recommendation engines, we build production-grade ML systems that turn your data into a competitive advantage.",
    capabilities: ["Predictive Analytics", "NLP & Text Mining", "Computer Vision", "Recommendation Systems"],
    color: "text-mn-violet",
  },
  {
    id: "gen-ai",
    icon: "Sparkles",
    title: "Generative AI Integration",
    description:
      "Harness GPT, Claude, and open-source LLMs to automate content, supercharge customer interactions, and unlock creative workflows at enterprise scale.",
    capabilities: ["LLM Fine-Tuning", "RAG Pipelines", "AI Copilots", "Content Automation"],
    color: "text-mn-emerald",
  },
  {
    id: "data-eng",
    icon: "Database",
    title: "Data Engineering & Analytics",
    description:
      "Clean data is the foundation of AI. We architect modern data pipelines, lakehouses, and real-time analytics platforms so your models never go hungry.",
    capabilities: ["Data Pipelines", "Cloud Migration", "Real-Time Analytics", "Data Governance"],
    color: "text-mn-warm",
  },
  {
    id: "governance",
    icon: "Shield",
    title: "AI Governance & Ethics",
    description:
      "Deploy AI responsibly. We build governance frameworks, bias audits, and compliance systems that protect your brand and meet regulatory requirements.",
    capabilities: ["Bias Detection", "Model Explainability", "Regulatory Compliance", "Risk Assessment"],
    color: "text-mn-warm",
  },
  {
    id: "custom-dev",
    icon: "Code",
    title: "Custom AI Development",
    description:
      "Need something unique? Our engineers build bespoke AI applications — from edge computing solutions to full-stack intelligent platforms.",
    capabilities: ["Custom Models", "API Development", "Edge AI", "MLOps & Deployment"],
    color: "text-mn-violet",
  },
];
