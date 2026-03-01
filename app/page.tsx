import HeroSection from '@/components/HeroSection';
import SolutionsShowcase from '@/components/SolutionsShowcase';
import TestimonialsSection from '@/components/TestimonialsSection';
import FAQSection from '@/components/FAQSection';
import NewsSection from '@/components/NewsSection';
import { COLORS } from '@/lib/constants';

export default function Home() {
  return (
    <>
      <HeroSection />
      <SolutionsShowcase />
      <TestimonialsSection />
      <FAQSection />
      <NewsSection />

      {/* Trusted Brands Section */}
      <section className="py-16" style={{ backgroundColor: COLORS.lightBlue }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: COLORS.primary }}>
            Trusted By
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {['Johnson & Johnson', 'Decor', 'Prince', 'TVS', 'Ultratech'].map((brand) => (
              <div
                key={brand}
                className="text-gray-700 font-semibold text-lg hover:opacity-75 transition-opacity"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" style={{ backgroundColor: COLORS.primary }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Ready to Go Solar?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Join thousands of Indians saving on electricity bills with SolarSquare
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 rounded-lg font-bold text-lg transition-all hover:opacity-90"
            style={{ backgroundColor: COLORS.gold, color: COLORS.darkBlue }}
          >
            Get Free Quote Today
          </a>
        </div>
      </section>
    </>
  );
}
