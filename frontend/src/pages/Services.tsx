import { useEffect } from "react";
import type { FC } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ServicesHero from "../components/Services/ServicesHero";
import ServicesShowcase from "../components/Services/ServicesShowcase";
import BridalOffer from "../components/Services/BridalOffer";
import ServicesCTA from "../components/Services/ServicesCTA";
import { SocialSidebar } from "../components/ui/SocialSidebar";
import { Reveal } from "../components/ui/Reveal";

const Services: FC = () => {
  useEffect(() => {
    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div className="flex flex-col overflow-x-hidden bg-background text-on-surface font-sans selection:bg-primary-container transition-colors duration-1000 relative">
      
      <ServicesHero />
      
      <Reveal width="100%" direction="up" distance={100}>
        <ServicesShowcase />
      </Reveal>
      
      <Reveal width="100%" direction="up">
        <BridalOffer />
      </Reveal>
      
      <Reveal width="100%" direction="up">
        <ServicesCTA />
      </Reveal>
      
      <SocialSidebar />
    </div>
  );
};

export default Services;
