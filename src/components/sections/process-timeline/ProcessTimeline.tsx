/**
 * Process.tsx — "How We Work" process steps
 * 
 * Visual timeline showing the 4-step engagement process.
 * Builds trust by showing transparency and methodology.
 */

import { Search, PenTool, Cpu, TrendingUp, type LucideIcon } from "lucide-react";
import { PROCESS_STEPS } from "@/data/constants";
import { SectionWrapper, SectionHeader } from "@/components/shared/section-wrapper";

const iconMap: Record<string, LucideIcon> = {
  Search,
  PenTool,
  Cpu,
  TrendingUp,
};

export function Process() {
  return (
    <SectionWrapper id="process" bgEffect="dots">
      <SectionHeader
        eyebrow="How We Work"
        title="From Idea to Production"
        titleAccent="in Weeks."
        subtitle="No six-month discovery phases. No 200-page strategy decks that collect dust. We move fast, deliver often, and prove value at every milestone."
      />

      {/* Steps */}
      <div className="relative">
        {/* Connecting line (desktop) */}
        <div className="absolute left-1/2 top-0 bottom-0 hidden w-px bg-gradient-to-b from-mn-electric/40 via-mn-violet/40 to-mn-emerald/40 lg:block" />

        <div className="space-y-12 lg:space-y-0">
          {PROCESS_STEPS.map((step, index) => {
            const Icon = iconMap[step.icon] || Search;
            const isEven = index % 2 === 0;

            return (
              <div
                key={step.step}
                className={`relative lg:flex lg:items-center lg:gap-12 ${
                  index > 0 ? "lg:mt-16" : ""
                }`}
              >
                {/* Desktop: Alternating layout */}
                <div
                  className={`lg:w-1/2 ${
                    isEven ? "lg:text-right lg:pr-16" : "lg:order-2 lg:pl-16"
                  }`}
                >
                  <div
                    className={`rounded-2xl border border-mn-slate/40 bg-mn-navy/60 p-7 transition hover:border-mn-electric/30 ${
                      isEven ? "lg:ml-auto" : ""
                    } max-w-lg`}
                  >
                    {/* Step number + duration */}
                    <div className="mb-4 flex items-center gap-3">
                      <div className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${
                        step.step % 2 === 0
                          ? "from-mn-warm/20 to-mn-warm/5"
                          : "from-mn-electric/20 to-mn-violet/10"
                      }`}>
                        <Icon className={`h-5 w-5 ${step.step % 2 === 0 ? "text-mn-warm" : "text-mn-electric"}`} />
                      </div>
                      <div>
                        <p className={`font-mono text-xs font-medium uppercase tracking-wider ${
                          step.step % 2 === 0 ? "text-mn-warm" : "text-mn-electric"
                        }`}>
                          Phase {step.step}
                        </p>
                        <span className="text-xs text-mn-muted">{step.duration}</span>
                      </div>
                    </div>

                    <h3 className="mb-2 font-display text-xl font-bold text-mn-white">
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-mn-muted">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Center node (desktop) */}
                <div className="absolute left-1/2 top-7 hidden -translate-x-1/2 lg:flex">
                  <div className={`relative flex h-12 w-12 items-center justify-center rounded-full border-2 bg-mn-midnight ${
                    step.step % 2 === 0 ? "border-mn-warm/40" : "border-mn-electric/40"
                  }`}>
                    <span className={`font-display text-lg font-bold ${
                      step.step % 2 === 0 ? "text-mn-warm" : "text-mn-electric"
                    }`}>
                      {step.step}
                    </span>
                  </div>
                </div>

                {/* Empty space for the other side (desktop) */}
                <div className={`hidden lg:block lg:w-1/2 ${isEven ? "lg:order-2" : ""}`} />
              </div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
