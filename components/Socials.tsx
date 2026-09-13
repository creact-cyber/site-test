'use client'

import React from 'react';
import { Send, Twitter, Instagram, Newspaper, BarChart2, ArrowUpRight, Youtube } from 'lucide-react';
import { motion } from 'framer-motion';
import { slamInDelay } from '@/lib/motion';

const socials = [
  {
    name: "Telegram Channel",
    description: "Join 50k+ Traders for Live Market Updates & Charts",
    icon: <Send size={32} />,
    url: "https://telegram.me/chartians",
    color: "bg-[#229ED9]", // Telegram Blue
    textColor: "text-[#0c6fa3]"
  },
  {
    name: "YouTube",
    description: "Subscribe for Educational Videos & Market Analysis",
    icon: <Youtube size={32} />,
    url: "https://www.youtube.com/@chartians?sub_confirmation=1",
    color: "bg-[#FF0000]", // YouTube Red
    textColor: "text-[#C00000]"
  },
  {
    name: "Twitter (X)",
    description: "Daily Analysis, Educational Threads & Market Views",
    icon: <Twitter size={32} />,
    url: "https://twitter.com/chartians",
    color: "bg-black", // X Black
    textColor: "text-black"
  },
  {
    name: "Instagram",
    description: "Reels, Trading Psychology & Behind the Scenes",
    icon: <Instagram size={32} />,
    url: "https://www.instagram.com/the.chartians",
    color: "bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500", // Instagram Gradient
    customGradient: true,
    textColor: "text-[#a0103a]"
  },
  {
    name: "Substack",
    description: "Deep Dive Research Newsletters & Long-form Content",
    icon: <Newspaper size={32} />,
    url: "https://thechartians.substack.com",
    color: "bg-[#FF6719]", // Substack Orange
    textColor: "text-[#A83D00]"
  },
  {
    name: "TradingView",
    description: "Follow our Official Chart Setups & Technical Ideas",
    icon: <BarChart2 size={32} />,
    url: "https://in.tradingview.com/u/TheChartians/",
    color: "bg-[#131722]", // TradingView Black
    textColor: "text-[#131722]"
  }
];

const Socials: React.FC = () => {
  return (
    <section className="py-20 md:py-32 px-4 bg-paper border-t border-ink/10" id="socials">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full border border-ink/10 bg-sun text-void text-sm font-extrabold mb-6 shadow-brutal-sm">
             Social Media
          </div>
          <h2 className="font-display text-3xl md:text-6xl font-bold text-ink mb-6">
            Join Our <span className="text-primary">Community.</span>
          </h2>
          <p className="text-ink/60 text-lg max-w-2xl mx-auto">
            We are active across multiple platforms. Follow us to stay updated with the latest market trends and educational content.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-5 md:gap-6">
           {socials.map((social, idx) => (
             <motion.a
               key={idx}
               href={social.url}
               target="_blank"
               rel="noreferrer"
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={slamInDelay(idx, 0.06)}
               className="brutal-press group flex flex-col items-center text-center bg-surface-light p-6 md:p-8 rounded-[32px] border border-ink/10 shadow-brutal-lg w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] cursor-pointer"
             >
               <div className={`w-14 h-14 md:w-20 md:h-20 rounded-2xl border border-ink/10 flex items-center justify-center mb-4 md:mb-6 text-white transform group-hover:rotate-6 transition-transform duration-300 ${social.color}`}>
                 {social.icon}
               </div>

               <h3 className="font-display text-lg md:text-2xl font-bold text-ink mb-2">{social.name}</h3>
               <p className="text-sm md:text-base text-ink/60 font-medium mb-6 leading-relaxed">
                  {social.description}
               </p>

               <div className="mt-auto px-6 py-3 rounded-full border border-ink/10 bg-paper text-ink font-bold flex items-center gap-2 transition-[gap] duration-200 group-hover:gap-3">
                 <span>{social.name === "YouTube" ? "Subscribe" : "Follow"}</span> <ArrowUpRight size={18} />
               </div>
             </motion.a>
           ))}
        </div>
      </div>
    </section>
  );
};

export default Socials;