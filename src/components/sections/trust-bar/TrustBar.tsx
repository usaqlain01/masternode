/**
 * TrustBar.tsx — Client logo marquee
 * 
 * Infinite-scrolling logos for social proof.
 * Replace placeholder logos with real client/partner logos.
 */

import { CLIENT_LOGOS } from "@/data/constants";

export function TrustBar() {
  // Duplicate logos for seamless infinite scroll
  const logos = [...CLIENT_LOGOS, ...CLIENT_LOGOS];

  return (
    <section className="relative overflow-hidden border-y py-10"
      style={{ borderColor: "hsl(var(--mn-border))", background: "hsla(var(--mn-bg-card), 0.3)" }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-8 text-center text-sm font-medium uppercase tracking-widest text-mn-muted">
          Trusted by forward-thinking companies worldwide
        </p>
      </div>

      {/* Marquee Container */}
      <div className="relative">
        {/* Fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24"
          style={{ background: "linear-gradient(to right, hsl(var(--mn-bg-deep)), transparent)" }} />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24"
          style={{ background: "linear-gradient(to left, hsl(var(--mn-bg-deep)), transparent)" }} />

        {/* Scrolling track */}
        <div className="flex animate-marquee items-center gap-12">
          {logos.map((name, i) => (
            <LogoPlaceholder key={`${name}-${i}`} name={name} />
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * LogoPlaceholder — Stylized text logo placeholder.
 * Replace this entire component with <img> tags for real logos.
 */
function LogoPlaceholder({ name }: { name: string }) {
  return (
    <div className="flex-shrink-0 flex items-center justify-center rounded-lg border border-mn-border/40 px-8 py-4 opacity-40 transition hover:opacity-70"
      style={{ background: "hsla(var(--mn-bg-elevated), 0.3)" }}>
      <span className="font-display text-base font-semibold tracking-wide text-mn-muted whitespace-nowrap">
        {name}
      </span>
    </div>
  );
}
