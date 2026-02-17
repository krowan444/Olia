
import React from 'react';
import { 
  Home, 
  Building2, 
  Sparkles, 
  Waves, 
  Shirt, 
  Key,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Zap
} from 'lucide-react';
import { ServiceCardProps, Testimonial, FAQItem } from './types';

export const COLORS = {
  primary: '#8DA399', // soft sage green
  secondary: '#2C4A3E', // deep forest green
  background: '#F9FBF9', // off-white
  accent: '#E5E1D8', // warm neutral
};

export const SERVICES: ServiceCardProps[] = [
  {
    title: "End of Tenancy Cleaning",
    description: "A detailed, landlord-ready clean designed to help you hand back your property with confidence. We cover kitchens, bathrooms, living spaces, and finishing touches.",
    icon: <Key className="w-8 h-8 text-[#2C4A3E]" />,
    size: 'large'
  },
  {
    title: "Deep Cleaning",
    description: "Perfect for refreshing your home or tackling built-up dirt. Ideal before special occasions or seasonal resets.",
    icon: <Sparkles className="w-8 h-8 text-[#2C4A3E]" />,
  },
  {
    title: "Carpet Cleaning",
    description: "Restore freshness and remove stains with professional grade equipment that extends your carpet's lifespan.",
    icon: <Waves className="w-8 h-8 text-[#2C4A3E]" />,
  },
  {
    title: "Domestic Cleaning",
    description: "Regular cleaning tailored to your schedule, maintaining a consistently comfortable home environment.",
    icon: <Home className="w-8 h-8 text-[#2C4A3E]" />,
    size: 'large'
  },
  {
    title: "Commercial Cleaning",
    description: "Professional cleaning for offices and workplaces, supporting productivity and high-end professionalism.",
    icon: <Building2 className="w-8 h-8 text-[#2C4A3E]" />,
  },
  {
    title: "Laundry & Ironing",
    description: "Save time with reliable services designed to keep your clothes fresh and perfectly ready to wear.",
    icon: <Shirt className="w-8 h-8 text-[#2C4A3E]" />,
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Sarah Jenkins",
    role: "Homeowner in Earlsdon",
    content: "The best cleaning service I've used in Coventry. They are punctual, thorough, and really care about the little details.",
    rating: 5
  },
  {
    name: "Mark Thompson",
    role: "Landlord",
    content: "Used Olia for an end-of-tenancy clean. The results were incredible – I got my full deposit back and the new tenants moved in immediately.",
    rating: 5
  },
  {
    name: "Elena Rodriguez",
    role: "Office Manager",
    content: "Our workspace has never looked better. Highly professional team and very flexible with our office hours.",
    rating: 5
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "Do you provide cleaning products?",
    answer: "Yes, we bring our own professional-grade cleaning products and equipment. However, if you prefer us to use specific products you provide, we are happy to accommodate."
  },
  {
    question: "Are your cleaners insured?",
    answer: "Absolutely. We are fully insured for public liability, giving you complete peace of mind while we work in your property."
  },
  {
    question: "How long does cleaning take?",
    answer: "This depends on the service. A regular domestic clean usually takes 2-4 hours, while a deep clean or end-of-tenancy clean can take 4-8 hours depending on property size."
  },
  {
    question: "Can I book regular cleaning?",
    answer: "Yes! We offer weekly, bi-weekly, and monthly cleaning plans tailored to your specific schedule and requirements."
  }
];

export const TRUST_SIGNALS = [
  { icon: <ShieldCheck className="w-5 h-5" />, label: "Fully insured" },
  { icon: <Clock className="w-5 h-5" />, label: "Fast response" },
  { icon: <CheckCircle2 className="w-5 h-5" />, label: "Local professionals" },
  { icon: <Zap className="w-5 h-5" />, label: "Tailored plans" }
];
