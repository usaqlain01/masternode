/**
 * AnimatedCounter.tsx — Animated number counter
 * 
 * Counts from 0 to the target value with easing when visible.
 * Supports prefix ($), suffix (%, +, B, M, K), and decimals.
 */

import { useEffect, useRef, useState } from "react";
import { useInView } from "@/hooks/useInView";

interface AnimatedCounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  decimals?: number;
}

export function AnimatedCounter({
  value,
  prefix = "",
  suffix = "",
  duration = 2000,
  decimals = 0,
}: AnimatedCounterProps) {
  const { ref, isInView } = useInView({ threshold: 0.3 });
  const [display, setDisplay] = useState("0");
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    hasAnimated.current = true;

    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * value;

      setDisplay(
        decimals > 0 ? current.toFixed(decimals) : Math.floor(current).toString()
      );

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value, duration, decimals]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
