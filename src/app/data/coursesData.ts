// ✅ TypeScript Interfaces (define once)
export interface PlanType {
  days: number;
  price: string;
  discount: string;
  popular: boolean;
}

export interface CourseType {
  id: number;
  title: string;
  desc: string;
  image: string;
  slug: string;
  fullDesc?: string;
  keywords?: string[];
  plans?: PlanType[];
}

// ✅ Complete Courses Data
export const coursesData: CourseType[] = [
  {
    id: 1,
    title: "Noorani Qaida",
    desc: "Learn the basics of Quran reading with proper pronunciation.",
    image: "/qaida1.jpeg",
    slug: "noorani-qaida",
    fullDesc: `This course focuses on:
- Alphabet recognition
- Correct pronunciation of letters
- Short words and simple sentences
- Beginner-friendly exercises`,
    keywords: ["Noorani Qaida", "Quran basics", "Letters", "Pronunciation"],
    plans: [
      { days: 2, price: "$40 / month", discount: "10% off if 3 months paid together", popular: false },
      { days: 3, price: "$55 / month", discount: "15% off if 3 months paid together", popular: true },
      { days: 5, price: "$85 / month", discount: "20% off if 3 months paid together", popular: false },
    ],
  },
  {
    id: 2,
    title: "Nazira with Tajweed",
    desc: "Recite the Quran fluently while applying Tajweed rules.",
    image: "/quranonmobile.jpeg",
    slug: "nazira-tajweed",
    fullDesc: `In this course, students will learn:
- Basic Quran reading (Nazra)
- Proper pronunciation with Tajweed rules
- Daily recitation practice
- Step-by-step guidance for beginners`,
    keywords: ["Quran", "Nazira", "Tajweed", "Recitation"],
    plans: [
      { days: 2, price: "$45 / month", discount: "10% off if 3 months paid together", popular: false },
      { days: 3, price: "$60 / month", discount: "15% off if 3 months paid together", popular: true },
      { days: 5, price: "$90 / month", discount: "20% off if 3 months paid together", popular: false },
    ],
  },
  {
    id: 3,
    title: "Hifz with Tajweed",
    desc: "Memorize the Holy Quran with perfect tajweed guidance.",
    image: "/hifz.jpeg",
    slug: "hifz-tajweed",
    plans: [
      { days: 2, price: "$50 / month", discount: "10% off if 3 months paid together", popular: false },
      { days: 3, price: "$70 / month", discount: "15% off if 3 months paid together", popular: true },
      { days: 5, price: "$100 / month", discount: "20% off if 3 months paid together", popular: false },
    ],
  },
  {
    id: 4,
    title: "Complete Tajweed Course",
    desc: "Master the rules of tajweed for accurate Quran recitation.",
    image: "/tajweed.jpeg",
    slug: "complete-tajweed",
    plans: [
      { days: 2, price: "$35 / month", discount: "10% off if 3 months paid together", popular: false },
      { days: 3, price: "$50 / month", discount: "15% off if 3 months paid together", popular: true },
      { days: 5, price: "$75 / month", discount: "20% off if 3 months paid together", popular: false },
    ],
  },
  {
    id: 5,
    title: "Qiraat & Lahjat",
    desc: "Learn different recitations and proper Arabic dialects.",
    image: "/hollyquran.webp",
    slug: "qiraat-lahjat",
    plans: [
      { days: 2, price: "$55 / month", discount: "10% off if 3 months paid together", popular: false },
      { days: 3, price: "$70 / month", discount: "15% off if 3 months paid together", popular: true },
      { days: 5, price: "$100 / month", discount: "20% off if 3 months paid together", popular: false },
    ],
  },
  {
    id: 6,
    title: "Darse Nizami Books",
    desc: "Study classical Islamic texts with proper guidance.",
    image: "/darsenizami.jpeg",
    slug: "darse-nizami",
    plans: [
      { days: 2, price: "$45 / month", discount: "10% off if 3 months paid together", popular: false },
      { days: 3, price: "$60 / month", discount: "15% off if 3 months paid together", popular: true },
      { days: 5, price: "$85 / month", discount: "20% off if 3 months paid together", popular: false },
    ],
  },
  {
    id: 7,
    title: "Islamic Lectures & Guidance",
    desc: "Detailed lectures on important Islamic topics and issues.",
    image: "/Islamiclaw.jpeg",
    slug: "islamic-lectures",
    plans: [
      { days: 2, price: "$30 / month", discount: "10% off if 3 months paid together", popular: false },
      { days: 3, price: "$45 / month", discount: "15% off if 3 months paid together", popular: true },
      { days: 5, price: "$65 / month", discount: "20% off if 3 months paid together", popular: false },
    ],
  },
  {
    id: 8,
    title: "Fiqh & Islamic Rulings",
    desc: "Learn solutions to contemporary and traditional issues.",
    image: "/islamic.jpeg",
    slug: "fiqh-masaail",
    plans: [
      { days: 2, price: "$40 / month", discount: "10% off if 3 months paid together", popular: false },
      { days: 3, price: "$55 / month", discount: "15% off if 3 months paid together", popular: true },
      { days: 5, price: "$80 / month", discount: "20% off if 3 months paid together", popular: false },
    ],
  },
];
