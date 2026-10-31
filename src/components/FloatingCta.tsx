"use client";

import { DentalClinic } from "@/data/clinics";
import { Phone, Calendar, MessageCircle } from "lucide-react";

interface FloatingCtaProps {
  clinic: DentalClinic;
  onOpenBooking: () => void;
}

export default function FloatingCta({ clinic, onOpenBooking }: FloatingCtaProps) {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200/90 px-3 pt-2.5 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-2xl">
      <div className="max-w-md mx-auto grid grid-cols-2 gap-2.5">
        <a
          href={`tel:${clinic.phone.replace(/[^0-9]/g, "")}`}
          className="flex items-center justify-center gap-1.5 py-3 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs active:scale-95 transition shadow-xs"
        >
          <Phone className="w-3.5 h-3.5 text-teal-400" />
          <span>কল করুন</span>
        </a>

        <button
          onClick={onOpenBooking}
          className="flex items-center justify-center gap-1.5 py-3 px-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs shadow-md active:scale-95 transition cursor-pointer"
        >
          <MessageCircle className="w-4 h-4 text-white" />
          <span>সিরিয়াল নিন</span>
        </button>
      </div>
    </div>
  );
}

