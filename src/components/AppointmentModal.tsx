"use client";

import { useState, useEffect } from "react";
import { DentalClinic } from "@/data/clinics";
import { X, Calendar, Phone, User, MessageCircle, CheckCircle } from "lucide-react";

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
  const [service, setService] = useState(initialService || "সাধারণ ডেন্টাল চেকআপ");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialService) {
      setService(initialService);
    }
  }, [initialService]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const message = `*ডেন্টাল অ্যাপয়েন্টমেন্ট রিকোয়েস্ট (${clinic.name})*
----------------------------------
👤 রোগীর নাম: ${name}
📱 মোবাইল: ${phone}
📅 তারিখ: ${date || "সুবিধাজনক যে কোনো দিন"}
🩺 সেবার ধরন: ${service}
📝 সমস্যা/নোট: ${notes || "নেই"}
----------------------------------`;

    const whatsappUrl = `https://wa.me/${clinic.whatsapp}?text=${encodeURIComponent(message)}`;

    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
    }, 500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-xs overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-md w-full p-5 sm:p-7 shadow-2xl border border-slate-200 relative my-auto max-h-[92vh] overflow-y-auto animate-slide-up">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition cursor-pointer"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="text-left mb-4 sm:mb-5 pr-8">
              <span className="text-[11px] font-bold text-teal-700 uppercase tracking-wide">
                {clinic.name}
              </span>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 mt-0.5">
                ডাক্তারের অ্যাপয়েন্টমেন্ট বুকিং
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                আপনার তথ্য দিন, আমরা দ্রুত সময়ে সিরিয়াল কনফার্ম করব।
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-3.5 text-left">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  রোগীর নাম *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    placeholder="আপনার পুরো নাম লিখুন"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-teal-600"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  মোবাইল নম্বর *
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="tel"
                    required
                    placeholder="01XXXXXXXXX"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-teal-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    কাঙ্ক্ষিত তারিখ
                  </label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-teal-600 text-slate-700"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    সেবার ক্যাটাগরি
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-teal-600 text-slate-700"
                  >
                    <option value="সাধারণ ডেন্টাল চেকআপ">সাধারণ ডেন্টাল চেকআপ</option>
                    {clinic.services.map((s, idx) => (
                      <option key={idx} value={s.bengaliTitle}>
                        {s.bengaliTitle}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  দাঁতের সমস্যা বা বিশেষ তথ্য (ঐচ্ছিক)
                </label>
                <textarea
                  rows={2}
                  placeholder="যেমন: মাড়ি ফোলা, রুট ক্যানাল বা চেকআপ..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-teal-600"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-slate-900 hover:bg-teal-900 text-white font-semibold text-xs sm:text-sm transition flex items-center justify-center gap-2 cursor-pointer active:scale-98 shadow-sm"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>হোয়াটসঅ্যাপে সিরিয়াল পাঠান</span>
                </button>
                <p className="text-[11px] text-center text-slate-400 mt-2">
                  🔒 আপনার ফোন নম্বর সম্পূর্ণ নিরাপদ থাকবে।
                </p>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-6 space-y-3">
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">
              অ্যাপয়েন্টমেন্ট সাবমিট হয়েছে!
            </h3>
            <p className="text-xs text-slate-600 max-w-xs mx-auto">
              আপনার তথ্য নিয়ে হোয়াটসঅ্যাপ ওপেন হচ্ছে। ক্লিনিক থেকে দ্রুতই রেসপন্স করা হবে।
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-3 px-5 py-2 rounded-xl bg-slate-900 text-white text-xs font-medium"
            >
              বন্ধ করুন
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
