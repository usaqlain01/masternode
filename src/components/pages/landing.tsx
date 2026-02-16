// src/components/pages/landing.tsx
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

export const Landing = () => (
  <>
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
  </>
);