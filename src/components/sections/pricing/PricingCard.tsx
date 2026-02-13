/**
 * PricingCard — Individual pricing tier card
 *
 * Shows tier name, price (with strikethrough original),
 * discount badge, features list, and CTA button.
 */

import { Check } from "lucide-react";
import { discount, type PricingTier } from "@/data/pricing";

interface PricingCardProps {
  tier: PricingTier;
}

export function PricingCard({ tier }: PricingCardProps) {
  return (
    <div
      className={`relative flex flex-col rounded-2xl border p-7 transition-all ${
        tier.popular
          ? "border-mn-electric/50 bg-mn-navy/80 scale-[1.02] lg:scale-105"
          : "border-mn-slate/40 bg-mn-navy/60"
      }`}
      style={
        tier.popular
          ? {
              boxShadow:
                "0 10px 40px -10px hsla(var(--mn-accent-glow), 0.12), 0 4px 20px -6px hsla(var(--mn-accent-warm-glow), 0.08)",
            }
          : undefined
      }
    >
      {/* Popular badge */}
      {tier.popular && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span className="rounded-full bg-gradient-to-r from-mn-electric to-mn-violet px-4 py-1 text-xs font-bold text-white shadow-lg">
            Most Popular
          </span>
        </div>
      )}

      {/* Tier name */}
      <h3 className="font-display text-xl font-bold text-mn-white">{tier.name}</h3>
      <p className="mt-1 text-sm text-mn-muted">{tier.tagline}</p>

      {/* Price */}
      <div className="mt-6 mb-6">
        {tier.originalPrice && (
          <span className="text-sm text-mn-muted line-through mr-2">
            {tier.originalPrice}
          </span>
        )}
        <span className="font-display text-4xl font-extrabold text-mn-white">
          {tier.price}
        </span>
        <span className="ml-2 text-sm text-mn-muted">/ {tier.period}</span>
      </div>

      {/* Discount badge */}
      {tier.originalPrice && (
        <div className="mb-6 flex items-center gap-2 rounded-lg bg-mn-emerald/10 border border-mn-emerald/20 px-3 py-2">
          <Check className="h-4 w-4 text-mn-emerald" />
          <span className="text-xs font-semibold text-mn-emerald">
            {discount.percentage}% founding discount applied
          </span>
        </div>
      )}

      {/* Features */}
      <ul className="mb-8 flex-1 space-y-3">
        {tier.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-mn-electric" />
            <span className="text-sm text-mn-muted">{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href="#"
        className={`block rounded-xl py-3.5 text-center text-sm font-bold transition ${
          tier.popular
            ? "bg-gradient-to-r from-mn-electric to-mn-violet text-white shadow-lg shadow-mn-electric/25 hover:shadow-mn-electric/40 hover:brightness-110"
            : "border border-mn-slate/60 bg-mn-slate/20 text-mn-white hover:border-mn-electric/40 hover:bg-mn-slate/40"
        }`}
      >
        {tier.cta}
      </a>
    </div>
  );
}
