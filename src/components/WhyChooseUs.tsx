"use client";

import { DentalClinic } from "@/data/clinics";
import { ShieldCheck, Smile, Cpu, CheckCircle2, Clock, Camera, Sparkles, AlertCircle } from "lucide-react";

interface WhyChooseUsProps {
  clinic?: DentalClinic;
}

export default function WhyChooseUs({ clinic }: WhyChooseUsProps) {
  const points = [
    {
      icon: ShieldCheck,
      title: "১০০% অটোক্লেভ জীবাণুমুক্তকরণ",
      desc: "প্রতিটি রোগীর জন্য অটোক্লেভ ক্লাস-বি মেশিনে ১৩৪° সে. তাপে সিলপ্যাক করা সম্পূর্ণ জীবাণুমুক্ত ইনস্ট্রুমেন্ট ব্যবহার করা হয়।",
    },
    {
      icon: Smile,
      title: "ব্যথাহীন ডেন্টাল প্রসিডিউর",
      desc: "আধুনিক কম্পিউটারাইজড অ্যানেস্থেসিয়া ও রোটারি প্রযুক্তির কারণে কোনোপ্রকার অস্বস্তি বা যন্ত্রণা ছাড়াই স্বস্তিদায়ক ট্রিটমেন্ট।",
    },
    {
      icon: Cpu,
      title: "ইন-হাউস ডিজিটাল এক্স-রে (RVG)",
      desc: "কম রেডিয়েশনে তাৎক্ষণিক নির্ভুল ওরাল এক্স-রে রিপোর্ট দেখে দ্রুত সঠিক রোগ নির্ণয় ও স্থায়ী সমাধান।",
    },
    {
      icon: CheckCircle2,
      title: "স্বচ্ছ চিকিৎসা মূল্যতালিকা",
      desc: "কোনো গোপন চার্জ নেই। চিকিৎসার আগেই প্রয়োজনীয় টেস্ট ও খরচের পূর্ণাঙ্গ বিবরণ রোগীকে বুঝিয়ে দেওয়া হয়।",
    },
    {
      icon: Clock,
      title: "নির্দিষ্ট সময়ে সিরিয়াল সেবা",
      desc: "ঘণ্টার পর ঘণ্টা লাইনে অপেক্ষা করার ঝামেলা নেই। পূর্বে বুকিং করা নির্দিষ্ট সময়েই সরাসরি ডাক্তার দেখানোর সুবিধা।",
    },
    {
      icon: AlertCircle,
      title: "দীর্ঘস্থায়ী ফলোআপ ও সাপোর্ট",
      desc: "ক্রাউন, ফিলিং এবং ইমপ্ল্যান্টের ক্ষেত্রে নিয়মিত পরবর্তী চেকআপ এবং দীর্ঘস্থায়ী আফটার-কেয়ার সেবা প্রদান করা হয়।",
    },
  ];

  return (
    <section id="why-us" className="relative py-14 sm:py-20 lg:py-24 bg-slate-50/70 border-b border-slate-200/80">
      
      {/* Background medical pattern */}
      <div className="absolute inset-0 medical-pattern opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="text-xs font-semibold text-teal-800 bg-teal-50 px-3 py-1 rounded-full border border-teal-200 uppercase tracking-wide">
            আমাদের ক্লিনিক্যাল সুবিধা
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mt-2.5 tracking-tight">
            রোগীর সুরক্ষা ও স্বাচ্ছন্দ্যই আমাদের সর্বোচ্চ অগ্রাধিকার
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm md:text-base mt-2 leading-relaxed">
            আন্তর্জাতিক স্বাস্থ্যবিধি মেনে আধুনিক মেডিকেল যন্ত্রপাতি ও পরিচ্ছন্ন পরিবেশে সেবা প্রদান করা হয়।
          </p>
        </div>

        {/* 6 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {points.map((pt, i) => {
            const Icon = pt.icon;
            return (
              <div
                key={i}
                className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="w-11 h-11 rounded-xl bg-teal-50 border border-teal-100 text-teal-700 flex items-center justify-center mb-4.5 shadow-2xs">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1.5">
                  {pt.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {pt.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Clinic Atmosphere & Sterilization Gallery */}
        {clinic?.gallery && clinic.gallery.length > 0 && (
          <div className="mt-12 sm:mt-16 lg:mt-20 pt-10 sm:pt-12 border-t border-slate-200/80">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 sm:mb-8 gap-4">
              <div>
                <span className="text-xs font-semibold text-teal-800 bg-teal-50 px-3 py-1 rounded-full border border-teal-200 uppercase tracking-wide inline-flex items-center gap-1.5">
                  <Camera className="w-3.5 h-3.5 text-teal-700" />
                  ক্লিনিক্যাল চিত্রশালা
                </span>
                <h3 className="text-lg sm:text-xl md:text-2xl font-extrabold text-slate-900 mt-2 tracking-tight">
                  পরিচ্ছন্ন পরিবেশ ও আধুনিক ডেন্টাল অপারোটরি
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  সর্বোচ্চ স্বাস্থ্যবিধি মেনে রোগীদের জন্য সাজানো শান্ত ও জীবাণুমুক্ত চেম্বার।
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {clinic.gallery.map((item, idx) => (
                <div
                  key={idx}
                  className="group rounded-2xl overflow-hidden bg-white border border-slate-200/90 shadow-2xs transition-all duration-200 hover:shadow-md"
                >
                  <div className="relative aspect-[16/11] w-full overflow-hidden bg-slate-100">
                    <img
                      src={item.url}
                      alt={item.caption}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-3 left-3 right-3">
                      <p className="text-white text-xs sm:text-sm font-semibold drop-shadow-xs">
                        {item.caption}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
