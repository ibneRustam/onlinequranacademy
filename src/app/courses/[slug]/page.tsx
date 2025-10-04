import { coursesData } from "@/app/data/coursesData";
import Image from "next/image";
import { Metadata } from "next";

interface Props {
  params: { slug: string };
}

// SEO metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const course = coursesData.find(c => c.slug === params.slug);
  if (!course) return { title: "Course Not Found" };
  return {
    title: course.title,
    description: course.desc,
    openGraph: {
      title: course.title,
      description: course.desc,
      images: [course.image],
    },
  };
}

export default function CourseDetailPage({ params }: Props) {
  const course = coursesData.find((c) => c.slug === params.slug);

  if (!course) {
    return <p className="text-center mt-20 text-red-500">Course not found</p>;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6 max-w-4xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">{course.title}</h1>
      <div className="relative h-64 w-full mb-6 rounded-xl overflow-hidden shadow-lg">
        <Image src={course.image} alt={course.title} fill className="object-cover" />
      </div>
      <p className="text-gray-700 text-lg">{course.desc}</p>
    </div>
  );
}
