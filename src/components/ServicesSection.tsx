"use client";

import { DentalClinic } from "@/data/clinics";
import { ArrowRight, Clock } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import RevealOnScroll from "@/components/RevealOnScroll";

interface ServicesSectionProps {
  clinic: DentalClinic;
  onOpenBooking: (serviceName?: string) => void;
}

const DENTOX_SERVICES = [
  {
    title: "Cosmetic Dentistry",
    bengaliTitle: "কসমেটিক ডেন্টিস্ট্রি ও স্মাইল ডিজাইন",
    description: "Custom porcelain veneers, composite bonding, and gum contouring for a radiant smile transformation.",
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80",
    price: "From $150 / ৳৫,০০০",
    tag: "Popular",
  },
  {
    title: "Pediatric Dentistry",
    bengaliTitle: "পেডিয়াট্রিক ডেন্টিস্ট্রি (শিশু ডেন্টাল কেয়ার)",
    description: "Gentle, stress-free dental care for children, cavity prevention, sealants, and early orthodontic monitoring.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80",
    price: "From $80 / ৳২,৫০০",
    tag: "Gentle Care",
  },
  {
    title: "General Dentistry",
    bengaliTitle: "জেনারেল ডেন্টিস্ট্রি ও রুটিন চেকআপ",
    description: "Comprehensive dental cleanings, digital checkups, composite fillings, and proactive oral wellness.",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80",
    price: "From $50 / ৳১,৫০০",
    tag: "Essential",
  },
  {
    title: "Dental Implants & Surgery",
    bengaliTitle: "ডেন্টাল ইমপ্ল্যান্ট ও ওরাল সার্জারি",
    description: "Permanent titanium and zirconia tooth replacements, bone grafting, and computerized implant surgery.",
    image: "https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=800&q=80",
    price: "From $450 / ৳২৫,০০০",
    tag: "Permanent",
  },
  {
    title: "Orthodontics & Clear Aligners",
    bengaliTitle: "অর্থোডন্টিক ব্রেসেস ও ক্লিয়ার এলাইনার",
    description: "Invisalign, clear aligners, and traditional ceramic braces to correct misaligned teeth and bite issues.",
    image: "https://images.unsplash.com/photo-1588776813677-77aaf5595b83?auto=format&fit=crop&w=800&q=80",
    price: "From $350 / ৳২০,০০০",
    tag: "Straight Teeth",
  },
  {
    title: "Teeth Whitening & Laser Care",
    bengaliTitle: "টিথ হোয়াইটেনিং ও লেজার ডেন্টিস্ট্রি",
    description: "Professional in-chair laser whitening lightening up to 8 shades in just 45 minutes safely.",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80",
    price: "From $120 / ৳৪,০০০",
    tag: "Instant Results",
  },
];

export default function ServicesSection({ clinic, onOpenBooking }: ServicesSectionProps) {
  return (
    <section id="services" className="py-20 sm:py-28 bg-[#f5f7fa] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Reveal */}
        <RevealOnScroll direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#33a9b1]">
                <span className="w-6 h-0.5 bg-[#33a9b1]"></span>
                Our Specialized Services
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#050c14] tracking-tight">
                Best Dental Service for you
              </h2>
            </div>
            <p className="text-[#47697b] max-w-md text-sm sm:text-base leading-relaxed">
              Routine checkups, cleanings, and advanced preventive treatments to restore and maintain your lifelong oral health.
            </p>
          </div>
        </RevealOnScroll>

        {/* Services Cards Grid with Staggered Scroll Reveal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DENTOX_SERVICES.map((service, idx) => (
            <RevealOnScroll
              key={idx}
              direction="up"
              delay={idx * 100}
              className="h-full"
            >
              <div className="group bg-white rounded-3xl overflow-hidden border border-[#d8dde1] hover:border-[#33a9b1] hover:shadow-2xl transition-all duration-300 flex flex-col h-full card-hover-lift">
                {/* Image Container */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3.5 py-1 rounded-full text-xs font-bold text-[#050c14] border border-white/60 shadow-xs">
                    {service.tag}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-1.5">
                      <h3 className="text-xl font-bold text-[#050c14] group-hover:text-[#33a9b1] transition-colors">
                        {service.title}
                      </h3>
                      <span className="text-xs font-bold text-[#33a9b1] bg-[#33a9b1]/10 px-2.5 py-1 rounded-full shrink-0">
                        {service.price}
                      </span>
                    </div>
                    <p className="text-xs font-medium text-[#33a9b1] mb-2">{service.bengaliTitle}</p>
                    <p className="text-sm text-[#47697b] leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Footer action button */}
                  <div className="pt-4 border-t border-[#d8dde1]/60 flex items-center justify-between">
                    <span className="text-xs text-[#47697b] flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#33a9b1]" />
                      <span>30 - 60 Mins</span>
                    </span>

                    <button
                      onClick={() => onOpenBooking(service.title)}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#050c14] group-hover:text-[#33a9b1] transition-colors"
                    >
                      <span>Book Service</span>
                      <div className="w-7 h-7 rounded-full bg-[#f5f7fa] group-hover:bg-[#33a9b1] group-hover:text-white flex items-center justify-center transition-all">
                        <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        {/* Bottom Banner */}
        <RevealOnScroll direction="up" delay={200}>
          <div className="mt-14 text-center">
            <p className="text-sm text-[#47697b]">
              Looking for a customized treatment plan or emergency dental relief?{" "}
              <button
                onClick={() => onOpenBooking()}
                className="text-[#33a9b1] font-bold hover:underline ml-1"
              >
                Consult with our specialists today →
              </button>
            </p>
          </div>
        </RevealOnScroll>

      </div>
    </section>
  );
}
