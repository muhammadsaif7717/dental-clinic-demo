"use client";

import { DentalClinic } from "@/data/clinics";
import {
  Calendar,
  ArrowRight,
  ShieldCheck,
  Star,
  ChevronLeft,
  ChevronRight,
  Check,
  Sparkles,
} from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

interface HeroProps {
  clinic: DentalClinic;
  onOpenBooking: () => void;
}

const HERO_SLIDES = [
  {
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=2000&q=85",
    badge: "Board Certified in Periodontology & Implantology",
    titlePart1: "Modern Dental Care for ",
    titleHighlight: "Confident",
    titlePart2: " Smiles.",
    description:
      "Stay ahead with regular checks, 3D digital diagnosis, and gentle care for lifelong wellness. Experience advanced dental treatments designed for maximum comfort, precision, and pain-free care.",
    statNumber: "15+",
    statLabel: "Years Clinical Excellence",
  },
  {
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=2000&q=85",
    badge: "Advanced Cosmetic & Aesthetic Dentistry",
    titlePart1: "Exceptional Smiles for ",
    titleHighlight: "All Ages",
    titlePart2: " & Families.",
    description:
      "Restore your natural radiance with custom porcelain veneers, laser teeth whitening, and precision smile design created by certified orthodontic specialists.",
    statNumber: "99.8%",
    statLabel: "Patient Satisfaction Rate",
  },
  {
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=2000&q=85",
    badge: "Minimally Invasive Laser Dentistry",
    titlePart1: "Transform Your Smile With ",
    titleHighlight: "Pain-Free",
    titlePart2: " Precision.",
    description:
      "Ultra-low radiation 3D CBCT digital imaging, computer-guided dental implants, and anxiety-free sedation dentistry for a completely stress-free clinical visit.",
    statNumber: "100%",
    statLabel: "Sterile Hospital Grade Protocol",
  },
];

export default function Hero({ clinic, onOpenBooking }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  // Auto-advance slides every 6 seconds when not hovered
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  const slide = HERO_SLIDES[currentSlide];

  return (
    <section
      className="relative min-h-[660px] sm:min-h-[720px] lg:min-h-[800px] flex items-center bg-[#f4f9f9] text-[#050c14] overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Slides: Clean, bright, sunlit dental clinic imagery */}
      {HERO_SLIDES.map((s, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentSlide
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <Image
            src={s.image}
            alt={s.badge}
            fill
            sizes="100vw"
            priority={idx === 0}
            className="object-cover object-center lg:object-right scale-100 transition-transform duration-[6000ms] ease-out will-change-transform"
          />

          {/* Gentle, light-themed readability gradient on the left side so text is crystal clear while keeping the photo 100% bright & natural */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#f4f9f9] via-[#f4f9f9]/92 to-transparent lg:w-[65%]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#f4f9f9] via-transparent to-transparent lg:hidden" />
        </div>
      ))}

      {/* Subtle Ambient Teal Glow in the background */}
      <div className="absolute top-1/4 left-10 w-[450px] h-[450px] bg-[#33a9b1]/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Hero Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Main Hero Copy (8 cols) */}
          <div className="lg:col-span-8 space-y-6 sm:space-y-7">
            
            {/* Subtitle badge with live pulse indicator */}
            <div className="inline-flex items-center gap-2.5 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full border border-[#33a9b1]/30 shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#33a9b1] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#33a9b1]"></span>
              </span>
              <span className="text-xs sm:text-sm font-bold tracking-wide text-[#228087] uppercase">
                {slide.badge}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#050c14] leading-[1.14]">
              {slide.titlePart1}
              <span className="text-[#33a9b1] inline-block relative drop-shadow-xs">
                {slide.titleHighlight}
              </span>
              {slide.titlePart2}
            </h1>

            {/* Subtitle / Paragraph */}
            <p className="text-[#47697b] text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              {slide.description}
            </p>

            {/* Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1 text-sm sm:text-base text-[#050c14] font-medium">
              <div className="flex items-center gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#33a9b1] flex items-center justify-center text-white shrink-0 shadow-xs">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </span>
                <span>100% Pain-Free Digital Dentistry</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#33a9b1] flex items-center justify-center text-white shrink-0 shadow-xs">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </span>
                <span>Certified Periodontists & Surgeons</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#33a9b1] hover:bg-[#288c93] active:scale-[0.98] text-white font-bold text-sm sm:text-base shadow-[0_8px_25px_rgba(51,169,177,0.35)] hover:shadow-[0_12px_30px_rgba(51,169,177,0.5)] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#33a9b1] cursor-pointer"
              >
                <Calendar className="w-5 h-5" />
                <span>Make Appointment</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white hover:bg-[#eef6f6] active:scale-[0.98] text-[#050c14] hover:text-[#33a9b1] font-semibold text-sm sm:text-base border border-[#d8dde1] hover:border-[#33a9b1] transition-all duration-300 shadow-xs cursor-pointer"
              >
                Explore Services
              </a>
            </div>

            {/* Social Proof / Trust Badge */}
            <div className="pt-2 flex items-center gap-4 sm:gap-6">
              <div className="flex -space-x-2.5 overflow-hidden">
                <div className="relative inline-block h-10 w-10 rounded-full ring-2 ring-white overflow-hidden bg-slate-100 shadow-sm">
                  <Image
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80"
                    alt="Patient Reviewer"
                    fill
                    sizes="40px"
                    className="object-cover"
                  />
                </div>
                <div className="relative inline-block h-10 w-10 rounded-full ring-2 ring-white overflow-hidden bg-slate-100 shadow-sm">
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80"
                    alt="Patient Reviewer"
                    fill
                    sizes="40px"
                    className="object-cover"
                  />
                </div>
                <div className="relative inline-block h-10 w-10 rounded-full ring-2 ring-white overflow-hidden bg-slate-100 shadow-sm">
                  <Image
                    src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&q=80"
                    alt="Patient Reviewer"
                    fill
                    sizes="40px"
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="text-xs sm:text-sm">
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                  <span className="font-bold text-[#050c14] ml-1.5">4.9/5</span>
                </div>
                <p className="text-[#47697b] font-medium">Over 12,000+ happy smiles treated</p>
              </div>
            </div>

          </div>

          {/* Right Floating Trust Highlights (4 cols) */}
          <div className="hidden lg:flex lg:col-span-4 flex-col gap-5 items-end justify-center">
            {/* Experience Card */}
            <div className="bg-white/95 backdrop-blur-xl p-6 rounded-3xl border border-[#d8dde1] max-w-xs shadow-xl transition-transform hover:-translate-y-1 duration-300">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 rounded-2xl bg-[#33a9b1] text-white flex items-center justify-center font-bold text-xl shadow-md">
                  15+
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#050c14]">Years Experience</h4>
                  <p className="text-xs text-[#228087] font-semibold">Clinical Care Excellence</p>
                </div>
              </div>
              <p className="text-xs text-[#47697b] leading-relaxed">
                State-of-the-art sterile surgical suites and painless micro-dentistry technology.
              </p>
            </div>

            {/* Satisfaction Card */}
            <div className="bg-white/95 backdrop-blur-xl p-5 rounded-2xl border border-[#d8dde1] max-w-xs shadow-xl flex items-center gap-4 transition-transform hover:-translate-y-1 duration-300">
              <div className="w-10 h-10 rounded-full bg-[#33a9b1]/15 text-[#33a9b1] flex items-center justify-center shrink-0 border border-[#33a9b1]/30">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h5 className="text-sm font-bold text-[#050c14]">99.8% Patient Comfort</h5>
                <p className="text-xs text-[#228087] font-medium">Zero pain guarantee</p>
              </div>
            </div>
          </div>

        </div>

        {/* Clean, Light-Themed Integrated Bottom Slider Controls */}
        <div className="pt-10 sm:pt-14 flex items-center justify-between border-t border-[#d8dde1]">
          
          {/* Slide Indicator & Counter */}
          <div className="flex items-center gap-4 bg-white px-5 py-2.5 rounded-full border border-[#d8dde1] shadow-sm">
            <span className="text-xs font-mono font-bold tracking-wider text-[#33a9b1]">
              0{currentSlide + 1} <span className="text-slate-400">/</span> 0{HERO_SLIDES.length}
            </span>
            <div className="h-3 w-px bg-[#d8dde1]" />
            <div className="flex items-center gap-2">
              {HERO_SLIDES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    i === currentSlide
                      ? "w-8 bg-[#33a9b1] shadow-[0_0_8px_rgba(51,169,177,0.5)]"
                      : "w-2.5 bg-slate-300 hover:bg-slate-400"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-2 bg-white p-1.5 rounded-full border border-[#d8dde1] shadow-sm">
            <button
              onClick={prevSlide}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#f5f7fa] hover:bg-[#33a9b1] text-[#050c14] hover:text-white flex items-center justify-center transition-all duration-200 active:scale-95 cursor-pointer"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#f5f7fa] hover:bg-[#33a9b1] text-[#050c14] hover:text-white flex items-center justify-center transition-all duration-200 active:scale-95 cursor-pointer"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
