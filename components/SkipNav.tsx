'use client'

import React from 'react';

/**
 * SkipNav — WCAG 2.4.1 (Bypass Blocks)
 * Visually hidden link that becomes visible on keyboard focus,
 * allowing users to skip directly to main content.
 */
const SkipNav: React.FC = () => {
  return (
    <nav aria-label="Skip navigation">
      <a
        href="#main-content"
        className="skip-nav-link"
        onClick={(e) => {
          e.preventDefault();
          const main = document.getElementById('main-content');
          if (main) {
            main.focus();
            main.scrollIntoView({ behavior: 'smooth' });
          }
        }}
      >
        Skip to main content
      </a>
    </nav>
  );
};

export default SkipNav;
