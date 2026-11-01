"use client";

import { DentalClinic } from "@/data/clinics";
import {
  Calendar,
  MessageCircle,
  ShieldCheck,
  Star,
  CheckCircle2,
  Phone,
  UserCheck,
  Clock,
  Sparkles,
} from "lucide-react";

interface HeroProps {
  clinic: DentalClinic;
  onOpenBooking: () => void;
}

export default function Hero({ clinic, onOpenBooking }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-teal-50/40 via-sky-50/20 to-white pt-8 pb-14 sm:pt-12 sm:pb-20 lg:pt-16 lg:pb-24 border-b border-slate-200/80">
      
      {/* Background Medical Pattern & Ambient Glow */}
      <div className="absolute inset-0 medical-pattern opacity-60 pointer-events-none" />
      <div className="absolute top-6 right-1/4 w-[360px] h-[360px] bg-teal-200/30 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-6 left-8 w-[320px] h-[320px] bg-sky-200/25 rounded-full blur-3xl pointer-events-none animate-pulse-glow" style={{ animationDelay: "3s" }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Text & Action Column */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 animate-slide-up">
            
            {/* Area Pill & Verification Tag */}
            <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-white text-slate-800 text-[11px] sm:text-xs font-medium border border-teal-200/80 shadow-2xs backdrop-blur-xs flex-wrap">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-slate-600 font-medium">{clinic.area}</span>
              <span className="text-teal-300">•</span>
              <span className="text-teal-800 font-semibold">{clinic.specialHighlight}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-slate-900 leading-[1.22] tracking-tight">
              {clinic.heroHeadline}
            </h1>

            {/* Sub-headline */}
            <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl font-normal">
              {clinic.heroSubheadline}
            </p>

            {/* Clinical Value Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 pt-1 text-xs sm:text-sm text-slate-700">
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <span>ব্যথামুক্ত আধুনিক রোটারি রুট ক্যানাল</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <span>ক্লাস-বি অটোক্লেভ ১০০% জীবাণুমুক্তকরণ</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <span>ইন-হাউস ডিজিটাল ওরাল এক্স-রে (RVG)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <span>ডাক্তার ফি মাত্র <strong className="text-teal-800 font-bold">{clinic.consultationFee}</strong></span>
              </div>
            </div>

            {/* Primary Action Buttons (Vercel Guidelines compliant) */}
            <div className="pt-2 sm:pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={onOpenBooking}
                className="group flex items-center justify-center gap-2 px-6 sm:px-7 py-3 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-semibold text-xs sm:text-sm transition-all duration-150 shadow-xs hover:shadow-sm active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2 min-h-[44px] cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-teal-100 transition-transform group-hover:scale-105" />
                <span>অনলাইনে সিরিয়াল বুক করুন</span>
              </button>

              <a
                href={`https://wa.me/${clinic.whatsapp}?text=${encodeURIComponent(
                  `হ্যালো, আমি ${clinic.name}-এ সরাসরি কথা বলে সিরিয়াল বুক করতে চাচ্ছি।`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-5 sm:px-6 py-3 rounded-xl border border-emerald-300 bg-emerald-50 hover:bg-emerald-100/90 text-emerald-800 font-semibold text-xs sm:text-sm transition-all duration-150 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 min-h-[44px]"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp এ সিরিয়াল</span>
              </a>

              <a
                href={`tel:${clinic.phone.replace(/[^0-9]/g, "")}`}
                className="flex items-center justify-center gap-2 px-4 sm:px-5 py-3 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 font-medium text-xs sm:text-sm transition-all duration-150 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 min-h-[44px]"
              >
                <Phone className="w-4 h-4 text-teal-600" />
                <span>কল: {clinic.phone}</span>
              </a>
            </div>

            {/* Trust Indicators Strip */}
            <div className="pt-4 sm:pt-5 flex flex-wrap items-center gap-4 sm:gap-6 border-t border-slate-200/70 text-xs text-slate-600">
              <div className="flex items-center gap-1.5">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </div>
                <span className="font-bold text-slate-900">৪.৯/৫</span>
                <span className="text-slate-500">(রোগীদের ফিডব্যাক)</span>
              </div>
              <div className="h-3.5 w-px bg-slate-300 hidden sm:block" />
              <div className="flex items-center gap-1.5">
                <UserCheck className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                <span className="font-medium text-slate-700">{clinic.doctor.bmdc}</span>
              </div>
              <div className="h-3.5 w-px bg-slate-300 hidden sm:block" />
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                <span className="font-medium text-slate-700">{clinic.hours}</span>
              </div>
            </div>

          </div>

          {/* Right Doctor & Clinical Operatory Card */}
          <div className="lg:col-span-5 relative">
            <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/90 shadow-sm transition-all duration-200 hover:shadow-md">
              
              {/* Clinical Operatory Photo */}
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl mb-4 bg-slate-100">
                <img
                  src={clinic.heroImage}
                  alt={`${clinic.name} চেম্বার`}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-103"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none" />
                
                {/* Sterilization Badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-lg bg-slate-900/90 backdrop-blur-md text-teal-300 text-[11px] font-semibold border border-white/10 flex items-center gap-1.5 shadow-xs">
                    <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
                    <span>১০০% জীবাণুমুক্ত চেম্বার</span>
                  </span>
                </div>

                {/* Status Indicator */}
                <div className="absolute top-3 right-3">
                  <span className="px-2.5 py-1 rounded-lg bg-emerald-950/90 border border-emerald-500/40 text-emerald-300 text-[11px] font-semibold flex items-center gap-1.5 backdrop-blur-md">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>সিরিয়াল চালু আছে</span>
                  </span>
                </div>

                {/* Bottom clinic name overlay */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                  <span className="text-xs font-bold text-slate-100">
                    {clinic.name}
                  </span>
                  <span className="text-[11px] text-teal-200 font-medium">
                    {clinic.area}
                  </span>
                </div>
              </div>

              {/* Doctor Quick Profile */}
              <div className="flex items-start gap-3.5 pb-4 border-b border-slate-100">
                <div className="relative shrink-0">
                  <div className="w-14 h-14 rounded-xl overflow-hidden border border-slate-200 shadow-2xs bg-slate-100">
                    <img
                      src={clinic.doctor.image}
                      alt={clinic.doctor.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white" title="Active" />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-base font-bold text-slate-900 truncate">
                      {clinic.doctor.name}
                    </h3>
                  </div>
                  <p className="text-xs font-semibold text-teal-700 truncate">
                    {clinic.doctor.specialty}
                  </p>
                  <p className="text-[11px] text-slate-500 mt-0.5 truncate">
                    {clinic.doctor.designation} • {clinic.doctor.experience}
                  </p>
                </div>
              </div>

              {/* Consultation Fee & Instant Booking Trigger */}
              <div className="pt-3.5 flex items-center justify-between gap-3">
                <div>
                  <span className="text-[10px] text-slate-500 font-medium uppercase tracking-wide block">
                    পরামর্শ ফি (Consultation)
                  </span>
                  <span className="text-base font-extrabold text-slate-900">
                    {clinic.consultationFee}
                  </span>
                </div>

                <button
                  onClick={onOpenBooking}
                  className="px-4 py-2 rounded-xl bg-teal-600 hover:bg-teal-700 active:scale-[0.98] text-white text-xs font-semibold transition-all shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 cursor-pointer min-h-[44px]"
                >
                  সিরিয়াল বুক করুন
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
