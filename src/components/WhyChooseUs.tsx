"use client";

import { ShieldCheck, Smile, Cpu, Sparkles, Clock, CheckCircle2 } from "lucide-react";

export default function WhyChooseUs() {
  const points = [
    {
      icon: ShieldCheck,
      title: "১০০% জীবাণুমুক্তকরণ ব্যবস্থা",
      desc: "প্রতিটি রোগীর জন্য অটোক্লেভ ক্লাস-বি মেশিনে সিলপ্যাক করা সম্পূর্ণ জীবাণুমুক্ত ও নিরাপদ ইনস্ট্রুমেন্ট ব্যবহার করা হয়।",
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
      icon: Sparkles,
      title: "স্বচ্ছ চিকিৎসা মূল্যতালিকা",
      desc: "কোনো গোপন চার্জ নেই। চিকিৎসার আগেই প্রয়োজনীয় টেস্ট ও খরচের পূর্ণাঙ্গ বিবরণ রোগীকে বুঝিয়ে দেওয়া হয়।",
    },
    {
      icon: Clock,
      title: "নির্দিষ্ট সময়ে সিরিয়াল সেবা",
      desc: "ঘণ্টার পর ঘণ্টা লাইনে অপেক্ষা করার ঝামেলা নেই। পূর্বে বুকিং করা নির্দিষ্ট সময়েই সরাসরি ডাক্তার দেখানোর সুবিধা।",
    },
    {
      icon: CheckCircle2,
      title: "দীর্ঘস্থায়ী ফলোআপ ও সাপোর্ট",
      desc: "ক্রাউন, ফিলিং এবং ইমপ্ল্যান্টের ক্ষেত্রে নিয়মিত পরবর্তী চেকআপ এবং দীর্ঘস্থায়ী আফটার-কেয়ার সেবা প্রদান করা হয়।",
    },
  ];

  return (
    <section id="why-us" className="relative py-16 md:py-24 bg-slate-50/70 border-b border-slate-200/70">
      
      {/* Background medical pattern */}
      <div className="absolute inset-0 medical-pattern opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4">
        
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold text-teal-800 bg-teal-50 px-3 py-1 rounded-full border border-teal-200 uppercase tracking-wide">
            আমাদের বিশেষ সুবিধা
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mt-2.5">
            রোগীর সুরক্ষা ও স্বাচ্ছন্দ্যই আমাদের প্রধান লক্ষ্য
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            আধুনিক মেডিকেল যন্ত্রপাতি ও পরিচ্ছন্ন ক্লিনিক্যাল পরিবেশে আন্তর্জাতিক মানের সেবা।
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((pt, i) => {
            const Icon = pt.icon;
            return (
              <div
                key={i}
                className="group p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/90 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-teal-200"
              >
                <div className="w-12 h-12 rounded-2xl bg-teal-50 border border-teal-100 text-teal-700 flex items-center justify-center mb-5 group-hover:bg-teal-700 group-hover:text-white transition-colors duration-200 shadow-2xs">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 group-hover:text-teal-900 transition-colors">
                  {pt.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {pt.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
