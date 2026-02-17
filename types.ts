
export interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  size?: 'normal' | 'large';
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
}

export interface FAQItem {
  question: string;
  answer: string;
}
