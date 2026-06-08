import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertTriangle } from 'lucide-react';

interface ConfirmModalProps {
  isOpen: boolean;
  title?: string;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
  confirmText?: string;
}

const ConfirmModal: React.FC<ConfirmModalProps> = ({ 
  isOpen, 
  title = "Confirm Action", 
  message, 
  onConfirm, 
  onCancel,
  confirmText = "Confirm Delete"
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop with a premium blur and overlay */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-[#2B2B2B]/40 backdrop-blur-md"
            onClick={onCancel}
          />
          
          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
            className="relative bg-[#FAF9F6] border border-[#C9A24A]/30 p-8 rounded-2xl shadow-luxury-deep max-w-sm w-full overflow-hidden text-center z-10"
          >
            {/* Top decorative gradient line */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#C9A24A] via-red-500 to-[#C9A24A]" />

            {/* Warning Icon Container */}
            <motion.div 
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.15, type: "spring", stiffness: 150 }}
              className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-red-50 text-red-500 border border-red-100 mb-5 shadow-[0_4px_12px_rgba(239,68,68,0.06)]"
            >
              <AlertTriangle className="h-6 w-6" />
            </motion.div>

            {/* Title */}
            <h3 className="text-2xl font-gelasio font-bold text-[#2B2B2B] mb-3 tracking-wide">
              {title}
            </h3>

            {/* Message */}
            <p className="text-[#4A4A4A] text-sm leading-relaxed mb-8 px-2">
              {message}
            </p>

            {/* Actions */}
            <div className="flex gap-4 items-center justify-center">
              <button
                onClick={onCancel}
                className="flex-1 py-3 px-4 rounded-xl text-[#2B2B2B]/75 hover:text-[#2B2B2B] hover:bg-black/5 active:bg-black/10 transition-all font-semibold tracking-wide text-sm border border-transparent hover:border-black/5 cursor-pointer"
              >
                Cancel
              </button>
              
              <button
                onClick={() => {
                  onConfirm();
                  onCancel();
                }}
                className="flex-1 py-3 px-4 rounded-xl bg-red-600 hover:bg-red-700 active:scale-[0.98] text-white transition-all font-semibold tracking-wide text-sm shadow-[0_4px_12px_rgba(220,38,38,0.2)] hover:shadow-[0_6px_20px_rgba(220,38,38,0.3)] cursor-pointer"
              >
                {confirmText}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ConfirmModal;

