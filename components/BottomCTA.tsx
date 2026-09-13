'use client'

import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const BottomCTA: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-paper" id="contact">
       <div className="max-w-7xl mx-auto bg-primary rounded-[48px] overflow-hidden relative border border-primary shadow-2xl">
          {/* Background Decorative Pattern */}
          <div className="absolute inset-0 z-0 opacity-20">
             <svg width="100%" height="100%">
               <pattern id="pattern-circles" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="translate(0,0) scale(1.5)">
                 <circle cx="20" cy="20" r="2" fill="white" />
               </pattern>
               <rect width="100%" height="100%" fill="url(#pattern-circles)" />
             </svg>
          </div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between p-12 md:p-24 gap-12">
             <div className="text-left md:w-1/2">
                <div className="inline-block px-4 py-1 rounded-full bg-white/10 text-white text-sm font-semibold mb-6 border border-white/20">
                  Get In Touch
                </div>
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  Have Questions? <br/>
                  We're Here.
                </h2>
                <p className="text-xl text-white/80 max-w-lg">
                  Reach out to us for any queries regarding our research services or plans.
                </p>
             </div>
             
             <div className="md:w-1/2 bg-paper rounded-[32px] p-8 shadow-xl w-full max-w-md">
                <div className="space-y-6">
                  
                  <div className="flex items-start gap-4">
                     <div className="p-3 bg-surface-light rounded-full text-primary shrink-0">
                       <MapPin size={24} />
                     </div>
                     <div>
                       <h4 className="font-bold text-ink">Address</h4>
                       <p className="text-ink/60 text-sm">509, Laxmi Enclave-2, Opp Gajera school, Katargaam, Surat – 395004 Gujarat, India</p>
                     </div>
                  </div>

                  <div className="flex items-center gap-4">
                     <div className="p-3 bg-surface-light rounded-full text-primary shrink-0">
                       <Phone size={24} />
                     </div>
                     <div>
                       <h4 className="font-bold text-ink">Phone</h4>
                       <p className="text-ink/60 text-sm">+91 9274387982</p>
                     </div>
                  </div>

                  <div className="flex items-center gap-4">
                     <div className="p-3 bg-surface-light rounded-full text-primary shrink-0">
                       <Mail size={24} />
                     </div>
                     <div>
                       <h4 className="font-bold text-ink">Email</h4>
                       <p className="text-ink/60 text-sm">chartiansresearch@gmail.com</p>
                     </div>
                  </div>

                  <div className="flex items-center gap-4">
                     <div className="p-3 bg-surface-light rounded-full text-primary shrink-0">
                       <Send size={24} />
                     </div>
                     <div>
                       <h4 className="font-bold text-ink">Telegram</h4>
                       <a href="https://t.me/chartiansadmin" target="_blank" rel="noreferrer" className="text-primary text-sm font-semibold hover:underline">@chartiansadmin</a>
                     </div>
                  </div>

                </div>
             </div>
          </div>
       </div>
    </section>
  );
};

export default BottomCTA;