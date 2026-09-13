import type { Transition } from 'framer-motion'

/**
 * Apple-style spring presets (WWDC 2018, "Designing Fluid Interfaces").
 * Damping controls overshoot (1.0 = critically damped, no bounce).
 * Response is settle speed in seconds — not a fixed duration.
 */

/** Default UI spring — graceful, no overshoot. Use for anything that isn't gesture-driven. */
export const springDefault: Transition = { type: 'spring', bounce: 0, duration: 0.4 }

/** Momentum spring — slight bounce, reserved for interactions that carried velocity (flick, throw, release). */
export const springMomentum: Transition = { type: 'spring', bounce: 0.2, duration: 0.4 }

/** Drawer / sheet spring — matches Apple's shipped damping ~0.8, response 0.3. */
export const springSheet: Transition = { type: 'spring', bounce: 0.25, duration: 0.3 }

/** Fade/slide-in for scroll-triggered reveals — critically damped, slightly slower settle. */
export const springReveal: Transition = { type: 'spring', bounce: 0, duration: 0.5 }

/** Standard entrance variants: opacity + a small upward drift, spring-driven. */
export const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
}

/**
 * Brutalist "slam in" reveal — exponential ease-out, no bounce. Used for
 * whileInView reveals across the redesign instead of springs: a real object
 * decelerating hard into place reads more "brutalist" than a springy settle.
 */
export const slamIn: Transition = { duration: 0.5, ease: [0.16, 1, 0.3, 1] }

export const slamInDelay = (i: number, step = 0.08): Transition => ({
  duration: 0.5,
  ease: [0.16, 1, 0.3, 1],
  delay: i * step,
})
