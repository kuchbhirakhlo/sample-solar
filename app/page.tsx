import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import HeroSection from '@/components/HeroSection';
import RecentInstallationsSection from '@/components/RecentInstallationsSection';
import GoogleRatingSection from '@/components/GoogleRatingSection';
import SolarCompaniesSection from '@/components/SolarCompaniesSection';
import Chatbot from '@/components/Chatbot';
import { COLORS } from '@/lib/constants';
import { CheckCircle, Sun, Zap, Award, Users, Phone, Mail, MapPin } from 'lucide-react';

export default function Home() {
  return (
    <>
      <HeroSection />

      <RecentInstallationsSection />

      {/* About Us Section */}
      <section className="py-20" style={{ backgroundColor: COLORS.primary }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div className="text-white">
              <p className="text-lg mb-2 text-blue-200">
                Welcome to Orientek solar
              </p>
              <h2 className="text-5xl font-bold mb-6">
                About Us
              </h2>
              <p className="text-lg mb-6 text-blue-100">
                We are available to install a happy life in the form of SOLAR PANEL for your home and commercial needs. 
                Established in 2025, M/s. ORINTEK SOLAR ENERGY SOLUTIONS LLP has built a reputation for quality excellence 
                and is committed to providing reliable & affordable Solar solutions and trusted experts in residential & commercial solar energy.
              </p>
              
              {/* Bullet Points */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3">
                  <span style={{ color: COLORS.gold }}>✓</span>
                  <span className="text-lg">Professional Under MNRE and UPNEDA</span>
                </div>
                <div className="flex items-center gap-3">
                  <span style={{ color: COLORS.gold }}>✓</span>
                  <span className="text-lg">1500+ Successful Installation</span>
                </div>
                <div className="flex items-center gap-3">
                  <span style={{ color: COLORS.gold }}>✓</span>
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

      <SolarCompaniesSection />


      <section className="py-20" style={{ backgroundColor: COLORS.lightBlue }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4" style={{ color: COLORS.primary }}>
            Why Choose Us
          </h2>
          <p className="text-center text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
            Discover why ORINTEK Solar is the preferred choice for solar solutions in Lucknow and across India
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: Sun, 
                title: 'Quality Products', 
                description: 'We use only the best solar panels and equipment from trusted brands',
                image: '/images/solar-homes.jpg'
              },
              { 
                icon: Zap, 
                title: 'Expert Installation', 
                description: 'Professional team with years of experience in solar installations',
                image: '/images/solar-commercial.jpg'
              },
              { 
                icon: Award, 
                title: 'Trusted Experts', 
                description: 'Built reputation for quality excellence since 2025',
                image: '/images/solar-housing-society.jpg'
              },
              { 
                icon: Users, 
                title: 'Customer Support', 
                description: 'Dedicated after-sales service and maintenance support',
                image: '/images/solar-hero.jpg'
              },
            ].map((feature) => (
              <Card key={feature.title} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-40 relative overflow-hidden">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30"></div>
                  <div 
                    className="absolute bottom-3 left-3 w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: COLORS.gold }}
                  >
                    <feature.icon className="w-5 h-5" style={{ color: COLORS.darkBlue }} />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold mb-2" style={{ color: COLORS.primary }}>
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {feature.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>


      <GoogleRatingSection />

      {/* CTA Section */}
      <section className="py-20" style={{ backgroundColor: COLORS.primary }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Ready to Go Solar?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Join thousands of Indians saving on electricity bills with ORINTEK Solar
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 rounded-lg font-bold text-lg transition-all hover:opacity-90"
            style={{ backgroundColor: COLORS.gold, color: COLORS.darkBlue }}
          >
            Get Free Quote Today
          </a>
        </div>
      </section>

      {/* Enquiry Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left - Enquiry Form */}
            <div>
              <h2 className="text-4xl font-bold mb-4" style={{ color: COLORS.primary }}>
                Get In Touch
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                Have questions about solar? Our team is here to help you find the best solution for your needs.
              </p>
              
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="">Select Service</option>
                  <option value="residential">Residential Solar</option>
                  <option value="commercial">Commercial Solar</option>
                  <option value="maintenance">Solar Maintenance</option>
                  <option value="other">Other</option>
                </select>
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full text-white font-bold"
                  style={{ backgroundColor: COLORS.primary }}
                >
                  Submit Enquiry
                </Button>
              </form>
            </div>
            
            {/* Right - Contact Info */}
            <div>
              <h2 className="text-4xl font-bold mb-4" style={{ color: COLORS.primary }}>
                Contact Information
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                Reach out to us directly for any queries or support
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: COLORS.lightBlue }}
                  >
                    <MapPin className="w-6 h-6" style={{ color: COLORS.primary }} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg" style={{ color: COLORS.primary }}>Address</h4>
                    <p className="text-gray-600">Lucknow, Uttar Pradesh, India</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: COLORS.lightBlue }}
                  >
                    <Phone className="w-6 h-6" style={{ color: COLORS.primary }} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg" style={{ color: COLORS.primary }}>Phone</h4>
                    <p className="text-gray-600">+91 89338 14898</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: COLORS.lightBlue }}
                  >
                    <Mail className="w-6 h-6" style={{ color: COLORS.primary }} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg" style={{ color: COLORS.primary }}>Email</h4>
                    <p className="text-gray-600">orinteksolar@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
            <Chatbot />

    </>
  );
}
