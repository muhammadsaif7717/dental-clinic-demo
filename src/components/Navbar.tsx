"use client";

import { DentalClinic } from "@/data/clinics";
import { Phone, Clock, MapPin, Calendar, MessageCircle, Menu, X, Plus } from "lucide-react";
import { useState } from "react";

interface NavbarProps {
  clinic: DentalClinic;
  onOpenBooking: () => void;
}

export default function Navbar({ clinic, onOpenBooking }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-md border-b border-teal-100/80 sticky top-0 z-40 transition-all">
      {/* Clean Top Contact Bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-teal-400" />
              <span>{clinic.address}</span>
            </span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-teal-400" />
              <span>{clinic.hours}</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`tel:${clinic.phone.replace(/[^0-9]/g, "")}`}
              className="flex items-center gap-1.5 text-white hover:text-teal-300 font-medium transition"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>চেম্বার হেল্পলাইন: {clinic.phone}</span>
            </a>
            <span className="text-slate-700">|</span>
            <span className="text-teal-400 font-medium">
              {clinic.specialHighlight}
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-3.5 flex items-center justify-between gap-3">
        
        {/* Brand Logo & Name */}
        <a href="#" className="flex items-center gap-2.5 sm:gap-3 group min-w-0">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-gradient-to-tr from-teal-800 to-sky-700 text-white flex items-center justify-center font-bold text-base sm:text-lg shadow-sm transition group-hover:scale-105 shrink-0">
            <svg
              className="w-5 h-5 text-teal-200"
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
          <div className="min-w-0">
            <div className="text-sm sm:text-base md:text-lg font-bold text-slate-900 tracking-tight leading-snug group-hover:text-teal-800 transition-colors truncate max-w-[200px] xs:max-w-[260px] sm:max-w-sm md:max-w-md">
              {clinic.name}
            </div>
            <p className="text-[10px] sm:text-[11px] text-teal-700 font-medium truncate">
              {clinic.area}
            </p>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#services" className="hover:text-teal-700 transition">
            চিকিৎসা সেবা
          </a>
          <a href="#doctor" className="hover:text-teal-700 transition">
            ডাক্তার পরিচিতি
          </a>
          <a href="#why-us" className="hover:text-teal-700 transition">
            আমাদের সুবিধা
          </a>
          <a href="#reviews" className="hover:text-teal-700 transition">
            পেশেন্ট মতামত
          </a>
          <a href="#location" className="hover:text-teal-700 transition">
            চেম্বারের সময় ও ঠিকানা
          </a>
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={`https://wa.me/${clinic.whatsapp}?text=${encodeURIComponent(
              `হ্যালো, আমি ${clinic.name}-এ ডেন্টাল সিরিয়াল / পরামর্শের জন্য যোগাযোগ করছি।`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-teal-800 bg-teal-50/60 hover:bg-teal-100 text-xs font-semibold border border-teal-200/70 transition"
          >
            <MessageCircle className="w-4 h-4 text-teal-600" />
            <span>WhatsApp</span>
          </a>

          <button
            onClick={onOpenBooking}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-teal-900 text-white font-semibold text-xs transition cursor-pointer shadow-sm active:scale-95"
          >
            <Calendar className="w-3.5 h-3.5 text-teal-300" />
            <span>সিরিয়াল বুক করুন</span>
          </button>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100"
          aria-label="Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 px-4 py-4 space-y-3 shadow-lg">
          <nav className="flex flex-col space-y-2 text-sm font-medium text-slate-700">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 px-2 hover:bg-teal-50 hover:text-teal-800 rounded"
            >
              চিকিৎসা সেবা ও ফি
            </a>
            <a
              href="#doctor"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 px-2 hover:bg-teal-50 hover:text-teal-800 rounded"
            >
              ডাক্তার পরিচিতি
            </a>
            <a
              href="#why-us"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 px-2 hover:bg-teal-50 hover:text-teal-800 rounded"
            >
              আমাদের সুবিধা
            </a>
            <a
              href="#reviews"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 px-2 hover:bg-teal-50 hover:text-teal-800 rounded"
            >
              পেশেন্ট মতামত
            </a>
            <a
              href="#location"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 px-2 hover:bg-teal-50 hover:text-teal-800 rounded"
            >
              চেম্বারের সময় ও ঠিকানা
            </a>
          </nav>

          <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-900 text-white font-medium text-xs"
            >
              <Calendar className="w-3.5 h-3.5 text-teal-300" />
              <span>সিরিয়াল বুকিং</span>
            </button>
            <a
              href={`https://wa.me/${clinic.whatsapp}?text=${encodeURIComponent(
                `হ্যালো, আমি ${clinic.name}-এ ডেন্টাল সিরিয়াল / পরামর্শের জন্য যোগাযোগ করছি।`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-teal-50 text-teal-800 font-semibold text-xs border border-teal-200"
            >
              <MessageCircle className="w-4 h-4 text-teal-600" />
              <span>হোয়াটসঅ্যাপে যোগাযোগ</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
