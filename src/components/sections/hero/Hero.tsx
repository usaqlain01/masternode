/**
 * Hero.tsx — Landing page hero section
 *
 * Features:
 * - Bold animated headline
 * - Pain-point subheadline
 * - Dual CTAs
 * - 3 stat cards in one clean row
 * - Ambient background effects
 */

import { ArrowRight, Play, CheckCircle, TrendingUp, BarChart3 } from "lucide-react";
import { discount } from "@/data/pricing";

const HERO_STATS = [
  { icon: CheckCircle, label: "Projects Delivered", value: "200+", color: "text-mn-emerald", iconBg: "bg-mn-emerald/10" },
  { icon: TrendingUp, label: "Average ROI", value: "340%", color: "text-mn-warm", iconBg: "bg-mn-warm/10" },
  { icon: BarChart3, label: "Client Satisfaction", value: "98%", color: "text-mn-warm", iconBg: "bg-mn-warm/10" },
];

export function Hero() {
  const remaining = discount.spotsTotal - discount.spotsClaimed;

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full blur-[120px]"
          style={{ background: "hsl(var(--mn-accent-1))", opacity: 0.06 }} />
        <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full blur-[100px]"
          style={{ background: "hsl(var(--mn-accent-2))", opacity: 0.05 }} />
        <div className="absolute inset-0 bg-dot-pattern opacity-40" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Eyebrow Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-mn-electric/30 bg-mn-electric/5 px-4 py-2 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mn-emerald opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-mn-emerald" />
            </span>
            <span className="text-sm font-medium text-mn-electric">
              {remaining} of {discount.spotsTotal} founding spots remaining
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Your Business Deserves{" "}
            <br className="hidden sm:block" />
            <span className="text-gradient">AI That Actually</span>
            <br />
            <span className="text-gradient">Delivers.</span>
          </h1>

          {/* Subheadline */}
          <p className="mx-auto mt-6 max-w-2xl text-lg text-mn-muted md:text-xl leading-relaxed">
            Stop burning budget on AI experiments that go nowhere. MasterNode builds
            production-grade AI systems that drive revenue, cut costs, and give you
            an unfair competitive advantage — in weeks, not years.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#pricing"
              className="group relative inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-mn-electric to-mn-violet px-8 py-4 text-base font-bold text-mn-midnight shadow-2xl transition-all hover:brightness-110 glow-accent"
            >
              Claim Your 25% Off
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#case-studies"
              className="group inline-flex items-center gap-2 rounded-xl border border-mn-border bg-mn-navy/50 px-8 py-4 text-base font-semibold text-mn-white backdrop-blur-sm transition-all hover:border-mn-electric/40 hover:bg-mn-slate/30"
            >
              <Play className="h-5 w-5 text-mn-electric" />
              See Our Results
            </a>
          </div>

          {/* Urgency note — warm accent text */}
          <p className="mt-6 text-sm font-medium text-mn-warm">
            ⚡ Offer expires when all {discount.spotsTotal} spots are filled. No extensions.
          </p>
        </div>

        {/* ── STAT CARDS — 3 cards, always single row ── */}
        <div className="mx-auto mt-16 max-w-3xl">
          <div className="grid grid-cols-3 gap-4">
            {HERO_STATS.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className={`glass rounded-xl p-5 flex items-center gap-3 transition ${
                    stat.color.includes("warm") ? "hover:glow-warm" : "hover:glow-accent"
                  }`}
                >
                  <div className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg ${stat.iconBg}`}>
                    <Icon className={`h-5 w-5 ${stat.color}`} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-mn-muted truncate">{stat.label}</p>
                    <p className="text-xl font-bold text-mn-white">{stat.value}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
