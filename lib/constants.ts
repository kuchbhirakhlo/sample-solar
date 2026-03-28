import { SEO_PACKAGE } from './seo-package';

export const SITE_CONFIG = {
  name: 'Orintek Solar',
  description: SEO_PACKAGE.metaDescriptions.home,
  url: 'https://www.orinteksolarenergy.com/',
  ogImage: '/og-image.jpg',
  links: {
    twitter: 'https://twitter.com',
    instagram: 'https://instagram.com',
    facebook: 'https://facebook.com',
    linkedin: 'https://linkedin.com',
  },
  seo: SEO_PACKAGE,
};

export const NAV_ITEMS = [
  { label: 'Our Offerings', href: '/portfolio' },
  { label: 'About Us', href: '/about' },
  { label: 'Brands', href: '/brands' },
  { label: 'Solar Solutions', href: '/solar-solutions' },
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

export const TRUSTED_BRANDS = [
  { name: 'Johnson & Johnson', logo: '/logos/jnj.png' },
  { name: 'Decor', logo: '/logos/decor.png' },
  { name: 'Prince', logo: '/logos/prince.png' },
  { name: 'TVS', logo: '/logos/tvs.png' },
  { name: 'Ultratech', logo: '/logos/ultratech.png' },
];
