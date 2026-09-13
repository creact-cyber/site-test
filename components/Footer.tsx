import React from 'react';
import { Twitter, Instagram, Send, Linkedin } from 'lucide-react';
import Logo from './Logo';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 bg-void text-ink border-t border-ink/10 pt-12 pb-8 md:pt-20 md:pb-12 px-4" role="contentinfo">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-12 md:mb-20">

          {/* Brand Column */}
          <div className="col-span-1 md:col-span-2 pr-8">
             <div className="flex items-center gap-2 mb-6 text-lime">
               <Logo className="w-10 h-10 rounded-full border-2 border-lime" />
               <span className="font-display text-xl md:text-2xl font-bold leading-tight">CHARTIANS MARKET RESEARCH PRIVATE LIMITED</span>
             </div>
             <p className="text-white/60 text-sm md:text-base mb-6 md:mb-8 leading-relaxed max-w-md">
               We simplify technical analysis. SEBI Registered Research Analyst firm providing unbiased, logic-based market research.
               <br/><br/>
               <span className="font-semibold text-white">SEBI Registration No: INH000024231</span>
               <br/>
               <span className="font-semibold text-white">BSE Enlistment: 5641</span>
               <br/>
               <a href="mailto:chartiansresearch@gmail.com" className="text-lime underline focus:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-ink rounded">chartiansresearch@gmail.com</a>
             </p>
             <div className="flex gap-3">
              <a href="https://t.me/chartians" target="_blank" rel="noopener noreferrer" aria-label="Join our Telegram channel" className="brutal-press w-10 h-10 md:w-12 md:h-12 bg-ink/10 rounded-full flex items-center justify-center hover:bg-lime hover:text-void transition-colors text-ink border border-ink/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-void">
                <Send size={20} aria-hidden="true" />
              </a>
              <a href="https://x.com/chartians" target="_blank" rel="noopener noreferrer" aria-label="Follow us on X (Twitter)" className="brutal-press w-10 h-10 md:w-12 md:h-12 bg-ink/10 rounded-full flex items-center justify-center hover:bg-lime hover:text-void transition-colors text-ink border border-ink/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-void">
                <Twitter size={20} aria-hidden="true" />
              </a>
              <a href="https://www.instagram.com/the.chartians/" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Instagram" className="brutal-press w-10 h-10 md:w-12 md:h-12 bg-ink/10 rounded-full flex items-center justify-center hover:bg-lime hover:text-void transition-colors text-ink border border-ink/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-void">
                <Instagram size={20} aria-hidden="true" />
              </a>
               <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Connect with us on LinkedIn" className="brutal-press w-10 h-10 md:w-12 md:h-12 bg-ink/10 rounded-full flex items-center justify-center hover:bg-lime hover:text-void transition-colors text-ink border border-ink/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-void">
                <Linkedin size={20} aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Quick Links 1 — Legal */}
          <div>
            <h3 className="font-display font-bold mb-6 text-lime text-xl">Legal</h3>
            <ul className="space-y-4 text-white/60 text-base">
              <li><Link href="/legal#disclaimer" className="hover:text-lime transition-colors focus:outline-none focus-visible:underline">Disclaimer & MITC</Link></li>
              <li><Link href="/legal#terms" className="hover:text-lime transition-colors focus:outline-none focus-visible:underline">Terms & Conditions</Link></li>
              <li><Link href="/legal#privacy" className="hover:text-lime transition-colors focus:outline-none focus-visible:underline">Privacy Policy</Link></li>
              <li><Link href="/legal#refund" className="hover:text-lime transition-colors focus:outline-none focus-visible:underline">Refund Policy</Link></li>
            </ul>
          </div>

          {/* Quick Links 2 — Compliance */}
          <div>
            <h3 className="font-display font-bold mb-6 text-lime text-xl">Compliance</h3>
             <ul className="space-y-4 text-white/60 text-base">
              <li><Link href="/compliance#grievance" className="hover:text-lime transition-colors focus:outline-none focus-visible:underline">Grievance Redressal</Link></li>
              <li><Link href="/compliance#complaints" className="hover:text-lime transition-colors focus:outline-none focus-visible:underline">Complaint Board</Link></li>
              <li><Link href="/compliance#charter" className="hover:text-lime transition-colors focus:outline-none focus-visible:underline">Investor Charter</Link></li>
              <li><a href="https://scores.gov.in/" target="_blank" rel="noopener noreferrer" className="hover:text-lime transition-colors focus:outline-none focus-visible:underline">SCORES Portal</a></li>
              <li><a href="https://smartodr.in/" target="_blank" rel="noopener noreferrer" className="hover:text-lime transition-colors focus:outline-none focus-visible:underline">SMART ODR</a></li>
            </ul>
          </div>

        </div>

        <div className="border-t-2 border-white/15 pt-8">
           <div className="text-white/50 text-sm mb-6 space-y-2">
             <p><strong className="text-white/70">Registered Office:</strong>  Surat – 395004 Gujarat, India.</p>
             <p><strong className="text-white/70">Disclaimer:</strong> Investments in securities market are subject to market risks. Read all the related documents carefully before investing. Registration granted by SEBI and certification from NISM in no way guarantee performance of the intermediary or provide any assurance of returns to investors.</p>
           </div>
          <p className="text-white/40 text-sm font-semibold text-center md:text-left">© {new Date().getFullYear()} CHARTIANS MARKET RESEARCH PRIVATE LIMITED. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
