"use client";

import { DentalClinic } from "@/data/clinics";
import { MapPin, Phone, Clock, MessageCircle, ExternalLink, Navigation } from "lucide-react";

interface LocationSectionProps {
  clinic: DentalClinic;
}

export default function LocationSection({ clinic }: LocationSectionProps) {
  const gmapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${clinic.name} ${clinic.address}`
  )}`;

  return (
    <section id="location" className="relative py-14 sm:py-20 lg:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          <div className="lg:col-span-5 space-y-5 sm:space-y-6">
            <div>
              <span className="text-xs font-bold text-teal-800 bg-teal-50 px-3 py-1 rounded-full border border-teal-200 uppercase tracking-wide">
                চেম্বারের ঠিকানা ও দিকনির্দেশনা
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2 tracking-tight">
                আমাদের চেম্বারে সরাসরি আসুন
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm mt-1.5 leading-relaxed">
                সহজ যোগাযোগ ও নিরিবিলি পারিবারিক পরিবেশে আপনার আগমন প্রত্যাশা করছি।
              </p>
            </div>

            <div className="space-y-3">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/90 flex items-start gap-3.5 transition-colors hover:border-teal-300">
                <MapPin className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-[11px] font-bold text-slate-500 uppercase tracking-wide">চেম্বারের পূর্ণ ঠিকানা</h4>
                  <p className="text-sm font-semibold text-slate-900 mt-0.5">
                    {clinic.address}
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/90 flex items-start gap-3.5 transition-colors hover:border-teal-300">
                <Clock className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-[11px] font-bold text-slate-500 uppercase tracking-wide">রোগী দেখার সময়সূচি</h4>
                  <p className="text-sm font-semibold text-slate-900 mt-0.5">
                    {clinic.hours}
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/90 flex items-start gap-3.5 transition-colors hover:border-teal-300">
                <Phone className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-[11px] font-bold text-slate-500 uppercase tracking-wide">সিরিয়াল ও তথ্য হেল্পলাইন</h4>
                  <p className="text-sm font-semibold text-slate-900 mt-0.5">
                    {clinic.phone}
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={gmapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs sm:text-sm shadow-xs transition-all active:scale-[0.98] text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 min-h-[44px]"
              >
                <Navigation className="w-4 h-4 text-teal-300" />
                <span>গুগল ম্যাপে দিকনির্দেশনা দেখুন</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>

              <a
                href={`https://wa.me/${clinic.whatsapp}?text=${encodeURIComponent(
                  `হ্যালো, আমি ${clinic.name}-এর লোকেশন সম্পর্কে জানতে চাচ্ছি।`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-emerald-300 bg-emerald-50 hover:bg-emerald-100/90 text-emerald-800 font-semibold text-xs sm:text-sm shadow-2xs transition-all active:scale-[0.98] text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 min-h-[44px]"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>হোয়াটসঅ্যাপে দিকনির্দেশনা</span>
              </a>
            </div>

          </div>

          {/* Right Simulated Interactive Map Card */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl overflow-hidden border border-slate-200/90 bg-slate-50 p-6 sm:p-10 text-center relative shadow-2xs flex flex-col items-center justify-center min-h-[320px]">
              
              <div className="absolute inset-0 medical-pattern opacity-60 pointer-events-none" />

              <div className="relative z-10 max-w-md w-full bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200 transition-all hover:shadow-md">
                <div className="w-12 h-12 rounded-xl bg-teal-50 border border-teal-100 text-teal-700 flex items-center justify-center mx-auto mb-4 shadow-2xs">
                  <MapPin className="w-6 h-6" />
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900">
                  {clinic.name}
                </h3>
                <p className="text-xs text-slate-600 mt-1 max-w-sm mx-auto">
                  {clinic.address}
                </p>

                <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-center gap-3 text-xs">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 font-semibold border border-emerald-200">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>চেম্বার প্রস্তুত</span>
                  </span>
                  <span className="text-slate-500">
                    {clinic.hours.split("•")[0]}
                  </span>
                </div>

                <div className="mt-5">
                  <a
                    href={gmapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-teal-600 hover:bg-teal-700 active:scale-[0.98] text-white font-semibold text-xs transition-all shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 min-h-[44px]"
                  >
                    <span>গুগল ম্যাপে নেভিগেশন চালু করুন</span>
                    <ExternalLink className="w-3.5 h-3.5 text-teal-200" />
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
