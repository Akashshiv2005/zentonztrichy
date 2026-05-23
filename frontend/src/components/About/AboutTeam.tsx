import React from "react";
import { motion } from "framer-motion";

const AboutTeam: React.FC = () => {
  return (
    <section className="py-10 sm:py-16 bg-surface-dim relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center text-center mb-10 sm:mb-16 gap-6 sm:gap-8">
          <div className="max-w-2xl">
            <span className="text-[#B87333] font-bold uppercase tracking-[0.3em] text-[9px] sm:text-xs mb-4 block">
              The Artisans
            </span>
            <h2 className="text-hero text-on-surface">
              Meet Our <span className="text-[#B87333]">Master Stylists</span>
            </h2>
          </div>
          <p className="text-base sm:text-lg text-on-surface/60 font-sans max-w-xl">
            Curated experts committed to translating your inner beauty into an
            outward reality.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {[
            {
              name: "Anisha",
              role: "Manager",
              bio: "The driving force behind our salon's excellence, ensuring every guest receives royal treatment.",
            },
            {
              name: "Sarthaj",
              role: "All Rounder",
              bio: "A versatile expert skilled in the full spectrum of luxury beauty services, from skin to hair.",
            },
            {
              name: "Yoga",
              role: "Hairstylist",
              bio: "A visionary in hair design, specializing in bespoke cuts and vibrant color transformations.",
            },
          ].map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="relative rounded-4xl p-8 sm:p-10 bg-white/5 backdrop-blur-md border border-white/10 shadow-luxury-soft hover:shadow-luxury transition-all duration-500 group overflow-hidden flex flex-col items-center text-center"
            >
              {/* Decorative Background Element */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#B87333]/5 rounded-full -mr-16 -mt-16 transition-transform duration-700 group-hover:scale-150" />
              
              <div className="relative z-10">
                <div className="mb-6">
                  <h4 className="text-2xl sm:text-3xl font-serif text-on-surface mb-2 transition-colors duration-300 group-hover:text-[#B87333]">
                    {member.name}
                  </h4>
                  <p className="text-[#B87333] font-black uppercase tracking-[0.2em] text-[10px] sm:text-xs">
                    {member.role}
                  </p>
                </div>
                
                <div className="h-px w-12 bg-[#B87333]/30 mx-auto mb-6 transition-all duration-500 group-hover:w-24 group-hover:bg-[#B87333]" />
                
                <p className="text-sm sm:text-base text-on-surface/60 font-sans leading-relaxed">
                  {member.bio}
                </p>
              </div>

              {/* Bottom Accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#B87333] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;
