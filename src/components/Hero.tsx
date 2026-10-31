"use client";

import { DentalClinic } from "@/data/clinics";
import {
  Calendar,
  MessageCircle,
  ShieldCheck,
  Star,
  CheckCircle2,
  Sparkles,
  Phone,
  UserCheck,
  Activity,
  Heart,
  Plus,
} from "lucide-react";

interface HeroProps {
  clinic: DentalClinic;
  onOpenBooking: () => void;
}

export default function Hero({ clinic, onOpenBooking }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-teal-50/40 via-sky-50/30 to-white pt-10 pb-16 md:pt-16 md:pb-24 border-b border-teal-100/60">
      
      {/* Background Medical Cross Pattern & Glowing Orbs */}
      <div className="absolute inset-0 medical-pattern opacity-60 pointer-events-none" />
      <div className="absolute top-10 right-1/4 w-[420px] h-[420px] bg-teal-200/35 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-10 left-10 w-[380px] h-[380px] bg-sky-200/30 rounded-full blur-3xl pointer-events-none animate-pulse-glow" style={{ animationDelay: "2s" }} />

      {/* Subtle Floating Medical Plus Decorators */}
      <div className="absolute top-16 left-[8%] text-teal-400/30 pointer-events-none select-none animate-float hidden lg:block">
        <Plus className="w-8 h-8" />
      </div>
      <div className="absolute top-44 right-[10%] text-sky-400/25 pointer-events-none select-none animate-float-slow hidden lg:block">
        <Plus className="w-10 h-10" />
      </div>
      <div className="absolute bottom-20 left-[20%] text-teal-400/20 pointer-events-none select-none animate-float hidden lg:block">
        <Plus className="w-6 h-6" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-center">
          
          {/* Left Text & Action Column */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 animate-slide-up">
            
            {/* Area Pill & Emergency Indicator */}
            <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-white/90 text-slate-800 text-[11px] sm:text-xs font-medium border border-teal-200/80 shadow-xs backdrop-blur-xs flex-wrap">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500" />
              </span>
              <span className="text-slate-600">{clinic.area}</span>
              <span className="text-teal-300">•</span>
              <span className="text-teal-700 font-semibold">{clinic.specialHighlight}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-[46px] font-bold text-slate-900 leading-[1.22] tracking-tight">
              {clinic.heroHeadline}
            </h1>

            {/* Sub-headline */}
            <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl font-normal">
              {clinic.heroSubheadline}
            </p>

            {/* Value checklist */}
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
                <span>ক্লাস-বি অটোক্লেভ জীবাণুমুক্তকরণ প্রটোকল</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <span>ডিজিটাল ওরাল এক্স-রে ও তাৎক্ষণিক ডায়াগনসিস</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <span>পরামর্শ ফি মাত্র {clinic.consultationFee}</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="pt-2 sm:pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={onOpenBooking}
                className="group relative flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 rounded-xl bg-gradient-to-r from-teal-700 to-sky-700 hover:from-teal-600 hover:to-sky-600 text-white font-semibold text-xs sm:text-sm transition-all shadow-md shadow-teal-900/15 hover:shadow-lg hover:shadow-teal-900/20 active:scale-95 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-teal-200 group-hover:scale-110 transition-transform" />
                <span>অনলাইনে সিরিয়াল নিন</span>
              </button>

              <a
                href={`https://wa.me/${clinic.whatsapp}?text=${encodeURIComponent(
                  `হ্যালো, আমি ${clinic.name}-এ সরাসরি কথা বলে সিরিয়াল বুক করতে চাচ্ছি।`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm transition shadow-sm active:scale-95 hover:shadow-md"
              >
                <MessageCircle className="w-4 h-4 text-white" />
                <span>WhatsApp এ সিরিয়াল</span>
              </a>

              <a
                href={`tel:${clinic.phone.replace(/[^0-9]/g, "")}`}
                className="flex items-center justify-center gap-2 px-4 sm:px-5 py-3.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-medium text-xs sm:text-sm transition shadow-2xs"
              >
                <Phone className="w-4 h-4 text-teal-600" />
                <span>কল: {clinic.phone}</span>
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="pt-4 sm:pt-5 flex flex-wrap items-center gap-4 sm:gap-6 border-t border-slate-200/70 text-xs text-slate-600">
              <div className="flex items-center gap-1.5">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </div>
                <span className="font-bold text-slate-900">৪.৯/৫</span>
                <span className="text-slate-400">(রোগীদের রেটিং)</span>
              </div>
              <div className="h-3 w-px bg-slate-300" />
              <div className="flex items-center gap-1.5">
                <UserCheck className="w-3.5 h-3.5 text-teal-600" />
                <span>{clinic.doctor.bmdc}</span>
              </div>
            </div>

          </div>

          {/* Right Doctor & Dental Visual Card */}
          <div className="lg:col-span-5 relative">
            
            {/* Main Interactive Doctor Card */}
            <div className="bg-white/95 backdrop-blur-md rounded-3xl p-6 sm:p-7 border border-teal-100 shadow-xl shadow-teal-900/5 relative transition duration-300 hover:shadow-2xl hover:border-teal-200">
              
              {/* Operatory / Clinic Photo Header with Live Badge */}
              <div className="relative h-44 sm:h-52 w-full overflow-hidden rounded-2xl mb-5 group shadow-inner">
                <img
                  src={clinic.heroImage}
                  alt={`${clinic.name} চেম্বার`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent" />
                
                {/* Sterilization Badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-full bg-slate-900/85 backdrop-blur-md text-teal-300 font-mono text-[11px] font-bold border border-white/10 flex items-center gap-1.5 shadow-sm">
                    <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
                    <span>১০০% জীবাণুমুক্ত চেম্বার</span>
                  </span>
                </div>

                {/* Live Chamber Status */}
                <div className="absolute top-3 right-3">
                  <span className="px-2.5 py-1 rounded-full bg-emerald-950/90 border border-emerald-500/50 text-emerald-300 text-[11px] font-mono font-bold flex items-center gap-1.5 backdrop-blur-md shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>চেম্বার প্রস্তুত</span>
                  </span>
                </div>

                {/* Bottom clinic name overlay */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                  <span className="text-xs font-bold drop-shadow-md text-teal-100 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-teal-300" />
                    {clinic.name}
                  </span>
                  <span className="text-[11px] text-slate-300 font-medium">
                    {clinic.area}
                  </span>
                </div>
              </div>

              {/* Doctor Header */}
              <div className="flex items-start gap-4 pb-5 border-b border-slate-100">
                <div className="relative shrink-0">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-teal-100 shadow-md bg-slate-100">
                    <img
                      src={clinic.doctor.image}
                      alt={clinic.doctor.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-emerald-500 border-2 border-white flex items-center justify-center shadow-xs" title="চেম্বারে উপস্থিত">
                    <Activity className="w-2.5 h-2.5 text-white" />
                  </div>
                </div>

                <div>
                  <span className="text-[11px] font-bold text-teal-700 uppercase tracking-wide">
                    কনসালটেন্ট ডেন্টাল সার্জন
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 leading-snug">
                    {clinic.doctor.name}
                  </h3>
                  <p className="text-xs text-slate-600 mt-0.5">
                    {clinic.doctor.specialty}
                  </p>
                </div>
              </div>

              {/* Clinic & Consultation Breakdown */}
              <div className="py-4 space-y-2.5 text-xs text-slate-600">
                <div className="flex justify-between items-center py-1 border-b border-slate-50">
                  <span className="text-slate-500 font-medium">ডিগ্রি ও পদবি:</span>
                  <span className="font-semibold text-slate-800 text-right">{clinic.doctor.designation}</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-slate-50">
                  <span className="text-slate-500 font-medium">ক্লিনিক্যাল অভিজ্ঞতা:</span>
                  <span className="font-semibold text-teal-800">{clinic.doctor.experience}</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-slate-50">
                  <span className="text-slate-500 font-medium">ডাক্তার ভিজিট ফি:</span>
                  <span className="font-bold text-teal-800 bg-teal-50 px-2 py-0.5 rounded text-xs border border-teal-100">
                    {clinic.consultationFee}
                  </span>
                </div>
                <div className="flex justify-between items-start py-1">
                  <span className="text-slate-500 font-medium shrink-0">রোগী দেখার সময়:</span>
                  <span className="text-slate-800 text-right font-medium">{clinic.hours}</span>
                </div>
              </div>

              {/* CTA Button */}
              <button
                onClick={onOpenBooking}
                className="w-full mt-2 py-3 rounded-xl bg-slate-900 hover:bg-teal-900 text-white font-semibold text-xs transition duration-200 text-center shadow-xs cursor-pointer flex items-center justify-center gap-2 group active:scale-98"
              >
                <Calendar className="w-4 h-4 text-teal-300 group-hover:scale-110 transition-transform" />
                <span>আজকের জন্য সিরিয়াল বুক করুন</span>
              </button>

              <div className="mt-3 text-center">
                <p className="text-[11px] text-slate-400">
                  *সিরিয়াল অনুযায়ী রোগীকে অগ্রাধিকার দেওয়া হয়।
                </p>
              </div>

            </div>

            {/* Floating Live Badge (Gentle Animation) */}
            <div className="absolute -bottom-4 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-lg border border-teal-200/80 flex items-center gap-3 animate-float-slow hidden sm:flex">
              <div className="w-9 h-9 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center shrink-0 border border-teal-100">
                <ShieldCheck className="w-5 h-5 text-teal-600" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900">১০০% ব্যথাহীন প্রযুক্তি</p>
                <p className="text-[10px] text-teal-700 font-medium">কম্পিউটারাইজড অ্যানেস্থেসিয়া</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
