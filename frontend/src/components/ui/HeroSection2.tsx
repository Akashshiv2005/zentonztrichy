import React from 'react';
import { cn } from "../../lib/utils";
import { motion, type Variants } from 'framer-motion';

// Icon component for contact details
const InfoIcon = ({ type }: { type: 'website' | 'phone' | 'address' }) => {
    const icons = {
        website: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-primary">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" x2="22" y1="12" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
        ),
        phone: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-primary">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
        ),
        address: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-primary">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                <circle cx="12" cy="10" r="3"></circle>
            </svg>
        ),
    };
    return <div className="mr-2 shrink-0">{icons[type]}</div>;
};


// Prop types for the HeroSection component
export interface HeroSection2Props {
  logo?: {
    url: string;
    alt: string;
    text?: string;
  };
  slogan?: string;
  title: React.ReactNode;
  subtitle: string;
  callToAction: {
    text: string;
    href: string;
  };
  backgroundImage: string;
  contactInfo: {
    website: string;
    phone: string;
    address: string;
  };
  rightContent?: React.ReactNode;
  className?: string;
}

const HeroSection2 = React.forwardRef<HTMLDivElement, HeroSection2Props>(
  ({ className, logo, slogan, title, subtitle, callToAction, backgroundImage, contactInfo, rightContent }, ref) => {
    
    // Animation variants for the container to orchestrate children animations
    const containerVariants: Variants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.15,
          delayChildren: 0.2,
        },
      },
    };

    // Animation variants for individual text/UI elements
    const itemVariants: Variants = {
      hidden: { y: 20, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
          ease: "easeOut",
        },
      },
    };
    
    return (
      <motion.section
        ref={ref}
        className={cn(
          "relative flex w-full flex-col overflow-hidden bg-slate-950 text-white md:flex-row min-h-screen",
          className
        )}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        {/* Left Side: Content */}
        <div className="flex w-full flex-col justify-between p-8 md:w-1/2 md:p-12 lg:w-3/5 lg:p-16 relative z-10 pt-24 md:pt-32">
            {/* Top Section: Logo & Main Content */}
            <div>
                <motion.header className="mb-12" variants={itemVariants}>
                    {logo && (
                        <div className="flex items-center">
                            <img src={logo.url} alt={logo.alt} className="mr-3 h-10 object-contain" />
                            <div>
                                {logo.text && <p className="text-xl font-black text-white uppercase tracking-tighter font-serif">{logo.text}</p>}
                                {slogan && <p className="text-[10px] font-black tracking-[0.4em] text-primary uppercase">{slogan}</p>}
                            </div>
                        </div>
                    )}
                </motion.header>

                <motion.main variants={containerVariants}>
                    <motion.h1 className="text-4xl md:text-5xl lg:text-7xl font-black leading-[0.9] text-white uppercase tracking-tighter font-serif" variants={itemVariants}>
                        {title}
                    </motion.h1>
                    <motion.div className="my-8 h-1.5 w-24 bg-primary rounded-full shadow-[0_0_15px_rgba(var(--primary-rgb),0.5)]" variants={itemVariants}></motion.div>
                    <motion.p className="mb-10 max-w-lg text-lg text-white/70 font-medium leading-relaxed" variants={itemVariants}>
                        {subtitle}
                    </motion.p>
                    <motion.a 
                      href={callToAction.href} 
                      className="group inline-flex items-center text-xl font-black tracking-widest text-primary transition-all hover:text-white" 
                      variants={itemVariants}
                    >
                        <span className="relative">
                          {callToAction.text}
                          <span className="absolute -bottom-2 left-0 w-0 h-1 bg-primary transition-all duration-300 group-hover:w-full"></span>
                        </span>
                        <svg className="ml-3 w-6 h-6 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </motion.a>
                </motion.main>
            </div>

            {/* Bottom Section: Footer Info */}
            <motion.footer className="mt-16 w-full" variants={itemVariants}>
                <div className="grid grid-cols-1 gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-white/40 sm:grid-cols-3">
                    <div className="flex items-center gap-2 group cursor-pointer hover:text-white transition-colors">
                        <InfoIcon type="website" />
                        <span>{contactInfo.website}</span>
                    </div>
                    <div className="flex items-center gap-2 group cursor-pointer hover:text-white transition-colors">
                        <InfoIcon type="phone" />
                        <span>{contactInfo.phone}</span>
                    </div>
                    <div className="flex items-center gap-2 group cursor-pointer hover:text-white transition-colors">
                        <InfoIcon type="address" />
                        <span>{contactInfo.address}</span>
                    </div>
                </div>
            </motion.footer>
        </div>

        {/* Right Side: Image with Clip Path Animation */}
        <motion.div 
          className="w-full min-h-[400px] bg-cover bg-center md:w-1/2 md:min-h-full lg:w-2/5 relative flex items-center justify-center p-8 lg:p-12"
          style={{ 
            backgroundImage: `url(${backgroundImage})`,
          }}
          initial={{ clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)', x: 50 }}
          whileInView={{ clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0% 100%)', x: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          {/* Overlay to ensure luxury feel */}
          <div className="absolute inset-0 bg-linear-to-r from-slate-950 via-slate-950/20 to-transparent pointer-events-none" />
          
          {/* Custom Content (e.g. Membership Card) */}
          <div className="relative z-10 w-full">
            {rightContent}
          </div>
        </motion.div>
      </motion.section>
    );
  }
);

HeroSection2.displayName = "HeroSection2";

export { HeroSection2 };
