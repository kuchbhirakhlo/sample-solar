import { COLORS } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20" style={{ backgroundColor: COLORS.lightBlue }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6" style={{ color: COLORS.primary }}>
            About SolarSquare
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Transforming India's energy future, one solar panel at a time.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6" style={{ color: COLORS.primary }}>
                Our Mission
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                At SolarSquare, we believe that clean, renewable energy should be accessible to everyone. Our mission is to make solar power the most affordable and reliable energy source in India.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                We're committed to reducing carbon footprints while helping families and businesses save on electricity costs. Every installation is a step towards a sustainable future.
              </p>
              <Link href="/contact">
                <Button
                  size="lg"
                  className="text-white font-bold"
                  style={{ backgroundColor: COLORS.primary }}
                >
                  Get Started Today
                </Button>
              </Link>
            </div>
            <div
              className="h-96 rounded-lg flex items-center justify-center text-6xl"
              style={{ backgroundImage: `linear-gradient(135deg, ${COLORS.primary}20, ${COLORS.gold}20)` }}
            >
              ♻️
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20" style={{ backgroundColor: COLORS.lightBlue }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12" style={{ color: COLORS.primary }}>
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Innovation', description: 'Constantly evolving our technology and services', emoji: '💡' },
              { title: 'Sustainability', description: 'Protecting our planet for future generations', emoji: '🌱' },
              { title: 'Integrity', description: 'Being transparent and honest in all dealings', emoji: '🤝' },
            ].map((value) => (
              <div key={value.title} className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="text-5xl mb-4">{value.emoji}</div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: COLORS.primary }}>
                  {value.title}
                </h3>
                <p className="text-gray-700">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12" style={{ color: COLORS.primary }}>
            By The Numbers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: '50K+', label: 'Happy Customers' },
              { number: '150MW', label: 'Solar Capacity Installed' },
              { number: '₹500Cr', label: 'Savings Generated' },
              { number: '10+', label: 'Years of Experience' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div
                  className="text-5xl font-bold mb-4"
                  style={{ color: COLORS.primary }}
                >
                  {stat.number}
                </div>
                <p className="text-gray-700 font-semibold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20" style={{ backgroundColor: COLORS.lightBlue }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12" style={{ color: COLORS.primary }}>
            Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Rajesh Kumar', role: 'Founder & CEO', emoji: '👨‍💼' },
              { name: 'Priya Singh', role: 'Chief Technology Officer', emoji: '👩‍💼' },
              { name: 'Amit Verma', role: 'Operations Director', emoji: '👨‍💻' },
            ].map((member) => (
              <div key={member.name} className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="text-6xl mb-4">{member.emoji}</div>
                <h3 className="text-2xl font-bold mb-2" style={{ color: COLORS.primary }}>
                  {member.name}
                </h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
