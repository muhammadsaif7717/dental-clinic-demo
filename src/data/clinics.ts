export interface DentalClinic {
  id: string;
  name: string;
  doctor: {
    name: string;
    designation: string;
    bmdc: string;
    experience: string;
    specialty: string;
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
  services: {
    title: string;
    bengaliTitle: string;
    description: string;
    price: string;
    duration: string;
    popular?: boolean;
  }[];
  reviews: {
    name: string;
    area: string;
    rating: number;
    comment: string;
    treatment: string;
    date: string;
  }[];
}

export const DENTAL_CLINICS: DentalClinic[] = [
  {
    id: "dr-priyanka",
    name: "Dr. Priyanka's Dental Clinic",
    doctor: {
      name: "ডা. প্রিয়াঙ্কা সাহা",
      designation: "BDS (DU), PGT (Dental Surgery), FCOI (Implant)",
      bmdc: "BMDC Reg: A-74892",
      experience: "৮+ বছরের অভিজ্ঞতা",
      specialty: "কসমেটিক ডেন্টিস্ট্রি ও পেইনলেস রুট ক্যানাল বিশেষজ্ঞ"
    },
    area: "Mohammadpur, Dhaka",
    address: "House 766/E (Ground Floor), Road 7, Baitul Aman Housing, Shekhertek, Mohammadpur, Dhaka",
    phone: "01629-331999",
    whatsapp: "8801629331999",
    hours: "শনিবার - বৃহস্পতিবার: বিকাল ৪:৩০ - রাত ৯:৩০ (শুক্রবার অ্যাপয়েন্টমেন্ট ভিত্তিতে)",
    tagline: "পেইনলেস ডেন্টাল কেয়ার ও সুন্দর হাসির নির্ভরযোগ্য ঠিকানা",
    heroHeadline: "ভয়হীন ও আধুনিক ডেন্টাল চিকিৎসায় আপনার বিশ্বস্ত প্রতিষ্ঠান",
    heroSubheadline: "মোহাম্মদপুর শেখেরটেকে আন্তর্জাতিক মানের জীবাণুমুক্ত পরিবেশে উন্নত ডেন্টাল ট্রিটমেন্ট নিন সরাসরি অভিজ্ঞ ডেন্টাল সার্জনের তত্ত্বাবধানে।",
    specialHighlight: "মোহাম্মদপুর এলাকায় ৫ স্টার রেটেড পেশেন্ট কেয়ার",
    consultationFee: "৫০০ টাকা",
    services: [
      {
        title: "Painless Root Canal",
        bengaliTitle: "পেইনলেস রুট ক্যানাল (RCT)",
        description: "সম্পূর্ণ ব্যথামুক্ত সিঙ্গেল বা মাল্টি-সিটিং আধুনিক রোটারি রুট ক্যানাল থেরাপি।",
        price: "৳ ৩,৫০০ থেকে শুরু",
        duration: "৪৫ মিনিট / সিটিং",
        popular: true
      },
      {
        title: "Teeth Scaling & Polishing",
        bengaliTitle: "আল্ট্রাসনিক স্কেলিং ও পলিশিং",
        description: "দাঁতের মাড়ির রক্ত পড়া ও পাথর দূর করে ঝকঝকে ও ফ্রেশ দাঁতের সুরক্ষা।",
        price: "৳ ১,২০০ থেকে শুরু",
        duration: "৩০ মিনিট",
        popular: true
      },
      {
        title: "Laser Teeth Whitening",
        bengaliTitle: "লেজার টিথ হোয়াইটেনিং",
        description: "হলুদাভ ভাব দূর করে এক ঘণ্টার মধ্যেই দাঁতকে করুন ২-৩ শেড বেশি উজ্জ্বল।",
        price: "৳ ৬,০০০ থেকে শুরু",
        duration: "৬০ মিনিট"
      },
      {
        title: "Ceramic & Zirconia Crown",
        bengaliTitle: "জারকোনিয়া ও সেরামিক ক্যাপ/ক্রাউন",
        description: "আসল দাঁতের মতো হুবহু ন্যাচারাল লুক ও দীর্ঘস্থায়ী ক্রাউন সলিউশন।",
        price: "৳ ৪,৫০০ থেকে শুরু",
        duration: "২-৩ সিটিং"
      },
      {
        title: "Dental Implants",
        bengaliTitle: "পার্মানেন্ট ডেন্টাল ইমপ্ল্যান্ট",
        description: "হারিয়ে যাওয়া দাঁতের বিকল্পে আজীবন মেয়াদি টাইটানিয়াম ইমপ্ল্যান্ট প্রতিস্থাপন।",
        price: "৳ ২৫,০০০ থেকে শুরু",
        duration: "সার্জিক্যাল ও প্রোস্থেটিক"
      },
      {
        title: "Pediatric Dental Care",
        bengaliTitle: "শিশুদের দাঁতের যত্ন (পেডিয়াট্রিক)",
        description: "শিশুবান্ধব ও আনন্দময় পরিবেশে বাচ্চাদের দাঁতের ক্যাভিটি ও ব্যথামুক্ত ফিলিং।",
        price: "৳ ১,০০০ থেকে শুরু",
        duration: "৩০ মিনিট"
      }
    ],
    reviews: [
      {
        name: "তানজিলা রহমান",
        area: "শেখেরটেক, মোহাম্মদপুর",
        rating: 5,
        comment: "ডাক্তার প্রিয়াঙ্কা আপু অত্যন্ত যত্ন সহকারে আমার রুট ক্যানাল করেছেন। একটুও ব্যথা পাইনি। পুরো ক্লিনিক একদম নিট অ্যান্ড ক্লিন।",
        treatment: "রুট ক্যানাল ট্রিটমেন্ট",
        date: "১ সপ্তাহ আগে"
      },
      {
        name: "সাইফুল ইসলাম",
        area: "বায়তুল আমান হাউজিং",
        rating: 5,
        comment: "স্কেলিং করানোর পর দাঁত একদম চকচকে লাগছে। খুব প্রফেশনাল এবং রিজনেবল চার্জ। মোহাম্মদপুরের সেরা ডেন্টাল ক্লিনিক।",
        treatment: "আল্ট্রাসনিক স্কেলিং",
        date: "৩ সপ্তাহ আগে"
      },
      {
        name: "আরিফ হোসেন",
        area: "জাপান গার্ডেন সিটি",
        rating: 5,
        comment: "বাচ্চার দাঁতে পোকা লেগে ব্যথা করছিল। খুব ভালো কাউন্সেলিং করে ফিলিং করে দিয়েছেন। কোনো ভয় পায়নি বাচ্চা।",
        treatment: "পেডিয়াট্রিক ফিলিং",
        date: "১ মাস আগে"
      }
    ]
  },
  {
    id: "rahman-dental-care",
    name: "Rahman Dental Care",
    doctor: {
      name: "ডা. এম. রহমান",
      designation: "BDS, PGT, Certified Implantologist (ICOI, USA)",
      bmdc: "BMDC Reg: A-61245",
      experience: "১২+ বছরের ক্লিনিক্যাল অভিজ্ঞতা",
      specialty: "ডেন্টাল ইমপ্ল্যান্ট ও অ্যাডভান্সড ওরাল সার্জারি"
    },
    area: "Mohammadi Housing, Mohammadpur",
    address: "House 106/A, Road 4, Mohammadi Housing Ltd. (Near Shia Masjid), Mohammadpur, Dhaka",
    phone: "01719-826233",
    whatsapp: "8801719826233",
    hours: "প্রতিদিন: বিকাল ৫:০০ - রাত ১০:০০ (শুক্রবার খোলা)",
    tagline: "অ্যাডভান্সড ডেন্টাল ইমপ্ল্যান্ট ও আধুনিক মুখ ও দাঁতের চিকিৎসা",
    heroHeadline: "হারিয়ে যাওয়া দাঁতের স্থায়ী সমাধান পান অভিজ্ঞ ইমপ্ল্যান্টোলজিস্টের কাছে",
    heroSubheadline: "শিয়া মসজিদের কাছে মোহাম্মাদী হাউজিংয়ে আন্তর্জাতিক মানের ডেন্টাল ইমপ্ল্যান্ট ও সর্বাধুনিক প্রযুক্তির নিরাপদ সেবা।",
    specialHighlight: "আমেরিকান সার্টিফাইড ইমপ্ল্যান্ট ও সার্জারি সেন্টার",
    consultationFee: "৬০০ টাকা",
    services: [
      {
        title: "Titanium Dental Implants",
        bengaliTitle: "ইউএসএ/জার্মান ডেন্টাল ইমপ্ল্যান্ট",
        description: "কম্পিউটার গাইডেড নির্ভুল ইমপ্ল্যান্ট সার্জারি, যা আজীবন স্থায়ী দাঁত নিশ্চিত করে।",
        price: "৳ ৩০,০০০ থেকে শুরু",
        duration: "স্থায়ী প্রতিস্থাপন",
        popular: true
      },
      {
        title: "Wisdom Tooth Surgery",
        bengaliTitle: "আক্কেল দাঁত (Wisdom Tooth) সার্জারি",
        description: "জটিল ও মাড়ির নিচে আটকে থাকা আক্কেল দাঁতের দ্রুত ও নিরাপদ পেইনলেস রিমুভাল।",
        price: "৳ ৪,০০০ থেকে শুরু",
        duration: "৪০ মিনিট",
        popular: true
      },
      {
        title: "Digital Smile Design",
        bengaliTitle: "ডিজিটাল স্মাইল ডিজাইন ও ভিনিয়ার",
        description: "দাঁতের ফাঁকা বা অসমান শেপ ঠিক করে নিখুঁত সিনেমাটিক হাসি ফিরিয়ে আনা।",
        price: "৳ ৮,০০০ থেকে শুরু",
        duration: "কাস্টমাইজড"
      },
      {
        title: "Root Canal Therapy",
        bengaliTitle: "মাইক্রোস্কোপিক রুট ক্যানাল",
        description: "উন্নত জাইস লেন্সের সাহায্যে দাঁতের গভীর ইনফেকশন চিরতরে নিরাময়।",
        price: "৳ ৪,০০০ থেকে শুরু",
        duration: "৪৫ মিনিট"
      },
      {
        title: "Deep Scaling & Root Planing",
        bengaliTitle: "ডিপ স্কেলিং ও মাড়ির চিকিৎসা",
        description: "পায়োরিয়া ও মাড়ি ফোলা রোগের স্থায়ী থেরাপি।",
        price: "৳ ১,৫০০ থেকে শুরু",
        duration: "৩৫ মিনিট"
      },
      {
        title: "Invisible Clear Braces",
        bengaliTitle: "ইনভিজিবল এলাইনার্স (ক্লিয়ার ব্রেসেস)",
        description: "তার ছাড়া অদৃশ্য ক্যাপের মাধ্যমে আঁকাবাঁকা দাঁতকে করুন সোজা।",
        price: "৳ ৫০,০০০ থেকে শুরু",
        duration: "৬-১২ মাস"
      }
    ],
    reviews: [
      {
        name: "ফারুক আহমেদ",
        area: "মোহাম্মাদী হাউজিং",
        rating: 5,
        comment: "ডা. রহমান স্যার আমার দুটি ডেন্টাল ইমপ্ল্যান্ট করেছেন। এখন আসল দাঁতের মতোই সব কিছু চিবিয়ে খেতে পারছি। অসাধারণ হাত ও ব্যক্তিত্ব।",
        treatment: "ডেন্টাল ইমপ্ল্যান্ট",
        date: "২ সপ্তাহ আগে"
      },
      {
        name: "রুমানা পারভীন",
        area: "রিং রোড, শ্যামলী",
        rating: 5,
        comment: "আক্কেল দাঁতের ব্যথায় খুব কষ্ট পাচ্ছিলাম। ২০ মিনিটেই কোনো ব্যথা ছাড়া সার্জারি করে তুলে দিলেন। অনেক ধন্যবাদ!",
        treatment: "উইজডম টুথ সার্জারি",
        date: "১ মাস আগে"
      }
    ]
  },
  {
    id: "dental-solutions",
    name: "Dental Solutions",
    doctor: {
      name: "ডা. তানভীর আহমেদ",
      designation: "BDS, MS (Orthodontics), Cosmetic Dental Specialist",
      bmdc: "BMDC Reg: A-52310",
      experience: "১০+ বছরের অভিজ্ঞতা",
      specialty: "আঁকাবাঁকা দাঁত সোজা করা (ব্রেসেস) ও কসমেটিক স্মাইল মেকওভার"
    },
    area: "Mohamodia Housing Society, Mohammadpur",
    address: "House 38/1 (Ground Floor), Road 4, Mohamodia Housing Society, Mohammadpur, Dhaka",
    phone: "01976-369883",
    whatsapp: "8801976369883",
    hours: "শনিবার - বৃহস্পতিবার: বিকাল ৪:০০ - রাত ৯:০০",
    tagline: "আঁকাবাঁকা ও ফাঁকা দাঁতের স্থায়ী সমাধান এবং আধুনিক কসমেটিক ডেন্টিস্ট্রি",
    heroHeadline: "আঁকাবাঁকা দাঁত সোজা করে ফিরে পান আত্মবিশ্বাসী হাসি",
    heroSubheadline: "মেটালিক, সিরামিক এবং ইনভিজিবল ব্রেসেসের মাধ্যমে নিখুঁত দাঁতের গঠন পান বিশেষজ্ঞ অর্থোডন্টিস্টের কাছে।",
    specialHighlight: "স্পেশালাইজড অর্থোডন্টিক ও কসমেটিক ডেন্টাল কেয়ার",
    consultationFee: "৫০০ টাকা",
    services: [
      {
        title: "Orthodontic Braces",
        bengaliTitle: "মেটাল ও সিরামিক ব্রেসেস",
        description: "উঁচু-নিচু, ফাঁকা বা আঁকাবাঁকা দাঁতকে স্বাভাবিক লাইনে ফিরিয়ে আনার কার্যকর ট্রিটমেন্ট।",
        price: "৳ ৪০,০০০ থেকে শুরু (সহজ কিস্তি সুবিধা)",
        duration: "মাসিক ফলোআপ",
        popular: true
      },
      {
        title: "Composite Veneers",
        bengaliTitle: "কম্পোজিট ভিনিয়ার্স",
        description: "দাঁতের দাগ ও গর্ত দূর করে একই দিনে ঝকঝকে হাসির মেকওভার।",
        price: "৳ ৩,০০০ / দাঁত",
        duration: "১ সিটিং",
        popular: true
      },
      {
        title: "Advanced Scaling & Air Polishing",
        bengaliTitle: "এয়ার পলিশিং ও স্কেলিং",
        description: "চা-কফির কড়া দাগ মুহূর্তে দূর করার বিশেষ পলিশিং প্রযুক্তি।",
        price: "৳ ১,৫০০ থেকে শুরু",
        duration: "৩০ মিনিট"
      },
      {
        title: "Single Visit Root Canal",
        bengaliTitle: "সিঙ্গেল সিটিং রুট ক্যানাল",
        description: "ব্যস্ত মানুষের জন্য মাত্র ১ দিনেই দাঁতের রুট ক্যানাল কমপ্লিট করার সুবিধা।",
        price: "৳ ৪,০০০ থেকে শুরু",
        duration: "১ ঘন্টা"
      }
    ],
    reviews: [
      {
        name: "মেহজাবিন চৌধুরী",
        area: "মোহাম্মদপুর",
        rating: 5,
        comment: "আমার সামনের উঁচু দাঁতের জন্য ব্রেসেস নিয়েছিলাম। এখন রেজাল্ট অসাধারণ! ডা. তানভীর ভাই অনেক ধৈর্য ধরে কাজ করেন।",
        treatment: "সিরামিক ব্রেসেস",
        date: "১ মাস আগে"
      }
    ]
  },
  {
    id: "healing-diagnostic-dental",
    name: "Healing Diagnostic (Dental Unit)",
    doctor: {
      name: "ডা. ফারহানা আক্তার",
      designation: "BDS, PGT, Senior Consultant Dental Surgeon",
      bmdc: "BMDC Reg: A-81923",
      experience: "৭+ বছরের অভিজ্ঞতা",
      specialty: "ফ্যামিলি ডেন্টিস্ট্রি ও ডায়াগনস্টিক ওরাল কেয়ার"
    },
    area: "Chandrima Model Town, Mohammadpur",
    address: "House 17, Avenue 2, Block C, Chandrima Model Town, Mohammadpur, Dhaka",
    phone: "01784-884882",
    whatsapp: "8801784884882",
    hours: "শনিবার - বৃহস্পতিবার: সকাল ১০:০০ - দুপুর ১:০০ এবং বিকাল ৫:০০ - রাত ৯:০০",
    tagline: "সম্পূর্ণ পরিবারের দাঁতের স্বাস্থ্য সুরক্ষায় ডায়াগনস্টিক ডেন্টাল কেয়ার",
    heroHeadline: "এক ছাদের নিচে ডিজিটাল ডেন্টাল এক্স-রে ও পূর্ণাঙ্গ চিকিৎসা",
    heroSubheadline: "চন্দ্রিমা মডেল টাউনে অত্যাধুনিক আরভিজি ডিজিটাল এক্স-রে সহ দ্রুত ও নিখুঁত ডেন্টাল সেবা।",
    specialHighlight: "ইন-হাউস ডিজিটাল ওরাল এক্স-রে ও পূর্ণাঙ্গ ডায়াগনস্টিক",
    consultationFee: "৪০০ টাকা",
    services: [
      {
        title: "Digital Dental X-Ray (RVG)",
        bengaliTitle: "ডিজিটাল আরভিজি এক্স-রে",
        description: "কম রেডিয়েশনে তাৎক্ষণিক নির্ভুল দাঁতের এক্স-রে রিপোর্ট।",
        price: "৳ ৩০০ / এক্স-রে",
        duration: "৫ মিনিট",
        popular: true
      },
      {
        title: "Tooth Colored Light Cure Filling",
        bengaliTitle: "দাঁতের রঙের লাইট কিউর ফিলিং",
        description: "ক্যাভিটি পরিষ্কার করে ন্যাচারাল জার্মান ন্যানো-কম্পোজিট ফিলিং।",
        price: "৳ ১,২০০ থেকে শুরু",
        duration: "২৫ মিনিট",
        popular: true
      },
      {
        title: "Family Dental Checkup Package",
        bengaliTitle: "ফ্যামিলি ডেন্টাল স্ক্রিনিং প্যাকেজ",
        description: "পরিবারের সবার জন্য ওরাল হাইজিন পরীক্ষা ও ডিসকাউন্টেড স্কেলিং।",
        price: "৳ ২,৫০০ (৪ জন)",
        duration: "২ ঘন্টা"
      }
    ],
    reviews: [
      {
        name: "কবির উদ্দিন",
        area: "চন্দ্রিমা মডেল টাউন",
        rating: 5,
        comment: "ক্লিনিকেই ডিজিটাল এক্স-রে করিয়ে সাথে সাথেই প্রবলেম বুঝিয়ে দিয়েছেন। কোনো দৌড়াদৌড়ি করতে হয়নি। খুব ভালো অভিজ্ঞতা।",
        treatment: "লাইট কিউর ফিলিং",
        date: "২ সপ্তাহ আগে"
      }
    ]
  },
  {
    id: "smiley-dental-implant",
    name: "Smiley Dental & Implant Centre",
    doctor: {
      name: "ডা. এস. কে. রায়",
      designation: "BDS, DDS, Implant & Smile Makeover Specialist",
      bmdc: "BMDC Reg: A-49821",
      experience: "১৫+ বছরের অভিজ্ঞতা",
      specialty: "ডেন্টাল ইমপ্ল্যান্ট ও অল-অন-ফোর (All-on-4) রিহ্যাবিলিটেশন"
    },
    area: "Mirpur 11, Dhaka",
    address: "Mirpur 11 Bus Stand, Mirpur, Dhaka",
    phone: "01711-000000",
    whatsapp: "8801711000000",
    hours: "প্রতিদিন: বিকাল ৪:০০ - রাত ১০:০০",
    tagline: "মিরপুরের বিশ্বস্ত পূর্ণাঙ্গ ডেন্টাল ও ইমপ্ল্যান্ট সেন্টার",
    heroHeadline: "সুন্দর সুস্থ হাসি ফিরিয়ে দিতে আমরা বদ্ধপরিকর",
    heroSubheadline: "মিরপুর ১১ বাস স্ট্যান্ড সংলগ্ন প্রাইম লোকেশনে অভিজ্ঞ ডাক্তারদের মাধ্যমে নির্ভুল চিকিৎসা নিন।",
    specialHighlight: "১৫ বছরের অভিজ্ঞতায় ২০,০০০+ সফল ট্রিটমেন্ট",
    consultationFee: "৫০০ টাকা",
    services: [
      {
        title: "Immediate Load Implants",
        bengaliTitle: "ইমিডিয়েট ডেন্টাল ইমপ্ল্যান্ট",
        description: "দাঁত ফেলার দিনেই নতুন স্থায়ী দাঁত বসানোর সর্বাধুনিক পদ্ধতি।",
        price: "৳ ৩৫,০০০ থেকে শুরু",
        duration: "সিঙ্গেল ডে প্রসিডিউর",
        popular: true
      },
      {
        title: "Laser Gum Treatment",
        bengaliTitle: "লেজার দিয়ে মাড়ির চিকিৎসা",
        description: "কাটাকুটি ও সেলাই ছাড়া মাড়ি থেকে রক্ত পড়া বন্ধ করার লেজার থেরাপি।",
        price: "৳ ২,৫০০ থেকে শুরু",
        duration: "৩০ মিনিট"
      }
    ],
    reviews: [
      {
        name: "নাজমুল হাসান",
        area: "মিরপুর ১২",
        rating: 5,
        comment: "মিরপুরে এত সুন্দর আধুনিক ডেন্টাল ক্লিনিক আছে জানা ছিল না। সেবা এবং ব্যবহারের মান ১০ এ ১০।",
        treatment: "রুট ক্যানাল ও ক্যাপ",
        date: "৩ দিন আগে"
      }
    ]
  },
  {
    id: "the-dental-specialists",
    name: "The Dental Specialists (Prof. Nasir Uddin)",
    doctor: {
      name: "প্রফেসর ডা. নাসির উদ্দিন",
      designation: "BDS, FCPS (Oral & Maxillofacial Surgery), Senior Professor",
      bmdc: "BMDC Reg: A-21980",
      experience: "২৫+ বছরের সুদীর্ঘ অভিজ্ঞতা",
      specialty: "ওরাল ও ম্যাক্সিলোফ্যাসিয়াল সার্জারি এবং জটিল মুখের রোগ বিশেষজ্ঞ"
    },
    area: "Lalmatia / Satmasjid Road, Dhaka",
    address: "House 3A, Satmasjid Road (Opposite Bank Asia), Lalmatia, Dhaka",
    phone: "01819-208670",
    whatsapp: "8801819208670",
    hours: "রবি - বুধ: সন্ধ্যা ৬:০০ - রাত ৯:৩০ (সিরিয়াল বাধ্যতামূলক)",
    tagline: "দেশের শীর্ষস্থানীয় ম্যাক্সিলোফ্যাসিয়াল সার্জনদের বিশেষায়িত ডেন্টাল কেয়ার",
    heroHeadline: "জটিল মুখ ও দাঁতের রোগে দেশের শীর্ষ অধ্যাপকের চিকিৎসা সেবা",
    heroSubheadline: "লালমাটিয়া সাতমসজিদ রোডে অবস্থিত বিশেষায়িত কনসালটেশন সেন্টার ও সার্জারি ইউনিট।",
    specialHighlight: "এফসিপিএস ও প্রফেসর পদমর্যাদার বিশেষজ্ঞ কনসালটেশন",
    consultationFee: "১,০০০ টাকা",
    services: [
      {
        title: "Maxillofacial Surgery",
        bengaliTitle: "ম্যাক্সিলোফ্যাসিয়াল ও জ সুধারা সার্জারি",
        description: "চোয়াল ভাঙা, মুখের টিউমার ও জটিল ওরাল প্যাথলজির নিরাপদ সার্জিক্যাল চিকিৎসা।",
        price: "কেস ভিত্তিক",
        duration: "বিশেষায়িত কনসালটেশন",
        popular: true
      },
      {
        title: "Impacted Tooth Excision",
        bengaliTitle: "জটিল ইমপ্যাক্টেড দাঁত অপসারণ",
        description: "ম্যাক্সিলোফ্যাসিয়াল সার্জনের হাতে সম্পূর্ণ নার্ভ-সেফ ও ব্যথাহীন এক্সট্রাকশন।",
        price: "৳ ৬,০০০ থেকে শুরু",
        duration: "৪৫ মিনিট",
        popular: true
      }
    ],
    reviews: [
      {
        name: "ড. শফিকুর রহমান",
        area: "ধানমন্ডি",
        rating: 5,
        comment: "প্রফেসর নাসির উদ্দিন স্যারের মতো সার্জন পুরো দেশে খুব কম আছেন। আমার চোয়ালের জটিল সমস্যা মাত্র একটি ভিজিটেই সঠিকভাবে চিহ্নিত করেছেন।",
        treatment: "ম্যাক্সিলোফ্যাসিয়াল কনসালটেশন",
        date: "১ মাস আগে"
      }
    ]
  },
  {
    id: "uk-dental-clinic",
    name: "UK Dental Clinic (Uttara)",
    doctor: {
      name: "ডা. তারিক হাসান",
      designation: "BDS, MSc (UK), Certified in Restorative Dentistry (London)",
      bmdc: "BMDC Reg: A-55119",
      experience: "১৪+ বছরের যুক্তরাজ্য ও বাংলাদেশের অভিজ্ঞতা",
      specialty: "কসমেটিক ডেন্টিস্ট্রি, ভিনিয়ার ও ব্রিটিশ স্ট্যান্ডার্ড ওরাল হেলথ"
    },
    area: "Sector 13, Uttara, Dhaka",
    address: "28 Gareeb-e-Nawaz Avenue, Sector 13, Uttara, Dhaka - 1230",
    phone: "01944-002002",
    whatsapp: "8801944002002",
    hours: "প্রতিদিন: সকাল ১০:৩০ - রাত ৮:৩০ (শুক্রবার অ্যাপয়েন্টমেন্ট)",
    tagline: "উত্তরায় ব্রিটিশ স্ট্যান্ডার্ড ডেন্টাল ট্রিটমেন্ট ও প্রিমিয়াম পেশেন্ট কেয়ার",
    heroHeadline: "ইউকে স্ট্যান্ডার্ড হাইজিন ও প্রিমিয়াম ডেন্টাল অভিজ্ঞতা",
    heroSubheadline: "গরীব-ই-নেওয়াজ এভিনিউতে আধুনিক ব্রিটিশ ইকুইপমেন্ট ও উন্নত উপকরণে প্রস্তুত বিশেষায়িত ক্লিনিক।",
    specialHighlight: "আন্তর্জাতিক প্রবাসীদের জন্য বিশেষ ফাস্ট-ট্র্যাক ট্রিটমেন্ট",
    consultationFee: "৮০০ টাকা",
    services: [
      {
        title: "Porcelain Laminate Veneers",
        bengaliTitle: "হলিউড স্মাইল পোরসেলিন ভিনিয়ার",
        description: "যুক্তরাজ্যের স্ট্যান্ডার্ড ল্যাব প্রযুক্তিতে তৈরি আল্ট্রা-থিন স্থায়ী ভিনিয়ার্স।",
        price: "৳ ১২,০০০ / ইউনিট",
        duration: "২ সেশন",
        popular: true
      },
      {
        title: "Fast-Track Full Mouth Rehab",
        bengaliTitle: "প্রবাসী ফাস্ট-ট্র্যাক ফুল মাউথ রিহ্যাব",
        description: "ছুটিতে আসা প্রবাসী ভাই-বোনদের জন্য স্বল্প সময়ে সম্পূর্ণ দাঁতের পূর্ণাঙ্গ ট্রিটমেন্ট।",
        price: "প্যাকেজ ভিত্তিক",
        duration: "৭-১০ দিন",
        popular: true
      }
    ],
    reviews: [
      {
        name: "রাশেদুল বারী",
        area: "লন্ডন প্রবাসী / উত্তরা",
        rating: 5,
        comment: "ছুটিতে দেশে এসে পুরো দাঁতের কাজ করিয়েছি ডা. তারিকের কাছে। ইউকে স্ট্যান্ডার্ডের মতোই স্টেরিলাইজেশন ও প্রফেশনালিজম পেয়েছি।",
        treatment: "ফুল মাউথ রিহ্যাব",
        date: "২ সপ্তাহ আগে"
      }
    ]
  },
  {
    id: "tech-dental-care",
    name: "Tech Dental Care (Mirpur)",
    doctor: {
      name: "ডা. কে. এম. হোসেন",
      designation: "BDS, PGT (Oral Surgery), Advanced Digital Dentistry Specialist",
      bmdc: "BMDC Reg: A-67432",
      experience: "৯+ বছরের অভিজ্ঞতা",
      specialty: "কম্পিউটার গাইডেড ডেন্টিস্ট্রি ও পেন-ফ্রি লেজার ট্রিটমেন্ট"
    },
    area: "Begum Rokeya Sarani, Mirpur, Dhaka",
    address: "Near Metro Rail Pillar 318, Begum Rokeya Sarani, Mirpur, Dhaka",
    phone: "01700-000000",
    whatsapp: "8801700000000",
    hours: "শনিবার - বৃহস্পতিবার: বিকাল ৩:৩০ - রাত ৯:৩০",
    tagline: "মেট্রোরেল স্টেশনের পাশেই দ্রুত ও প্রযুক্তিনির্ভর আধুনিক দাঁতের চিকিৎসা",
    heroHeadline: "মেট্রোরেলের পাশেই আধুনিক প্রযুক্তিভিত্তিক ডেন্টাল কেয়ার",
    heroSubheadline: "মিরপুর বেগম রোকেয়া স্মরণীতে যানজটমুক্ত যোগাযোগ সুবিধায় ডিজিটাল ডেন্টাল সলিউশন।",
    specialHighlight: "মেট্রোরেল পিলার ৩১৮ সংলগ্ন সহজ যোগাযোগ",
    consultationFee: "৫০০ টাকা",
    services: [
      {
        title: "Rotary Endodontics",
        bengaliTitle: "হাই-টেক রোটারি রুট ক্যানাল",
        description: "লেটেস্ট এন্ডোমোটর ও এপেক্স লোকেটর দিয়ে শতভাগ নিখুঁত রুট ক্যানাল।",
        price: "৳ ৩,৫০০ থেকে শুরু",
        duration: "৪০ মিনিট",
        popular: true
      },
      {
        title: "Laser Depigmentation",
        bengaliTitle: "কালো মাড়ির লেজার পিঙ্ক ট্রিটমেন্ট",
        description: "কালো বা কালচে মাড়িকে স্বাস্থ্যকর গোলাপি রঙে ফিরিয়ে আনার লেজার পদ্ধতি।",
        price: "৳ ৫,০০০ থেকে শুরু",
        duration: "৪৫ মিনিট"
      }
    ],
    reviews: [
      {
        name: "শামীম রেজা",
        area: "শেওড়াপাড়া",
        rating: 5,
        comment: "মেট্রোরেলে করে সরাসরি এসে নেমে ট্রিটমেন্ট নিতে পেরেছি। চমৎকার লোকেশন এবং খুব ভালো সার্ভিস।",
        treatment: "রোটারি রুট ক্যানাল",
        date: "১ সপ্তাহ আগে"
      }
    ]
  },
  {
    id: "smileon-dental-implant",
    name: "SmileOn Dental Implant & Maxillofacial",
    doctor: {
      name: "ডা. আহসান হাবীব",
      designation: "BDS, PGT, Fellow - ICOI (USA), Consultant Maxillofacial Surgery",
      bmdc: "BMDC Reg: A-58901",
      experience: "১৪+ বছরের অভিজ্ঞতা",
      specialty: "হাই-এন্ড ডেন্টাল ইমপ্ল্যান্ট ও ম্যাক্সিলোফ্যাসিয়াল রিকনস্ট্রাকশন"
    },
    area: "Niketon, Gulshan-1, Dhaka",
    address: "Niketon, Gulshan-1, Dhaka",
    phone: "01800-000000",
    whatsapp: "8801800000000",
    hours: "শনিবার - বৃহস্পতিবার: সকাল ১১:০০ - রাত ৮:০০",
    tagline: "গুলশান নিকেতনে প্রিমিয়াম লাক্সারি ডেন্টাল ও ইমপ্ল্যান্ট এক্সপেরিয়েন্স",
    heroHeadline: "আন্তর্জাতিক মানের প্রিমিয়াম হাসির রূপকার",
    heroSubheadline: "গুলশান-১ নিকেতনে ভিআইপি অ্যাম্বিয়েন্স ও সর্বাধুনিক প্রযুক্তিতে দাঁতের বিশ্বস্ত সমাধান।",
    specialHighlight: "গুলশান-১ নিকেতনে প্রিমিয়াম ও ভিআইপি সেবা",
    consultationFee: "১,২০০ টাকা",
    services: [
      {
        title: "Swiss Nobel Biocare Implants",
        bengaliTitle: "সুইস ও জার্মান প্রিমিয়াম ইমপ্ল্যান্টস",
        description: "বিশ্বের সেরা ব্র্যান্ডের নোবেল বায়োকেয়ার ও স্ট্রমান ডেন্টাল ইমপ্ল্যান্ট।",
        price: "৳ ৪৫,০০০ থেকে শুরু",
        duration: "লাইফটাইম ওয়ারেন্টি",
        popular: true
      },
      {
        title: "Full Arch Rehabilitation",
        bengaliTitle: "ফুল আর্চ টিথ-ইন-এ-ডে",
        description: "দাঁতহীন মুখের জন্য একদিনেই স্থায়ী সম্পূর্ণ দাঁতের সারি প্রতিস্থাপন।",
        price: "প্যাকেজ ভিত্তিক",
        duration: "কমপ্লিট আর্চ",
        popular: true
      }
    ],
    reviews: [
      {
        name: "মাহমুদুল হাসান",
        area: "গুলশান ২",
        rating: 5,
        comment: "লাক্সারি লাউঞ্জ এবং ডাক্তারের অমায়িক আচরণ। ঢাকায় বসে বিদেশের মতো চিকিৎসা সেবা পেয়েছি।",
        treatment: "সুইস ইমপ্ল্যান্ট",
        date: "৩ সপ্তাহ আগে"
      }
    ]
  }
];

export function getClinicById(id: string): DentalClinic {
  const clinic = DENTAL_CLINICS.find((c) => c.id === id);
  return clinic || DENTAL_CLINICS[0];
}

