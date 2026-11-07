"use client";

import { DentalClinic } from "@/data/clinics";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Send, Clock, MapPin, Mail, Phone } from "lucide-react";
import { useState } from "react";

interface FooterProps {
  clinic: DentalClinic;
  onOpenBooking: () => void;
  isClientMode?: boolean;
}

export default function Footer({ clinic, onOpenBooking, isClientMode }: FooterProps) {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setNewsletterEmail("");
    }, 4000);
  };

  return (
    <footer className="bg-[#1f3d3f] text-white pt-16 sm:pt-20 pb-12 relative overflow-hidden">
      
      {/* Footer Top Contact Highlight Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14 sm:mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-[#162f31] p-6 sm:p-8 rounded-3xl border border-[#2d5254]">
          
          {/* Email Box */}
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-[#33a9b1] text-white flex items-center justify-center shrink-0">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs text-[#dee8de] block font-medium">General Inquiries</span>
              <a
                href="mailto:info@dentiqueclinic.com"
                className="text-sm sm:text-base font-bold text-white hover:text-[#33a9b1] transition-colors"
              >
                info@dentiqueclinic.com
              </a>
            </div>
          </div>

          {/* Location Box */}
          <div className="flex items-center gap-4 border-t md:border-t-0 md:border-l border-[#2d5254] pt-4 md:pt-0 md:pl-6">
            <div className="w-14 h-14 rounded-2xl bg-[#33a9b1] text-white flex items-center justify-center shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs text-[#dee8de] block font-medium">Visit Our Clinic</span>
              <h4 className="text-sm sm:text-base font-bold text-white leading-snug">
                {clinic.address || "35 Todds Lane San Antonio, TX 98336"}
              </h4>
            </div>
          </div>

          {/* Emergency Phone Box */}
          <div className="flex items-center gap-4 border-t md:border-t-0 md:border-l border-[#2d5254] pt-4 md:pt-0 md:pl-6">
            <div className="w-14 h-14 rounded-2xl bg-[#33a9b1] text-white flex items-center justify-center shrink-0">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs text-[#dee8de] block font-medium">Emergency Hotline</span>
              <a
                href={`tel:${clinic.phone.replace(/[^0-9+]/g, "")}`}
                className="text-sm sm:text-base font-bold text-white hover:text-[#33a9b1] transition-colors"
              >
                {clinic.phone || "(208) 555-0112"}
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Main Footer Content Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-[#2d5254]">
          
          {/* Col 1: Brand & Opening Hours (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="inline-block">
              <Image
                src="/dentox/images/logo.svg"
                alt="Dentique Dental Clinic"
                width={175}
                height={48}
                className="h-10 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-sm text-[#dee8de]/80 leading-relaxed max-w-sm">
              Experience compassionate care and advanced dental solutions for a healthy, confident, and radiant smile.
            </p>

            {/* Opening Hours Table matching Dentox */}
            <div className="bg-[#162f31] p-5 rounded-2xl border border-[#2d5254] space-y-2.5 text-xs sm:text-sm">
              <div className="flex justify-between items-center text-[#dee8de]/80">
                <span className="font-semibold text-white">Week Days</span>
                <span>09:00 am - 07:00 pm</span>
              </div>
              <div className="flex justify-between items-center text-[#dee8de]/80 border-t border-[#2d5254] pt-2">
                <span className="font-semibold text-white">Saturday</span>
                <span>08:00 am - 02:00 pm</span>
              </div>
              <div className="flex justify-between items-center text-[#dee8de]/80 border-t border-[#2d5254] pt-2">
                <span className="font-semibold text-white">Sunday</span>
                <span className="text-[#33a9b1] font-bold">Emergency Only</span>
              </div>
            </div>
          </div>

          {/* Col 2: Our Company Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-base font-bold text-white uppercase tracking-wider">
              Our Clinic
            </h4>
            <ul className="space-y-2.5 text-sm text-[#dee8de]/80">
              <li>
                <Link href="/#about" className="hover:text-[#33a9b1] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-[#33a9b1] transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/#team" className="hover:text-[#33a9b1] transition-colors">
                  Dental Specialists
                </Link>
              </li>
              <li>
                <Link href="/#transformations" className="hover:text-[#33a9b1] transition-colors">
                  Before & After
                </Link>
              </li>
              <li>
                <Link href="/#reviews" className="hover:text-[#33a9b1] transition-colors">
                  Patient Reviews
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="hover:text-[#33a9b1] transition-colors">
                  FAQ & Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Services Links (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-base font-bold text-white uppercase tracking-wider">
              Specialized Care
            </h4>
            <ul className="space-y-2.5 text-sm text-[#dee8de]/80">
              <li>
                <Link href="/#services" className="hover:text-[#33a9b1] transition-colors">
                  Cosmetic Dentistry & Veneers
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-[#33a9b1] transition-colors">
                  Pediatric Gentle Care
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-[#33a9b1] transition-colors">
                  Dental Implants & Bone Grafting
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-[#33a9b1] transition-colors">
                  Rotary Painless Root Canal
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-[#33a9b1] transition-colors">
                  Laser Teeth Whitening
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-[#33a9b1] transition-colors">
                  Invisalign & Clear Aligners
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Newsletter Subscription (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-base font-bold text-white uppercase tracking-wider">
              Newsletter
            </h4>
            <p className="text-xs sm:text-sm text-[#dee8de]/80 leading-relaxed">
              Join our dental health community and receive monthly wellness tips straight to your inbox.
            </p>

            {subscribed ? (
              <div className="p-4 bg-[#33a9b1]/20 border border-[#33a9b1] rounded-2xl text-xs text-[#dee8de]">
                ✓ Thank you for subscribing to Dentique insights!
              </div>
            ) : (
              <form onSubmit={handleNewsletter} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-4 py-3.5 pr-12 rounded-full bg-[#162f31] border border-[#2d5254] text-white placeholder-white/50 text-xs sm:text-sm focus:outline-none focus:border-[#33a9b1]"
                  />
                  <button
                    type="submit"
                    className="absolute right-1.5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-[#33a9b1] hover:bg-[#288c93] text-white flex items-center justify-center transition-all"
                    aria-label="Submit newsletter subscription"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}

            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="w-full py-3 rounded-full bg-white text-[#050c14] hover:bg-[#33a9b1] hover:text-white font-semibold text-xs transition-colors"
              >
                Schedule Appointment Now
              </button>
            </div>
          </div>

        </div>

        {/* Footer Bottom Copyright & Links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#dee8de]/70">
          <p>
            Copyright © 2026 <span className="text-white font-semibold">Dentique</span>. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms & Conditions
            </a>
            <a href="#" className="hover:text-white transition-colors">
              HIPAA Compliance
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
