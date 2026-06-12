import { useEffect } from "react";
import type { FC } from "react";
import { useLocation } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ServicesHero from "../components/Services/ServicesHero";
import ServicesShowcase from "../components/Services/ServicesShowcase";
import BridalOffer from "../components/Services/BridalOffer";
import ServicesCTA from "../components/Services/ServicesCTA";
import { SocialSidebar } from "../components/ui/SocialSidebar";
import { Reveal } from "../components/ui/Reveal";

import { useSEO } from "../lib/useSEO";

const Services: FC = () => {
  useSEO({
    title: "Best Hair, Skin & Nail Services in Trichy",
    description: "Explore the best salon services in Trichy at Zen Tonez. Professional hair spa, glow facials, luxury pedicure, manicures, custom nail art, and bridal makeup package rates.",
    keywords: "best salon services trichy, top hair spa in trichy, best nail art in trichy, bridal packages trichy, salon price list"
  });
  const location = useLocation();

  useEffect(() => {
    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const originalKey = hash.replace("#", "");
      // Create a list of potential service keys to try (e.g. support both aliases)
      const potentialKeys = [originalKey];
      if (originalKey === "lice-removal") {
        potentialKeys.push("lice-treatment");
      } else if (originalKey === "lice-treatment") {
        potentialKeys.push("lice-removal");
      }
      
      // Short delay to ensure elements are fully rendered and layout shifts are resolved
      setTimeout(() => {
        let targetElement: HTMLElement | null = null;
        
        // Try to find the visible element for any of the potential keys
        for (const key of potentialKeys) {
          const elements = document.querySelectorAll(`[data-service="${key}"]`);
          elements.forEach((el) => {
            if (el instanceof HTMLElement && el.offsetParent !== null) {
              targetElement = el;
            }
          });
          if (targetElement) break;
        }

        // Fallback to ID selectors if no visible data-service element found
        if (!targetElement) {
          for (const key of potentialKeys) {
            targetElement = document.querySelector(`#mobile-${key}`) || 
                            document.querySelector(`#desktop-${key}`);
            if (targetElement) break;
          }
        }

        // Final fallback to the raw hash
        if (!targetElement) {
          targetElement = document.querySelector(hash);
        }

        if (targetElement) {
          const lenis = (window as any).lenisInstance;
          if (lenis) {
            lenis.scrollTo(targetElement, { offset: 0, duration: 1.5 });
          } else {
            targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }
      }, 600);
    }
  }, [location.hash, location.pathname]);

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
