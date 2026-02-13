/**
 * pricing.ts — MasterNode Pricing Tiers
 * 
 * Update pricing, features, and tier names as needed.
 * The `popular` flag highlights the recommended tier.
 * The `discount` object controls the "First 100 Clients" offer.
 */

export interface PricingTier {
  id: string;
  name: string;
  tagline: string;
  price: string;
  originalPrice?: string; // Shown as strikethrough when discount is active
  period: string;
  popular: boolean;
  features: string[];
  cta: string;
  ctaVariant: "default" | "primary" | "outline";
}

export const discount = {
  label: "First 100 Clients",
  percentage: 25,
  spotsTotal: 100,
  /** 
   * Update this number as clients sign up.
   * The remaining spots = spotsTotal - spotsClaimed.
   */
  spotsClaimed: 73,
};

export const pricingTiers: PricingTier[] = [
  {
    id: "starter",
    name: "Starter",
    tagline: "Perfect for AI exploration and proof-of-concept",
    price: "$4,500",
    originalPrice: "$6,000",
    period: "per engagement",
    popular: false,
    features: [
      "AI Readiness Assessment",
      "Opportunity Identification Workshop",
      "Strategic Roadmap Document",
      "2-Week Discovery Sprint",
      "Executive Summary & Presentation",
      "Email Support",
    ],
    cta: "Get Started",
    ctaVariant: "outline",
  },
  {
    id: "professional",
    name: "Professional",
    tagline: "End-to-end AI solution for growth-stage companies",
    price: "$18,000",
    originalPrice: "$24,000",
    period: "per project",
    popular: true,
    features: [
      "Everything in Starter",
      "Custom ML Model Development",
      "Production Deployment & MLOps",
      "Data Pipeline Architecture",
      "8-12 Week Delivery Sprints",
      "Dedicated Project Manager",
      "Weekly Progress Reviews",
      "Priority Slack Support",
    ],
    cta: "Most Popular — Start Now",
    ctaVariant: "primary",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    tagline: "Full-scale AI transformation for large organizations",
    price: "Custom",
    period: "tailored engagement",
    popular: false,
    features: [
      "Everything in Professional",
      "Multi-Model AI Architecture",
      "Enterprise Governance Framework",
      "On-Site Team Embedding",
      "24/7 Production Support",
      "Quarterly Strategy Reviews",
      "Training & Knowledge Transfer",
      "SLA-Backed Guarantees",
    ],
    cta: "Contact Sales",
    ctaVariant: "outline",
  },
];

export const faqItems = [
  {
    question: "How does the 'First 100 Clients' offer work?",
    answer:
      "We're offering 25% off our Starter and Professional tiers for our first 100 clients. This is our way of building long-term partnerships with early adopters. Once all 100 spots are claimed, pricing returns to standard rates. No hidden fees, no catch.",
  },
  {
    question: "What if I'm not sure which tier is right for me?",
    answer:
      "Book a free 30-minute consultation. We'll assess your needs, technical readiness, and business goals — then recommend the best path forward. No pressure, no sales pitch.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Starter engagements wrap in 2 weeks. Professional projects typically run 8-12 weeks depending on complexity. Enterprise engagements are scoped individually and can range from 3-12 months.",
  },
  {
    question: "Do you offer a satisfaction guarantee?",
    answer:
      "Yes. If you're not satisfied with the output of your Discovery Sprint (Starter tier), we'll refund 100% of your investment. For Professional and Enterprise tiers, we build in milestone-based checkpoints so you're never locked into something that isn't delivering value.",
  },
  {
    question: "Can you work with our existing tech stack?",
    answer:
      "Absolutely. We're stack-agnostic and have experience with AWS, GCP, Azure, on-premise, and hybrid environments. We integrate with your existing tools — not replace them.",
  },
];
