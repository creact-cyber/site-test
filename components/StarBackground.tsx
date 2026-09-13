'use client'

import React from 'react';

const StarBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none -z-10 overflow-hidden bg-canvas">
      {/* Fine data-grid texture — Bloomberg-terminal reference, not a decorative gradient */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(#ECE7DA 1px, transparent 1px), linear-gradient(90deg, #ECE7DA 1px, transparent 1px)`,
          backgroundSize: '64px 64px',
        }}
      ></div>

      {/* Faint dot texture beneath the grid for depth */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `radial-gradient(#ECE7DA 1px, transparent 1px)`,
          backgroundSize: '22px 22px',
        }}
      ></div>

      {/* Muted brand-color glows — soft depth behind the glass chrome */}
      <div className="absolute top-[-15%] right-[-10%] w-[700px] h-[700px] bg-primary/[0.07] rounded-full blur-[140px]"></div>
      <div className="absolute bottom-[-15%] left-[-10%] w-[600px] h-[600px] bg-lime/[0.06] rounded-full blur-[140px]"></div>
      <div className="absolute top-[35%] left-[45%] w-[400px] h-[400px] bg-coral/[0.05] rounded-full blur-[130px]"></div>
    </div>
  );
};

export default StarBackground;
