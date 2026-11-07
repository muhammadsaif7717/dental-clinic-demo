"use client";

import { DentalClinic } from "@/data/clinics";
import { Phone, Calendar } from "lucide-react";

interface FloatingCtaProps {
  clinic: DentalClinic;
  onOpenBooking: () => void;
}

export default function FloatingCta({ clinic, onOpenBooking }: FloatingCtaProps) {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#d8dde1] px-3 py-2 sm:px-4 sm:py-3 md:hidden shadow-[0_-4px_20px_rgba(0,0,0,0.08)] flex items-center justify-between gap-2 max-w-full">
      <a
        href={`tel:${clinic.phone.replace(/[^0-9+]/g, "")}`}
        className="flex-1 min-w-0 py-2.5 px-3 rounded-full bg-[#f5f7fa] hover:bg-[#dee8de] text-[#050c14] font-semibold text-xs flex items-center justify-center gap-1.5 border border-[#d8dde1] active:scale-[0.98] transition-all"
      >
        <Phone className="w-3.5 h-3.5 text-[#33a9b1] shrink-0" />
        <span className="truncate">Emergency Call</span>
      </a>

      <button
        onClick={onOpenBooking}
        className="flex-1 min-w-0 py-2.5 px-3 rounded-full bg-[#33a9b1] hover:bg-[#288c93] text-white font-semibold text-xs flex items-center justify-center gap-1.5 shadow-sm active:scale-[0.98] transition-all"
      >
        <Calendar className="w-3.5 h-3.5 shrink-0" />
        <span className="truncate">Make Appointment</span>
      </button>
    </div>
  );
}
