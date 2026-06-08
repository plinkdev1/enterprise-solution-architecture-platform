import { ServicePackage, CaseStudy, Testimonial, FAQ } from '../types';

export const servicePackages: ServicePackage[] = [
  {
    id: 'assessment',
    name: 'Problem Assessment & Solution Blueprint',
    price: '€500',
    features: [
      'Free 30-minute consultation',
      'Detailed business problem analysis',
      'Custom solution blueprint',
      'Technology recommendations',
      'Implementation timeline',
      '100% money-back guarantee'
    ],
    cta: 'Get My Solution Assessment',
  },
  {
    id: 'development',
    name: 'Complete Solution Development',
    price: '€5,000 - €50,000',
    features: [
      'Full custom solution development',
      'Modern technology stack',
      'Mobile-responsive design',
      'Security implementation',
      '30-day post-launch support',
      'Training and documentation'
    ],
    popular: true,
    cta: 'Start My Solution Build',
  },
  {
    id: 'package',
    name: 'Assessment + Development Package',
    price: '€5,500+',
    originalPrice: '€6,200',
    features: [
      'Complete assessment included',
      'Priority development queue',
      'Enhanced support package',
      'Performance optimization',
      'Ongoing maintenance option',
      'Success guarantee'
    ],
    cta: 'Get Complete Package',
  },
];

export const caseStudies: CaseStudy[] = [
  {
    id: 'tech-startup',
    title: 'Tech Startup Efficiency System',
    industry: 'Technology',
    challenge: 'Manual processes causing 40% productivity loss',
    solution: 'Custom workflow automation platform',
    result: 'Increased efficiency by 300% in just 3 weeks',
    metric: '300% efficiency increase',
    timeframe: '3 weeks'
  },
  {
    id: 'restaurant-chain',
    title: 'Restaurant Chain Management Tool',
    industry: 'Food & Beverage',
    challenge: 'Inventory management across 12 locations',
    solution: 'Real-time inventory tracking system',
    result: 'Reduced waste by 45% and improved stock visibility',
    metric: '45% waste reduction',
    timeframe: '4 weeks'
  },
  {
    id: 'ecommerce',
    title: 'E-commerce Integration Platform',
    industry: 'Retail',
    challenge: 'Managing multiple sales channels manually',
    solution: 'Unified e-commerce management dashboard',
    result: 'ROI paid for itself in the first month',
    metric: '100% ROI in month 1',
    timeframe: '6 weeks'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 'tech-ceo',
    name: 'Sarah Mitchell',
    role: 'CEO',
    company: 'TechFlow Solutions',
    content: 'Finally got the exact tool our business needed. The solution transformed how we operate and our team productivity skyrocketed.',
    metric: 'Increased efficiency by 300%'
  },
  {
    id: 'restaurant-owner',
    name: 'Marco Rodriguez',
    role: 'Owner',
    company: 'Rodriguez Restaurant Group',
    content: 'The inventory management system saved us thousands in waste. Best investment we\'ve made for our restaurant chain.',
    metric: 'Reduced waste by 45%'
  },
  {
    id: 'ecommerce-director',
    name: 'Jennifer Adams',
    role: 'E-commerce Director',
    company: 'RetailMax Inc.',
    content: 'ROI paid for itself in the first month. The platform handles all our sales channels seamlessly.',
    metric: '100% ROI in 30 days'
  }
];

export const faqs: FAQ[] = [
  {
    id: 'delivery-time',
    question: 'How quickly can you deliver a working solution?',
    answer: 'Our average delivery time is 28 days for complete solutions. Simple solutions can be delivered in 2-3 weeks, while complex enterprise solutions may take 6-8 weeks. We provide detailed timelines during the assessment phase.'
  },
  {
    id: 'guarantee',
    question: 'What guarantees do you offer?',
    answer: 'We offer a 100% money-back guarantee on assessments if you\'re not satisfied. For development projects, we guarantee the solution will meet all agreed specifications or we\'ll continue working until it does, at no extra cost.'
  },
  {
    id: 'technology',
    question: 'What technologies do you use?',
    answer: 'We use modern, proven technologies including React, Node.js, Python, cloud platforms (AWS, Azure), and secure databases. We always choose the best technology stack for your specific needs and requirements.'
  },
  {
    id: 'maintenance',
    question: 'Do you provide ongoing support and maintenance?',
    answer: 'Yes, we provide 30 days of free post-launch support with every project. We also offer ongoing maintenance packages for long-term support, updates, and feature enhancements.'
  },
  {
    id: 'cost',
    question: 'How do you determine project costs?',
    answer: 'Costs are determined based on project complexity, timeline, and specific requirements identified during the assessment phase. We provide transparent, fixed-price quotes with no hidden fees.'
  },
  {
    id: 'process',
    question: 'What is your development process?',
    answer: 'Our 4-step process: Assess (understand your problem), Design (create solution blueprint), Build (develop your solution), Deliver (launch with training and support). You\'re involved at every step with regular updates.'
  }
];