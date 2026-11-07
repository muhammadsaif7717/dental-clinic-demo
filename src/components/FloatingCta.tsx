"use client";

import { DentalClinic } from "@/data/clinics";
import { Phone, Calendar } from "lucide-react";

interface FloatingCtaProps {
  clinic: DentalClinic;
  onOpenBooking: () => void;
}

export default function FloatingCta({ clinic, onOpenBooking }: FloatingCtaProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#d8dde1] p-3 md:hidden shadow-lg flex items-center justify-between gap-3">
      <a
        href={`tel:${clinic.phone.replace(/[^0-9+]/g, "")}`}
        className="flex-1 py-3 px-4 rounded-full bg-[#f5f7fa] hover:bg-[#dee8de] text-[#050c14] font-semibold text-xs flex items-center justify-center gap-2 border border-[#d8dde1] active:scale-[0.98] transition-all"
      >
        <Phone className="w-4 h-4 text-[#33a9b1]" />
        <span>Emergency Call</span>
      </a>

      <button
        onClick={onOpenBooking}
        className="flex-1 py-3 px-4 rounded-full bg-[#33a9b1] hover:bg-[#288c93] text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-md active:scale-[0.98] transition-all"
      >
        <Calendar className="w-4 h-4" />
        <span>Make Appointment</span>
      </button>
    </div>
  );
}
