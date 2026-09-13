'use client'

import React from 'react';
import { UserCheck, Briefcase, Headphones } from 'lucide-react';
import { motion } from 'framer-motion';
import { slamInDelay } from '@/lib/motion';

const offerings = [
  { icon: UserCheck, title: 'Accountability', bg: 'bg-lime/[0.08]', desc: 'Accountability and Transparency is always a priority! PROFIT Days and LOSS days shared transparently at all times.' },
  { icon: Briefcase, title: 'Professionalism', bg: 'bg-primary/[0.07]', desc: 'We ensure the trade given is well inside the buying range. No Unnecessary Spamming.' },
  { icon: Headphones, title: 'Support', bg: 'bg-coral/[0.08]', desc: 'Timely Response to questions/doubts asked. Early Exits ensured to be within executable ranges.' },
];

const Stats: React.FC = () => {
  return (
    <section className="py-20 md:py-32 px-4 bg-paper">
       <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="font-display text-3xl md:text-6xl font-bold text-ink">
             Our Unique <br />
             <span className="text-primary">Offerings</span>
          </h2>
       </div>

       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {offerings.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={slamInDelay(idx)}
              className={`${item.bg} rounded-[32px] md:rounded-[40px] p-6 md:p-8 flex flex-col gap-4 md:gap-6 text-left border border-ink/10 shadow-brutal-lg`}
            >
               <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-ink/10 bg-paper flex items-center justify-center text-ink">
                 <item.icon size={32} />
               </div>
               <div>
                 <h3 className="font-display text-2xl font-bold text-ink mb-2">{item.title}</h3>
                 <p className="text-ink/70 text-base leading-relaxed">
                   {item.desc}
                 </p>
               </div>
            </motion.div>
          ))}
       </div>
    </section>
  );
};

export default Stats;
