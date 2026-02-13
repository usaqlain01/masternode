/**
 * App.tsx — MasterNode Landing Page
 *
 * Root component that composes all sections in conversion-optimized order.
 *
 * SECTION ORDER:
 *   1.  Hero              — First impression + stat cards
 *   2.  CoreServices      — 3 flagship offerings
 *   3.  TestimonialMarquee — Scrolling social proof ribbon
 *   4.  ServicesGrid      — Full services breakdown
 *   5.  Metrics           — Impact numbers (animated counters)
 *   6.  Process           — How we work timeline
 *   7.  Testimonials      — Deep client quotes carousel
 *   8.  Pricing           — Tiers + FAQ
 *   9.  Team              — Leadership profiles
 *  10.  CtaBanner         — Final CTA push
 *  11.  TrustBar          — Partner logos marquee
 *
 * THEME: Dark (Brown & Creme) / Light (White & Green)
 *        Toggle via sun/moon icon in Navbar.
 */

// Layout
import { AnnouncementBar } from "@/components/layout/announcement-bar";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

// Sections (in render order)
import { Hero } from "@/components/sections/hero";
import { CoreServices } from "@/components/sections/core-services";
import { TestimonialMarquee } from "@/components/sections/testimonial-marquee";
import { ServicesGrid } from "@/components/sections/services-grid";
import { Metrics } from "@/components/sections/metrics";
import { Process } from "@/components/sections/process-timeline";
import { Testimonials } from "@/components/sections/testimonials";
import { Pricing } from "@/components/sections/pricing";
import { Team } from "@/components/sections/team";
import { CtaBanner } from "@/components/sections/cta-banner";
import { TrustBar } from "@/components/sections/trust-bar";

// Floating widgets
import { SocialProofToast } from "@/components/shared/social-proof-toast";
import { ChatBotWidget } from "@/components/shared/chatbot-widget";

// Hooks
import { useTheme } from "@/hooks/useTheme";

export default function App() {
  const { theme, toggle } = useTheme("dark");

  return (
    <div
      className="min-h-screen font-body"
      style={{
        background: "hsl(var(--mn-bg-deep))",
        color: "hsl(var(--mn-text-primary))",
      }}
    >
      {/* ── Layout Shell ── */}
      <AnnouncementBar />
      <Navbar theme={theme} onToggleTheme={toggle} />

      {/* ── Page Sections ── */}
      <main>
        <Hero />
        <CoreServices />
        <TestimonialMarquee />
        <ServicesGrid />
        <Metrics />
        <Process />
        <Testimonials />
        <Pricing />
        <Team />
        <CtaBanner />
        <TrustBar />
      </main>

      {/* ── Footer ── */}
      <Footer />

      {/* ── Floating Widgets ── */}
      <SocialProofToast />
      <ChatBotWidget theme={theme} />
    </div>
  );
}
