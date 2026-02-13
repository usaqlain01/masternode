/**
 * Footer.tsx — Site footer
 *
 * Warm accent applied to:
 *   - MasterNode logo icon fill
 *   - Social media icons (LinkedIn, Twitter, GitHub, YouTube)
 *   - Section headings (Quick Links, Stay Updated)
 *   - Join button + input focus ring
 */

import { Zap, Linkedin, Twitter, Github, Youtube, Mail } from "lucide-react";
import { SITE, NAV_LINKS } from "@/data/constants";

const SOCIAL_LINKS = [
  { Icon: Linkedin, href: "#", label: "LinkedIn" },
  { Icon: Twitter, href: "#", label: "Twitter" },
  { Icon: Github, href: "#", label: "GitHub" },
  { Icon: Youtube, href: "#", label: "YouTube" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative border-t"
      style={{
        borderColor: "hsla(var(--mn-border), 0.5)",
        background: "hsl(var(--mn-bg-deep))",
      }}
    >
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="#" className="inline-flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-mn-electric to-mn-violet">
                <Zap className="h-5 w-5 text-mn-warm" />
              </div>
              <span className="font-display text-xl font-bold text-mn-white">
                {SITE.name}
              </span>
            </a>
            <p className="mt-4 max-w-md text-mn-muted leading-relaxed">
              {SITE.description}
            </p>

            {/* Social Links — warm icon fills + warm hover borders */}
            <div className="mt-6 flex gap-3">
              {SOCIAL_LINKS.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-mn-border text-mn-warm transition hover:border-mn-warm/50 hover:text-mn-white hover:bg-mn-warm/5"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links — warm heading */}
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-mn-warm">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-mn-muted transition hover:text-mn-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter — warm heading */}
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-mn-warm">
              Stay Updated
            </h4>
            <p className="mt-4 text-sm text-mn-muted">
              Get AI insights, case studies, and exclusive offers delivered monthly.
            </p>
            <div className="mt-4 flex gap-2">
              <div className="relative flex-1">
                <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-mn-warm/60" />
                <input
                  type="email"
                  placeholder="you@company.com"
                  className="w-full rounded-lg border border-mn-border bg-mn-navy pl-10 pr-4 py-2.5 text-sm text-mn-white placeholder:text-mn-muted/60 focus:border-mn-warm/50 focus:outline-none focus:ring-1 focus:ring-mn-warm/30 transition"
                />
              </div>
              <button className="rounded-lg bg-mn-warm px-4 py-2.5 text-sm font-semibold text-mn-midnight transition hover:brightness-110">
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 sm:flex-row"
          style={{ borderColor: "hsla(var(--mn-border), 0.3)" }}
        >
          <p className="text-xs text-mn-muted">
            © {currentYear} {SITE.name}. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-mn-muted">
            <a href="#" className="transition hover:text-mn-warm">Privacy Policy</a>
            <a href="#" className="transition hover:text-mn-warm">Terms of Service</a>
            <a href="#" className="transition hover:text-mn-warm">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
