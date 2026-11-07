"use client";

import Image from "next/image";

const BRAND_LOGOS = [
  "/dentox/images/br1.png",
  "/dentox/images/br2.png",
  "/dentox/images/br3.png",
  "/dentox/images/br4.png",
  "/dentox/images/br5.png",
  "/dentox/images/br6.png",
  "/dentox/images/br7.png",
  "/dentox/images/br8.png",
];

export default function BrandMarquee() {
  return (
    <section className="py-12 bg-[#dee8de]/40 border-y border-[#d8dde1]/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-6 text-center">
        <span className="text-xs font-bold tracking-widest uppercase text-[#47697b]/80">
          Trusted by Premier Healthcare & Dental Technology Partners Worldwide
        </span>
      </div>

      {/* Infinite Scrolling Marquee Track */}
      <div className="relative w-full overflow-hidden">
        {/* Soft edge blur masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#dee8de]/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#dee8de]/80 to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex items-center gap-16 py-3">
          {/* First loop */}
          {BRAND_LOGOS.map((logo, idx) => (
            <div
              key={`logo-1-${idx}`}
              className="flex items-center justify-center grayscale hover:grayscale-0 opacity-75 hover:opacity-100 transition-all duration-300 shrink-0 h-12 w-32"
            >
              <Image
                src={logo}
                alt={`Dental partner brand ${idx + 1}`}
                width={120}
                height={40}
                style={{ width: "auto", height: "auto" }}
                className="max-h-9 object-contain"
              />
            </div>
          ))}

          {/* Duplicated loop for seamless infinite animation */}
          {BRAND_LOGOS.map((logo, idx) => (
            <div
              key={`logo-2-${idx}`}
              className="flex items-center justify-center grayscale hover:grayscale-0 opacity-75 hover:opacity-100 transition-all duration-300 shrink-0 h-12 w-32"
            >
              <Image
                src={logo}
                alt={`Dental partner brand duplicate ${idx + 1}`}
                width={120}
                height={40}
                style={{ width: "auto", height: "auto" }}
                className="max-h-9 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
