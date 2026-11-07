"use client";

import { DentalClinic } from "@/data/clinics";
import { useState } from "react";
import Image from "next/image";
import { Calendar, CheckCircle2, User, Mail, Phone, Stethoscope } from "lucide-react";
import RevealOnScroll from "@/components/RevealOnScroll";

interface RegisterSectionProps {
  clinic: DentalClinic;
  onOpenBooking: () => void;
}

export default function RegisterSection({ clinic, onOpenBooking }: RegisterSectionProps) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [diseaseName, setDiseaseName] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phoneNumber) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFullName("");
      setEmail("");
      setPhoneNumber("");
      setDiseaseName("");
      setSelectedDoctor("");
    }, 5000);
  };

  return (
    <section id="register-appointment" className="py-16 sm:py-24 bg-[#dee8de]/35 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll direction="up">
          <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-14 shadow-lg border border-[#d8dde1]/80">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Left Column: Image & Happy Clients Counter */}
              <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left">
                <div className="relative w-full max-w-[340px] sm:max-w-[400px] aspect-[4/3] mb-6 rounded-3xl overflow-hidden shadow-xl border-2 border-white">
                  <Image
                    src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80"
                    alt="Register Appointment with Expert Dentist"
                    fill
                    sizes="(max-width: 1024px) 100vw, 400px"
                    className="object-cover"
                  />
                </div>

                <div className="space-y-4">
                  <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#33a9b1]">
                    ✦ Quick Consultation
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#050c14] tracking-tight">
                    Register Appointment
                  </h2>
                  <p className="text-sm text-[#47697b] max-w-sm">
                    Book your prioritized clinical consultation in seconds. Choose your preferred doctor and service time.
                  </p>

                  {/* Happy Clients Stack */}
                  <div className="flex items-center gap-4 pt-2">
                    <div className="flex -space-x-3 overflow-hidden">
                      <div className="relative inline-block h-12 w-12 rounded-full ring-2 ring-white overflow-hidden bg-slate-100">
                        <Image
                          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
                          alt="Patient"
                          fill
                          sizes="48px"
                          className="object-cover"
                        />
                      </div>
                      <div className="relative inline-block h-12 w-12 rounded-full ring-2 ring-white overflow-hidden bg-slate-100">
                        <Image
                          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
                          alt="Patient"
                          fill
                          sizes="48px"
                          className="object-cover"
                        />
                      </div>
                      <div className="relative inline-block h-12 w-12 rounded-full ring-2 ring-white overflow-hidden bg-slate-100">
                        <Image
                          src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80"
                          alt="Patient"
                          fill
                          sizes="48px"
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-[#050c14] leading-tight">12K+</h3>
                      <p className="text-xs font-semibold tracking-wider text-[#47697b] uppercase">HAPPY CLIENTS</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Appointment Form */}
              <div className="lg:col-span-7">
                <div className="bg-[#f5f7fa] p-6 sm:p-8 lg:p-10 rounded-2xl border border-[#d8dde1] shadow-xs">
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-[#050c14]">Schedule Your Visit</h3>
                    <p className="text-xs sm:text-sm text-[#47697b] mt-1">
                      Fill out the form below and our front desk will confirm your appointment instantly.
                    </p>
                  </div>

                  {submitted ? (
                    <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-xl text-center space-y-3 animate-fade-in">
                      <CheckCircle2 className="w-12 h-12 text-[#23e219] mx-auto" />
                      <h4 className="text-lg font-bold text-slate-900">Appointment Requested Successfully!</h4>
                      <p className="text-sm text-slate-600">
                        Thank you, <span className="font-semibold text-slate-800">{fullName}</span>. Our clinic coordinator will call you at <span className="font-semibold text-slate-800">{phoneNumber}</span> within 15 minutes.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Full Name */}
                        <div>
                          <label className="block text-xs font-semibold text-[#050c14] mb-1.5">Full Name *</label>
                          <div className="relative">
                            <input
                              type="text"
                              required
                              value={fullName}
                              onChange={(e) => setFullName(e.target.value)}
                              placeholder="e.g. John Doe"
                              className="w-full pl-10 pr-4 py-3 bg-white border border-[#d8dde1] rounded-xl text-[#050c14] placeholder-[#47697b]/60 text-sm focus:outline-none focus:border-[#33a9b1] focus:ring-2 focus:ring-[#33a9b1]/20 transition-all"
                            />
                            <User className="w-4 h-4 text-[#47697b] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                          </div>
                        </div>

                        {/* Email Address */}
                        <div>
                          <label className="block text-xs font-semibold text-[#050c14] mb-1.5">Email Address</label>
                          <div className="relative">
                            <input
                              type="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              placeholder="e.g. john@example.com"
                              className="w-full pl-10 pr-4 py-3 bg-white border border-[#d8dde1] rounded-xl text-[#050c14] placeholder-[#47697b]/60 text-sm focus:outline-none focus:border-[#33a9b1] focus:ring-2 focus:ring-[#33a9b1]/20 transition-all"
                            />
                            <Mail className="w-4 h-4 text-[#47697b] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                          </div>
                        </div>

                        {/* Phone Number */}
                        <div>
                          <label className="block text-xs font-semibold text-[#050c14] mb-1.5">Phone Number *</label>
                          <div className="relative">
                            <input
                              type="number"
                              inputMode="numeric"
                              required
                              value={phoneNumber}
                              onChange={(e) => setPhoneNumber(e.target.value)}
                              placeholder="e.g. 01712345678"
                              className="w-full pl-10 pr-4 py-3 bg-white border border-[#d8dde1] rounded-xl text-[#050c14] placeholder-[#47697b]/60 text-sm focus:outline-none focus:border-[#33a9b1] focus:ring-2 focus:ring-[#33a9b1]/20 transition-all [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                            />
                            <Phone className="w-4 h-4 text-[#47697b] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                          </div>
                        </div>

                        {/* Disease Name / Dental Concern */}
                        <div>
                          <label className="block text-xs font-semibold text-[#050c14] mb-1.5">Dental Concern / Service</label>
                          <div className="relative">
                            <input
                              type="text"
                              value={diseaseName}
                              onChange={(e) => setDiseaseName(e.target.value)}
                              placeholder="e.g. Root Canal, Teeth Whitening"
                              className="w-full pl-10 pr-4 py-3 bg-white border border-[#d8dde1] rounded-xl text-[#050c14] placeholder-[#47697b]/60 text-sm focus:outline-none focus:border-[#33a9b1] focus:ring-2 focus:ring-[#33a9b1]/20 transition-all"
                            />
                            <Stethoscope className="w-4 h-4 text-[#47697b] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                          </div>
                        </div>
                      </div>

                      {/* Select Doctor Dropdown */}
                      <div>
                        <label className="block text-xs font-semibold text-[#050c14] mb-1.5">Select Doctor Specialist</label>
                        <select
                          value={selectedDoctor}
                          onChange={(e) => setSelectedDoctor(e.target.value)}
                          className="w-full px-4 py-3 bg-white border border-[#d8dde1] rounded-xl text-[#050c14] text-sm focus:outline-none focus:border-[#33a9b1] focus:ring-2 focus:ring-[#33a9b1]/20 transition-all"
                        >
                          <option value="">Select Preferred Doctor</option>
                          <option value="dr-michael">Dr. Michael Thompson, DMD (Chief Implantologist)</option>
                          <option value="dr-sarah">Dr. Sarah Kim, DDS, MS (Orthodontist Specialist)</option>
                          <option value="dr-david">Dr. David Miller, BDS (Cosmetic Dental Surgeon)</option>
                          <option value="dr-emily">Dr. Emily Watson, DMD (Pediatric Dentist)</option>
                        </select>
                      </div>

                      {/* Submit Button */}
                      <div className="pt-2">
                        <button
                          type="submit"
                          className="w-full py-4 rounded-full bg-[#33a9b1] hover:bg-[#288c93] active:scale-[0.98] text-white font-semibold text-sm sm:text-base shadow-md transition-all duration-300 flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#33a9b1]"
                        >
                          <Calendar className="w-4 h-4" />
                          <span>Get Appointment</span>
                        </button>
                      </div>

                      <p className="text-[11px] text-center text-[#47697b] pt-1">
                        🔒 Your medical data is strictly confidential and HIPAA compliant.
                      </p>
                    </form>
                  )}
                </div>
              </div>

            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
