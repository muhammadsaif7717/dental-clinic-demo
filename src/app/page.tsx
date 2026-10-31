"use client";

import { Suspense, useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { DENTAL_CLINICS, DentalClinic, getClinicById } from "@/data/clinics";
import AgencyBar from "@/components/AgencyBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import DoctorSection from "@/components/DoctorSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import ReviewsSection from "@/components/ReviewsSection";
import LocationSection from "@/components/LocationSection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import FloatingCta from "@/components/FloatingCta";
import AppointmentModal from "@/components/AppointmentModal";

function DentalApp() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const clientParam = searchParams.get("client");
  const viewParam = searchParams.get("view");

  const [currentClinic, setCurrentClinic] = useState<DentalClinic>(() => {
    if (clientParam) {
      return getClinicById(clientParam);
    }
    return DENTAL_CLINICS[0];
  });

  const [isClientMode, setIsClientMode] = useState<boolean>(viewParam === "client");
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (clientParam) {
      setCurrentClinic(getClinicById(clientParam));
    }
    if (viewParam === "client") {
      setIsClientMode(true);
    }
  }, [clientParam, viewParam]);

  const handleSelectClinic = (id: string) => {
    const found = getClinicById(id);
    setCurrentClinic(found);
    const newUrl = isClientMode ? `/?client=${id}&view=client` : `/?client=${id}`;
    router.push(newUrl);
  };

  const handleOpenBooking = (serviceName?: string) => {
    setSelectedService(serviceName);
    setBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans selection:bg-slate-900 selection:text-white text-slate-800">
      {/* Top Agency Switcher Bar (Completely hidden in Client Mode) */}
      <AgencyBar
        currentClinic={currentClinic}
        onSelectClinic={handleSelectClinic}
        isClientMode={isClientMode}
        setIsClientMode={setIsClientMode}
      />

      {/* Main Header / Navigation */}
      <Navbar
        clinic={currentClinic}
        onOpenBooking={() => handleOpenBooking()}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          clinic={currentClinic}
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* Services & Pricing Section */}
        <ServicesSection
          clinic={currentClinic}
          onOpenBooking={handleOpenBooking}
        />

        {/* Doctor & Specialist Section */}
        <DoctorSection
          clinic={currentClinic}
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* Why Choose Us & Clinical Atmosphere Gallery */}
        <WhyChooseUs clinic={currentClinic} />

        {/* Patient Reviews Section */}
        <ReviewsSection clinic={currentClinic} />

        {/* Clinic Location & Working Hours */}
        <LocationSection clinic={currentClinic} />

        {/* FAQs */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer
        clinic={currentClinic}
        onOpenBooking={() => handleOpenBooking()}
        isClientMode={isClientMode}
      />

      {/* Mobile Sticky CTA Bar */}
      <FloatingCta
        clinic={currentClinic}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Appointment Booking Modal */}
      <AppointmentModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        clinic={currentClinic}
        initialService={selectedService}
      />
    </div>
  );
}

export default function Home() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-white text-slate-600 font-medium">
          লোড হচ্ছে...
        </div>
      }
    >
      <DentalApp />
    </Suspense>
  );
}
