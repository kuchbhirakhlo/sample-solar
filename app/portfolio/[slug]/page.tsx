'use client';

import { COLORS } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useQuote } from '@/lib/quote-context';

export default function PortfolioDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const { setIsQuoteOpen } = useQuote();
  const slug = params.slug;

  const projectData: Record<string, any> = {
    'mumbai-residential': {
      title: 'Residential Solar Installation - Mumbai',
      location: 'Mumbai, Maharashtra',
      capacity: '5 KW',
      savings: '₹12,000/year',
      roi: '5 years',
      image: '🏠',
      description: 'A modern 3-story residential home in Mumbai installed a 5KW solar system on their rooftop.',
      details: [
        'Installation Type: Rooftop Solar',
        'System Size: 5 KW',
        'Panels: 10 units of 500W',
        'Inverter: 5KW Hybrid Inverter',
        'Installation Date: January 2023',
        'Annual Generation: 6500 kWh',
      ],
      results: [
        'Monthly Electricity Bill Reduced by 80%',
        'Annual Savings: ₹12,000',
        'CO2 Offset: 7.5 tons/year',
        'Battery Backup Available',
        'Payback Period: 5 years',
      ],
    },
    'bangalore-housing': {
      title: 'Housing Society Solar - Bangalore',
      location: 'Bangalore, Karnataka',
      capacity: '25 KW',
      savings: '₹60,000/year',
      roi: '4 years',
      image: '🏘️',
      description: 'A gated community housing society in Bangalore installed a 25KW solar system for common areas.',
      details: [
        'Installation Type: Society Common Area',
        'System Size: 25 KW',
        'Panels: 50 units of 500W',
        'Inverter: 30KW 3-Phase Inverter',
        'Installation Date: March 2023',
        'Annual Generation: 32,500 kWh',
      ],
      results: [
        'Reduced Common Area Expenses by 70%',
        'Annual Savings: ₹60,000',
        'CO2 Offset: 37.5 tons/year',
        'Benefits All 250 Residents',
        'Payback Period: 4 years',
      ],
    },
    'pune-commercial': {
      title: 'Commercial Office Solar - Pune',
      location: 'Pune, Maharashtra',
      capacity: '100 KW',
      savings: '₹250,000/year',
      roi: '3 years',
      image: '🏢',
      description: 'A corporate office building in Pune installed a 100KW solar system for energy independence.',
      details: [
        'Installation Type: Commercial Rooftop',
        'System Size: 100 KW',
        'Panels: 200 units of 500W',
        'Inverter: 100KW 3-Phase Inverter',
        'Installation Date: May 2023',
        'Annual Generation: 130,000 kWh',
      ],
      results: [
        'Reduced Operating Costs by 60%',
        'Annual Savings: ₹250,000',
        'CO2 Offset: 150 tons/year',
        'Energy Independence',
        'Payback Period: 3 years',
      ],
    },
    'delhi-hospital': {
      title: 'Hospital Solar System - Delhi',
      location: 'Delhi, Delhi',
      capacity: '75 KW',
      savings: '₹200,000/year',
      roi: '3.5 years',
      image: '🏥',
      description: 'A 200-bed hospital in Delhi installed a 75KW solar system with battery backup for uninterrupted power.',
      details: [
        'Installation Type: Hospital Rooftop',
        'System Size: 75 KW',
        'Battery Backup: 150 kWh',
        'Panels: 150 units of 500W',
        'Inverter: 80KW Hybrid Inverter',
        'Installation Date: June 2023',
      ],
      results: [
        'Reduced Operating Costs by 50%',
        'Annual Savings: ₹200,000',
        'CO2 Offset: 112 tons/year',
        'Critical Power Backup',
        'Payback Period: 3.5 years',
      ],
    },
    'hyderabad-school': {
      title: 'School Solar Installation - Hyderabad',
      location: 'Hyderabad, Telangana',
      capacity: '30 KW',
      savings: '₹75,000/year',
      roi: '4 years',
      image: '🎓',
      description: 'A leading school in Hyderabad installed a 30KW solar system for sustainability.',
      details: [
        'Installation Type: School Building Rooftop',
        'System Size: 30 KW',
        'Panels: 60 units of 500W',
        'Inverter: 30KW 3-Phase Inverter',
        'Installation Date: July 2023',
        'Annual Generation: 39,000 kWh',
      ],
      results: [
        'Reduced Operating Budget by 65%',
        'Annual Savings: ₹75,000',
        'CO2 Offset: 45 tons/year',
        'Educational Value',
        'Payback Period: 4 years',
      ],
    },
    'ahmedabad-factory': {
      title: 'Factory Solar Plant - Ahmedabad',
      location: 'Ahmedabad, Gujarat',
      capacity: '200 KW',
      savings: '₹500,000/year',
      roi: '2.5 years',
      image: '🏭',
      description: 'A manufacturing factory in Ahmedabad installed a 200KW solar system for energy independence.',
      details: [
        'Installation Type: Factory Ground Mount + Rooftop',
        'System Size: 200 KW',
        'Panels: 400 units of 500W',
        'Inverter: 200KW 3-Phase Inverter',
        'Installation Date: August 2023',
        'Annual Generation: 260,000 kWh',
      ],
      results: [
        'Reduced Production Costs by 40%',
        'Annual Savings: ₹500,000',
        'CO2 Offset: 300 tons/year',
        'Industrial Grade System',
        'Payback Period: 2.5 years',
      ],
    },
  };

  const project = projectData[unwrappedParams.slug];

  if (!project) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-4xl font-bold">Project Not Found</h1>
        <Link href="/portfolio">
          <Button className="mt-8">Back to Portfolio</Button>
        </Link>
      </div>
    );
  }

  return (
    <div>
      {/* Hero */}
      <section className="py-20" style={{ backgroundColor: COLORS.lightBlue }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-6xl mb-6">{project.image}</div>
          <h1 className="text-5xl font-bold mb-4" style={{ color: COLORS.primary }}>
            {project.title}
          </h1>
          <p className="text-xl text-gray-700">{project.location}</p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: 'Capacity', value: project.capacity },
              { label: 'Annual Savings', value: project.savings },
              { label: 'ROI Period', value: project.roi },
              { label: 'Status', value: 'Completed' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-bold mb-2" style={{ color: COLORS.primary }}>
                  {stat.value}
                </div>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6" style={{ color: COLORS.primary }}>
            Project Overview
          </h2>
          <p className="text-lg text-gray-700 mb-12">{project.description}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6" style={{ color: COLORS.primary }}>
                System Details
              </h3>
              <ul className="space-y-3">
                {project.details.map((detail: string) => (
                  <li key={detail} className="flex gap-3">
                    <span style={{ color: COLORS.gold }} className="font-bold">•</span>
                    <span className="text-gray-700">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6" style={{ color: COLORS.primary }}>
                Results Achieved
              </h3>
              <ul className="space-y-3">
                {project.results.map((result: string) => (
                  <li key={result} className="flex gap-3">
                    <span style={{ color: COLORS.gold }} className="font-bold">✓</span>
                    <span className="text-gray-700">{result}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ backgroundColor: COLORS.lightBlue }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6" style={{ color: COLORS.primary }}>
            Ready for Your Solar Project?
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Get a free customized quote based on your specific requirements
          </p>
          <Button
            size="lg"
            className="text-white font-bold text-lg"
            style={{ backgroundColor: COLORS.primary }}
            onClick={() => setIsQuoteOpen(true)}
          >
            Get Free Quote
          </Button>
        </div>
      </section>

      {/* Back Link */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/portfolio" className="text-blue-600 hover:underline font-semibold">
            ← Back to Portfolio
          </Link>
        </div>
      </section>
    </div>
  );
}
