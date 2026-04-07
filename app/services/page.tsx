'use client';

import { useState } from 'react';
import Image from 'next/image';
import { SERVICE_TYPES, COLORS } from '@/lib/constants';
import { addServiceBooking } from '@/lib/firebase-db';
import { Button } from '@/components/ui/button';
import { Check, Calendar, Clock, MapPin, Phone, Mail, ChevronRight, Wrench, Shield, Zap, DollarSign, Star, Award, Timer, ThumbsUp } from 'lucide-react';

const ServiceIcon = ({ type }: { type: string }) => {
  const iconProps = { size: 32, style: { color: COLORS.primary } };
  switch (type) {
    case 'cleaning':
      return <Wrench {...iconProps} />;
    case 'servicing':
      return <Wrench {...iconProps} />;
    case 'maintenance':
      return <Shield {...iconProps} />;
    case 'complaint':
      return <Zap {...iconProps} />;
    case 'installation':
      return <Star {...iconProps} />;
    case 'inspection':
      return <Award {...iconProps} />;
    default:
      return <Wrench {...iconProps} />;
  }
};

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: 'Lucknow',
    preferredDate: '',
    preferredTime: 'Morning (9AM - 12PM)',
    description: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedService) return;

    setIsSubmitting(true);
    try {
      const service = SERVICE_TYPES.find((s) => s.id === selectedService);
      await addServiceBooking({
        ...formData,
        serviceType: service?.name || selectedService,
      });
      setSubmitted(true);
    } catch (error) {
      console.error('Error booking service:', error);
      alert('There was an error booking your service. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const selectedServiceData = SERVICE_TYPES.find((s) => s.id === selectedService);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/man-worker-firld-by-solar-panels.jpg"
            alt="Solar Services"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0" style={{ backgroundColor: COLORS.primary + 'e6' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Solar Services
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Professional solar maintenance, cleaning, and servicing in Lucknow.
              Book now for reliable and affordable solar solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-2 rounded-full flex items-center justify-center" style={{ backgroundColor: COLORS.primary + '15' }}>
                <Star size={24} style={{ color: COLORS.primary }} />
              </div>
              <div className="font-semibold text-gray-800">Trusted</div>
              <div className="text-sm text-gray-500">1500+ Installations</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-2 rounded-full flex items-center justify-center" style={{ backgroundColor: COLORS.primary + '15' }}>
                <Shield size={24} style={{ color: COLORS.primary }} />
              </div>
              <div className="font-semibold text-gray-800">Guaranteed</div>
              <div className="text-sm text-gray-500">Service Warranty</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-2 rounded-full flex items-center justify-center" style={{ backgroundColor: COLORS.primary + '15' }}>
                <Timer size={24} style={{ color: COLORS.primary }} />
              </div>
              <div className="font-semibold text-gray-800">Same Day</div>
              <div className="text-sm text-gray-500">Quick Response</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-2 rounded-full flex items-center justify-center" style={{ backgroundColor: COLORS.primary + '15' }}>
                <DollarSign size={24} style={{ color: COLORS.primary }} />
              </div>
              <div className="font-semibold text-gray-800">Affordable</div>
              <div className="text-sm text-gray-500">Best Prices</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4" style={{ color: COLORS.darkBlue }}>
            Our Services
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Choose from our range of professional solar services. Click on any service to book an appointment.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICE_TYPES.map((service) => (
              <div
                key={service.id}
                className={`bg-white rounded-2xl p-6 shadow-lg transition-all hover:shadow-xl cursor-pointer transform hover:-translate-y-1 ${
                  selectedService === service.id
                    ? 'ring-2 ring-yellow-400'
                    : ''
                }`}
                onClick={() => setSelectedService(service.id)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center" style={{ backgroundColor: COLORS.lightBlue }}>
                    <ServiceIcon type={service.id} />
                  </div>
                  <div
                    className="px-3 py-1 rounded-full text-sm font-semibold"
                    style={{
                      backgroundColor: COLORS.gold + '20',
                      color: COLORS.darkBlue,
                    }}
                  >
                    {service.price}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ color: COLORS.darkBlue }}>
                  {service.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                  <Clock size={16} />
                  <span>{service.duration}</span>
                </div>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                      <Check size={16} style={{ color: COLORS.primary }} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className="w-full mt-4"
                  style={{
                    backgroundColor:
                      selectedService === service.id ? COLORS.gold : COLORS.primary,
                    color: selectedService === service.id ? COLORS.darkBlue : 'white',
                  }}
                >
                  {selectedService === service.id ? 'Selected' : 'Book Now'}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      {selectedService && (
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {submitted ? (
              <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center" style={{ backgroundColor: COLORS.gold }}>
                  <Check size={40} style={{ color: COLORS.darkBlue }} />
                </div>
                <h3 className="text-2xl font-bold mb-2" style={{ color: COLORS.darkBlue }}>
                  Booking Confirmed!
                </h3>
                <p className="text-gray-600 mb-6">
                  Thank you for booking <strong>{selectedServiceData?.name}</strong>. 
                  We will contact you shortly to confirm the appointment.
                </p>
                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                  <h4 className="font-semibold mb-2">What happens next?</h4>
                  <ol className="text-sm text-gray-600 text-left space-y-2">
                    <li className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold">1</span>
                      Our team will call you within 2 hours
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold">2</span>
                      Confirm the appointment date and time
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold">3</span>
                      Our technician visits your location
                    </li>
                  </ol>
                </div>
                <Button
                  onClick={() => {
                    setSelectedService(null);
                    setSubmitted(false);
                    setFormData({
                      name: '',
                      email: '',
                      phone: '',
                      address: '',
                      city: 'Lucknow',
                      preferredDate: '',
                      preferredTime: 'Morning (9AM - 12PM)',
                      description: '',
                    });
                  }}
                  style={{ backgroundColor: COLORS.primary, color: 'white' }}
                >
                  Book Another Service
                </Button>
              </div>
            ) : (
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div
                  className="px-6 py-4 flex items-center justify-between"
                  style={{ backgroundColor: COLORS.primary }}
                >
                  <h3 className="text-xl font-bold text-white">
                    Book {selectedServiceData?.name}
                  </h3>
                  <button
                    onClick={() => setSelectedService(null)}
                    className="text-white/80 hover:text-white text-2xl"
                  >
                    &times;
                  </button>
                </div>

                <form className="p-6 space-y-4" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter your name"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter your phone number"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email (optional)"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Address *
                    </label>
                    <div className="relative">
                      <MapPin size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter your full address"
                        className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        City *
                      </label>
                      <select
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="Lucknow">Lucknow</option>
                        <option value="Kanpur">Kanpur</option>
                        <option value="Varanasi">Varanasi</option>
                        <option value="Agra">Agra</option>
                        <option value="Prayagraj">Prayagraj</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Preferred Date *
                      </label>
                      <input
                        type="date"
                        name="preferredDate"
                        value={formData.preferredDate}
                        onChange={handleInputChange}
                        required
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Preferred Time
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      {['Morning (9AM - 12PM)', 'Afternoon (12PM - 4PM)', 'Evening (4PM - 7PM)'].map((time) => (
                        <button
                          key={time}
                          type="button"
                          onClick={() => setFormData((prev) => ({ ...prev, preferredTime: time }))}
                          className={`py-3 px-4 rounded-lg border transition-all ${
                            formData.preferredTime === time
                              ? 'border-blue-500 bg-blue-50 text-blue-700'
                              : 'border-gray-300 hover:border-gray-400'
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Additional Details
                    </label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      placeholder="Describe any specific issues or requirements..."
                      rows={3}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full text-white font-bold py-4 mt-4"
                    style={{ backgroundColor: COLORS.primary }}
                  >
                    {isSubmitting ? 'Submitting...' : `Book ${selectedServiceData?.name} - ${selectedServiceData?.price}`}
                  </Button>
                </form>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Why Choose Us */}
      <section className="py-16" style={{ backgroundColor: COLORS.lightBlue }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: COLORS.darkBlue }}>
            Why Choose Orintek Solar Services?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: COLORS.primary + '15' }}>
                <Award size={28} style={{ color: COLORS.primary }} />
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: COLORS.darkBlue }}>
                Experienced Technicians
              </h3>
              <p className="text-gray-600">Our team has 5+ years of experience in solar installation and maintenance.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: COLORS.primary + '15' }}>
                <Timer size={28} style={{ color: COLORS.primary }} />
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: COLORS.darkBlue }}>
                Quick Service
              </h3>
              <p className="text-gray-600">We provide same-day service for most booking requests in Lucknow.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: COLORS.primary + '15' }}>
                <DollarSign size={28} style={{ color: COLORS.primary }} />
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: COLORS.darkBlue }}>
                Affordable Pricing
              </h3>
              <p className="text-gray-600">Transparent pricing with no hidden charges. Free consultation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16" style={{ backgroundColor: COLORS.primary }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need Help Choosing a Service?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Our team is here to help you find the right solution for your solar needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919999999999"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold bg-white text-blue-600 hover:bg-blue-50 transition-colors"
            >
              <Phone size={20} />
              Call: +91 89338 14898
            </a>
            <a
              href="https://wa.me/918933814898"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold"
              style={{ backgroundColor: COLORS.gold, color: COLORS.darkBlue }}
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}