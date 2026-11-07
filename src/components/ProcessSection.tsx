"use client";

import Image from "next/image";
import RevealOnScroll from "@/components/RevealOnScroll";

const PROCESS_STEPS = [
  {
    step: "01",
    icon: "/dentox/images/prc1.png",
    title: "Book an Appointment",
    desc: "Schedule your visit easily online or phone at a time that seamlessly fits your busy schedule.",
  },
  {
    step: "02",
    icon: "/dentox/images/prc2.png",
    title: "Consultation & Diagnosis",
    desc: "Comprehensive oral examination, digital 3D scans, and a transparent explanation of your options.",
  },
  {
    step: "03",
    icon: "/dentox/images/prc3.png",
    title: "Personalized Treatment",
    desc: "Gentle, stress-free clinical care utilizing modern painless anesthesia and laser technology.",
  },
  {
    step: "04",
    icon: "/dentox/images/prc4.png",
    title: "Ongoing Care & Follow-Up",
    desc: "Detailed post-procedure guidelines, recovery checkups, and routine preventive smile maintenance.",
  },
];

export default function ProcessSection() {
  return (
    <section className="py-20 sm:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <RevealOnScroll direction="up">
          <div className="max-w-3xl mb-14 sm:mb-20 text-center sm:text-left">
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#33a9b1] mb-2">
              <span className="w-6 h-0.5 bg-[#33a9b1]"></span>
              Our Work Process
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#050c14] tracking-tight">
              Empowering you on the journey to dentistry.
            </h2>
          </div>
        </RevealOnScroll>

        {/* 4 Steps Grid with Staggered Scroll Reveal */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {PROCESS_STEPS.map((item, idx) => (
            <RevealOnScroll
              key={idx}
              direction="up"
              delay={idx * 120}
              className="h-full"
            >
              <div className="group relative bg-[#f5f7fa] hover:bg-white rounded-3xl p-8 border border-[#d8dde1] hover:border-[#33a9b1] hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full card-hover-lift">
                <div>
                  {/* Top Step Row: Icon + Number */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-white group-hover:bg-[#33a9b1]/10 flex items-center justify-center p-3 border border-[#d8dde1] transition-all">
                      <div className="relative w-full h-full">
                        <Image
                          src={item.icon}
                          alt={item.title}
                          fill
                          sizes="56px"
                          className="object-contain"
                        />
                      </div>
                    </div>
                    <span className="text-3xl font-extrabold text-[#33a9b1]/30 group-hover:text-[#33a9b1] transition-colors">
                      {item.step}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#050c14] group-hover:text-[#33a9b1] transition-colors mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#47697b] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Bottom decorative connector */}
                <div className="mt-6 pt-4 border-t border-[#d8dde1]/50 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#33a9b1]"></span>
                  <span className="text-xs font-semibold text-[#47697b] uppercase tracking-wider">
                    Step {item.step} of 04
                  </span>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

      </div>
    </section>
  );
}
