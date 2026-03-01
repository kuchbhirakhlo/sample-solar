'use client';

import { Button } from '@/components/ui/button';
import { COLORS } from '@/lib/constants';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section
      className="relative w-full h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(/images/hero-bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Placeholder for background image - will be replaced with actual image */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/40 to-blue-900/20"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          Still paying for electricity?
        </h1>
        <p className="text-xl sm:text-2xl mb-8 text-gray-100">
          Switch to solar. Let the sun pay your bills.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/contact">
            <Button
              size="lg"
              className="text-white font-bold text-lg px-8 py-6"
              style={{ backgroundColor: COLORS.primary }}
            >
              Join India's Solar Revolution
            </Button>
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="text-white text-sm">Scroll to explore</div>
          <div className="text-2xl">↓</div>
        </div>
      </div>
    </section>
  );
}
