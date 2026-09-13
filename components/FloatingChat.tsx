'use client'

import React from 'react';
import { MessageCircle } from 'lucide-react';

const FloatingChat: React.FC<{ hideOnMobile?: boolean }> = ({ hideOnMobile }) => {
  return (
    <aside aria-label="Support chat">
      <a
        href="https://t.me/chartiansadmin"
        target="_blank"
        rel="noopener noreferrer"
        className={`glass-surface brutal-press fixed bottom-6 right-6 z-50 items-center gap-2 bg-lime/90 backdrop-blur-md text-ink px-5 py-3 md:px-6 md:py-4 rounded-full border border-ink/10 shadow-brutal font-extrabold focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
          hideOnMobile ? 'hidden md:flex' : 'flex'
        }`}
        aria-label="Chat with Support on Telegram"
      >
        <MessageCircle size={24} />
        <span className="font-extrabold">DM Support</span>
      </a>
    </aside>
  );
};

export default FloatingChat;
