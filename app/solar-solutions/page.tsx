import { COLORS, SOLUTIONS } from '@/lib/constants';
import { Card } from '@/components/ui/card';
import PowerRatingCards from '@/components/PowerRatingCards';

export default function SolarSolutionsPage() {
  return (
    <div>
      {/* Header */}
      <section className="py-20" style={{ backgroundColor: COLORS.lightBlue }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6" style={{ color: COLORS.primary }}>
            Solar Solutions
          </h1>
          <p className="text-xl text-gray-700">
            Tailored solar energy solutions for every need
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SOLUTIONS.map((solution) => (
              <Card
                key={solution.id}
                className="overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <h3 className="text-3xl font-bold mb-4" style={{ color: COLORS.primary }}>
                    {solution.title}
                  </h3>
                  <p className="text-gray-700 mb-6 flex-grow">{solution.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Power Rating Cards */}
      <section className="py-12 bg-gray-50">
        <PowerRatingCards />
      </section>

      {/* Comparison Section */}
      <section className="py-20" style={{ backgroundColor: COLORS.lightBlue }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12" style={{ color: COLORS.primary }}>
            Choose Your Perfect Solution
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-center">
              <thead>
                <tr className="border-b-2" style={{ borderColor: COLORS.primary }}>
                  <th className="py-4 px-4 text-left">Feature</th>
                  <th className="py-4 px-4">Homes</th>
                  <th className="py-4 px-4">Housing Society</th>
                  <th className="py-4 px-4">Commercial</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: 'Installation Size', homes: '2-5 KW', society: '10-50 KW', commercial: '50+ KW' },
                  { feature: 'Average Savings', homes: '₹10-15K/yr', society: '₹50-100K/yr', commercial: '₹100K+/yr' },
                  { feature: 'Maintenance', homes: 'Minimal', society: 'Quarterly', commercial: 'Monthly' },
                  { feature: 'ROI Period', homes: '5-6 years', society: '4-5 years', commercial: '3-4 years' },
                ].map((row) => (
                  <tr key={row.feature} className="border-b border-gray-300 hover:bg-gray-100">
                    <td className="py-4 px-4 text-left font-semibold">{row.feature}</td>
                    <td className="py-4 px-4">{row.homes}</td>
                    <td className="py-4 px-4">{row.society}</td>
                    <td className="py-4 px-4">{row.commercial}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
