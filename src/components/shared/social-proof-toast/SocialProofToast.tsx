/**
 * SocialProofToast.tsx — Floating social proof notifications
 * 
 * Cycles through activity messages to create FOMO.
 * Appears in bottom-left corner on a timer.
 * Can be dismissed by clicking the X.
 */

import { useEffect, useState, useCallback } from "react";
import { SOCIAL_PROOF_MESSAGES } from "@/data/constants";

export function SocialProofToast() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  const showNext = useCallback(() => {
    if (dismissed) return;
    setVisible(true);

    // Hide after 4 seconds
    const hideTimer = setTimeout(() => {
      setVisible(false);

      // Queue next message after a pause
      const nextTimer = setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % SOCIAL_PROOF_MESSAGES.length);
      }, 8000);

      return () => clearTimeout(nextTimer);
    }, 4000);

    return () => clearTimeout(hideTimer);
  }, [dismissed]);

  useEffect(() => {
    // Initial delay before first toast
    const initialDelay = setTimeout(showNext, 6000);
    return () => clearTimeout(initialDelay);
  }, [showNext]);

  useEffect(() => {
    if (currentIndex > 0 && !dismissed) {
      showNext();
    }
  }, [currentIndex, dismissed, showNext]);

  if (dismissed) return null;

  const message = SOCIAL_PROOF_MESSAGES[currentIndex];

  return (
    <div
      className={`fixed bottom-6 left-6 z-50 transition-all duration-400 ${
        visible
          ? "translate-x-0 opacity-100"
          : "-translate-x-full opacity-0"
      }`}
    >
      <div className="glass-strong flex items-start gap-3 rounded-xl p-4 shadow-2xl max-w-sm">
        {/* Pulse dot */}
        <div className="mt-1 flex-shrink-0">
          <span className="relative flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mn-emerald opacity-75" />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-mn-emerald" />
          </span>
        </div>

        {/* Message */}
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-mn-white">
            <span className="font-semibold">{message.company}</span>{" "}
            {message.action}
          </p>
          <p className="mt-0.5 text-xs text-mn-muted">{message.time}</p>
        </div>

        {/* Dismiss button */}
        <button
          onClick={() => setDismissed(true)}
          className="flex-shrink-0 rounded-md p-1 text-mn-muted transition hover:bg-mn-slate hover:text-mn-white"
          aria-label="Dismiss notifications"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}
