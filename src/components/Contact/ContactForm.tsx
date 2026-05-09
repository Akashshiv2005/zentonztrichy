import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, Sparkles } from "lucide-react";

const ContactForm: React.FC = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    try {
      const res = await fetch("http://localhost:8081/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });
      if (!res.ok) {
        const errorText = await res.text();
        throw new Error(errorText || "Failed to send");
      }

      setIsSubmitted(true);
      setFormState({ name: "", email: "", phone: "", service: "", message: "" });
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch {
      setError("Something went wrong while sending your message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="relative group w-full"
    >
      {/* Rotating Border Beam */}
      <div className="absolute inset-0 p-[2px] rounded-3xl tb:rounded-[3.5rem] overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="-inset-full bg-[conic-gradient(from_0deg,transparent_0,var(--color-primary)_40deg,transparent_100deg)] opacity-30 blur-[2px]"
        />
      </div>

      <div className="bg-surface/60 backdrop-blur-xl p-6 tb:p-12 dt:p-16 rounded-3xl tb:rounded-4xl shadow-luxury-deep border border-white/50 relative z-10 overflow-hidden transform-gpu">
        {isSubmitted && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute inset-0 z-20 bg-white/95 flex flex-col items-center justify-center p-8 text-center rounded-3xl tb:rounded-4xl"
          >
            <div className="p-5 tb:p-6 bg-primary rounded-2xl tb:rounded-4xl text-white mb-6 tb:mb-8 shadow-xl shadow-primary/20">
              <Sparkles size={40} />
            </div>
            <h3 className="text-2xl tb:text-4xl font-black text-[#302b27] mb-4 font-serif uppercase leading-tight">
              Message Sent!
            </h3>
            <p className="text-on-surface/80 font-semibold max-w-sm text-sm tb:text-base">
              Your message has been submitted successfully. Our team will respond shortly!
            </p>
          </motion.div>
        )}

        <h3 className="text-2xl tb:text-3xl font-black mb-8 tb:mb-12 uppercase font-serif tracking-tight">
          Send Us a <span className="text-primary">Message</span>
        </h3>

        <form onSubmit={handleSubmit} className="space-y-6 tb:space-y-8">
          {/* Name & Email */}
          <div className="grid grid-cols-1 mb:grid-cols-2 gap-6 tb:gap-8">
            <div className="space-y-2 tb:space-y-3">
              <label className="text-[9px] tb:text-[10px] uppercase tracking-[0.3em] font-black text-on-surface/60 block px-3 tb:px-4">Full Name</label>
              <input type="text" required
                className="w-full px-5 tb:px-8 py-4 tb:py-5 bg-white/70 border border-secondary/20 rounded-2xl tb:rounded-3xl focus:ring-4 focus:ring-primary/10 focus:border-primary/30 outline-none transition-all placeholder:text-on-surface/40 font-bold text-sm tb:text-base text-on-surface"
                placeholder="Your Name" value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })} />
            </div>
            <div className="space-y-2 tb:space-y-3">
              <label className="text-[9px] tb:text-[10px] uppercase tracking-[0.3em] font-black text-on-surface/60 block px-3 tb:px-4">Email Address</label>
              <input type="email"
                className="w-full px-5 tb:px-8 py-4 tb:py-5 bg-white/50 border border-on-surface/10 rounded-2xl tb:rounded-3xl focus:ring-4 focus:ring-primary/10 focus:border-primary/30 outline-none transition-all placeholder:text-on-surface/40 font-bold text-sm tb:text-base text-on-surface"
                placeholder="your@email.com" value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })} />
            </div>
          </div>

          {/* Phone & Service */}
          <div className="grid grid-cols-1 mb:grid-cols-2 gap-6 tb:gap-8">
            <div className="space-y-2 tb:space-y-3">
              <label className="text-[9px] tb:text-[10px] uppercase tracking-[0.3em] font-black text-on-surface/60 block px-3 tb:px-4">Phone Number</label>
              <input type="tel" required
                className="w-full px-5 tb:px-8 py-4 tb:py-5 bg-white/50 border border-on-surface/10 rounded-2xl tb:rounded-3xl focus:ring-4 focus:ring-primary/10 focus:border-primary/30 outline-none transition-all placeholder:text-on-surface/40 font-bold text-sm tb:text-base text-on-surface"
                placeholder="+91 00000 00000" value={formState.phone}
                onChange={(e) => setFormState({ ...formState, phone: e.target.value })} />
            </div>
            <div className="space-y-2 tb:space-y-3">
              <label className="text-[9px] tb:text-[10px] uppercase tracking-[0.3em] font-black text-on-surface/60 block px-3 tb:px-4">Service Interested</label>
              <select required
                className="w-full px-5 tb:px-8 py-4 tb:py-5 bg-white/50 border border-on-surface/10 rounded-2xl tb:rounded-3xl focus:ring-4 focus:ring-primary/10 focus:border-primary/30 outline-none transition-all font-bold text-sm tb:text-base text-on-surface"
                value={formState.service}
                onChange={(e) => setFormState({ ...formState, service: e.target.value })}>
                <option value="">Select a service</option>
                <option value="Hair Spa">Hair Spa</option>
                <option value="Facial">Facial</option>
                <option value="Skin Care">Skin Care</option>
                <option value="Hair Styling">Hair Styling</option>
                <option value="Nails">Nails</option>
                <option value="Manicure">Manicure</option>
                <option value="Pedicure">Pedicure</option>
                <option value="Lice Treatment">Lice Treatment</option>
                <option value="Bridal Makeup">Bridal Makeup</option>
              </select>
            </div>
          </div>

          {/* Message */}
          <div className="space-y-2 tb:space-y-3">
            <label className="text-[9px] tb:text-[10px] uppercase tracking-[0.3em] font-black text-on-surface/60 block px-3 tb:px-4">Your Message</label>
            <textarea rows={5} required
              className="w-full px-5 tb:px-8 py-4 tb:py-5 bg-white/50 border border-on-surface/10 rounded-2xl tb:rounded-3xl focus:ring-4 focus:ring-primary/10 focus:border-primary/30 outline-none transition-all placeholder:text-on-surface/40 font-bold resize-none text-sm tb:text-base text-on-surface"
              placeholder="Tell us about your beauty goals..."
              value={formState.message}
              onChange={(e) => setFormState({ ...formState, message: e.target.value })} />
          </div>

          {error && (
            <p className="text-red-500 text-sm font-semibold text-center">{error}</p>
          )}

          <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} type="submit"
            disabled={isLoading}
            className="btn-premium-gold w-full flex items-center justify-center gap-3 py-5 tb:py-6 text-sm disabled:opacity-60">
            {isLoading ? "Sending..." : <>Send Message <Send size={16} /></>}
          </motion.button>
        </form>
      </div>
    </motion.div>
  );
};

export default ContactForm;
