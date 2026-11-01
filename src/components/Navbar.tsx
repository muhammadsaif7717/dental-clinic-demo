"use client";

import { DentalClinic } from "@/data/clinics";
import { Phone, Clock, MapPin, Calendar, MessageCircle, Menu, X, ShieldCheck } from "lucide-react";
import { useState, useEffect } from "react";

interface NavbarProps {
  clinic: DentalClinic;
  onOpenBooking: () => void;
}

export default function Navbar({ clinic, onOpenBooking }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    if (mobileMenuOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <header className="bg-white/95 backdrop-blur-md border-b border-slate-200/80 sticky top-0 z-40 transition-all">
      {/* Top Clinical Announcement Bar */}
      <div className="bg-slate-950 text-slate-300 text-xs py-2 px-4 hidden md:block border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-teal-400 shrink-0" />
              <span className="truncate max-w-md">{clinic.address}</span>
            </span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-teal-400 shrink-0" />
              <span>{clinic.hours}</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1 text-teal-300 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-teal-400 shrink-0" />
              <span>১০০% অটোক্লেভ জীবাণুমুক্ত চেম্বার</span>
            </span>
            <span className="text-slate-700">|</span>
            <a
              href={`tel:${clinic.phone.replace(/[^0-9]/g, "")}`}
              className="flex items-center gap-1.5 text-white hover:text-teal-300 font-semibold transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-teal-400 rounded-sm"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>চেম্বার সিরিয়াল: {clinic.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-3.5 flex items-center justify-between gap-3">
        
        {/* Brand Logo & Name */}
        <a
          href="#"
          className="flex items-center gap-2.5 sm:gap-3 group min-w-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 rounded-xl"
        >
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-teal-700 to-sky-700 text-white flex items-center justify-center font-bold text-base sm:text-lg shadow-sm transition-transform group-hover:scale-105 shrink-0">
            <svg
              className="w-5 h-5 text-teal-100"
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
          <div className="min-w-0">
            <div className="text-sm sm:text-base md:text-lg font-bold text-slate-900 tracking-tight leading-snug group-hover:text-teal-800 transition-colors truncate max-w-[200px] xs:max-w-[260px] sm:max-w-sm md:max-w-md">
              {clinic.name}
            </div>
            <p className="text-[10px] sm:text-[11px] text-teal-700 font-semibold truncate">
              {clinic.area}
            </p>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600" aria-label="Main Navigation">
          <a
            href="#services"
            className="hover:text-teal-700 transition-colors py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 rounded-md"
          >
            চিকিৎসা সেবা
          </a>
          <a
            href="#doctor"
            className="hover:text-teal-700 transition-colors py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 rounded-md"
          >
            ডাক্তার পরিচিতি
          </a>
          <a
            href="#why-us"
            className="hover:text-teal-700 transition-colors py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 rounded-md"
          >
            কেন আমরা সেরা
          </a>
          <a
            href="#reviews"
            className="hover:text-teal-700 transition-colors py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 rounded-md"
          >
            রোগীদের মতামত
          </a>
          <a
            href="#location"
            className="hover:text-teal-700 transition-colors py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 rounded-md"
          >
            চেম্বারের লোকেশন
          </a>
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-2.5">
          <a
            href={`https://wa.me/${clinic.whatsapp}?text=${encodeURIComponent(
              `হ্যালো, আমি ${clinic.name}-এ ডেন্টাল সিরিয়াল / পরামর্শের জন্য যোগাযোগ করছি।`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl border border-emerald-300/80 bg-emerald-50/80 hover:bg-emerald-100/90 text-emerald-800 text-xs font-semibold transition-all active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 min-h-[44px]"
            aria-label="Contact on WhatsApp"
          >
            <MessageCircle className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>WhatsApp</span>
          </a>

          <button
            onClick={onOpenBooking}
            className="flex items-center gap-1.5 px-4.5 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 active:scale-[0.98] text-white text-xs font-semibold transition-all shadow-xs hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2 min-h-[44px] cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5 text-teal-100 shrink-0" />
            <span>অনলাইনে সিরিয়াল নিন</span>
          </button>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer"
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? "মেনু বন্ধ করুন" : "মেনু খুলুন"}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Accessible Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white/98 backdrop-blur-md px-4 py-5 space-y-4 animate-slide-up shadow-lg">
          <div className="flex flex-col space-y-2 text-sm font-medium text-slate-700">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 px-3 rounded-xl hover:bg-teal-50 hover:text-teal-800 transition-colors"
            >
              চিকিৎসা সেবা ও প্যাকেজসমূহ
            </a>
            <a
              href="#doctor"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 px-3 rounded-xl hover:bg-teal-50 hover:text-teal-800 transition-colors"
            >
              ডাক্তার পরিচিতি ও যোগ্যতা
            </a>
            <a
              href="#why-us"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 px-3 rounded-xl hover:bg-teal-50 hover:text-teal-800 transition-colors"
            >
              আমাদের বিশেষ সুবিধাসমূহ
            </a>
            <a
              href="#reviews"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 px-3 rounded-xl hover:bg-teal-50 hover:text-teal-800 transition-colors"
            >
              রোগীদের মতামত ও অভিজ্ঞতা
            </a>
            <a
              href="#location"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 px-3 rounded-xl hover:bg-teal-50 hover:text-teal-800 transition-colors"
            >
              চেম্বারের লোকেশন ও সময়সূচি
            </a>
          </div>

          <div className="pt-2 border-t border-slate-100 space-y-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-teal-600 hover:bg-teal-700 active:scale-[0.98] text-white font-semibold text-sm shadow-xs transition-all min-h-[44px]"
            >
              <Calendar className="w-4 h-4 text-teal-100" />
              <span>অনলাইনে সিরিয়াল বুক করুন</span>
            </button>

            <a
              href={`https://wa.me/${clinic.whatsapp}?text=${encodeURIComponent(
                `হ্যালো, আমি ${clinic.name}-এ ডেন্টাল সিরিয়াল নেওয়ার জন্য যোগাযোগ করছি।`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-emerald-300 bg-emerald-50 text-emerald-800 font-semibold text-sm transition-all min-h-[44px]"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>WhatsApp এ সরাসরি মেসেজ দিন</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
