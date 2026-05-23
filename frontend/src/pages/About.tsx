import React from "react";
import AboutHero from "../components/About/AboutHero";
import AboutStory from "../components/About/AboutStory";
import AboutServicesGrid from "../components/About/AboutServicesGrid";
import AboutTimeline from "../components/About/AboutTimeline";
import AboutValues from "../components/About/AboutValues";
import AboutTeam from "../components/About/AboutTeam";
import AboutTestimonials from "../components/About/AboutTestimonials";
import AboutCTA from "../components/About/AboutCTA";
import { SocialSidebar } from "../components/ui/SocialSidebar";
import { Reveal } from "../components/ui/Reveal";

const About: React.FC = () => {
  return (
    <div className="overflow-x-hidden bg-background text-on-surface font-sans selection:bg-primary-container selection:text-on-primary-container relative">
      
      <AboutHero />
      
      <Reveal width="100%" direction="up" distance={80}>
        <AboutStory />
      </Reveal>
      
      <Reveal width="100%" direction="up">
        <AboutServicesGrid />
      </Reveal>
      
      <Reveal width="100%" direction="up">
        <AboutTimeline />
      </Reveal>
      
      <Reveal width="100%" direction="up">
        <AboutValues />
      </Reveal>
      
      <Reveal width="100%" direction="up">
        <AboutTeam />
      </Reveal>
      
      <Reveal width="100%" direction="up">
        <AboutTestimonials />
      </Reveal>
      
      <Reveal width="100%" direction="up">
        <AboutCTA />
      </Reveal>
      
      <SocialSidebar />
    </div>
  );
};

export default About;
