'use client'

import React from 'react';
import { Check, Zap, AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';
import { slamInDelay } from '@/lib/motion';

const Pricing: React.FC = () => {
  return (
    <section className="py-20 md:py-32 px-4 bg-paper" id="plans">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-24">
          <div className="inline-block px-4 py-1.5 rounded-full border border-sun/30 bg-sun/10 text-sun text-xs font-extrabold uppercase tracking-widest mb-4 font-mono">
             Premium Research
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-ink mb-6">
            Transparent Pricing. <br />
            <span className="text-primary">Professional Research.</span>
          </h2>
          <p className="text-ink/60 max-w-2xl mx-auto text-lg md:text-xl">
            Select a plan that suits your trading style. All plans include SEBI compliant research reports and logic-based analysis.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 items-start">

          {/* Swing Group */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={slamInDelay(0)}
            className="bg-surface-light border border-ink/10 rounded-[24px] p-8 md:p-10 flex flex-col shadow-brutal-lg h-full"
          >
             <div className="mb-8">
               <span className="bg-sun/10 text-sun px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider border border-sun/30 font-mono">Swing Trading</span>
               <div className="mt-6 flex items-baseline">
                 <span className="font-mono text-4xl md:text-6xl font-bold text-ink">₹3,240</span>
                 <span className="text-ink/45 ml-2 text-base font-mono">/ month</span>
               </div>
               <p className="text-base text-ink/50 mt-3 font-medium">Ideal for professionals &amp; part-time traders</p>
             </div>

             <div className="bg-paper border border-ink/10 rounded-2xl p-6 mb-8 flex-1">
               <ul className="space-y-5">
                 <li className="flex items-start gap-3 text-base text-ink/80">
                   <Check size={20} className="text-primary shrink-0 mt-0.5"/>
                   <span><strong>Positional Swing</strong> Cash Stocks</span>
                 </li>
                 <li className="flex items-start gap-3 text-base text-ink/80">
                   <Check size={20} className="text-primary shrink-0 mt-0.5"/>
                   <span><strong>Before Breakout</strong> Entry Logic</span>
                 </li>
                 <li className="flex items-start gap-3 text-base text-ink/80">
                   <Check size={20} className="text-primary shrink-0 mt-0.5"/>
                   <span><strong>10-12 High Quality</strong> Ideas/Mo</span>
                 </li>
                 <li className="flex items-start gap-3 text-base text-ink/80">
                   <Check size={20} className="text-primary shrink-0 mt-0.5"/>
                   <span>Risk Reward <strong>1:2+ Minimum</strong></span>
                 </li>
               </ul>
             </div>

             <a href="https://thechartians.revlu.in/tg/d9f7d737c2645bbb" target="_blank" rel="noreferrer" className="brutal-press w-full py-4 rounded-full border border-ink/15 bg-paper text-ink font-extrabold text-lg shadow-brutal-sm mt-auto text-center">
               Subscribe to Swing
             </a>
          </motion.div>

          {/* FNO + Swing Bundle (Highlighted) — the darkest, most premium tile among the three */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={slamInDelay(1)}
            className="glass-surface bg-void backdrop-blur-xl text-white border border-primary/40 rounded-[24px] p-8 md:p-10 flex flex-col relative shadow-brutal-primary md:-translate-y-6 h-full z-10"
          >
             <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-void px-6 py-2 rounded-full text-xs font-extrabold uppercase tracking-wider whitespace-nowrap font-mono">
               Most Popular
             </div>
             <div className="mb-8 mt-4">
               <span className="text-primary font-display font-bold text-2xl">Combo Pack</span>
               <div className="mt-6 flex items-baseline">
                 <span className="font-mono text-4xl md:text-7xl font-bold text-white">₹5,400</span>
                 <span className="text-white/50 ml-2 text-base font-mono">/ month</span>
               </div>
               <p className="text-base text-primary/90 mt-3 font-medium">Complete access to all research segments</p>
             </div>

             <div className="bg-white/[0.04] rounded-2xl p-6 mb-8 border border-white/10 flex-1 backdrop-blur-sm">
               <ul className="space-y-5">
                 <li className="flex items-start gap-3 text-base text-white/85">
                   <Zap size={20} className="text-primary shrink-0 mt-0.5"/>
                   <span><strong>Index Option</strong> Buying Analysis</span>
                 </li>
                 <li className="flex items-start gap-3 text-base text-white/85">
                   <Zap size={20} className="text-primary shrink-0 mt-0.5"/>
                   <span><strong>Expiry Special</strong> Hero-Zero Setups</span>
                 </li>
                 <li className="flex items-start gap-3 text-base text-white/85">
                   <Zap size={20} className="text-primary shrink-0 mt-0.5"/>
                   <span><strong>Swing Cash</strong> Stocks Included</span>
                 </li>
                 <li className="flex items-start gap-3 text-base text-white/85">
                   <Zap size={20} className="text-primary shrink-0 mt-0.5"/>
                   <span><strong>Stock Option</strong> Buying Trades</span>
                 </li>
               </ul>
             </div>

             <a href="https://thechartians.revlu.in/tg/4e360d76e613a8fe" target="_blank" rel="noreferrer" className="brutal-press w-full py-4 rounded-full bg-primary text-void font-extrabold text-lg shadow-brutal-primary mt-auto text-center">
               Get Full Access
             </a>
          </motion.div>

          {/* FNO Group */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={slamInDelay(2)}
            className="bg-surface-light border border-ink/10 rounded-[24px] p-8 md:p-10 flex flex-col shadow-brutal-lg h-full"
          >
             <div className="mb-8">
               <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider border border-primary/30 font-mono">FNO Trading</span>
               <div className="mt-6 flex items-baseline">
                 <span className="font-mono text-4xl md:text-6xl font-bold text-ink">₹3,240</span>
                 <span className="text-ink/45 ml-2 text-base font-mono">/ month</span>
               </div>
               <p className="text-base text-ink/50 mt-3 font-medium">For active intraday traders</p>
             </div>

             <div className="bg-paper border border-ink/10 rounded-2xl p-6 mb-8 flex-1">
               <ul className="space-y-5">
                 <li className="flex items-start gap-3 text-base text-ink/80">
                   <Check size={20} className="text-primary shrink-0 mt-0.5"/>
                   <span><strong>Nifty &amp; BankNifty</strong> Options</span>
                 </li>
                 <li className="flex items-start gap-3 text-base text-ink/80">
                   <Check size={20} className="text-primary shrink-0 mt-0.5"/>
                   <span><strong>Intraday</strong> Momentum Catching</span>
                 </li>
                 <li className="flex items-start gap-3 text-base text-ink/80">
                   <Check size={20} className="text-primary shrink-0 mt-0.5"/>
                   <span><strong>Daily Market View</strong> Video Analysis</span>
                 </li>
                 <li className="flex items-start gap-3 text-base text-ink/80">
                   <Check size={20} className="text-primary shrink-0 mt-0.5"/>
                   <span><strong>Stock Option</strong> Setups</span>
                 </li>
               </ul>
             </div>

             <a href="https://thechartians.revlu.in/tg/976c822e2f54e63c" target="_blank" rel="noreferrer" className="brutal-press w-full py-4 rounded-full border border-ink/15 bg-paper text-ink font-extrabold text-lg shadow-brutal-sm mt-auto text-center">
               Subscribe to FNO
             </a>
          </motion.div>

        </div>

        {/* Compliance Footer */}
        <div className="mt-16 p-6 md:p-8 bg-sun/[0.08] border border-sun/30 rounded-2xl flex items-start gap-4">
          <AlertTriangle className="text-sun shrink-0 mt-1" size={24} />
          <p className="text-ink/80 text-base leading-relaxed">
            <strong className="text-ink">Risk Disclosure:</strong> Trading in securities market is subject to market risks. Past performance is not an indicator of future returns.
            We do not provide any guaranteed profit services or handle demat accounts. Please read all scheme related documents carefully before investing.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
