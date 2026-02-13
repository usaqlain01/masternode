/**
 * Testimonials.tsx — Client testimonials
 * 
 * Displays client quotes with ratings, names, and companies.
 * Includes manual navigation. Replace with real testimonials before launch.
 */

import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { SectionWrapper, SectionHeader } from "@/components/shared/section-wrapper";

export function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () =>
    setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  const testimonial = testimonials[current];

  return (
    <SectionWrapper bgEffect="mesh-1">
      <SectionHeader
        eyebrow="Client Stories"
        title="Don't Take Our Word For It."
        titleAccent="Take Theirs."
        subtitle="Hear directly from the leaders who trusted MasterNode to transform their businesses with AI."
      />

      <div className="mx-auto max-w-4xl">
        {/* Main quote card */}
        <div className="relative rounded-2xl border border-mn-slate/40 bg-mn-navy/60 p-8 md:p-12">
          {/* Quote icon */}
          <Quote className="absolute right-8 top-8 h-12 w-12 text-mn-electric/10" />

          {/* Stars */}
          <div className="mb-6 flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`h-5 w-5 ${
                  i < testimonial.rating
                    ? "fill-mn-amber text-mn-amber"
                    : "text-mn-slate"
                }`}
              />
            ))}
          </div>

          {/* Quote text */}
          <blockquote className="text-lg leading-relaxed text-mn-white md:text-xl md:leading-relaxed font-medium">
            "{testimonial.quote}"
          </blockquote>

          {/* Author */}
          <div className="mt-8 flex items-center gap-4">
            <img
              src={testimonial.avatar}
              alt={testimonial.name}
              className="h-14 w-14 rounded-full border-2 border-mn-slate/40 bg-mn-slate/20"
            />
            <div>
              <p className="font-display font-bold text-mn-white">
                {testimonial.name}
              </p>
              <p className="text-sm text-mn-muted">
                {testimonial.title}, {testimonial.company}
              </p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            onClick={prev}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-mn-slate/50 text-mn-muted transition hover:border-mn-electric/40 hover:text-mn-electric"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all ${
                  i === current
                    ? "w-8 bg-mn-electric"
                    : "w-2 bg-mn-slate/60 hover:bg-mn-slate"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-mn-slate/50 text-mn-muted transition hover:border-mn-electric/40 hover:text-mn-electric"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </SectionWrapper>
  );
}
