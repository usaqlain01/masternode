/**
 * TestimonialMarquee.tsx — Single-row scrolling testimonial ribbon
 *
 * One continuous horizontal scroll of testimonial pills.
 * Includes mostly humans + fun bot, dog, and cat entries.
 * Replace placeholders before launch.
 */

const MINI_TESTIMONIALS = [
  {
    name: "Sarah Chen",
    role: "VP Engineering, TechVault",
    quote: "34% conversion lift in Q1. The ROI was undeniable.",
    avatar: "https://api.dicebear.com/9.x/notionists/svg?seed=Sarah&backgroundColor=c4a882",
    type: "human" as const,
  },
  {
    name: "Marcus Williams",
    role: "CDO, FinEdge Capital",
    quote: "Their governance framework saved us months of regulatory headaches.",
    avatar: "https://api.dicebear.com/9.x/notionists/svg?seed=Marcus&backgroundColor=8B7355",
    type: "human" as const,
  },
  {
    name: "GPT-4 Turbo",
    role: "AI Model, OpenAI",
    quote: "Even I'm impressed by their prompt engineering. And I don't impress easily. 🤖",
    avatar: "https://api.dicebear.com/9.x/bottts/svg?seed=gpt4&backgroundColor=c4a882",
    type: "bot" as const,
  },
  {
    name: "Dr. Anika Patel",
    role: "Innovation Dir., MediCore",
    quote: "10K+ patient notes daily with 96% accuracy. Freed up our clinical team.",
    avatar: "https://api.dicebear.com/9.x/notionists/svg?seed=Anika&backgroundColor=a08060",
    type: "human" as const,
  },
  {
    name: "James Kowalski",
    role: "COO, LogiStream",
    quote: "Concept to production in 8 weeks. No consulting theater.",
    avatar: "https://api.dicebear.com/9.x/notionists/svg?seed=James&backgroundColor=d4c4a8",
    type: "human" as const,
  },
  {
    name: "Sir Barksalot",
    role: "Chief Treat Officer",
    quote: "They automated my treat dispenser schedule. 14/10 would recommend. 🐕",
    avatar: "https://api.dicebear.com/9.x/icons/svg?seed=dog&backgroundColor=c4a882",
    type: "dog" as const,
  },
  {
    name: "Elena Rodriguez",
    role: "CTO, RetailNova",
    quote: "From 'AI-curious' to three production ML models in 6 months.",
    avatar: "https://api.dicebear.com/9.x/notionists/svg?seed=Elena&backgroundColor=b89970",
    type: "human" as const,
  },
  {
    name: "Claude 3.5",
    role: "AI Assistant, Anthropic",
    quote: "Their architecture is so clean, even my context window feels spacious. ✨",
    avatar: "https://api.dicebear.com/9.x/bottts/svg?seed=claude&backgroundColor=8B7355",
    type: "bot" as const,
  },
  {
    name: "Whiskers McFluff",
    role: "Chairman of the Board (Cardboard)",
    quote: "I knocked their dashboard off the table and it still worked perfectly. 🐱",
    avatar: "https://api.dicebear.com/9.x/icons/svg?seed=cat&backgroundColor=d4c4a8",
    type: "cat" as const,
  },
  {
    name: "Tomás Herrera",
    role: "Head of Data, NovaPay",
    quote: "Best AI consultancy we've worked with. Delivery speed is unmatched.",
    avatar: "https://api.dicebear.com/9.x/notionists/svg?seed=Tomas&backgroundColor=c4a882",
    type: "human" as const,
  },
  {
    name: "Rachel Kim",
    role: "CEO, DataForge",
    quote: "They don't just consult — they build. And what they build works.",
    avatar: "https://api.dicebear.com/9.x/notionists/svg?seed=Rachel&backgroundColor=a08060",
    type: "human" as const,
  },
  {
    name: "David Park",
    role: "CFO, CloudPeak",
    quote: "$2.8M saved in year one. The numbers spoke for themselves.",
    avatar: "https://api.dicebear.com/9.x/notionists/svg?seed=David&backgroundColor=b89970",
    type: "human" as const,
  },
];

function getTypeEmoji(type: string) {
  switch (type) {
    case "bot": return "🤖";
    case "dog": return "🐕";
    case "cat": return "🐱";
    default: return null;
  }
}

export function TestimonialMarquee() {
  // Duplicate for seamless infinite loop
  const items = [...MINI_TESTIMONIALS, ...MINI_TESTIMONIALS];

  return (
    <section
      className="relative overflow-hidden border-y py-8"
      style={{ borderColor: "hsl(var(--mn-border))" }}
    >
      <p className="mb-6 text-center text-sm font-medium uppercase tracking-widest text-mn-muted">
        What people <span className="text-mn-muted/70">(and a few AIs)</span> are saying
      </p>

      {/* Single scrolling row */}
      <div className="relative">
        {/* Fade edges */}
        <div
          className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20"
          style={{ background: "linear-gradient(to right, hsl(var(--mn-bg-deep)), transparent)" }}
        />
        <div
          className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20"
          style={{ background: "linear-gradient(to left, hsl(var(--mn-bg-deep)), transparent)" }}
        />

        {/* Track */}
        <div className="flex animate-marquee items-stretch gap-4">
          {items.map((t, i) => (
            <TestimonialPill key={`t-${i}`} testimonial={t} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialPill({
  testimonial,
}: {
  testimonial: (typeof MINI_TESTIMONIALS)[number];
}) {
  const emoji = getTypeEmoji(testimonial.type);

  return (
    <div className="flex-shrink-0 w-[340px] rounded-xl glass p-4 flex gap-3 items-start transition hover:glow-accent">
      {/* Avatar */}
      <img
        src={testimonial.avatar}
        alt={testimonial.name}
        className="h-10 w-10 flex-shrink-0 rounded-full border border-mn-border"
        style={{ background: "hsl(var(--mn-bg-elevated))" }}
      />
      {/* Content */}
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-1.5">
          <span className="text-sm font-semibold text-mn-white truncate">
            {testimonial.name}
          </span>
          {emoji && <span className="text-sm">{emoji}</span>}
        </div>
        <span className="text-[11px] text-mn-muted block truncate">
          {testimonial.role}
        </span>
        <p className="mt-1.5 text-xs leading-relaxed text-mn-muted line-clamp-2">
          &ldquo;{testimonial.quote}&rdquo;
        </p>
      </div>
    </div>
  );
}
