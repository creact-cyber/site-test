'use client'

import React from 'react';
import { UserCheck, Briefcase, Headphones } from 'lucide-react';

const offerings = [
  { 
    title: 'Accountability', 
    icon: <UserCheck size={40} />,
    desc: 'Accountability and Transparency is always a priority at Chartians! Full Accountability at all times, PROFIT Days and LOSS days shared transparently at all times.' 
  },
  { 
    title: 'Professionalism', 
    icon: <Briefcase size={40} />,
    desc: 'We ensure the trade given is well inside the buying range. No Unnecessary Spamming.' 
  },
  { 
    title: 'Support', 
    icon: <Headphones size={40} />,
    desc: 'Timely Response to questions / doubts asked. If we have to give an Early Exit, we ensure that the price is always well inside the exit range given.' 
  },
];

const Proof: React.FC = () => {
  return (
    <div className="relative z-10 py-24 px-4 bg-surface-light">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-center text-4xl md:text-h2 font-bold mb-20 text-primary">Our Unique Offerings</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {offerings.map((item, idx) => (
             <div key={idx} className="flex flex-col items-center text-center p-8 bg-surface-light rounded-DEFAULT shadow-lg shadow-primary/5 border-t-4 border-primary hover:-translate-y-2 transition-transform duration-300 ease-spring">
                <div className="mb-8 text-primary p-4 bg-primary/5 rounded-full">
                  {item.icon}
                </div>
                <h4 className="text-2xl font-bold mb-6 text-ink">{item.title}</h4>
                <p className="text-lg text-ink/70 leading-relaxed">
                  {item.desc}
                </p>
             </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Proof;