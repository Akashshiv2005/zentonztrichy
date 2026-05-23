import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Link } from "react-router-dom";

import { ScrollReveal } from "./ScrollReveal";

export function PromoQuoteSection() {
  return (
    <section className="pt-0 pb-10 tb:pb-20 relative overflow-hidden bg-secondary/20 px-4 mb:px-0">
      <div className="max-w-5xl mx-auto px-0 tb:px-6 dt:px-8 relative z-10">
        <ScrollReveal>
          <div className="bg-surface/60 backdrop-blur-2xl border border-white/50 rounded-3xl tb:rounded-4xl p-6 tb:p-16 dt:p-20 shadow-luxury-deep text-center relative overflow-hidden mx-auto max-w-4xl">
            <Quote
              size={40}
              className="text-primary opacity-20 mx-auto mb-6 tb:mb-10 relative z-10"
            />
            <h3 className="text-2xl tb:text-4xl dt:text-5xl font-black text-on-surface mb-6 tb:mb-10 uppercase tracking-tighter font-serif relative z-10 leading-tight">
              Ready to Glow? <br className="hidden mb:block" /> Book Your Session Today.
            </h3>
            <p className="text-on-surface/80 text-base tb:text-lg dt:text-xl font-medium max-w-xl tb:max-w-2xl mx-auto mb:mb-10 tb:mb-12 relative z-10 balance">
              Experience the perfect blend of luxury and care. Your transformation
              masterpiece is just a click away.
            </p>
            <div className="relative z-10 flex justify-center">
              <Link to="/book" className="w-full mb:w-auto">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-premium-gold w-full mb:w-auto px-7 py-3.5 mb:px-10 mb:tb:px-14 mb:py-4 mb:tb:py-5 text-[10px] mb:text-sm tb:text-base shadow-xl"
                >
                  Book Now →
                </motion.button>
              </Link>
            </div>

            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
