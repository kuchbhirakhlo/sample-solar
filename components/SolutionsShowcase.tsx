'use client';

import { Card } from '@/components/ui/card';
import Image from 'next/image';
import { COLORS, SOLUTIONS } from '@/lib/constants';

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
              <div className="h-56 relative bg-gray-200 overflow-hidden">
                <Image
                  src={solution.image}
                  alt={solution.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  priority={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3" style={{ color: COLORS.primary }}>
                  {solution.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {solution.description}
                </p>
                <ul className="space-y-2 mb-4">
                  {solution.features?.slice(0, 3).map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="text-green-500 mt-0.5">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                {solution.features && solution.features.length > 3 && (
                  <p className="text-xs text-gray-500">
                    +{solution.features.length - 3} more benefits
                  </p>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
