/**
 * Navbar.tsx — Main navigation bar
 *
 * Sticky nav with OPAQUE scroll background (no clutter).
 * Warm accent on logo icon + theme toggle.
 */

import { useState, useEffect } from "react";
import { Menu, X, Zap, Sun, Moon } from "lucide-react";
import { SITE, NAV_LINKS } from "@/data/constants";
import type { Theme } from "@/hooks/useTheme";

interface NavbarProps {
  theme: Theme;
  onToggleTheme: () => void;
}

export function Navbar({ theme, onToggleTheme }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "shadow-lg"
          : "bg-transparent"
      }`}
      style={scrolled ? {
        background: "hsl(var(--mn-bg-deep))",
        borderBottom: "1px solid hsla(var(--mn-border), 0.5)",
      } : undefined}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo — warm accent fill on icon */}
        <a href="#" className="group flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-mn-electric to-mn-violet shadow-lg">
            <Zap className="h-5 w-5 text-mn-warm" />
          </div>
          <span className="font-display text-xl font-bold tracking-tight text-mn-white">
            {SITE.name}
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-mn-muted transition-colors hover:text-mn-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA + Theme Toggle */}
        <div className="hidden md:flex items-center gap-3">
          {/* Theme toggle — warm icon fill */}
          <button
            onClick={onToggleTheme}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-mn-border text-mn-warm transition hover:text-mn-white hover:border-mn-warm/40 hover:bg-mn-warm/5"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </button>

          <a
            href="#pricing"
            className="group relative inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-mn-electric to-mn-violet px-5 py-2.5 text-sm font-semibold shadow-lg transition-all hover:brightness-110"
            style={{ color: "hsl(var(--mn-bg-deep))" }}
          >
            Book Free Consultation
            <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </a>
        </div>

        {/* Mobile: Theme toggle + Menu */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={onToggleTheme}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-mn-border text-mn-warm transition hover:text-mn-white"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-lg p-2 text-mn-muted transition hover:bg-mn-slate hover:text-mn-white"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileOpen && (
        <div className="md:hidden border-t animate-fade-in"
          style={{
            background: "hsl(var(--mn-bg-deep))",
            borderColor: "hsl(var(--mn-border))",
          }}>
          <div className="space-y-1 px-4 py-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block rounded-lg px-4 py-3 text-sm font-medium text-mn-muted transition hover:bg-mn-slate hover:text-mn-white"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3">
              <a
                href="#pricing"
                onClick={() => setMobileOpen(false)}
                className="block rounded-lg bg-gradient-to-r from-mn-electric to-mn-violet px-4 py-3 text-center text-sm font-semibold"
                style={{ color: "hsl(var(--mn-bg-deep))" }}
              >
                Book Free Consultation →
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
