'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import { springSheet } from '@/lib/motion'
import Logo from './Logo'

const Navigation: React.FC = () => {
  const pathname = usePathname()
  const router = useRouter()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const isHomePage = pathname === '/'
  const isWebinarPage = pathname === '/webinar'

  React.useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  React.useEffect(() => {
    if (!mobileMenuOpen) {
      document.body.style.overflow = ''
      return
    }
    document.body.style.overflow = 'hidden'
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false)
    }
    document.addEventListener('keydown', handleKey)
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false)
    if (!isHomePage) {
      router.push('/')
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 300)
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <nav
      className="fixed top-12 left-0 w-full z-50 px-2 py-3 md:px-4 md:py-4"
      aria-label="Main navigation"
    >
      <div className="glass-surface max-w-7xl mx-auto bg-paper/90 backdrop-blur-xl border border-ink/10 rounded-full px-4 md:px-6 py-3 flex items-center justify-between shadow-brutal">
        <Link
          href="/"
          onClick={() => { setMobileMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
          className="flex items-center gap-2 md:gap-3 text-ink shrink-0 group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-paper rounded-full"
          aria-label="The Chartians — Go to homepage"
        >
          <Logo className="w-9 h-9 md:w-12 md:h-12 rounded-full border border-primary/40 group-hover:-rotate-6 transition-transform duration-200" />
          <span className="font-display text-lg md:text-2xl font-bold tracking-tight truncate max-w-[140px] md:max-w-none">The Chartians</span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-1 text-sm font-semibold tracking-wide text-ink/60">
          <button onClick={() => scrollToSection('hero')} className="hover:text-ink hover:bg-ink/5 transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-full px-3 py-1.5">Home</button>
          <button onClick={() => scrollToSection('plans')} className="hover:text-ink hover:bg-ink/5 transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-full px-3 py-1.5">Plans</button>
          <button onClick={() => scrollToSection('features')} className="hover:text-ink hover:bg-ink/5 transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-full px-3 py-1.5">Why Us</button>
          <button onClick={() => scrollToSection('insights')} className="hover:text-ink hover:bg-ink/5 transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-full px-3 py-1.5">Insights</button>
          <Link href="/webinar" className={`transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-full px-3 py-1.5 hover:bg-ink/5 ${isWebinarPage ? 'text-primary' : 'hover:text-ink'}`}>Webinar</Link>
          <Link href="/blog" className="hover:text-ink hover:bg-ink/5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-full px-3 py-1.5">Blog</Link>
          <Link href="/about-us" className="hover:text-ink hover:bg-ink/5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-full px-3 py-1.5">About</Link>
        </div>

        <div className="flex items-center gap-2">
          {isWebinarPage ? (
            <button
              onClick={() => document.getElementById('course-cards')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
              className="brutal-press hidden lg:block bg-lime text-void px-5 py-2 md:px-6 md:py-2.5 rounded-full shadow-brutal-sm text-sm md:text-base font-extrabold shrink-0 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
            >
              Choose A Course
            </button>
          ) : (
            <Link
              href="/webinar"
              className="brutal-press hidden lg:block bg-lime text-void px-5 py-2 md:px-6 md:py-2.5 rounded-full shadow-brutal-sm text-sm md:text-base font-extrabold shrink-0 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
            >
              View Courses
            </Link>
          )}

          <a
            href="https://t.me/chartians"
            target="_blank"
            rel="noreferrer"
            className="brutal-press lg:hidden bg-lime text-void px-3 py-2 rounded-full shadow-brutal-sm text-xs font-extrabold whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
          >
            Join Free
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-[5px] rounded-full border border-ink/15 bg-paper hover:bg-surface-light active:scale-95 transition-[background-color,transform] duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-menu"
          >
            <span className={`block w-[18px] h-[2px] bg-ink rounded-full transition-all duration-300 origin-center ${mobileMenuOpen ? 'rotate-45 translate-y-[6px]' : ''}`} />
            <span className={`block w-[18px] h-[2px] bg-ink rounded-full transition-all duration-300 ${mobileMenuOpen ? 'opacity-0 scale-x-0' : ''}`} />
            <span className={`block w-[18px] h-[2px] bg-ink rounded-full transition-all duration-300 origin-center ${mobileMenuOpen ? '-rotate-45 -translate-y-[6px]' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence initial={false}>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-nav-menu"
            key="mobile-nav-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={springSheet}
            className="lg:hidden mt-3 mx-2 bg-paper border border-ink/10 rounded-[28px] shadow-brutal-lg overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-1">
              <button onClick={() => scrollToSection('hero')} className="text-left px-4 py-3.5 rounded-2xl text-base font-bold text-ink hover:bg-lime hover:text-void active:scale-[0.98] transition-[transform,background-color,color] duration-150">Home</button>
              <button onClick={() => scrollToSection('plans')} className="text-left px-4 py-3.5 rounded-2xl text-base font-bold text-ink hover:bg-lime hover:text-void active:scale-[0.98] transition-[transform,background-color,color] duration-150">Plans &amp; Pricing</button>
              <button onClick={() => scrollToSection('features')} className="text-left px-4 py-3.5 rounded-2xl text-base font-bold text-ink hover:bg-lime hover:text-void active:scale-[0.98] transition-[transform,background-color,color] duration-150">Why Chartians</button>
              <button onClick={() => scrollToSection('insights')} className="text-left px-4 py-3.5 rounded-2xl text-base font-bold text-ink hover:bg-lime hover:text-void active:scale-[0.98] transition-[transform,background-color,color] duration-150">Market Insights</button>
              <Link href="/webinar" onClick={() => setMobileMenuOpen(false)} className="px-4 py-3.5 rounded-2xl text-base font-bold text-ink hover:bg-lime hover:text-void active:scale-[0.98] transition-[transform,background-color,color] duration-150">Webinar &amp; Courses</Link>
              <Link href="/blog" onClick={() => setMobileMenuOpen(false)} className="px-4 py-3.5 rounded-2xl text-base font-bold text-ink hover:bg-lime hover:text-void active:scale-[0.98] transition-[transform,background-color,color] duration-150">Blog</Link>
              <Link href="/about-us" onClick={() => setMobileMenuOpen(false)} className="px-4 py-3.5 rounded-2xl text-base font-bold text-ink hover:bg-lime hover:text-void active:scale-[0.98] transition-[transform,background-color,color] duration-150">About Us</Link>
              <div className="h-px bg-ink/10 rounded-full my-2" />
              <a
                href="https://t.me/chartians"
                target="_blank"
                rel="noreferrer"
                className="block px-4 py-3.5 rounded-2xl text-sm font-extrabold bg-telegram text-white text-center active:scale-[0.98] transition-transform duration-150"
              >
                Join Free Telegram Channel
              </a>
              {isWebinarPage ? (
                <button
                  onClick={() => { setMobileMenuOpen(false); document.getElementById('course-cards')?.scrollIntoView({ behavior: 'smooth' }) }}
                  className="px-4 py-3.5 rounded-2xl text-sm font-extrabold bg-lime text-void text-center active:scale-[0.98] transition-transform duration-150"
                >
                  Choose A Course
                </button>
              ) : (
                <Link
                  href="/webinar"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-3.5 rounded-2xl text-sm font-extrabold bg-lime text-void text-center active:scale-[0.98] transition-transform duration-150"
                >
                  View All Courses
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navigation
