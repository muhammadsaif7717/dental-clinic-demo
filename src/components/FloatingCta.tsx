"use client";

import { DentalClinic } from "@/data/clinics";
import { Phone, Calendar, MessageCircle } from "lucide-react";

interface FloatingCtaProps {
  clinic: DentalClinic;
  onOpenBooking: () => void;
}

export default function FloatingCta({ clinic, onOpenBooking }: FloatingCtaProps) {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200/90 px-3 pt-2.5 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-xl">
      <div className="max-w-md mx-auto grid grid-cols-2 gap-2.5">
        <a
          href={`tel:${clinic.phone.replace(/[^0-9]/g, "")}`}
          className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs active:scale-[0.98] transition-all shadow-2xs min-h-[44px]"
          aria-label={`কল করুন ${clinic.phone}`}
        >
          <Phone className="w-3.5 h-3.5 text-teal-400" />
          <span>জরুরি কল</span>
        </a>

        <button
          onClick={onOpenBooking}
          className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs shadow-xs active:scale-[0.98] transition-all cursor-pointer min-h-[44px]"
        >
          <Calendar className="w-4 h-4 text-teal-100" />
          <span>সিরিয়াল নিন</span>
        </button>
      </div>
    </div>
  );
}
