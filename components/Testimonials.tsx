'use client'

import React from 'react';
import { AlertCircle } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-paper">
      <div className="max-w-4xl mx-auto">
        <div className="bg-sun/10 border border-sun/30 shadow-brutal-lg rounded-[32px] p-10 flex flex-col items-center text-center">
           <div className="w-16 h-16 bg-paper border border-ink/10 text-ink rounded-full flex items-center justify-center mb-6">
             <AlertCircle size={32} />
           </div>
           <h3 className="font-display text-3xl font-bold text-ink mb-4">Important Disclaimer</h3>
           <p className="text-ink/70 text-lg leading-relaxed">
             "Securities market investments carry market risks; read documents carefully before investing.
             SEBI registration &amp; NISM certification don't guarantee intermediary performance or assure investment returns."
           </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;