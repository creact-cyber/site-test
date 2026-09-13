'use client'

import React from 'react';
import { ArrowRight, ShieldCheck, TrendingUp, Send } from 'lucide-react';
import HeroText from './ui/hero-shutter-text';
import { motion } from 'framer-motion';

// Deterministic candle series so server and client render identically (no Math.random).
const CANDLES = [
  { o: 38, h: 46, l: 34, c: 42, bull: true },
  { o: 42, h: 48, l: 38, c: 40, bull: false },
  { o: 40, h: 44, l: 35, c: 43, bull: true },
  { o: 43, h: 47, l: 40, c: 41, bull: false },
  { o: 41, h: 45, l: 37, c: 44, bull: true },
  { o: 44, h: 46, l: 41, c: 42, bull: false },
  { o: 42, h: 45, l: 39, c: 44, bull: true },
  { o: 44, h: 47, l: 42, c: 45, bull: true },
  { o: 45, h: 49, l: 43, c: 47, bull: true },
  { o: 47, h: 50, l: 44, c: 46, bull: false },
  { o: 46, h: 48, l: 43, c: 44, bull: false },
  { o: 44, h: 46, l: 40, c: 43, bull: false },
  { o: 43, h: 45, l: 39, c: 42, bull: false },
  { o: 42, h: 44, l: 38, c: 41, bull: false },
  { o: 41, h: 43, l: 37, c: 40, bull: false },
  { o: 40, h: 42, l: 30, c: 32, bull: false },
  { o: 32, h: 40, l: 28, c: 38, bull: true },
  { o: 38, h: 52, l: 36, c: 50, bull: true },
  { o: 50, h: 62, l: 48, c: 60, bull: true },
  { o: 60, h: 70, l: 58, c: 67, bull: true },
];

/**
 * Entry-zone / invalidation price-action diagram.
 * Reads left-to-right as: consolidation range (entry zone, emerald) →
 * defined invalidation line (crimson) below it → breakout release.
 * Purely a structural chart illustration — no buy/sell instruction.
 */
const EntryZoneChart: React.FC = () => {
  const width = 760;
  const height = 320;
  const chartTop = 40;
  const chartBottom = 260;
  const priceMax = 72;
  const priceMin = 26;
  const scaleY = (v: number) => chartBottom - ((v - priceMin) / (priceMax - priceMin)) * (chartBottom - chartTop);
  const stepX = width / CANDLES.length;

  const entryZoneTop = scaleY(46);
  const entryZoneBottom = scaleY(38);
  const invalidationY = scaleY(34);

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-full" role="img" aria-label="Illustrative price chart showing a consolidation entry zone above a defined invalidation level, followed by a breakout">
      <defs>
        <linearGradient id="releaseFade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#14B876" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#14B876" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Grid */}
      {Array.from({ length: 5 }).map((_, i) => (
        <line key={i} x1="0" x2={width} y1={chartTop + (i * (chartBottom - chartTop)) / 4} y2={chartTop + (i * (chartBottom - chartTop)) / 4} stroke="#ECE7DA" strokeOpacity="0.06" />
      ))}

      {/* Entry zone band */}
      <rect x="0" y={entryZoneTop} width={width} height={entryZoneBottom - entryZoneTop} fill="#14B876" fillOpacity="0.1" />
      <line x1="0" x2={width} y1={entryZoneTop} y2={entryZoneTop} stroke="#14B876" strokeWidth="1.5" strokeDasharray="4 4" strokeOpacity="0.7" />
      <line x1="0" x2={width} y1={entryZoneBottom} y2={entryZoneBottom} stroke="#14B876" strokeWidth="1.5" strokeDasharray="4 4" strokeOpacity="0.7" />
      <text x="14" y={entryZoneTop - 8} fill="#14B876" fontSize="12" fontFamily="'IBM Plex Mono', monospace" fontWeight="600" letterSpacing="0.06em">ENTRY ZONE</text>

      {/* Invalidation line */}
      <line x1="0" x2={width} y1={invalidationY} y2={invalidationY} stroke="#E5484D" strokeWidth="1.5" strokeOpacity="0.8" />
      <text x="14" y={invalidationY + 18} fill="#E5484D" fontSize="12" fontFamily="'IBM Plex Mono', monospace" fontWeight="600" letterSpacing="0.06em">INVALIDATION</text>

      {/* Release glow under the breakout candles */}
      <rect x={stepX * 15} y={chartTop} width={width - stepX * 15} height={chartBottom - chartTop} fill="url(#releaseFade)" />

      {/* Candles */}
      {CANDLES.map((c, i) => {
        const x = i * stepX + stepX / 2;
        const color = c.bull ? '#14B876' : '#E5484D';
        const bodyTop = scaleY(Math.max(c.o, c.c));
        const bodyBottom = scaleY(Math.min(c.o, c.c));
        return (
          <g key={i}>
            <line x1={x} x2={x} y1={scaleY(c.h)} y2={scaleY(c.l)} stroke={color} strokeWidth="1.5" strokeOpacity="0.9" />
            <rect
              x={x - stepX * 0.24}
              y={Math.min(bodyTop, bodyBottom - 2)}
              width={stepX * 0.48}
              height={Math.max(bodyBottom - bodyTop, 2)}
              fill={color}
              fillOpacity="0.9"
              rx="1"
            />
          </g>
        );
      })}
    </svg>
  );
};

const Hero: React.FC = () => {
  return (
    <section className="relative z-10 pt-6 pb-10 sm:pt-10 sm:pb-16 md:pt-32 md:pb-28 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">

        {/* Compliance Badge — glass, since it genuinely floats above the grid/blobs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass-surface inline-flex items-center gap-2 px-3 py-1.5 md:px-5 md:py-2.5 rounded-full bg-paper/80 backdrop-blur-md border border-ink/10 mb-6 md:mb-8 cursor-default max-w-full"
        >
           <ShieldCheck size={18} className="text-primary shrink-0" />
           <span className="font-mono text-xs md:text-sm font-bold text-ink tracking-wide truncate">SEBI REGISTERED RESEARCH ANALYST (INH000024231)</span>
           <span className="text-[10px] md:text-xs text-ink/50 tracking-wide truncate">CHARTIANS MARKET RESEARCH Pvt LTD.</span>
        </motion.div>

        {/* SEO Optimized Headline with Animation */}
        <h1 className="flex flex-col items-center mb-6 max-w-5xl px-2 gap-2 md:gap-4" aria-label="Catch Moves, Before they Happen.">
          <div aria-hidden="true" className="contents">
            <HeroText
              text="Catch Moves,"
              className="font-display text-[2rem] sm:text-5xl md:text-[86px] font-bold tracking-tight text-ink leading-[1.1] md:leading-[1.05]"
              shutterColor="text-primary"
            />
            <HeroText
              text="Before they Happen."
              className="font-display text-[2rem] sm:text-5xl md:text-[86px] font-bold tracking-tight text-primary leading-[1.1] md:leading-[1.05]"
              shutterColor="text-lime"
            />
          </div>
        </h1>

        {/* Benefit-Driven Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base md:text-2xl text-ink/60 max-w-3xl mb-8 md:mb-12 leading-relaxed font-medium px-2"
        >
          Join India's most trusted community for Technical Analysis.
          We identify high-probability Swing &amp; FNO setups with pure logic, risk management, and complete transparency.
        </motion.p>

        {/* High Converting CTAs — hierarchy: emerald = primary action, telegram-blue = secondary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 md:mb-24 w-full px-2"
        >
          <a href="#plans" onClick={(e) => { e.preventDefault(); document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth' }); }} className="brutal-press w-full sm:w-auto px-7 py-4 md:px-10 md:py-5 bg-lime text-void rounded-full font-extrabold text-base md:text-xl shadow-brutal flex items-center justify-center gap-2">
            Start Your Journey <ArrowRight size={20} className="md:w-6 md:h-6" />
          </a>

          <a href="https://t.me/chartians" target="_blank" rel="noreferrer" className="brutal-press w-full sm:w-auto px-7 py-4 md:px-10 md:py-5 bg-telegram text-white rounded-full font-extrabold text-base md:text-xl shadow-brutal flex items-center justify-center gap-2">
            <Send size={20} className="md:w-6 md:h-6" /> Join Free Channel
          </a>
        </motion.div>

        {/* Entry-Zone / Invalidation Diagram with Trust Elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative w-full max-w-6xl mx-auto px-2 md:px-0"
        >
          <div className="relative rounded-[20px] md:rounded-[32px] overflow-hidden shadow-brutal-xl border border-ink/10 bg-paper aspect-[16/9] group">
            {/* Terminal chrome header */}
            <div className="absolute top-0 left-0 right-0 h-10 md:h-12 flex items-center justify-between px-4 md:px-6 border-b border-ink/10 bg-surface-light/60 z-10">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-coral/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-sun/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-lime/70" />
              </div>
              <span className="font-mono text-[10px] md:text-xs text-ink/40 tracking-widest uppercase">Structure · Not Advice</span>
            </div>

            <div className="absolute inset-0 top-10 md:top-12">
              <EntryZoneChart />
            </div>

            {/* Floating Element: Live Analysis — glass, a single settle-in, no gratuitous looping motion */}
            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ type: 'spring', bounce: 0.15, duration: 0.6, delay: 1 }}
              className="glass-surface absolute bottom-4 right-4 md:bottom-8 md:right-8 bg-paper/90 backdrop-blur-md p-3 md:p-6 rounded-xl md:rounded-2xl border border-ink/10 shadow-brutal flex items-center gap-3 md:gap-4 max-w-[170px] md:max-w-xs text-left"
            >
               <div className="w-8 h-8 md:w-12 md:h-12 bg-lime rounded-full flex items-center justify-center text-void shrink-0">
                 <TrendingUp size={18} className="md:w-6 md:h-6" />
               </div>
               <div>
                 <p className="text-[8px] md:text-xs text-ink/45 font-bold uppercase tracking-wide font-mono">Market Philosophy</p>
                 <p className="text-xs md:text-lg font-bold text-ink leading-tight">Catch Breakouts, Before they Happen</p>
               </div>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
