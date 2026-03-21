'use client';

import { Card } from '@/components/ui/card';
import Image from 'next/image';
import { COLORS, SOLUTIONS } from '@/lib/constants';

const solutionImages: Record<string, string> = {
  '1': '/images/solar-homes.jpg',
  '2': '/images/solar-housing-society.jpg',
  '3': '/images/solar-commercial.jpg',
};

export default function SolutionsShowcase() {
  return (
    <section className="py-20 bg-white" id="offerings">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-4" style={{ color: COLORS.primary }}>
          Our solar solutions
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Tailored solar energy solutions for every need
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SOLUTIONS.map((solution) => (
            <Card
              key={solution.id}
              className="overflow-hidden hover:shadow-lg transition-shadow h-full"
            >
              <div className="h-64 relative bg-gray-200 overflow-hidden">
                <Image
                  src={solutionImages[solution.id] || '/images/solar-homes.jpg'}
                  alt={solution.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2" style={{ color: COLORS.primary }}>
                  {solution.title}
                </h3>
                <p className="text-gray-600 mb-4">{solution.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
