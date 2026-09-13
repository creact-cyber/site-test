'use client'

import React from 'react';
import { TrendingUp, Eye, BookOpen, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { slamIn, slamInDelay } from '@/lib/motion';

const BentoGrid: React.FC = () => {
  return (
    <section className="py-20 md:py-32 px-4 bg-paper" id="features">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-24">
          <div className="inline-block px-4 py-1.5 rounded-full border border-ink/10 bg-lime text-void text-sm font-extrabold mb-4 shadow-brutal-sm">
            Why Choose Us?
          </div>
          <h2 className="font-display text-3xl md:text-6xl font-bold text-ink leading-tight">
            Why Traders Trust <br />
            <span className="text-primary">The Chartians?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">

          {/* Large Card - Expiry Special */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={slamIn}
            className="md:col-span-2 bg-lime/[0.08] rounded-[32px] p-8 md:p-12 overflow-hidden relative group border border-ink/10 shadow-brutal-lg min-h-[360px] md:min-h-[420px]"
          >
             <div className="relative z-10 max-w-lg">
               <div className="flex items-center gap-3 mb-4">
                 <div className="p-3 bg-paper rounded-full border border-ink/10 text-ink"><TrendingUp size={28}/></div>
                 <span className="bg-ink text-lime text-sm font-bold px-3 py-1 rounded-full">HIGH PROBABILITY</span>
               </div>
               <h3 className="font-display text-2xl md:text-4xl font-bold mb-6 text-ink">Expiry Special Analysis</h3>
               <p className="text-ink/70 text-lg md:text-xl leading-relaxed">
                 Our proprietary setup identifies low-risk opportunities on expiry days. We analyze Open Interest data and Price Action to find market disconnects.
               </p>
             </div>
             {/* Decorative graphical element — a bold ink-outlined shape, not a soft blur gradient */}
             <div className="absolute right-6 bottom-6 w-24 h-24 md:w-32 md:h-32 rounded-full border border-ink/10 bg-lime/40 z-0 hidden sm:block"></div>
             <div className="absolute right-16 bottom-20 w-10 h-10 md:w-14 md:h-14 rounded-full border border-ink/10 bg-paper z-0 hidden sm:block"></div>
          </motion.div>

          {/* Tall Card - Breakouts */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={slamInDelay(1)}
            className="bg-primary/[0.07] rounded-[32px] p-8 md:p-12 overflow-hidden relative border border-ink/10 shadow-brutal-lg flex flex-col justify-between min-h-[360px] md:min-h-[420px]"
          >
            <div className="relative z-10">
               <div className="w-14 h-14 md:w-16 md:h-16 bg-paper rounded-2xl border border-ink/10 flex items-center justify-center mb-6 md:mb-8 text-primary">
                 <Eye size={32} />
               </div>
               <h3 className="font-display text-2xl md:text-4xl font-bold mb-6 text-ink">Breakout Hunting</h3>
               <p className="text-ink/70 text-lg md:text-xl leading-relaxed">
                 We specialize in catching momentum. Our research focuses on spotting breakouts *before* they happen.
               </p>
            </div>
            <div className="mt-4 md:mt-8 flex justify-center text-ink/15">
               <Eye size={120} strokeWidth={1.5} />
            </div>
          </motion.div>

          {/* Wide Card (Bottom) */}
          <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

            {/* Learn & Earn */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={slamInDelay(2)}
              className="bg-sun/[0.08] rounded-[32px] p-8 md:p-12 border border-ink/10 shadow-brutal-lg flex flex-col items-start text-left"
            >
              <div className="mb-6 w-14 h-14 bg-paper rounded-full border border-ink/10 flex items-center justify-center">
                 <BookOpen size={28} className="text-ink" />
              </div>
              <h3 className="font-display text-xl md:text-3xl font-bold mb-4 text-ink">Logic-Based Trading</h3>
              <p className="text-ink/70 text-base md:text-lg leading-relaxed">
                We don't just give levels. We explain the <strong>Logic</strong> behind every trade we share. This empowers you to learn Technical Analysis while you earn.
              </p>
            </motion.div>

             {/* Accountability */}
             <motion.div
               initial={{ opacity: 0, y: 24 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={slamInDelay(3)}
               className="bg-coral/[0.08] rounded-[32px] p-8 md:p-12 border border-ink/10 shadow-brutal-lg flex flex-col items-start text-left"
             >
              <div className="mb-6 w-14 h-14 bg-paper rounded-full border border-ink/10 flex items-center justify-center">
                 <ShieldCheck size={28} className="text-coral" />
              </div>
              <h3 className="font-display text-xl md:text-3xl font-bold mb-4 text-ink">100% Transparency</h3>
              <p className="text-ink/70 text-base md:text-lg leading-relaxed">
                No hiding losing days. We share both PROFIT and LOSS days transparently. As a SEBI Registered firm, accountability is our core value.
              </p>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
