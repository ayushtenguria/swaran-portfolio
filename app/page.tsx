import AboutCoachSection from "@/components/About";
import CoachingComparison from "@/components/CoachingComparison";
import FAQSection from "@/components/FAQ";
import HeroSection from "@/components/Hero";
import CoachingScienceAndSessions from "@/components/ScienceofCoaching";
import CoachingBenefitsAndEngagement from "@/components/StructureofCoahing";
import CoachingWhyItWorks from "@/components/WhySection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutCoachSection />
      <CoachingComparison />
      {/* <CoachingBenefitsAndEngagement /> */}
      {/* <CoachingScienceAndSessions /> */}
      <CoachingWhyItWorks />
      <FAQSection />
    </div>
  );
}
