// data/coursesData.ts

export interface Plan {
  days: number;
  price: number;
  originalPrice: number;
  discount: number;
  classes: number;
  sessionTime: string;
  popular: boolean;
  features: string[];
}

export interface Course {
  id: number;
  name: string;
  title: string;
  description: string;
  desc: string;
  level: string;
  duration: string;
  slug: string;
  image: string;
  longDescription?: string;
  fullDesc?: string;
  whatYouLearn?: string[];
  requirements?: string[];
  keywords?: string[];
  plans: Plan[];
  customClassNote?: string;
  familyDiscount?: boolean;
}

export const coursesData: Course[] = [
  {
    id: 1,
    name: "Noorani Qaida",
    title: "Noorani Qaida",
    description: "Master Arabic alphabet & basic Quran reading",
    desc: "Learn the basics of Quran reading with proper pronunciation.",
    level: "Beginner",
    duration: "3-6 Months",
    slug: "noorani-qaida",
    image: "/qaida1.jpeg",
    longDescription: "Noorani Qaida is the first step towards learning Quran reading. This course is designed for beginners to master Arabic alphabet, basic pronunciation, and reading skills with proper Tajweed rules.",
    fullDesc: `This course focuses on:
- Alphabet recognition
- Correct pronunciation of letters
- Short words and simple sentences
- Beginner-friendly exercises`,
    whatYouLearn: [
      "Arabic alphabet recognition and pronunciation",
      "Basic Tajweed rules",
      "Short Surahs reading practice",
      "Quranic words formation",
      "Proper articulation points"
    ],
    requirements: [
      "No prior knowledge required",
      "Basic understanding of English/Arabic",
      "Dedication to practice daily"
    ],
    keywords: ["Noorani Qaida", "Quran basics", "Letters", "Pronunciation"],
    customClassNote: "Customize your class schedule - choose any days per week that work for you",
    familyDiscount: true,
    plans: [
      {
        days: 2,
        price: 45,
        originalPrice: 45,
        discount: 0,
        classes: 8,
        sessionTime: "30 minutes",
        popular: false,
        features: [
          "Arabic Alphabet Mastery",
          "Basic Pronunciation", 
          "Short Surahs Practice",
          "Weekly Progress Reports"
        ]
      },
      {
        days: 5,
        price: 99,
        originalPrice: 112.50,
        discount: 12,
        classes: 20,
        sessionTime: "30 minutes",
        popular: true,
        features: [
          "Rapid Progress Track",
          "Advanced Pronunciation",
          "Quranic Foundation",
          "Priority Support"
        ]
      },
      {
        days: 3,
        price: 65,
        originalPrice: 67.50,
        discount: 4,
        classes: 12,
        sessionTime: "30 minutes",
        popular: false,
        features: [
          "Fluent Letter Recognition",
          "Tajweed Basics",
          "Daily Practice Sessions",
          "Certified Teacher"
        ]
      }
    ]
  },
  {
    id: 2,
    name: "Nazira with Tajweed",
    title: "Nazira with Tajweed",
    description: "Perfect your Quran recitation with Tajweed rules",
    desc: "Recite the Quran fluently while applying Tajweed rules.",
    level: "Intermediate",
    duration: "6-9 Months",
    slug: "nazira-with-tajweed",
    image: "/quranonmobile.jpeg",
    longDescription: "Learn to read Quran fluently with proper Tajweed rules. This course focuses on practical application of Tajweed while reading Quran.",
    fullDesc: `In this course, students will learn:
- Basic Quran reading (Nazra)
- Proper pronunciation with Tajweed rules
- Daily recitation practice
- Step-by-step guidance for beginners`,
    whatYouLearn: [
      "Advanced Tajweed rules application",
      "Fluency in Quran reading",
      "Common mistakes correction",
      "Quranic phrases practice"
    ],
    requirements: [
      "Basic knowledge of Arabic reading",
      "Completion of Noorani Qaida or equivalent"
    ],
    keywords: ["Quran", "Nazira", "Tajweed", "Recitation"],
    customClassNote: "Customize your class schedule - choose any days per week that work for you",
    familyDiscount: true,
    plans: [
      {
        days: 2,
        price: 55,
        originalPrice: 55,
        discount: 0,
        classes: 8,
        sessionTime: "45 minutes",
        popular: false,
        features: [
          "Tajweed Rules Application",
          "Fluency Development",
          "Quranic Phrase Practice"
        ]
      },
      {
        days: 5,
        price: 118,
        originalPrice: 134,
        discount: 12,
        classes: 20,
        sessionTime: "45 minutes",
        popular: true,
        features: [
          "Complete Tajweed Mastery",
          "Ijazah Preparation",
          "Expert Teacher"
        ]
      },
      {
        days: 3,
        price: 78,
        originalPrice: 81,
        discount: 4,
        classes: 12,
        sessionTime: "45 minutes",
        popular: false,
        features: [
          "Advanced Tajweed",
          "Recitation Practice",
          "Error Correction"
        ]
      }
    ]
  },
  {
    id: 3,
    name: "Hifz Program",
    title: "Hifz with Tajweed",
    description: "Memorize the Holy Quran with proper revision system",
    desc: "Memorize the Holy Quran with perfect tajweed guidance.",
    level: "Advanced",
    duration: "2-3 Years",
    slug: "hifz-program",
    image: "/hifz.jpeg",
    longDescription: "Comprehensive Quran memorization program with proper revision system and Tajweed rules. Designed for students who want to become Hafiz/Hafiza.",
    whatYouLearn: [
      "Quran memorization techniques",
      "Proper revision system",
      "Tajweed rules application",
      "Memorization speed improvement"
    ],
    requirements: [
      "Completion of Nazira course",
      "Good reading fluency",
      "Strong dedication and time commitment"
    ],
    customClassNote: "Customize your class schedule - choose any days per week that work for you",
    familyDiscount: true,
    plans: [
      {
        days: 2,
        price: 75,
        originalPrice: 75,
        discount: 0,
        classes: 8,
        sessionTime: "60 minutes",
        popular: false,
        features: [
          "Memorization Techniques",
          "Daily New Lesson",
          "Revision System"
        ]
      },
      {
        days: 5,
        price: 155,
        originalPrice: 176,
        discount: 12,
        classes: 20,
        sessionTime: "60 minutes",
        popular: true,
        features: [
          "Rapid Memorization",
          "Complete Revision System",
          "Ijazah Certification"
        ]
      },
      {
        days: 3,
        price: 105,
        originalPrice: 109,
        discount: 4,
        classes: 12,
        sessionTime: "60 minutes",
        popular: false,
        features: [
          "Faster Memorization",
          "Detailed Revision",
          "Progress Tracking"
        ]
      }
    ]
  },
  {
    id: 4,
    name: "Complete Tajweed",
    title: "Complete Tajweed Course",
    description: "Master all Tajweed rules with practical implementation",
    desc: "Master the rules of tajweed for accurate Quran recitation.",
    level: "Intermediate",
    duration: "6-12 Months",
    slug: "complete-tajweed",
    image: "/tajweed.jpeg",
    longDescription: "Master all Tajweed rules with practical implementation in Quran recitation. Perfect for those who want to perfect their Quran recitation.",
    whatYouLearn: [
      "Theoretical Tajweed rules",
      "Practical application",
      "Common mistakes identification",
      "Advanced pronunciation"
    ],
    requirements: [
      "Basic Quran reading skills",
      "Completion of Noorani Qaida"
    ],
    customClassNote: "Customize your class schedule - choose any days per week that work for you",
    familyDiscount: true,
    plans: [
      {
        days: 2,
        price: 60,
        originalPrice: 60,
        discount: 0,
        classes: 8,
        sessionTime: "45 minutes",
        popular: false,
        features: [
          "Theoretical Rules",
          "Practical Application",
          "Common Mistakes"
        ]
      },
      {
        days: 5,
        price: 125,
        originalPrice: 142,
        discount: 12,
        classes: 20,
        sessionTime: "45 minutes",
        popular: true,
        features: [
          "Complete Mastery",
          "Certification Exam",
          "Expert Guidance"
        ]
      },
      {
        days: 3,
        price: 85,
        originalPrice: 88,
        discount: 4,
        classes: 12,
        sessionTime: "45 minutes",
        popular: false,
        features: [
          "Advanced Rules",
          "Quranic Examples",
          "Practice Sessions"
        ]
      }
    ]
  },
  {
    id: 5,
    name: "Qiraat & Lahjat",
    title: "Qiraat & Lahjat",
    description: "Learn different Quran recitation styles",
    desc: "Learn different recitations and proper Arabic dialects.",
    level: "Advanced",
    duration: "12-18 Months",
    slug: "qiraat-lahjat",
    image: "/hollyquran.webp",
    longDescription: "Learn different styles of Quran recitation (Qiraat) and dialects. Advanced course for those interested in mastering various recitation methods.",
    whatYouLearn: [
      "Different Qiraat styles",
      "Dialect variations",
      "Historical background",
      "Practical recitation"
    ],
    requirements: [
      "Strong Tajweed knowledge",
      "Good memorization of Quran",
      "Advanced reading skills"
    ],
    customClassNote: "Customize your class schedule - choose any days per week that work for you",
    familyDiscount: false,
    plans: [
      {
        days: 2,
        price: 70,
        originalPrice: 70,
        discount: 0,
        classes: 8,
        sessionTime: "45 minutes",
        popular: false,
        features: [
          "Recitation Styles",
          "Dialect Variations",
          "Practical Sessions"
        ]
      },
      {
        days: 5,
        price: 145,
        originalPrice: 165,
        discount: 12,
        classes: 20,
        sessionTime: "45 minutes",
        popular: true,
        features: [
          "Complete Qiraat Course",
          "Ijazah Preparation",
          "Master Teacher"
        ]
      },
      {
        days: 3,
        price: 98,
        originalPrice: 102,
        discount: 4,
        classes: 12,
        sessionTime: "45 minutes",
        popular: false,
        features: [
          "Multiple Qiraat",
          "Style Comparison",
          "Expert Guidance"
        ]
      }
    ]
  },
  {
    id: 6,
    name: "Darse Nizami",
    title: "Darse Nizami Books",
    description: "Comprehensive Islamic scholarship program",
    desc: "Study classical Islamic texts with proper guidance.",
    level: "Advanced",
    duration: "8 Years",
    slug: "darse-nizami",
    image: "/darsenizami.jpeg",
    longDescription: "Comprehensive Islamic scholarship program covering all major Islamic sciences. Designed for those who want to become Islamic scholars.",
    whatYouLearn: [
      "Islamic jurisprudence (Fiqh)",
      "Quranic sciences",
      "Hadith sciences",
      "Islamic history",
      "Arabic language and literature"
    ],
    requirements: [
      "Strong dedication",
      "Good memory skills",
      "Time commitment",
      "Basic Islamic knowledge"
    ],
    customClassNote: "Customize your class schedule - choose any days per week that work for you",
    familyDiscount: true,
    plans: [
      {
        days: 2,
        price: 80,
        originalPrice: 80,
        discount: 0,
        classes: 8,
        sessionTime: "60 minutes",
        popular: false,
        features: [
          "Islamic Sciences",
          "Classical Texts",
          "Scholarly Approach"
        ]
      },
      {
        days: 5,
        price: 165,
        originalPrice: 187,
        discount: 12,
        classes: 20,
        sessionTime: "60 minutes",
        popular: true,
        features: [
          "Complete Curriculum",
          "Scholar Mentorship",
          "Certification"
        ]
      },
      {
        days: 3,
        price: 112,
        originalPrice: 116,
        discount: 4,
        classes: 12,
        sessionTime: "60 minutes",
        popular: false,
        features: [
          "Advanced Studies",
          "Text Analysis",
          "Research Methods"
        ]
      }
    ]
  },
  {
    id: 7,
    name: "Islamic Lectures",
    title: "Islamic Lectures & Guidance",
    description: "Islamic knowledge and guidance sessions",
    desc: "Detailed lectures on important Islamic topics and issues.",
    level: "General",
    duration: "Flexible (3 month to 1 Year or choose your custom program)",
    slug: "islamic-lectures",
    image: "/Islamiclaw.jpeg",
    longDescription: "Islamic knowledge and guidance sessions covering various topics of Islamic teachings, beliefs, and practices. Suitable for all levels.",
    whatYouLearn: [
      "Islamic beliefs (Aqeedah)",
      "Islamic practices",
      "Moral and ethical teachings",
      "Contemporary issues"
    ],
    requirements: [
      "Interest in Islamic knowledge",
      "Open mind and willingness to learn"
    ],
    customClassNote: "Customize your class schedule - choose any days per week that work for you",
    familyDiscount: true,
    plans: [
      {
        days: 2,
        price: 40,
        originalPrice: 40,
        discount: 0,
        classes: 8,
        sessionTime: "45 minutes",
        popular: false,
        features: [
          "Islamic Topics",
          "Q&A Sessions",
          "Guidance"
        ]
      },
      {
        days: 5,
        price: 85,
        originalPrice: 96,
        discount: 12,
        classes: 20,
        sessionTime: "45 minutes",
        popular: true,
        features: [
          "Comprehensive Program",
          "Expert Scholar",
          "Lifetime Access"
        ]
      },
      {
        days: 3,
        price: 56,
        originalPrice: 58,
        discount: 4,
        classes: 12,
        sessionTime: "45 minutes",
        popular: false,
        features: [
          "Detailed Discussions",
          "Case Studies",
          "Practical Advice"
        ]
      }
    ]
  },
  {
    id: 8,
    name: "Fiqh & Islamic Law",
    title: "Fiqh & Islamic Rulings",
    description: "In-depth study of Islamic jurisprudence",
    desc: "Learn solutions to contemporary and traditional issues.",
    level: "Advanced",
    duration: "1 Year or choose custom",
    slug: "fiqh-islamic-law",
    image: "/islamic.jpeg",
    longDescription: "In-depth study of Islamic jurisprudence covering major schools of thought and contemporary issues in Islamic law.",
    whatYouLearn: [
      "Islamic legal theory",
      "Major schools of jurisprudence",
      "Contemporary fiqh issues",
      "Case studies"
    ],
    requirements: [
      "Basic Islamic knowledge",
      "Good understanding of Arabic recommended"
    ],
    customClassNote: "Customize your class schedule - choose any days per week that work for you",
    familyDiscount: false,
    plans: [
      {
        days: 2,
        price: 65,
        originalPrice: 65,
        discount: 0,
        classes: 8,
        sessionTime: "45 minutes",
        popular: false,
        features: [
          "Basic Fiqh Principles",
          "Case Studies",
          "Practical Rulings"
        ]
      },
      {
        days: 5,
        price: 135,
        originalPrice: 153,
        discount: 12,
        classes: 20,
        sessionTime: "60 minutes",
        popular: true,
        features: [
          "Complete Fiqh Course",
          "Expert Jurist",
          "Certification"
        ]
      },
      {
        days: 3,
        price: 92,
        originalPrice: 95,
        discount: 4,
        classes: 12,
        sessionTime: "60 minutes",
        popular: false,
        features: [
          "Advanced Fiqh",
          "Comparative Study",
          "Research"
        ]
      }
    ]
  }
];

// Helper function to get course by slug
export const getCourseBySlug = (slug: string): Course | undefined => {
  return coursesData.find(course => course.slug === slug);
};

// Helper function to get all courses
export const getAllCourses = (): Course[] => {
  return coursesData;
};