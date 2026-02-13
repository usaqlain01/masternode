
<img width="2643" height="1619" alt="image" src="https://github.com/user-attachments/assets/09dc4e11-7d7e-4be9-a048-35807b2b6ea7" />


# MasterNode AI — Landing Page

> Conversion-optimized landing page for MasterNode AI consulting firm.
> React 18 + TypeScript + Tailwind CSS + Vite.

---

## Quick Start

```bash
pnpm install        # Install dependencies
pnpm dev            # Dev server → http://localhost:5173
pnpm build          # Production build → /dist
pnpm preview        # Preview production build
```

---

## Project Structure

```
src/
├── main.tsx                 # React entry point
├── App.tsx                  # Root component — section composition
├── styles/index.css         # Global CSS: variables, themes, utilities
├── lib/utils.ts             # cn() classname merge utility
│
├── hooks/
│   ├── useTheme.ts          # Dark/light theme toggle
│   ├── useInView.ts         # IntersectionObserver for scroll reveals
│   └── use-toast.ts         # Toast hook (shadcn)
│
├── data/                    # ★ ALL STATIC CONTENT LIVES HERE ★
│   ├── constants.ts         # Site name, nav links, metrics, logos
│   ├── pricing.ts           # Tiers, discount config, FAQ items
│   ├── coreServices.ts      # 3 flagship service offerings
│   ├── services.ts          # Full services grid data
│   ├── team.ts              # Team member profiles
│   ├── testimonials.ts      # Client testimonials
│   └── botImages.ts         # Base64-encoded chatbot avatars
│
├── components/
│   ├── ui/                  # shadcn/ui primitives (only used ones)
│   │
│   ├── layout/              # Page-level wrappers
│   │   ├── announcement-bar/   AnnouncementBar.tsx + index.ts
│   │   ├── navbar/             Navbar.tsx + index.ts
│   │   └── footer/             Footer.tsx + index.ts
│   │
│   ├── sections/            # Landing page sections (render order)
│   │   ├── hero/               Hero.tsx
│   │   ├── core-services/      CoreServices.tsx + CoreServiceCard.tsx
│   │   ├── testimonial-marquee/TestimonialMarquee.tsx
│   │   ├── services-grid/      ServicesGrid.tsx + ServiceCard.tsx
│   │   ├── metrics/            Metrics.tsx
│   │   ├── process-timeline/   ProcessTimeline.tsx
│   │   ├── testimonials/       Testimonials.tsx
│   │   ├── pricing/            Pricing.tsx + PricingCard.tsx + FaqItem.tsx
│   │   ├── team/               Team.tsx + TeamCard.tsx
│   │   ├── cta-banner/         CtaBanner.tsx
│   │   └── trust-bar/          TrustBar.tsx
│   │
│   └── shared/              # Reusable components
│       ├── section-wrapper/    SectionWrapper.tsx + SectionHeader.tsx
│       ├── animated-counter/   AnimatedCounter.tsx
│       ├── social-proof-toast/ SocialProofToast.tsx
│       └── chatbot-widget/     ChatBotWidget.tsx
```

Every component directory has an `index.ts` barrel for clean imports:
```tsx
import { Pricing } from "@/components/sections/pricing";
```

---

## Customization Guide

| What to change          | Edit this file              |
|-------------------------|-----------------------------|
| Company name / tagline  | `src/data/constants.ts`     |
| Pricing tiers           | `src/data/pricing.ts`       |
| Discount / spots        | `src/data/pricing.ts`       |
| Core services           | `src/data/coreServices.ts`  |
| Services grid           | `src/data/services.ts`      |
| Team members            | `src/data/team.ts`          |
| Testimonials            | `src/data/testimonials.ts`  |
| Nav links               | `src/data/constants.ts`     |
| Colors / theme          | `src/styles/index.css`      |

### Replace placeholder assets
- **Team photos**: Update avatar URLs in `src/data/team.ts`
- **Client logos**: Replace text in `TrustBar.tsx` with `<img>` tags
- **Bot avatars**: Replace in `public/images/` + update `src/data/botImages.ts`

---

## Design System

### Dual-theme (toggle via sun/moon in navbar)
- **Dark** (default): Brown & Creme → `.dark` class
- **Light**: White & Green → `:root`

### Color tokens (Tailwind)
`text-mn-electric`, `bg-mn-navy`, `text-mn-warm`, `bg-mn-slate`, etc.
All powered by CSS custom properties in `src/styles/index.css`.

### Warm accent
Fourth accent color applied to ~15% of elements:
- Light: honeyed amber `hsl(38 85% 52%)`
- Dark: muted warm rose `hsl(355 50% 58%)`

---

## Deployment

### Vercel / Netlify
Push to Git — auto-detected as Vite.
Build command: `pnpm build` | Output: `dist`

### Any static host
```bash
pnpm build && upload dist/ folder
```

---

## Tech Stack
React 18 · TypeScript 5 · Vite 7 · Tailwind CSS 3 · Lucide Icons · shadcn/ui
