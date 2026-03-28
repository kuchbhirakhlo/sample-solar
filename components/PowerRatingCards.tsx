'use client';

import { Card } from '@/components/ui/card';
import { COLORS } from '@/lib/constants';

const residentialRatings = ['3KW', '5KW', '7KW', '10KW', '12KW'];
const commercialRatings = ['5KW', '10KW', '15KW', '20KW', '37KW', '50KW', '100KW', '160KW', '200KW'];

const ratingImageMap: Record<string, string> = {
  '3KW': '/solaricon.webp',
  '5KW': '/solaricon.webp',
  '7KW': '/solaricon.webp',
  '10KW': '/solaricon.webp',
  '12KW': '/solaricon.webp',
  '15KW': '/solaricon.webp',
  '20KW': '/solaricon.webp',
  '37KW': '/solaricon.webp',
  '50KW': '/solaricon.webp',
  '100KW': '/solaricon.webp',
  '160KW': '/solaricon.webp',
  '200KW': '/solaricon.webp',
};

export default function PowerRatingCards() {
  return (
    <div className="space-y-16">
      {/* Residential Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center" style={{ color: COLORS.primary }}>
            Residential Solar Solutions
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {residentialRatings.map((rating) => (
              <Card
                key={rating}
                className="overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={ratingImageMap[rating]}
                    alt={`${rating} solar graphic`}
                    className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/35" />
                  <div className="relative z-10 h-full flex items-center justify-center text-5xl font-bold text-white">
                    {rating}
                  </div>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <p className="text-gray-600 text-center text-sm">
                    Perfect for residential homes
                  </p>
                  <div className="mt-4 text-center">
                    <span
                      className="inline-block px-4 py-2 rounded-full text-sm font-semibold text-white"
                      style={{ backgroundColor: COLORS.primary }}
                    >
                      {rating} System
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Commercial Section */}
      <section className="py-12" style={{ backgroundColor: COLORS.lightBlue }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center" style={{ color: COLORS.primary }}>
            Commercial Solar Solutions
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {commercialRatings.map((rating) => (
              <Card
                key={rating}
                className="overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={ratingImageMap[rating]}
                    alt={`${rating} commercial solar graphic`}
                    className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/35" />
                  <div className="relative z-10 h-full flex items-center justify-center text-5xl font-bold text-white">
                    {rating}
                  </div>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <p className="text-gray-600 text-center text-sm">
                    Ideal for commercial buildings
                  </p>
                  <div className="mt-4 text-center">
                    <span
                      className="inline-block px-4 py-2 rounded-full text-sm font-semibold text-white"
                      style={{ backgroundColor: COLORS.primary }}
                    >
                      {rating} System
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
