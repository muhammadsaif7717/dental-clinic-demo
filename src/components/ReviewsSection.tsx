"use client";

import { DentalClinic } from "@/data/clinics";
import { Star, CheckCircle2, MessageSquare } from "lucide-react";

interface ReviewsSectionProps {
  clinic: DentalClinic;
}

export default function ReviewsSection({ clinic }: ReviewsSectionProps) {
  return (
    <section id="reviews" className="relative py-14 sm:py-20 lg:py-24 bg-white border-b border-slate-200/80">
      
      {/* Background medical pattern */}
      <div className="absolute inset-0 medical-pattern opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-900 text-xs font-semibold border border-amber-200 mb-3 shadow-2xs">
            <MessageSquare className="w-3.5 h-3.5 text-amber-600" />
            <span>সন্তুষ্ট রোগীদের অভিজ্ঞতা</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            আমাদের চিকিৎসা নিয়ে রোগীরা কী বলছেন
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm md:text-base mt-2 leading-relaxed">
            গুগল ও প্র্যাকটিস ম্যানেজমেন্ট সিস্টেমে {clinic.name}-এর রোগীদের দেওয়া সরাসরি রিভিউ।
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-7">
          {clinic.reviews.map((rev, index) => (
            <div
              key={index}
              className="bg-slate-50/70 rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-2xs hover:shadow-md transition-all duration-200 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] text-slate-400 font-medium">
                    {rev.date || "ভেরিফাইড পেশেন্ট"}
                  </span>
                </div>

                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                  &ldquo;{rev.comment}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                    <span>{rev.name}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 inline shrink-0" />
                  </h4>
                  <p className="text-[11px] text-slate-500">{rev.area}</p>
                </div>
                <span className="text-[11px] font-semibold text-teal-800 bg-teal-50 px-2.5 py-1 rounded-full border border-teal-200">
                  {rev.treatment}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
