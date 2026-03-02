import { COLORS } from '@/lib/constants';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import { MapPin, Zap, Sun, ArrowRight, TrendingUp, Award, Users } from 'lucide-react';

// Portfolio data matching RecentInstallationsSection + more Lucknow projects
const projects = [
  {
    id: 'gomti-nagar-residential',
    category: 'Residential',
    title: 'Residential Rooftop Installation',
    power: '5 kW',
    description: 'Complete rooftop solar installation for a 3BHK home in Gomti Nagar. Covers 100% of household electricity needs with on-grid solar system.',
    location: 'Gomti Nagar, Lucknow',
    system: 'On-Grid System - 5 kW',
    savings: '₹4,500/month',
    image: '/images/solar-homes.jpg',
    features: ['Net Metering', 'Mobile App Monitoring', '25-Year Performance Warranty'],
    completed: 'January 2024'
  },
  {
    id: 'hazratganj-commercial',
    category: 'Commercial',
    title: 'Commercial Building Solar',
    power: '10 kW',
    description: 'Solar installation for a multi-story commercial complex in Hazratganj. Significantly reduced operational costs and carbon footprint.',
    location: 'Hazratganj, Lucknow',
    system: 'On-Grid System - 10 kW',
    savings: '₹9,000/month',
    image: '/images/solar-commercial.jpg',
    features: ['Commercial Net Metering', 'Peak Shaving', 'Energy Analytics'],
    completed: 'February 2024'
  },
  {
    id: 'alambagh-industrial',
    category: 'Industrial',
    title: 'Industrial Solar Farm',
    power: '50 kW',
    description: 'Large-scale industrial solar installation for a manufacturing unit in Alambagh. Achieved energy independence and reduced electricity bills by 70%.',
    location: 'Alambagh, Lucknow',
    system: 'On-Grid System - 50 kW',
    savings: '₹45,000/month',
    image: '/images/solar-housing-society.jpg',
    features: ['Industrial Grade Panels', 'SCADA Monitoring', 'Power Factor Correction'],
    completed: 'March 2024'
  },
  {
    id: 'indiranagar-residential',
    category: 'Residential',
    title: 'Luxury Home Solar Installation',
    power: '8 kW',
    description: 'Premium solar setup for a luxury villa in Indiranagar. Full home backup with battery storage integration.',
    location: 'Indiranagar, Lucknow',
    system: 'Hybrid System - 8 kW',
    savings: '₹7,200/month',
    image: '/images/solar-homes.jpg',
    features: ['Battery Storage', 'Full Backup', 'Smart Home Integration'],
    completed: 'April 2024'
  },
  {
    id: 'aminabad-shop',
    category: 'Commercial',
    title: 'Retail Shop Solar Panel',
    power: '3 kW',
    description: 'Solar panels for a retail shop in Aminabad market. Reduced daytime electricity costs to zero.',
    location: 'Aminabad, Lucknow',
    system: 'On-Grid System - 3 kW',
    savings: '₹2,700/month',
    image: '/images/solar-commercial.jpg',
    features: ['Quick Installation', 'Net Metering', 'Low Maintenance'],
    completed: 'May 2024'
  },
  {
    id: 'mahanagar-society',
    category: 'Housing Society',
    title: 'Housing Society Solar Project',
    power: '25 kW',
    description: 'Complete solar installation for a residential society in Mahanagar. 50 houses now enjoy reduced electricity bills.',
    location: 'Mahanagar, Lucknow',
    system: 'On-Grid System - 25 kW',
    savings: '₹22,500/month',
    image: '/images/solar-housing-society.jpg',
    features: ['Shared Solar Concept', 'Individual Metering', 'Community Benefits'],
    completed: 'June 2024'
  },
  {
    id: 'jankipuram-school',
    category: 'Institutional',
    title: 'School Solar Installation',
    power: '15 kW',
    description: 'Solar power system for a CBSE school in Jankipuram. Powers all classrooms, labs, and administrative blocks.',
    location: 'Jankipuram, Lucknow',
    system: 'On-Grid System - 15 kW',
    savings: '₹13,500/month',
    image: '/images/solar-housing-society.jpg',
    features: ['Educational Display', 'Zero Electricity Cost', 'Government Subsidy Applied'],
    completed: 'July 2024'
  },
  {
    id: 'krishna-nagar-hospital',
    category: 'Healthcare',
    title: 'Hospital Solar System',
    power: '20 kW',
    description: 'Reliable solar power for a nursing home in Krishna Nagar. Ensures uninterrupted power for critical medical equipment.',
    location: 'Krishna Nagar, Lucknow',
    system: 'Hybrid System - 20 kW',
    savings: '₹18,000/month',
    image: '/images/solar-commercial.jpg',
    features: ['Battery Backup', '24/7 Power Supply', 'Medical Equipment Safe'],
    completed: 'August 2024'
  },
  {
    id: 'chinhat-factory',
    category: 'Industrial',
    title: 'Manufacturing Unit Solar',
    power: '100 kW',
    description: 'Massive solar installation for an industrial manufacturing unit in Chinhat. One of the largest rooftop solar plants in Lucknow.',
    location: 'Chinhat, Lucknow',
    system: 'On-Grid System - 100 kW',
    savings: '₹90,000/month',
    image: '/images/solar-housing-society.jpg',
    features: ['Industrial Scale', 'ROI in 3 Years', 'CARBON Credits'],
    completed: 'September 2024'
  }
];

const categories = ['All', 'Residential', 'Commercial', 'Industrial', 'Housing Society', 'Institutional', 'Healthcare'];

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
      {/* Hero Section */}
      <section className="relative py-28 overflow-hidden" style={{ backgroundColor: COLORS.primary }}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-amber-300 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-yellow-200 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full mb-6">
            <Sun className="w-5 h-5" />
            <span className="text-sm font-medium">Premium Solar Installations</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Our <span className="text-yellow-300">Portfolio</span>
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Explore our successful solar installations across <strong>Lucknow, Uttar Pradesh</strong>. 
            From residential rooftops to industrial solar farms - we've powered 1000+ homes and businesses.
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-white/90">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div className="text-left">
                <p className="text-2xl font-bold">1000+</p>
                <p className="text-sm text-white/80">Projects Completed</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                <Zap className="w-6 h-6" />
              </div>
              <div className="text-left">
                <p className="text-2xl font-bold">500 MW</p>
                <p className="text-sm text-white/80">Total Capacity</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                <Award className="w-6 h-6" />
              </div>
              <div className="text-left">
                <p className="text-2xl font-bold">₹1000Cr</p>
                <p className="text-sm text-white/80">Customer Savings</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-8 bg-white shadow-md sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  cat === 'All' 
                    ? 'text-white shadow-lg' 
                    : 'bg-gray-100 text-gray-700 hover:bg-orange-100'
                }`}
                style={cat === 'All' ? { backgroundColor: COLORS.primary } : {}}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Link key={project.id} href={`/portfolio/${project.id}`}>
                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col group cursor-pointer" style={{ borderRadius: '20px' }}>
                  {/* Image Section */}
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Category Badge */}
                    <span 
                      className="absolute top-4 left-4 px-4 py-1.5 rounded-full text-xs font-semibold text-white shadow-lg"
                      style={{ 
                        backgroundColor: 
                          project.category === 'Residential' ? '#10b981' : 
                          project.category === 'Commercial' ? '#3b82f6' : 
                          project.category === 'Industrial' ? '#f59e0b' :
                          project.category === 'Housing Society' ? '#8b5cf6' :
                          project.category === 'Healthcare' ? '#ef4444' : '#6366f1'
                      }}
                    >
                      {project.category}
                    </span>
                    {/* Power Badge */}
                    <span 
                      className="absolute top-4 right-4 px-4 py-1.5 rounded-full text-xs font-bold text-white shadow-lg"
                      style={{ backgroundColor: COLORS.primary }}
                    >
                      {project.power}
                    </span>
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="absolute bottom-4 left-4 right-4">
                        <p className="text-white text-sm font-medium flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          {project.location}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Card Content */}
                  <CardContent className="p-6 flex-grow flex flex-col">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-orange-600 transition-colors" style={{ color: COLORS.primary }}>
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-grow">
                      {project.description}
                    </p>
                    
                    {/* Features Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.features.slice(0, 2).map((feature, idx) => (
                        <span key={idx} className="text-xs px-3 py-1 bg-amber-100 text-amber-700 rounded-full">
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* Stats Row */}
                    <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                      <div>
                        <p className="text-xs text-gray-500">Monthly Savings</p>
                        <p className="text-lg font-bold text-green-600">{project.savings}</p>
                      </div>
                      <div className="flex items-center gap-1 text-orange-500 font-semibold text-sm group-hover:gap-2 transition-all">
                        View Details
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas - Lucknow */}
      <section className="py-16 bg-gradient-to-r from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4" style={{ color: COLORS.primary }}>
              We Install Solar Panels Across Lucknow
            </h2>
            <p className="text-gray-600">
              Our solar installation services cover all major areas in Lucknow
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {['Gomti Nagar', 'Aliganj', 'Indiranagar', 'Mahanagar', 'Hazratganj', 'Aminabad', 'Jankipuram', 'Krishna Nagar', 'Rajajipuram', 'Alambagh', 'Chinhat', 'Itaunja'].map((area) => (
              <div key={area} className="p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all text-center">
                <MapPin className="w-5 h-5 mx-auto mb-2 text-orange-500" />
                <span className="font-semibold text-gray-800 text-sm">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" style={{ backgroundColor: COLORS.primary }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Your Solar Installation?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join 1000+ happy customers in Lucknow who have switched to solar. 
            Get free site survey and consultation today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-orange-600 font-bold rounded-xl hover:bg-gray-100 transition-colors"
            >
              Get Free Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a 
              href="tel:+918933814898"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-orange-500 text-white font-bold rounded-xl hover:bg-orange-600 transition-colors"
            >
              Call +91 89338 14898
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
