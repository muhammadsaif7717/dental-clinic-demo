"use client";

import { DentalClinic } from "@/data/clinics";
import { Phone, MapPin, Clock } from "lucide-react";

interface FooterProps {
  clinic: DentalClinic;
  onOpenBooking: () => void;
  isClientMode?: boolean;
}

export default function Footer({ clinic, onOpenBooking, isClientMode }: FooterProps) {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-12 sm:pt-16 pb-28 sm:pb-24 md:pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-slate-800">
          
          {/* Clinic Brand */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-teal-600 to-sky-600 text-white flex items-center justify-center font-bold">
                <svg
                  className="w-4 h-4 text-teal-100"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 2C8 2 6 5 6 9c0 3 1.5 6 2 9 0.5 3 2.5 4 4 4s3.5-1 4-4c0.5-3 2-6 2-9 0-4-2-7-6-7z" />
                  <path d="M12 6v6" />
                </svg>
              </div>
              <span className="text-base font-extrabold text-white tracking-tight">
                {clinic.name}
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              {clinic.tagline}। আন্তর্জাতিক মানের চিকিৎসা সরঞ্জাম ও অভিজ্ঞ ডেন্টাল সার্জনের সরাসরি তত্ত্বাবধানে সুস্থ ও সুন্দর হাসির নির্ভরযোগ্য প্রতিষ্ঠান।
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              দ্রুত লিংক
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#services" className="hover:text-teal-300 transition-colors">
                  চিকিৎসা সেবা ও প্যাকেজ
                </a>
              </li>
              <li>
                <a href="#doctor" className="hover:text-teal-300 transition-colors">
                  ডাক্তার পরিচিতি ও যোগ্যতা
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-teal-300 transition-colors">
                  আমাদের সুবিধাসমূহ
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-teal-300 transition-colors">
                  রোগীদের মতামত
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-teal-300 transition-colors">
                  চেম্বারের লোকেশন ও সময়
                </a>
              </li>
            </ul>
          </div>

          {/* Chamber Contact */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              চেম্বার ও হেল্পলাইন
            </h4>
            <div className="space-y-2 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                <span>{clinic.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>{clinic.phone}</span>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
                <span>{clinic.hours}</span>
              </div>
            </div>
          </div>

          {/* Instant Online Booking Action */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              সিরিয়াল সেবা
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              অনলাইনে ঘরে বসেই মুহূর্তের মধ্যে আপনার সুবিধাজনক সময়ে ডাক্তারের অ্যাপয়েন্টমেন্ট নিশ্চিত করুন।
            </p>
            <button
              onClick={onOpenBooking}
              className="w-full py-2.5 px-4 rounded-xl bg-teal-600 hover:bg-teal-700 active:scale-[0.98] text-white text-xs font-semibold shadow-xs transition-all cursor-pointer min-h-[44px]"
            >
              সিরিয়াল বুকিং ফর্ম খুলুন
            </button>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <p>© {new Date().getFullYear()} {clinic.name}। সর্বস্বত্ব সংরক্ষিত।</p>
          {!isClientMode && (
            <p className="text-[11px] text-slate-600">
              ডিজাইন ও ডেভেলপমেন্ট: <span className="text-slate-400 font-semibold">Axiovyn Digital</span>
            </p>
          )}
        </div>

      </div>
    </footer>
  );
}
