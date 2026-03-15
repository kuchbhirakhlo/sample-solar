'use client';

import { COLORS } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Sun, Zap, Leaf } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    subject: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', phone: '', message: '', subject: '' });
    alert('Thank you! We will contact you soon.');
  };

  const sendToWhatsApp = () => {
    if (!formData.name || !formData.phone || !formData.message) {
      alert('Please fill in your name, phone number, and message');
      return;
    }

    const phoneNumber = '918933814898';
    const message = encodeURIComponent(`*New Inquiry from Orintek Solar Website - Lucknow*

*Name:* ${formData.name}
*Email:* ${formData.email || 'Not provided'}
*Phone:* ${formData.phone}
*Subject:* ${formData.subject || 'General Inquiry'}
*Message:* ${formData.message}

Looking for Solar Panel in Lucknow? Contact us for best deals!`);

    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const serviceAreas = [
    { name: 'Gomti Nagar', keyword: 'Solar Panel in Gomti Nagar Lucknow' },
    { name: 'Aliganj', keyword: 'Solar Panel in Aliganj Lucknow' },
    { name: 'Indiranagar', keyword: 'Solar Panel in Indiranagar Lucknow' },
    { name: 'Mahanagar', keyword: 'Solar Panel in Mahanagar Lucknow' },
    { name: 'Aminabad', keyword: 'Solar Panel in Aminabad Lucknow' },
    { name: 'Hazratganj', keyword: 'Solar Panel in Hazratganj Lucknow' },
    { name: 'Jankipuram', keyword: 'Solar Panel in Jankipuram Lucknow' },
    { name: 'Krishna Nagar', keyword: 'Solar Panel in Krishna Nagar Lucknow' },
    { name: 'Rajajipuram', keyword: 'Solar Panel in Rajajipuram Lucknow' },
    { name: 'Chinhat', keyword: 'Solar Panel in Chinhat Lucknow' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
      {/* Hero Section with Background Pattern */}
      <section className="relative py-24 overflow-hidden" style={{ backgroundColor: COLORS.primary }}>
        {/* Decorative pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-amber-300 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-yellow-200 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full mb-6">
            <Sun className="w-5 h-5" />
            <span className="text-sm font-medium">Best Solar Company in Lucknow</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Contact <span className="text-yellow-300">Orintek Solar</span>
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Looking for <strong>Solar Panel in Lucknow</strong>? Get in touch with Uttar Pradesh's most trusted solar provider.
            We serve all areas including Gomti Nagar, Aliganj, and across Lucknow city.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-white/90">
            <span className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-yellow-300" />
              Lucknow, Uttar Pradesh
            </span>
            <span className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-yellow-300" />
              Free Site Survey
            </span>
            <span className="flex items-center gap-2">
              <Leaf className="w-5 h-5 text-yellow-300" />
              5-Year Warranty
            </span>
          </div>
        </div>
      </section>

      {/* Quick Contact Cards */}
      <section className="relative -mt-12 z-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 bg-white border-t-4" style={{ borderTopColor: COLORS.primary }}>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: COLORS.lightBlue }}>
                  <Phone className="w-6 h-6" style={{ color: COLORS.primary }} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Call Us</p>
                  <a href="tel:+918933814898" className="text-lg font-bold" style={{ color: COLORS.primary }}>
                    +91 89338 14898
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 bg-white border-t-4" style={{ borderTopColor: '#25D366' }}>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full flex items-center justify-center bg-green-100">
                  <MessageCircle className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">WhatsApp</p>
                  <a href="https://wa.me/918933814898" className="text-lg font-bold text-green-600">
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 bg-white border-t-4" style={{ borderTopColor: COLORS.gold }}>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full flex items-center justify-center bg-amber-100">
                  <Mail className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Email</p>
                  <a href="mailto:orinteksolar@gmail.com" className="text-lg font-bold text-amber-600">
                    orinteksolar@gmail.com
                  </a>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: COLORS.primary }}>
                  <Send className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold" style={{ color: COLORS.primary }}>Get Free Quote</h2>
                  <p className="text-gray-600 text-sm">Solar Panel in Lucknow - Best Prices Guaranteed</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Your phone"
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 bg-white"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Inquiry Type</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 bg-white"
                  >
                    <option value="">Select inquiry type</option>
                    <option value="Residential Solar">Residential Solar Panel in Lucknow</option>
                    <option value="Commercial Solar">Commercial Solar Panel in Lucknow</option>
                    <option value="Solar Water Pump">Solar Water Pump in Lucknow</option>
                    <option value="Solar AMC">Solar AMC Services Lucknow</option>
                    <option value="Other">Other Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Your Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your solar requirements - We're the best Solar Panel dealer in Gomti Nagar Lucknow and all over Lucknow..."
                    rows={4}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 bg-white resize-none"
                  />
                </div>

                <div className="space-y-3 pt-2">
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full text-white font-bold text-lg py-4 rounded-xl shadow-lg hover:shadow-xl transition-all"
                    style={{ backgroundColor: COLORS.primary }}
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Request Free Consultation
                  </Button>
                  <Button
                    type="button"
                    size="lg"
                    className="w-full font-bold text-lg py-4 rounded-xl shadow-lg hover:shadow-xl transition-all"
                    style={{ backgroundColor: '#25D366', color: 'white' }}
                    onClick={sendToWhatsApp}
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Chat on WhatsApp
                  </Button>
                </div>
              </form>
            </div>

            {/* Why Choose Us */}
            <div>
              <h2 className="text-3xl font-bold mb-2" style={{ color: COLORS.primary }}>
                Why Choose Orintek Solar?
              </h2>
              <p className="text-gray-600 mb-8">
                Leading <strong>Solar Panel dealer in Lucknow</strong> - Trusted by thousands of homeowners and businesses across Uttar Pradesh
              </p>

              <div className="space-y-4">
                {[
                  {
                    icon: '🏆',
                    title: '#1 Solar Company in Lucknow',
                    description: 'Award-winning solar panel installation services in Gomti Nagar, Aliganj, and all Lucknow areas',
                  },
                  {
                    icon: '✅',
                    title: 'Certified Installers',
                    description: 'Team of MNRE certified solar panel technicians serving Lucknow and Uttar Pradesh',
                  },
                  {
                    icon: '💰',
                    title: 'Best Prices in Lucknow',
                    description: 'Competitive rates for solar panels - We beat any quote in Lucknow city',
                  },
                  {
                    icon: '🔧',
                    title: '5-Year On-Site Warranty',
                    description: 'Comprehensive warranty on all solar panel installations across Lucknow',
                  },
                  {
                    icon: '📞',
                    title: '24/7 Support in Lucknow',
                    description: 'Dedicated customer support for all our solar panel customers in Lucknow',
                  },
                  {
                    icon: '🏠',
                    title: '2000+ Homes Powered',
                    description: 'Successfully installed solar panels in 2000+ homes across Lucknow',
                  },
                ].map((feature) => (
                  <div key={feature.title} className="flex gap-4 p-4 bg-amber-50 rounded-xl hover:bg-orange-50 transition-colors">
                    <div className="text-3xl flex-shrink-0">{feature.icon}</div>
                    <div>
                      <h4 className="font-bold text-lg" style={{ color: COLORS.primary }}>
                        {feature.title}
                      </h4>
                      <p className="text-gray-600 text-sm">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Location Card */}
              <div className="mt-8 p-6 bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl text-white">
                <div className="flex items-center gap-3 mb-3">
                  <MapPin className="w-6 h-6" />
                  <h3 className="font-bold text-lg">Visit Our Office</h3>
                </div>
                <p className="text-white/90 mb-4">
                  <strong>Oriontek Solar</strong> - Premier solar panel provider in Lucknow, Uttar Pradesh
                </p>
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="w-4 h-4" />
                  <span>Mon - Sat: 9:00 AM - 7:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas - Lucknow Specific */}
      <section className="py-16 bg-gradient-to-r from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" style={{ color: COLORS.primary }}>
              Solar Panel Services Across Lucknow
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Professional <strong>Solar Panel installation in Lucknow</strong>. We serve all major areas including Gomti Nagar, Aliganj, Indiranagar, and entire Lucknow district.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {serviceAreas.map((area) => (
              <a
                key={area.name}
                href={`#inquiry`}
                className="p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all text-center hover:-translate-y-1 border-2 border-transparent hover:border-orange-400"
              >
                <MapPin className="w-5 h-5 mx-auto mb-2 text-orange-500" />
                <span className="font-semibold text-gray-800">{area.name}</span>
                <p className="text-xs text-gray-500 mt-1">Solar Panel in {area.name}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Lucknow Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" style={{ color: COLORS.primary }}>
              Our Solar Panel Services in Lucknow
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Serving <strong>Lucknow, Uttar Pradesh</strong> with top-quality solar panel installations.
              Find us in the heart of Lucknow city - your trusted solar partner in the city of nawabs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Lucknow Map */}
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <div className="w-full h-96 md:h-[500px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d228.62423276374258!2d80.94227646958743!3d26.84699668207749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfe6c17353547%3A0x4a3e6b1e5c73a1!2sLucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1706745600000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Oriontek Solar - Lucknow Location"
                />
              </div>
              <div className="bg-gradient-to-r from-orange-600 to-amber-600 p-4 text-white text-center">
                <p className="font-semibold">📍 Orintek Solar - Lucknow, Uttar Pradesh, India</p>
              </div>
            </div>

            {/* SEO Content for Lucknow */}
            <div className="space-y-6">
              <div className="p-6 bg-amber-50 rounded-2xl">
                <h3 className="text-xl font-bold mb-4" style={{ color: COLORS.primary }}>
                  Solar Panel in Gomti Nagar Lucknow
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Looking for the <strong>best solar panel in Gomti Nagar Lucknow</strong>? Orintek Solar provides premium solar panel
                  installation services in Gomti Nagar and nearby areas. Our expert team offers residential and commercial solar solutions
                  with free site survey in Gomti Nagar, Lucknow.
                </p>
              </div>

              <div className="p-6 bg-orange-50 rounded-2xl">
                <h3 className="text-xl font-bold mb-4" style={{ color: COLORS.primary }}>
                  Solar Panel in Aliganj Lucknow
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Get <strong>Solar Panel installation in Aliganj Lucknow</strong> from Uttar Pradesh's leading solar company.
                  We provide affordable solar panel solutions with government subsidy assistance in Aliganj and surrounding areas of Lucknow.
                </p>
              </div>

              <div className="p-6 bg-amber-50 rounded-2xl">
                <h3 className="text-xl font-bold mb-4" style={{ color: COLORS.primary }}>
                  Contact Us for Solar in Lucknow
                </h3>
                <div className="space-y-3 text-gray-700">
                  <p className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-orange-500" />
                    <a href="tel:+918933814898" className="font-semibold">+91 89338 14898</a>
                  </p>
                  <p className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-orange-500" />
                    <a href="mailto:orinteksolar@gmail.com" className="font-semibold">orinteksolar@gmail.com</a>
                  </p>
                  <p className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-orange-500" />
                    <span className="font-semibold">Lucknow, Uttar Pradesh, India</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Keywords Section */}
      <section className="py-12 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-center text-lg font-semibold mb-8 text-gray-300">
            Keywords: Solar Panel in Lucknow | Solar Panel in Gomti Nagar Lucknow | Solar Panel in Aliganj Lucknow |
            Solar Company in Lucknow | Solar Dealer in Lucknow | Solar Installer in Lucknow |
            Best Solar Panel Lucknow | Cheap Solar Panel Lucknow | Solar Panel Price Lucknow
          </h3>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
            <span>Residential Solar Lucknow</span>
            <span>•</span>
            <span>Commercial Solar Lucknow</span>
            <span>•</span>
            <span>Solar Panel Dealer Gomti Nagar</span>
            <span>•</span>
            <span>Solar Panel Dealer Aliganj</span>
            <span>•</span>
            <span>Solar Installation Services Lucknow</span>
            <span>•</span>
            <span>Solar Power Plant Lucknow</span>
            <span>•</span>
            <span>On Grid Solar System Lucknow</span>
            <span>•</span>
            <span>Off Grid Solar System Lucknow</span>
            <span>•</span>
            <span>Solar Water Pump Lucknow</span>
            <span>•</span>
            <span>Solar AMC Lucknow</span>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16" style={{ backgroundColor: COLORS.primary }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Switch to Solar in Lucknow?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Get <strong>free solar panel consultation</strong> for your home or business in Lucknow.
            Best prices guaranteed across all areas including Gomti Nagar, Aliganj, Indiranagar, and more!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+918933814898"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-orange-600 font-bold rounded-xl hover:bg-gray-100 transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call +91 89338 14898
            </a>
            <a
              href="https://wa.me/918933814898"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-500 text-white font-bold rounded-xl hover:bg-green-600 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
