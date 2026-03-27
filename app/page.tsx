'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import HeroSection from '@/components/HeroSection';
import SolutionsShowcase from '@/components/SolutionsShowcase';
import RecentInstallationsSection from '@/components/RecentInstallationsSection';
import GoogleRatingSection from '@/components/GoogleRatingSection';
import SolarCompaniesSection from '@/components/SolarCompaniesSection';
import dynamic from 'next/dynamic';
import { useQuote } from '@/lib/quote-context';
import { COLORS } from '@/lib/constants';

// Lazy load Chatbot to improve initial page load
const Chatbot = dynamic(() => import('@/components/Chatbot'), {
  ssr: false,
  loading: () => null,
});

export default function Home() {
  const { setIsQuoteOpen } = useQuote();

  return (
    <>
      <HeroSection />

      <div id="our-solutions">
        <SolutionsShowcase />
      </div>

      <div id="recent-installations">
        <RecentInstallationsSection />
      </div>

      {/* About Us Section */}
      <section id="about-us" className="py-20" style={{ backgroundColor: COLORS.primary }}>
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
                <Image
                  src="/orintek-front.webp"
                  alt="Solar Rooftop Installation"
                  width={500}
                  height={400}
                  className="w-full h-auto object-cover"
                  style={{ maxHeight: '400px' }}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div id="brands">
        <SolarCompaniesSection />
      </div>
      <GoogleRatingSection />

      {/* CTA Section */}
      <section className="py-10" style={{ backgroundColor: COLORS.primary }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Ready to Go Solar?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Join thousands of Indians saving on electricity bills with ORINTEK Solar
          </p>
          <button
            onClick={() => setIsQuoteOpen(true)}
            className="inline-block px-8 py-4 rounded-lg font-bold text-lg transition-all hover:opacity-90"
            style={{ backgroundColor: COLORS.gold, color: COLORS.darkBlue }}
          >
            Get Free Quote Today
          </button>
        </div>
      </section>

      <Chatbot />

    </>
  );
}
