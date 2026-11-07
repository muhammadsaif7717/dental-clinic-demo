"use client";

import { DentalClinic } from "@/data/clinics";
import Image from "next/image";
import RevealOnScroll from "@/components/RevealOnScroll";

interface DoctorSectionProps {
  clinic: DentalClinic;
  onOpenBooking: () => void;
}

export interface DoctorMember {
  name: string;
  role: string;
  experience: string;
  image: string;
}

const DENTIQUE_DOCTORS: DoctorMember[] = [
  {
    name: "Dr. Michael Thompson, DMD",
    role: "Chief Implantologist",
    experience: "15 years",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Dr. Sarah Kim, DDS, MS",
    role: "Orthodontist Specialist",
    experience: "11 years",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Dr. Amanda Clark, DDS",
    role: "Cosmetic Specialist",
    experience: "8 years",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Lena Torres, CDA",
    role: "Certified Dental Assistant",
    experience: "5 years",
    image: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Emily Roberts, RDH",
    role: "Registered Dental Hygienist",
    experience: "7 years",
    image: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Dr. Andi Doffren, DMD",
    role: "Dental Surgeon & Periodontist",
    experience: "10 years",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=600&q=80",
  },
];

export default function DoctorSection({ clinic, onOpenBooking }: DoctorSectionProps) {
  return (
    <section id="team" className="py-20 sm:py-28 bg-[#f8fbfb] relative overflow-hidden">
      {/* Subtle Background Dental Ambient Watermarks matching reference image */}
      <div className="absolute inset-0 pointer-events-none select-none opacity-40">
        <div className="absolute top-12 left-8 text-[#33a9b1]/20">
          <svg width="44" height="44" viewBox="0 0 24 24" fill="currentColor">
            <path d="M10 4h4v6h6v4h-6v6h-4v-6H4v-4h6V4z" />
          </svg>
        </div>
        <div className="absolute top-1/4 right-10 text-[#33a9b1]/20">
          <svg width="34" height="34" viewBox="0 0 24 24" fill="currentColor">
            <path d="M10 4h4v6h6v4h-6v6h-4v-6H4v-4h6V4z" />
          </svg>
        </div>
        <div className="absolute bottom-16 left-1/3 text-[#33a9b1]/15">
          <svg width="38" height="38" viewBox="0 0 24 24" fill="currentColor">
            <path d="M10 4h4v6h6v4h-6v6h-4v-6H4v-4h6V4z" />
          </svg>
        </div>
        <div className="absolute top-2/3 right-1/4 text-[#33a9b1]/20">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
            <path d="M10 4h4v6h6v4h-6v6h-4v-6H4v-4h6V4z" />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <RevealOnScroll direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#33a9b1]">
                <span className="w-6 h-0.5 bg-[#33a9b1]"></span>
                Our Dentists
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#050c14] tracking-tight">
                Our Professional Team
              </h2>
            </div>
            <p className="text-[#47697b] max-w-md text-sm sm:text-base leading-relaxed">
              Dedicated specialists with world-class medical training and a gentle, compassionate bedside manner.
            </p>
          </div>
        </RevealOnScroll>

        {/* 6 Doctors Grid (3 Columns on Desktop, 2 on Tablet, 1 on Mobile) matching Reference Image */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {DENTIQUE_DOCTORS.map((doc, idx) => (
            <RevealOnScroll
              key={idx}
              direction="up"
              delay={idx * 70}
              className="h-full"
            >
              <div
                onClick={onOpenBooking}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    onOpenBooking();
                  }
                }}
                className="group bg-white rounded-3xl p-6 sm:p-7 border border-[#e5edf0] hover:border-[#33a9b1] shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_36px_rgba(0,168,188,0.12)] transition-all duration-300 flex flex-col justify-between h-full cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#33a9b1] card-hover-lift"
              >
                {/* Top Row: Social Icons (Left) + Doctor Photo (Right) */}
                <div className="flex items-center justify-between gap-4 mb-6 sm:mb-8">
                  {/* Circular Social Buttons List (f, X, Instagram, in) */}
                  <div
                    className="flex items-center gap-2 sm:gap-2.5"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {/* Facebook Icon */}
                    <a
                      href="#facebook"
                      aria-label={`${doc.name} Facebook`}
                      className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#edf5f9] text-[#1e293b] flex items-center justify-center font-bold text-xs sm:text-sm hover:bg-[#33a9b1] hover:text-white transition-all duration-200"
                    >
                      f
                    </a>

                    {/* X (Twitter) Icon */}
                    <a
                      href="#twitter"
                      aria-label={`${doc.name} X`}
                      className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#edf5f9] text-[#1e293b] flex items-center justify-center hover:bg-[#33a9b1] hover:text-white transition-all duration-200"
                    >
                      <svg
                        className="w-3.5 h-3.5 fill-current"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </a>

                    {/* Instagram Icon */}
                    <a
                      href="#instagram"
                      aria-label={`${doc.name} Instagram`}
                      className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#edf5f9] text-[#1e293b] flex items-center justify-center hover:bg-[#33a9b1] hover:text-white transition-all duration-200"
                    >
                      <svg
                        className="w-4 h-4 stroke-current fill-none stroke-[2]"
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                      </svg>
                    </a>

                    {/* LinkedIn Icon */}
                    <a
                      href="#linkedin"
                      aria-label={`${doc.name} LinkedIn`}
                      className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#edf5f9] text-[#1e293b] flex items-center justify-center font-bold text-xs sm:text-sm hover:bg-[#33a9b1] hover:text-white transition-all duration-200"
                    >
                      in
                    </a>
                  </div>

                  {/* Doctor Avatar/Photo */}
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden shrink-0 border border-slate-100 bg-slate-50 shadow-xs">
                    <Image
                      src={doc.image}
                      alt={doc.name}
                      fill
                      sizes="96px"
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Bottom Section: Name + Role | Experience */}
                <div className="space-y-1.5">
                  <h3 className="text-lg sm:text-xl font-bold text-[#050c14] group-hover:text-[#33a9b1] transition-colors leading-snug">
                    {doc.name}
                  </h3>
                  <div className="flex items-center flex-wrap gap-2 text-xs sm:text-sm font-medium text-[#788094]">
                    <span>{doc.role}</span>
                    <span className="text-slate-300">|</span>
                    <span className="text-[#00a8bc] font-semibold">
                      Experience: {doc.experience}
                    </span>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
