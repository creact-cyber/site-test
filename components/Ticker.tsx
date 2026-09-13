'use client'

import React, { useState } from 'react';
import { ArrowUp, ArrowDown, Minus, Pause, Play } from 'lucide-react';

const Ticker: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);

  const marketData = [
    { name: "NIFTY 50", value: "24,852.15", change: "+1.25%", status: "up" },
    { name: "BANK NIFTY", value: "52,450.30", change: "-0.45%", status: "down" },
    { name: "SENSEX", value: "81,200.75", change: "+0.98%", status: "up" },
    { name: "FIN NIFTY", value: "23,105.40", change: "+0.15%", status: "up" },
    { name: "INDIA VIX", value: "13.45", change: "-2.10%", status: "down" },
    { name: "CRUDE OIL", value: "6,450", change: "+1.10%", status: "up" },
    { name: "GOLD", value: "72,500", change: "+0.05%", status: "up" },
    { name: "SILVER", value: "91,200", change: "-0.30%", status: "down" },
    { name: "USD/INR", value: "83.50", change: "+0.02%", status: "up" },
  ];

  return (
    <div
      className="fixed top-0 left-0 w-full bg-void text-ink overflow-hidden h-12 flex items-center border-b border-ink/10 z-[60]"
      role="region"
      aria-label="Live market data ticker"
      aria-live="off"
    >
      {/* Pause/Play button for WCAG 2.2.2 */}
      <button
        onClick={() => setIsPaused(!isPaused)}
        className="shrink-0 w-12 h-12 flex items-center justify-center bg-lime text-void hover:bg-sun transition-colors border-r border-ink/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-inset z-10"
        aria-label={isPaused ? 'Play ticker' : 'Pause ticker'}
      >
        {isPaused ? <Play size={14} aria-hidden="true" /> : <Pause size={14} aria-hidden="true" />}
      </button>

      <div className={`flex whitespace-nowrap ${isPaused ? '' : 'animate-ticker'} cursor-default w-full font-mono`}>
        {/* Repeat enough times to fill screen and allow scrolling loop */}
        {[...Array(6)].map((_, i) => (
          <div key={i} className="flex items-center" aria-hidden={i > 0 ? "true" : undefined}>
            {marketData.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 px-8 border-r border-ink/10 last:border-r-0">
                <span className="font-bold text-sm tracking-wide text-ink/50">{item.name}</span>
                <span className="font-medium">{item.value}</span>
                <span className={`flex items-center gap-1 text-xs font-bold px-1.5 py-0.5 rounded ${
                  item.status === 'up' ? 'text-lime bg-lime/10' :
                  item.status === 'down' ? 'text-coral bg-coral/10' : 'text-ink/50'
                }`}>
                  {item.status === 'up' && <ArrowUp size={12} strokeWidth={3} aria-hidden="true" />}
                  {item.status === 'down' && <ArrowDown size={12} strokeWidth={3} aria-hidden="true" />}
                  {item.status === 'neutral' && <Minus size={12} strokeWidth={3} aria-hidden="true" />}
                  <span className="sr-only">{item.status === 'up' ? 'Up' : item.status === 'down' ? 'Down' : 'Unchanged'}</span>
                  {item.change}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
      <style>{`
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-ticker {
          animation: ticker 60s linear infinite;
        }
        .animate-ticker:hover {
          animation-play-state: paused;
        }
        /* WCAG 2.3.3 — Respect user motion preferences */
        @media (prefers-reduced-motion: reduce) {
          .animate-ticker {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
};

export default Ticker;