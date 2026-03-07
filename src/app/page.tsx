import Hero from "@/components/sections/Hero";
import SocialProof from "@/components/sections/SocialProof";
import PainPoints from "@/components/sections/PainPoints";
import AboutTeaser from "@/components/sections/AboutTeaser";
import HowItWorks from "@/components/sections/HowItWorks";
import ServicesOverview from "@/components/sections/ServicesOverview";
import OnlineCoachingTeaser from "@/components/sections/OnlineCoachingTeaser";
import GroupClasses from "@/components/sections/GroupClasses";
import Testimonials from "@/components/sections/Testimonials";
import Trainers from "@/components/sections/Trainers";
import StudioGallery from "@/components/sections/StudioGallery";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <SocialProof />
      <PainPoints />
      <AboutTeaser />
      <HowItWorks />
      <ServicesOverview />
      <OnlineCoachingTeaser />
      <GroupClasses />
      <Testimonials />
      <Trainers />
      <StudioGallery />
      <FinalCTA />
    </>
  );
}
