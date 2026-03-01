'use client';

import { Card } from '@/components/ui/card';
import { Star } from 'lucide-react';
import { COLORS } from '@/lib/constants';

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: 'Rajesh Chopra',
      company: 'Mumbai',
      content: 'SolarSquare has completely transformed my home. I am now saving ₹5000 every month on electricity bills!',
      rating: 5,
      image: '👨‍💼',
    },
    {
      id: 2,
      name: 'Priya Sharma',
      company: 'Bangalore',
      content: 'The installation was smooth and the team was very professional. Highly recommended!',
      rating: 5,
      image: '👩‍💼',
    },
    {
      id: 3,
      name: 'Amit Patel',
      company: 'Gujarat',
      content: 'Best decision ever! Not only saving money but also contributing to a sustainable future.',
      rating: 5,
      image: '👨‍💻',
    },
  ];

  return (
    <section className="py-20" style={{ backgroundColor: COLORS.lightBlue }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-4" style={{ color: COLORS.primary }}>
          90% of customers recommend us!
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Don't just believe us—read the reviews for yourself
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-4xl">{testimonial.image}</div>
                <div>
                  <h4 className="font-bold text-lg" style={{ color: COLORS.primary }}>
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-600 text-sm">{testimonial.company}</p>
                </div>
              </div>
              <div className="flex gap-1 mb-4">
                {Array(testimonial.rating)
                  .fill(0)
                  .map((_, i) => (
                    <Star key={i} size={16} fill={COLORS.gold} color={COLORS.gold} />
                  ))}
              </div>
              <p className="text-gray-700 italic">"{testimonial.content}"</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
