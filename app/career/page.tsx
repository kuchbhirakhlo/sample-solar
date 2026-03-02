'use client';

import { COLORS } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Upload, FileText, CheckCircle, Mail, Phone } from 'lucide-react';
import { useState, useRef } from 'react';

export default function CareerPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
  });
  const [resume, setResume] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type === 'application/pdf') {
      setResume(file);
    } else {
      alert('Please upload a PDF file');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!resume) {
      alert('Please upload your resume');
      return;
    }

    setIsUploading(true);

    // Simulate file upload - in production, you would upload to your server/storage
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log('Application submitted:', { ...formData, resume: resume.name });
    setIsSubmitted(true);
    setIsUploading(false);
  };

  const openFilePicker = () => {
    fileInputRef.current?.click();
  };

  const jobOpenings = [
    {
      title: 'Solar Installation Engineer',
      location: 'Mumbai, Maharashtra',
      type: 'Full-time',
      description: 'Lead installation teams for residential and commercial solar projects',
      requirements: ['3+ years experience', 'Electrical engineering background', 'Valid DL'],
    },
    {
      title: 'Sales Executive',
      location: 'Pan India',
      type: 'Full-time',
      description: 'Drive solar adoption through consultative sales approach',
      requirements: ['2+ years in sales', 'Excellent communication', 'CRM experience'],
    },
    {
      title: 'Customer Support Specialist',
      location: 'Remote / Mumbai',
      type: 'Full-time',
      description: 'Handle customer inquiries and provide technical support',
      requirements: ['1+ years support experience', 'Technical knowledge', 'Problem-solving skills'],
    },
    {
      title: 'Marketing Manager',
      location: 'Mumbai, Maharashtra',
      type: 'Full-time',
      description: 'Plan and execute marketing campaigns for solar solutions',
      requirements: ['5+ years marketing experience', 'Digital marketing expertise', 'Team leadership'],
    },
  ];

  if (isSubmitted) {
    return (
      <div>
        {/* Header */}
        <section className="py-20" style={{ backgroundColor: COLORS.lightBlue }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-bold mb-6" style={{ color: COLORS.primary }}>
              Careers at Orintek Solar
            </h1>
            <p className="text-xl text-gray-700">
              Join the solar revolution and build a sustainable future
            </p>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex justify-center mb-8">
              <CheckCircle className="w-20 h-20 text-green-500" />
            </div>
            <h2 className="text-3xl font-bold mb-4" style={{ color: COLORS.primary }}>
              Application Submitted Successfully!
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Thank you for your interest in joining Orintek Solar. Our HR team will review your application and get back to you within 2-3 business days.
            </p>
            <Button
              onClick={() => {
                setIsSubmitted(false);
                setFormData({ name: '', email: '', phone: '', position: '', experience: '' });
                setResume(null);
              }}
              size="lg"
              style={{ backgroundColor: COLORS.primary }}
              className="text-white"
            >
              Submit Another Application
            </Button>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div>
      {/* Header */}
      <section className="py-20" style={{ backgroundColor: COLORS.lightBlue }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6" style={{ color: COLORS.primary }}>
            Careers at Orintek Solar
          </h1>
          <p className="text-xl text-gray-700">
            Join the solar revolution and build a sustainable future with us
          </p>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: COLORS.primary }}>
            Why Join Orintek Solar?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '☀️',
                title: 'Growth Industry',
                description: 'Be part of India\'s fastest growing renewable energy sector',
              },
              {
                icon: '🏆',
                title: 'Leader in Market',
                description: 'Work with India\'s trusted solar solutions provider',
              },
              {
                icon: '🎯',
                title: 'Impact Driven',
                description: 'Contribute to a sustainable future for generations',
              },
            ].map((benefit) => (
              <Card key={benefit.title} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-2" style={{ color: COLORS.primary }}>
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-20" style={{ backgroundColor: COLORS.lightBlue }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: COLORS.primary }}>
            Current Openings
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {jobOpenings.map((job) => (
              <Card key={job.title} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold" style={{ color: COLORS.primary }}>
                      {job.title}
                    </h3>
                    <p className="text-gray-600">{job.location}</p>
                  </div>
                  <span
                    className="px-3 py-1 rounded-full text-sm font-medium"
                    style={{ backgroundColor: COLORS.gold, color: COLORS.darkBlue }}
                  >
                    {job.type}
                  </span>
                </div>
                <p className="text-gray-700 mb-4">{job.description}</p>
                <div className="mb-4">
                  <p className="font-semibold text-gray-700 mb-2">Requirements:</p>
                  <ul className="list-disc list-inside text-gray-600">
                    {job.requirements.map((req) => (
                      <li key={req}>{req}</li>
                    ))}
                  </ul>
                </div>
                <Button
                  onClick={() => {
                    setFormData((prev) => ({ ...prev, position: job.title }));
                    document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  style={{ backgroundColor: COLORS.primary }}
                  className="text-white"
                >
                  Apply Now
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="application-form" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: COLORS.primary }}>
            Apply Now
          </h2>
          <Card className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Position *</label>
                  <select
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                  >
                    <option value="">Select a position</option>
                    {jobOpenings.map((job) => (
                      <option key={job.title} value={job.title}>
                        {job.title}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Years of Experience</label>
                <input
                  type="text"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  placeholder="e.g., 3 years in solar industry"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                />
              </div>

              {/* PDF Upload */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Upload Resume (PDF) *
                </label>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  accept=".pdf"
                  className="hidden"
                />
                <div
                  onClick={openFilePicker}
                  className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:border-blue-500 transition-colors"
                >
                  {resume ? (
                    <div className="flex items-center justify-center gap-3">
                      <FileText className="w-8 h-8 text-blue-500" />
                      <div>
                        <p className="font-medium text-gray-700">{resume.name}</p>
                        <p className="text-sm text-gray-500">Click to change file</p>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <Upload className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                      <p className="text-gray-600 font-medium">
                        Click to upload your resume
                      </p>
                      <p className="text-sm text-gray-400 mt-1">PDF only, max 10MB</p>
                    </div>
                  )}
                </div>
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isUploading}
                className="w-full text-white font-bold text-lg"
                style={{ backgroundColor: COLORS.primary }}
              >
                {isUploading ? 'Submitting...' : 'Submit Application'}
              </Button>
            </form>
          </Card>
        </div>
      </section>

      {/* Contact HR */}
      <section className="py-20" style={{ backgroundColor: COLORS.primary }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Have Questions?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Reach out to our HR team directly
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <a
              href="mailto:careers@Orintek Solar.in"
              className="flex items-center gap-2 text-white hover:text-blue-200"
            >
              <Mail className="w-5 h-5" />
              careers@Orintek Solar.in
            </a>
            <a
              href="tel:+918888999999"
              className="flex items-center gap-2 text-white hover:text-blue-200"
            >
              <Phone className="w-5 h-5" />
              +91 8888 999 999
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
