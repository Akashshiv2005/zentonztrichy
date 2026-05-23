import type { FC } from "react";
import { motion } from "framer-motion";
import AnimatedList from "../ui/AnimatedList";
import {
  SkinCare3D,
  Facial3D,
  ManiPedi3D,
  HairSpa3D,
  Bridal3D,
  Nails3D,
  LiceRemoval3D,
  WartRemoval3D,
  EarPiercing3D,
} from "../ui/ThreeDIcons";

const SERVICES_DATA = [
  {
    title: "Skin Care",
    desc: "Maintain radiant and healthy skin with our personalized skincare solutions.",
    icon: <SkinCare3D />,
    color: "#FB7185", // Rose
    gradient: "linear-gradient(200deg, #FECDD3 0%, #FB7185 100%)",
  },
  {
    title: "Facial Treatment",
    desc: "Refresh and rejuvenate your skin with our advanced facial therapies.",
    icon: <Facial3D />,
    color: "#38BDF8", // Blue
    gradient: "linear-gradient(200deg, #BAE6FD 0%, #38BDF8 100%)",
  },
  {
    title: "Manicure & Pedicure",
    desc: "Pamper your hands and feet with our relaxing therapies.",
    icon: <ManiPedi3D />,
    color: "#FB923C", // Orange
    gradient: "linear-gradient(200deg, #FED7AA 0%, #FB923C 100%)",
  },
  {
    title: "Hair Care",
    desc: "Revitalize your hair with nourishing spa treatments designed to repair damage.",
    icon: <HairSpa3D />,
    color: "#0EA5E9", // Sky Blue
    gradient: "linear-gradient(200deg, #BAE6FD 0%, #0EA5E9 100%)",
  },
  {
    title: "Bridal Makeup",
    desc: "Look stunning on your special day with our professional bridal makeup services.",
    icon: <Bridal3D />,
    color: "#D97706", // Gold
    gradient: "linear-gradient(200deg, #FDE68A 0%, #D97706 100%)",
  },
  {
    title: "Nails",
    desc: "Exquisite nail art and extensions to express your unique style.",
    icon: <Nails3D />,
    color: "#8B5CF6", // Purple
    gradient: "linear-gradient(200deg, #DDD6FE 0%, #8B5CF6 100%)",
  },
  {
    title: "Lice Removal",
    desc: "Gentle and effective treatments to ensure a healthy, lice-free scalp.",
    icon: <LiceRemoval3D />,
    color: "#10B981", // Emerald
    gradient: "linear-gradient(200deg, #A7F3D0 0%, #10B981 100%)",
  },
  {
    title: "Hair Styling",
    desc: "Bespoke hair styling for every occasion, from traditional to contemporary.",
    icon: <HairSpa3D />, // Using HairSpa3D as placeholder
    color: "#EC4899", // Pink
    gradient: "linear-gradient(200deg, #FBCFE8 0%, #EC4899 100%)",
  },
  {
    title: "Wart Removal",
    desc: "Safe and effective removal of warts and skin tags using advanced techniques.",
    icon: <WartRemoval3D />,
    color: "#EA580C", // Deep Orange
    gradient: "linear-gradient(200deg, #FFEDD5 0%, #EA580C 100%)",
  },
  {
    title: "Ear Piercing",
    desc: "Safe and precise ear piercing using professional, sterilized equipment.",
    icon: <EarPiercing3D />,
    color: "#F472B6", // Pink
    gradient: "linear-gradient(200deg, #FDF2F8 0%, #F472B6 100%)",
  },
];

const AboutServicesGrid: FC = () => {
  return (
    <section className="py-12 sm:py-20 dt:py-24 bg-surface-dim relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-20">
          <span className="text-primary font-bold uppercase tracking-[0.5em] text-[10px] sm:text-xs mb-6 block">
            Experience Our Expertise
          </span>
          <h2 className="text-display text-on-surface">
            Our <span className="text-primary">Exclusive Services</span>
          </h2>
          <div className="w-24 h-1 bg-primary/20 mx-auto mt-8 rounded-full" />
        </div>

        <div className="flex justify-center w-full max-w-4xl mx-auto pt-10">
          <AnimatedList
            items={SERVICES_DATA}
            className="w-full"
            isSticky={true}
            showGradients={false}
            enableArrowNavigation={false}
            displayScrollbar={false}
            renderItem={(service, _index, isSelected) => (
              <div
                className={`w-full overflow-hidden rounded-[30px] shadow-luxury transition-all duration-500 border border-white/10 ${isSelected ? "scale-[1.02] shadow-luxury-deep ring-2 ring-primary/20" : "scale-100 opacity-90"
                  }`}
                style={{
                  background: service.gradient,
                  padding: "40px"
                }}
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-center gap-6 mb-4">
                    <div className="w-14 h-14 sm:w-20 sm:h-20 shrink-0 flex items-center justify-center p-1 bg-white/10 rounded-2xl shadow-inner border border-white/20 backdrop-blur-sm">
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl sm:text-3xl font-bold text-white drop-shadow-md leading-tight">
                        {service.title}
                      </h3>
                      <motion.p
                        initial={false}
                        animate={{
                          opacity: isSelected ? 1 : 0.8,
                          height: "auto",
                          marginTop: "12px"
                        }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="text-white/80 text-sm sm:text-base leading-relaxed font-medium border-t border-white/10 pt-4 overflow-hidden"
                      >
                        {service.desc}
                      </motion.p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          />
        </div>
      </div>

    </section>
  );
};

export default AboutServicesGrid;
