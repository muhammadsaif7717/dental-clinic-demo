"use client";

import { DentalClinic } from "@/data/clinics";
import { ArrowRight, Clock, Activity, Check } from "lucide-react";
import { useState } from "react";

interface ServicesSectionProps {
  clinic: DentalClinic;
  onOpenBooking: (serviceName?: string) => void;
}

export default function ServicesSection({
  clinic,
  onOpenBooking,
}: ServicesSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>("সকল সেবা");

  const categories = [
    "সকল সেবা",
    "রুট ক্যানাল ও ফিলিং",
    "দাঁত সোজা ও ব্রেসেস",
    "ইমপ্ল্যান্ট ও কসমেটিক",
  ];

  const filteredServices = clinic.services.filter((s) => {
    if (activeCategory === "সকল সেবা") return true;
    if (activeCategory === "রুট ক্যানাল ও ফিলিং") {
      return s.title.toLowerCase().includes("root") || s.title.toLowerCase().includes("filling") || s.bengaliTitle.includes("রুট") || s.bengaliTitle.includes("ফিলিং");
    }
    if (activeCategory === "দাঁত সোজা ও ব্রেসেস") {
      return s.title.toLowerCase().includes("braces") || s.bengaliTitle.includes("ব্রেসেস") || s.bengaliTitle.includes("আঁকাবাঁকা");
    }
    if (activeCategory === "ইমপ্ল্যান্ট ও কসমেটিক") {
      return s.title.toLowerCase().includes("implant") || s.title.toLowerCase().includes("whitening") || s.bengaliTitle.includes("ইমপ্ল্যান্ট") || s.bengaliTitle.includes("হোয়াইটেনিং") || s.bengaliTitle.includes("স্কেলিং");
    }
    return true;
  });

  return (
    <section id="services" className="relative py-14 sm:py-20 lg:py-24 bg-slate-50/70 border-b border-slate-200/80">
      
      {/* Background medical grid */}
      <div className="absolute inset-0 medical-pattern opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 text-teal-800 text-xs font-semibold border border-teal-200 mb-3 shadow-2xs">
            <Activity className="w-3.5 h-3.5 text-teal-600 shrink-0" />
            <span>বিশেষায়িত ডেন্টাল চিকিৎসা ও প্যাকেজ</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            আন্তর্জাতিক মানের ব্যথাহীন ও আধুনিক সেবা
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm md:text-base mt-2 leading-relaxed">
            সর্বাধুনিক প্রযুক্তির মেশিনারিজ ও জীবাণুমুক্ত পরিবেশে প্রতিটি রোগীর সমস্যা অনুযায়ী স্থায়ী চিকিৎসা।
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all duration-150 active:scale-[0.98] min-h-[40px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 cursor-pointer ${
                  activeCategory === cat
                    ? "bg-teal-600 text-white shadow-xs"
                    : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid (Flat clean cards - No nested cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-7">
          {filteredServices.map((service, index) => (
            <div
              key={index}
              className={`rounded-2xl p-5 sm:p-6 bg-white border transition-all duration-200 hover:-translate-y-1 hover:shadow-md flex flex-col justify-between ${
                service.popular
                  ? "border-teal-300 ring-1 ring-teal-200/80 shadow-2xs"
                  : "border-slate-200/90 shadow-2xs hover:border-teal-300"
              }`}
            >
              <div>
                {/* Service Treatment Photo */}
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl mb-4 bg-slate-100">
                  <img
                    src={service.image}
                    alt={service.bengaliTitle}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-103"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent pointer-events-none" />

                  {/* Popular Tag */}
                  {service.popular && (
                    <div className="absolute top-2.5 right-2.5">
                      <span className="text-[10px] font-bold text-teal-950 bg-teal-300 px-2.5 py-1 rounded-md shadow-xs uppercase tracking-wide flex items-center gap-1">
                        <Check className="w-3 h-3 text-teal-950 stroke-[3]" />
                        জনপ্রিয়
                      </span>
                    </div>
                  )}

                  {/* Price Tag Overlay */}
                  <div className="absolute bottom-2.5 right-2.5">
                    <span className="text-xs font-bold text-white bg-slate-900/90 backdrop-blur-md border border-white/10 px-2.5 py-1 rounded-md">
                      {service.price}
                    </span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-1 hover:text-teal-800 transition-colors">
                  {service.bengaliTitle}
                </h3>
                <p className="text-xs text-teal-700 font-semibold mb-2.5">
                  {service.title}
                </p>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
              </div>

              <div>
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 mb-4">
                  <span className="flex items-center gap-1.5 font-medium">
                    <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>সময়: {service.duration}</span>
                  </span>
                  <span className="font-bold text-teal-800">
                    {service.price}
                  </span>
                </div>

                <button
                  onClick={() => onOpenBooking(service.bengaliTitle)}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-teal-700 active:scale-[0.98] text-white font-semibold text-xs sm:text-sm transition-all shadow-2xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 min-h-[44px] cursor-pointer"
                >
                  <span>সিরিয়াল বুক করুন</span>
                  <ArrowRight className="w-3.5 h-3.5 text-teal-200" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
