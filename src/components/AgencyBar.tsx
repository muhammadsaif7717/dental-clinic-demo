"use client";

import { useState } from "react";
import { DENTAL_CLINICS, DentalClinic } from "@/data/clinics";
import { Check, Copy, Sparkles, Eye, Share2 } from "lucide-react";

interface AgencyBarProps {
  currentClinic: DentalClinic;
  onSelectClinic: (id: string) => void;
  isClientMode: boolean;
  setIsClientMode: (val: boolean) => void;
}

export default function AgencyBar({
  currentClinic,
  onSelectClinic,
  isClientMode,
  setIsClientMode,
}: AgencyBarProps) {
  const [copied, setCopied] = useState(false);

  // If in client view mode, COMPLETELY HIDE the bar and floating buttons
  // The client will see 100% legitimate clinic website with ZERO agency UI
  if (isClientMode) {
    return null;
  }

  const handleCopyCleanClientLink = () => {
    if (typeof window !== "undefined") {
      const shareUrl = `${window.location.origin}/?client=${currentClinic.id}&view=client`;
      navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handlePreviewAsClient = () => {
    if (typeof window !== "undefined") {
      window.open(`/?client=${currentClinic.id}&view=client`, "_blank");
    }
  };

  return (
    <aside aria-label="Agency Controls" className="bg-slate-900 text-slate-100 border-b border-slate-800 sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 py-2 sm:py-2.5 flex flex-wrap items-center justify-between gap-2.5 text-xs">
        
        {/* Left Indicator */}
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="font-semibold text-emerald-400 flex items-center gap-1.5 text-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Agency Pitch Mode</span>
          </span>
          <span className="text-slate-400 hidden lg:inline">
            • ক্লায়েন্ট পরিবর্তন করুন এবং তাদের জন্য লিংক কপি করুন
          </span>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-2 flex-wrap">
          <select
            value={currentClinic.id}
            onChange={(e) => onSelectClinic(e.target.value)}
            className="max-w-[160px] xs:max-w-[200px] sm:max-w-[240px] bg-slate-800 text-white text-xs rounded-lg px-2.5 py-1.5 border border-slate-700 focus:outline-none focus:ring-1 focus:ring-teal-500 cursor-pointer font-medium truncate"
          >
            {DENTAL_CLINICS.map((clinic, index) => (
              <option key={clinic.id} value={clinic.id}>
                {index + 1}. {clinic.name} ({clinic.area.split(",")[0]})
              </option>
            ))}
          </select>

          {/* Clean Client Link Copy */}
          <button
            onClick={handleCopyCleanClientLink}
            className="flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 text-white px-3 py-1.5 rounded-lg text-xs font-semibold shadow-sm transition active:scale-95 cursor-pointer shrink-0"
            title="ক্লায়েন্টকে পাঠানোর মতো ক্লিন লিংক কপি করুন (এতে এই বারটি থাকবে না)"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-white" />
                <span>কপি হয়েছে!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>শেয়ার লিংক</span>
              </>
            )}
          </button>

          {/* Test in New Tab as Client */}
          <button
            onClick={handlePreviewAsClient}
            className="flex items-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white px-2.5 py-1.5 rounded-lg text-xs border border-slate-700 transition cursor-pointer shrink-0"
            title="নতুন ট্যাবে দেখুন ক্লায়েন্ট কেমন দেখবে"
          >
            <Eye className="w-3.5 h-3.5 text-teal-400" />
            <span className="hidden sm:inline">ক্লায়েন্ট ভিউ</span>
          </button>
        </div>

      </div>
    </aside>
  );
}
