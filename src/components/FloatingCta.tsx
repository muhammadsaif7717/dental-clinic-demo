"use client";

import { DentalClinic } from "@/data/clinics";
import { Phone, Calendar, MessageCircle } from "lucide-react";

interface FloatingCtaProps {
  clinic: DentalClinic;
  onOpenBooking: () => void;
}

export default function FloatingCta({ clinic, onOpenBooking }: FloatingCtaProps) {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 p-2.5 shadow-2xl">
      <div className="grid grid-cols-2 gap-2">
        <a
          href={`tel:${clinic.phone.replace(/[^0-9]/g, "")}`}
          className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-slate-900 text-white font-semibold text-xs active:scale-95 transition"
        >
          <Phone className="w-3.5 h-3.5 text-sky-400" />
          <span>কল করুন</span>
        </a>

        <button
          onClick={onOpenBooking}
          className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold text-xs shadow-md active:scale-95 transition cursor-pointer"
        >
          <MessageCircle className="w-4 h-4 text-white" />
          <span>সিরিয়াল নিন</span>
        </button>
      </div>
    </div>
  );
}

