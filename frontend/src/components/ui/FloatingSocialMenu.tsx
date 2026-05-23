import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Instagram, 
  Facebook, 
  Phone, 
  MessageCircle,
  type LucideIcon
} from "lucide-react";

interface SocialItem {
  icon: LucideIcon;
  label: string;
  href: string;
  color: string;
  shadow: string;
}

const socialLinks: SocialItem[] = [
  { 
    icon: MessageCircle, 
    label: "WhatsApp", 
    href: "https://wa.me/919751231239", 
    color: "bg-[#25D366]",
    shadow: "shadow-[0_8px_20px_-4px_rgba(37,211,102,0.4)]"
  },
  { 
    icon: Instagram, 
    label: "Instagram", 
    href: "https://www.instagram.com/zentonezsalon/?hl=en", 
    color: "bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#bc1888]",
    shadow: "shadow-[0_8px_20px_-4px_rgba(230,104,60,0.4)]"
  },
  { 
    icon: Facebook, 
    label: "Facebook", 
    href: "https://www.facebook.com/profile.php?id=61576338394684", 
    color: "bg-[#1877F2]",
    shadow: "shadow-[0_8px_20px_-4px_rgba(24,119,242,0.4)]"
  },
  { 
    icon: Phone, 
    label: "Call Us", 
    href: "tel:9751231239", 
    color: "bg-[#0EA5E9]",
    shadow: "shadow-[0_8px_20px_-4px_rgba(14,165,233,0.4)]"
  },
];

export const FloatingSocialMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Radial positioning:Quadrant (90deg)
  // Distance from center - increased for further spacing
  const radius = 110; 

  return (
    <div className="fixed bottom-24 right-6 lg:bottom-10 lg:right-10 z-100 w-14 h-14">
      {/* Social Items */}
      <AnimatePresence>
        {isOpen && socialLinks.map((item, index) => {
          // Calculate angle for 90-degree quadrant expansion (top-left)
          // 180deg (Left) to 270deg (Top)
          const angle = 180 + (index * (90 / (socialLinks.length - 1)));
          const radian = (angle * Math.PI) / 180;
          
          const x = Math.cos(radian) * radius;
          const y = Math.sin(radian) * radius;

          return (
            <motion.a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                x, 
                y, 
                transition: { 
                  type: "spring", 
                  stiffness: 400, 
                  damping: 25,
                  delay: index * 0.05 
                } 
              }}
              exit={{ 
                opacity: 0, 
                scale: 0,
                x: 0, 
                y: 0,
                transition: { duration: 0.2, delay: (socialLinks.length - 1 - index) * 0.05 } 
              }}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
              className={`absolute top-1/2 left-1/2 -ml-6 -mt-6 flex items-center justify-center w-12 h-12 rounded-full text-white ${item.color} shadow-lg z-30 pointer-events-auto`}
              title={item.label}
            >
              <item.icon size={22} strokeWidth={2.5} />
              
              {/* Tooltip */}
              <span className="absolute right-14 bg-[#2B2B2B] text-white text-[10px] font-bold px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap uppercase tracking-widest">
                {item.label}
              </span>
            </motion.a>
          );
        })}
      </AnimatePresence>

      {/* Main Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="absolute inset-0 rounded-full flex items-center justify-center btn-premium-gold text-white shadow-luxury-deep z-40 p-0"
      >
        <div className="flex items-center justify-center pointer-events-none">
          <svg 
            width="32" 
            height="32" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="white" 
            strokeWidth="4" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]"
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </div>
        
        {!isOpen && (
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: [1, 1.3, 1], opacity: [0, 0.4, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 rounded-full bg-[#C9A24A]/40"
          />
        )}
      </motion.button>

      {/* Backdrop for closing when clicking outside */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-10 bg-black/5" 
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>


  );
};
