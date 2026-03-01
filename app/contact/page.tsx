'use client';

import { COLORS } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    subject: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', phone: '', message: '', subject: '' });
    alert('Thank you! We will contact you soon.');
  };

  return (
    <div>
      {/* Header */}
      <section className="py-20" style={{ backgroundColor: COLORS.lightBlue }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6" style={{ color: COLORS.primary }}>
            Get in Touch
          </h1>
          <p className="text-xl text-gray-700">
            Have questions? We're here to help. Reach out to our team.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4 flex justify-center">📞</div>
              <h3 className="text-xl font-bold mb-2">Phone</h3>
              <a href="tel:+918888999999" className="text-gray-700 hover:text-blue-600">
                +91 8888 999 999
              </a>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4 flex justify-center">✉️</div>
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <a href="mailto:hello@solarsquare.in" className="text-gray-700 hover:text-blue-600">
                hello@solarsquare.in
              </a>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4 flex justify-center">📍</div>
              <h3 className="text-xl font-bold mb-2">Address</h3>
              <p className="text-gray-700">Pan India Service</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4 flex justify-center">🕐</div>
              <h3 className="text-xl font-bold mb-2">Hours</h3>
              <p className="text-gray-700">24/7 Support</p>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6" style={{ color: COLORS.primary }}>
                Send us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Your phone"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your solar needs"
                    rows={6}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full text-white font-bold text-lg"
                  style={{ backgroundColor: COLORS.primary }}
                >
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Details */}
            <div>
              <h2 className="text-3xl font-bold mb-6" style={{ color: COLORS.primary }}>
                Why Choose SolarSquare?
              </h2>
              <div className="space-y-6">
                {[
                  {
                    icon: '✓',
                    title: 'Expert Installation',
                    description: 'Certified professionals with 10+ years of experience',
                  },
                  {
                    icon: '✓',
                    title: 'Guaranteed Quality',
                    description: '5-year warranty on all installations',
                  },
                  {
                    icon: '✓',
                    title: '24/7 Support',
                    description: 'Round-the-clock customer support and monitoring',
                  },
                  {
                    icon: '✓',
                    title: 'Best Prices',
                    description: 'Competitive rates with flexible financing options',
                  },
                  {
                    icon: '✓',
                    title: 'Government Help',
                    description: 'Assistance with subsidies and paperwork',
                  },
                  {
                    icon: '✓',
                    title: 'Trusted Network',
                    description: 'Trusted by 50,000+ customers across India',
                  },
                ].map((feature) => (
                  <div key={feature.title} className="flex gap-4">
                    <div
                      className="text-2xl font-bold flex-shrink-0"
                      style={{ color: COLORS.gold }}
                    >
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg" style={{ color: COLORS.primary }}>
                        {feature.title}
                      </h4>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20" style={{ backgroundColor: COLORS.lightBlue }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12" style={{ color: COLORS.primary }}>
            Our Presence Across India
          </h2>
          <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.6451819256237!2d72.87779631139379!3d19.076090452198844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d000000001!2sMumbai!5e0!3m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
