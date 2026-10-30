"use client";

import { DentalClinic } from "@/data/clinics";
import { ArrowRight, Clock, Sparkles, Activity } from "lucide-react";

interface ServicesSectionProps {
  clinic: DentalClinic;
  onOpenBooking: (serviceName?: string) => void;
}

export default function ServicesSection({
  clinic,
  onOpenBooking,
}: ServicesSectionProps) {
  return (
    <section id="services" className="relative py-16 md:py-24 bg-slate-50/70 border-b border-slate-200/70">
      
      {/* Subtle background medical grid */}
      <div className="absolute inset-0 medical-pattern opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 text-teal-800 text-xs font-semibold border border-teal-200/80 mb-3 shadow-2xs">
            <Activity className="w-3.5 h-3.5 text-teal-600" />
            <span>চিকিৎসা সেবা ও প্যাকেজসমূহ</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            আমাদের বিশেষায়িত ডেন্টাল কেয়ার
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            সর্বাধুনিক প্রযুক্তির মেশিনারিজ ও ব্যথাহীন পদ্ধতিতে প্রতিটি রোগীর প্রয়োজন অনুযায়ী সম্পূর্ণ কাস্টমাইজড চিকিৎসা।
          </p>
        </div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {clinic.services.map((service, index) => (
            <div
              key={index}
              className={`group relative rounded-3xl p-6 sm:p-7 border bg-white transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl flex flex-col justify-between ${
                service.popular
                  ? "border-teal-300 shadow-md ring-1 ring-teal-200/70"
                  : "border-slate-200/90 shadow-2xs hover:border-teal-200"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-800 flex items-center justify-center font-bold text-sm border border-teal-100 group-hover:bg-teal-700 group-hover:text-white transition-colors duration-200">
                    0{index + 1}
                  </div>
                  {service.popular && (
                    <span className="text-[11px] font-semibold text-teal-800 bg-teal-50 px-3 py-1 rounded-full border border-teal-200 flex items-center gap-1 shadow-2xs">
                      <Sparkles className="w-3 h-3 text-teal-600" />
                      জনপ্রিয় সেবা
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-0.5 group-hover:text-teal-800 transition-colors">
                  {service.bengaliTitle}
                </h3>
                <p className="text-xs text-teal-700 font-medium mb-3">
                  {service.title}
                </p>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              <div>
                <div className="pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 mb-4">
                  <span className="flex items-center gap-1.5 font-medium">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>{service.duration}</span>
                  </span>
                  <span className="font-bold text-slate-900 bg-slate-50 px-2.5 py-1 rounded-lg border border-slate-200 text-xs sm:text-sm">
                    {service.price}
                  </span>
                </div>

                <button
                  onClick={() => onOpenBooking(service.bengaliTitle)}
                  className="w-full py-2.5 rounded-xl bg-slate-100 hover:bg-teal-700 hover:text-white text-slate-800 font-semibold text-xs sm:text-sm transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs group-hover:bg-slate-900 group-hover:text-white"
                >
                  <span>সিরিয়াল নিন</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Clean Consultation Strip */}
        <div className="mt-12 bg-gradient-to-r from-slate-900 via-teal-950 to-slate-900 rounded-3xl p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg sm:text-xl font-bold flex items-center justify-center md:justify-start gap-2">
              <Sparkles className="w-5 h-5 text-teal-400" />
              নির্দিষ্ট কোনো দাঁতের সমস্যায় পরামর্শ চাচ্ছেন?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              ক্লিনিকে আসার আগে সরাসরি ফোনে বা হোয়াটসঅ্যাপে আমাদের সাথে কথা বলে প্রাথমিক পরামর্শ নিতে পারেন।
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${clinic.phone.replace(/[^0-9]/g, "")}`}
              className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm border border-white/20 transition shadow-xs"
            >
              সরাসরি কল দিন
            </a>
            <button
              onClick={() => onOpenBooking()}
              className="px-6 py-2.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs sm:text-sm shadow-md transition cursor-pointer"
            >
              অনলাইন সিরিয়াল
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
