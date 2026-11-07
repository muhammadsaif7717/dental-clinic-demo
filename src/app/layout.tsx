import type { Metadata, Viewport } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dentique-dental.vercel.app"),
  title: {
    default: "Dentique - Modern Dentistry & Aesthetic Smile Studio",
    template: "%s | Dentique Dental Clinic",
  },
  description:
    "Dentique is an advanced dental clinic and aesthetic smile studio offering personalized, pain-free dental care, 3D digital implants, Invisalign, porcelain veneers, and pediatric dentistry. Book your appointment online.",
  keywords: [
    "Dentique",
    "Dentique Dental Clinic",
    "Modern Dentist",
    "Cosmetic Dentistry",
    "Dental Implants",
    "Invisalign",
    "Teeth Whitening",
    "Painless Root Canal",
    "Pediatric Dentist",
    "Smile Makeover",
    "Oral Surgery",
    "Emergency Dentist",
  ],
  authors: [{ name: "Dentique Clinical Specialists" }],
  creator: "Dentique Dental Clinic",
  publisher: "Dentique Dental Clinic",
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/png", sizes: "32x32" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Dentique - Modern Dentistry & Aesthetic Smile Studio",
    description:
      "Experience gentle, advanced dental treatments designed for comfort, precision, and lifelong oral health. Over 12,000+ happy smiles treated.",
    url: "https://dentique-dental.vercel.app",
    siteName: "Dentique Dental Clinic",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&h=630&q=85",
        width: 1200,
        height: 630,
        alt: "Dentique Modern Dental Clinic & Aesthetic Smile Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dentique - Modern Dentistry & Aesthetic Smile Studio",
    description:
      "Experience gentle, advanced dental treatments designed for comfort, precision, and lifelong oral health.",
    creator: "@dentiqueclinic",
    images: [
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&h=630&q=85",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
};

// JSON-LD Structured Data Schema for Search Engines (LocalBusiness / Dentist)
const structuredData = {
  "@context": "https://schema.org",
  "@type": ["Dentist", "MedicalBusiness", "LocalBusiness"],
  name: "Dentique Dental Clinic",
  alternateName: "Dentique - Modern Dentistry & Smile Studio",
  url: "https://dentique-dental.vercel.app",
  logo: "https://dentique-dental.vercel.app/dentox/images/logo.svg",
  image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&h=630&q=85",
  description:
    "Dentique provides personalized, pain-free dental care, 3D CBCT digital diagnostics, dental implants, Invisalign, and cosmetic smile designs.",
  telephone: "+1-208-555-0112",
  email: "info@dentiqueclinic.com",
  priceRange: "$$",
  currenciesAccepted: "USD",
  paymentAccepted: "Cash, Credit Card, Insurance",
  address: {
    "@type": "PostalAddress",
    streetAddress: "35 Todds Lane",
    addressLocality: "San Antonio",
    addressRegion: "TX",
    postalCode: "98336",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "29.4241",
    longitude: "-98.4936",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "08:00",
      closes: "14:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    bestRating: "5",
    ratingCount: "1284",
  },
  medicalSpecialty: [
    "Dentistry",
    "Orthodontics",
    "Periodontics",
    "Pediatric Dentistry",
    "Prosthodontics",
    "OralSurgery",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${dmSans.variable} h-full scroll-smooth antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-[#47697b] font-sans selection:bg-[#33a9b1] selection:text-white">
        {children}
      </body>
    </html>
  );
}
