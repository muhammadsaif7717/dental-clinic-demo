"use client";

import { useState } from "react";
import Image from "next/image";
import { Plus, Minus, PhoneCall } from "lucide-react";
import RevealOnScroll from "@/components/RevealOnScroll";

const FAQS = [
  {
    q: "How often should I visit the dentist for a checkup?",
    a: "We recommend visiting every 6 months for a comprehensive clinical exam and professional cleaning. Regular visits catch minor issues before they become painful, expensive dental problems.",
  },
  {
    q: "Is dental treatment painful at Dentique clinic?",
    a: "Not at all. We utilize modern computerized local anesthesia, micro-invasive rotary tools, and gentle techniques. Most procedures, including root canals and dental implants, are virtually sensation-free.",
  },
  {
    q: "What is the difference between dental plaque and tartar?",
    a: "Plaque is a soft, sticky film of bacteria that forms on teeth and can be removed with brushing. If not cleaned, it calcifies into hard tartar (calculus), which requires professional ultrasonic dental scaling.",
  },
  {
    q: "How long does professional teeth whitening last?",
    a: "Our clinical in-chair laser whitening typically maintains brilliant radiance for 1 to 3 years, depending on dietary habits (coffee, tea, smoking) and daily oral hygiene routines.",
  },
  {
    q: "Are dental implants permanent?",
    a: "Yes! High-grade titanium and zirconia implants fuse directly with your jawbone (osseointegration) and are designed to last a lifetime with normal brushing, flossing, and periodic checkups.",
  },
  {
    q: "Do you accept emergency dental walk-ins on weekends?",
    a: "Yes, our emergency dental team is on duty 7 days a week for acute toothache relief, broken crowns, dental trauma, and knocked-out teeth.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-[#f5f7fa] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image with Helpline Badge */}
          <div className="lg:col-span-5 relative">
            <RevealOnScroll direction="right">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100">
                  <Image
                    src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=85"
                    alt="Dentist patient discussion"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                </div>

                {/* Floating emergency hotline card */}
                <div className="absolute -bottom-6 -right-4 sm:bottom-6 sm:-right-6 bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-xl border border-[#d8dde1] flex items-center gap-4 max-w-xs animate-float">
                  <div className="w-12 h-12 rounded-full bg-[#33a9b1] text-white flex items-center justify-center shrink-0">
                    <PhoneCall className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-[#47697b] block font-medium">Have more questions?</span>
                    <h4 className="text-sm font-bold text-[#050c14]">(208) 555-0112</h4>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>

          {/* Right Column: FAQ Accordion */}
          <div className="lg:col-span-7 space-y-6">
            <RevealOnScroll direction="left">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#33a9b1]">
                  <span className="w-6 h-0.5 bg-[#33a9b1]"></span>
                  Common Questions From Patients
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#050c14] tracking-tight">
                  Frequently Asked Questions
                </h2>
                <p className="text-[#47697b] text-sm sm:text-base leading-relaxed">
                  Find quick answers to common questions about dental procedures, appointments, and recovery.
                </p>
              </div>

              {/* Accordion Items */}
              <div className="space-y-3.5 pt-4">
                {FAQS.map((faq, idx) => {
                  const isOpen = openIndex === idx;
                  return (
                    <div
                      key={idx}
                      className={`rounded-2xl transition-all duration-200 border ${
                        isOpen
                          ? "bg-white border-[#33a9b1] shadow-lg ring-1 ring-[#33a9b1]/20"
                          : "bg-white/90 border-[#d8dde1] hover:border-[#33a9b1]/60"
                      }`}
                    >
                      <button
                        onClick={() => toggle(idx)}
                        className="w-full py-4 sm:py-5 px-6 flex items-center justify-between text-left gap-4 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#33a9b1] rounded-2xl"
                        aria-expanded={isOpen}
                      >
                        <span className="text-base sm:text-lg font-bold text-[#050c14]">
                          {faq.q}
                        </span>
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                            isOpen
                              ? "bg-[#33a9b1] text-white"
                              : "bg-[#f5f7fa] text-[#050c14]"
                          }`}
                        >
                          {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                        </div>
                      </button>

                      {isOpen && (
                        <div className="px-6 pb-5 pt-1 text-sm text-[#47697b] leading-relaxed border-t border-[#d8dde1]/50 animate-slide-up">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </RevealOnScroll>
          </div>

        </div>
      </div>
    </section>
  );
}
