/**
 * testimonials.ts — Client Testimonials
 * 
 * Replace placeholder names, titles, companies, and quotes
 * with real client testimonials before going live.
 * Avatar URLs should point to real headshots.
 */

export interface Testimonial {
  id: string;
  name: string;
  title: string;
  company: string;
  quote: string;
  avatar: string; // URL to headshot image
  rating: number; // 1-5 stars
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Sarah Chen",
    title: "VP of Engineering",
    company: "TechVault Inc.",
    quote:
      "MasterNode didn't just give us a strategy deck — they built and deployed a recommendation engine that increased our conversion rate by 34% in the first quarter. The ROI was undeniable.",
    avatar: "https://api.dicebear.com/9.x/notionists/svg?seed=Sarah&backgroundColor=06B6D4",
    rating: 5,
  },
  {
    id: "t2",
    name: "Marcus Williams",
    title: "Chief Data Officer",
    company: "FinEdge Capital",
    quote:
      "We evaluated six AI consultancies. MasterNode was the only one that understood our compliance requirements from day one. Their governance framework saved us months of regulatory headaches.",
    avatar: "https://api.dicebear.com/9.x/notionists/svg?seed=Marcus&backgroundColor=8B5CF6",
    rating: 5,
  },
  {
    id: "t3",
    name: "Dr. Anika Patel",
    title: "Director of Innovation",
    company: "MediCore Health",
    quote:
      "The NLP system MasterNode built for us processes 10,000+ patient notes daily with 96% accuracy. It freed up our clinical team to focus on what matters — patient care.",
    avatar: "https://api.dicebear.com/9.x/notionists/svg?seed=Anika&backgroundColor=10B981",
    rating: 5,
  },
  {
    id: "t4",
    name: "James Kowalski",
    title: "COO",
    company: "LogiStream Corp",
    quote:
      "Our supply chain prediction model went from concept to production in 8 weeks. MasterNode's sprint-based approach meant we saw value fast — not after months of consulting theater.",
    avatar: "https://api.dicebear.com/9.x/notionists/svg?seed=James&backgroundColor=F59E0B",
    rating: 5,
  },
  {
    id: "t5",
    name: "Elena Rodriguez",
    title: "CTO",
    company: "RetailNova",
    quote:
      "We went from 'AI-curious' to running three production ML models in under six months. MasterNode's team felt like an extension of ours — technically brilliant and genuinely invested in our success.",
    avatar: "https://api.dicebear.com/9.x/notionists/svg?seed=Elena&backgroundColor=06B6D4",
    rating: 5,
  },
];
