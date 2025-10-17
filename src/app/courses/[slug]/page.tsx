import { coursesData } from "@/app/data/coursesData";
import Image from "next/image";
import { Metadata } from "next";
import Link from "next/link";
import { Clock, Users, Award, CheckCircle, Star, GraduationCap, DollarSign, Users2, Zap } from "lucide-react";

interface Props {
  params: { slug: string };
}

// Complete course details data for all 8 courses
const courseDetails = {
  "noorani-qaida": {
    title: "Noorani Qaida Course",
    duration: "3-6 months",
    level: "Beginner", 
    sessions: "30 minutes daily",
    freeTrial: "3 free classes",
    fee: "Affordable monthly fee",
    features: [
      "Arabic alphabet recognition and perfect pronunciation",
      "Basic Harakat (vowels) and Tanween rules mastery",
      "Letter connection and joint forms practice",
      "Basic Quran reading fluency development",
      "Correct Makharij (articulation points) training"
    ],
    curriculum: [
      "Arabic Alphabet Mastery (28 Letters)",
      "Short Vowels (Harakat - Fatha, Kasra, Damma)",
      "Long Vowels (Madd - Natural, Secondary)",
      "Tanween and Noon Sakinah Rules",
      "Basic Stopping Rules (Waqf)"
    ],
    description: "Our Noorani Qaida program provides the essential foundation for Quran reading. Students learn Arabic letters, proper pronunciation, and basic Tajweed rules through interactive sessions with certified instructors.",
    focus: "Education with character building - developing love for Quran from basics and establishing strong foundation"
  },
  "nazira-with-tajweed": {
    title: "Nazira with Tajweed Course",
    duration: "6-9 months",
    level: "Beginner to Intermediate",
    sessions: "30-45 minutes daily",
    freeTrial: "3 free classes",
    fee: "Affordable monthly fee",
    features: [
      "Fluid Quran reading with proper Tajweed rules application",
      "Correct pronunciation and articulation practice",
      "Reading speed and fluency development",
      "Basic to intermediate Tajweed rules implementation",
      "Confidence in Quran recitation development"
    ],
    curriculum: [
      "Basic Reading Fluency Development",
      "Essential Tajweed Rules Introduction",
      "Daily Recitation Practice Sessions",
      "Reading Speed and Accuracy Improvement",
      "Confidence Building in Public Recitation"
    ],
    description: "Learn to read Quran fluently with proper Tajweed rules. This course focuses on developing smooth, correct Quran reading skills for daily recitation with beautiful pronunciation.",
    focus: "Education with character building - making Quran reading a daily habit with proper rules"
  },
  "hifz-program": {
    title: "Hifz with Tajweed Course",
    duration: "2-3 years",
    level: "Advanced",
    sessions: "1 hour daily", 
    freeTrial: "3 free classes",
    fee: "Competitive monthly fee",
    features: [
      "Complete Quran memorization with perfection and accuracy",
      "Advanced Tajweed rules practical application",
      "Systematic revision schedule development",
      "Advanced memorization techniques and tips",
      "Ijazah preparation and certification process"
    ],
    curriculum: [
      "Memorization Planning & Strategy Development",
      "Tajweed Rules Advanced Implementation",
      "Revision System Development & Maintenance",
      "Recitation Perfection & Fluency",
      "Ijazah Preparation & Certification"
    ],
    description: "Our comprehensive Hifz program combines memorization with perfect Tajweed. Students receive individual attention from certified Huffaz to ensure accurate and fluent Quran memorization with Ijazah opportunity.",
    focus: "Education with character building - developing discipline, patience and spiritual connection through memorization"
  },
  "complete-tajweed": {
    title: "Complete Tajweed Course",
    duration: "6-12 months", 
    level: "Intermediate to Advanced",
    sessions: "45 minutes daily",
    freeTrial: "3 free classes",
    fee: "Reasonable monthly fee",
    features: [
      "Comprehensive Tajweed rules theoretical and practical mastery",
      "Practical recitation application with correction",
      "Common mistakes identification and systematic correction",
      "Fluency and confidence development in recitation",
      "Quranic pronunciation perfection with expert feedback"
    ],
    curriculum: [
      "Makharij & Sifaat Advanced Study",
      "Noon & Meem Rules Complete Application",
      "Madd Rules Practical Implementation",
      "Stopping & Starting Rules Mastery",
      "Advanced Tajweed Practice & Correction"
    ],
    description: "Master the art of Quran recitation with our Complete Tajweed course. Learn all Tajweed rules practically and develop beautiful, correct Quran recitation skills with expert guidance.",
    focus: "Education with character building - perfecting worship through proper recitation and understanding"
  },
  "qiraat-lahjat": {
    title: "Qiraat & Lahjat Course",
    duration: "12-18 months",
    level: "Advanced",
    sessions: "45-60 minutes daily",
    freeTrial: "3 free classes",
    fee: "Specialized course fee",
    features: [
      "Learn different famous Qiraat (recitation styles) of Quran",
      "Master the 10 famous Qiraat including Qaloon, Warsh, etc.",
      "Understand the historical development of Qiraat",
      "Practical application of different recitation styles",
      "Certificate in Qiraat upon completion"
    ],
    curriculum: [
      "Introduction to 10 Famous Qiraat",
      "Qiraat of Hafs from Asim (Detailed Study)",
      "Qiraat of Warsh from Nafi (Practical Application)",
      "Qiraat of Qaloon from Nafi (Style Mastery)",
      "Comparative Study of Different Qiraat Styles",
      "Certificate Preparation and Assessment"
    ],
    description: "Explore the beautiful diversity of Quran recitation through our Qiraat & Lahjat course. Learn different famous recitation styles including the 7 Ahruf and 10 Qiraat with certified Qaris.",
    focus: "Education with character building - appreciating the diversity and beauty of Quran recitation traditions"
  },
  "darse-nizami": {
    title: "Darse Nizami Books Course",
    duration: "8 years (Full) / 2 years (Short)",
    level: "Advanced Islamic Studies",
    sessions: "1-2 hours daily",
    freeTrial: "3 free classes",
    fee: "Comprehensive program fee",
    features: [
      "Complete 8-year Alim course curriculum coverage",
      "Short course option (2 years) for specific subjects",
      "Study of individual Darse Nizami books as needed",
      "Traditional Islamic sciences comprehensive learning",
      "Alim/Fazil certification upon completion"
    ],
    curriculum: [
      "Arabic Grammar (Nahw & Sarf) Complete Course",
      "Islamic Jurisprudence (Fiqh) Advanced Study",
      "Quranic Exegesis (Tafseer) Detailed Analysis",
      "Hadith Sciences (Uloom al-Hadith) Comprehensive",
      "Islamic Theology (Aqeedah) In-depth Study",
      "Islamic History and Seerah Detailed Coverage"
    ],
    description: "Our Darse Nizami program offers both complete 8-year Alim course and short 2-year specialized studies. Learn traditional Islamic sciences with qualified Ulema and receive recognized certification.",
    focus: "Education with character building - producing knowledgeable scholars with strong Islamic character"
  },
  "islamic-lectures": {
    title: "Islamic Lectures & Guidance Course",
    duration: "Flexible (3 months to 1 year)",
    level: "All Levels",
    sessions: "45-60 minutes weekly",
    freeTrial: "3 free sessions",
    fee: "Workshop-based fee structure",
    features: [
      "Islamic lectures and workshops on various topics",
      "Preparation of PhD-level Islamic research papers",
      "Guidance in writing and publishing Islamic articles",
      "Provision of research materials and resources",
      "One-on-one mentorship for academic Islamic writing"
    ],
    curriculum: [
      "Islamic Lecture Preparation and Delivery",
      "Research Paper Writing Techniques",
      "Academic Article Publication Guidance",
      "Islamic Research Methodology",
      "Public Speaking and Dawah Training",
      "Contemporary Islamic Issues Analysis"
    ],
    description: "Enhance your Islamic knowledge through specialized lectures, workshops, and research guidance. Get support for PhD papers, article writing, and comprehensive Islamic studies with expert scholars.",
    focus: "Education with character building - developing research skills and public speaking abilities for Islamic propagation"
  },
  "fiqh-islamic-law": {
    title: "Fiqh & Islamic Rulings Course",
    duration: "6-12 months",
    level: "Intermediate to Advanced",
    sessions: "45 minutes daily",
    freeTrial: "3 free classes",
    fee: "Comprehensive course fee",
    features: [
      "Complete understanding of Islamic rulings on various topics",
      "Detailed study of Hajj rules and regulations",
      "Comprehensive Salah (prayer) rules and conditions",
      "Solutions to contemporary Islamic issues",
      "Practical application of Fiqh in daily life"
    ],
    curriculum: [
      "Purification (Taharah) Rules Complete Study",
      "Salah (Prayer) Comprehensive Rules",
      "Hajj and Umrah Detailed Regulations",
      "Islamic Transactions (Muamalat) Rules",
      "Contemporary Fiqh Issues Solutions",
      "Comparative Fiqh Studies"
    ],
    description: "Master Islamic jurisprudence with our comprehensive Fiqh course. Learn complete rulings on worship, transactions, and contemporary issues with practical applications for daily life.",
    focus: "Education with character building - implementing Islamic rulings in daily life with understanding and wisdom"
  }
};

// SEO metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const course = coursesData.find(c => c.slug === params.slug);
  if (!course) return { title: "Course Not Found" };
  
  const details = courseDetails[params.slug as keyof typeof courseDetails];
  
  return {
    title: `${course.name} - Online Quran Course | TaallumulQuran Academy`,
    description: `${details?.description} ${details?.duration} program with ${details?.freeTrial}. Expert teachers, ${details?.sessions}.`,
    keywords: `${course.name}, online Quran course, learn Quran, Tajweed course, Hifz program, Islamic studies, Quran classes, ${details?.level} level`,
    openGraph: {
      title: `${course.name} - TaallumulQuran Academy`,
      description: `${details?.description} Join now for ${details?.freeTrial}.`,
      type: 'website',
    },
    alternates: {
      canonical: `https://taallumulquran.com/courses/${params.slug}`
    }
  };
}

export default function CourseDetailPage({ params }: Props) {
  const course = coursesData.find((c) => c.slug === params.slug);
  const details = courseDetails[params.slug as keyof typeof courseDetails];

  if (!course || !details) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Course Not Found</h1>
          <Link href="/courses" className="text-blue-600 hover:underline">
            ← Back to Courses
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                {course.name}
              </h1>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {course.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/registration" 
                  className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold"
                >
                  Start Free Trial
                </Link>
                <Link 
                  href="/courses" 
                  className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors font-semibold"
                >
                  View All Courses
                </Link>
              </div>
            </div>
            
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg">
              <Image 
                src={course.image} 
                alt={`Learn ${course.name} with TaallumulQuran Academy - Online Quran Course`}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Course Details Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Course Overview</h2>
              
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="text-xl leading-relaxed mb-8">
                  {course.longDescription}
                </p>

                <h3 className="text-2xl font-semibold text-gray-900 mt-12 mb-6">What You Will Learn</h3>
                <ul className="grid gap-4 mb-12">
                  {details.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                      <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="text-2xl font-semibold text-gray-900 mt-12 mb-6">Course Curriculum</h3>
                <div className="grid gap-4 mb-12">
                  {details.curriculum.map((item, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg">
                      <div className="bg-green-100 text-green-800 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                        {index + 1}
                      </div>
                      <span className="text-gray-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>

                <h3 className="text-2xl font-semibold text-gray-900 mt-12 mb-6">Teaching Philosophy</h3>
                <div className="bg-green-50 border border-green-200 rounded-2xl p-6 mb-8">
                  <p className="text-green-800 text-lg leading-relaxed">
                    <strong>Education with Character Building:</strong> {details.focus}
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar - Course Info & Pricing */}
            <div className="space-y-8">
              {/* Course Details Card */}
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Course Details</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-green-100 p-3 rounded-lg">
                      <Clock className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Course Duration</div>
                      <div className="font-semibold text-gray-900">{details.duration}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <Users className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Session Length</div>
                      <div className="font-semibold text-gray-900">{details.sessions}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="bg-purple-100 p-3 rounded-lg">
                      <Award className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Skill Level</div>
                      <div className="font-semibold text-gray-900">{details.level}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="bg-yellow-100 p-3 rounded-lg">
                      <Star className="w-6 h-6 text-yellow-600" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Free Trial</div>
                      <div className="font-semibold text-gray-900">{details.freeTrial}</div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t">
                  <Link 
                    href="/registration" 
                    className="w-full bg-green-600 text-white text-center py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors block mb-3"
                  >
                    Enroll Now - {details.freeTrial}
                  </Link>
                  <p className="text-center text-gray-500 text-sm">
                    No credit card required • Expert teachers
                  </p>
                </div>
              </div>

              {/* Pricing Plans Card */}
              <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Course Fees</h3>
                
                <div className="space-y-6">
                  {course.plans.map((plan, index) => (
                    <div
                      key={plan.days}
                      className={`border-2 rounded-xl p-4 ${
                        plan.popular
                          ? 'border-green-500 bg-green-50'
                          : 'border-gray-200'
                      }`}
                    >
                      {plan.popular && (
                        <div className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold inline-block mb-3">
                          MOST POPULAR
                        </div>
                      )}

                      <h4 className="text-lg font-bold text-gray-900 mb-2">
                        {plan.days} Days/Week
                      </h4>
                      
                      <div className="flex items-baseline gap-2 mb-3">
                        <span className="text-2xl font-bold text-green-600">
                          ${plan.price}
                        </span>
                        {plan.discount > 0 && (
                          <span className="text-sm text-gray-500 line-through">
                            ${plan.originalPrice}
                          </span>
                        )}
                        <span className="text-gray-600 text-sm">/month</span>
                      </div>

                      <div className="space-y-2 text-sm text-gray-600 mb-4">
                        <div className="flex justify-between">
                          <span>Classes:</span>
                          <span className="font-semibold">{plan.classes}/month</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Duration:</span>
                          <span className="font-semibold">{plan.sessionTime}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Cost/Class:</span>
                          <span className="font-semibold text-green-600">
                            ${(plan.price / plan.classes).toFixed(2)}
                          </span>
                        </div>
                      </div>

                      <Link href="/registration">
                        <button
                          className={`w-full py-3 rounded-lg font-semibold transition-all ${
                            plan.popular
                              ? 'bg-green-600 hover:bg-green-700 text-white'
                              : 'bg-gray-900 hover:bg-black text-white'
                          }`}
                        >
                          Choose This Plan
                        </button>
                      </Link>
                    </div>
                  ))}
                </div>

                {/* Additional Discounts */}
                <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                    <Zap className="w-4 h-4" />
                    Special Discounts Available
                  </h4>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>• Family Discount: Up to 20% off for siblings</li>
                    <li>• Quarterly Payment: 15% discount</li>
                    <li>• Annual Payment: 25% discount</li>
                  </ul>
                </div>

                {/* View All Pricing Link */}
                <div className="mt-6 text-center">
                  <Link 
                    href="/fee" 
                    className="text-green-600 hover:text-green-700 font-semibold text-sm flex items-center justify-center gap-1"
                  >
                    View Complete Pricing Details
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Family Discount Card */}
              {course.familyDiscount && (
                <div className="bg-gradient-to-r from-purple-500 to-indigo-600 rounded-2xl p-6 text-white">
                  <div className="flex items-center gap-3 mb-3">
                    <Users2 className="w-6 h-6" />
                    <h4 className="font-bold text-lg">Family Discount</h4>
                  </div>
                  <p className="text-purple-100 text-sm mb-4">
                    Enroll multiple children and save up to 20% on each additional child's fees!
                  </p>
                  <Link href="/contact">
                    <button className="w-full bg-white text-purple-600 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm">
                      Inquire About Family Discount
                    </button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Begin Your Islamic Learning Journey Today
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join our global community of students learning from certified Islamic scholars with personalized attention and comprehensive curriculum.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/registration"
              className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors text-lg"
            >
              Start Free Trial Class
            </Link>
            <Link
              href="/fee"
              className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors text-lg"
            >
              View All Pricing Plans
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}