/**
 * Pricing — Pricing tiers with scarcity offer and FAQ
 */

import { Flame } from "lucide-react";
import { pricingTiers, discount, faqItems } from "@/data/pricing";
import { SectionWrapper, SectionHeader } from "@/components/shared/section-wrapper";
import { PricingCard } from "./PricingCard";
import { FaqItem } from "./FaqItem";

export function Pricing() {
  const remaining = discount.spotsTotal - discount.spotsClaimed;

  return (
    <SectionWrapper id="pricing" bgEffect="mesh-2">
      <SectionHeader
        eyebrow="Pricing"
        title="Transparent Pricing."
        titleAccent="Exceptional Value."
        subtitle="No hidden fees. No surprise invoices. Choose the tier that fits your needs — and lock in your 25% founding discount while spots last."
      />

      {/* Scarcity Banner */}
      <div className="mb-12 mx-auto max-w-2xl rounded-xl border border-mn-amber/30 bg-mn-amber/5 p-4 text-center">
        <div className="flex items-center justify-center gap-2">
          <Flame className="h-5 w-5 text-mn-amber" />
          <span className="font-display font-bold text-mn-amber">
            {discount.label}: {discount.percentage}% Off
          </span>
        </div>
        <p className="mt-1 text-sm text-mn-muted">
          Only <span className="font-bold text-mn-white">{remaining} of {discount.spotsTotal}</span>{" "}
          founding spots remaining. Prices shown reflect the discount.
        </p>
        {/* Progress bar */}
        <div className="mt-3 mx-auto max-w-sm">
          <div className="h-2 rounded-full bg-mn-slate/40">
            <div
              className="h-2 rounded-full bg-gradient-to-r from-mn-amber to-red-500 transition-all duration-1000"
              style={{ width: `${(discount.spotsClaimed / discount.spotsTotal) * 100}%` }}
            />
          </div>
          <p className="mt-1 text-xs text-mn-muted">{discount.spotsClaimed} spots claimed</p>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="grid gap-6 lg:grid-cols-3">
        {pricingTiers.map((tier) => (
          <PricingCard key={tier.id} tier={tier} />
        ))}
      </div>

      {/* FAQ */}
      <div className="mt-20">
        <h3 className="text-center font-display text-2xl font-bold mb-8">
          Frequently Asked Questions
        </h3>
        <div className="mx-auto max-w-3xl space-y-3">
          {faqItems.map((item, i) => (
            <FaqItem key={i} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
