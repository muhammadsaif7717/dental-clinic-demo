"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { ArrowLeftRight, CheckCircle2, Calendar } from "lucide-react";
import RevealOnScroll from "@/components/RevealOnScroll";

interface BeforeAfterSectionProps {
  onOpenBooking: () => void;
}

const CASES = [
  {
    title: "Protection Gum Treatment & Smile Realignment",
    category: "Cosmetic & Orthodontics",
    description: "Complete aesthetic correction eliminating dental staining, crooked bite, and uneven gumlines in 4 weeks.",
    beforeImg: "/dentox/images/before1.jpg",
    afterImg: "/dentox/images/after1.jpg",
    result: "100% Symmetrical Smile",
  },
  {
    title: "Full Arch Porcelain Veneers & Teeth Whitening",
    category: "Smile Makeover",
    description: "Advanced porcelain shell veneers applied over discolored, chipped enamel restoring radiant pearly white confidence.",
    beforeImg: "/dentox/images/before1.jpg",
    afterImg: "/dentox/images/after2.jpg",
    result: "8 Shades Whiter Enamel",
  },
];

export default function BeforeAfterSection({ onOpenBooking }: BeforeAfterSectionProps) {
  const [sliderPosition, setSliderPosition] = useState<number>(50); // percentage 0 - 100
  const [activeCaseIdx, setActiveCaseIdx] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const activeCase = CASES[activeCaseIdx];

  const handleSliderMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percent);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleSliderMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (e.buttons === 1) {
      handleSliderMove(e.clientX);
    }
  };

  return (
    <section id="transformations" className="py-20 sm:py-28 bg-[#050c14] text-white relative overflow-hidden">
      {/* Background overlay with project-bg.jpg */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <Image
          src="/dentox/images/project-bg.jpg"
          alt="Dental Background"
          fill
          className="object-cover"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <RevealOnScroll direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#33a9b1]">
                <span className="w-6 h-0.5 bg-[#33a9b1]"></span>
                Transforming Smiles
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                Transforming Smiles with Precision & Care.
              </h2>
            </div>
            <p className="text-white/70 max-w-md text-sm sm:text-base leading-relaxed">
              Drag the interactive slider below to inspect actual patient results before and after specialized aesthetic treatments.
            </p>
          </div>
        </RevealOnScroll>

        {/* Case Switcher Tabs */}
        <div className="flex items-center gap-3 mb-8">
          {CASES.map((c, i) => (
            <button
              key={i}
              onClick={() => {
                setActiveCaseIdx(i);
                setSliderPosition(50);
              }}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                i === activeCaseIdx
                  ? "bg-[#33a9b1] text-white shadow-lg scale-105"
                  : "bg-white/10 text-white/80 hover:bg-white/20"
              }`}
            >
              Case 0{i + 1}: {c.category}
            </button>
          ))}
        </div>

        {/* Interactive Before & After Comparator Card with Reveal */}
        <RevealOnScroll direction="up" delay={150}>
          <div className="bg-[#121c27] rounded-3xl p-6 sm:p-8 lg:p-10 border border-white/10 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left: The Before & After Interactive Image Slider */}
              <div className="lg:col-span-7">
                <div
                  ref={containerRef}
                  onClick={(e) => handleSliderMove(e.clientX)}
                  onMouseMove={handleMouseMove}
                  onTouchStart={(e) => handleSliderMove(e.touches[0].clientX)}
                  onTouchMove={handleTouchMove}
                  className="relative aspect-[16/11] sm:aspect-[16/10] rounded-2xl overflow-hidden select-none cursor-ew-resize bg-black shadow-inner touch-none border border-white/10"
                >
                  {/* AFTER Image (Full background) */}
                  <Image
                    src={activeCase.afterImg}
                    alt="After Treatment Smile"
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover"
                  />
                  <span className="absolute top-4 right-4 bg-emerald-500/90 text-white text-xs font-bold px-3 py-1.5 rounded-full z-10 backdrop-blur-xs shadow-sm">
                    AFTER
                  </span>

                  {/* BEFORE Image (Clipped overlay) */}
                  <div
                    className="absolute inset-0 overflow-hidden"
                    style={{ width: `${sliderPosition}%` }}
                  >
                    <div className="relative w-full h-full min-w-[280px] sm:min-w-[500px] md:min-w-[650px] aspect-[16/11] sm:aspect-[16/10]">
                      <Image
                        src={activeCase.beforeImg}
                        alt="Before Treatment Smile"
                        fill
                        sizes="(max-width: 1024px) 100vw, 60vw"
                        className="object-cover"
                      />
                    </div>
                    <span className="absolute top-4 left-4 bg-red-500/90 text-white text-xs font-bold px-3 py-1.5 rounded-full z-10 backdrop-blur-xs shadow-sm">
                      BEFORE
                    </span>
                  </div>

                  {/* Draggable Divider Handle Line */}
                  <div
                    className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20 shadow-[0_0_12px_rgba(0,0,0,0.8)]"
                    style={{ left: `${sliderPosition}%` }}
                  >
                    {/* Handle Button Icon */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#33a9b1] text-white flex items-center justify-center shadow-2xl border-2 border-white hover:scale-110 transition-transform">
                      <ArrowLeftRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Interaction Hint */}
                <p className="text-xs text-white/50 text-center mt-3">
                  ← Drag the circular icon left or right to compare Before & After →
                </p>
              </div>

              {/* Right: Case Details & CTA */}
              <div className="lg:col-span-5 space-y-6">
                <div className="inline-block bg-[#33a9b1]/20 text-[#33a9b1] text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
                  {activeCase.category}
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white leading-snug">
                  {activeCase.title}
                </h3>

                <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                  {activeCase.description}
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#33a9b1] text-white flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-4 h-4" />
                    </span>
                    <span className="text-sm font-semibold text-white">Result: {activeCase.result}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#33a9b1] text-white flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-4 h-4" />
                    </span>
                    <span className="text-sm font-semibold text-white">Full Natural Function & Bite Restored</span>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    onClick={onOpenBooking}
                    className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-[#33a9b1] hover:bg-[#288c93] active:scale-[0.98] text-white font-semibold text-sm shadow-md transition-all duration-300"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Book Smile Consultation</span>
                  </button>
                </div>
              </div>

            </div>
          </div>
        </RevealOnScroll>

      </div>
    </section>
  );
}
