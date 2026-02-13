/**
 * AnnouncementBar.tsx — Sticky top banner
 *
 * Displays the "First 100 Clients" scarcity offer.
 * Dismissible by clicking the X icon.
 */

import { useState } from "react";
import { X, Flame } from "lucide-react";
import { discount } from "@/data/pricing";

export function AnnouncementBar() {
  const [visible, setVisible] = useState(true);
  const remaining = discount.spotsTotal - discount.spotsClaimed;

  if (!visible) return null;

  return (
    <div
      className="relative z-50 border-b border-mn-electric/20"
      style={{
        background: "linear-gradient(to right, hsla(var(--mn-accent-glow), 0.08), hsla(var(--mn-accent-glow), 0.15), hsla(var(--mn-accent-glow), 0.08))",
      }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-2 px-4 py-2.5 text-center text-sm">
        <Flame className="h-4 w-4 text-mn-amber animate-pulse" />
        <span className="font-medium text-mn-white">
          <span className="font-bold text-mn-amber">{discount.label}:</span>{" "}
          {discount.percentage}% Off All Tiers
          <span className="mx-2 hidden sm:inline text-mn-muted">—</span>
          <span className="hidden sm:inline text-mn-electric font-semibold">
            Only {remaining} spots remaining
          </span>
        </span>
        <a
          href="#pricing"
          className="ml-2 hidden md:inline-flex items-center rounded-full bg-mn-electric/20 px-3 py-0.5 text-xs font-semibold text-mn-electric transition hover:bg-mn-electric/30"
        >
          Claim Yours →
        </a>
        <button
          onClick={() => setVisible(false)}
          className="absolute right-3 rounded p-1 text-mn-muted transition hover:text-mn-white"
          aria-label="Dismiss"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
