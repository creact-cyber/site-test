'use client'

import React from 'react';
import { motion } from 'framer-motion';

const HowItWorks: React.FC = () => {
  return (
    <section className="py-20 md:py-32 px-4 bg-paper">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-16">

        {/* Visual Side */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="w-full md:w-1/2"
        >
           <div className="bg-primary/[0.07] rounded-[48px] p-4 border border-ink/10 shadow-brutal-xl -rotate-2 hover:rotate-0 transition-transform duration-500 ease-spring">
             <img
               src="https://thechartians.com/wp-content/uploads/2025/03/stock-trading-profits-illustration-download-in-svg-png-gif-file-formats-bitcoin-logo-analytics-market-analysis-financial-investing-pack-business-illustrations-5783446.webp"
               alt="Trending Moves"
               className="rounded-[32px] w-full h-auto border border-ink/10"
             />
           </div>
        </motion.div>

        {/* Text Side */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="w-full md:w-1/2 text-left"
        >
           <div className="inline-block px-4 py-1.5 rounded-full border border-ink/10 bg-lime text-void text-sm font-extrabold mb-6 shadow-brutal-sm">
             Our Philosophy
           </div>
           <h2 className="font-display text-4xl md:text-6xl font-bold text-ink mb-8 leading-tight">
             We Rarely Miss <br />
             <span className="text-primary">Trending Moves.</span>
           </h2>
           <p className="text-xl text-ink/60 mb-8 leading-relaxed">
             We rarely miss Trending moves and teach you how to ride it.
           </p>
           <blockquote className="p-8 bg-surface-light rounded-3xl border border-ink/10 shadow-brutal">
             <p className="text-lg font-medium italic text-ink">
               "We believe Trending Days are the biggest wealth destroyers for retail and we want to change that."
             </p>
           </blockquote>
        </motion.div>

      </div>
    </section>
  );
};

export default HowItWorks;
