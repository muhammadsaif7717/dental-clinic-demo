"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle, Activity } from "lucide-react";

export default function FaqSection() {
  const faqs = [
    {
      q: "রুট ক্যানাল ট্রিটমেন্ট (RCT) কি খুব বেশি ব্যথাদায়ক?",
      a: "একদমই না! আধুনিক চিকিৎসাবিজ্ঞানে উন্নত লোকাল অ্যানেস্থেসিয়া ও আধুনিক রোটারি এন্ডোডন্টিক্স ব্যবহার করা হয়। চিকিৎসার সময় রোগী কোনোপ্রকার ব্যথা বা অস্বস্তি অনুভব করেন না।",
    },
    {
      q: "অ্যাপয়েন্টমেন্ট বা সিরিয়াল ছাড়া কি সরাসরি চেম্বারে আসা যাবে?",
      a: "হ্যাঁ, যেকোনো সময় আপনি সরাসরি আসতে পারেন। তবে পূর্বে সিরিয়াল নিয়ে আসলে আপনাকে চেম্বারে দীর্ঘক্ষণ অপেক্ষা করতে হবে না এবং কাঙ্ক্ষিত সময়ে চিকিৎসকের সেবা নিতে পারবেন।",
    },
    {
      q: "দাঁতের স্কেলিং ও ওয়াশ করালে কি দাঁত পাতলা বা শিরশির করে?",
      a: "এটি সম্পূর্ণ ভুল ধারণা। আল্ট্রাসনিক স্কেলিংয়ে দাঁতের এনামেলের কোনো ক্ষতি হয় না, বরং দাঁতের মাড়িতে জমে থাকা ক্ষতিকর প্লাক ও পাথর অপসারণ করে মাড়িকে ইনফেকশন ও রক্ত পড়া থেকে সুরক্ষা দেয়।",
    },
    {
      q: "ডেন্টাল ইমপ্ল্যান্টের স্থায়ীত্ব কতদিন?",
      a: "ইমপ্ল্যান্ট হলো হারিয়ে যাওয়া দাঁতের সবচেয়ে প্রাকৃতিক ও স্থায়ী সমাধান। সঠিক ওরাল হাইজিন এবং নিয়মিত চেকআপ বজায় রাখলে টাইটানিয়াম ডেন্টাল ইমপ্ল্যান্ট আজীবন ভালো থাকে।",
    },
    {
      q: "আঁকাবাঁকা দাঁতে ব্রেসেস লাগালে কতদিন পর ফল পাওয়া যায়?",
      a: "সমস্যার গভীরতার ওপর নির্ভর করে সাধারণত ৬ মাস থেকে ১৮ মাসের মধ্যে পুরো দাঁতের লাইন সোজা ও স্বাভাবিক শেপে ফিরে আসে। আজকাল তার ছাড়াও অদৃশ্য 'ক্লিয়ার এলাইনার্স' দিয়েও চিকিৎসা সম্ভব।",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative py-16 md:py-24 bg-white border-b border-teal-100/70">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 text-teal-800 text-xs font-semibold border border-teal-200 mb-3 shadow-2xs">
            <HelpCircle className="w-3.5 h-3.5 text-teal-600" />
            <span>সচরাচর জিজ্ঞাসা (FAQ)</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            ডেন্টাল চিকিৎসা সংক্রান্ত সাধারণ প্রশ্ন ও উত্তর
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-1.5">
            দাঁতের স্বাস্থ্য ও ট্রিটমেন্ট নিয়ে আপনার মনে যেসব প্রশ্ন আসতে পারে।
          </p>
        </div>

        <div className="space-y-3 sm:space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden shadow-2xs ${
                  isOpen ? "border-teal-300 bg-teal-50/20" : "border-slate-200 bg-white hover:border-teal-200"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-3 sm:gap-4 font-semibold text-slate-900 text-xs sm:text-sm md:text-base hover:text-teal-800 transition cursor-pointer"
                >
                  <span className="flex items-center gap-2.5 sm:gap-3">
                    <span className="w-2 h-2 rounded-full bg-teal-500 shrink-0" />
                    <span>{faq.q}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-teal-700" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-1 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-teal-100/60 animate-slide-up">
                    <p className="pl-4 sm:pl-5 text-slate-600">{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
