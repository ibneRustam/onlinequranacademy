
import HeroSection from "@/app/compunents/ui/heroSection";
import IntroSection from "./compunents/ui/introSection";
import CoursesSection from "./compunents/ui/courses";
import CallToAction from "./compunents/ui/calltoAction";
import TeachersSection from "./compunents/ui/teacherSection";
import AllNumberSection from "./compunents/ui/allNumberSection";
import FeedbackSection from "./compunents/ui/feedbackSection";
import AnnouncementSection from "./compunents/ui/announcementSection";


export default function Home() {
  return (
    <main>
      <HeroSection />
      <IntroSection />
      <CoursesSection />
      <CallToAction />
      {/* <TeachersSection /> */}
      <AllNumberSection />
      <FeedbackSection />
      <AnnouncementSection />
      
      

    </main>
  );
}

