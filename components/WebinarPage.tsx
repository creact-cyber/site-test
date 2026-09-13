'use client'

import React from 'react';
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Layers3,
  Radar,
  ShieldCheck,
  Star,
  Target,
  Workflow,
} from 'lucide-react';
import { motion } from 'framer-motion';

type Course = {
  id: 'index' | 'consolidation' | 'mastery';
  title: string;
  badge: string;
  originalPrice: string;
  price: string;
  summary: string;
  bestFor: string;
  bullets: string[];
  ctaLabel: string;
  href?: string;
  featured?: boolean;
  icon: React.ReactNode;
};

// Swap these with the final checkout URLs when ready.
const CONTACT_LINK = 'https://t.me/chartiansadmin';
const COURSE_LINKS = {
  index: CONTACT_LINK,
  consolidation: CONTACT_LINK,
  mastery: CONTACT_LINK,
};

const courses: Course[] = [
  {
    id: 'index',
    title: 'Index Trading',
    badge: 'Nifty + Bank Nifty',
    originalPrice: '₹18,999',
    price: '₹12,999',
    summary: 'Clean index structure for traders who mainly watch Nifty and Bank Nifty.',
    bestFor: 'Choose this if indices are your main market.',
    bullets: ['Bias and levels', 'Entry and stop structure', 'Session planning'],
    ctaLabel: 'Choose Index Trading',
    href: COURSE_LINKS.index,
    icon: <Layers3 className="h-5 w-5" />,
  },
  {
    id: 'consolidation',
    title: 'Consolidation Explosion Setup',
    badge: 'Most recommended',
    originalPrice: '₹24,999',
    price: '₹17,999',
    summary: 'A focused stock-options course for reading tight ranges before a breakout.',
    bestFor: 'Start here if you often enter late or without a clear plan.',
    bullets: ['Spot compression zones', 'Read pressure build-up', 'Define trigger and invalidation', 'Trade with risk first'],
    ctaLabel: 'Choose This Course',
    href: COURSE_LINKS.consolidation,
    featured: true,
    icon: <Radar className="h-5 w-5" />,
  },
  {
    id: 'mastery',
    title: 'Full Price Action Mastery',
    badge: 'Complete path',
    originalPrice: '₹49,999',
    price: '₹35,999',
    summary: 'Index Trading, the breakout setup, and swing trading together.',
    bestFor: 'Choose this if you want the full course path in one place.',
    bullets: ['Index Trading included', 'Breakout setup included', 'Swing trading included'],
    ctaLabel: 'Choose Full Mastery',
    href: COURSE_LINKS.mastery,
    icon: <Workflow className="h-5 w-5" />,
  },
];

const breakoutBars = [32, 40, 36, 42, 39, 43, 40, 46, 54, 76, 116, 148];
const featuredCourse = courses.find((course) => course.featured);
const supportingCourses = courses.filter((course) => !course.featured);
const webinarTestimonials = [
  'The range, pressure, trigger framework made the setup easier to study.',
  'Simple teaching. Clear examples. Risk comes first, not excitement.',
  'I stopped chasing every candle and started waiting for cleaner structure.',
  'The checklist helped me plan entries, exits, and invalidation before acting.',
  'No fancy indicators. Just price action explained in a practical way.',
  'The before, during, after breakout flow is easy to remember during live charts.',
  'Good for traders who want a structured stock-options process.',
  'The course keeps the language simple and the rules practical.',
  'It helped me understand when a range is worth watching and when to skip.',
];
const testimonialColumns = [
  webinarTestimonials.slice(0, 3),
  webinarTestimonials.slice(3, 6),
  webinarTestimonials.slice(6, 9),
];

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
};

const smoothTransition = {
  duration: 0.55,
  ease: [0.22, 1, 0.36, 1] as const,
};

const scrollToCourses = () => {
  document.getElementById('course-cards')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

const scrollToSetup = () => {
  document.getElementById('consolidation-focus')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

const SectionLabel: React.FC<{ children: React.ReactNode; dark?: boolean }> = ({ children, dark }) => (
  <div
    className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[0.68rem] font-extrabold uppercase tracking-[0.14em] ${
      dark
        ? 'border-white/16 bg-white/10 text-white/84'
        : 'border-ink/10 bg-void/90 text-ink/68 shadow-[0_10px_26px_-20px_rgba(0,0,0,0.45)]'
    }`}
  >
    <span className={`h-2 w-2 rounded-full ${dark ? 'bg-[#D4AF37]' : 'bg-[#F2B705]'}`} />
    {children}
  </div>
);

const ComplianceBar: React.FC = () => (
  <div className="mt-10 md:mt-8 border-y border-ink/10 bg-void/90 px-4 py-3 text-sm text-ink/70 shadow-[0_12px_36px_-30px_rgba(0,0,0,0.4)] backdrop-blur">
    <div className="mx-auto flex max-w-6xl flex-col gap-3 md:flex-row md:items-center md:justify-center">
      <div className="inline-flex w-fit items-center gap-2 rounded-full bg-void px-3 py-1.5 text-[0.68rem] font-extrabold uppercase tracking-[0.14em] text-white">
        <ShieldCheck className="h-4 w-4" />
        SEBI RA
      </div>
      <div className="flex flex-wrap gap-x-3 gap-y-1 leading-6">
        <span className="font-extrabold text-ink">INH000024231</span>
        <span>Educational content only.</span>
        <span>No assured returns.</span>
        <span>Market risk applies.</span>
      </div>
    </div>
  </div>
);

const ActionButton: React.FC<{
  label: string;
  href?: string;
  featured?: boolean;
  light?: boolean;
  onClick?: () => void;
}> = ({ label, href, featured, light, onClick }) => {
  const className = `inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg px-5 py-3 text-base font-extrabold transition duration-200 md:w-auto ${
    featured
      ? 'bg-void text-white shadow-[0_18px_42px_-22px_rgba(0,0,0,0.82)] hover:-translate-y-0.5 hover:bg-[#1a1d23] hover:shadow-[0_24px_54px_-24px_rgba(0,0,0,0.86)]'
      : light
        ? 'border border-white/18 bg-paper text-ink shadow-[0_18px_44px_-28px_rgba(0,0,0,0.45)] hover:-translate-y-0.5'
        : 'border border-ink/14 bg-paper text-ink shadow-[0_16px_38px_-30px_rgba(0,0,0,0.45)] hover:-translate-y-0.5 hover:border-ink/34'
  }`;

  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={className}>
        {label}
        <ArrowRight className="h-4 w-4" />
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={className}>
      {label}
      <ArrowRight className="h-4 w-4" />
    </button>
  );
};

const BreakoutChart: React.FC<{ compact?: boolean }> = ({ compact }) => (
  <div className={`relative overflow-hidden ${compact ? 'py-2' : 'py-4'}`}>
    <motion.div
      initial={{ opacity: 0, scaleX: 0.86 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ ...smoothTransition, delay: 0.18 }}
      className="absolute left-[28%] right-[21%] top-8 bottom-10 origin-center rounded-lg border border-dashed border-[#D4AF37]/70 bg-[#D4AF37]/8"
    />
    <div className={`relative flex items-end gap-1.5 ${compact ? 'h-32' : 'h-44 md:h-56'}`}>
      {breakoutBars.map((height, index) => {
        const isSetup = index >= 3 && index <= 8;
        const isRelease = index >= 10;
        return (
          <motion.div
            key={`${height}-${index}`}
            initial={{ opacity: 0, y: 18, scaleY: 0.86 }}
            whileInView={{ opacity: 1, y: 0, scaleY: 1 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.38, delay: index * 0.035, ease: [0.22, 1, 0.36, 1] }}
            className={`flex-1 origin-bottom rounded-t-md ${
              isRelease ? 'bg-[#D4AF37]' : isSetup ? 'bg-[#D4AF37]/45' : 'bg-ink/15'
            }`}
            style={{ height: `${height}px` }}
          />
        );
      })}
    </div>
    {!compact && (
      <div className="mt-4 grid grid-cols-3 gap-2 text-xs font-extrabold uppercase tracking-[0.1em] text-white/68">
        <span>Compression</span>
        <span className="text-center text-[#D4AF37]">Pressure</span>
        <span className="text-right">Release</span>
      </div>
    )}
  </div>
);

const HeroVisual: React.FC = () => (
  <motion.div
    variants={fadeUp}
    initial="hidden"
    animate="visible"
    transition={{ ...smoothTransition, delay: 0.18 }}
    className="mt-10 overflow-hidden rounded-lg bg-void p-4 text-white shadow-[0_34px_90px_-46px_rgba(0,0,0,0.88)] md:p-6"
  >
    <div className="grid gap-4 border-b border-white/12 pb-4 md:grid-cols-[1fr_0.86fr] md:items-end">
      <div>
        <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-[#D4AF37]">Featured setup</p>
        <h2 className="mt-2 text-2xl font-extrabold leading-tight text-white md:text-4xl">
          The Breakout Setup
        </h2>
      </div>
      <p className="text-sm font-semibold leading-6 text-white/72 md:text-base">
        Read compression first. Wait for pressure. Act only when structure appears.
      </p>
    </div>

    <BreakoutChart />

    <div className="grid gap-3 border-t border-white/12 pt-4 sm:grid-cols-3">
      {[
        ['01', 'Tight range'],
        ['02', 'Pressure build-up'],
        ['03', 'Defined trigger'],
      ].map(([number, label]) => (
        <div key={label} className="rounded-lg bg-white/8 px-4 py-3">
          <p className="text-[0.68rem] font-extrabold text-[#D4AF37]">{number}</p>
          <p className="mt-1 text-sm font-extrabold text-white">{label}</p>
        </div>
      ))}
    </div>
  </motion.div>
);

const CourseCard: React.FC<{ course: Course; large?: boolean }> = ({ course, large }) => (
  <motion.article
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    transition={smoothTransition}
    whileHover={{ y: -4 }}
    className={`flex h-full flex-col rounded-lg border bg-paper p-5 shadow-[0_22px_60px_-46px_rgba(0,0,0,0.55)] transition-shadow duration-200 md:p-6 ${
      course.featured
        ? 'border-[#F2B705]/70 bg-primary/[0.06] shadow-[0_30px_90px_-52px_rgba(242,183,5,0.72)]'
        : 'border-ink/10'
    } ${large ? 'md:grid md:grid-cols-[0.9fr_1.1fr] md:gap-8 md:p-8' : ''}`}
  >
    <div className="flex flex-col">
      <div className="flex flex-wrap items-center gap-3">
        <div
          className={`flex h-11 w-11 items-center justify-center rounded-lg ${
            course.featured ? 'bg-[#F2B705] text-void' : 'bg-primary/10 text-primary'
          }`}
        >
          {course.icon}
        </div>
        <span
          className={`rounded-full px-3 py-1 text-xs font-extrabold uppercase tracking-[0.12em] ${
            course.featured ? 'bg-void text-white' : 'bg-primary/10 text-primary'
          }`}
        >
          {course.badge}
        </span>
      </div>

      <h3 className={`mt-5 font-extrabold leading-tight text-ink ${large ? 'text-3xl md:text-5xl' : 'text-2xl'}`}>
        {course.title}
      </h3>
      <p className="mt-3 max-w-xl text-base leading-7 text-ink/70">{course.summary}</p>

      <div className="mt-7">
        <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-ink/48">Post discount price</p>
        <div className="mt-2 flex flex-wrap items-end gap-x-3 gap-y-1">
          <span className={`font-extrabold text-ink/34 line-through ${large ? 'text-xl md:text-2xl' : 'text-lg'}`}>
            {course.originalPrice}
          </span>
          <span className={`font-extrabold text-ink ${large ? 'text-4xl md:text-5xl' : 'text-3xl'}`}>
            {course.price}
          </span>
        </div>
      </div>
    </div>

    <div className={`${large ? 'mt-8 md:mt-0' : 'mt-6'} flex flex-col`}>
      {course.featured && (
        <div className="mb-5 rounded-lg bg-void p-4 text-white shadow-[0_24px_58px_-42px_rgba(0,0,0,0.72)]">
          <BreakoutChart compact />
        </div>
      )}

      <p className="rounded-lg bg-void/6 p-4 text-sm font-extrabold leading-6 text-ink">{course.bestFor}</p>

      <ul className="mt-6 space-y-4 text-sm font-semibold leading-6 text-ink/70">
        {course.bullets.map((bullet) => (
          <li key={bullet} className="flex gap-3">
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#F2B705]" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-8">
        <ActionButton label={course.ctaLabel} href={course.href} featured={course.featured} onClick={course.featured ? scrollToSetup : undefined} />
      </div>
    </div>
  </motion.article>
);

const BreakoutStory: React.FC = () => (
  <section id="consolidation-focus" className="bg-void px-4 py-20 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] md:py-28">
    <div className="mx-auto max-w-6xl">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        transition={smoothTransition}
        className="max-w-3xl"
      >
        <SectionLabel dark>Breakout setup</SectionLabel>
        <h2 className="mt-5 text-3xl font-extrabold leading-tight text-white md:text-5xl">Catch the build-up. Skip the noise.</h2>
        <p className="mt-5 max-w-2xl text-base leading-8 text-white/74 md:text-lg">
          Learn how tight ranges form, how pressure builds, and where risk can be defined.
          Educational only. No assured returns.
        </p>
      </motion.div>

      <div className="mt-12">
        <BreakoutChart />
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {[
          {
            step: 'Before breakout',
            title: 'Price gets tight',
            text: 'Mark the range. Stop forcing entries inside noise.',
            icon: <Clock3 className="h-5 w-5" />,
          },
          {
            step: 'During setup',
            title: 'Pressure builds',
            text: 'Read the structure before the move becomes obvious.',
            icon: <Radar className="h-5 w-5" />,
          },
          {
            step: 'After release',
            title: 'Risk stays defined',
            text: 'Use a cleaner trigger. No assured outcome. Process first.',
            icon: <Target className="h-5 w-5" />,
          },
        ].map((item, index) => (
          <motion.div
            key={item.step}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ ...smoothTransition, delay: index * 0.08 }}
            className="rounded-lg border border-white/12 bg-white/[0.03] p-5 shadow-[0_22px_70px_-54px_rgba(0,0,0,0.75)]"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#D4AF37] text-void">
              {item.icon}
            </div>
            <p className="mt-5 text-xs font-extrabold uppercase tracking-[0.14em] text-[#D4AF37]">{item.step}</p>
            <h3 className="mt-2 text-2xl font-extrabold text-white">{item.title}</h3>
            <p className="mt-3 text-sm leading-7 text-white/70">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const DecisionGuide: React.FC = () => (
  <section className="px-4 py-20 md:py-28">
    <div className="mx-auto max-w-6xl">
      <div className="grid gap-10 md:grid-cols-[0.85fr_1.15fr] md:items-start">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} transition={smoothTransition}>
          <SectionLabel>Decision guide</SectionLabel>
          <h2 className="mt-5 text-3xl font-extrabold leading-tight text-ink md:text-5xl">Choose by what you trade.</h2>
        </motion.div>
        <div className="grid gap-4">
          {[
            ['Mostly indices', 'Choose Index Trading.'],
            ['Mostly stock option breakouts', 'Choose the highlighted setup.'],
            ['Want everything together', 'Choose Full Price Action Mastery.'],
          ].map(([label, answer], index) => (
            <motion.div
              key={label}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              transition={{ ...smoothTransition, delay: index * 0.06 }}
              className={`grid gap-3 rounded-lg border p-5 shadow-[0_20px_58px_-46px_rgba(0,0,0,0.5)] md:grid-cols-[0.72fr_1.28fr] md:items-center ${
                index === 1 ? 'border-[#F2B705]/70 bg-primary/[0.06]' : 'border-ink/10 bg-paper'
              }`}
            >
              <p className="text-sm font-extrabold uppercase tracking-[0.12em] text-ink/50">{label}</p>
              <p className="text-xl font-extrabold text-ink">{answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const TestimonialInitial: React.FC<{ index: number }> = ({ index }) => (
  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-extrabold text-primary">
    {['A', 'R', 'S', 'M', 'K', 'P', 'D', 'V', 'N'][index % 9]}
  </div>
);

const WebinarTestimonialsColumn: React.FC<{
  testimonials: string[];
  columnIndex: number;
  className?: string;
  duration: number;
}> = ({ testimonials, columnIndex, className, duration }) => (
  <div className={className}>
    <motion.ul
      animate={{ translateY: '-50%' }}
      transition={{ duration, repeat: Infinity, ease: 'linear', repeatType: 'loop' }}
      className="m-0 flex list-none flex-col gap-5 bg-transparent p-0 pb-5"
    >
      {new Array(2).fill(0).map((_, repeatIndex) => (
        <React.Fragment key={repeatIndex}>
          {testimonials.map((text, index) => {
            const absoluteIndex = columnIndex * 3 + index;
            return (
              <motion.li
                key={`${repeatIndex}-${text}`}
                whileHover={{
                  y: -4,
                  boxShadow: '0 24px 48px -28px rgba(0, 0, 0, 0.45)',
                }}
                className="select-none rounded-[24px] border border-ink/10 bg-paper p-5 shadow-[0_20px_58px_-48px_rgba(0,0,0,0.55)] md:p-6"
              >
                <div className="mb-4 flex gap-1 text-[#D4AF37]" aria-hidden="true">
                  {new Array(5).fill(0).map((_, starIndex) => (
                    <Star key={starIndex} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="text-sm font-semibold leading-7 text-ink/70 md:text-base">{text}</p>
                <div className="mt-5 flex items-center gap-3">
                  <TestimonialInitial index={absoluteIndex} />
                  <div>
                    <p className="text-sm font-extrabold text-ink">Course learner</p>
                    <p className="text-xs font-bold uppercase tracking-[0.12em] text-ink/65">Trader feedback</p>
                  </div>
                </div>
              </motion.li>
            );
          })}
        </React.Fragment>
      ))}
    </motion.ul>
  </div>
);

const WebinarTestimonials: React.FC = () => (
  <section className="bg-surface-light px-4 py-20 md:py-28" aria-labelledby="webinar-testimonials-heading">
    <div className="mx-auto max-w-7xl">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={smoothTransition}
        className="mx-auto mb-12 max-w-3xl text-center md:mb-16"
      >
        <SectionLabel>Trader feedback</SectionLabel>
        <h2 id="webinar-testimonials-heading" className="mt-5 text-3xl font-extrabold leading-tight text-ink md:text-5xl">
          Simple lessons traders remember.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-ink/70 md:text-lg">
          Short feedback from learners who value structure, patience, and risk-first thinking.
        </p>
      </motion.div>

      <div className="mx-auto flex max-h-[640px] justify-center gap-5 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
        <WebinarTestimonialsColumn testimonials={testimonialColumns[0]} columnIndex={0} duration={38} />
        <WebinarTestimonialsColumn testimonials={testimonialColumns[1]} columnIndex={1} duration={46} className="hidden md:block" />
        <WebinarTestimonialsColumn testimonials={testimonialColumns[2]} columnIndex={2} duration={42} className="hidden lg:block" />
      </div>
    </div>
  </section>
);

const MobileFocusCta: React.FC = () => (
  <div className="fixed inset-x-3 bottom-3 z-40 md:hidden">
    <button
      type="button"
      onClick={scrollToCourses}
      className="flex min-h-14 w-full items-center justify-between rounded-lg bg-void px-4 py-3 text-left text-white shadow-[0_18px_50px_-18px_rgba(0,0,0,0.85)]"
    >
      <span>
        <span className="block text-[0.68rem] font-extrabold uppercase tracking-[0.12em] text-[#D4AF37]">
          Focus course
        </span>
        <span className="block text-sm font-extrabold">View the breakout setup</span>
      </span>
      <ArrowRight className="h-5 w-5" />
    </button>
  </div>
);

const WebinarPage: React.FC = () => {

  return (
    <div className="overflow-hidden bg-canvas pb-20 font-sans text-ink md:pb-0">
      <ComplianceBar />

      <section className="px-4 pb-20 pt-16 md:pb-28 md:pt-24">
        <div className="mx-auto max-w-6xl">
          <motion.div variants={fadeUp} initial="hidden" animate="visible" transition={smoothTransition}>
            <SectionLabel>Most recommended course</SectionLabel>
            <h1 className="mt-5 max-w-5xl text-3xl font-extrabold leading-[1.08] text-ink md:text-6xl">
              Catch breakouts before they happen.
            </h1>
            <p className="mt-5 max-w-3xl text-lg font-extrabold leading-8 text-ink md:text-2xl">
              Learn what to watch before you act.
            </p>
            <p className="mt-4 max-w-3xl text-base leading-8 text-ink/70 md:text-xl">
              A focused stock-options course for traders who want simple rules around range,
              trigger, and risk. Educational only. No assured returns.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ActionButton label="View The Setup" featured onClick={scrollToCourses} />
              <ActionButton label="Compare All Courses" onClick={scrollToCourses} />
            </div>
          </motion.div>

          <HeroVisual />
        </div>
      </section>

      <section id="course-cards" className="px-4 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={smoothTransition}
            className="mb-10 flex flex-col gap-5 md:mb-12 md:flex-row md:items-end md:justify-between"
          >
            <div>
              <SectionLabel>Choose your course</SectionLabel>
              <h2 className="mt-5 text-3xl font-extrabold leading-tight text-ink md:text-5xl">Start with the course that fits your trading.</h2>
            </div>
            <p className="max-w-xl text-base leading-7 text-ink/70">
              If stock option breakouts are your focus, start with the highlighted setup.
            </p>
          </motion.div>

          <div className="grid gap-7 md:gap-8">
            {featuredCourse && <CourseCard course={featuredCourse} large />}
            <div className="grid gap-7 md:grid-cols-2 md:gap-8">
              {supportingCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <BreakoutStory />
      <DecisionGuide />
      <WebinarTestimonials />

      <section className="px-4 pb-24 pt-20 md:pb-28">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={smoothTransition}
          className="mx-auto max-w-6xl rounded-lg bg-[#F2B705] p-6 text-void shadow-[0_34px_86px_-50px_rgba(242,183,5,0.78)] md:p-10"
        >
          <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center">
            <div>
              <SectionLabel dark>Best next step</SectionLabel>
              <h2 className="mt-5 text-3xl font-extrabold leading-tight text-void md:text-5xl">
                Breakout traders, start here.
              </h2>
              <p className="mt-4 max-w-2xl text-base font-semibold leading-8 text-void/80">
                Pick this if you want structured learning around range, trigger, and risk.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
              <ActionButton label="Choose Focus Course" href={COURSE_LINKS.consolidation} featured onClick={scrollToCourses} />
              <ActionButton label="Compare All" light onClick={scrollToCourses} />
            </div>
          </div>
        </motion.div>
      </section>

      <MobileFocusCta />
    </div>
  );
};

export default WebinarPage;
