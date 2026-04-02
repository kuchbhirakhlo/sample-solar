'use client';

import { COLORS } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Sun, Zap, Leaf } from 'lucide-react';
import { useState } from 'react';
import { addContactSubmission } from '@/lib/firebase-db';

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await addContactSubmission({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        subject: formData.subject || 'General Inquiry',
        message: formData.message,
        date: new Date().toISOString().split('T')[0],
        status: 'new',
      });

      setFormData({ name: '', email: '', phone: '', message: '', subject: '' });
      alert('Thank you! We will contact you soon.');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your form. Please try again.');
    }
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

  // Major Cities in Uttar Pradesh with local SEO keywords
  const upCities = [
    { name: 'Lucknow', slug: 'lucknow', keywords: 'Solar Panel in Lucknow, Solar Company in Lucknow, Best Solar Dealer Lucknow', description: 'Capital city of Uttar Pradesh - Leading solar panel installation services' },
    { name: 'Varanasi', slug: 'varanasi', keywords: 'Solar Panel in Varanasi, Solar Company in Varanasi, Solar Dealer Varanasi', description: 'Spiritual city of India - Professional solar solutions' },
    { name: 'Agra', slug: 'agra', keywords: 'Solar Panel in Agra, Solar Company in Agra, Solar Dealer Agra', description: 'City of Taj Mahal - Affordable solar panel installation' },
    { name: 'Kanpur', slug: 'kanpur', keywords: 'Solar Panel in Kanpur, Solar Company in Kanpur, Solar Dealer Kanpur', description: 'Industrial hub of UP - Commercial solar solutions' },
    { name: 'Allahabad', slug: 'allahabad', keywords: 'Solar Panel in Allahabad, Solar Company in Allahabad, Solar Dealer Allahabad', description: 'Triveni Sangam city - Residential solar services' },
    { name: 'Meerut', slug: 'meerut', keywords: 'Solar Panel in Meerut, Solar Company in Meerut, Solar Dealer Meerut', description: 'Western UP major city - Solar panel dealers' },
    { name: 'Aligarh', slug: 'aligarh', keywords: 'Solar Panel in Aligarh, Solar Company in Aligarh, Solar Dealer Aligarh', description: 'City of locks - Best solar installation services' },
    { name: 'Bareilly', slug: 'bareilly', keywords: 'Solar Panel in Bareilly, Solar Company in Bareilly, Solar Dealer Bareilly', description: 'City of Shoes - Solar power solutions' },
    { name: 'Moradabad', slug: 'moradabad', keywords: 'Solar Panel in Moradabad, Solar Company in Moradabad, Solar Dealer Moradabad', description: 'Brass city - Professional solar installers' },
    { name: 'Saharanpur', slug: 'saharanpur', keywords: 'Solar Panel in Saharanpur, Solar Company in Saharanpur, Solar Dealer Saharanpur', description: 'Textile city - Solar energy solutions' },
    { name: 'Gorakhpur', slug: 'gorakhpur', keywords: 'Solar Panel in Gorakhpur, Solar Company in Gorakhpur, Solar Dealer Gorakhpur', description: 'Eastern UP major city - Solar panel services' },
    { name: 'Mathura', slug: 'mathura', keywords: 'Solar Panel in Mathura, Solar Company in Mathura, Solar Dealer Mathura', description: 'Birthplace of Krishna - Solar installation services' },
    { name: 'Ayodhya', slug: 'ayodhya', keywords: 'Solar Panel in Ayodhya, Solar Company in Ayodhya, Solar Dealer Ayodhya', description: 'Ram Janmabhoomi city - Solar power solutions' },
    { name: 'Prayagraj', slug: 'prayagraj', keywords: 'Solar Panel in Prayagraj, Solar Company in Prayagraj, Solar Dealer Prayagraj', description: 'Kumbh Mela city - Solar panel dealers' },
    { name: 'Ghaziabad', slug: 'ghaziabad', keywords: 'Solar Panel in Ghaziabad, Solar Company in Ghaziabad, Solar Dealer Ghaziabad', description: 'NCR city - Best solar panel services' },
    { name: 'Noida', slug: 'noida', keywords: 'Solar Panel in Noida, Solar Company in Noida, Solar Dealer Noida', description: 'IT hub - Commercial solar solutions' },
    { name: 'Greater Noida', slug: 'greater-noida', keywords: 'Solar Panel in Greater Noida, Solar Company in Greater Noida', description: 'Smart city - Solar installation services' },
    { name: 'Firozabad', slug: 'firozabad', keywords: 'Solar Panel in Firozabad, Solar Company in Firozabad', description: 'Glass city - Solar power solutions' },
    { name: 'Jhansi', slug: 'jhansi', keywords: 'Solar Panel in Jhansi, Solar Company in Jhansi', description: 'Bundelkhand region - Solar services' },
    { name: 'Etawah', slug: 'etawah', keywords: 'Solar Panel in Etawah, Solar Company in Etawah', description: 'Ambey valley - Solar installation' },
    { name: 'Mirzapur', slug: 'mirzapur', keywords: 'Solar Panel in Mirzapur, Solar Company in Mirzapur', description: 'Vindhyachal city - Solar solutions' },
    { name: 'Rampur', slug: 'rampur', keywords: 'Solar Panel in Rampur, Solar Company in Rampur', description: 'Rampur city - Solar services' },
    { name: 'Sultanpur', slug: 'sultanpur', keywords: 'Solar Panel in Sultanpur, Solar Company in Sultanpur', description: 'Ayodhya region - Solar installation' },
  ];

  const cityFAQs = [
    { city: 'Lucknow', question: 'How much does solar panel cost in Lucknow?', answer: 'Solar panel installation in Lucknow starts from ₹45,000 for 1KW residential system. We offer best prices in Gomti Nagar, Aliganj, and all Lucknow areas.' },
    { city: 'Varanasi', question: 'Best solar company in Varanasi?', answer: 'Orintek Solar is the leading solar panel dealer in Varanasi. We provide free site survey and government subsidy assistance in Varanasi.' },
    { city: 'Agra', question: 'Solar panel price in Agra?', answer: 'Get competitive solar panel prices in Agra. We offer residential and commercial solar systems with 5-year warranty across Agra.' },
    { city: 'Kanpur', question: 'Which is best solar dealer in Kanpur?', answer: 'Orintek Solar provides best solar installation services in Kanpur. Contact us for industrial and commercial solar solutions.' },
    { city: 'Ghaziabad', question: 'Solar panel installation in Ghaziabad?', answer: 'Professional solar panel installation available in Ghaziabad and NCR region. Get free consultation today!' },
    { city: 'Noida', question: 'Best solar company in Noida?', answer: 'We offer premium solar solutions in Noida - residential, commercial and industrial solar systems with warranty.' },
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
            We serve all major cities including Lucknow, Varanasi, Agra, Kanpur, Allahabad, Meerut, Ghaziabad, Noida and across entire Uttar Pradesh.
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
          <div className="mt-8 flex flex-wrap justify-center gap-2 text-sm text-white/80">
            <span className="bg-white/10 px-3 py-1 rounded-full">Solar Panel Lucknow</span>
            <span className="bg-white/10 px-3 py-1 rounded-full">Solar Panel Varanasi</span>
            <span className="bg-white/10 px-3 py-1 rounded-full">Solar Panel Agra</span>
            <span className="bg-white/10 px-3 py-1 rounded-full">Solar Panel Kanpur</span>
            <span className="bg-white/10 px-3 py-1 rounded-full">Solar Panel Meerut</span>
            <span className="bg-white/10 px-3 py-1 rounded-full">Solar Panel Ghaziabad</span>
            <span className="bg-white/10 px-3 py-1 rounded-full">Solar Panel Noida</span>
          </div>
        </div>
      </section>

      {/* Quick Contact Cards */}
      <section className="relative -mt-12 z-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div id="inquiry" className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl shadow-lg">
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

      {/* All Uttar Pradesh Cities We Serve */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" style={{ color: COLORS.primary }}>
              Solar Panel Services Across Uttar Pradesh
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              <strong>Orintek Solar</strong> is the leading solar company serving all major cities in Uttar Pradesh. 
              From residential solar in Lucknow to commercial installations in Noida, Kanpur, and Varanasi - we cover the entire state!
            </p>
          </div>

          {/* Major Cities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {upCities.slice(0, 9).map((city) => (
              <div key={city.slug} className="p-6 bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-5 h-5 text-orange-500" />
                  <h3 className="text-lg font-bold" style={{ color: COLORS.primary }}>{city.name}</h3>
                </div>
                <p className="text-gray-600 text-sm mb-3">{city.description}</p>
                <p className="text-xs text-orange-600 font-medium">{city.keywords.split(', ')[0]}</p>
                <a href={`#inquiry`} className="text-sm font-semibold text-orange-600 hover:text-orange-700 mt-2 inline-block">
                  Get Quote →
                </a>
              </div>
            ))}
          </div>

          {/* More Cities Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {upCities.slice(9).map((city) => (
              <a
                key={city.slug}
                href={`#inquiry`}
                className="p-3 bg-gray-50 rounded-lg hover:bg-orange-50 transition-colors text-center"
              >
                <span className="font-medium text-gray-700 text-sm">{city.name}</span>
              </a>
            ))}
          </div>

          {/* SEO Content for Top Cities */}
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="p-6 bg-amber-50 rounded-2xl">
              <h3 className="text-xl font-bold mb-4" style={{ color: COLORS.primary }}>Solar Panel in Varanasi</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Looking for <strong>Solar Panel in Varanasi</strong>? Orintek Solar provides premium solar panel installation services 
                across Varanasi and surrounding areas. Our expert team offers residential and commercial solar solutions with free site survey 
                in the spiritual city of Varanasi. We also serve Mirzapur, Azamgarh, andJaunpur districts.
              </p>
              <a href={`#inquiry`} className="text-orange-600 font-semibold">Get Solar Quote in Varanasi →</a>
            </div>
            <div className="p-6 bg-orange-50 rounded-2xl">
              <h3 className="text-xl font-bold mb-4" style={{ color: COLORS.primary }}>Solar Panel in Agra</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Get <strong>Solar Panel installation in Agra</strong> from Uttar Pradesh's leading solar company. 
                We provide affordable solar panel solutions with government subsidy assistance in Agra, Mathura, Firozabad, and surrounding areas. 
                Best prices guaranteed near the Taj Mahal!
              </p>
              <a href={`#inquiry`} className="text-orange-600 font-semibold">Get Solar Quote in Agra →</a>
            </div>
            <div className="p-6 bg-amber-50 rounded-2xl">
              <h3 className="text-xl font-bold mb-4" style={{ color: COLORS.primary }}>Solar Panel in Kanpur</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                <strong>Solar Panel in Kanpur</strong> - Orintek Solar offers industrial-grade solar solutions in Kanpur. 
                We serve Etawah, Auraiya, and entire Kanpur region with commercial solar systems. Contact us for best deals on solar in India's leather capital!
              </p>
              <a href={`#inquiry`} className="text-orange-600 font-semibold">Get Solar Quote in Kanpur →</a>
            </div>
            <div className="p-6 bg-orange-50 rounded-2xl">
              <h3 className="text-xl font-bold mb-4" style={{ color: COLORS.primary }}>Solar Panel in Meerut & Ghaziabad</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Professional <strong>Solar Panel installation in Meerut</strong> and Ghaziabad. We serve Western UP including 
                Bulandshahr, Hapur, and NCR region. Get free site survey and competitive pricing on solar systems!
              </p>
              <a href={`#inquiry`} className="text-orange-600 font-semibold">Get Solar Quote in Meerut →</a>
            </div>
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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.1088285902033!2d80.92152637549312!3d26.931764176635824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399957dae1561b83%3A0xcf14d7c00d06150!2sORINTEK%20SOLAR%20ENERGY%20SOLUTIONS!5e0!3m2!1sen!2sin!4v1775109616400!5m2!1sen!2sin"
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

      {/* Eastern UP - Gorakhpur Region */}
      <section className="py-20 bg-gradient-to-r from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" style={{ color: COLORS.primary }}>
              Solar Panel Services in Eastern Uttar Pradesh
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Professional solar panel installation services in Gorakhpur, Ayodhya, Sultanpur and entire Eastern UP region.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-white rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-3" style={{ color: COLORS.primary }}>
                Solar Panel in Gorakhpur
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                <strong>Leading solar company in Gorakhpur</strong>. We provide solar panel installation services across 
                Deoria, Kushinagar, Maharajganj, and entire Gorakhpur division. Residential and commercial solar solutions available.
              </p>
              <a href={`#inquiry`} className="text-green-600 font-semibold">Get Quote in Gorakhpur →</a>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-3" style={{ color: COLORS.primary }}>
                Solar Panel in Ayodhya
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                <strong>Solar Panel in Ayodhya</strong> - Get professional solar installation services in the holy city of Ayodhya. 
                We serve Faizabad, Sultanpur, Ambedkar Nagar, and surrounding areas with best solar solutions.
              </p>
              <a href={`#inquiry`} className="text-green-600 font-semibold">Get Quote in Ayodhya →</a>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Keywords Section */}
      <section className="py-12 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-center text-lg font-semibold mb-8 text-gray-300">
            Keywords: Solar Panel in Lucknow | Solar Panel in Varanasi | Solar Panel in Agra | Solar Panel in Kanpur | Solar Panel in Meerut | Solar Panel in Ghaziabad | Solar Panel in Noida | Solar Panel in Allahabad | Solar Panel in Bareilly | Solar Panel in Moradabad | Solar Panel in Aligarh | Solar Panel in Gorakhpur | Solar Company in Lucknow | Best Solar Dealer in Uttar Pradesh
          </h3>
          <div className="flex flex-wrap justify-center gap-2 text-sm text-gray-400 max-w-5xl mx-auto">
            {/* Lucknow Area Tags */}
            <span className="bg-gray-800 px-2 py-1 rounded">Solar Panel Gomti Nagar Lucknow</span>
            <span className="bg-gray-800 px-2 py-1 rounded">Solar Panel Aliganj Lucknow</span>
            <span className="bg-gray-800 px-2 py-1 rounded">Solar Panel Indiranagar Lucknow</span>
            <span className="bg-gray-800 px-2 py-1 rounded">Solar Panel Hazratganj Lucknow</span>
            <span className="bg-gray-800 px-2 py-1 rounded">Solar Company Gomti Nagar</span>
            <span className="bg-gray-800 px-2 py-1 rounded">Solar Dealer Lucknow</span>
            <span className="bg-gray-800 px-2 py-1 rounded">Best Solar Panel Lucknow</span>
            <span className="bg-gray-800 px-2 py-1 rounded">Cheap Solar Panel Lucknow</span>
            <span className="bg-gray-800 px-2 py-1 rounded">Residential Solar Lucknow</span>
            <span className="bg-gray-800 px-2 py-1 rounded">Commercial Solar Lucknow</span>
            <span className="bg-gray-800 px-2 py-1 rounded">Solar Installer Lucknow</span>
            <span className="bg-gray-800 px-2 py-1 rounded">Solar Power Plant Lucknow</span>
            <span className="bg-gray-800 px-2 py-1 rounded">On Grid Solar System Lucknow</span>
            <span className="bg-gray-800 px-2 py-1 rounded">Off Grid Solar System Lucknow</span>
            <span className="bg-gray-800 px-2 py-1 rounded">Solar Water Pump Lucknow</span>
            <span className="bg-gray-800 px-2 py-1 rounded">Solar AMC Lucknow</span>
            <span className="bg-gray-800 px-2 py-1 rounded">MNRE Solar Dealer Lucknow</span>
            <span className="bg-gray-800 px-2 py-1 rounded">Government Subsidy Solar Lucknow</span>
            <span className="bg-gray-800 px-2 py-1 rounded">Solar Panel Price Lucknow</span>
            <span className="bg-gray-800 px-2 py-1 rounded">1KW Solar Panel Lucknow</span>
            <span className="bg-gray-800 px-2 py-1 rounded">2KW Solar Panel Lucknow</span>
            <span className="bg-gray-800 px-2 py-1 rounded">3KW Solar Panel Lucknow</span>
            <span className="bg-gray-800 px-2 py-1 rounded">5KW Solar Panel Lucknow</span>
            <span className="bg-gray-800 px-2 py-1 rounded">10KW Solar Panel Lucknow</span>
            {/* Major UP Cities */}
            <span className="bg-gray-800 px-2 py-1 rounded">Solar Panel Varanasi</span>
            <span className="bg-gray-800 px-2 py-1 rounded">Solar Panel Agra</span>
            <span className="bg-gray-800 px-2 py-1 rounded">Solar Panel Kanpur</span>
            <span className="bg-gray-800 px-2 py-1 rounded">Solar Panel Meerut</span>
            <span className="bg-gray-800 px-2 py-1 rounded">Solar Panel Ghaziabad</span>
            <span className="bg-gray-800 px-2 py-1 rounded">Solar Panel Noida</span>
            <span className="bg-gray-800 px-2 py-1 rounded">Solar Panel Greater Noida</span>
            <span className="bg-gray-800 px-2 py-1 rounded">Solar Panel Allahabad</span>
            <span className="bg-gray-800 px-2 py-1 rounded">Solar Panel Bareilly</span>
            <span className="bg-gray-800 px-2 py-1 rounded">Solar Panel Moradabad</span>
            <span className="bg-gray-800 px-2 py-1 rounded">Solar Panel Aligarh</span>
            <span className="bg-gray-800 px-2 py-1 rounded">Solar Panel Gorakhpur</span>
            <span className="bg-gray-800 px-2 py-1 rounded">Solar Panel Mathura</span>
            <span className="bg-gray-800 px-2 py-1 rounded">Solar Panel Ayodhya</span>
            <span className="bg-gray-800 px-2 py-1 rounded">Solar Panel Prayagraj</span>
            <span className="bg-gray-800 px-2 py-1 rounded">Solar Panel Saharanpur</span>
            <span className="bg-gray-800 px-2 py-1 rounded">Solar Panel Firozabad</span>
            <span className="bg-gray-800 px-2 py-1 rounded">Solar Panel Jhansi</span>
            <span className="bg-gray-800 px-2 py-1 rounded">Solar Panel Rampur</span>
            <span className="bg-gray-800 px-2 py-1 rounded">Solar Panel Mirzapur</span>
            <span className="bg-gray-800 px-2 py-1 rounded">Solar Panel Etawah</span>
            <span className="bg-gray-800 px-2 py-1 rounded">Solar Panel Sultanpur</span>
            {/* Service Types */}
            <span className="bg-gray-800 px-2 py-1 rounded">Solar Company Uttar Pradesh</span>
            <span className="bg-gray-800 px-2 py-1 rounded">Best Solar Dealer UP</span>
            <span className="bg-gray-800 px-2 py-1 rounded">Solar Installer UP</span>
            <span className="bg-gray-800 px-2 py-1 rounded">Residential Solar UP</span>
            <span className="bg-gray-800 px-2 py-1 rounded">Commercial Solar UP</span>
            <span className="bg-gray-800 px-2 py-1 rounded">Industrial Solar UP</span>
            <span className="bg-gray-800 px-2 py-1 rounded">Solar Power Plant UP</span>
            <span className="bg-gray-800 px-2 py-1 rounded">On Grid Solar UP</span>
            <span className="bg-gray-800 px-2 py-1 rounded">Off Grid Solar UP</span>
            <span className="bg-gray-800 px-2 py-1 rounded">Hybrid Solar System UP</span>
            <span className="bg-gray-800 px-2 py-1 rounded">Solar Water Pump UP</span>
            <span className="bg-gray-800 px-2 py-1 rounded">Solar AMC Services UP</span>
            <span className="bg-gray-800 px-2 py-1 rounded">Solar Maintenance UP</span>
            <span className="bg-gray-800 px-2 py-1 rounded">MNRE Solar Dealer UP</span>
            <span className="bg-gray-800 px-2 py-1 rounded">Government Subsidy Solar UP</span>
            <span className="bg-gray-800 px-2 py-1 rounded">Solar Panel Price UP</span>
            <span className="bg-gray-800 px-2 py-1 rounded">Cheap Solar Panel UP</span>
            <span className="bg-gray-800 px-2 py-1 rounded">Best Solar Company UP</span>
          </div>
        </div>
      </section>

      {/* Additional SEO Tags Section */}
      <section className="py-8 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold" style={{ color: COLORS.primary }}>Solar Services in Uttar Pradesh - Popular Searches</h3>
          </div>
          <div className="flex flex-wrap justify-center gap-2 text-sm">
            <a href="#inquiry" className="bg-white px-3 py-1 rounded-full text-gray-700 hover:bg-orange-100 hover:text-orange-700 transition-colors shadow-sm">Solar Panel Lucknow Price</a>
            <a href="#inquiry" className="bg-white px-3 py-1 rounded-full text-gray-700 hover:bg-orange-100 hover:text-orange-700 transition-colors shadow-sm">Best Solar Company Lucknow</a>
            <a href="#inquiry" className="bg-white px-3 py-1 rounded-full text-gray-700 hover:bg-orange-100 hover:text-orange-700 transition-colors shadow-sm">Solar Panel Installation Cost Lucknow</a>
            <a href="#inquiry" className="bg-white px-3 py-1 rounded-full text-gray-700 hover:bg-orange-100 hover:text-orange-700 transition-colors shadow-sm">Residential Solar System Lucknow</a>
            <a href="#inquiry" className="bg-white px-3 py-1 rounded-full text-gray-700 hover:bg-orange-100 hover:text-orange-700 transition-colors shadow-sm">Commercial Solar System Lucknow</a>
            <a href="#inquiry" className="bg-white px-3 py-1 rounded-full text-gray-700 hover:bg-orange-100 hover:text-orange-700 transition-colors shadow-sm">Solar Panel for Home Lucknow</a>
            <a href="#inquiry" className="bg-white px-3 py-1 rounded-full text-gray-700 hover:bg-orange-100 hover:text-orange-700 transition-colors shadow-sm">Solar Panel for Factory Lucknow</a>
            <a href="#inquiry" className="bg-white px-3 py-1 rounded-full text-gray-700 hover:bg-orange-100 hover:text-orange-700 transition-colors shadow-sm">Solar Panel for Office Lucknow</a>
            <a href="#inquiry" className="bg-white px-3 py-1 rounded-full text-gray-700 hover:bg-orange-100 hover:text-orange-700 transition-colors shadow-sm">Solar Rooftop Lucknow</a>
            <a href="#inquiry" className="bg-white px-3 py-1 rounded-full text-gray-700 hover:bg-orange-100 hover:text-orange-700 transition-colors shadow-sm">Solar Farm Lucknow</a>
            <a href="#inquiry" className="bg-white px-3 py-1 rounded-full text-gray-700 hover:bg-orange-100 hover:text-orange-700 transition-colors shadow-sm">Solar Inverter Lucknow</a>
            <a href="#inquiry" className="bg-white px-3 py-1 rounded-full text-gray-700 hover:bg-orange-100 hover:text-orange-700 transition-colors shadow-sm">Solar Battery Lucknow</a>
            <a href="#inquiry" className="bg-white px-3 py-1 rounded-full text-gray-700 hover:bg-orange-100 hover:text-orange-700 transition-colors shadow-sm">Solar Tubewell Lucknow</a>
            <a href="#inquiry" className="bg-white px-3 py-1 rounded-full text-gray-700 hover:bg-orange-100 hover:text-orange-700 transition-colors shadow-sm">Solar Street Light Lucknow</a>
            <a href="#inquiry" className="bg-white px-3 py-1 rounded-full text-gray-700 hover:bg-orange-100 hover:text-orange-700 transition-colors shadow-sm">Solar Water Heater Lucknow</a>
            <a href="#inquiry" className="bg-white px-3 py-1 rounded-full text-gray-700 hover:bg-orange-100 hover:text-orange-700 transition-colors shadow-sm">Net Metering Lucknow</a>
            <a href="#inquiry" className="bg-white px-3 py-1 rounded-full text-gray-700 hover:bg-orange-100 hover:text-orange-700 transition-colors shadow-sm">Solar Subsidy Lucknow</a>
            <a href="#inquiry" className="bg-white px-3 py-1 rounded-full text-gray-700 hover:bg-orange-100 hover:text-orange-700 transition-colors shadow-sm">Rooftop Solar Scheme Lucknow</a>
            <a href="#inquiry" className="bg-white px-3 py-1 rounded-full text-gray-700 hover:bg-orange-100 hover:text-orange-700 transition-colors shadow-sm">PM Solar Scheme Lucknow</a>
            <a href="#inquiry" className="bg-white px-3 py-1 rounded-full text-gray-700 hover:bg-orange-100 hover:text-orange-700 transition-colors shadow-sm">Solar Loan Lucknow</a>
            <a href="#inquiry" className="bg-white px-3 py-1 rounded-full text-gray-700 hover:bg-orange-100 hover:text-orange-700 transition-colors shadow-sm">Solar EPC Contractor Lucknow</a>
            <a href="#inquiry" className="bg-white px-3 py-1 rounded-full text-gray-700 hover:bg-orange-100 hover:text-orange-700 transition-colors shadow-sm">Solar O&M Services Lucknow</a>
          </div>
        </div>
      </section>

      {/* City-Specific FAQ Section */}
      <section className="py-20 bg-gradient-to-r from-amber-50 to-orange-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" style={{ color: COLORS.primary }}>
              Frequently Asked Questions - Solar Panel Across Uttar Pradesh
            </h2>
            <p className="text-gray-600">
              Common questions about solar panel installation in major cities of Uttar Pradesh
            </p>
          </div>

          <div className="space-y-4">
            {cityFAQs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                <h4 className="font-bold text-lg mb-2" style={{ color: COLORS.primary }}>
                  {faq.question.replace(faq.city, `${faq.city}`)}
                </h4>
                <p className="text-gray-600 text-sm">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-orange-100 rounded-xl">
            <h4 className="font-bold text-lg mb-2" style={{ color: COLORS.primary }}>
              Not finding your city?
            </h4>
            <p className="text-gray-600 text-sm mb-4">
              We serve ALL cities in Uttar Pradesh! Contact us for solar panel installation in your city - 
              Unnao, Raebareli, Sitapur, Lakhimpur, Barabanki, Bahraich, Shrawasti, Balrampur, Gonda, Ambedkar Nagar, 
              Sultanpur, Pratapgarh, Fatehpur, Kaushambi, Banda, Chitrakoot, Hamirpur, Mahoba, Jalaun, Jhansi, Lalitpur.
            </p>
            <a href={`#inquiry`} className="inline-block px-6 py-3 rounded-lg font-bold text-white" style={{ backgroundColor: COLORS.primary }}>
              Contact Us for Your City →
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16" style={{ backgroundColor: COLORS.primary }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Switch to Solar in Uttar Pradesh?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Get <strong>free solar panel consultation</strong> for your home or business anywhere in Uttar Pradesh. 
            Serving Lucknow, Varanasi, Agra, Kanpur, Meerut, Ghaziabad, Noida and ALL major cities!
            Best prices guaranteed across entire state!
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
          <p className="mt-6 text-white/70 text-sm">
            Solar Panel in Lucknow • Solar Panel in Varanasi • Solar Panel in Agra • Solar Panel in Kanpur • Solar Panel in Noida
          </p>
        </div>
      </section>
    </div>
  );
}
