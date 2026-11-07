"use client";

import { DentalClinic } from "@/data/clinics";
import Image from "next/image";
import { Check, Award, ArrowRight } from "lucide-react";
import RevealOnScroll from "@/components/RevealOnScroll";

interface AboutSectionProps {
  clinic: DentalClinic;
  onOpenBooking: () => void;
}

export default function AboutSection({ clinic, onOpenBooking }: AboutSectionProps) {
  return (
    <section id="about" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Dentox Heading with Inline Decorative Elements */}
          <div className="lg:col-span-7 space-y-6">
            <RevealOnScroll direction="up">
              {/* Subtitle badge */}
              <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#33a9b1] mb-2">
                <span className="w-6 h-0.5 bg-[#33a9b1]"></span>
                About Our Clinic
              </div>

              {/* Stylized Dentox Headline with Inline Icons */}
              <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-bold text-[#050c14] leading-[1.25] tracking-tight">
                We provide personalized,{" "}
                <span className="inline-flex items-center align-middle mx-1 px-1">
                  <Image
                    src="/dentox/images/ab-in1.png"
                    alt="Tooth"
                    width={34}
                    height={34}
                    style={{ width: "auto", height: "auto" }}
                    className="inline-block object-contain"
                  />
                </span>{" "}
                advanced dental{" "}
                <span className="inline-flex items-center align-middle mx-1 px-1">
                  <Image
                    src="/dentox/images/ab-in2.png"
                    alt="Care"
                    width={34}
                    height={34}
                    style={{ width: "auto", height: "auto" }}
                    className="inline-block object-contain"
                  />
                </span>{" "}
                care for{" "}
                <span className="inline-flex items-center align-middle mx-1 px-1">
                  <Image
                    src="/dentox/images/ab-in3.png"
                    alt="Smile"
                    width={34}
                    height={34}
                    style={{ width: "auto", height: "auto" }}
                    className="inline-block object-contain"
                  />
                </span>{" "}
                confident smiles.
              </h2>
            </RevealOnScroll>

            {/* Paragraph */}
            <RevealOnScroll direction="up" delay={100}>
              <p className="text-[#47697b] text-base sm:text-lg leading-relaxed">
                We blend state-of-the-art dental technology with gentle, patient-centered care. From routine cleanings to complex smile makeovers and dental implants, our board-certified specialists guarantee a stress-free, pain-free dental journey.
              </p>
            </RevealOnScroll>

            {/* Feature Checkmarks in 2 Columns */}
            <RevealOnScroll direction="up" delay={200}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#33a9b1]/15 text-[#33a9b1] flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4" />
                  </span>
                  <span className="text-sm font-semibold text-[#050c14]">Latest Dental Laser & 3D Imaging</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#33a9b1]/15 text-[#33a9b1] flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4" />
                  </span>
                  <span className="text-sm font-semibold text-[#050c14]">Experienced & Caring Specialists</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#33a9b1]/15 text-[#33a9b1] flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4" />
                  </span>
                  <span className="text-sm font-semibold text-[#050c14]">100% Pain-Free Treatment Protocols</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#33a9b1]/15 text-[#33a9b1] flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4" />
                  </span>
                  <span className="text-sm font-semibold text-[#050c14]">Full Hospital-Grade Sterilization</span>
                </div>
              </div>
            </RevealOnScroll>

            {/* Experience Counter Bar */}
            <RevealOnScroll direction="up" delay={300}>
              <div className="pt-6 border-t border-[#d8dde1] flex flex-wrap items-center gap-8">
                <div className="flex items-center gap-4">
                  <div className="text-4xl sm:text-5xl font-bold text-[#33a9b1]">12+</div>
                  <div>
                    <h4 className="text-sm font-bold text-[#050c14] uppercase tracking-wide">Years of Excellence</h4>
                    <p className="text-xs text-[#47697b]">Health Regained & Confident Smiles</p>
                  </div>
                </div>

                <button
                  onClick={onOpenBooking}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#050c14] hover:bg-[#33a9b1] text-white text-xs sm:text-sm font-semibold transition-all duration-300 ml-auto"
                >
                  <span>Learn More About Us</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </RevealOnScroll>
          </div>

          {/* Right Column: Layered About Image with Floating Certificate Badge */}
          <div className="lg:col-span-5 relative">
            <RevealOnScroll direction="left" delay={200}>
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                  <Image
                    src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=85"
                    alt="Dentique Modern Dental Clinic"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                </div>

                {/* Floating Award / Accreditation Card */}
                <div className="absolute -bottom-6 -left-6 sm:bottom-6 sm:-left-8 bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl shadow-xl border border-[#d8dde1] flex items-center gap-4 max-w-xs animate-float">
                  <div className="w-12 h-12 rounded-xl bg-[#33a9b1] text-white flex items-center justify-center shrink-0">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#050c14]">ISO Certified Clinic</h4>
                    <p className="text-xs text-[#47697b] mt-0.5">Top-tier sterilization & modern patient protocols</p>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>

        </div>
      </div>
    </section>
  );
}
