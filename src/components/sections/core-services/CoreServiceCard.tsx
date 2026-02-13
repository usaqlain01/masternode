/**
 * CoreServiceCard — Individual service offering card
 *
 * Displays category badge, title, description, capabilities grid,
 * and tech stack tags. Used inside the CoreServices section.
 */

import { ArrowUpRight, type LucideIcon } from "lucide-react";
import type { CoreService } from "@/data/coreServices";

interface CoreServiceCardProps {
  service: CoreService;
  icon: LucideIcon;
}

export function CoreServiceCard({ service, icon: Icon }: CoreServiceCardProps) {
  return (
    <div
      className="group flex flex-col rounded-2xl border overflow-hidden transition-all duration-300 hover:shadow-lg"
      style={{
        borderColor: "hsla(var(--mn-border), 0.4)",
        background: "hsla(var(--mn-bg-card), 0.6)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "hsla(var(--mn-accent-glow), 0.3)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "hsla(var(--mn-border), 0.4)";
      }}
    >
      {/* Header with category badge + icon */}
      <div className="p-7 pb-0">
        <div className="flex items-start justify-between gap-4">
          <span
            className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${service.industryColor}`}
          >
            <Icon className="h-3 w-3" />
            {service.industry}
          </span>
          <ArrowUpRight className="h-5 w-5 text-mn-muted transition group-hover:text-mn-electric group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>

        <h3 className="mt-4 font-display text-xl font-bold leading-tight text-mn-white">
          {service.title}
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-mn-muted">
          {service.challenge}
        </p>
      </div>

      {/* Capabilities Grid */}
      <div className="mt-auto p-7 pt-6">
        <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-mn-electric">
          Key Capabilities
        </p>
        <div className="grid grid-cols-2 gap-3">
          {service.results.map((result) => (
            <div
              key={result.label}
              className="rounded-lg px-3 py-2.5"
              style={{ background: "hsla(var(--mn-bg-elevated), 0.6)" }}
            >
              <p className="font-display text-lg font-bold text-mn-white">
                {result.value}
              </p>
              <p className="text-xs text-mn-muted">{result.label}</p>
            </div>
          ))}
        </div>

        {/* Tech stack */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {service.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded border px-2 py-0.5 font-mono text-[10px] text-mn-muted"
              style={{ borderColor: "hsla(var(--mn-border), 0.4)" }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
