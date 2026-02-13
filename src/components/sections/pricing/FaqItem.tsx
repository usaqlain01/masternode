/**
 * FaqItem — Expandable FAQ accordion item
 */

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FaqItemProps {
  question: string;
  answer: string;
}

export function FaqItem({ question, answer }: FaqItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-xl border border-mn-slate/30 bg-mn-navy/40 overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between px-6 py-4 text-left"
      >
        <span className="text-sm font-semibold text-mn-white pr-4">{question}</span>
        <ChevronDown
          className={`h-5 w-5 flex-shrink-0 text-mn-muted transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {open && (
        <div className="px-6 pb-4">
          <p className="text-sm leading-relaxed text-mn-muted">{answer}</p>
        </div>
      )}
    </div>
  );
}
