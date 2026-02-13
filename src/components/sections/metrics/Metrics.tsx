/**
 * Metrics.tsx — Impact metrics with animated counters
 * 
 * Numbers counter up when scrolled into view.
 * Designed to build authority and trust.
 */

import { METRICS } from "@/data/constants";
import { AnimatedCounter } from "@/components/shared/animated-counter";
import { SectionWrapper } from "@/components/shared/section-wrapper";

export function Metrics() {
  return (
    <SectionWrapper bgEffect="none" className="py-16 md:py-20">
      {/* Divider */}
      <div className="divider-gradient mb-16" />

      <div className="text-center mb-12">
        <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
          Numbers Don't Lie.{" "}
          <span className="text-gradient">Neither Do We.</span>
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
        {METRICS.map((metric) => (
          <div key={metric.label} className="text-center">
            <div className="font-display text-4xl font-extrabold text-mn-white sm:text-5xl lg:text-6xl">
              <AnimatedCounter
                value={metric.value}
                prefix={metric.prefix}
                suffix={metric.suffix}
                decimals={metric.value % 1 !== 0 ? 1 : 0}
              />
            </div>
            <p className="mt-2 text-sm font-medium text-mn-muted sm:text-base">
              {metric.label}
            </p>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="divider-gradient mt-16" />
    </SectionWrapper>
  );
}
