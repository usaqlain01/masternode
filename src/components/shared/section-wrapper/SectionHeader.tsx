/**
 * SectionHeader — Consistent section title + subtitle pattern
 *
 * Used across all major sections for visual consistency.
 */

import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  titleAccent?: string;
  subtitle?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  eyebrow,
  title,
  titleAccent,
  subtitle,
  align = "center",
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-14 md:mb-20",
        align === "center" && "text-center",
        align === "center" && "mx-auto max-w-3xl"
      )}
    >
      {eyebrow && (
        <span className="mb-4 inline-block rounded-full border border-mn-electric/30 bg-mn-electric/10 px-4 py-1.5 font-mono text-xs font-medium uppercase tracking-widest text-mn-electric">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
        {title}
        {titleAccent && <span className="text-gradient"> {titleAccent}</span>}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-mn-muted md:text-xl">{subtitle}</p>
      )}
    </div>
  );
}
