'use client'

import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { slamInDelay } from '@/lib/motion';

const articles = [
  {
    category: "SEBI Compliance",
    date: "Investor Awareness",
    title: "Why You Should Trade Only With a SEBI Registered Research Analyst (INH000024231)",
    desc: "In a digital age flooded with unregistered 'tips' and illegal advisory services, capital protection is paramount. A SEBI Registered Research Analyst is regulated, accountable, and qualified. We provide unbiased, logic-based technical analysis with zero false promises of guaranteed returns. Choose transparency over speculation.",
    link: "https://thechartians.com/",
    bg: "bg-primary/[0.07]"
  },
  {
    category: "Swing Trading Strategy",
    date: "Technical Analysis",
    title: "Price Action Mastery: How to Identify Breakouts Before They Happen",
    desc: "Most retail traders enter a stock when it has already moved 10%. Our proprietary 'Pre-Breakout' Swing Trading system analyzes Volume Contraction Patterns (VCP) and Relative Strength to spot moves early. Learn how to ride trends with institutional logic and precise risk-reward ratios.",
    link: "https://thechartians.com/",
    bg: "bg-lime/[0.08]"
  },
  {
    category: "FNO Risk Management",
    date: "Trading Psychology",
    title: "Nifty & BankNifty Option Buying: The Art of Position Sizing",
    desc: "Derivatives trading is a double-edged sword. Success isn't about hitting jackpots; it's about surviving the bad days. We emphasize strict stop-loss discipline and position sizing. Understand why 90% of option buyers fail and how our risk-first approach helps you stay in the game.",
    link: "https://thechartians.com/",
    bg: "bg-coral/[0.08]"
  }
];

const Articles: React.FC = () => {
  return (
    <section className="py-20 md:py-32 px-4 bg-surface-light border-y border-ink/10" id="insights">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="text-left max-w-2xl">
            <div className="inline-block px-4 py-1.5 rounded-full border border-ink/10 bg-paper text-ink text-sm font-extrabold mb-4 shadow-brutal-sm">
               Market Insights
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-ink leading-tight">
              Latest Research &amp; <br />
              <span className="text-primary">Market Analysis</span>
            </h2>
            <p className="mt-4 text-ink/60 text-lg md:text-xl leading-relaxed">
              Stay ahead of the market with our logic-based analysis on Swing Trading, FNO Strategies, and Risk Management.
            </p>
          </div>
          <button className="brutal-press hidden md:flex items-center gap-2 text-ink font-extrabold text-lg bg-paper border border-ink/10 rounded-full px-6 py-3 shadow-brutal-sm">
             View All Articles <ArrowUpRight size={24} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
           {articles.map((item, idx) => (
             <motion.div
               key={item.title}
               initial={{ opacity: 0, y: 24 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={slamInDelay(idx)}
               className={`${item.bg} p-8 md:p-10 rounded-[32px] border border-ink/10 shadow-brutal-lg group cursor-pointer flex flex-col h-full`}
             >
                <div className="flex justify-between items-center mb-6">
                   <span className="text-sm font-extrabold text-ink bg-paper px-4 py-1.5 rounded-full border border-ink/10">{item.category}</span>
                   <span className="text-sm text-ink/50 font-medium">{item.date}</span>
                </div>
                <h3 className="font-display text-xl md:text-2xl font-bold text-ink mb-4 leading-snug">
                  {item.title}
                </h3>
                <p className="text-ink/70 leading-relaxed mb-8 flex-grow text-base md:text-lg">
                  {item.desc}
                </p>
                <div className="flex items-center gap-2 text-ink font-extrabold group-hover:gap-4 transition-[gap] duration-200 mt-auto text-lg">
                  Read Analysis <ArrowUpRight size={20} />
                </div>
             </motion.div>
           ))}
        </div>

        <div className="mt-12 text-center md:hidden">
            <button className="brutal-press inline-flex items-center justify-center gap-2 text-ink font-extrabold px-8 py-3 border border-ink/10 rounded-full bg-paper shadow-brutal-sm">
                View All Articles <ArrowUpRight size={20} />
            </button>
        </div>
      </div>
    </section>
  );
};

export default Articles;
