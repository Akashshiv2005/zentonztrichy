import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";

export function MobileBookingButton() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-5 right-4 z-50 lg:hidden pointer-events-auto"
    >
      <Link to="/book">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="btn-premium-gold flex items-center gap-1.5 px-4 py-2.5 text-[10px] min-h-0 shadow-luxury-soft"
        >
          <Sparkles size={12} className="text-white" />
          <span>Book Now</span>
        </motion.button>
      </Link>
    </motion.div>
  );
}
