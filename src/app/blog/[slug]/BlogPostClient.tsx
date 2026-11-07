"use client";

import AppointmentModal from "@/components/AppointmentModal";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ScrollToTop from "@/components/ScrollToTop";
import { BlogPost } from "@/data/blog";
import { DENTAL_CLINICS } from "@/data/clinics";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Check,
  CheckCircle2,
  Clock,
  Quote,
  Share2,
  ShieldCheck,
  Sparkles
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface BlogPostClientProps {
  post: BlogPost;
  relatedPosts: BlogPost[];
}

export default function BlogPostClient({ post, relatedPosts }: BlogPostClientProps) {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const clinic = DENTAL_CLINICS[0];

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans selection:bg-[#33a9b1] selection:text-white text-[#47697b]">
      {/* 1. Navbar */}
      <Navbar clinic={clinic} onOpenBooking={() => setBookingModalOpen(true)} />

      <main className="flex-1">
        {/* Breadcrumb & Navigation Bar */}
        <div className="bg-[#f5f7fa] border-b border-[#d8dde1] py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            <nav className="flex items-center gap-2 text-xs sm:text-sm text-[#47697b]" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-[#33a9b1] transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link href="/#blog" className="hover:text-[#33a9b1] transition-colors">
                Blog
              </Link>
              <span>/</span>
              <span className="text-[#050c14] font-medium truncate max-w-[200px] sm:max-w-xs md:max-w-md">
                {post.title}
              </span>
            </nav>

            <Link
              href="/#blog"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#33a9b1] hover:text-[#288c93] hover:underline"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Articles</span>
            </Link>
          </div>
        </div>

        {/* Article Header Section */}
        <header className="pt-10 sm:pt-16 pb-8 sm:pb-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span className="bg-[#33a9b1]/15 text-[#33a9b1] text-xs sm:text-sm font-bold px-3.5 py-1 rounded-full">
                {post.category}
              </span>
              <span className="flex items-center gap-1.5 text-xs sm:text-sm text-[#47697b]">
                <Calendar className="w-3.5 h-3.5 text-[#33a9b1]" />
                {post.date}
              </span>
              <span className="text-[#d8dde1]">•</span>
              <span className="flex items-center gap-1.5 text-xs sm:text-sm text-[#47697b]">
                <Clock className="w-3.5 h-3.5 text-[#33a9b1]" />
                {post.readTime}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#050c14] tracking-tight leading-tight sm:leading-[1.18] mb-6 sm:mb-8">
              {post.title}
            </h1>

            {/* Author Bar & Share */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-4 border-y border-[#d8dde1]">
              <div className="flex items-center gap-3.5">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#33a9b1]">
                  <Image
                    src={post.author.avatar}
                    alt={post.author.name}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="text-sm sm:text-base font-bold text-[#050c14]">
                    {post.author.name}
                  </div>
                  <div className="text-xs text-[#47697b] font-medium">
                    {post.author.role}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleCopyLink}
                  className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-full border border-[#d8dde1] hover:border-[#33a9b1] hover:text-[#33a9b1] transition-colors cursor-pointer"
                  title="Share article link"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-green-600" />
                      <span className="text-green-600 font-bold">Link Copied!</span>
                    </>
                  ) : (
                    <>
                      <Share2 className="w-3.5 h-3.5" />
                      <span>Share Article</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 sm:mb-16">
          <div className="relative aspect-[16/9] sm:aspect-[21/9] rounded-3xl overflow-hidden shadow-xl border border-[#d8dde1]">
            <Image
              src={post.image}
              alt={post.title}
              fill
              priority
              sizes="(max-width: 1200px) 100vw, 1200px"
              className="object-cover"
            />
          </div>
        </div>

        {/* Content Layout (Article + Sticky Sidebar) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 sm:pb-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14">

            {/* Article Main Body (8 Cols) */}
            <article className="lg:col-span-8">
              {/* Introduction Box */}
              <div className="bg-[#f5f7fa] p-6 sm:p-8 rounded-3xl border-l-4 border-[#33a9b1] mb-10">
                <p className="text-base sm:text-lg text-[#050c14] font-medium leading-relaxed">
                  {post.content.intro}
                </p>
              </div>

              {/* Sections */}
              <div className="space-y-10 text-[#47697b] leading-relaxed">
                {post.content.sections.map((section, idx) => (
                  <section key={idx} className="space-y-4">
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#050c14] tracking-tight">
                      {section.heading}
                    </h2>
                    <p className="text-base sm:text-lg leading-relaxed">
                      {section.body}
                    </p>

                    {section.bulletPoints && section.bulletPoints.length > 0 && (
                      <ul className="mt-4 space-y-3 bg-[#dee8de]/30 p-5 sm:p-6 rounded-2xl border border-[#d8dde1]">
                        {section.bulletPoints.map((point, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-[#33a9b1] shrink-0 mt-0.5" />
                            <span className="text-sm sm:text-base font-medium text-[#050c14]">
                              {point}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </section>
                ))}

                {/* Callout Quote */}
                {post.content.quote && (
                  <blockquote className="my-10 relative bg-[#1f3d3f] text-white p-7 sm:p-9 rounded-3xl overflow-hidden shadow-lg">
                    <Quote className="w-12 h-12 text-[#33a9b1]/30 absolute top-4 right-4" />
                    <p className="relative z-10 text-lg sm:text-xl italic font-medium leading-relaxed mb-4">
                      &ldquo;{post.content.quote}&rdquo;
                    </p>
                    <footer className="text-xs sm:text-sm font-bold text-[#33a9b1] uppercase tracking-wider">
                      — {post.author.name}, {post.author.role}
                    </footer>
                  </blockquote>
                )}

                {/* Conclusion */}
                <div className="pt-6 border-t border-[#d8dde1] space-y-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#050c14]">
                    Conclusion & Practical Advice
                  </h3>
                  <p className="text-base sm:text-lg leading-relaxed">
                    {post.content.conclusion}
                  </p>
                </div>
              </div>

              {/* Clinical Author Bio Card */}
              <div className="mt-14 p-6 sm:p-8 bg-[#f5f7fa] rounded-3xl border border-[#d8dde1] flex flex-col sm:flex-row items-center sm:items-start gap-6">
                <div className="relative w-20 h-20 rounded-full overflow-hidden shrink-0 border-2 border-[#33a9b1] shadow-md">
                  <Image
                    src={post.author.avatar}
                    alt={post.author.name}
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </div>
                <div className="text-center sm:text-left space-y-2">
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#33a9b1]">
                    <Sparkles className="w-3.5 h-3.5" />
                    Medical Reviewer
                  </div>
                  <h4 className="text-lg font-bold text-[#050c14]">
                    {post.author.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#47697b] font-medium">
                    {post.author.role}
                  </p>
                  <p className="text-xs sm:text-sm text-[#47697b] leading-relaxed pt-1">
                    Specializing in minimally invasive preventive dentistry, advanced 3D diagnostics, and aesthetic smiles with over 14 years of clinical experience.
                  </p>
                </div>
              </div>
            </article>

            {/* Sidebar (4 Cols) */}
            <aside className="lg:col-span-4 space-y-8">
              {/* Quick Booking CTA Card */}
              <div className="bg-[#1f3d3f] text-white p-7 sm:p-8 rounded-3xl shadow-xl relative overflow-hidden">
                <div className="space-y-4 relative z-10">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#33a9b1]/20 text-[#33a9b1] text-xs font-bold">
                    <Sparkles className="w-3 h-3" />
                    Specialist Care
                  </div>

                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    Have Questions About Your Oral Health?
                  </h3>

                  <p className="text-sm text-[#dee8de] leading-relaxed">
                    Book a comprehensive consultation with Dr. Michael Thompson and our specialized dental team today.
                  </p>

                  <button
                    type="button"
                    onClick={() => setBookingModalOpen(true)}
                    className="w-full mt-2 py-3.5 px-6 rounded-full bg-[#33a9b1] hover:bg-[#288c93] active:scale-[0.98] text-white font-bold text-sm shadow-md transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Schedule Appointment</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <div className="pt-4 border-t border-[#2d5254] flex items-center justify-between text-xs text-[#dee8de]">
                    <span>Emergency Line:</span>
                    <a
                      href={`tel:${clinic.phone.replace(/[^0-9+]/g, "")}`}
                      className="font-bold text-white hover:text-[#33a9b1] transition-colors"
                    >
                      {clinic.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Clinic Quality Assurances */}
              <div className="bg-[#f5f7fa] p-6 sm:p-7 rounded-3xl border border-[#d8dde1] space-y-4">
                <h4 className="text-base font-bold text-[#050c14]">
                  Why Choose Dentique Clinic
                </h4>
                <div className="space-y-3 text-xs sm:text-sm text-[#47697b]">
                  <div className="flex items-start gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-[#33a9b1] shrink-0 mt-0.5" />
                    <span>State-of-the-art 3D CBCT digital imaging</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-[#33a9b1] shrink-0 mt-0.5" />
                    <span>Pain-free ultrasonic cleaning and gentle care</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-[#33a9b1] shrink-0 mt-0.5" />
                    <span>Transparent pricing with 0% interest payment plans</span>
                  </div>
                </div>
              </div>

              {/* Other Related Articles in Sidebar */}
              {relatedPosts.length > 0 && (
                <div className="bg-white p-6 sm:p-7 rounded-3xl border border-[#d8dde1] space-y-5">
                  <h4 className="text-base font-bold text-[#050c14]">
                    More From Our Clinic
                  </h4>
                  <div className="space-y-4">
                    {relatedPosts.map((rPost) => (
                      <Link
                        key={rPost.slug}
                        href={`/blog/${rPost.slug}`}
                        className="group flex gap-3.5 items-center hover:bg-[#f5f7fa] p-2 rounded-2xl transition-colors"
                      >
                        <div className="relative w-16 h-16 rounded-xl overflow-hidden shrink-0 bg-slate-100">
                          <Image
                            src={rPost.image}
                            alt={rPost.title}
                            fill
                            sizes="64px"
                            className="object-cover group-hover:scale-105 transition-transform"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="text-[11px] font-bold text-[#33a9b1] block uppercase tracking-wide">
                            {rPost.category}
                          </span>
                          <h5 className="text-xs sm:text-sm font-bold text-[#050c14] group-hover:text-[#33a9b1] transition-colors line-clamp-2 leading-snug">
                            {rPost.title}
                          </h5>
                          <span className="text-[11px] text-[#47697b] block mt-0.5">
                            {rPost.readTime}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </aside>

          </div>
        </div>

        {/* Bottom Related Articles Section */}
        {relatedPosts.length > 0 && (
          <section className="bg-[#f5f7fa] py-16 sm:py-20 border-t border-[#d8dde1]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between mb-8 sm:mb-12">
                <div>
                  <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#33a9b1] block">
                    Recommended Reading
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#050c14]">
                    Related Health Articles
                  </h3>
                </div>
                <Link
                  href="/#blog"
                  className="hidden sm:inline-flex items-center gap-1.5 text-sm font-bold text-[#33a9b1] hover:underline"
                >
                  <span>View All Articles</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {relatedPosts.map((rPost) => (
                  <article
                    key={rPost.slug}
                    className="group bg-white rounded-3xl overflow-hidden border border-[#d8dde1] hover:border-[#33a9b1] hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                  >
                    <Link href={`/blog/${rPost.slug}`} className="block relative aspect-[16/9] overflow-hidden bg-slate-100">
                      <Image
                        src={rPost.image}
                        alt={rPost.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <span className="absolute top-4 left-4 bg-[#33a9b1] text-white text-xs font-bold px-3 py-1 rounded-full">
                        {rPost.category}
                      </span>
                    </Link>

                    <div className="p-6 flex-1 flex flex-col justify-between space-y-3">
                      <div>
                        <div className="flex items-center gap-3 text-xs text-[#47697b] mb-2">
                          <span>{rPost.date}</span>
                          <span>•</span>
                          <span>{rPost.readTime}</span>
                        </div>
                        <Link href={`/blog/${rPost.slug}`} className="block">
                          <h4 className="text-lg sm:text-xl font-bold text-[#050c14] group-hover:text-[#33a9b1] transition-colors leading-snug">
                            {rPost.title}
                          </h4>
                        </Link>
                        <p className="text-sm text-[#47697b] mt-2 line-clamp-2">
                          {rPost.excerpt}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-[#d8dde1] flex items-center justify-between">
                        <span className="text-xs text-[#47697b] font-medium">
                          By {rPost.author.name}
                        </span>
                        <Link
                          href={`/blog/${rPost.slug}`}
                          className="inline-flex items-center gap-1 text-xs font-bold text-[#33a9b1] group-hover:translate-x-1 transition-transform"
                        >
                          <span>Read Full Story</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <Footer
        clinic={clinic}
        onOpenBooking={() => setBookingModalOpen(true)}
      />

      {/* Appointment Modal */}
      <AppointmentModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        clinic={clinic}
      />

      {/* Scroll to top */}
      <ScrollToTop />
    </div>
  );
}

