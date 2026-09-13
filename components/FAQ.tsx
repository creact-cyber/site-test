'use client'

import React, { useState } from 'react';
import { ChevronDown, ChevronUp, MessageCircle, ArrowRight } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { springSheet } from '@/lib/motion';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is The Chartians' SEBI Registration number?",
      answer: "Our SEBI Registration number is INH000024231. We are a fully compliant Research Analyst firm dedicated to providing transparent, logic-based market analysis and educational content."
    },
    {
      question: "How do I receive trading calls?",
      answer: "All our research and trading setups are shared exclusively via our private Telegram channels. Once your payment is successful, you will receive an instant invite link via WhatsApp, SMS, and Email to join the channel immediately."
    },
    {
      question: "Do you provide guaranteed returns?",
      answer: "No. As a SEBI registered intermediary, we do not and cannot promise guaranteed returns. Stock market trading involves inherent risks. We provide high-probability setups based on technical analysis, but we never claim to offer fixed or guaranteed profits."
    },
    {
      question: "Which segment is best for beginners?",
      answer: "If you are new to the markets, we highly recommend starting with our Swing Trading plan (Cash Stocks). It carries relatively lower risk compared to FNO (Futures & Options) and gives you ample time to execute trades and learn price action logic."
    },
    {
      question: "What should I do if I don't receive the group invite link after payment?",
      answer: "The invite link is automated and sent immediately upon payment success. However, in rare cases of network delay, please check your Email Spam/Promotions folder. If you still don't find it within 10 minutes, please contact our support team or DM us on Telegram."
    },
    {
      question: "Can I share my group access with a friend or family member?",
      answer: "No. The subscription is strictly for a single user. Forwarding messages or sharing channel access is a violation of our terms and policies, which will lead to immediate termination of services without a refund."
    },
    {
      question: "What happens if my payment fails or gets deducted but I don't get access?",
      answer: "If the amount is deducted but the transaction failed, it is usually auto-refunded by the gateway within 5-7 working days. If the transaction was successful, please share the payment ID with our support team to get your access manually approved."
    }
  ];

  return (
    <section className="py-20 md:py-32 px-4 bg-paper" id="faq">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-16">

        {/* Left Side - Header */}
        <div className="lg:w-1/3">
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary text-canvas text-sm font-extrabold mb-6 border border-ink/10 shadow-brutal-sm">
            FAQ
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-ink mb-4 md:mb-6">
            Common Questions
          </h2>
          <p className="text-base md:text-xl text-ink/60 mb-6 md:mb-10 leading-relaxed">
            New to trading or our services? Here are answers to frequently asked questions regarding our plans and policies.
          </p>

          <div className="bg-primary/[0.07] p-6 md:p-8 rounded-[24px] md:rounded-[32px] border border-ink/10 shadow-brutal-lg">
             <h3 className="font-display text-xl font-bold text-ink mb-2">Still have questions?</h3>
             <p className="text-ink/60 mb-6 text-lg">Our support team is available 9 AM – 6 PM (Mon-Sat).</p>
             <a
               href="https://t.me/chartiansadmin"
               target="_blank"
               rel="noreferrer"
               className="brutal-press inline-flex items-center gap-2 text-ink font-extrabold bg-paper border border-ink/10 rounded-full px-5 py-2.5 text-base shadow-brutal-sm"
             >
               <MessageCircle size={20} /> DM on Telegram <ArrowRight size={16} />
             </a>
          </div>
        </div>

        {/* Right Side - Accordion */}
        <div className="lg:w-2/3 flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-surface-light rounded-2xl border transition-[box-shadow] duration-200 ${openIndex === index ? 'border-primary/40 shadow-brutal' : 'border-ink/10 shadow-brutal-sm'}`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left p-6 md:p-8 flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-2xl"
                aria-expanded={openIndex === index}
                aria-controls={`faq-panel-${index}`}
                id={`faq-btn-${index}`}
              >
                <span className={`text-base md:text-xl font-bold transition-colors ${openIndex === index ? 'text-primary' : 'text-ink'}`}>
                  {faq.question}
                </span>
                <span className={`shrink-0 w-9 h-9 rounded-full border border-ink/10 flex items-center justify-center transition-colors ${openIndex === index ? 'bg-lime' : 'bg-paper'}`}>
                  {openIndex === index ? (
                    <ChevronUp className="text-ink" size={20} />
                  ) : (
                    <ChevronDown className="text-ink" size={20} />
                  )}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    id={`faq-panel-${index}`}
                    role="region"
                    aria-labelledby={`faq-btn-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={springSheet}
                    className="overflow-hidden"
                  >
                    <div className="p-4 md:p-8 pt-0 text-ink/70 leading-relaxed border-t border-transparent text-sm md:text-base">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;