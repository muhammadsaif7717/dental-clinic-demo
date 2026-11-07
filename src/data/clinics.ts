export interface DentalService {
  title: string;
  bengaliTitle: string;
  description: string;
  price: string;
  duration: string;
  image: string;
  popular?: boolean;
}

export interface ClinicGalleryItem {
  url: string;
  caption: string;
}

export interface DentalClinic {
  id: string;
  name: string;
  heroImage: string;
  doctor: {
    name: string;
    designation: string;
    bmdc: string;
    experience: string;
    specialty: string;
    image: string;
  };
  area: string;
  address: string;
  phone: string;
  whatsapp: string;
  hours: string;
  tagline: string;
  heroHeadline: string;
  heroSubheadline: string;
  specialHighlight: string;
  consultationFee: string;
  gallery: ClinicGalleryItem[];
  services: DentalService[];
  reviews: {
    name: string;
    area: string;
    rating: number;
    comment: string;
    treatment: string;
    date: string;
  }[];
}

const DEFAULT_GALLERY: ClinicGalleryItem[] = [
  {
    url: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80",
    caption: "অত্যাধুনিক ও আরামদায়ক ডেন্টাল চেয়ার"
  },
  {
    url: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80",
    caption: "ক্লাস-বি অটোক্লেভ ১০০% জীবাণুমুক্তকরণ"
  },
  {
    url: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=800&q=80",
    caption: "ডিজিটাল ইন্ট্রাওরাল মনিটর ও ওরাল এক্স-রে"
  },
  {
    url: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80",
    caption: "ভয়হীন ও নিরাপদ চিকিৎসার পরিবেশ"
  }
];

export const DENTAL_CLINICS: DentalClinic[] = [
  // 1. Dental Solutions (Mohammadpur)
  {
    id: "dental-solutions",
    name: "Dental Solutions",
    heroImage: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80",
    doctor: {
      name: "ডা. সারোয়ার হাসান",
      designation: "BDS (DU), PGT (Oral & Dental Surgery)",
      bmdc: "BMDC Reg: A-68421",
      experience: "৯+ বছরের ক্লিনিকাল অভিজ্ঞতা",
      specialty: "ফিক্সড ব্রেসেস, ওরাল সার্জারি ও জিরকোনিয়া ক্রাউন বিশেষজ্ঞ",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80"
    },
    area: "Mohammadpur, Dhaka",
    address: "House# 38/1, Road# 04, Ground Floor, Mohamodia Housing Society, Mohammadpur, Dhaka",
    phone: "01976-369883",
    whatsapp: "8801976369883",
    hours: "শনিবার - বৃহস্পতিবার: বিকাল ৫:০০ - রাত ৯:৩০",
    tagline: "মোহাম্মদপুরে নিখুঁত ডেন্টাল সমাধান ও স্থায়ী হাসির নির্ভরযোগ্য ঠিকানা",
    heroHeadline: "আধুনিক চিকিৎসা ও অভিজ্ঞ হাতের স্পর্শে ডেন্টাল কেয়ার",
    heroSubheadline: "মোহাম্মাদী হাউজিংয়ে অত্যাধুনিক ওরাল সার্জারি, উন্নত মানের জিরকোনিয়া ক্যাপ এবং পেইনলেস ট্রিটমেন্ট নিন শতভাগ নিরাপদ পরিবেশে।",
    specialHighlight: "মোহাম্মাদী হাউজিং ও মোহাম্মদপুরে অত্যন্ত বিশ্বস্ত ডেন্টাল সেন্টার",
    consultationFee: "৫০০ টাকা",
    gallery: DEFAULT_GALLERY,
    services: [
      {
        title: "Rotary Root Canal Treatment",
        bengaliTitle: "পেইনলেস রুট ক্যানাল ট্রিটমেন্ট",
        description: "সর্বাধুনিক রোটারি মেশিনের সাহায্যে দাঁতের ব্যথা দ্রুত দূর করে প্রাকৃতিক দাঁত সংরক্ষণ।",
        price: "৪,৫০০ - ৬,০০০ টাকা",
        duration: "২-৩ টি সেশন",
        image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80",
        popular: true
      },
      {
        title: "Zirconia & Ceramic Crown",
        bengaliTitle: "জিরকোনিয়া ও সিরামিক ক্যাপ",
        description: "অরিজিনাল দাঁতের রঙের সাথে হুবহু ম্যাচিং দীর্ঘস্থায়ী ও শক্তিশালী ক্রাউন।",
        price: "৭,০০০ - ১০,০০০ টাকা",
        duration: "৩-৫ দিন",
        image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80",
        popular: true
      },
      {
        title: "Advanced Fixed Orthodontic Braces",
        bengaliTitle: "উন্নত ফিক্সড ডেন্টাল ব্রেসেস",
        description: "এঁকেবেঁকে বা ফাঁকা থাকা দাঁত স্থায়ীভাবে সমান ও সুন্দর শেপে রূপান্তর।",
        price: "৫০,০০০ - ৭০,০০০ টাকা",
        duration: "কোর্স অনুযায়ী",
        image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Surgical Extractions & Wisdom Tooth",
        bengaliTitle: "আক্কেল দাঁত সার্জারি ও এক্সট্রাকশন",
        description: "মাইক্রো-সার্জারি পদ্ধতিতে নিরাপদে ও ব্যথামুক্তভাবে জটিল দাঁত অপসারণ।",
        price: "২,৫০০ - ৫,০০০ টাকা",
        duration: "৩০-৪৫ মিনিট",
        image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80"
      }
    ],
    reviews: [
      {
        name: "তানভীর আহমেদ",
        area: "মোহাম্মাদী হাউজিং, মোহাম্মদপুর",
        rating: 5,
        comment: "ডা. সারোয়ার ভাইয়ের হাত খুব শান্ত ও দক্ষ। আমার রুট ক্যানালের কোনো ব্যথাই বুঝিনি।",
        treatment: "রুট ক্যানাল ও ক্রাউন",
        date: "২ দিন আগে"
      },
      {
        name: "নাজনীন আক্তার",
        area: "বায়তুল আমান, মোহাম্মদপুর",
        rating: 5,
        comment: "চেম্বারের পরিবেশ খুব পরিচ্ছন্ন এবং ডাক্তারের ব্যবহার অত্যন্ত আন্তরিক।",
        treatment: "ফিক্সড ব্রেসেস কনসালটেশন",
        date: "১ সপ্তাহ আগে"
      }
    ]
  },

  // 2. Syed Dental Care (Mohammadpur)
  {
    id: "syed-dental-care",
    name: "Syed Dental Care",
    heroImage: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80",
    doctor: {
      name: "ডা. সৈয়দ নজরুল হুদা",
      designation: "BDS (DU), MRSH (UK), PGT (DDCH), MPH",
      bmdc: "BMDC Reg: A-39821",
      experience: "১৫+ বছরের বিশেষজ্ঞ অভিজ্ঞতা",
      specialty: "সহকারী অধ্যাপক ও বিভাগীয় প্রধান (ম্যান্ডি ডেন্টাল কলেজ ও হাসপাতাল)",
      image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=600&q=80"
    },
    area: "Mohammadpur, Dhaka",
    address: "House# 208, Road# 03, Mohammadi Housing Society, Mohammadpur, Dhaka",
    phone: "01819-116035",
    whatsapp: "8801819116035",
    hours: "শনিবার - বৃহস্পতিবার: বিকাল ৫:৩০ - রাত ৯:৩০ (শুক্রবার বন্ধ)",
    tagline: "আন্তর্জাতিক মানের ডেন্টাল সার্জারি ও বিশেষজ্ঞ চিকিৎসকের নিবিড় পরামর্শ",
    heroHeadline: "অভিজ্ঞ ডেন্টাল সার্জনের বিশেষায়িত সেবায় স্বস্তির হাসি",
    heroSubheadline: "ম্যান্ডি ডেন্টাল কলেজের বিভাগীয় প্রধানের সরাসরি তত্ত্বাবধানে মোহাম্মদপুরে আধুনিক ওরাল ও ডেন্টাল ট্রিটমেন্ট।",
    specialHighlight: "যুক্তরাজ্যের ফেলোশিপ ও ডেন্টাল কলেজ ফ্যাকাল্টির অভিজ্ঞতা",
    consultationFee: "৭০০ টাকা",
    gallery: DEFAULT_GALLERY,
    services: [
      {
        title: "Specialist Root Canal & Crown",
        bengaliTitle: "স্পেশালিস্ট রুট ক্যানাল ও ক্যাপ",
        description: "আন্তর্জাতিক প্রটোকল মেনে মাইক্রো-এন্ডোডন্টিক পদ্ধতিতে দাঁত রক্ষা।",
        price: "৫,০০০ - ৭,০০০ টাকা",
        duration: "২ টি সেশন",
        image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80",
        popular: true
      },
      {
        title: "Oral & Maxillofacial Minor Surgery",
        bengaliTitle: "মাইনর ওরাল সার্জারি ও সিস্ট অপারেশন",
        description: "মুখ ও চোয়ালের যে কোনো জটিল ডেন্টাল সমস্যার নিরাপদ ও ব্যথাহীন সমাধান।",
        price: "৩,৫০০ - ৮,০০০ টাকা",
        duration: "৪৫ মিনিট",
        image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Aesthetic Smile Designing",
        bengaliTitle: "স্মাইল ডিজাইনিং ও কসমেটিক ফিলিং",
        description: "দাঁতের ফাঁকা পূরণ ও হলুদ ভাব দূর করে আকর্ষণীয় ন্যাচারাল হাসি প্রদান।",
        price: "২,০০০ - ৫,০০০ টাকা",
        duration: "১ টি সেশন",
        image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80",
        popular: true
      }
    ],
    reviews: [
      {
        name: "আসিফ জামান",
        area: "রোড ৩, মোহাম্মদী হাউজিং",
        rating: 5,
        comment: "প্রফেসর ডাক্তারের চিকিৎসা মানেই আলাদা স্বস্তি। উনার পরামর্শ খুবই খাঁটি।",
        treatment: "মাইনর ওরাল সার্জারি",
        date: "৩ দিন আগে"
      }
    ]
  },

  // 3. Desh Dental Care (Mohammadpur)
  {
    id: "desh-dental-care",
    name: "Desh Dental Care",
    heroImage: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80",
    doctor: {
      name: "চিফ ডেন্টাল সার্জন",
      designation: "BDS, PGT (Oral & Dental Surgery)",
      bmdc: "BMDC রেজিস্টার্ড ডেন্টাল প্র্যাকটিশনার",
      experience: "১০+ বছরের নিয়মিত সেবা",
      specialty: "জেনারেল ডেন্টিস্ট্রি, পাইনলেস এক্সট্রাকশন ও রুট ক্যানাল বিশেষজ্ঞ",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=600&q=80"
    },
    area: "Mohammadpur, Dhaka",
    address: "House No. 2/2, Ground Floor, Nurjahan Road, Mohammadpur, Dhaka",
    phone: "01717-524773",
    whatsapp: "8801717524773",
    hours: "শনিবার - বৃহস্পতিবার: বিকাল ৫:০০ - রাত ১০:০০",
    tagline: "নূরজাহান রোডে সাশ্রয়ী খরচে আধুনিক ও নির্ভরযোগ্য দাঁতের চিকিৎসা",
    heroHeadline: "আপনার পরিবারের সকল দাঁতের যত্নে দেশ ডেন্টাল কেয়ার",
    heroSubheadline: "নূরজাহান রোড মোহাম্মদপুরে সম্পূর্ণ জীবাণুমুক্ত পরিবেশে দাঁতের স্কেলিং, ফিলিং, ক্যাপ ও ব্যথামুক্ত চিকিৎসা।",
    specialHighlight: "মোহাম্মদপুর নূরজাহান রোডের জনপ্রিয় ফ্যামিলি ডেন্টাল কেয়ার",
    consultationFee: "৪০০ টাকা",
    gallery: DEFAULT_GALLERY,
    services: [
      {
        title: "Scaling & Deep Ultrasonic Polishing",
        bengaliTitle: "আল্ট্রাসনিক স্কেলিং ও পলিশিং",
        description: "দাঁতের প্লাক, দাগ ও মাড়ির রক্ত পড়া দূর করে মুখ সম্পূর্ণ ফ্রেশ রাখা।",
        price: "১,২০০ - ২,০০০ টাকা",
        duration: "৩০ মিনিট",
        image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80",
        popular: true
      },
      {
        title: "Light Cure Aesthetic Filling",
        bengaliTitle: "লেজার লাইট কিউর ফিলিং",
        description: "ক্ষয়প্রাপ্ত দাঁতের মূল রং অক্ষুণ্ণ রেখে পারফেক্ট ক্যাভিটি রিপেয়ার।",
        price: "১,০০০ - ১,৮০০ টাকা",
        duration: "৩০ মিনিট",
        image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80",
        popular: true
      },
      {
        title: "Painless Tooth Extraction",
        bengaliTitle: "পেইনলেস দাঁত তোলা ও সার্জারি",
        description: "অসাড় করার আধুনিক ওষুধ দিয়ে সম্পূর্ণ ব্যথাহীনভাবে রোগাক্রান্ত দাঁত তোলা।",
        price: "১,০০০ - ২,৫০০ টাকা",
        duration: "২০-৩০ মিনিট",
        image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80"
      }
    ],
    reviews: [
      {
        name: "শাহরিয়ার কবির",
        area: "নূরজাহান রোড, মোহাম্মদপুর",
        rating: 5,
        comment: "ডাক্তারের ব্যবহার খুবই ভালো এবং খুব যত্ন নিয়ে স্কেলিং করেছেন। কোনো রক্ত বা ব্যথা লাগেনি।",
        treatment: "দাঁতের স্কেলিং ও পলিশিং",
        date: "৪ দিন আগে"
      }
    ]
  },

  // 4. The Dental Clinic (Mohammadia Housing, Mohammadpur)
  {
    id: "the-dental-clinic",
    name: "The Dental Clinic",
    heroImage: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1200&q=80",
    doctor: {
      name: "ডা. রুমানা ইয়াসমিন",
      designation: "BDS, PGT (Dental Surgery Specialist)",
      bmdc: "BMDC Reg: A-72154",
      experience: "৮+ বছরের পেশাদার সেবা",
      specialty: "মুখ ও দন্তরোগ বিশেষজ্ঞ এবং কসমেটিক ডেন্টিস্ট",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80"
    },
    area: "Mohammadpur, Dhaka",
    address: "House-11 (1st floor), Main Road, Mohammadia Housing Limited, Mohammadpur, Dhaka",
    phone: "01714-117246",
    whatsapp: "8801714117246",
    hours: "শনিবার - বৃহস্পতিবার: বিকাল ৪:৩০ - রাত ৯:০০",
    tagline: "মহিলা ও পরিবারের জন্য আন্তরিক পরিবেশে উন্নত দাঁতের চিকিৎসা",
    heroHeadline: "সুন্দর দাঁত ও আত্মবিশ্বাসী হাসির নিরাপদ ঠিকানা",
    heroSubheadline: "মোহাম্মাদী হাউজিং মেইন রোডে ডা. রুমানা ইয়াসমিনের দক্ষ পরিচালনায় আরামদায়ক ও ভীতিহীন ডেন্টাল সেবা।",
    specialHighlight: "নারী ও শিশু রোগীদের জন্য বিশেষ যত্নবান ও কমফোর্টেবল পরিবেশ",
    consultationFee: "৫০০ টাকা",
    gallery: DEFAULT_GALLERY,
    services: [
      {
        title: "Single Sitting Root Canal",
        bengaliTitle: "সিঙ্গেল সিটিং রুট ক্যানাল",
        description: "১ দিনেই দাঁতের প্রচণ্ড ব্যথা নিরাময় করে স্বাভাবিক অবস্থায় ফিরিয়ে আনা।",
        price: "৪,০০০ - ৫,৫০০ টাকা",
        duration: "১-২ সেশন",
        image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80",
        popular: true
      },
      {
        title: "Pediatric Dental Care",
        bengaliTitle: "বাচ্চাদের দাঁতের যত্ন ও ফিলিং",
        description: "শিশুদের কোনো রকম ভয় ও ট্রমা ছাড়াই ডেন্টাল ক্যাভিটি চিকিৎসা।",
        price: "৮০০ - ১,৫০০ টাকা",
        duration: "২৫ মিনিট",
        image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=800&q=80",
        popular: true
      }
    ],
    reviews: [
      {
        name: "সাবরিনা জাহান",
        area: "মোহাম্মাদী হাউজিং লিমিটেড",
        rating: 5,
        comment: "ম্যাডাম অসম্ভব ধৈর্যশীল। আমার ৭ বছরের বাচ্চার দাঁতের চিকিৎসা এতো সহজে শেষ হয়েছে যা ভাবতেই পারিনি।",
        treatment: "বাচ্চাদের দাঁতের ফিলিং",
        date: "১ সপ্তাহ আগে"
      }
    ]
  },

  // 5. Tooth Cure Dental Orthodontics & Implant Center (Lalmatia / Dhanmondi)
  {
    id: "tooth-cure-dental",
    name: "Tooth Cure Dental Orthodontics & Implant Center",
    heroImage: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80",
    doctor: {
      name: "ডা. ওরনিশা উর্মি",
      designation: "BDS (DU), PGT (OMFS, Dhaka Dental College)",
      bmdc: "BMDC Reg: A-15034",
      experience: "৬+ বছরের বিশেষায়িত অভিজ্ঞতা",
      specialty: "ওরাল অ্যান্ড ম্যাক্সিলোফেসিয়াল সার্জন ও ডেন্টাল ইমপ্ল্যান্ট প্র্যাকটিশনার",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=600&q=80"
    },
    area: "Lalmatia, Dhanmondi, Dhaka",
    address: "1/1E, Block C, Lalmatia (Behind Genetic Plaza, Dhanmondi 27), Dhaka - 1205",
    phone: "01770-149468",
    whatsapp: "8801770149468",
    hours: "প্রতিদিন: সকাল ১১:০০ - দুপুর ২:০০ এবং বিকাল ৪:০০ - রাত ১০:০০",
    tagline: "ধানমন্ডি ও লালমাটিয়ায় আধুনিক ডেন্টাল ইমপ্ল্যান্ট ও অর্থোডন্টিক্স সেন্টার",
    heroHeadline: "আন্তর্জাতিক মানের অর্থোডন্টিক্স ও ডেন্টাল ইমপ্ল্যান্ট সেবা",
    heroSubheadline: "ঢাকা ডেন্টাল কলেজের অভিজ্ঞ সার্জনের চেম্বারে ব্রেসেস, ক্লিয়ার এলাইনার্স ও ডেন্টাল ইমপ্ল্যান্টে পান পারফেক্ট সমাধান।",
    specialHighlight: "রোটারি এন্ডোডন্টিক্স ও ক্লিয়ার এলাইনার্সে বিশেষায়িত ট্রেনিংপ্রাপ্ত",
    consultationFee: "৬০০ টাকা",
    gallery: DEFAULT_GALLERY,
    services: [
      {
        title: "Dental Implant Restoration",
        bengaliTitle: "ডেন্টাল ইমপ্ল্যান্ট (স্থায়ী দাঁত প্রতিস্থাপন)",
        description: "হারানো দাঁতের জায়গায় চোয়ালের হাড়ে আন্তর্জাতিক টাইটানিয়াম স্ক্রু বসিয়ে আজীবনের স্থায়ী দাঁত।",
        price: "৪৫,০০০ - ৬৫,০০০ টাকা",
        duration: "সেশন অনুযায়ী",
        image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80",
        popular: true
      },
      {
        title: "Clear Aligners & Invisible Braces",
        bengaliTitle: "ক্লিয়ার অ্যালাইনার (অদৃশ্য ব্রেসেস)",
        description: "তারের কোনো ঝামেলা ছাড়াই স্বচ্ছ কভার পরে বাঁকা দাঁত সোজা করার আধুনিকতম প্রযুক্তি।",
        price: "৭০,০০০ - ১,২০,০০০ টাকা",
        duration: "কোর্স অনুযায়ী",
        image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80",
        popular: true
      },
      {
        title: "Laser Teeth Whitening",
        bengaliTitle: "লেজার টিথ হোয়াইটনিং (দাঁত উজ্জ্বলকরণ)",
        description: "হলুদ ও দাগ পড়া দাঁত মাত্র ১ সেশনেই ৩-৪ শেড ফর্সা ও ঝকঝকে হাসিতে রূপান্তর।",
        price: "৮,০০০ - ১২,০০০ টাকা",
        duration: "৪৫ মিনিট",
        image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80"
      }
    ],
    reviews: [
      {
        name: "মেহরাব হোসেন",
        area: "ধানমন্ডি ২৭",
        rating: 5,
        comment: "ক্লিয়ার অ্যালাইনার দিয়ে আমার সামনের দাঁতের ফাঁকা সম্পূর্ণ ঠিক হয়েছে। ডা. ওরনিশা আপুর কাজ অত্যন্ত নিখুঁত।",
        treatment: "ক্লিয়ার অ্যালাইনার",
        date: "৫ দিন আগে"
      }
    ]
  },

  // 6. Saiful's Dental Care (Mirpur-10)
  {
    id: "saiful-dental-care",
    name: "Saiful's Dental Care",
    heroImage: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80",
    doctor: {
      name: "ডা. সাইফুল ইসলাম",
      designation: "BDS, MS, MPH, BCS (Health)",
      bmdc: "BMDC Reg: A-28491",
      experience: "১৮+ বছরের শীর্ষস্থানীয় বিশেষজ্ঞ সেবা",
      specialty: "বিভাগীয় প্রধান, ডেন্টাল অ্যানাটমি বিভাগ, ঢাকা মেডিকেল কলেজ ও হাসপাতাল",
      image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=600&q=80"
    },
    area: "Mirpur-10, Dhaka",
    address: "House-24, 25, Road-6, Senpara Parbota, Mirpur-10, Dhaka - 1216",
    phone: "01819-290354",
    whatsapp: "8801819290354",
    hours: "শনিবার - বৃহস্পতিবার: বিকাল ৫:৩০ - রাত ৯:০০ (শুক্রবার বন্ধ)",
    tagline: "ঢাকা মেডিকেল কলেজের বিভাগীয় প্রধানের সরাসরি তত্ত্বাবধানে বিশেষায়িত চিকিৎসা",
    heroHeadline: "প্রস্থোডন্টিক্স ও ক্রাউন-ব্রিজ চিকিৎসায় সর্বোচ্চ আস্থা",
    heroSubheadline: "মিরপুর ১০ সেনপাড়া পর্বতায় ডিএমসির সিনিয়র বিশেষজ্ঞের মাধ্যমে দাঁত প্রতিস্থাপন, ব্রিজ ও উন্নত রুট ক্যানাল ট্রিটমেন্ট।",
    specialHighlight: "ঢাকা মেডিকেল কলেজ হাসপাতালের বিভাগীয় প্রধান ও বিসিএস বিশেষজ্ঞ",
    consultationFee: "৮০০ টাকা",
    gallery: DEFAULT_GALLERY,
    services: [
      {
        title: "Prosthodontics, Crown & Bridge",
        bengaliTitle: "ফিক্সড ডেন্টাল ক্রাউন ও ব্রিজ",
        description: "হারানো এক বা একাধিক দাঁত স্থায়ীভাবে ব্রিজ করে স্বাভাবিক খাবার চিবানোর ক্ষমতা ফিরিয়ে আনা।",
        price: "৬,০০০ - ১৫,০০০ টাকা",
        duration: "৩-৪ দিন",
        image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80",
        popular: true
      },
      {
        title: "Complete & Partial Denture",
        bengaliTitle: "কমপ্লিট ও পার্শিয়াল ডেনচার",
        description: "বয়স্কদের জন্য আরামদায়ক ও নিখুঁত ফিটিংসহ টেকসই নকল দাঁতের পাটি।",
        price: "১৫,০০০ - ২৫,০০০ টাকা",
        duration: "১ সপ্তাহ",
        image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Specialized Single-Visit Endodontics",
        bengaliTitle: "বিশেষজ্ঞ রুট ক্যানাল থেরাপি",
        description: "সংক্রমিত দাঁত না ফেলে ভেতর থেকে সম্পূর্ণ ইনফেকশন পরিষ্কার করে দীর্ঘ মেয়াদে স্থায়ী করা।",
        price: "৫,০০০ - ৭,০০০ টাকা",
        duration: "২ টি সেশন",
        image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80",
        popular: true
      }
    ],
    reviews: [
      {
        name: "এনামুল হক",
        area: "সেনপাড়া পর্বতা, মিরপুর ১০",
        rating: 5,
        comment: "ডিএমসির প্রধান ডাক্তার হওয়ার কারণে উনার ট্রিটমেন্টে কোনো সন্দেহ নেই। বাবার নকল দাঁতের পাটি একদম পারফেক্ট হয়েছে।",
        treatment: "কমপ্লিট ডেনচার",
        date: "১ সপ্তাহ আগে"
      }
    ]
  },

  // 7. Kazipara Dental Care (Mirpur)
  {
    id: "kazipara-dental-care",
    name: "Kazipara Dental Care",
    heroImage: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1200&q=80",
    doctor: {
      name: "ডা. মো. রেজাউল ইসলাম",
      designation: "BDS, MS (Oral & Maxillofacial Surgery)",
      bmdc: "BMDC Reg: A-34190",
      experience: "১২+ বছরের সার্জিক্যাল অভিজ্ঞতা",
      specialty: "সহকারী অধ্যাপক, ওরাল অ্যান্ড ম্যাক্সিলোফ্যাসিয়াল সার্জারি (ঢাকা মেডিকেল কলেজ)",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80"
    },
    area: "Mirpur, Dhaka",
    address: "769/1, West Kazipara, Mirpur, Dhaka - 1216",
    phone: "01712-514767",
    whatsapp: "8801712514767",
    hours: "শনিবার - বৃহস্পতিবার: বিকাল ৫:০০ - রাত ৯:৩০",
    tagline: "কাজীপাড়ায় ম্যাক্সিলোফেসিয়াল সার্জারি ও উন্নত ডেন্টাল ট্রিটমেন্টের ভরসা",
    heroHeadline: "জটিল দাঁত ও চোয়ালের সার্জারিতে আধুনিক সমাধান",
    heroSubheadline: "ঢাকা মেডিকেল কলেজের সহকারী অধ্যাপকের চেম্বারে নির্ভুল ডায়াগনসিস এবং ঝুঁকিমুক্ত ডেন্টাল সার্জারি।",
    specialHighlight: "ডিএমসিএইচ-এর অভিজ্ঞ ম্যাক্সিলোফেসিয়াল সার্জন",
    consultationFee: "৭০০ টাকা",
    gallery: DEFAULT_GALLERY,
    services: [
      {
        title: "Impacted Wisdom Tooth Surgery",
        bengaliTitle: "ইম্প্যাক্টেড আক্কেল দাঁত সার্জারি",
        description: "মাড়ির হাড়ে আটকে থাকা জটিল আক্কেল দাঁত ব্যথা ছাড়াই আধুনিক সার্জারিতে অপসারণ।",
        price: "৩,৫০০ - ৬,০০০ টাকা",
        duration: "৪০ মিনিট",
        image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80",
        popular: true
      },
      {
        title: "Jaw Cyst & Tumor Enucleation",
        bengaliTitle: "চোয়াল ও মাড়ির সিস্ট অপারেশন",
        description: "মুখ ও চোয়ালের যে কোনো অস্বাভাবিক ফোলা ও সিস্টের সফল অপারেশন।",
        price: "৮,০০০ - ১৫,০০০ টাকা",
        duration: "১ ঘণ্টা",
        image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80"
      }
    ],
    reviews: [
      {
        name: "জাহিদুল ইসলাম",
        area: "পশ্চিম কাজীপাড়া, মিরপুর",
        rating: 5,
        comment: "আমার বাঁকা আক্কেল দাঁতের জন্য অনেক ভয়ে ছিলাম। স্যার এতো সহজে কোনো ব্যথা ছাড়া অপারেশন শেষ করলেন যা অবিশ্বাস্য।",
        treatment: "আক্কেল দাঁত সার্জারি",
        date: "৩ দিন আগে"
      }
    ]
  },

  // 8. Samara Dental Care (Mirpur-10)
  {
    id: "samara-dental-care",
    name: "Samara Dental Care",
    heroImage: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80",
    doctor: {
      name: "ডা. মাফতাহুল জান্নাত মৌ",
      designation: "BDS, PGT, MS Resident (Conservative Dentistry & Endodontics, BSMMU)",
      bmdc: "BMDC Reg: A-81094",
      experience: "৭+ বছরের ক্লিনিকাল প্র্যাকটিস",
      specialty: "কনজারভেটিভ ডেন্টিস্ট্রি, রুট ক্যানাল ও নান্দনিক দাঁত সংরক্ষণ বিশেষজ্ঞ",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80"
    },
    area: "Mirpur-10, Dhaka",
    address: "House #02, Road #04, Block #A, Section #06, Mirpur 10 (Opposite Popular Diagnostic Unit-2), Dhaka",
    phone: "01796-565857",
    whatsapp: "8801796565857",
    hours: "শনিবার - বৃহস্পতিবার: বিকাল ৫:০০ - রাত ৮:৩০ (শুক্রবার বন্ধ)",
    tagline: "পপুলার ডায়াগনস্টিকের বিপরীতে আধুনিক এন্ডোডন্টিক ও স্মাইল কেয়ার",
    heroHeadline: "দাঁতের ব্যথা নিরাময় ও স্বাভাবিক রূপ ফিরিয়ে আনার বিশ্বস্ত চেম্বার",
    heroSubheadline: "বিএসএমএমইউ রেসিডেন্ট চিকিৎসকের অধীনে উন্নত রুট ক্যানাল ও আধুনিক দাঁত সংরক্ষণের নির্ভরযোগ্য চিকিৎসাকেন্দ্র।",
    specialHighlight: "পিজি হাসপাতাল (BSMMU) কনজারভেটিভ ডেন্টিস্ট্রি রেসিডেন্ট ডক্টর",
    consultationFee: "৫০০ টাকা",
    gallery: DEFAULT_GALLERY,
    services: [
      {
        title: "Rotary Single-Visit RCT",
        bengaliTitle: "রোটারি পেইনলেস রুট ক্যানাল",
        description: "দাঁতের নার্ভ ইনফেকশন দূর করে মাত্র ১-২ সিটিংয়ে সম্পূর্ণ পেইনলেস সমাধান।",
        price: "৪,০০০ - ৫,৫০০ টাকা",
        duration: "২ টি সেশন",
        image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80",
        popular: true
      },
      {
        title: "Cosmetic Veneers & Bonding",
        bengaliTitle: "কসমেটিক ভেনিয়ার ও স্মাইল রিস্টোরেশন",
        description: "দাঁতের দাগ ও ফাটা ঢেকে সিনেমার তারকাদের মতো ঝকঝকে হাসির প্রস্তুতি।",
        price: "৫,০০০ - ১২,০০০ টাকা",
        duration: "২ টি সেশন",
        image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80",
        popular: true
      }
    ],
    reviews: [
      {
        name: "ফারহানা মিলি",
        area: "মিরপুর ১০, সেকশন ৬",
        rating: 5,
        comment: "ডাক্তার আপুর ব্যবহার যেমন মিষ্টি, চিকিৎসাও তেমনই যত্নশীল। চেম্বারটি খুব নিট অ্যান্ড ক্লিন।",
        treatment: "রুট ক্যানাল ও ফিলিং",
        date: "১ সপ্তাহ আগে"
      }
    ]
  },

  // 9. Greenland Oro-Dental Surgery (Uttara Sector 14)
  {
    id: "greenland-oro-dental",
    name: "Greenland Oro-Dental Surgery",
    heroImage: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80",
    doctor: {
      name: "ডা. আচ্ছিয়া আহমেদ",
      designation: "BDS (DU), PGT, MPH",
      bmdc: "BMDC Reg: A-64210",
      experience: "১০+ বছরের শিক্ষকতা ও ক্লিনিকাল অভিজ্ঞতা",
      specialty: "প্রভাষক, সাপ্পোরো ডেন্টাল কলেজ ও হাসপাতাল",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=600&q=80"
    },
    area: "Uttara, Dhaka",
    address: "House No. 17, Shah Makhdum Avenue, Ground Floor, Sector-14, Uttara, Dhaka - 1230",
    phone: "01616-828242",
    whatsapp: "8801616828242",
    hours: "শনিবার - বৃহস্পতিবার: বিকাল ৫:০০ - রাত ৯:৩০",
    tagline: "উত্তরা সেক্টর ১৪-তে সাপ্পোরো ডেন্টাল কলেজের শিক্ষকের নিবিড় চিকিৎসা সেবা",
    heroHeadline: "উত্তরায় আধুনিক ও নির্ভরযোগ্য দন্তরোগ নিরাময় কেন্দ্র",
    heroSubheadline: "শাহ মখদুম এভিনিউতে আন্তর্জাতিক মানের হাইজিন প্রটোকল মেনে দাঁতের যাবতীয় সমস্যার সমাধান।",
    specialHighlight: "সাপ্পোরো ডেন্টাল কলেজের প্রভাষক ও অভিজ্ঞ সার্জন",
    consultationFee: "৬০০ টাকা",
    gallery: DEFAULT_GALLERY,
    services: [
      {
        title: "Complete Crown & Bridge Work",
        bengaliTitle: "স্থায়ী দাঁতের ক্রাউন ও ব্রিজ",
        description: "উন্নত প্রযুক্তির সিরামিক ক্যাপ বসিয়ে দাঁত রক্ষা ও সৌন্দর্য বৃদ্ধি।",
        price: "৬,৫০০ - ৯,০০০ টাকা",
        duration: "৩-৫ দিন",
        image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80",
        popular: true
      },
      {
        title: "Comprehensive Oral Care & RCT",
        bengaliTitle: "আধুনিক রুট ক্যানাল ও এক্সট্রাকশন",
        description: "ব্যথামুক্ত পদ্ধতিতে দাঁতের শিকড়ের সংক্রমণ দূরীকরণ।",
        price: "৪,৫০০ - ৬,০০০ টাকা",
        duration: "২ টি সেশন",
        image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80",
        popular: true
      }
    ],
    reviews: [
      {
        name: "খালিদ সাইফুল্লাহ",
        area: "সেক্টর ১৪, উত্তরা",
        rating: 5,
        comment: "উত্তরায় এতো যত্নশীল ডেন্টাল সার্জন পাওয়া সত্যিই সৌভাগ্যের। আমার ক্যাপ নিখুঁতভাবে বসেছে।",
        treatment: "সিরামিক ক্রাউন",
        date: "৪ দিন আগে"
      }
    ]
  },

  // 10. Family Care Dental Zone (Uttara Sector 10)
  {
    id: "family-care-dental",
    name: "Family Care Dental Zone",
    heroImage: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80",
    doctor: {
      name: "ডা. ফেমাস উদ্দিন চয়ন",
      designation: "BDS, PGT, MPH",
      bmdc: "BMDC Reg: A-70312",
      experience: "৮+ বছরের পেশাদার সেবা",
      specialty: "এন্ডোডন্টিক ট্রিটমেন্ট, নান্দনিক ডেন্টিস্ট্রি ও ডেন্টাল ইমপ্ল্যান্ট প্র্যাকটিশনার",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=600&q=80"
    },
    area: "Uttara, Dhaka",
    address: "House 24, Road 12, Sector 10, Uttara Model Town, Dhaka - 1230",
    phone: "01682-683811",
    whatsapp: "8801682683811",
    hours: "প্রতিদিন: বিকাল ৫:০০ - রাত ১০:০০",
    tagline: "উত্তরা সেক্টর ১০-এ আপনার পরিবারের হাসি ও দাঁতের সার্বক্ষণিক যত্ন",
    heroHeadline: "আধুনিক ডেন্টাল কেয়ার এখন আপনার হাতের নাগালে",
    heroSubheadline: "সেক্টর ১০ মডেল টাউনে পরিবারের শিশু থেকে বয়স্ক সবার দাঁতের ব্যথা ও সৌন্দর্য সমস্যার নিখুঁত সমাধান।",
    specialHighlight: "উত্তরা মডেল টাউনের অন্যতম জনপ্রিয় ফ্যামিলি ডেন্টাল চেম্বার",
    consultationFee: "৫০০ টাকা",
    gallery: DEFAULT_GALLERY,
    services: [
      {
        title: "Aesthetic Light Cure Restoration",
        bengaliTitle: "কসমেটিক ফিলিং ও ক্যাভিটি রিপেয়ার",
        description: "দাঁত ভাঙা বা কালো হওয়া রোধে হুবহু দাঁতের মতো ফিনিশিং।",
        price: "১,২০০ - ২,২০০ টাকা",
        duration: "৩০ মিনিট",
        image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80",
        popular: true
      },
      {
        title: "Advanced Root Canal Therapy",
        bengaliTitle: "অ্যাডভান্সড রুট ক্যানাল থেরাপি",
        description: "মাইক্রোবিয়াল ইনফেকশন দূর করে দীর্ঘমেয়াদে দাঁত সক্রিয় রাখা।",
        price: "৪,৫০০ - ৬,০০০ টাকা",
        duration: "২ টি সেশন",
        image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80",
        popular: true
      }
    ],
    reviews: [
      {
        name: "তানিয়া সুলতানা",
        area: "সেক্টর ১০, উত্তরা",
        rating: 5,
        comment: "ডাক্তার খুব ধৈর্য নিয়ে পুরো দাঁতের পরীক্ষা করেছেন এবং খুব ভালো ট্রিটমেন্ট দিয়েছেন।",
        treatment: "রুট ক্যানাল ও ফিলিং",
        date: "৬ দিন আগে"
      }
    ]
  }
];

export function getClinicById(id: string): DentalClinic {
  const found = DENTAL_CLINICS.find((c) => c.id === id);
  return found || DENTAL_CLINICS[0];
}
