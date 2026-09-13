'use client'

import React from 'react';
import { TrendingUp, Eye, BookOpen, Shield } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      
      <div className="text-left mb-16 border-l-4 border-primary pl-6">
        <h2 className="text-4xl md:text-h2 font-bold mb-4 text-primary">What Makes People Choose Us?</h2>
        <p className="text-xl md:text-body text-ink/70">Our unique approach to the market.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Feature 1 */}
        <div className="bg-surface-light p-8 rounded-DEFAULT border border-surface-dark shadow-sm hover:shadow-md transition-shadow duration-300 group">
          <div className="w-16 h-16 bg-primary/10 rounded-DEFAULT flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
            <TrendingUp size={32} />
          </div>
          <h3 className="text-2xl font-bold mb-4 text-primary">Expiry Special Trades</h3>
          <p className="text-ink/70 text-lg leading-relaxed">
            With our proprietary setup, we share Expiry Special Trades designed for low risk with the potential to give impressive gains!
          </p>
        </div>

        {/* Feature 2 */}
        <div className="bg-surface-light p-8 rounded-DEFAULT border border-surface-dark shadow-sm hover:shadow-md transition-shadow duration-300 group">
          <div className="w-16 h-16 bg-primary/10 rounded-DEFAULT flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
            <Eye size={32} />
          </div>
          <h3 className="text-2xl font-bold mb-4 text-primary">Catching Breakouts</h3>
          <p className="text-ink/70 text-lg leading-relaxed">
            We take pride in spotting breakouts before they happen—giving us the edge that sets us apart from the herd!
          </p>
        </div>

        {/* Feature 3 */}
        <div className="bg-surface-light p-8 rounded-DEFAULT border border-surface-dark shadow-sm hover:shadow-md transition-shadow duration-300 group">
          <div className="w-16 h-16 bg-primary/10 rounded-DEFAULT flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
            <BookOpen size={32} />
          </div>
          <h3 className="text-2xl font-bold mb-4 text-primary">Learn & Earn Philosophy</h3>
          <p className="text-ink/70 text-lg leading-relaxed">
            We break down the logic behind every trade we share, empowering you to earn while you learn!
          </p>
        </div>

        {/* Feature 4 */}
        <div className="bg-surface-light p-8 rounded-DEFAULT border border-surface-dark shadow-sm hover:shadow-md transition-shadow duration-300 group">
          <div className="w-16 h-16 bg-primary/10 rounded-DEFAULT flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
            <Shield size={32} />
          </div>
          <h3 className="text-2xl font-bold mb-4 text-primary">Accountability</h3>
          <p className="text-ink/70 text-lg leading-relaxed">
            Total transparency, always! We share both PROFIT and LOSS days, keeping it real every step of the way.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Features;