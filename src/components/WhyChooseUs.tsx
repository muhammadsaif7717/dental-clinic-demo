"use client";

import { DentalClinic } from "@/data/clinics";
import { Check, ShieldCheck, Clock } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import RevealOnScroll from "@/components/RevealOnScroll";

interface WhyChooseUsProps {
  clinic?: DentalClinic;
}

const CHOOSE_TABS = [
  {
    id: "checkup",
    label: "Dental Checkup",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1000&q=80",
    title: "Comprehensive Dental Checkup & Digital Scan",
    description:
      "Routine oral health examinations, 3D digital imaging, and prophylactic care designed to identify issues before they cause discomfort.",
    points: [
      "High-definition intraoral camera and instant X-ray diagnostics",
      "Early cavity detection and preventive fluoride applications",
      "Personalized gum health and periodontal screening",
      "Transparent recommendations with zero unnecessary treatments",
    ],
  },
  {
    id: "root-canal",
    label: "Root Canal",
    image: "https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=1000&q=80",
    title: "Painless Rotary Root Canal Therapy",
    description:
      "Save your natural tooth with our micro-endodontic rotary systems, providing rapid relief from severe toothaches in 1-2 smooth visits.",
    points: [
      "100% painless computerized local anesthesia",
      "Apex locator precision for complete root disinfection",
      "Biocompatible hermetic seal preventing reinfection",
      "High-strength porcelain or zirconia dental crowns",
    ],
  },
  {
    id: "cleaning",
    label: "Dental Cleaning",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1000&q=80",
    title: "Ultrasonic Scaling & Deep Stain Polishing",
    description:
      "Gentle ultrasonic calculus removal eliminating tartar, tea/coffee stains, and bad breath for a fresher, brighter smile.",
    points: [
      "Non-abrasive ultrasonic scaler for tooth enamel safety",
      "Air-flow polishing for brilliant stain elimination",
      "Enamel remineralization & protective sealants",
      "Leaves teeth feeling smooth, clean, and refreshed",
    ],
  },
  {
    id: "implants",
    label: "Dental Implants",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=80",
    title: "Permanent Titanium & Zirconia Dental Implants",
    description:
      "The gold standard for missing teeth replacement. Looks, feels, and functions exactly like your natural healthy teeth for a lifetime.",
    points: [
      "Computer-guided 3D virtual implant placement",
      "Bio-integrated titanium fixtures with 98.7% success rate",
      "Same-day temporary crowns available for immediate aesthetics",
      "Full bite force restored with natural chewing comfort",
    ],
  },
];

export default function WhyChooseUs({ clinic }: WhyChooseUsProps) {
  const [activeTab, setActiveTab] = useState(0);
  const current = CHOOSE_TABS[activeTab];

  return (
    <section id="choose-us" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <RevealOnScroll direction="up">
          <div className="max-w-3xl mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#33a9b1] mb-2">
              <span className="w-6 h-0.5 bg-[#33a9b1]"></span>
              Why Choose Us
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#050c14] tracking-tight">
              Professionals and Personalized Dental Excellence
            </h2>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image with Decorative Shape */}
          <div className="lg:col-span-6 relative">
            <RevealOnScroll direction="right" delay={100}>
              <div className="relative mx-auto max-w-lg">
                {/* Tooth shape background glow */}
                <div className="absolute -top-10 -left-10 w-48 h-48 opacity-20 pointer-events-none">
                  <Image
                    src="/dentox/images/teath-sh.png"
                    alt="Tooth shape"
                    width={180}
                    height={180}
                    style={{ width: "auto", height: "auto" }}
                    className="object-contain"
                  />
                </div>

                {/* Main Tab Image */}
                <div className="relative aspect-[4/3] sm:aspect-[16/11] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100">
                  <Image
                    src={current.image}
                    alt={current.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-all duration-500"
                  />
                </div>

                {/* Floating trust card */}
                <div className="absolute -bottom-6 -right-4 sm:bottom-4 sm:-right-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-[#d8dde1] flex items-center gap-3 animate-float">
                  <div className="w-10 h-10 rounded-full bg-[#33a9b1] text-white flex items-center justify-center font-bold text-sm">
                    ✓
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#050c14]">Painless Standard</h4>
                    <p className="text-xs text-[#47697b]">Zero discomfort guarantee</p>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>

          {/* Right Column: Tab Controls & Content */}
          <div className="lg:col-span-6 space-y-6">
            <RevealOnScroll direction="left" delay={200}>
              {/* Tab Pill Buttons */}
              <div className="flex flex-wrap gap-2 pb-2 border-b border-[#d8dde1]">
                {CHOOSE_TABS.map((tab, idx) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(idx)}
                    className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                      idx === activeTab
                        ? "bg-[#33a9b1] text-white shadow-md scale-105"
                        : "bg-[#f5f7fa] text-[#050c14] hover:bg-[#dee8de]/60"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Tab Detailed Content */}
              <div className="space-y-4 pt-3">
                <h3 className="text-xl sm:text-2xl font-bold text-[#050c14] transition-all">
                  {current.title}
                </h3>
                <p className="text-[#47697b] text-sm sm:text-base leading-relaxed">
                  {current.description}
                </p>

                {/* Bullet Checklist */}
                <div className="space-y-3 pt-2">
                  {current.points.map((pt, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-[#33a9b1]/15 text-[#33a9b1] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" />
                      </span>
                      <span className="text-sm font-medium text-[#050c14]">{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer Highlights */}
              <div className="pt-6 grid grid-cols-2 gap-4 border-t border-[#d8dde1]/80">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-[#33a9b1]" />
                  <span className="text-xs font-semibold text-[#050c14]">100% Autoclaved Sterilization</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-[#33a9b1]" />
                  <span className="text-xs font-semibold text-[#050c14]">Flexible Weekend Slots</span>
                </div>
              </div>
            </RevealOnScroll>
          </div>

        </div>
      </div>
    </section>
  );
}
