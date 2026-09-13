export interface Testimonial {
  name: string;
  handle: string;
  content: string;
  avatar: string;
  rating: number;
}

export interface PricingPlan {
  name: string;
  price: number;
  period: string;
  description: string;
  features: string[];
  highlight: boolean;
  cta: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
