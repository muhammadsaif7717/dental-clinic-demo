"use client";

import { DentalClinic } from "@/data/clinics";
import { Phone, MapPin, Clock, MessageCircle } from "lucide-react";

interface FooterProps {
  clinic: DentalClinic;
  onOpenBooking: () => void;
  isClientMode?: boolean;
}

export default function Footer({ clinic, onOpenBooking, isClientMode }: FooterProps) {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-12 sm:pt-14 pb-28 sm:pb-24 md:pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-slate-800">
          
          {/* Clinic Brand */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-sky-600 text-white flex items-center justify-center font-bold">
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2C8 2 6 5 6 9c0 3 1.5 6 2 9 0.5 3 2.5 4 4 4s3.5-1 4-4c0.5-3 2-6 2-9 0-4-2-7-6-7z" />
                  <path d="M12 6v6" />
                </svg>
              </div>
              <span className="text-base font-bold text-white">
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
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li>
                <a href="#services" className="hover:text-white transition">
                  চিকিৎসা সেবা ও প্যাকেজ
                </a>
              </li>
              <li>
                <a href="#doctor" className="hover:text-white transition">
                  ডাক্তার পরিচিতি ও যোগ্যতা
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-white transition">
                  আমাদের সুবিধাসমূহ
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-white transition">
                  রোগীদের মতামত
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-white transition">
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

          {/* Direct CTA */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              অনলাইন অ্যাপয়েন্টমেন্ট
            </h4>
            <p className="text-xs text-slate-400">
              কাঙ্ক্ষিত সময়ে ডাক্তার দেখাতে পূর্বেই অনলাইনে আপনার সিরিয়াল নিশ্চিত করুন।
            </p>
            <button
              onClick={onOpenBooking}
              className="w-full py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-semibold text-xs shadow-sm transition cursor-pointer"
            >
              সিরিয়াল বুক করুন
            </button>
            <a
              href={`https://wa.me/${clinic.whatsapp}?text=${encodeURIComponent(
                `হ্যালো, আমি ${clinic.name}-এ যোগাযোগ করতে চাচ্ছি।`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium text-xs transition flex items-center justify-center gap-1.5 border border-slate-700"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp হেল্পলাইন</span>
            </a>
          </div>

        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <p>© {new Date().getFullYear()} {clinic.name}. সর্বস্বত্ব সংরক্ষিত।</p>
          <p className="text-slate-500">
            পরিচ্ছন্ন ও আন্তর্জাতিক মানের ডেন্টাল হেলথকেয়ার
          </p>
        </div>

      </div>
    </footer>
  );
}
