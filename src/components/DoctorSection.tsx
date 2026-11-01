"use client";

import { DentalClinic } from "@/data/clinics";
import { GraduationCap, Calendar, ShieldCheck, HeartHandshake, Award, Phone } from "lucide-react";

interface DoctorSectionProps {
  clinic: DentalClinic;
  onOpenBooking: () => void;
}

export default function DoctorSection({
  clinic,
  onOpenBooking,
}: DoctorSectionProps) {
  return (
    <section id="doctor" className="relative py-14 sm:py-20 lg:py-24 bg-white border-b border-slate-200/80 overflow-hidden">
      
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-teal-50/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-sky-50/40 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-slate-50/70 rounded-3xl p-6 sm:p-8 lg:p-12 border border-slate-200/90 shadow-2xs grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Avatar Column */}
          <div className="lg:col-span-5 text-center">
            <div className="relative inline-block mx-auto">
              <div className="w-48 h-48 xs:w-56 xs:h-56 sm:w-64 sm:h-64 rounded-2xl bg-white border border-slate-200 shadow-sm p-2 mx-auto">
                <div className="w-full h-full rounded-xl overflow-hidden relative bg-slate-100">
                  <img
                    src={clinic.doctor.image}
                    alt={clinic.doctor.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-2.5 left-2 right-2 text-center">
                    <span className="text-white text-xs font-bold drop-shadow-xs">
                      {clinic.doctor.specialty}
                    </span>
                  </div>
                </div>
              </div>

              {/* BMDC Verified Pill */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[11px] font-semibold px-3.5 py-1.5 rounded-full shadow-sm border border-teal-500/30 whitespace-nowrap flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
                <span>{clinic.doctor.bmdc}</span>
              </div>
            </div>

            <div className="mt-8 space-y-1">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-semibold">
                <Award className="w-3.5 h-3.5 text-teal-700" />
                <span>অভিজ্ঞতা: {clinic.doctor.experience}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 pt-1">
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

          {/* Right Information Column */}
          <div className="lg:col-span-7 space-y-5">
            <div>
              <span className="text-xs font-bold text-teal-700 uppercase tracking-wide">
                বিশেষজ্ঞ চিকিৎসক প্রোফাইল
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1 tracking-tight">
                অভিজ্ঞ ডেন্টাল সার্জনের সরাসরি তত্ত্বাবধানে নিরাপদ সেবা
              </h2>
            </div>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {clinic.name}-এর প্রধান লক্ষ্য প্রতিটি রোগীকে ভীতিহীন, আন্তর্জাতিক মানের নিরাপদ ও ব্যথাহীন চিকিৎসা সেবা প্রদান করা। দীর্ঘদিনের ক্লিনিক্যাল দক্ষতা এবং সর্বাধুনিক মেডিকেল প্রযুক্তির সমন্বয়ে আমরা রোগীদের মুখে সুন্দর ও আত্মবিশ্বাসী হাসি ফিরিয়ে দিতে অঙ্গীকারবদ্ধ।
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="p-4 rounded-xl bg-white border border-slate-200/90 flex items-start gap-3 shadow-2xs">
                <GraduationCap className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-slate-900">উচ্চতর ট্রেনিং ও ডিগ্রি</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    আধুনিক এন্ডোডন্টিক্স, ডেন্টাল ইমপ্ল্যান্ট ও নান্দনিক কসমেটিক ওরাল কেয়ার।
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200/90 flex items-start gap-3 shadow-2xs">
                <HeartHandshake className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-slate-900">ভয়হীন ও শিশুবান্ধব পরিবেশ</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    রোগীর মানসিক স্বাচ্ছন্দ্য নিশ্চিত করে সম্পূর্ণ ব্যথামুক্ত চিকিৎসা পদ্ধতি।
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={onOpenBooking}
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-teal-600 hover:bg-teal-700 active:scale-[0.98] text-white font-semibold text-xs sm:text-sm shadow-xs transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 min-h-[44px] cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-teal-100" />
                <span>ডাক্তারের অ্যাপয়েন্টমেন্ট নিন</span>
              </button>

              <a
                href={`tel:${clinic.phone.replace(/[^0-9]/g, "")}`}
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-slate-100 border border-slate-300 active:scale-[0.98] text-slate-800 font-medium text-xs sm:text-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 min-h-[44px]"
              >
                <Phone className="w-4 h-4 text-teal-600" />
                <span>সরাসরি কল: {clinic.phone}</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
