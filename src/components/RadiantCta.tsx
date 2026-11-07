"use client";

import Image from "next/image";
import { ArrowRight, Phone, Calendar, Star } from "lucide-react";
import { DentalClinic } from "@/data/clinics";
import RevealOnScroll from "@/components/RevealOnScroll";

interface RadiantCtaProps {
  clinic: DentalClinic;
  onOpenBooking: () => void;
}

export default function RadiantCta({ clinic, onOpenBooking }: RadiantCtaProps) {
  return (
    <section className="py-16 sm:py-24 bg-[#dee8de]/50 relative overflow-hidden">
      {/* Decorative shape */}
      <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-25 pointer-events-none">
        <Image
          src="/dentox/images/cta-sh.png"
          alt="CTA background graphic"
          fill
          sizes="33vw"
          className="object-contain object-right"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <RevealOnScroll direction="up">
          <div className="bg-[#1f3d3f] text-white rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl border border-[#2d5254]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: 4.9K Rating & Patient avatars */}
              <div className="lg:col-span-5 flex items-center gap-5 sm:gap-6">
                <div className="flex -space-x-3 overflow-hidden shrink-0">
                  <div className="relative inline-block h-14 w-14 rounded-full ring-2 ring-[#33a9b1] overflow-hidden bg-slate-800 shadow-md">
                    <Image
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
                      alt="Happy Dental Patient"
                      fill
                      sizes="56px"
                      className="object-cover"
                    />
                  </div>
                  <div className="relative inline-block h-14 w-14 rounded-full ring-2 ring-[#33a9b1] overflow-hidden bg-slate-800 shadow-md">
                    <Image
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
                      alt="Happy Dental Patient"
                      fill
                      sizes="56px"
                      className="object-cover"
                    />
                  </div>
                  <div className="relative inline-block h-14 w-14 rounded-full ring-2 ring-[#33a9b1] overflow-hidden bg-slate-800 shadow-md">
                    <Image
                      src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80"
                      alt="Happy Dental Patient"
                      fill
                      sizes="56px"
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                    4.9K+
                  </h3>
                  <p className="text-xs sm:text-sm text-[#dee8de]">
                    Friendly dentists you can truly call friends
                  </p>
                </div>
              </div>

              {/* Right Column: Title & Booking Buttons */}
              <div className="lg:col-span-7 space-y-5">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight">
                  We can help you maintain a radiant, confident smile.
                </h2>
                <p className="text-[#dee8de]/90 text-sm sm:text-base max-w-xl leading-relaxed">
                  Whether you need a quick dental cleaning, painless root canal, or emergency toothache relief, we are ready to assist you today.
                </p>
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <button
                    onClick={onOpenBooking}
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#33a9b1] hover:bg-[#288c93] active:scale-[0.98] text-white font-semibold text-sm shadow-md transition-all duration-300"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Book Consultation</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <a
                    href={`tel:${clinic.phone.replace(/[^0-9+]/g, "")}`}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white hover:text-[#050c14] active:scale-[0.98] text-white font-semibold text-sm backdrop-blur-md border border-white/20 transition-all duration-300"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call {clinic.phone || "(208) 555-0112"}</span>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
