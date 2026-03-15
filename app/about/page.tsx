import { COLORS } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { CheckCircle, Sun, Zap, Award, Users } from 'lucide-react';

export default function AboutPage() {
  return (
    <div>
      {/* Full Width About Section */}
      <section className="py-20" style={{ backgroundColor: COLORS.primary }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div className="text-white">
              <p className="text-lg mb-2 text-blue-200">
                Welcome to Orintek solar
              </p>
              <h2 className="text-5xl font-bold mb-6">
                About Us
              </h2>
              <p className="text-lg mb-6 text-blue-100">
                We are available to install a happy life in the form of SOLAR PANEL for your home and commercial needs.
                Established in 2025, M/s. ORINTEK SOLAR ENERGY SOLUTIONS LLP has built a reputation for quality excellence
                and is committed to upholding that standard of service providing reliable & affordable Solar solutions
                and trusted experts in residential & commercial solar energy.
              </p>

              {/* Bullet Points */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6" style={{ color: COLORS.gold }} />
                  <span className="text-lg">Professional Under MNRE and UPNEDA</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6" style={{ color: COLORS.gold }} />
                  <span className="text-lg">1500+ Successful Installation</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6" style={{ color: COLORS.gold }} />
                  <span className="text-lg">Trusted Installation in Affordable Price</span>
                </div>
              </div>

              <Link href="/about">
                <Button
                  size="lg"
                  className="font-bold px-8 py-6 rounded-full"
                  style={{ backgroundColor: COLORS.gold, color: COLORS.darkBlue }}
                >
                  Know More
                </Button>
              </Link>
            </div>

            {/* Right Side - Image */}
            <div className="flex justify-center lg:justify-end">
              <div
                className="rounded-2xl overflow-hidden shadow-2xl"
                style={{
                  backgroundColor: 'white',
                  maxWidth: '500px'
                }}
              >
                <img
                  src="/images/solar-hero.jpg"
                  alt="Solar Rooftop Installation"
                  className="w-full h-auto object-cover"
                  style={{ maxHeight: '400px' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6" style={{ color: COLORS.primary }}>
                Welcome to ORINTEK Solar Energy Solutions
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                We are available to install a happy life in the form of SOLAR PANEL for your home and commercial needs.
                Established in 2025, M/s. ORINTEK SOLAR ENERGY SOLUTIONS LLP has built a reputation for quality excellence
                and is committed to upholding that standard of service.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                We provide reliable & affordable Solar solutions and are trusted experts in residential & commercial solar energy.
                Our team is dedicated to helping you transition to clean, renewable energy while saving on electricity costs.
              </p>
              <Link href="/contact">
                <Button
                  size="lg"
                  className="text-white font-bold"
                  style={{ backgroundColor: COLORS.primary }}
                >
                  Get Free Quote
                </Button>
              </Link>
            </div>
            <div className="flex justify-center">
              <img
                src="/Orintek.png"
                alt="ORINTEK Solar Energy Solutions"
                className="h-48 w-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20" style={{ backgroundColor: COLORS.lightBlue }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12" style={{ color: COLORS.primary }}>
            Why Choose ORINTEK Solar?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Sun,
                title: 'Quality Products',
                description: 'We use only the best solar panels and equipment from trusted brands'
              },
              {
                icon: Zap,
                title: 'Expert Installation',
                description: 'Professional team with years of experience in solar installations'
              },
              {
                icon: Award,
                title: 'Trusted Experts',
                description: 'Built reputation for quality excellence since 2025'
              },
              {
                icon: Users,
                title: 'Customer Support',
                description: 'Dedicated after-sales service and maintenance support'
              },
            ].map((feature) => (
              <Card key={feature.title} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div
                  className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: COLORS.lightBlue }}
                >
                  <feature.icon className="w-8 h-8" style={{ color: COLORS.primary }} />
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: COLORS.primary }}>
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12" style={{ color: COLORS.primary }}>
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Residential Solar',
                description: 'Transform your home with solar panels and save up to 70% on electricity bills',
              },
              {
                title: 'Commercial Solar',
                description: 'Power your business with sustainable solar solutions and reduce operational costs',
              },
              {
                title: 'Solar Maintenance',
                description: 'Regular maintenance and monitoring services to ensure optimal performance',
              },
            ].map((service) => (
              <Card key={service.title} className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold mb-3" style={{ color: COLORS.primary }}>
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <Link href="/contact" className="text-sm font-semibold" style={{ color: COLORS.primary }}>
                  Learn More →
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20" style={{ backgroundColor: COLORS.primary }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center text-white">
            {[
              { number: '1500+', label: 'Successful Installation' },
              { number: '5MW+', label: 'Solar Capacity Installed' },
              { number: '₹10Cr+', label: 'Savings Generated' },
              { number: '99%', label: 'Customer Satisfaction' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-5xl font-bold mb-2">
                  {stat.number}
                </div>
                <p className="text-blue-100 font-semibold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6" style={{ color: COLORS.primary }}>
            Ready to Switch to Solar?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join hundreds of satisfied customers who have transformed their energy consumption with ORINTEK Solar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="text-white font-bold px-8"
                style={{ backgroundColor: COLORS.primary }}
              >
                Get Free Quote
              </Button>
            </Link>
            <Link href="/services">
              <Button
                size="lg"
                variant="outline"
                className="font-bold px-8"
                style={{ borderColor: COLORS.primary, color: COLORS.primary }}
              >
                Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
