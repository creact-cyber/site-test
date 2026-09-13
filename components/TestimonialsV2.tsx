'use client'

import React from 'react';
import { motion } from "framer-motion";
import { Star } from 'lucide-react';

// --- Types ---
interface Testimonial {
  text: string;
  gender: 'boy' | 'girl';
  name: string;
  role: string;
  rating: number;
}

// --- Data ---
const testimonials: Testimonial[] = [
  {
    text: "Teaching is very well structured and step by step. They pour their heart out and give 101% while teaching. My trading has completely changed like a U turn!",
    gender: "boy",
    name: "Rohan Mehta",
    role: "Mentorship Student",
    rating: 5
  },
  {
    text: "The magic of VIX helped me a lot in my trading style. I plot index after market hours and wait for your daily analysis.",
    gender: "boy",
    name: "Suresh Raina",
    role: "FNO Trader",
    rating: 5
  },
  {
    text: "All 4 mentors are very humble. Like finding a pearl in the ocean - there are numerous courses available but by the grace of god I found my mentor in YOU.",
    gender: "boy",
    name: "Amit Patel",
    role: "Community Member",
    rating: 5
  },
  {
    text: "No fancy indicators. All simple Price Action. Worth more than 5k. Many charge 20-30k for only recorded videos with no handholding.",
    gender: "girl",
    name: "Sneha Gupta",
    role: "Swing Trader",
    rating: 5
  },
  {
    text: "Mentors are extremely helpful and not hesitating to share their knowledge. Solves everyone's doubts even if we do silly things. Glad to be growing under their shadow.",
    gender: "boy",
    name: "Arjun Das",
    role: "Student",
    rating: 5
  },
  {
    text: "Impressed by the transparency. You clearly explained your setups, scanners etc. Cleared all doubts even during market hours. Proper handholding - didn't ghost us after the session.",
    gender: "boy",
    name: "Karthik R.",
    role: "Professional Trader",
    rating: 5
  },
  {
    text: "Clarity and excellent response time. 5000 mein bohot zyada de rahe ho!",
    gender: "boy",
    name: "Ravi Kumar",
    role: "Member",
    rating: 5
  },
  {
    text: "Before this webinar I was clueless after 2 other trainings. After Chartians webinar I got the dynamics of trading and understand charts in a better way. I don't need any other fancy trainings!",
    gender: "boy",
    name: "Deepak Sharma",
    role: "Trader",
    rating: 5
  },
  {
    text: "The commitment you have towards making us learn - you taught much more than what you promised and continue to do so everyday.",
    gender: "girl",
    name: "Anjali Nair",
    role: "Student",
    rating: 5
  },
  {
    text: "Complex concepts explained in easy way. No bookish knowledge. Hand holding was excellent!",
    gender: "boy",
    name: "Sanjay Verma",
    role: "Swing Trader",
    rating: 4
  },
  {
    text: "With such a passionate group guiding mentees, it's never a boring day. ₹5000 me unlimited learning hai yaar. For index lovers, it's 24 carat pure gold!",
    gender: "boy",
    name: "Vikram Malhotra",
    role: "Index Trader",
    rating: 5
  },
  {
    text: "Simplicity and devotion for teaching. Not looking at time, you teach until all understood. Cannot say anything more - all perfect!",
    gender: "girl",
    name: "Rajeshwari",
    role: "Beginner Trader",
    rating: 5
  },
  {
    text: "Precise, clear, excellent hand holding. What wasn't covered in main session was looked after during hand holding.",
    gender: "boy",
    name: "Varun Dhawan",
    role: "Member",
    rating: 5
  },
  {
    text: "Detailed discussions in webinar and pure price action techniques avoiding the news. Plus excellent hand holding!",
    gender: "boy",
    name: "Aryan Khan",
    role: "Trader",
    rating: 5
  },
  {
    text: "Best thing I learnt was Fibo Retracements and AVWAP. Now I'm very confident trading gap ups and gap downs. Lucky to join trendrider group as bonus!",
    gender: "girl",
    name: "Priya Sethi",
    role: "Technical Analyst",
    rating: 4
  },
  {
    text: "Dedication, knowledge shared, doubt solving, hand holding and lot more. For 5k you get knowledge worth more than 25 years of experienced trader!",
    gender: "boy",
    name: "Rahul Verma",
    role: "Full Time Trader",
    rating: 5
  },
  {
    text: "AVWAP is superb for option selling. It was definitely more than its worth. You all did great!",
    gender: "boy",
    name: "Karan Johar",
    role: "Option Seller",
    rating: 5
  },
  {
    text: "Every mentor was excellent. I really feel surprised when I learned. It was just amazing - loved it from heart! Thanks to bestest mentors!",
    gender: "girl",
    name: "Sneha Reddy",
    role: "Student",
    rating: 5
  }
];

const firstColumn = testimonials.slice(0, 6);
const secondColumn = testimonials.slice(6, 12);
const thirdColumn = testimonials.slice(12, 18);

// --- Avatar Components ---
const BoyAvatar = ({ className }: { className?: string }) => (
  <div className={`overflow-hidden rounded-full bg-[#DCE4FF] border border-ink/10 ${className}`}>
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <circle cx="50" cy="45" r="20" fill="#FFDCC9"/> {/* Head */}
      <path d="M50 22C35 22 28 35 28 42L30 48C30 48 35 30 50 30C65 30 70 48 70 48L72 42C72 35 65 22 50 22Z" fill="#14110F"/> {/* Hair */}
      <path d="M15 110C15 80 30 70 50 70C70 70 85 80 85 110" fill="#2E4DF6"/> {/* Shirt */}
    </svg>
  </div>
);

const GirlAvatar = ({ className }: { className?: string }) => (
  <div className={`overflow-hidden rounded-full bg-[#FFE1DB] border border-ink/10 ${className}`}>
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path d="M25 40C20 60 25 80 30 90H70C75 80 80 60 75 40Z" fill="#14110F"/> {/* Hair Back */}
      <path d="M15 110C15 80 30 75 50 75C70 75 85 80 85 110" fill="#FF5B4A"/> {/* Shirt */}
      <circle cx="50" cy="45" r="20" fill="#FFDCC9"/> {/* Head */}
      <path d="M25 45C25 20 75 20 75 45C75 45 65 30 50 30C35 30 25 45 25 45Z" fill="#14110F"/> {/* Hair Front */}
    </svg>
  </div>
);

// --- Sub-Components ---
const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.ul
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 bg-transparent transition-colors duration-300 list-none m-0 p-0"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, gender, name, role, rating }, i) => (
                <motion.li
                  key={`${index}-${i}`}
                  whileHover={{
                    x: -3,
                    y: -3,
                    transition: { type: "spring", stiffness: 400, damping: 17 }
                  }}
                  className="p-8 rounded-[20px] border border-ink/10 shadow-brutal bg-surface-light cursor-default select-none group"
                >
                  <blockquote className="m-0 p-0">
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={18}
                          className={`${i < rating ? "text-sun fill-sun" : "text-ink/15"}`}
                        />
                      ))}
                    </div>
                    <p className="text-ink/70 leading-relaxed font-medium text-base md:text-lg mb-6">
                      "{text}"
                    </p>
                    <footer className="flex items-center gap-4">
                      {gender === 'boy' ? (
                        <BoyAvatar className="h-14 w-14 shrink-0" />
                      ) : (
                        <GirlAvatar className="h-14 w-14 shrink-0" />
                      )}
                      <div className="flex flex-col">
                        <cite className="font-bold not-italic text-ink text-lg">
                          {name}
                        </cite>
                        <span className="text-sm font-semibold text-primary uppercase tracking-wide">
                          {role}
                        </span>
                      </div>
                    </footer>
                  </blockquote>
                </motion.li>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.ul>
    </div>
  );
};

const TestimonialsV2: React.FC = () => {
  return (
    <section
      aria-labelledby="testimonials-heading"
      className="bg-paper py-20 md:py-32 relative overflow-hidden border-y border-ink/10"
    >
      <div className="container px-4 z-10 mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-center max-w-3xl mx-auto mb-16 text-center">
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-extrabold uppercase tracking-widest mb-6 shadow-brutal-sm font-mono">
             Community Love
          </div>

          <h2 id="testimonials-heading" className="font-display text-4xl md:text-6xl font-bold tracking-tight text-ink mb-6">
            Trusted by <span className="text-primary">Traders.</span>
          </h2>
          <p className="text-ink/60 text-lg md:text-xl leading-relaxed max-w-xl mx-auto">
            Don't just take our word for it. Here's what our community members have to say about their journey with The Chartians.
          </p>
        </div>

        <div 
          className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] max-h-[740px] overflow-hidden"
        >
          <TestimonialsColumn testimonials={firstColumn} duration={45} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={55} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={50} />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsV2;