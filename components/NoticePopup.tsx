'use client'

import React, { useState, useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { springSheet } from '@/lib/motion';

const NoticePopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    previousFocusRef.current = document.activeElement as HTMLElement;
    setIsOpen(true);
  }, []);

  // Focus trap and close on Escape
  useEffect(() => {
    if (!isOpen) return;
    
    // Focus the close button when dialog opens
    setTimeout(() => closeButtonRef.current?.focus(), 100);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      }
      // Simple focus trap — keep focus within the dialog
      if (e.key === 'Tab') {
        const dialog = document.getElementById('notice-dialog');
        if (!dialog) return;
        const focusable = dialog.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
    document.body.style.overflow = '';
    // Return focus to the element that was focused before the dialog opened
    previousFocusRef.current?.focus();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="glass-surface fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          role="presentation"
          onClick={(e) => { if (e.target === e.currentTarget) handleClose(); }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            id="notice-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="notice-title"
            className="bg-paper rounded-[24px] max-w-lg w-full p-8 md:p-10 shadow-2xl relative"
            initial={{ opacity: 0, scale: 0.95, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 12 }}
            transition={springSheet}
          >
            <button
              ref={closeButtonRef}
              onClick={handleClose}
              aria-label="Close notice"
              className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-surface-light hover:bg-surface-dark active:scale-[0.94] transition-[transform,background-color] duration-150 text-ink/70 hover:text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <X size={20} aria-hidden="true" />
            </button>

            <div className="text-center">
              <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-bold mb-6">
                Notice
              </div>

              <p id="notice-title" className="text-ink text-base md:text-lg leading-relaxed">
                <strong>Rajnikant Bhalani, Proprietorship of The Chartians (INH000010405)</strong> is now{' '}
                <strong className="text-primary">CHARTIANS MARKET RESEARCH PRIVATE LIMITED (INH000024231)</strong>.
              </p>

              <p className="text-ink/70 text-base md:text-lg leading-relaxed mt-4">
                All future research services and communications will be through the company account:{' '}
                <a href="mailto:chartiansresearch@gmail.com" className="text-primary font-semibold hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 rounded">
                  chartiansresearch@gmail.com
                </a>
              </p>

              <button
                onClick={handleClose}
                className="mt-8 px-8 py-3 bg-primary text-canvas rounded-full font-bold text-base hover:bg-primary/90 active:scale-[0.97] transition-[transform,background-color,box-shadow] duration-200 ease-spring shadow-lg shadow-primary/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
              >
                I Understand
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NoticePopup;
