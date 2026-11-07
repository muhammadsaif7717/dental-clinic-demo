"use client";

import { DentalClinic } from "@/data/clinics";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import RevealOnScroll from "@/components/RevealOnScroll";

interface ReviewsSectionProps {
  clinic: DentalClinic;
}

const TESTIMONIALS = [
  {
    name: "Rafael Rafe",
    role: "UI/UX Designer",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
    comment:
      "I came in for dental implants after years of hiding my smile. The results are amazing, and the entire process was smooth and pain-free. Highly recommend this clinic if you’re serious about getting your confidence back.",
    treatment: "Dental Implants & Zirconia Crown",
    date: "2 weeks ago",
  },
  {
    name: "Adams Smith",
    role: "Senior Architect",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
    comment:
      "Professional, gentle, and incredibly thorough. From my first laser cleaning to a cosmetic whitening session, every experience has been outstanding. I wouldn’t trust any other clinic with my family's teeth!",
    treatment: "Teeth Whitening & Laser Care",
    date: "1 month ago",
  },
  {
    name: "Sarah Jenkins",
    role: "Healthcare Manager",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
    comment:
      "I used to have severe dental phobia. Dr. Michael and his team completely changed my mindset. The computerized anesthesia was literally imperceptible and my root canal was 100% painless.",
    treatment: "Painless Root Canal Therapy",
    date: "3 weeks ago",
  },
  {
    name: "David Miller",
    role: "Creative Director",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80",
    comment:
      "The porcelain veneers look so natural! My colleagues kept complimenting my smile without even realizing I had cosmetic dentistry done. Truly artistic perfection.",
    treatment: "Porcelain Veneers & Smile Design",
    date: "Just recently",
  },
];

export default function ReviewsSection({ clinic }: ReviewsSectionProps) {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section id="reviews" className="py-20 sm:py-28 bg-[#f5f7fa] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <RevealOnScroll direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#33a9b1]">
                <span className="w-6 h-0.5 bg-[#33a9b1]"></span>
                Patient Stories
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#050c14] tracking-tight">
                What Our Happy Patients Say
              </h2>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setActiveIdx((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
                className="w-11 h-11 rounded-full bg-white hover:bg-[#33a9b1] hover:text-white text-[#050c14] flex items-center justify-center border border-[#d8dde1] shadow-xs transition-all"
                aria-label="Previous review"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => setActiveIdx((prev) => (prev + 1) % TESTIMONIALS.length)}
                className="w-11 h-11 rounded-full bg-white hover:bg-[#33a9b1] hover:text-white text-[#050c14] flex items-center justify-center border border-[#d8dde1] shadow-xs transition-all"
                aria-label="Next review"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </RevealOnScroll>

        {/* Testimonials Grid with Staggered Scroll Reveal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <RevealOnScroll
              key={idx}
              direction="up"
              delay={idx * 100}
              className="h-full"
            >
              <div
                className={`bg-white rounded-3xl p-7 border transition-all duration-300 flex flex-col justify-between h-full card-hover-lift ${
                  idx === activeIdx
                    ? "border-[#33a9b1] shadow-xl ring-2 ring-[#33a9b1]/15"
                    : "border-[#d8dde1] hover:shadow-md hover:border-[#33a9b1]/50"
                }`}
              >
                <div>
                  {/* Rating Stars & Quote Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <div className="w-8 h-8 rounded-full bg-[#f5f7fa] flex items-center justify-center text-[#33a9b1]">
                      <Quote className="w-4 h-4" />
                    </div>
                  </div>

                  <p className="text-sm text-[#47697b] leading-relaxed mb-6 italic">
                    "{t.comment}"
                  </p>
                </div>

                {/* Reviewer Details */}
                <div className="pt-4 border-t border-[#d8dde1]/60 flex items-center gap-3.5">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 border border-[#d8dde1] bg-slate-100">
                    <Image
                      src={t.avatar}
                      alt={t.name}
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#050c14]">{t.name}</h4>
                    <p className="text-xs text-[#47697b]">{t.role}</p>
                    <span className="inline-block text-[10px] text-[#33a9b1] font-semibold mt-0.5">
                      ✓ {t.treatment}
                    </span>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

      </div>
    </section>
  );
}
