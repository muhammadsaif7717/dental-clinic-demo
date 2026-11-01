"use client";

import { useState, useEffect } from "react";
import { DentalClinic } from "@/data/clinics";
import { X, Calendar, Phone, User, MessageCircle, CheckCircle, Clock, Loader2 } from "lucide-react";

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  clinic: DentalClinic;
  initialService?: string;
}

export default function AppointmentModal({
  isOpen,
  onClose,
  clinic,
  initialService,
}: AppointmentModalProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [timeSlot, setTimeSlot] = useState("সন্ধ্যা ৬:০০ - রাত ৮:৩০");
  const [service, setService] = useState(initialService || "সাধারণ ডেন্টাল চেকআপ");
  const [notes, setNotes] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialService) {
      setService(initialService);
    }
  }, [initialService]);

  // Handle escape key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const message = `*ডেন্টাল অ্যাপয়েন্টমেন্ট রিকোয়েস্ট (${clinic.name})*
----------------------------------
👤 রোগীর নাম: ${name}
📱 মোবাইল: ${phone}
📅 তারিখ: ${date || "সুবিধাজনক যে কোনো দিন"}
⏰ পছন্দের সময়: ${timeSlot}
🩺 সেবার ধরন: ${service}
📝 সমস্যা/নোট: ${notes || "নেই"}
----------------------------------
বিনীত,
${name}`;

    const whatsappUrl = `https://wa.me/${clinic.whatsapp}?text=${encodeURIComponent(message)}`;

    // Realistic optimistic loading state (Vercel Guidelines)
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => {
        window.open(whatsappUrl, "_blank");
      }, 700);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    setName("");
    setPhone("");
    setDate("");
    setNotes("");
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/60 backdrop-blur-xs overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-white rounded-2xl max-w-md w-full p-5 sm:p-7 shadow-xl border border-slate-200 relative my-auto max-h-[92vh] overflow-y-auto animate-slide-up">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer"
          aria-label="ফর্ম বন্ধ করুন"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="text-left mb-4 sm:mb-5 pr-8">
              <span className="text-[11px] font-bold text-teal-700 uppercase tracking-wide block">
                {clinic.name}
              </span>
              <h2 id="modal-title" className="text-lg sm:text-xl font-extrabold text-slate-900 mt-0.5 tracking-tight">
                ডাক্তারের অ্যাপয়েন্টমেন্ট বুকিং
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                আপনার তথ্য দিন, আমরা কিছুক্ষণের মধ্যে সিরিয়াল নিশ্চিত করব।
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5 text-left">
              <div>
                <label htmlFor="patient-name" className="block text-xs font-semibold text-slate-700 mb-1">
                  রোগীর পুরো নাম <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                  <input
                    id="patient-name"
                    type="text"
                    required
                    placeholder="যেমন: মোহাম্মদ সাইফুল্লাহ"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-600/20 text-slate-900 min-h-[44px]"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="patient-phone" className="block text-xs font-semibold text-slate-700 mb-1">
                  মোবাইল নম্বর <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                  <input
                    id="patient-phone"
                    type="tel"
                    required
                    placeholder="০১XXXXXXXXX"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-600/20 text-slate-900 min-h-[44px]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="appointment-date" className="block text-xs font-semibold text-slate-700 mb-1">
                    পছন্দের তারিখ
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                    <input
                      id="appointment-date"
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full pl-9 pr-2.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-600/20 text-slate-900 min-h-[44px]"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="time-slot" className="block text-xs font-semibold text-slate-700 mb-1">
                    পছন্দের সময়
                  </label>
                  <div className="relative">
                    <Clock className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                    <select
                      id="time-slot"
                      value={timeSlot}
                      onChange={(e) => setTimeSlot(e.target.value)}
                      className="w-full pl-9 pr-2.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-600/20 text-slate-900 bg-white min-h-[44px]"
                    >
                      <option value="সকাল ১০:০০ - দুপুর ১:০০">সকাল ১০:০০ - ১:০০</option>
                      <option value="সন্ধ্যা ৬:০০ - রাত ৮:৩০">সন্ধ্যা ৬:০০ - ৮:৩০</option>
                      <option value="রাত ৮:৩০ - রাত ১০:০০">রাত ৮:৩০ - ১০:০০</option>
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="dental-service" className="block text-xs font-semibold text-slate-700 mb-1">
                  চিকিৎসা সেবা নির্বাচন করুন
                </label>
                <select
                  id="dental-service"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-600/20 text-slate-900 bg-white min-h-[44px]"
                >
                  <option value="সাধারণ ডেন্টাল চেকআপ ও পরামর্শ">সাধারণ ডেন্টাল চেকআপ ও পরামর্শ (৳৫০০)</option>
                  {clinic.services.map((s, idx) => (
                    <option key={idx} value={s.bengaliTitle}>
                      {s.bengaliTitle} ({s.price})
                    </option>
                  ))}
                  <option value="জরুরি দাঁতের ব্যথা ও সেবা">জরুরি দাঁতের ব্যথা ও সেবা</option>
                </select>
              </div>

              <div>
                <label htmlFor="patient-notes" className="block text-xs font-semibold text-slate-700 mb-1">
                  দাঁতের সমস্যা বা কোনো নোট (ঐচ্ছিক)
                </label>
                <textarea
                  id="patient-notes"
                  rows={2}
                  placeholder="যেমন: ঠান্ডা পানিতে শিরশির করে, মাড়ি ফুলেছে ইত্যাদি..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-600/20 text-slate-900 resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-teal-600 hover:bg-teal-700 active:scale-[0.98] text-white font-semibold text-sm transition-all shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 min-h-[44px] cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-white" />
                      <span>সিরিয়াল প্রসেস হচ্ছে...</span>
                    </>
                  ) : (
                    <>
                      <Calendar className="w-4 h-4 text-teal-100" />
                      <span>সিরিয়াল নিশ্চিত করুন</span>
                    </>
                  )}
                </button>

                <p className="text-[11px] text-center text-slate-400 mt-2.5">
                  সাবমিট করার সাথে সাথে আপনার হোয়াটসঅ্যাপে সিরিয়াল রসিদ চলে যাবে।
                </p>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-6 sm:py-8 space-y-3.5">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-2xs">
              <CheckCircle className="w-8 h-8" />
            </div>

            <h3 className="text-lg sm:text-xl font-bold text-slate-900">
              অ্যাপয়েন্টমেন্ট রিকোয়েস্ট গৃহীত হয়েছে!
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
              ধন্যবাদ <strong>{name}</strong>! আপনার তথ্য {clinic.name}-এ পাঠানো হয়েছে। কিছুক্ষণের মধ্যেই চেম্বার থেকে সিরিয়াল কনফার্মেশন কল করা হবে।
            </p>

            <div className="pt-4 flex flex-col gap-2">
              <button
                onClick={handleReset}
                className="w-full py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold transition active:scale-[0.98] min-h-[44px]"
              >
                বন্ধ করুন
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
