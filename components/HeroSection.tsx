'use client';

import { Button } from '@/components/ui/button';
import { COLORS } from '@/lib/constants';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Video background removed as requested. */}
      {(
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 object-cover"
          style={{
            width: '100%',
            height: '100%',
            filter: 'brightness(1) contrast(1.05)',
            WebkitFilter: 'brightness(1) contrast(1.05)',
            WebkitBackfaceVisibility: 'hidden',
            backfaceVisibility: 'hidden',
            transform: 'translate3d(0, 0, 0) scale(1)',
            WebkitTransform: 'translate3d(0, 0, 0) scale(1)',
            WebkitPerspective: 1000,
            willChange: 'transform',
            imageRendering: 'auto',
            WebkitFontSmoothing: 'antialiased',
            WebkitUserSelect: 'none',
            userSelect: 'none',
            WebkitTouchCallout: 'none',
            zIndex: 1,
            contain: 'strict',
          } as React.CSSProperties}
        >
          <source src="/sunrise-gif2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/40 to-blue-900/30">
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          Power Your Future with Clean Solar Energy
        </h1>
        <p className="text-xl sm:text-2xl mb-8 text-gray-100">
          Save up to 90% on electricity costs and make a difference for the planet. Your journey to energy independence starts today.
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
