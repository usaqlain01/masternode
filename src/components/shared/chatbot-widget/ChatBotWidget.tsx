/**
 * ChatBotWidget.tsx — Floating chatbot teaser (bottom-left)
 *
 * - Fixed position, always visible on scroll
 * - Dark mode → darkbot.png / Light mode → lightbot.png
 * - Hover opens a playful "under construction" chat dialog
 * - Mouse-out closes it (no click needed)
 * - Chat history: construction graphic + "Coming Soon"
 * - Input: disabled with "Coming Soon" placeholder
 */

import { useState, useRef } from "react";
import { Send, Construction, Wrench, HardHat, Sparkles } from "lucide-react";
import { DARK_BOT, LIGHT_BOT } from "@/data/botImages";
import type { Theme } from "@/hooks/useTheme";

interface ChatBotWidgetProps {
  theme: Theme;
}

export function ChatBotWidget({ theme }: ChatBotWidgetProps) {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    // Small delay so dialog doesn't flicker when moving between avatar and panel
    timeoutRef.current = setTimeout(() => setOpen(false), 200);
  };

  const botImage = theme === "dark" ? DARK_BOT : LIGHT_BOT;

  return (
    <div
      className="fixed bottom-6 right-6 z-50"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* ── Chat Dialog Panel ── */}
      <div
        className={`absolute bottom-20 right-0 w-[340px] sm:w-[380px] rounded-2xl overflow-hidden transition-all duration-300 origin-bottom-right ${
          open
            ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
            : "opacity-0 scale-90 translate-y-4 pointer-events-none"
        }`}
        style={{
          background: "hsl(var(--mn-bg-card))",
          border: "1px solid hsla(var(--mn-accent-warm-glow), 0.3)",
          boxShadow: "0 20px 60px -10px hsla(var(--mn-accent-warm-glow), 0.15), 0 0 40px hsla(var(--mn-accent-warm-glow), 0.05)",
        }}
      >
        {/* Header */}
        <div
          className="flex items-center gap-3 px-5 py-4"
          style={{
            background: "linear-gradient(135deg, hsla(var(--mn-accent-warm-glow), 0.15), hsla(var(--mn-accent-glow), 0.08))",
            borderBottom: "1px solid hsla(var(--mn-border), 0.3)",
          }}
        >
          <div className="relative">
            <img
              src={botImage}
              alt="MasterNode AI"
              className="h-10 w-10 rounded-full"
              style={{ border: "2px solid hsla(var(--mn-accent-warm-glow), 0.4)" }}
            />
            {/* Pulse dot */}
            <span className="absolute -top-0.5 -right-0.5 flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mn-warm opacity-60" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-mn-warm" />
            </span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-mn-white">MasterNode AI</p>
            <p className="text-xs text-mn-warm">Almost ready to chat...</p>
          </div>
          <Sparkles className="h-4 w-4 text-mn-warm animate-pulse" />
        </div>

        {/* Chat History — Under Construction Zone */}
        <div className="relative h-[260px] overflow-hidden">
          {/* Animated background grid */}
          <div className="absolute inset-0 bg-dot-pattern opacity-30" />

          {/* Construction content */}
          <div className="relative flex h-full flex-col items-center justify-center px-6 text-center">
            {/* Animated construction icons */}
            <div className="mb-4 flex items-center gap-3">
              <div
                className="flex h-12 w-12 items-center justify-center rounded-xl"
                style={{
                  background: "hsla(var(--mn-accent-warm-glow), 0.1)",
                  border: "1px dashed hsla(var(--mn-accent-warm-glow), 0.3)",
                  animation: "float 3s ease-in-out infinite",
                }}
              >
                <HardHat className="h-6 w-6 text-mn-warm" />
              </div>
              <div
                className="flex h-12 w-12 items-center justify-center rounded-xl"
                style={{
                  background: "hsla(var(--mn-accent-glow), 0.1)",
                  border: "1px dashed hsla(var(--mn-accent-glow), 0.3)",
                  animation: "float 3s ease-in-out infinite 0.5s",
                }}
              >
                <Construction className="h-6 w-6 text-mn-electric" />
              </div>
              <div
                className="flex h-12 w-12 items-center justify-center rounded-xl"
                style={{
                  background: "hsla(var(--mn-accent-warm-glow), 0.1)",
                  border: "1px dashed hsla(var(--mn-accent-warm-glow), 0.3)",
                  animation: "float 3s ease-in-out infinite 1s",
                }}
              >
                <Wrench className="h-6 w-6 text-mn-warm" />
              </div>
            </div>

            {/* Tape stripes — construction barrier */}
            <div className="w-full mb-4 overflow-hidden rounded-lg" style={{ height: "6px" }}>
              <div
                className="h-full w-[200%]"
                style={{
                  background: "repeating-linear-gradient(45deg, hsl(var(--mn-accent-warm)) 0px, hsl(var(--mn-accent-warm)) 8px, transparent 8px, transparent 16px, hsl(var(--mn-bg-elevated)) 16px, hsl(var(--mn-bg-elevated)) 24px)",
                  animation: "marquee 8s linear infinite",
                }}
              />
            </div>

            <h4 className="font-display text-base font-bold text-mn-white mb-1">
              Under Construction
            </h4>
            <p className="text-xs text-mn-muted leading-relaxed max-w-[240px]">
              Our AI assistant is being trained on MasterNode's expertise. Something amazing is coming soon.
            </p>

            {/* Fake progress bar */}
            <div className="mt-4 w-48 h-2 rounded-full overflow-hidden"
              style={{ background: "hsla(var(--mn-bg-elevated), 0.8)" }}>
              <div
                className="h-full rounded-full"
                style={{
                  width: "68%",
                  background: "linear-gradient(90deg, hsl(var(--mn-accent-warm)), hsl(var(--mn-accent-1)))",
                  animation: "pulse 2s ease-in-out infinite",
                }}
              />
            </div>
            <p className="mt-1.5 text-[10px] text-mn-muted font-mono">68% trained</p>
          </div>
        </div>

        {/* Input Area — Disabled / Coming Soon */}
        <div
          className="px-4 py-3"
          style={{
            borderTop: "1px solid hsla(var(--mn-border), 0.3)",
            background: "hsla(var(--mn-bg-elevated), 0.5)",
          }}
        >
          <div className="flex items-center gap-2">
            <div
              className="flex-1 rounded-lg px-4 py-2.5 text-sm"
              style={{
                background: "hsla(var(--mn-bg-deep), 0.6)",
                border: "1px solid hsla(var(--mn-border), 0.4)",
                color: "hsl(var(--mn-text-muted))",
                opacity: 0.6,
              }}
            >
              Coming Soon...
            </div>
            <button
              disabled
              className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg opacity-40 cursor-not-allowed"
              style={{
                background: "hsla(var(--mn-accent-warm-glow), 0.2)",
                border: "1px solid hsla(var(--mn-accent-warm-glow), 0.2)",
              }}
            >
              <Send className="h-4 w-4 text-mn-warm" />
            </button>
          </div>
        </div>
      </div>

      {/* ── Bot Avatar Button ── */}
      <div className="relative group cursor-pointer">
        {/* Outer glow ring */}
        <div
          className="absolute -inset-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: "linear-gradient(135deg, hsla(var(--mn-accent-warm-glow), 0.4), hsla(var(--mn-accent-glow), 0.2))",
            filter: "blur(8px)",
          }}
        />

        {/* Avatar */}
        <div
          className="relative h-14 w-14 rounded-full overflow-hidden transition-transform duration-300 hover:scale-110"
          style={{
            border: "2px solid hsla(var(--mn-accent-warm-glow), 0.4)",
            boxShadow: "0 4px 20px hsla(var(--mn-accent-warm-glow), 0.15)",
          }}
        >
          <img
            src={botImage}
            alt="Chat with MasterNode AI"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Notification badge */}
        <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-mn-warm text-[10px] font-bold"
          style={{ color: "hsl(var(--mn-bg-deep))" }}>
          1
        </span>
      </div>
    </div>
  );
}
