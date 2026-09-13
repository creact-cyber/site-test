'use client'

import React from 'react';
import { MousePointerClick, FileCheck, CheckCircle, ArrowRight, AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';
import { slamInDelay } from '@/lib/motion';

const steps = [
  { icon: MousePointerClick, title: 'Click Join Now', bg: 'bg-primary/[0.07]', body: <>Click on the <strong className="text-primary">"Subscribe"</strong> button on your preferred plan to start your registration process on our secure payment portal.</> },
  { icon: FileCheck, title: 'Complete KYC', bg: 'bg-lime/[0.08]', body: <>Enter your name <strong className="text-primary">exactly as it appears on your PAN card</strong> (including middle name if any). Complete Aadhaar OTP verification.</> },
  { icon: CheckCircle, title: 'Make Payment & Get Access', bg: 'bg-coral/[0.08]', body: <>Complete your payment securely. Your <strong className="text-primary">Telegram group invite link</strong> will be sent instantly via <strong>WhatsApp, SMS, and Email</strong>.</> },
];

const HowToJoin: React.FC = () => {
  return (
    <section className="py-20 md:py-32 px-4 bg-paper" id="how-to-join">
      <div className="max-w-7xl mx-auto text-center">

        {/* Header */}
        <div className="mb-12 md:mb-20">
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary text-canvas text-xs font-extrabold uppercase tracking-widest mb-4 shadow-brutal-sm font-mono">
             Simple 3-Step Process
          </div>
          <h2 className="font-display text-3xl md:text-6xl font-bold text-ink mb-6">
            How to <span className="text-primary">Join</span>
          </h2>
          <p className="text-ink/60 max-w-2xl mx-auto text-lg md:text-xl">
            Getting started is quick and easy. Follow these simple steps to join our Premium Telegram Group.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 mb-16 mt-8 md:mt-0">
          {steps.map((step, idx) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={slamInDelay(idx)}
              className={`${step.bg} p-6 md:p-10 rounded-[24px] md:rounded-[28px] border border-ink/10 shadow-brutal-lg relative text-left`}
            >
              <div className="absolute -top-5 left-8 bg-sun text-void font-extrabold px-6 py-2 rounded-full text-xs font-mono uppercase tracking-wide">
                Step {idx + 1}
              </div>
              <div className="w-16 h-16 bg-paper border border-ink/10 rounded-2xl flex items-center justify-center text-primary mb-6 mt-6">
                <step.icon size={32} />
              </div>
              <h3 className="font-display text-xl md:text-2xl font-bold text-ink mb-3 md:mb-4">{step.title}</h3>
              <p className="text-ink/70 leading-relaxed text-sm md:text-base">
                {step.body}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA and Warning */}
        <div className="flex flex-col items-center gap-8 px-2 md:px-0">
          <a href="#plans" onClick={(e) => { e.preventDefault(); document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth' }); }} className="brutal-press px-8 py-4 md:px-10 md:py-5 bg-lime text-void rounded-full font-extrabold text-lg md:text-xl shadow-brutal flex items-center justify-center gap-3">
            Start Your Journey Now <ArrowRight size={24} />
          </a>

          <div className="flex items-start md:items-center gap-3 text-ink bg-sun/10 px-6 py-4 rounded-xl border border-sun/30 text-sm md:text-base max-w-2xl text-left md:text-center w-full md:w-auto">
            <AlertTriangle size={20} className="shrink-0 mt-0.5 md:mt-0 text-sun" />
            <p>Your name must match exactly with your PAN card for successful KYC verification. Keep your Aadhaar-linked mobile handy for OTP.</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HowToJoin;
