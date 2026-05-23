import React from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import "./Gallery.css";

const GalleryFooter: React.FC = () => {
  return (
    <footer className="flex flex-col items-center justify-center py-12 tb:py-20 px-6 tb:px-8 bg-white/30 relative overflow-hidden backdrop-blur-sm">
      <Heart
        className="text-primary mb-4 tb:mb-6 animate-pulse w-10 h-10 tb:w-14 tb:h-14"
      />
      <h2 className="text-3xl tb:text-5xl dt:text-6xl font-black uppercase font-serif mb-6 tb:mb-10 text-center text-slate-900 leading-tight">
        End of <br /> Reflections
      </h2>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="btn-premium-gold px-8 tb:px-12 py-3.5 w-full mb:w-auto text-sm"
      >
        Restart Journey
      </motion.button>
    </footer>
  );
};

export default GalleryFooter;
