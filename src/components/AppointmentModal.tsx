"use client";

import { useState, useEffect, useRef } from "react";
import { DentalClinic } from "@/data/clinics";
import {
  X,
  Calendar,
  Phone,
  User,
  Mail,
  CheckCircle,
  Clock,
  Loader2,
  ChevronDown,
  Check,
  Sparkles,
  Sun,
  Sunset,
  Sunrise,
  Stethoscope,
} from "lucide-react";

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  clinic: DentalClinic;
  initialService?: string;
}

const SERVICES_LIST = [
  { name: "Cosmetic Dentistry", category: "Smile Makeover", tag: "Popular" },
  { name: "Pediatric Dentistry", category: "Child Gentle Care", tag: "Gentle" },
  { name: "General Dentistry", category: "Checkup & Cleaning", tag: "Essential" },
  { name: "Dental Implants & Surgery", category: "Permanent Teeth", tag: "Surgical" },
  { name: "Orthodontics & Aligners", category: "Straight Teeth", tag: "Invisalign" },
  { name: "Teeth Whitening", category: "Laser Whitening", tag: "Instant" },
  { name: "Painless Root Canal", category: "Endodontics", tag: "Pain-Free" },
];

const DOCTORS_LIST = [
  { name: "Dr. Michael Thompson, DMD", role: "Chief Implantologist" },
  { name: "Dr. Sarah Kim, DDS, MS", role: "Orthodontist Specialist" },
  { name: "Dr. Amanda Clark, DDS", role: "Cosmetic Specialist" },
  { name: "Lena Torres, CDA", role: "Certified Dental Assistant" },
  { name: "Emily Roberts, RDH", role: "Registered Dental Hygienist" },
  { name: "Dr. Andi Doffren, DMD", role: "Dental Surgeon & Periodontist" },
];

const TIME_SLOTS = [
  { id: "morning", time: "09:00 AM - 11:00 AM", label: "Morning", icon: Sunrise },
  { id: "midday", time: "11:30 AM - 01:30 PM", label: "Midday", icon: Sun },
  { id: "afternoon", time: "02:30 PM - 04:30 PM", label: "Afternoon", icon: Sunset },
  { id: "evening", time: "05:00 PM - 07:00 PM", label: "Evening", icon: Clock },
];

export default function AppointmentModal({
  isOpen,
  onClose,
  clinic,
  initialService,
}: AppointmentModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState(initialService || "Cosmetic Dentistry");
  const [doctor, setDoctor] = useState("Dr. Michael Thompson, DMD");
  const [date, setDate] = useState(() => {
    // Default to tomorrow's date
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().split("T")[0];
  });
  const [timeSlot, setTimeSlot] = useState("09:00 AM - 11:00 AM");

  const [serviceDropdownOpen, setServiceDropdownOpen] = useState(false);
  const [doctorDropdownOpen, setDoctorDropdownOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const serviceRef = useRef<HTMLDivElement>(null);
  const doctorRef = useRef<HTMLDivElement>(null);

  // Today's date string for min attribute (cannot book in the past)
  const todayStr = new Date().toISOString().split("T")[0];

  useEffect(() => {
    if (initialService) {
      setService(initialService);
    }
  }, [initialService]);

  // Click outside to close custom dropdowns
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (serviceRef.current && !serviceRef.current.contains(e.target as Node)) {
        setServiceDropdownOpen(false);
      }
      if (doctorRef.current && !doctorRef.current.contains(e.target as Node)) {
        setDoctorDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Keyboard Escape listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (serviceDropdownOpen || doctorDropdownOpen) {
          setServiceDropdownOpen(false);
          setDoctorDropdownOpen(false);
        } else {
          onClose();
        }
      }
    };
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose, serviceDropdownOpen, doctorDropdownOpen]);

  if (!isOpen) return null;

  // Quick date helper buttons
  const setQuickDate = (daysFromToday: number) => {
    const d = new Date();
    d.setDate(d.getDate() + daysFromToday);
    setDate(d.toISOString().split("T")[0]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !date) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  // Format readable date preview
  const getReadableDate = (dateStr: string) => {
    if (!dateStr) return "";
    try {
      const parts = dateStr.split("-");
      const d = new Date(parseInt(parts[0]), parseInt(parts[1]) - 1, parseInt(parts[2]));
      return d.toLocaleDateString("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
        year: "numeric",
      });
    } catch {
      return dateStr;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/65 backdrop-blur-xs transition-opacity animate-fade-in"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-[#d8dde1] overflow-hidden z-10 animate-slide-up max-h-[94vh] flex flex-col">
        
        {/* Header */}
        <div className="bg-[#1f3d3f] text-white p-5 sm:p-6 flex items-center justify-between shrink-0">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#33a9b1] uppercase tracking-wider mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Dentique Clinical Booking</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
              Schedule Your Visit
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 text-white flex items-center justify-center transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#33a9b1]"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 overflow-y-auto flex-1">
          {submitted ? (
            <div className="py-8 text-center space-y-4 animate-scale-in">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-[#050c14]">
                Appointment Confirmed!
              </h4>
              <div className="p-4 bg-[#f5f7fa] rounded-2xl border border-[#d8dde1] text-xs sm:text-sm text-[#47697b] max-w-sm mx-auto space-y-1.5 text-left">
                <p><span className="font-semibold text-[#050c14]">Patient:</span> {name}</p>
                <p><span className="font-semibold text-[#050c14]">Phone:</span> {phone}</p>
                <p><span className="font-semibold text-[#050c14]">Service:</span> {service}</p>
                <p><span className="font-semibold text-[#050c14]">Specialist:</span> {doctor}</p>
                <p><span className="font-semibold text-[#050c14]">Date & Time:</span> {getReadableDate(date)} at {timeSlot}</p>
              </div>
              <p className="text-xs text-[#47697b] max-w-xs mx-auto">
                Our clinical coordinator will call you to confirm any specific arrival guidelines.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="px-8 py-3 rounded-full bg-[#33a9b1] hover:bg-[#288c93] active:scale-95 text-white font-bold text-sm transition-all shadow-md cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* 1. Full Name (Input type="text") */}
              <div>
                <label className="block text-xs font-bold text-[#050c14] mb-1.5 uppercase tracking-wide">
                  Full Name <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    required
                    autoComplete="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. John Doe"
                    className="w-full pl-10 pr-4 py-3 bg-[#f5f7fa] border border-[#d8dde1] hover:border-[#33a9b1]/60 focus:border-[#33a9b1] rounded-xl text-sm text-[#050c14] placeholder-[#47697b]/50 focus:outline-none focus:ring-2 focus:ring-[#33a9b1]/20 transition-all font-medium"
                  />
                  <User className="w-4 h-4 text-[#33a9b1] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              {/* 2. Phone Number (Input type="number" / numeric) & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-[#050c14] mb-1.5 uppercase tracking-wide">
                    Phone Number <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      required
                      inputMode="numeric"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. 01712345678"
                      className="w-full pl-10 pr-4 py-3 bg-[#f5f7fa] border border-[#d8dde1] hover:border-[#33a9b1]/60 focus:border-[#33a9b1] rounded-xl text-sm text-[#050c14] placeholder-[#47697b]/50 focus:outline-none focus:ring-2 focus:ring-[#33a9b1]/20 transition-all font-medium [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    />
                    <Phone className="w-4 h-4 text-[#33a9b1] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#050c14] mb-1.5 uppercase tracking-wide">
                    Email Address
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      autoComplete="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. john@example.com"
                      className="w-full pl-10 pr-4 py-3 bg-[#f5f7fa] border border-[#d8dde1] hover:border-[#33a9b1]/60 focus:border-[#33a9b1] rounded-xl text-sm text-[#050c14] placeholder-[#47697b]/50 focus:outline-none focus:ring-2 focus:ring-[#33a9b1]/20 transition-all font-medium"
                    />
                    <Mail className="w-4 h-4 text-[#33a9b1] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* 3. Service Required: Beautiful Custom Dropdown */}
              <div className="relative" ref={serviceRef}>
                <label className="block text-xs font-bold text-[#050c14] mb-1.5 uppercase tracking-wide">
                  Service Required
                </label>
                <button
                  type="button"
                  onClick={() => {
                    setServiceDropdownOpen(!serviceDropdownOpen);
                    setDoctorDropdownOpen(false);
                  }}
                  className={`w-full px-4 py-3 bg-[#f5f7fa] border rounded-xl text-sm text-left flex items-center justify-between transition-all cursor-pointer ${
                    serviceDropdownOpen
                      ? "border-[#33a9b1] ring-2 ring-[#33a9b1]/20 bg-white"
                      : "border-[#d8dde1] hover:border-[#33a9b1]/70"
                  }`}
                  aria-expanded={serviceDropdownOpen}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <Sparkles className="w-4 h-4 text-[#33a9b1] shrink-0" />
                    <span className="font-semibold text-[#050c14] truncate">{service}</span>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-[#47697b] transition-transform duration-200 shrink-0 ${
                      serviceDropdownOpen ? "rotate-180 text-[#33a9b1]" : ""
                    }`}
                  />
                </button>

                {/* Dropdown Options Menu */}
                {serviceDropdownOpen && (
                  <div className="absolute top-full left-0 right-0 mt-1.5 bg-white rounded-2xl shadow-2xl border border-[#d8dde1] py-2 z-50 max-h-56 overflow-y-auto animate-slide-up">
                    {SERVICES_LIST.map((item) => {
                      const isSelected = service === item.name;
                      return (
                        <button
                          key={item.name}
                          type="button"
                          onClick={() => {
                            setService(item.name);
                            setServiceDropdownOpen(false);
                          }}
                          className={`w-full px-4 py-2.5 text-left flex items-center justify-between gap-3 text-xs sm:text-sm transition-colors cursor-pointer ${
                            isSelected
                              ? "bg-[#33a9b1]/10 text-[#33a9b1] font-bold"
                              : "text-[#050c14] hover:bg-[#f5f7fa]"
                          }`}
                        >
                          <div>
                            <div className="font-bold">{item.name}</div>
                            <div className="text-[11px] text-[#47697b] font-normal">{item.category}</div>
                          </div>
                          {isSelected && <Check className="w-4 h-4 text-[#33a9b1] shrink-0" />}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* 4. Preferred Doctor: Custom Dropdown */}
              <div className="relative" ref={doctorRef}>
                <label className="block text-xs font-bold text-[#050c14] mb-1.5 uppercase tracking-wide">
                  Preferred Doctor
                </label>
                <button
                  type="button"
                  onClick={() => {
                    setDoctorDropdownOpen(!doctorDropdownOpen);
                    setServiceDropdownOpen(false);
                  }}
                  className={`w-full px-4 py-3 bg-[#f5f7fa] border rounded-xl text-sm text-left flex items-center justify-between transition-all cursor-pointer ${
                    doctorDropdownOpen
                      ? "border-[#33a9b1] ring-2 ring-[#33a9b1]/20 bg-white"
                      : "border-[#d8dde1] hover:border-[#33a9b1]/70"
                  }`}
                  aria-expanded={doctorDropdownOpen}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <Stethoscope className="w-4 h-4 text-[#33a9b1] shrink-0" />
                    <span className="font-semibold text-[#050c14] truncate">{doctor}</span>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-[#47697b] transition-transform duration-200 shrink-0 ${
                      doctorDropdownOpen ? "rotate-180 text-[#33a9b1]" : ""
                    }`}
                  />
                </button>

                {doctorDropdownOpen && (
                  <div className="absolute top-full left-0 right-0 mt-1.5 bg-white rounded-2xl shadow-2xl border border-[#d8dde1] py-2 z-50 max-h-52 overflow-y-auto animate-slide-up">
                    {DOCTORS_LIST.map((item) => {
                      const isSelected = doctor === item.name;
                      return (
                        <button
                          key={item.name}
                          type="button"
                          onClick={() => {
                            setDoctor(item.name);
                            setDoctorDropdownOpen(false);
                          }}
                          className={`w-full px-4 py-2.5 text-left flex items-center justify-between gap-3 text-xs sm:text-sm transition-colors cursor-pointer ${
                            isSelected
                              ? "bg-[#33a9b1]/10 text-[#33a9b1] font-bold"
                              : "text-[#050c14] hover:bg-[#f5f7fa]"
                          }`}
                        >
                          <div>
                            <div className="font-bold">{item.name}</div>
                            <div className="text-[11px] text-[#47697b] font-normal">{item.role}</div>
                          </div>
                          {isSelected && <Check className="w-4 h-4 text-[#33a9b1] shrink-0" />}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* 5. Preferred Date Picker with Quick Date Chips */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="block text-xs font-bold text-[#050c14] uppercase tracking-wide">
                    Preferred Date <span className="text-rose-500">*</span>
                  </label>
                  {date && (
                    <span className="text-[11px] font-semibold text-[#33a9b1]">
                      {getReadableDate(date)}
                    </span>
                  )}
                </div>

                <div className="space-y-2">
                  <div className="relative">
                    <input
                      type="date"
                      required
                      min={todayStr}
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-[#f5f7fa] border border-[#d8dde1] hover:border-[#33a9b1]/60 focus:border-[#33a9b1] rounded-xl text-sm text-[#050c14] focus:outline-none focus:ring-2 focus:ring-[#33a9b1]/20 font-medium cursor-pointer"
                    />
                    <Calendar className="w-4 h-4 text-[#33a9b1] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>

                  {/* Quick Pick Date Pills */}
                  <div className="flex items-center gap-1.5 pt-0.5 overflow-x-auto pb-1 text-xs">
                    <span className="text-[11px] text-[#47697b] shrink-0 font-medium mr-1">Quick pick:</span>
                    <button
                      type="button"
                      onClick={() => setQuickDate(0)}
                      className="px-2.5 py-1 rounded-lg bg-[#f5f7fa] hover:bg-[#33a9b1]/15 text-[#050c14] hover:text-[#33a9b1] border border-[#d8dde1] transition-colors shrink-0 cursor-pointer font-medium"
                    >
                      Today
                    </button>
                    <button
                      type="button"
                      onClick={() => setQuickDate(1)}
                      className="px-2.5 py-1 rounded-lg bg-[#f5f7fa] hover:bg-[#33a9b1]/15 text-[#050c14] hover:text-[#33a9b1] border border-[#d8dde1] transition-colors shrink-0 cursor-pointer font-medium"
                    >
                      Tomorrow
                    </button>
                    <button
                      type="button"
                      onClick={() => setQuickDate(2)}
                      className="px-2.5 py-1 rounded-lg bg-[#f5f7fa] hover:bg-[#33a9b1]/15 text-[#050c14] hover:text-[#33a9b1] border border-[#d8dde1] transition-colors shrink-0 cursor-pointer font-medium"
                    >
                      In 2 Days
                    </button>
                    <button
                      type="button"
                      onClick={() => setQuickDate(3)}
                      className="px-2.5 py-1 rounded-lg bg-[#f5f7fa] hover:bg-[#33a9b1]/15 text-[#050c14] hover:text-[#33a9b1] border border-[#d8dde1] transition-colors shrink-0 cursor-pointer font-medium"
                    >
                      In 3 Days
                    </button>
                  </div>
                </div>
              </div>

              {/* 6. Time Slot: Visual Interactive Pills */}
              <div>
                <label className="block text-xs font-bold text-[#050c14] mb-2 uppercase tracking-wide">
                  Preferred Time Slot
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {TIME_SLOTS.map((slot) => {
                    const isSelected = timeSlot === slot.time;
                    const IconComp = slot.icon;
                    return (
                      <button
                        key={slot.id}
                        type="button"
                        onClick={() => setTimeSlot(slot.time)}
                        className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer flex items-center gap-2.5 ${
                          isSelected
                            ? "bg-[#33a9b1] text-white border-[#33a9b1] shadow-sm scale-[1.01]"
                            : "bg-[#f5f7fa] text-[#050c14] border-[#d8dde1] hover:border-[#33a9b1]/60 hover:bg-white"
                        }`}
                      >
                        <div
                          className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                            isSelected ? "bg-white/20 text-white" : "bg-white text-[#33a9b1] border border-[#d8dde1]"
                          }`}
                        >
                          <IconComp className="w-3.5 h-3.5" />
                        </div>
                        <div className="min-w-0">
                          <div className={`text-[11px] font-bold ${isSelected ? "text-white" : "text-[#050c14]"}`}>
                            {slot.label}
                          </div>
                          <div
                            className={`text-[10px] truncate ${
                              isSelected ? "text-white/85" : "text-[#47697b]"
                            }`}
                          >
                            {slot.time}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-full bg-[#33a9b1] hover:bg-[#288c93] active:scale-[0.98] text-white font-bold text-sm sm:text-base transition-all duration-300 shadow-md flex items-center justify-center gap-2 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#33a9b1]"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Confirming Appointment...</span>
                    </>
                  ) : (
                    <>
                      <Calendar className="w-4 h-4" />
                      <span>Confirm Appointment</span>
                    </>
                  )}
                </button>
              </div>

              <p className="text-[11px] text-center text-[#47697b] pt-0.5">
                🔒 Free cancellation up to 2 hours before the scheduled time.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
