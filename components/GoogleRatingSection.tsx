'use client';

import { COLORS } from '@/lib/constants';
import { Card } from '@/components/ui/card';
import { Star, MapPin, ExternalLink, Sun, Zap, Battery, Home, Building2, Quote } from 'lucide-react';

export default function GoogleRatingSection() {
  // Google Rating data - in production, this would be fetched from Google Places API
  const ratingData = {
    averageRating: 4.8,
    totalReviews: 1250,
    reviewsLink: 'https://www.google.com/maps/place/ORINTEK+SOLAR+ENERGY+SOLUTIONS/@26.9317642,80.9215264,17z/data=!3m1!4b1!4m6!3m5!1s0x399957dae1561b83:0xcf14d7c00d06150!8m2!3d26.9317642!4d80.9241013!16s%2Fg%2F11x6mt_02g?entry=tts&g_ep=EgoyMDI2MDIyNS4wIPu8ASoASAFQAw%3D%3D',
  };

  // Sample reviews - in production, these would be fetched from Google Places API
  const reviews = [
    {
      id: 1,
      name: "Rahul Sharma",
      rating: 5,
      date: "2 weeks ago",
      text: "Excellent solar installation service! The team was professional and the quality of work exceeded my expectations.",
    },
    {
      id: 2,
      name: "Priya Patel",
      rating: 5,
      date: "1 month ago",
      text: "Very happy with the solar panel installation. The staff explained everything clearly.",
    },
    {
      id: 3,
      name: "Amit Kumar",
      rating: 4,
      date: "1 month ago",
      text: "Good experience overall. The installation was smooth and the team was knowledgeable.",
    },
  ];

  const solutions = [
    {
      icon: Home,
      title: 'Residential Solar',
      description: 'Transform your home with clean solar energy and save up to 70% on electricity bills',
    },
    {
      icon: Building2,
      title: 'Commercial Solar',
      description: 'Power your business with sustainable solar solutions and reduce operational costs',
    },
    {
      icon: Zap,
      title: 'Solar EPC Services',
      description: 'End-to-end engineering, procurement, and construction for solar projects',
    },
    {
      icon: Battery,
      title: 'Solar Battery Storage',
      description: 'Store excess solar energy for uninterrupted power supply 24/7',
    },
  ];

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-4 h-4 ${
              star <= rating
                ? 'fill-yellow-400 text-yellow-400'
                : 'fill-gray-300 text-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <section className="py-16" style={{ backgroundColor: COLORS.lightBlue }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Our Solar Solutions Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4" style={{ color: COLORS.primary }}>
            Our Solar Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive solar energy solutions tailored to meet your specific needs. 
            From residential rooftops to large-scale commercial installations, our expert team 
            ensures maximum efficiency and savings for every customer.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {solutions.map((solution, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-xl transition-shadow text-center group"
            >
              <div
                className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform"
                style={{ backgroundColor: COLORS.lightBlue }}
              >
                <solution.icon className="w-8 h-8" style={{ color: COLORS.primary }} />
              </div>
              <h3
                className="font-bold text-lg mb-2"
                style={{ color: COLORS.primary }}
              >
                {solution.title}
              </h3>
              <p className="text-sm text-gray-600">
                {solution.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Reviews and Rating Section - Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Reviews */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-6" style={{ color: COLORS.primary }}>
              What Our Customers Say
            </h3>
            <div className="space-y-4">
              {reviews.map((review) => (
                <Card key={review.id} className="p-5 hover:shadow-lg transition-shadow">
                  {/* Quote Icon */}
                  <div className="mb-3">
                    <Quote className="w-5 h-5" style={{ color: COLORS.primary }} />
                  </div>
                  
                  {/* Review Text */}
                  <p className="text-gray-600 text-sm mb-4">
                    "{review.text}"
                  </p>
                  
                  {/* Rating */}
                  <div className="mb-3">
                    {renderStars(review.rating)}
                  </div>
                  
                  {/* Name and Date */}
                  <div className="border-t pt-3">
                    <p className="font-semibold text-gray-800">{review.name}</p>
                    <p className="text-xs text-gray-500">{review.date}</p>
                  </div>
                </Card>
              ))}
            </div>
            
            {/* View All Reviews Button */}
            <div className="mt-6 text-center lg:text-left">
              <a
                href={ratingData.reviewsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all hover:opacity-90"
                style={{ backgroundColor: COLORS.primary, color: 'white' }}
              >
                <ExternalLink className="w-5 h-5" />
                View All Reviews on Google
              </a>
            </div>
          </div>
          
          {/* Right Column - Rating Card */}
          <div className="lg:col-span-1">
            <Card className="p-8 text-center hover:shadow-xl transition-shadow sticky top-24">
              {/* Google Logo and Rating */}
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="flex items-center gap-2">
                  <svg className="w-8 h-8" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  <span className="text-xl font-bold text-gray-800">Reviews</span>
                </div>
              </div>

              {/* Star Rating */}
              <div className="flex justify-center mb-4">
                {renderStars(ratingData.averageRating)}
              </div>

              {/* Rating Number */}
              <div className="mb-2">
                <span className="text-5xl font-bold" style={{ color: COLORS.primary }}>
                  {ratingData.averageRating}
                </span>
                <span className="text-2xl text-gray-500">/5</span>
              </div>

              {/* Total Reviews */}
              <p className="text-gray-600 mb-6">
                Based on <span className="font-bold">{ratingData.totalReviews.toLocaleString()}+</span> reviews
              </p>

              {/* Check Rating Button */}
              <a
                href={ratingData.reviewsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all hover:opacity-90"
                style={{ backgroundColor: COLORS.primary, color: 'white' }}
              >
                <ExternalLink className="w-5 h-5" />
                Check Rating on Google
              </a>

              {/* Location */}
              <div className="flex items-center justify-center gap-2 mt-6 text-gray-500">
                <MapPin className="w-5 h-5" />
                <span>Lucknow, India</span>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
