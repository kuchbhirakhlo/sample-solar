import { COLORS, SOLUTIONS } from '@/lib/constants';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default function SolutionDetailPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const unwrappedParams = params as unknown as { category: string };
  const solution = SOLUTIONS.find((s) => s.id === unwrappedParams.category);

  if (!solution) {
    notFound();
  }

  const detailContent: Record<string, any> = {
    homes: {
      image: '🏠',
      description: 'Residential Solar Solutions',
      details: [
        { title: 'Roof Space Assessment', description: 'We assess your available roof space to determine the optimal system size' },
        { title: 'Cost Analysis', description: 'Detailed breakdown of costs and long-term savings potential' },
        { title: 'Government Subsidies', description: 'We help you avail all available government incentives and subsidies' },
        { title: 'Easy Financing', description: 'Zero down payment options with flexible EMI schemes' },
      ],
      benefits: ['Lower electricity bills', 'Increase home value', 'Government incentives', 'Long warranty'],
    },
    'housing-society': {
      image: '🏘️',
      description: 'Community Solar Solutions',
      details: [
        { title: 'Bulk Installation', description: 'Efficient installation for multiple units with coordinated timelines' },
        { title: 'Shared Savings', description: 'Distribute savings across members for maximum community benefit' },
        { title: 'Dedicated Support', description: 'Dedicated account manager for your society needs' },
        { title: 'Training & Education', description: 'Training programs for society management and residents' },
      ],
      benefits: ['Community cooperation', 'Bulk discounts', 'Shared infrastructure', 'Democratic management'],
    },
    commercial: {
      image: '🏢',
      description: 'Commercial Scale Solutions',
      details: [
        { title: 'Large-Scale Installation', description: 'Engineering and installation for 50KW to several MW systems' },
        { title: 'Business Analytics', description: 'Comprehensive ROI analysis and business case development' },
        { title: 'Regulatory Compliance', description: 'Full compliance with commercial regulations and standards' },
        { title: '24/7 Support', description: 'Round-the-clock monitoring and maintenance support' },
      ],
      benefits: ['Reduced operating costs', 'Tax benefits', 'Corporate green image', 'Energy independence'],
    },
  };

  const content = detailContent[unwrappedParams.category];

  return (
    <div>
      {/* Hero */}
      <section className="py-20" style={{ backgroundColor: COLORS.lightBlue }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-6xl mb-6">{content.image}</div>
          <h1 className="text-5xl font-bold mb-4" style={{ color: COLORS.primary }}>
            {solution.title}
          </h1>
          <p className="text-xl text-gray-700">{content.description}</p>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12" style={{ color: COLORS.primary }}>
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {content.details.map((detail: any) => (
              <Card key={detail.title} className="p-6">
                <h3 className="text-xl font-bold mb-3" style={{ color: COLORS.primary }}>
                  {detail.title}
                </h3>
                <p className="text-gray-700">{detail.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20" style={{ backgroundColor: COLORS.lightBlue }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12" style={{ color: COLORS.primary }}>
            Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {content.benefits.map((benefit: string) => (
              <div key={benefit} className="flex items-center gap-4">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0"
                  style={{ backgroundColor: COLORS.gold }}
                >
                  ✓
                </div>
                <p className="text-gray-700 font-semibold">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6" style={{ color: COLORS.primary }}>
            Ready to Go Solar?
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Get a free personalized quote for your {solution.title.toLowerCase()} solar solution
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="text-white font-bold text-lg"
              style={{ backgroundColor: COLORS.primary }}
            >
              Get Free Quote
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
