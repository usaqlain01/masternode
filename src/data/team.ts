/**
 * team.ts — MasterNode Leadership Team
 * 
 * Replace names, titles, bios, and avatar URLs with real team info.
 */

export interface TeamMember {
  id: string;
  name: string;
  title: string;
  bio: string;
  avatar: string;
  credentials: string[];
  linkedin?: string;
  twitter?: string;
}

export const team: TeamMember[] = [
  {
    id: "tm1",
    name: "Alexandra Mercer",
    title: "CEO & Co-Founder",
    bio: "Former ML Lead at Google DeepMind. 15+ years shipping AI systems at scale across finance, healthcare, and retail.",
    avatar: "https://api.dicebear.com/9.x/notionists/svg?seed=Alexandra&backgroundColor=0A0E1A",
    credentials: ["Ex-Google DeepMind", "Stanford MS CS", "Forbes 30 Under 30"],
    linkedin: "#",
    twitter: "#",
  },
  {
    id: "tm2",
    name: "David Nakamura",
    title: "CTO & Co-Founder",
    bio: "Built data platforms processing 50B+ events/day at Uber. Architect of MasterNode's proprietary deployment framework.",
    avatar: "https://api.dicebear.com/9.x/notionists/svg?seed=David&backgroundColor=0A0E1A",
    credentials: ["Ex-Uber Engineering", "MIT PhD", "3 Patents"],
    linkedin: "#",
    twitter: "#",
  },
  {
    id: "tm3",
    name: "Priya Sharma",
    title: "VP of AI Research",
    bio: "Published 40+ papers in top-tier ML conferences. Leads our R&D team pushing boundaries in responsible AI and LLM efficiency.",
    avatar: "https://api.dicebear.com/9.x/notionists/svg?seed=Priya&backgroundColor=0A0E1A",
    credentials: ["Ex-Meta FAIR", "Oxford DPhil", "NeurIPS Best Paper"],
    linkedin: "#",
  },
  {
    id: "tm4",
    name: "Michael Torres",
    title: "VP of Client Solutions",
    bio: "10+ years at McKinsey & BCG advising Fortune 500 companies on digital transformation. Bridges the gap between AI potential and business reality.",
    avatar: "https://api.dicebear.com/9.x/notionists/svg?seed=Michael&backgroundColor=0A0E1A",
    credentials: ["Ex-McKinsey", "Wharton MBA", "200+ Projects"],
    linkedin: "#",
  },
];
