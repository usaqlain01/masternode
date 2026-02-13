# CLAUDE.md — MasterNode AI Landing Page

> This file gives Claude (and any AI assistant) full project context.
> Read this FIRST before making any changes.

---

## Project Overview

**MasterNode** is a premium AI consulting firm's marketing landing page.
It's a single-page React app with 11 conversion-optimized sections,
dual-theme support (dark/light), and psychological FOMO/trust triggers.

**Live goal**: Get visitors to book a free consultation or claim a
"First 100 Clients" founding discount (25% off all tiers).

---

## Tech Stack

| Tool            | Version | Purpose                        |
|-----------------|---------|--------------------------------|
| React           | 18      | UI framework                   |
| TypeScript      | 5       | Type safety                    |
| Vite            | 7       | Build tool + dev server        |
| Tailwind CSS    | 3       | Utility-first styling          |
| Lucide React    | latest  | Icon library                   |
| shadcn/ui       | latest  | UI primitives (minimal usage)  |
| DiceBear        | 9.x     | Avatar placeholder generation  |

**No Next.js. No SSR. Pure client-side SPA.**

---

## Commands

```bash
npm install       # Install dependencies
npm run dev       # Dev server → http://localhost:5173
npm run build     # Production build → /dist
npm run preview   # Preview production build locally
```

---

## Project Structure

```
src/
├── main.tsx                          # Entry point (mounts App, imports CSS)
├── App.tsx                           # Root — composes all sections in order
├── styles/index.css                  # Global CSS: theme variables, utilities
├── lib/utils.ts                      # cn() classname merge helper
│
├── hooks/
│   ├── useTheme.ts                   # Dark/light toggle (persists to class)
│   └── useInView.ts                  # IntersectionObserver for scroll reveal
│
├── data/                             # ★ ALL STATIC CONTENT — edit here ★
│   ├── constants.ts                  # SITE name/URL, NAV_LINKS, METRICS, CLIENT_LOGOS
│   ├── pricing.ts                    # Tiers, discount config, FAQ items
│   ├── coreServices.ts               # 3 flagship offerings (was caseStudies)
│   ├── services.ts                   # 6-card services grid data
│   ├── team.ts                       # Team member profiles
│   ├── testimonials.ts               # Deep testimonial quotes
│   └── botImages.ts                  # Base64-encoded chatbot avatars
│
├── components/
│   ├── ui/                           # shadcn/ui (only accordion, button, card)
│   │
│   ├── layout/                       # Page shell
│   │   ├── announcement-bar/         # Top banner: "First 100 Clients" scarcity
│   │   ├── navbar/                   # Sticky nav + theme toggle
│   │   └── footer/                   # Links, social icons, newsletter
│   │
│   ├── sections/                     # Page sections (render order in App.tsx)
│   │   ├── hero/                     # Hero.tsx — headline, CTAs, 3 stat cards
│   │   ├── core-services/            # CoreServices.tsx + CoreServiceCard.tsx
│   │   ├── testimonial-marquee/      # Scrolling social proof ribbon
│   │   ├── services-grid/            # ServicesGrid.tsx + ServiceCard.tsx
│   │   ├── metrics/                  # Animated counter section
│   │   ├── process-timeline/         # 4-step alternating timeline
│   │   ├── testimonials/             # Deep quote carousel with navigation
│   │   ├── pricing/                  # Pricing.tsx + PricingCard.tsx + FaqItem.tsx
│   │   ├── team/                     # Team.tsx + TeamCard.tsx
│   │   ├── cta-banner/               # Final CTA push before footer
│   │   └── trust-bar/                # Client logo marquee
│   │
│   └── shared/                       # Reusable across sections
│       ├── section-wrapper/          # SectionWrapper.tsx + SectionHeader.tsx
│       ├── animated-counter/         # Count-up animation on scroll
│       ├── social-proof-toast/       # FOMO notification popups (bottom-left)
│       └── chatbot-widget/           # Hover-to-open bot teaser (bottom-right)
```

### Convention: Every component gets its own directory

```
components/sections/pricing/
├── Pricing.tsx          # Section wrapper (imports sub-components)
├── PricingCard.tsx      # Individual tier card
├── FaqItem.tsx          # Expandable FAQ accordion item
└── index.ts             # Barrel: export { Pricing } from "./Pricing"
```

Import from the directory, never the file:
```tsx
import { Pricing } from "@/components/sections/pricing";  // ✅
import { Pricing } from "@/components/sections/pricing/Pricing";  // ❌
```

---

## Section Render Order (App.tsx)

```
1.  Hero                — First impression, stat cards, dual CTA
2.  CoreServices        — 3 flagship offerings (cards)
3.  TestimonialMarquee  — Horizontal scrolling social proof ribbon
4.  ServicesGrid        — 6 service cards in responsive grid
5.  Metrics             — Animated impact numbers (counter up)
6.  ProcessTimeline     — 4-step alternating timeline
7.  Testimonials        — Deep quote carousel with dots/arrows
8.  Pricing             — 3 tiers + scarcity banner + FAQ
9.  Team                — Leadership profiles grid
10. CtaBanner           — Final conversion push
11. TrustBar            — Partner/client logo marquee
```

Plus floating widgets (always visible):
- **SocialProofToast** — Bottom-left FOMO notifications
- **ChatBotWidget** — Bottom-right hover-to-open "Under Construction" bot

---

## Design System

### Dual Theme (toggle via sun/moon in navbar)

| Token             | Dark Mode (default)      | Light Mode              |
|-------------------|--------------------------|-------------------------|
| `--mn-bg-deep`    | Rich dark brown           | Clean white             |
| `--mn-bg-card`    | Dark navy-brown           | Light gray              |
| `--mn-accent-1`   | Electric gold/green       | Forest green            |
| `--mn-accent-2`   | Violet/purple             | Teal                    |
| `--mn-accent-warm`| Muted warm rose           | Honeyed amber           |
| `--mn-text-primary`| Off-white creme          | Near-black              |
| `--mn-text-muted` | Muted tan                 | Medium gray             |

### Tailwind Tokens (use these, not raw colors)

```
text-mn-electric    bg-mn-navy       border-mn-slate
text-mn-violet      bg-mn-midnight   border-mn-electric/30
text-mn-warm        bg-mn-slate      text-mn-muted
text-mn-emerald     bg-mn-surface    text-mn-white
text-mn-amber       bg-mn-warm
```

### Warm Accent Rules
- Applied to ~15% of interactive elements (icons, borders, shadows)
- Never used for backgrounds or large text blocks
- Alternates with electric on cards (e.g., services cards 3 & 4)
- Timeline nodes: odd = electric, even = warm

### Utility Classes (defined in index.css)
- `.text-gradient` — electric-to-violet gradient text
- `.glass` / `.glass-strong` — glassmorphism panels
- `.glow-accent` — electric glow box-shadow
- `.bg-mesh-1` / `.bg-mesh-2` — radial gradient mesh backgrounds
- `.bg-dot-pattern` — subtle dot grid overlay
- `.divider-gradient` — section divider line
- `.animate-marquee` — infinite horizontal scroll

---

## Key Business Logic

### "First 100 Clients" Discount

Configured in `src/data/pricing.ts`:
```ts
export const discount = {
  label: "First 100 Clients",
  percentage: 25,
  spotsTotal: 100,
  spotsClaimed: 73,  // ← UPDATE THIS as clients join
};
```

This number drives:
- Announcement bar ("Only 27 spots remaining")
- Hero eyebrow badge
- Pricing section scarcity banner + progress bar
- CTA banner ("27 spots left")

### Pricing Tiers
- **Starter**: $4,500/mo (was $6,000)
- **Professional**: $18,000/mo (was $24,000) — `popular: true`
- **Enterprise**: Custom pricing

---

## Content Editing Guide

**All copy lives in `src/data/` — never edit component files for text changes.**

| Change this...               | Edit this file          | Look for...              |
|------------------------------|-------------------------|--------------------------|
| Company name, tagline, email | `constants.ts`          | `SITE` object            |
| Navigation links             | `constants.ts`          | `NAV_LINKS` array        |
| Client logos in trust bar    | `constants.ts`          | `CLIENT_LOGOS` array     |
| Impact metrics               | `constants.ts`          | `METRICS` array          |
| FOMO toast messages          | `constants.ts`          | `SOCIAL_PROOF_MESSAGES`  |
| Process timeline steps       | `constants.ts`          | `PROCESS_STEPS`          |
| Pricing tiers & features     | `pricing.ts`            | `pricingTiers` array     |
| Discount spots claimed       | `pricing.ts`            | `discount.spotsClaimed`  |
| FAQ items                    | `pricing.ts`            | `faqItems` array         |
| Core service offerings       | `coreServices.ts`       | `coreServices` array     |
| Services grid cards          | `services.ts`           | `services` array         |
| Team members                 | `team.ts`               | `team` array             |
| Testimonial quotes           | `testimonials.ts`       | `testimonials` array     |
| Marquee mini-testimonials    | `TestimonialMarquee.tsx`| `MINI_TESTIMONIALS`      |

---

## Before-Launch Checklist

- [ ] Replace DiceBear avatar URLs with real team/client photos
- [ ] Replace text logos in TrustBar with actual client `<img>` tags
- [ ] Update `SITE.url`, `SITE.email`, `SITE.phone` in constants.ts
- [ ] Update social media URLs in constants.ts
- [ ] Replace placeholder testimonials with real client quotes
- [ ] Set `discount.spotsClaimed` to actual number
- [ ] Connect CTA buttons to real booking/contact system
- [ ] Add analytics (GA4, Plausible, etc.)
- [ ] Add meta tags / OG images for social sharing
- [ ] Test both dark and light themes thoroughly

---

## Common Tasks

### Add a new section
1. Create `src/components/sections/my-section/MySection.tsx`
2. Create `src/components/sections/my-section/index.ts` with barrel export
3. Import in `App.tsx` and place in the `<main>` render order

### Change theme colors
Edit CSS custom properties in `src/styles/index.css` under `:root` (light) and `.dark` (dark).

### Hide a section temporarily
Comment it out in `App.tsx` — it's just JSX.

### Update the chatbot
The chatbot is in `src/components/shared/chatbot-widget/ChatBotWidget.tsx`.
Currently shows "Under Construction" — replace the panel content when the real bot is ready.

---

## Owner

**Sam** — Senior Drupal developer learning React/TypeScript.
Prefers complete working code with file paths. Skip basic explanations.
