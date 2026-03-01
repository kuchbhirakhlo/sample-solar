'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
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
            <Link key={solution.id} href={`/solar-solutions/${solution.id}`}>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer h-full">
                <div
                  className="h-64 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-center p-6"
                  style={{
                    backgroundImage: `linear-gradient(135deg, ${COLORS.primary}80, ${COLORS.gold}80)`,
                  }}
                >
                  <div>
                    <div className="text-6xl mb-2">☀️</div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2" style={{ color: COLORS.primary }}>
                    {solution.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{solution.description}</p>
                  <Button
                    variant="outline"
                    className="w-full border-2"
                    style={{ borderColor: COLORS.primary, color: COLORS.primary }}
                  >
                    Learn More →
                  </Button>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
