"use client";

import { DentalClinic } from "@/data/clinics";
import { MapPin, Phone, Clock, MessageCircle, ExternalLink, Navigation, Compass } from "lucide-react";

interface LocationSectionProps {
  clinic: DentalClinic;
}

export default function LocationSection({ clinic }: LocationSectionProps) {
  const gmapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${clinic.name} ${clinic.address}`
  )}`;

  return (
    <section id="location" className="relative py-16 md:py-24 bg-white border-b border-teal-100/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          <div className="lg:col-span-5 space-y-5 sm:space-y-6">
            <div>
              <span className="text-xs font-bold text-teal-800 bg-teal-50 px-3 py-1 rounded-full border border-teal-200 uppercase tracking-wide">
                চেম্বারের ঠিকানা ও দিকনির্দেশনা
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-2.5">
                আমাদের ক্লিনিকে সরাসরি আসুন
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm mt-1.5 leading-relaxed">
                সহজ যোগাযোগ ও নিরিবিলি পারিবারিক পরিবেশে আপনার আগমন প্রত্যাশা করছি।
              </p>
            </div>

            <div className="space-y-3 sm:space-y-3.5">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-3.5 transition hover:border-teal-300">
                <MapPin className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-[11px] font-bold text-slate-500 uppercase tracking-wide">চেম্বারের পূর্ণ ঠিকানা</h4>
                  <p className="text-sm font-semibold text-slate-900 mt-0.5">
                    {clinic.address}
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-3.5 transition hover:border-teal-300">
                <Clock className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-[11px] font-bold text-slate-500 uppercase tracking-wide">রোগী দেখার সময়সূচি</h4>
                  <p className="text-sm font-semibold text-slate-900 mt-0.5">
                    {clinic.hours}
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-3.5 transition hover:border-teal-300">
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
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-teal-900 text-white font-semibold text-xs sm:text-sm shadow-sm transition active:scale-95 text-center"
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
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm shadow-sm transition active:scale-95 text-center"
              >
                <MessageCircle className="w-4 h-4" />
                <span>হোয়াটসঅ্যাপে দিকনির্দেশনা</span>
              </a>
            </div>

          </div>

          {/* Right Simulated Interactive Map Card */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl overflow-hidden border border-teal-100 bg-gradient-to-br from-teal-50/50 to-sky-50/50 p-5 sm:p-8 text-center relative shadow-inner min-h-[300px] sm:min-h-[380px] flex flex-col items-center justify-center">
              
              {/* Subtle medical grid background */}
              <div className="absolute inset-0 medical-pattern opacity-60 pointer-events-none" />

              <div className="relative z-10 max-w-md w-full bg-white/95 backdrop-blur-md p-6 sm:p-8 rounded-3xl shadow-xl border border-teal-100 transition hover:shadow-2xl">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-teal-700 to-sky-600 text-white flex items-center justify-center mx-auto mb-4 shadow-md">
                  <MapPin className="w-7 h-7 animate-bounce" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  {clinic.name}
                </h3>
                <p className="text-xs text-teal-700 font-semibold mt-1">
                  {clinic.area}
                </p>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  {clinic.address}
                </p>

                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-center">
                  <a
                    href={gmapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-700 hover:text-teal-900 hover:underline"
                  >
                    <Compass className="w-4 h-4 text-teal-600" />
                    <span>গুগল ম্যাপে বড় করে লোকেশন ওপেন করুন</span>
                    <ExternalLink className="w-3.5 h-3.5" />
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
