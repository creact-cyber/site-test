'use client'

import React from 'react';
import { Mail, ArrowRight, CheckCircle, Clock, Archive } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { slamInDelay } from '@/lib/motion';

const ComplaintOverview: React.FC = () => {
  const stats = [
    { label: "Received during the month", value: "0", icon: Mail, bgColor: "bg-primary/15", iconColor: "text-primary" },
    { label: "Carried Forward", value: "0", icon: Archive, bgColor: "bg-ink/10", iconColor: "text-ink" },
    { label: "Resolved during the month", value: "0", icon: CheckCircle, bgColor: "bg-lime/15", iconColor: "text-lime" },
    { label: "Pending at end of month", value: "0", icon: Clock, bgColor: "bg-coral/15", iconColor: "text-coral" },
  ];

  return (
    <section className="py-16 px-4 bg-paper border-t border-ink/10" aria-labelledby="complaints-overview-heading">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
                <div className="inline-block px-4 py-1.5 rounded-full border border-ink/15 bg-surface-light text-ink/70 text-xs font-extrabold uppercase tracking-widest mb-4 font-mono">
                    Transparency
                </div>
                <h2 id="complaints-overview-heading" className="font-display text-3xl md:text-4xl font-bold text-ink mb-2">
                    Complaints Overview
                </h2>
                <p className="text-ink/60 text-lg">
                    Data for the month ending June 2026
                </p>
            </div>
            <Link href="/compliance#complaints" className="brutal-press hidden md:flex items-center gap-2 text-ink font-bold px-6 py-3 rounded-full border border-ink/15 bg-surface-light shadow-brutal-sm">
                View Detailed Board <ArrowRight size={20} />
            </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={slamInDelay(idx, 0.08)}
                  className="bg-surface-light p-6 rounded-[20px] border border-ink/10 shadow-brutal"
                >
                    <div className={`w-14 h-14 rounded-2xl ${stat.bgColor} flex items-center justify-center mb-6`}>
                        <stat.icon size={24} className={stat.iconColor} />
                    </div>
                    <p className="text-ink/55 text-sm font-bold mb-2 uppercase tracking-wide">{stat.label}</p>
                    <p className="font-mono text-5xl font-bold text-ink leading-none">{stat.value}</p>
                </motion.div>
            ))}
        </div>

        <div className="mt-10 md:hidden text-center">
             <Link href="/compliance#complaints" className="brutal-press inline-flex items-center gap-2 text-ink font-bold bg-surface-light border border-ink/15 px-6 py-3 rounded-full shadow-brutal-sm">
                View Detailed Board <ArrowRight size={20} />
            </Link>
        </div>
      </div>
    </section>
  );
};

export default ComplaintOverview;
