import { SEO_PACKAGE } from './seo-package';

export const SITE_CONFIG = {
  name: 'Orintek Solar',
  description: SEO_PACKAGE.metaDescriptions.home,
  url: 'https://www.orinteksolarenergy.com/',
  ogImage: '/og-image.jpg',
  links: {
    twitter: 'https://twitter.com',
    instagram: 'https://www.instagram.com/orinteksolarlucknow/',
    facebook: 'https://www.facebook.com/profile.php?id=61576375254615',
    linkedin: 'https://linkedin.com',
  },
  seo: SEO_PACKAGE,
};

export const NAV_ITEMS = [
  { label: 'Our Offerings', href: '/portfolio' },
  { label: 'About Us', href: '/about' },
  { label: 'Brands', href: '/brands' },
  { label: 'Solar Solutions', href: '/solar-solutions' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' },
  { label: 'Careers', href: '/career' },
];

export const COLORS = {
  primary: '#1e40af',
  gold: '#fbbf24',
  darkBlue: '#0c2340',
  lightBlue: '#f0f9ff',
  gray: '#6b7280',
  white: '#ffffff',
  black: '#000000',
};

export const SOLUTIONS = [
  {
    id: 'homes',
    title: 'Homes',
    description: 'Transform your home with clean, renewable solar energy and reduce your electricity bills significantly.',
    features: ['Save up to 70% on electricity bills', '25-year performance warranty', 'Smart monitoring app', 'Net metering support', 'Free maintenance for 5 years'],
    image: '/images/residentialinstallation.webp',
  },
  {
    id: 'housing-society',
    title: 'Housing Society',
    description: 'Power your entire community with shared solar infrastructure and collective savings.',
    features: ['Common area lighting solutions', 'Individual metering for flats', 'Government subsidy benefits', 'Professional installation team', 'Dedicated project manager'],
    image: '/images/solar-housing-society.webp',
  },
  {
    id: 'commercial',
    title: 'Commercial',
    description: 'Scale your business operations with cost-effective solar solutions for commercial spaces.',
    features: ['Rooftop & ground mount options', 'Tax benefits under Section 80AD', 'Customized capacity planning', 'Commercial-grade inverters', '24/7 technical support'],
    image: '/images/solar-commercial.jpg',
  },
];

export const SERVICE_TYPES = [
  {
    id: 'cleaning',
    name: 'Solar Panel Cleaning',
    description: 'Professional cleaning service to remove dust, dirt, and debris from your solar panels for optimal performance.',
    price: '₹499',
    duration: '1-2 hours',
    features: ['Professional cleaning', 'Safe for all panel types', 'Improves efficiency by 15-25%', 'Eco-friendly cleaning agents'],
  },
  {
    id: 'servicing',
    name: 'Solar System Servicing',
    description: 'Complete system check-up and servicing to ensure your solar setup is running at peak performance.',
    price: '₹999',
    duration: '2-3 hours',
    features: ['Inverter inspection', 'Panel performance check', 'Wiring & connections', 'System optimization'],
  },
  {
    id: 'maintenance',
    name: 'Annual Maintenance Contract',
    description: 'Yearly maintenance contract with regular visits to keep your solar system in top condition.',
    price: '₹3,999/year',
    duration: 'Quarterly visits',
    features: ['4 annual visits', 'Cleaning included', 'Priority support', 'Free spare parts'],
  },
  {
    id: 'complaint',
    name: 'Complaint Resolution',
    description: 'Quick resolution for any issues or complaints with your solar installation.',
    price: '₹299',
    duration: '24-48 hours',
    features: ['Expert diagnosis', 'Quick turnaround', 'On-site repair if needed', 'Satisfaction guarantee'],
  },
  {
    id: 'installation',
    name: 'New Installation Consultation',
    description: 'Get expert advice and consultation for new solar panel installation.',
    price: 'Free',
    duration: '1 hour',
    features: ['Site survey', 'Customized proposal', 'Cost estimation', 'Government subsidy info'],
  },
  {
    id: 'inspection',
    name: 'System Inspection & Audit',
    description: 'Comprehensive inspection and performance audit of your existing solar system.',
    price: '₹1,499',
    duration: '3-4 hours',
    features: ['Thermal imaging', 'Performance testing', 'Detailed report', 'Recommendations'],
  },
];
