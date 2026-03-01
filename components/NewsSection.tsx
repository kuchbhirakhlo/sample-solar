'use client';

import { Card } from '@/components/ui/card';
import { COLORS } from '@/lib/constants';
import Link from 'next/link';

export default function NewsSection() {
  const news = [
    {
      id: 1,
      title: "India's Green Revolution: Solar Power Takes Center Stage",
      excerpt: 'Discover how solar energy is transforming India\'s power landscape',
      image: '🌍',
      date: 'March 1, 2024',
      slug: 'india-green-revolution',
    },
    {
      id: 2,
      title: 'How to Maximize Your Solar Panel Efficiency',
      excerpt: 'Expert tips for getting the most out of your solar installation',
      image: '⚡',
      date: 'February 28, 2024',
      slug: 'maximize-solar-efficiency',
    },
    {
      id: 3,
      title: 'Solar Energy Cost Comparison: Then vs Now',
      excerpt: 'See how solar prices have dropped dramatically in the past decade',
      image: '💰',
      date: 'February 25, 2024',
      slug: 'solar-cost-comparison',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-4" style={{ color: COLORS.primary }}>
          In the News
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Latest articles and insights about solar energy
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((article) => (
            <Link key={article.id} href={`/blog/${article.slug}`}>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer h-full flex flex-col">
                <div
                  className="h-48 flex items-center justify-center text-6xl"
                  style={{
                    backgroundImage: `linear-gradient(135deg, ${COLORS.primary}20, ${COLORS.gold}20)`,
                  }}
                >
                  {article.image}
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <p className="text-sm text-gray-500 mb-2">{article.date}</p>
                  <h3 className="text-xl font-bold mb-2" style={{ color: COLORS.primary }}>
                    {article.title}
                  </h3>
                  <p className="text-gray-600 flex-grow">{article.excerpt}</p>
                  <Link
                    href={`/blog/${article.slug}`}
                    className="text-sm font-semibold mt-4 inline-block hover:opacity-75 transition-opacity"
                    style={{ color: COLORS.primary }}
                  >
                    Read More →
                  </Link>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="inline-block px-8 py-3 rounded-lg font-semibold transition-all hover:opacity-80"
            style={{ backgroundColor: COLORS.primary, color: 'white' }}
          >
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
}
