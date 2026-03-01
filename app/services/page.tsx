import { COLORS } from '@/lib/constants';
import { Card } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

export default function ServicesPage() {
  const services = [
    {
      title: 'Solar Installation',
      description: 'Professional installation of solar panels on your roof',
      features: ['On-site assessment', 'Quality installation', 'Safety compliance', '5-year warranty'],
      emoji: '⚙️',
    },
    {
      title: 'Solar Maintenance',
      description: 'Regular maintenance and monitoring of your system',
      features: ['Panel cleaning', '24/7 monitoring', 'Rapid repairs', 'Performance reports'],
      emoji: '🔧',
    },
    {
      title: 'Solar Finance',
      description: 'Flexible financing options to make solar affordable',
      features: ['Zero down payment', 'Low interest rates', 'EMI options', 'Government subsidies'],
      emoji: '💳',
    },
    {
      title: 'Energy Audit',
      description: 'Comprehensive analysis of your energy consumption',
      features: ['Usage analysis', 'Savings estimation', 'Customized plan', 'Free consultation'],
      emoji: '📊',
    },
    {
      title: 'Battery Storage',
      description: 'Store solar energy for nighttime use',
      features: ['High capacity', 'Smart integration', 'Backup power', 'Long lifespan'],
      emoji: '🔋',
    },
    {
      title: 'Monitoring System',
      description: 'Real-time tracking of your solar system performance',
      features: ['Mobile app', 'Live analytics', 'Alerts', 'Historical data'],
      emoji: '📱',
    },
  ];

  return (
    <div>
      {/* Header */}
      <section className="py-20" style={{ backgroundColor: COLORS.lightBlue }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6" style={{ color: COLORS.primary }}>
            Our Services
          </h1>
          <p className="text-xl text-gray-700">
            Complete solar solutions from installation to maintenance
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.title} className="p-8 hover:shadow-lg transition-shadow">
                <div className="text-5xl mb-4">{service.emoji}</div>
                <h3 className="text-2xl font-bold mb-2" style={{ color: COLORS.primary }}>
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <CheckCircle size={20} style={{ color: COLORS.gold }} />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20" style={{ backgroundColor: COLORS.lightBlue }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12" style={{ color: COLORS.primary }}>
            Our Process
          </h2>
          <div className="space-y-8">
            {[
              { step: 1, title: 'Consultation', description: 'Free on-site assessment and energy analysis' },
              { step: 2, title: 'Design', description: 'Customized solar system design for your needs' },
              { step: 3, title: 'Installation', description: 'Professional installation with safety compliance' },
              { step: 4, title: 'Activation', description: 'System testing and activation' },
              { step: 5, title: 'Monitoring', description: 'Ongoing monitoring and support' },
            ].map((item) => (
              <div key={item.step} className="flex gap-6 items-start">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0"
                  style={{ backgroundColor: COLORS.primary }}
                >
                  {item.step}
                </div>
                <div>
                  <h4 className="text-2xl font-bold mb-2">{item.title}</h4>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
