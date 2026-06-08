import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, AlertCircle, X } from 'lucide-react';

interface AdminToastProps {
  message: string;
  type?: 'success' | 'error' | 'info';
  isOpen: boolean;
  onClose: () => void;
  duration?: number;
}

export const AdminToast: React.FC<AdminToastProps> = ({
  message,
  type = 'success',
  isOpen,
  onClose,
  duration = 4000
}) => {
  useEffect(() => {
    if (isOpen && duration > 0) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [isOpen, duration, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.9 }}
          className="fixed top-24 right-8 z-[200] flex items-center gap-3 bg-[#FAF9F6] border border-[#C9A24A]/30 px-6 py-4 rounded-xl shadow-luxury-deep max-w-sm"
        >
          {/* Icon */}
          <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
            type === 'success' 
              ? 'bg-[#C9A24A]/10 text-[#C9A24A]' 
              : 'bg-red-50 text-red-500'
          }`}>
            {type === 'success' ? <Check size={16} /> : <AlertCircle size={16} />}
          </div>
          
          {/* Message Text */}
          <span className="text-[#2B2B2B] text-sm font-semibold tracking-wide">
            {message}
          </span>

          {/* Close button */}
          <button 
            onClick={onClose}
            className="text-on-surface/30 hover:text-[#2B2B2B] transition-colors ml-2 cursor-pointer"
          >
            <X size={14} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
