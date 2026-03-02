import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { COLORS } from '@/lib/constants';
import { MapPin, Zap, ArrowRight } from 'lucide-react';

const projects = [
  {
    category: 'Residential',
    power: '5 kW',
    title: 'Residential Rooftop Installation',
    description: 'Complete rooftop solar installation for a 3BHK home. Covers 100% of household electricity needs.',
    location: 'Gomti Nagar, Lucknow',
    system: 'On-Grid System - 5 kW',
    savings: '₹4,500/month',
    image: '/images/solar-homes.jpg'
  },
  {
    category: 'Commercial',
    power: '10 kW',
    title: 'Commercial Building Solar',
    description: 'Solar installation for a multi-story commercial complex. Significantly reduced operational costs.',
    location: 'Hazratganj, Lucknow',
    system: 'On-Grid System - 10 kW',
    savings: '₹9,000/month',
    image: '/images/solar-commercial.jpg'
  },
  {
    category: 'Industrial',
    power: '50 kW',
    title: 'Industrial Solar Farm',
    description: 'Large-scale industrial solar installation for a manufacturing unit. Achieved energy independence.',
    location: 'Alambagh, Lucknow',
    system: 'On-Grid System - 50 kW',
    savings: '₹45,000/month',
    image: '/images/solar-housing-society.jpg'
  }
];

export default function RecentInstallationsSection() {
  return (
    <section className="py-20" style={{ backgroundColor: '#ffffff' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span 
            className="inline-block px-4 py-1 rounded-full text-sm font-medium mb-4"
            style={{ backgroundColor: COLORS.lightBlue, color: COLORS.primary }}
          >
            Project Highlights
          </span>
          <h2 className="text-4xl font-bold mb-4" style={{ color: COLORS.primary }}>
            Our Recent Installations
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Real projects, real savings. See how we've helped homes and businesses across Lucknow go solar.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0"
              style={{ borderRadius: '16px' }}
            >
              {/* Card Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                {/* Category Badge */}
                <span 
                  className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-medium text-white"
                  style={{ 
                    backgroundColor: project.category === 'Residential' ? '#10b981' : project.category === 'Commercial' ? '#3b82f6' : '#f59e0b'
                  }}
                >
                  {project.category}
                </span>
                {/* Power Badge */}
                <span 
                  className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-medium text-white"
                  style={{ backgroundColor: COLORS.primary }}
                >
                  {project.power}
                </span>
              </div>

              {/* Card Content */}
              <CardContent className="p-5">
                <h3 className="text-xl font-bold mb-2" style={{ color: COLORS.primary }}>
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                {/* Location & System Info */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin className="w-4 h-4" style={{ color: COLORS.primary }} />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Zap className="w-4 h-4" style={{ color: COLORS.primary }} />
                    <span>{project.system}</span>
                  </div>
                </div>

                {/* Savings Box */}
                <div 
                  className="p-3 rounded-lg"
                  style={{ backgroundColor: COLORS.lightBlue }}
                >
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium" style={{ color: COLORS.primary }}>
                      Monthly Savings
                    </span>
                    <span className="text-lg font-bold" style={{ color: COLORS.primary }}>
                      {project.savings}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/portfolio">
            <Button
              size="lg"
              className="font-bold px-8 py-6 rounded-full group"
              style={{ backgroundColor: COLORS.primary, color: 'white' }}
            >
              View All Projects
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Link href="/contact">
            <Button
              size="lg"
              variant="outline"
              className="font-bold px-8 py-6 rounded-full group border-2"
              style={{ borderColor: COLORS.primary, color: COLORS.primary }}
            >
              Get Free Quote
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
