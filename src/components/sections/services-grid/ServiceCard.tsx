/**
 * ServiceCard — Individual service offering card
 *
 * Displays icon, title, description, and capability tags.
 * Warm-colored services get warm hover effects.
 */

import { Compass, Brain, Sparkles, Database, Shield, Code, type LucideIcon } from "lucide-react";
import type { Service } from "@/data/services";

const iconMap: Record<string, LucideIcon> = {
  Compass, Brain, Sparkles, Database, Shield, Code,
};

interface ServiceCardProps {
  service: Service;
  index: number;
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  const Icon = iconMap[service.icon] || Compass;
  const isWarm = service.color.includes("warm");

  return (
    <div
      className={`group relative rounded-2xl border p-7 backdrop-blur-sm transition-all duration-300 hover:shadow-lg ${
        isWarm
          ? "border-mn-slate/40 bg-mn-navy/60 hover:border-mn-warm/25 hover:shadow-mn-warm/5"
          : "border-mn-slate/40 bg-mn-navy/60 hover:border-mn-electric/30 hover:shadow-mn-electric/5"
      }`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Icon */}
      <div
        className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br transition group-hover:scale-110 ${
          isWarm
            ? "from-mn-warm/20 to-mn-warm/5"
            : index % 3 === 0
              ? "from-mn-electric/20 to-mn-electric/5"
              : index % 3 === 1
                ? "from-mn-violet/20 to-mn-violet/5"
                : "from-mn-emerald/20 to-mn-emerald/5"
        }`}
      >
        <Icon className={`h-6 w-6 ${service.color}`} />
      </div>

      {/* Title */}
      <h3 className="mb-3 font-display text-lg font-bold text-mn-white">
        {service.title}
      </h3>

      {/* Description */}
      <p className="mb-5 text-sm leading-relaxed text-mn-muted">
        {service.description}
      </p>

      {/* Capability Tags */}
      <div className="flex flex-wrap gap-2">
        {service.capabilities.map((cap) => (
          <span
            key={cap}
            className="rounded-md bg-mn-slate/60 px-2.5 py-1 text-xs font-medium text-mn-muted"
          >
            {cap}
          </span>
        ))}
      </div>

      {/* Hover gradient border effect */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className={`absolute inset-[-1px] rounded-2xl bg-gradient-to-br ${
          isWarm
            ? "from-mn-warm/15 via-transparent to-mn-warm/10"
            : "from-mn-electric/20 via-transparent to-mn-violet/20"
        }`} />
      </div>
    </div>
  );
}
