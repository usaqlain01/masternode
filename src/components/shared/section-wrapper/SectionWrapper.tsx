/**
 * SectionWrapper — Consistent section container
 *
 * Provides consistent padding, max-width, and scroll-reveal animation.
 * Wrap every major section in this component.
 */

import type { ReactNode } from "react";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  id?: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  bgEffect?: "mesh-1" | "mesh-2" | "dots" | "none";
  noReveal?: boolean;
}

export function SectionWrapper({
  id,
  children,
  className,
  containerClassName,
  bgEffect = "none",
  noReveal = false,
}: SectionWrapperProps) {
  const { ref, isInView } = useInView({ threshold: 0.05 });

  const bgClass =
    bgEffect === "mesh-1"
      ? "bg-mesh-1"
      : bgEffect === "mesh-2"
        ? "bg-mesh-2"
        : bgEffect === "dots"
          ? "bg-dot-pattern"
          : "";

  return (
    <section
      id={id}
      ref={ref}
      className={cn("relative py-20 md:py-28 lg:py-32", bgClass, className)}
    >
      <div
        className={cn(
          "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
          !noReveal && "transition-all duration-700 ease-out",
          !noReveal && (isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"),
          containerClassName
        )}
      >
        {children}
      </div>
    </section>
  );
}
