export interface ServicePackage {
  id: string;
  name: string;
  price: string;
  originalPrice?: string;
  features: string[];
  popular?: boolean;
  cta: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  industry: string;
  challenge: string;
  solution: string;
  result: string;
  metric: string;
  timeframe: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  metric?: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}