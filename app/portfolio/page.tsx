import { COLORS } from '@/lib/constants';
import { Card } from '@/components/ui/card';
import Link from 'next/link';

export default function PortfolioPage() {
  const projects = [
    {
      id: 1,
      title: 'Residential Solar Installation',
      location: 'Mumbai, Maharashtra',
      capacity: '5 KW',
      savings: '₹12,000/year',
      category: 'residential',
      image: '🏠',
      slug: 'mumbai-residential',
    },
    {
      id: 2,
      title: 'Housing Society Solar',
      location: 'Bangalore, Karnataka',
      capacity: '25 KW',
      savings: '₹60,000/year',
      category: 'society',
      image: '🏘️',
      slug: 'bangalore-housing',
    },
    {
      id: 3,
      title: 'Commercial Office Solar',
      location: 'Pune, Maharashtra',
      capacity: '100 KW',
      savings: '₹250,000/year',
      category: 'commercial',
      image: '🏢',
      slug: 'pune-commercial',
    },
    {
      id: 4,
      title: 'Hospital Solar System',
      location: 'Delhi, Delhi',
      capacity: '75 KW',
      savings: '₹200,000/year',
      category: 'commercial',
      image: '🏥',
      slug: 'delhi-hospital',
    },
    {
      id: 5,
      title: 'School Solar Installation',
      location: 'Hyderabad, Telangana',
      capacity: '30 KW',
      savings: '₹75,000/year',
      category: 'society',
      image: '🎓',
      slug: 'hyderabad-school',
    },
    {
      id: 6,
      title: 'Factory Solar Plant',
      location: 'Ahmedabad, Gujarat',
      capacity: '200 KW',
      savings: '₹500,000/year',
      category: 'commercial',
      image: '🏭',
      slug: 'ahmedabad-factory',
    },
  ];

  return (
    <div>
      {/* Header */}
      <section className="py-20" style={{ backgroundColor: COLORS.lightBlue }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6" style={{ color: COLORS.primary }}>
            Our Portfolio
          </h1>
          <p className="text-xl text-gray-700">
            Showcasing successful solar installations across India
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Link key={project.id} href={`/portfolio/${project.slug}`}>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer h-full flex flex-col">
                  <div
                    className="h-48 flex items-center justify-center text-6xl"
                    style={{
                      backgroundImage: `linear-gradient(135deg, ${COLORS.primary}20, ${COLORS.gold}20)`,
                    }}
                  >
                    {project.image}
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-xl font-bold mb-2" style={{ color: COLORS.primary }}>
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">{project.location}</p>
                    <div className="space-y-2 mb-4 flex-grow">
                      <p className="text-gray-700">
                        <span className="font-semibold">Capacity:</span> {project.capacity}
                      </p>
                      <p className="text-gray-700">
                        <span className="font-semibold">Annual Savings:</span> {project.savings}
                      </p>
                    </div>
                    <a
                      href={`/portfolio/${project.slug}`}
                      className="text-sm font-semibold inline-block hover:opacity-75 transition-opacity"
                      style={{ color: COLORS.primary }}
                    >
                      View Case Study →
                    </a>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20" style={{ backgroundColor: COLORS.lightBlue }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { number: '1000+', label: 'Projects Completed' },
              { number: '500MW', label: 'Total Capacity' },
              { number: '₹1000Cr', label: 'Customer Savings' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-5xl font-bold mb-2" style={{ color: COLORS.primary }}>
                  {stat.number}
                </div>
                <p className="text-gray-700 font-semibold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
