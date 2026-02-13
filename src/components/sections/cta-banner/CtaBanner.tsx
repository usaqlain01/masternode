/**
 * CtaBanner.tsx — Full-width call-to-action section
 * 
 * The final conversion push before the footer.
 * Combines urgency, social proof, and a prominent CTA.
 */

import { ArrowRight, Sparkles, Users, Clock } from "lucide-react";
import { discount } from "@/data/pricing";

export function CtaBanner() {
  const remaining = discount.spotsTotal - discount.spotsClaimed;

  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-mn-electric/10 via-mn-midnight to-mn-violet/10" />
        <div className="absolute inset-0 bg-dot-pattern opacity-20" />
        <div className="absolute -top-40 left-1/3 h-[400px] w-[400px] rounded-full bg-mn-electric/8 blur-[100px]" />
        <div className="absolute -bottom-40 right-1/3 h-[400px] w-[400px] rounded-full bg-mn-violet/8 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-mn-electric/30 bg-mn-electric/10 px-4 py-2">
          <Sparkles className="h-4 w-4 text-mn-electric" />
          <span className="text-sm font-semibold text-mn-electric">
            Limited Time Offer
          </span>
        </div>

        <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
          Ready to Transform{" "}
          <br className="hidden sm:block" />
          Your Business with{" "}
          <span className="text-gradient">AI?</span>
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-lg text-mn-muted">
          Join 200+ companies that stopped guessing and started building.
          Your free consultation is 30 minutes of focused, actionable advice —
          no sales pitch, no obligation.
        </p>

        {/* Trust micro-stats */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm">
          <span className="flex items-center gap-2 text-mn-muted">
            <Users className="h-4 w-4 text-mn-electric" />
            <span className="font-semibold text-mn-white">{remaining}</span> spots left
          </span>
          <span className="flex items-center gap-2 text-mn-muted">
            <Clock className="h-4 w-4 text-mn-emerald" />
            30-min free consultation
          </span>
          <span className="flex items-center gap-2 text-mn-muted">
            <Sparkles className="h-4 w-4 text-mn-amber" />
            No commitment required
          </span>
        </div>

        {/* CTA */}
        <div className="mt-10">
          <a
            href="#pricing"
            className="group inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-mn-electric to-mn-violet px-10 py-5 text-lg font-bold shadow-2xl transition-all hover:brightness-110 glow-accent"
            style={{ color: "hsl(var(--mn-bg-deep))" }}
          >
            Book Your Free Consultation
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        <p className="mt-4 text-sm text-mn-muted">
          No credit card required · Response within 24 hours · 100% confidential
        </p>
      </div>
    </section>
  );
}
