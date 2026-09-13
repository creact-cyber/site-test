'use client'

import React from 'react';
import { Check, PlayCircle, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const Masterclass: React.FC = () => {
  const features = [
    "Draw levels that actually work (Support & Resistance)",
    "Learn to Catch & Ride Trending Days",
    "Learn the exact Option Buying setups we use",
    "Build a Swing Trading system with scanners",
    "Attend 1 Live Q&A Session every month for 1 year",
    "Identify momentum sectors before the herd",
    "Master Risk Management & Position Sizing",
    "Fix your Trading Psychology & self-sabotage patterns",
    "Skip the bookish noise — learn only what works",
    "Go from Basics → Advanced setups step by step"
  ];

  return (
    <section className="py-20 md:py-32 px-4 bg-paper" id="course">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-[48px] overflow-hidden bg-void text-white border border-ink/10 shadow-brutal-xl"
        >
            {/* Background effects */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/25 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-lime/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4"></div>

            <div className="relative z-10 grid lg:grid-cols-2 gap-12 p-8 md:p-16 items-center">

                {/* Content Side */}
                <div>
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-lime border-2 border-lime text-sm font-extrabold mb-6 text-void">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-void opacity-50"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-void"></span>
                        </span>
                        Limited Time Offer
                    </div>

                    <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 leading-tight" aria-label="Precision Price Action Masterclass">
                        Precision Price Action <br/>
                        <span className="text-lime" aria-hidden="true">Masterclass</span>
                    </h2>

                    <p className="text-xl text-white/60 mb-8 leading-relaxed">
                        Stop trading patterns you don't understand. Learn the hidden logic behind market movements and trade like the institutions.
                    </p>

                    {/* Features List */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 mb-10">
                        {features.map((item, i) => (
                            <div key={i} className="flex items-start gap-3">
                                <div className="w-5 h-5 mt-1 rounded-full bg-lime flex items-center justify-center text-void shrink-0">
                                    <Check size={14} strokeWidth={3} />
                                </div>
                                <span className="text-white/80 text-base md:text-lg font-medium leading-tight">{item}</span>
                            </div>
                        ))}
                    </div>

                    {/* Price Display */}
                    <div className="flex items-end gap-3 mb-8">
                        <div>
                            <span className="font-mono text-white/40 line-through text-xl font-semibold">₹28,500</span>
                            <div className="font-mono text-5xl md:text-6xl font-bold text-white leading-none">₹18,500</div>
                        </div>
                        <div className="pb-1">
                            <span className="text-void text-base font-extrabold bg-sun px-3 py-1 rounded font-mono">35% OFF</span>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                        <a
                            href="https://plans.thechartians.com/single-checkout/68e698f4574ce536f9f60a50?pid=p1"
                            target="_blank"
                            rel="noreferrer"
                            className="brutal-press w-auto inline-flex items-center justify-center px-10 py-5 bg-lime text-void rounded-full font-extrabold text-xl shadow-brutal-lime text-center"
                        >
                            Enroll Now
                        </a>
                        <div className="flex flex-col p-2 rounded-lg bg-white/5 border-2 border-white/20 px-4">
                            <span className="text-xs text-white/50 uppercase tracking-wide">Use Code</span>
                            <span className="text-xl font-mono font-bold text-sun tracking-wider">OFF35</span>
                        </div>
                    </div>
                </div>

                {/* Visual Side */}
                <div className="relative mt-8 md:mt-0">
                    <div className="relative rounded-2xl overflow-hidden border-[3px] border-white/20 shadow-brutal-lg bg-gray-900 aspect-video group cursor-pointer transform hover:rotate-1 transition-transform duration-500">
                        {/* Placeholder for Course Preview */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                        <img
                            src="https://thechartians.com/wp-content/uploads/2025/03/Untitled-design-7.png"
                            alt="Course Preview"
                            className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                        />
                        <div className="absolute inset-0 z-20 flex items-center justify-center">
                            <div className="w-20 h-20 bg-lime/90 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <PlayCircle size={40} className="text-void ml-1" />
                            </div>
                        </div>

                        {/* Course UI Mockup Elements */}
                        <div className="absolute bottom-4 left-4 z-20 flex gap-2">
                             <div className="h-2 w-12 bg-white/50 rounded-full"></div>
                             <div className="h-2 w-8 bg-white/30 rounded-full"></div>
                        </div>
                    </div>

                    {/* Floating badge — glass, single settle-in (no infinite bounce) */}
                    <motion.div
                      initial={{ opacity: 0, y: 12, scale: 0.95 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: 'spring', bounce: 0.15, duration: 0.6, delay: 0.4 }}
                      className="absolute -bottom-6 -right-4 bg-paper/90 backdrop-blur-md p-5 rounded-xl border border-ink/10 shadow-brutal flex items-center gap-4"
                    >
                        <div className="flex -space-x-2">
                             {[1,2,3].map(i => (
                               <img key={i} src={`https://i.pravatar.cc/100?img=${i + 40}`} className="w-10 h-10 rounded-full border border-ink/10" alt="Student"/>
                             ))}
                        </div>
                        <div className="text-sm">
                            <p className="font-bold text-ink">500+ Students</p>
                            <div className="flex text-sun gap-0.5">
                                <Star size={12} fill="currentColor" />
                                <Star size={12} fill="currentColor" />
                                <Star size={12} fill="currentColor" />
                                <Star size={12} fill="currentColor" />
                                <Star size={12} fill="currentColor" />
                            </div>
                        </div>
                    </motion.div>
                </div>

            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Masterclass;