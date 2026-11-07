export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  readTime: string;
  content: {
    intro: string;
    sections: {
      heading: string;
      body: string;
      bulletPoints?: string[];
    }[];
    quote?: string;
    conclusion: string;
  };
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "oral-health-benefits-chewing-gum",
    title: "The Oral Health Benefits Of Sugar-Free Chewing Gum",
    excerpt:
      "Discover how saliva stimulation and xylitol can protect enamel, neutralize acid attacks, and freshen breath between daily meals.",
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1200&q=85",
    date: "Nov 02, 2026",
    category: "Oral Health",
    author: {
      name: "Dr. Michael Thompson",
      role: "Chief Implantologist & Dental Surgeon",
      avatar: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=300&q=80",
    },
    readTime: "4 min read",
    content: {
      intro:
        "While brushing twice a day and daily flossing remain the foundation of pristine dental hygiene, sugar-free chewing gum has gained significant endorsement from dental associations globally. Scientific clinical studies show that chewing gum for 20 minutes following meals can substantially lower the risk of tooth decay.",
      sections: [
        {
          heading: "1. Stimulating Beneficial Saliva Flow",
          body:
            "The physical act of chewing acts as a natural trigger for your salivary glands. Saliva is your mouth's natural defense mechanism, containing essential minerals like calcium and phosphate that constantly bathe your enamel.",
          bulletPoints: [
            "Neutralizes harmful plaque acids produced by oral bacteria",
            "Washes away microscopic food particles stuck between teeth",
            "Strengthens tooth enamel through continuous remineralization",
            "Alleviates dry mouth (xerostomia) which is a major precursor to cavities",
          ],
        },
        {
          heading: "2. The Power of Xylitol Sweetener",
          body:
            "Not all chewing gums are equal. Gums sweetened with 100% natural xylitol provide active anti-bacterial benefits. Unlike regular sugar or fructose, Streptococcus mutans (the primary cavity-causing bacteria) cannot digest xylitol. Over time, this starves harmful bacteria and inhibits plaque buildup.",
        },
        {
          heading: "3. Best Practices for Optimal Oral Wellness",
          body:
            "To maximize clinical benefits without straining your temporomandibular joint (TMJ), chew sugar-free gum for roughly 15 to 20 minutes directly after snacking or meals. It should never replace your toothbrush, but rather serve as a powerful supplementary tool when you are on the go.",
        },
      ],
      quote:
        "Chewing xylitol-based gum is one of the easiest habits to protect enamel throughout your workday when you cannot brush immediately after eating.",
      conclusion:
        "Adding sugar-free gum to your daily routine gives your smile an extra shield against enamel erosion and bad breath. For personalized guidance or an in-depth oral health assessment, schedule an appointment with our clinical specialists.",
    },
  },
  {
    slug: "first-visit-dental-clinic",
    title: "What to Expect During Your First Visit to Our Modern Clinic",
    excerpt:
      "A step-by-step walkthrough of our 3D scanning, pain-free digital examinations, and customized preventative treatment planning.",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=85",
    date: "Oct 28, 2026",
    category: "Patient Guide",
    author: {
      name: "Dr. Sarah Kim",
      role: "Orthodontist Specialist",
      avatar: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=300&q=80",
    },
    readTime: "5 min read",
    content: {
      intro:
        "Stepping into a dental clinic should never evoke anxiety or uncertainty. At Dentique, we have redesigned the entire patient journey around complete transparency, luxurious comfort, and cutting-edge non-invasive diagnostic technology.",
      sections: [
        {
          heading: "1. Seamless Warm Welcome & Digital Onboarding",
          body:
            "From the moment you walk through our doors, our patient concierge handles all intake details digitally. You will relax in our serene lounge with refreshing herbal beverages while we review your medical history and specific oral health goals.",
        },
        {
          heading: "2. Ultra-Low Radiation 3D Digital Imaging",
          body:
            "Instead of uncomfortable bitewing films that trigger gag reflexes, we employ state-of-the-art intraoral digital scanners and panoramic 3D CBCT imaging. In under 90 seconds, a full high-definition 3D model of your teeth and jaw structure is rendered on an overhead monitor.",
          bulletPoints: [
            "Immediate visual clarity showing hidden interproximal cavities",
            "Evaluation of bone density and gumline architecture",
            "Zero uncomfortable impression putty or trays",
            "90% reduction in radiation exposure compared to legacy X-rays",
          ],
        },
        {
          heading: "3. Interactive Diagnosis & Co-Discovery",
          body:
            "We believe in collaborative healthcare. Your clinician will walk you through your high-resolution digital scans side by side, explaining every finding in plain language without unnecessary medical jargon. You receive a transparent breakdown of all recommendations and timelines.",
        },
      ],
      quote:
        "When patients can clearly visualize their oral anatomy in 3D, fear dissolves into empowerment and genuine partnership.",
      conclusion:
        "Your first visit sets the benchmark for lifelong dental wellness. Experience dentistry reimagined with gentle hands, pristine sterilization, and compassionate care.",
    },
  },
  {
    slug: "simple-habits-healthy-gums",
    title: "5 Simple Habits to Keep Your Gums Healthy and Disease-Free",
    excerpt:
      "Prevent gingivitis and periodontal problems with these dentist-approved brushing techniques, flossing tips, and nutritional insights.",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1200&q=85",
    date: "Oct 20, 2026",
    category: "Dental Tips",
    author: {
      name: "Dr. David Miller",
      role: "Cosmetic Dentist & Smile Artist",
      avatar: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=300&q=80",
    },
    readTime: "3 min read",
    content: {
      intro:
        "Healthy pink gums are the firm foundation supporting every brilliant smile. Yet, over 47% of adults suffer from mild to moderate gum disease without even realizing it, as early gingivitis is frequently painless until advanced damage occurs.",
      sections: [
        {
          heading: "1. Master the 45-Degree Brushing Angle (Modified Bass)",
          body:
            "Most people scrub vigorously back and forth, which can actually cause gum recession. Instead, tilt your soft-bristled brush at a 45-degree angle toward the gumline and use gentle circular vibrating strokes.",
        },
        {
          heading: "2. Daily Interdental Cleaning Is Non-Negotiable",
          body:
            "Brushing alone only cleans 60% of your tooth surfaces. The remaining 40% lies directly between teeth where bacterial plaque thrives. Whether you choose traditional woven dental floss, interdental brushes, or water flossers, cleaning between teeth once daily prevents swollen, bleeding gums.",
          bulletPoints: [
            "Slide floss gently along the side of each tooth in a 'C' shape",
            "Avoid snapping floss down onto the delicate papilla",
            "Pair with an alcohol-free antimicrobial fluoridated mouthwash",
          ],
        },
        {
          heading: "3. Vitamin C & Hydration for Tissue Integrity",
          body:
            "Your periodontal tissues require constant collagen synthesis to remain resilient. A balanced diet rich in leafy greens, bell peppers, citrus, and adequate hydration keeps saliva flowing and strengthens capillary walls against bacterial inflammation.",
        },
      ],
      quote:
        "Bleeding gums when brushing are not normal; they are your body's early smoke alarm calling for gentle care and professional evaluation.",
      conclusion:
        "Consistency is key. Practicing these 5 daily habits alongside regular 6-month ultrasonic scalings ensures your gums remain strong, healthy, and supportive for a lifetime of confident smiling.",
    },
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getAllPosts(): BlogPost[] {
  return BLOG_POSTS;
}

