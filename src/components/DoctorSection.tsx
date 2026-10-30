"use client";

import { DentalClinic } from "@/data/clinics";
import { GraduationCap, Calendar, ShieldCheck, HeartHandshake, CheckCircle2, Award } from "lucide-react";

interface DoctorSectionProps {
  clinic: DentalClinic;
  onOpenBooking: () => void;
}

export default function DoctorSection({
  clinic,
  onOpenBooking,
}: DoctorSectionProps) {
  return (
    <section id="doctor" className="relative py-16 md:py-24 bg-white border-b border-teal-100/70 overflow-hidden">
      
      {/* Soft background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-50/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-sky-50/50 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4">
        
        <div className="bg-gradient-to-br from-slate-50 via-teal-50/30 to-slate-50 rounded-3xl p-6 sm:p-10 border border-teal-100 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Avatar Card with Floating Experience Tag */}
          <div className="lg:col-span-5 text-center">
            <div className="relative inline-block mx-auto">
              <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-3xl bg-white border-2 border-teal-100 shadow-md p-2.5 mx-auto transition-transform duration-300 hover:scale-102">
                <div className="w-full h-full bg-gradient-to-tr from-teal-50 to-sky-50 rounded-2xl flex flex-col items-center justify-center text-slate-800">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-teal-700 to-sky-600 text-white flex items-center justify-center text-4xl font-bold mb-2 shadow-sm">
                    {clinic.doctor.name.charAt(3) || "ডা"}
                  </div>
                  <span className="text-xs font-bold text-slate-800">
                    {clinic.doctor.name}
                  </span>
                </div>
              </div>

              {/* BMDC Verified Pill */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[11px] font-medium px-4 py-1.5 rounded-full shadow-md border border-slate-700 whitespace-nowrap flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
                <span>{clinic.doctor.bmdc}</span>
              </div>
            </div>

            <div className="mt-8 space-y-1.5">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-100/80 text-teal-800 text-xs font-semibold">
                <Award className="w-3.5 h-3.5 text-teal-700" />
                <span>{clinic.doctor.experience}</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900">
                {clinic.doctor.name}
              </h3>
              <p className="text-sm font-semibold text-teal-700">
                {clinic.doctor.specialty}
              </p>
              <p className="text-xs text-slate-500">
                {clinic.doctor.designation}
              </p>
            </div>
          </div>

          {/* Right Information */}
          <div className="lg:col-span-7 space-y-5">
            <div>
              <span className="text-xs font-bold text-teal-700 uppercase tracking-wide">
                বিশেষজ্ঞ চিকিৎসক পরিচিতি
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
                আপনার হাসির সুরক্ষায় অভিজ্ঞ চিকিৎসকের সরাসরি পরিচর্যা
              </h2>
            </div>

            <p className="text-slate-600 text-sm leading-relaxed">
              {clinic.name}-এর মূল লক্ষ্য প্রতিটি রোগীকে ভীতিহীন, আন্তর্জাতিক মানের নিরাপদ ও ব্যথাহীন চিকিৎসা সেবা প্রদান করা। দীর্ঘদিনের ক্লিনিক্যাল দক্ষতা এবং আধুনিক প্রযুক্তির সমন্বয়ে আমরা রোগীদের মুখে সুন্দর ও আত্মবিশ্বাসী হাসি ফিরিয়ে দিতে অঙ্গীকারবদ্ধ।
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
              <div className="p-4 rounded-2xl bg-white border border-teal-100 flex items-start gap-3 shadow-2xs">
                <GraduationCap className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-slate-900">উচ্চতর ট্রেনিং ও যোগ্যতা</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    আধুনিক এন্ডোডন্টিক্স, ইমপ্ল্যান্ট ও নান্দনিক কসমেটিক ওরাল কেয়ার।
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-teal-100 flex items-start gap-3 shadow-2xs">
                <HeartHandshake className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-slate-900">ভয়হীন ও শিশুবান্ধব পরিবেশ</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    রোগীর মানসিক স্বাচ্ছন্দ্য নিশ্চিত করে সম্পূর্ণ ব্যথামুক্ত চিকিৎসা।
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-teal-900 text-white font-semibold text-xs sm:text-sm shadow-sm transition flex items-center justify-center gap-2 cursor-pointer active:scale-95"
              >
                <Calendar className="w-4 h-4 text-teal-300" />
                <span>ডাক্তারের শিডিউলে সিরিয়াল নিন</span>
              </button>

              <span className="text-xs text-slate-600 flex items-center justify-center sm:justify-start gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-teal-600" />
                ভিজিট ফি: <strong className="text-slate-900">{clinic.consultationFee}</strong>
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
