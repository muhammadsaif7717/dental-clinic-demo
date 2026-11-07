"use client";

import { Suspense, useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { DENTAL_CLINICS, DentalClinic, getClinicById } from "@/data/clinics";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import RegisterSection from "@/components/RegisterSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import BrandMarquee from "@/components/BrandMarquee";
import WhyChooseUs from "@/components/WhyChooseUs";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import RadiantCta from "@/components/RadiantCta";
import ProcessSection from "@/components/ProcessSection";
import ReviewsSection from "@/components/ReviewsSection";
import DoctorSection from "@/components/DoctorSection";
import FaqSection from "@/components/FaqSection";
import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";
import FloatingCta from "@/components/FloatingCta";
import ScrollToTop from "@/components/ScrollToTop";
import AppointmentModal from "@/components/AppointmentModal";

function DentiqueDentalClinicApp() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const clientParam = searchParams.get("client");

  const [currentClinic, setCurrentClinic] = useState<DentalClinic>(() => {
    if (clientParam) {
      return getClinicById(clientParam);
    }
    return DENTAL_CLINICS[0];
  });

  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (clientParam) {
      setCurrentClinic(getClinicById(clientParam));
    }
  }, [clientParam]);

  const handleOpenBooking = (serviceName?: string) => {
    setSelectedService(serviceName);
    setBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans selection:bg-[#33a9b1] selection:text-white text-[#47697b]">
      {/* 1. Header (Dentox Topbar + Navigation + Emergency Call + Make Appointment CTA) */}
      <Navbar
        clinic={currentClinic}
        onOpenBooking={() => handleOpenBooking()}
      />

      <main className="flex-1">
        {/* 2. Hero Section with Slideshow & Modern Dental Care Headline */}
        <Hero
          clinic={currentClinic}
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* 3. Register Appointment Quick Form */}
        <RegisterSection
          clinic={currentClinic}
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* 4. About Our Clinic Section with Decorative Inline Elements */}
        <AboutSection
          clinic={currentClinic}
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* 5. Services Section (Cosmetic, Pediatric, General, Implants, Orthodontics, Whitening) */}
        <ServicesSection
          clinic={currentClinic}
          onOpenBooking={handleOpenBooking}
        />

        {/* 6. Brand Partners Infinite Marquee */}
        <BrandMarquee />

        {/* 7. Why Choose Us Section with Interactive Tabs (Checkup, Root Canal, Cleaning, Implants) */}
        <WhyChooseUs clinic={currentClinic} />

        {/* 8. Smile Transformation Before & After Interactive Comparator */}
        <BeforeAfterSection
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* 9. Radiant Smile CTA Banner with 4.9K Happy Smiles */}
        <RadiantCta
          clinic={currentClinic}
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* 10. 4-Step Work Process (Appointment, Diagnosis, Treatment, Follow-up) */}
        <ProcessSection />

        {/* 11. Testimonials / Patient Stories */}
        <ReviewsSection clinic={currentClinic} />

        {/* 12. Certified Dental Specialists Team */}
        <DoctorSection
          clinic={currentClinic}
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* 13. Frequently Asked Questions Accordion */}
        <FaqSection />

        {/* 14. Latest Insights from our Blog */}
        <BlogSection />
      </main>

      {/* 15. Footer (Top Highlight Boxes, Working Hours, Quick Links, Newsletter) */}
      <Footer
        clinic={currentClinic}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* 16. Floating Mobile CTA */}
      <FloatingCta
        clinic={currentClinic}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Scroll To Top Progress Button */}
      <ScrollToTop />

      {/* 17. Interactive Appointment Booking Modal */}
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
        <div className="min-h-screen flex items-center justify-center bg-white text-[#33a9b1] font-semibold text-base">
          <div className="flex items-center gap-3">
            <span className="w-5 h-5 rounded-full border-2 border-[#33a9b1] border-t-transparent animate-spin"></span>
            <span>Loading Dentique Clinic...</span>
          </div>
        </div>
      }
    >
      <DentiqueDentalClinicApp />
    </Suspense>
  );
}
