'use client';

import { COLORS } from '@/lib/constants';
import { Card } from '@/components/ui/card';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';

// Major solar brands we deal in - using placeholder logos
const brands = [
  { name: 'Tata Power Solar', logo: '/brandlogo/brand.tata.jpeg' },
  { name: 'Adani Solar', logo: '/brandlogo/brand-adani.png' },
  { name: 'Waaree', logo: '/brandlogo/brand-waree.png' },
  { name: 'Vikram Solar', logo: '/brandlogo/brand-vikram.png' },
  { name: 'Luminous', logo: '/brandlogo/brand-luminous.webp' },
  { name: 'Exide', logo: '/brandlogo/brand-exide.png' },
  { name: 'Amaron', logo: '/brandlogo/brand-amaron.jpg' },
  { name: 'Loom Solar', logo: '/brandlogo/brand-loom.png' },
  { name: 'UTL Solar', logo: '/brandlogo/brand-utl.png' },
];

export default function SolarCompaniesSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-scroll functionality
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer || isPaused) return;

    const autoScroll = () => {
      if (scrollContainer) {
        const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
        if (scrollContainer.scrollLeft >= maxScroll) {
          scrollContainer.scrollLeft = 0;
        } else {
          scrollContainer.scrollBy({ left: 2, behavior: 'smooth' });
        }
      }
    };

    const intervalId = setInterval(autoScroll, 50);
    return () => clearInterval(intervalId);
  }, [isPaused]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0));
    setScrollLeft(scrollRef.current?.scrollLeft || 0);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (scrollRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4" style={{ color: COLORS.primary }}>
            Brands We Deal In
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We partner with India's top solar companies and global brands to deliver the best solar solutions
          </p>
        </div>

        {/* Brands Slider */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:opacity-80 transition-opacity"
            style={{ backgroundColor: COLORS.primary, color: 'white' }}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:opacity-80 transition-opacity"
            style={{ backgroundColor: COLORS.primary, color: 'white' }}
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Slider Container */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide px-12 py-4 cursor-grab active:cursor-grabbing"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => { setIsPaused(false); handleMouseUp(); }}
          >
            {brands.map((brand) => (
              <div
                key={brand.name}
                className="flex-shrink-0"
              >
                <Card className="w-40 h-40 flex flex-col items-center justify-center p-4 hover:shadow-xl transition-shadow group">
                  {/* Logo Circle */}
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform overflow-hidden"
                    style={{ backgroundColor: COLORS.lightBlue }}
                  >
                    {/* actual company logo inside circle */}
                    <img
                      src={brand.logo}
                      alt={brand.name + " logo"}
                      loading="lazy"
                      className="max-w-full max-h-full object-contain"
                      width={80}
                      height={80}
                    />
                  </div>
                  <h3
                    className="font-bold text-sm text-center"
                    style={{ color: COLORS.primary }}
                  >
                    {brand.name}
                  </h3>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
