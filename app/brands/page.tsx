'use client';

import { COLORS } from '@/lib/constants';
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, ArrowRight } from 'lucide-react';

// Brand data with descriptions
const brands = [
  {
    name: 'Tata Power Solar',
    logo: '/brandlogo/brand.tata.jpeg',
    description: 'Tata Power Solar is India\'s largest solar PV module manufacturer with over 25 years of experience. Known for high-quality, reliable panels with excellent performance in Indian weather conditions.',
    features: ['25-year linear performance warranty', 'Tier 1 manufacturer', ' BIS certified'],
    category: 'Panel',
  },
  {
    name: 'Adani Solar',
    logo: '/brandlogo/brand-adani.png',
    description: 'Adani Solar is a leading Indian solar panel manufacturer committed to making solar energy affordable. Their panels are known for high efficiency and competitive pricing.',
    features: ['Made in India', 'Advanced PERC technology', 'PID resistant'],
    category: 'Panel',
  },
  {
    name: 'Waaree',
    logo: '/brandlogo/brand-waree.png',
    description: 'Waaree Energies Ltd is India\'s leading solar PV module manufacturer with a capacity of 2 GW. They offer high-quality modules with excellent durability and performance.',
    features: ['25-year power output warranty', 'Anti-reflective coating', 'Robust frame design'],
    category: 'Panel',
  },
  {
    name: 'Vikram Solar',
    logo: '/brandlogo/brand-vikram.png',
    description: 'Vikram Solar is a leading solar energy solutions provider manufacturing high-efficiency PV modules. Their products are exported to 24 countries worldwide.',
    features: ['High efficiency up to 20%', 'Excellent low light performance', 'International quality standards'],
    category: 'Panel',
  },
  {
    name: 'Luminous',
    logo: '/brandlogo/brand-luminous.webp',
    description: 'Luminous is a trusted name in power back-up solutions and renewable energy. They offer complete solar solutions including inverters, batteries, and solar panels.',
    features: ['Smart monitoring support', 'Hybrid inverter options', 'Pan-India service network'],
    category: 'Inverter/Battery',
  },
  {
    name: 'Exide',
    logo: '/brandlogo/brand-exide.png',
    description: 'Exide Industries is the largest lead-acid battery manufacturer in India. Their batteries are known for reliability, long life, and excellent performance in solar applications.',
    features: ['Tubular battery technology', 'Low maintenance', 'Deep cycle capability'],
    category: 'Battery',
  },
  {
    name: 'Amaron',
    logo: '/brandlogo/brand-amaron.jpg',
    description: 'Amaron batteries are known for their advanced technology and long-lasting performance. They offer a wide range of solar batteries with excellent warranty support.',
    features: ['Silver alloy technology', 'High reserve capacity', 'Quick replacement service'],
    category: 'Battery',
  },
  {
    name: 'Loom Solar',
    logo: '/brandlogo/brand-loom.png',
    description: 'Loom Solar is a rapidly growing solar company in India, offering high-quality solar panels and complete solar solutions for residential and commercial applications.',
    features: ['Monocrystalline panels', '25-year performance warranty', 'Free installation support'],
    category: 'Panel',
  },
  {
    name: 'UTL Solar',
    logo: '/brandlogo/brand-utl.png',
    description: 'UTL Solar manufactures solar inverters, PWM controllers, and solar panels. They are known for affordable and reliable solar products in the Indian market.',
    features: ['Affordable pricing', 'Complete solar solutions', 'Good after-sales support'],
    category: 'Inverter/Panel',
  },
];

export default function BrandsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-cover bg-center" style={{ backgroundImage: 'url(/representation-ecology-sustainability.jpg)' }}>
        <div className="absolute inset-0 bg-black/50"></div>
        
        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Our <span className="text-yellow-300">Trusted Brands</span>
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            We partner with India's top solar companies and global brands to deliver the best solar solutions for your home and business.
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-white/90">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                <span className="text-2xl">✓</span>
              </div>
              <div className="text-left">
                <p className="text-2xl font-bold">9+</p>
                <p className="text-sm text-white/80">Top Brands</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                <span className="text-2xl">✓</span>
              </div>
              <div className="text-left">
                <p className="text-2xl font-bold">100%</p>
                <p className="text-sm text-white/80">Genuine Products</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                <span className="text-2xl">✓</span>
              </div>
              <div className="text-left">
                <p className="text-2xl font-bold">25 Years</p>
                <p className="text-sm text-white/80">Warranty Support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {brands.map((brand) => (
              <Card 
                key={brand.name} 
                className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col group"
                style={{ borderRadius: '20px' }}
              >
                {/* Logo Section */}
                <div className="p-8 flex items-center justify-center bg-gradient-to-b from-amber-50 to-orange-50">
                  <div className="w-32 h-32 rounded-full flex items-center justify-center bg-white shadow-lg">
                    <Image
                      src={brand.logo}
                      alt={brand.name + " logo"}
                      width={100}
                      height={100}
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold" style={{ color: COLORS.primary }}>
                      {brand.name}
                    </h3>
                    <span className="text-xs px-3 py-1 bg-blue-100 text-blue-700 rounded-full font-medium">
                      {brand.category}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4 flex-grow">
                    {brand.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {brand.features.map((feature, idx) => (
                      <span key={idx} className="text-xs px-3 py-1 bg-amber-100 text-amber-700 rounded-full">
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <button
                    className="w-full mt-auto py-3 rounded-xl font-semibold transition-all flex items-center justify-center gap-2"
                    style={{ backgroundColor: COLORS.primary, color: 'white' }}
                  >
                    Inquire Now
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Brands */}
      <section className="py-16 bg-gradient-to-r from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4" style={{ color: COLORS.primary }}>
              Why Choose Our Partner Brands?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We carefully select our partners to ensure you get the best quality products
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { title: 'Genuine Products', desc: '100% authentic products with manufacturer warranty' },
              { title: 'Expert Support', desc: 'Trained technicians for installation and service' },
              { title: 'Pan-India Service', desc: 'Service network across all major cities' },
              { title: 'Competitive Pricing', desc: 'Best prices with exclusive dealer discounts' },
            ].map((item, idx) => (
              <div key={idx} className="p-6 bg-white rounded-xl shadow-md text-center">
                <h3 className="font-bold text-lg mb-2" style={{ color: COLORS.primary }}>
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" style={{ backgroundColor: COLORS.primary }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Need Help Choosing the Right Brand?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Our experts will help you select the best solar products for your specific needs and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-orange-600 font-bold rounded-xl hover:bg-gray-100 transition-colors"
              >
                Contact Us
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
            <a 
              href="tel:+918933814898"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-orange-500 text-white font-bold rounded-xl hover:bg-orange-600 transition-colors"
            >
              Call +91 89338 14898
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}