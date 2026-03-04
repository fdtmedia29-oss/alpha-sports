import Hero from "@/components/sections/Hero";
import SocialProof from "@/components/sections/SocialProof";
import PainPoints from "@/components/sections/PainPoints";
import HowItWorks from "@/components/sections/HowItWorks";
import ServicesOverview from "@/components/sections/ServicesOverview";
import GroupClasses from "@/components/sections/GroupClasses";
import StudioGallery from "@/components/sections/StudioGallery";
import Trainers from "@/components/sections/Trainers";
import Testimonials from "@/components/sections/Testimonials";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <SocialProof />
      <PainPoints />
      <HowItWorks />
      <ServicesOverview />
      <GroupClasses />
      <StudioGallery />
      <Trainers />
      <Testimonials />
      <FinalCTA />
    </>
  );
}
