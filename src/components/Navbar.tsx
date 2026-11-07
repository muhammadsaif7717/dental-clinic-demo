"use client";

import { DentalClinic } from "@/data/clinics";
import {
  Phone,
  Clock,
  Calendar,
  Menu,
  X,
  ArrowRight,
  ChevronDown,
  Sparkles,
} from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface NavbarProps {
  clinic: DentalClinic;
  onOpenBooking: () => void;
}

export default function Navbar({ clinic, onOpenBooking }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [pagesDropdownOpen, setPagesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
        setPagesDropdownOpen(false);
      }
    };
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Clinical Announcement Sub-Navbar (Desktop & Large Screens Only) */}
      <div
        className={`bg-[#102223] text-[#dee8de]/85 text-xs px-4 hidden lg:block border-b border-[#2d5254]/60 transition-all duration-300 ${
          isScrolled
            ? "max-h-0 py-0 opacity-0 overflow-hidden pointer-events-none"
            : "max-h-12 py-2.5 opacity-100"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Left: Schedule / Operating Hours Only */}
          <div className="flex items-center gap-2 text-[#dee8de]/90">
            <Clock className="w-3.5 h-3.5 text-[#33a9b1] shrink-0" />
            <span>{clinic.hours || "Saturday - Thursday: 05:00 PM - 09:30 PM"}</span>
          </div>

          {/* Right: Direct Helpline Number Only */}
          <div className="flex items-center">
            <a
              href={`tel:${clinic.phone.replace(/[^0-9+]/g, "")}`}
              className="flex items-center gap-1.5 text-white hover:text-[#33a9b1] font-semibold transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#33a9b1] shrink-0" />
              <span>Helpline: {clinic.phone || "(208) 555-0112"}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar Container */}
      <div
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-[#d8dde1]/90"
            : "bg-white py-4 border-b border-[#d8dde1]/60"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <div className="flex items-center">
              <Image
                src="/dentox/images/logo.svg"
                alt="Dentique Dental Clinic"
                width={160}
                height={44}
                priority
                className="h-8 sm:h-10 w-auto object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation - 100% Single Line, Vertically Centered */}
          <nav
            className="hidden lg:flex items-center gap-6 xl:gap-8 text-[15px] font-semibold text-[#050c14] whitespace-nowrap"
            aria-label="Main Navigation"
          >
            <Link
              href="/"
              className="text-[#33a9b1] hover:text-[#288c93] py-2 transition-colors relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#33a9b1]"
            >
              Home
            </Link>

            <Link
              href="/#services"
              className="hover:text-[#33a9b1] py-2 transition-colors"
            >
              Services
            </Link>

            <Link
              href="/#transformations"
              className="hover:text-[#33a9b1] py-2 transition-colors"
            >
              Smile Gallery
            </Link>

            {/* Pages Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setPagesDropdownOpen(true)}
              onMouseLeave={() => setPagesDropdownOpen(false)}
            >
              <button
                type="button"
                className="inline-flex items-center gap-1.5 hover:text-[#33a9b1] py-2 transition-colors cursor-pointer"
                aria-expanded={pagesDropdownOpen}
              >
                <span>Pages</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    pagesDropdownOpen ? "rotate-180 text-[#33a9b1]" : ""
                  }`}
                />
              </button>

              {pagesDropdownOpen && (
                <div className="absolute top-full left-0 w-52 bg-white rounded-2xl shadow-xl border border-[#d8dde1] py-2.5 z-50 animate-slide-up">
                  <Link
                    href="/#about"
                    onClick={() => setPagesDropdownOpen(false)}
                    className="block px-4 py-2.5 text-sm text-[#050c14] hover:bg-[#f5f7fa] hover:text-[#33a9b1] transition-colors"
                  >
                    About Our Clinic
                  </Link>
                  <Link
                    href="/#choose-us"
                    onClick={() => setPagesDropdownOpen(false)}
                    className="block px-4 py-2.5 text-sm text-[#050c14] hover:bg-[#f5f7fa] hover:text-[#33a9b1] transition-colors"
                  >
                    Why Choose Us
                  </Link>
                  <Link
                    href="/#team"
                    onClick={() => setPagesDropdownOpen(false)}
                    className="block px-4 py-2.5 text-sm text-[#050c14] hover:bg-[#f5f7fa] hover:text-[#33a9b1] transition-colors"
                  >
                    Dental Specialists
                  </Link>
                  <Link
                    href="/#reviews"
                    onClick={() => setPagesDropdownOpen(false)}
                    className="block px-4 py-2.5 text-sm text-[#050c14] hover:bg-[#f5f7fa] hover:text-[#33a9b1] transition-colors"
                  >
                    Patient Reviews
                  </Link>
                  <Link
                    href="/#faq"
                    onClick={() => setPagesDropdownOpen(false)}
                    className="block px-4 py-2.5 text-sm text-[#050c14] hover:bg-[#f5f7fa] hover:text-[#33a9b1] transition-colors"
                  >
                    Common FAQ
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/#blog"
              className="hover:text-[#33a9b1] py-2 transition-colors"
            >
              Blog
            </Link>

            <Link
              href="/#register-appointment"
              className="hover:text-[#33a9b1] py-2 transition-colors"
            >
              Contact Us
            </Link>
          </nav>

          {/* Right Action Widgets */}
          <div className="flex items-center gap-1.5 sm:gap-4 lg:gap-6 shrink-0">
            {/* Emergency Hotline Call Pill */}
            <a
              href={`tel:${clinic.phone.replace(/[^0-9+]/g, "")}`}
              className="hidden 2xl:flex items-center gap-3 group text-left"
            >
              <div className="w-10 h-10 rounded-full bg-[#33a9b1]/15 group-hover:bg-[#33a9b1] text-[#33a9b1] group-hover:text-white flex items-center justify-center transition-all">
                <Phone className="w-4 h-4" />
              </div>
              <div className="leading-tight">
                <span className="block text-xs text-[#47697b] font-medium">Emergency Call</span>
                <span className="block text-sm font-bold text-[#050c14] group-hover:text-[#33a9b1] transition-colors">
                  {clinic.phone || "(208) 555-0112"}
                </span>
              </div>
            </a>

            {/* Make Appointment Pill Button (hidden on small mobile <sm to prevent overflowing 360px screens) */}
            <button
              onClick={onOpenBooking}
              className="hidden sm:inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-[#33a9b1] hover:bg-[#288c93] active:scale-[0.98] text-white font-semibold text-xs sm:text-sm shadow-sm transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#33a9b1] whitespace-nowrap"
            >
              <Calendar className="w-4 h-4" />
              <span>Make Appointment</span>
              <ArrowRight className="w-3.5 h-3.5 hidden sm:inline" />
            </button>

            {/* Quick Emergency Call Icon on small mobile (<sm) */}
            <a
              href={`tel:${clinic.phone.replace(/[^0-9+]/g, "")}`}
              className="sm:hidden p-2 rounded-xl text-[#33a9b1] hover:bg-[#e6f7f8] active:scale-95 transition-all"
              aria-label="Call Emergency Hotline"
            >
              <Phone className="w-5 h-5" />
            </a>

            {/* Mobile / Tablet Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 rounded-xl text-[#050c14] hover:bg-[#f5f7fa] active:scale-95 transition-all focus-visible:ring-2 focus-visible:ring-[#33a9b1]"
              aria-label="Open Navigation Menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* 3. Mobile Offcanvas Slide Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity animate-fade-in"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Offcanvas Drawer Content */}
          <div className="fixed top-0 right-0 w-full max-w-xs sm:max-w-sm h-full bg-white shadow-2xl z-50 flex flex-col p-6 overflow-y-auto animate-slide-up">
            <div className="flex items-center justify-between pb-5 border-b border-[#d8dde1]">
              <Image
                src="/dentox/images/logo.svg"
                alt="Dentique Dental Clinic"
                width={140}
                height={38}
                className="h-8 w-auto object-contain"
              />
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-full hover:bg-slate-100 text-slate-700"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="flex flex-col gap-3 py-6 text-base font-semibold text-[#050c14]">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#33a9b1] py-1.5"
              >
                Home
              </Link>
              <Link
                href="/#about"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#33a9b1] py-1.5 transition-colors"
              >
                About Clinic
              </Link>
              <Link
                href="/#services"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#33a9b1] py-1.5 transition-colors"
              >
                Our Services
              </Link>
              <Link
                href="/#choose-us"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#33a9b1] py-1.5 transition-colors"
              >
                Why Choose Us
              </Link>
              <Link
                href="/#transformations"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#33a9b1] py-1.5 transition-colors"
              >
                Smile Gallery
              </Link>
              <Link
                href="/#team"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#33a9b1] py-1.5 transition-colors"
              >
                Dental Specialists
              </Link>
              <Link
                href="/#reviews"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#33a9b1] py-1.5 transition-colors"
              >
                Patient Reviews
              </Link>
              <Link
                href="/#faq"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#33a9b1] py-1.5 transition-colors"
              >
                FAQ
              </Link>
              <Link
                href="/#blog"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#33a9b1] py-1.5 transition-colors"
              >
                Dental Blog
              </Link>
              <Link
                href="/#register-appointment"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#33a9b1] py-1.5 transition-colors"
              >
                Contact Us
              </Link>
            </nav>

            <div className="mt-auto pt-6 border-t border-[#d8dde1] flex flex-col gap-4">
              <div className="text-xs text-[#47697b] flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#33a9b1]" />
                  <span>{clinic.hours || "09:00 am - 06:00 pm"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#33a9b1]" />
                  <span>{clinic.phone || "(208) 555-0112"}</span>
                </div>
              </div>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3.5 rounded-full bg-[#33a9b1] hover:bg-[#288c93] text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-sm"
              >
                <Calendar className="w-4 h-4" />
                <span>Make Appointment</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
