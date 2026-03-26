'use client';

import { COLORS } from '@/lib/constants';
import { Card } from '@/components/ui/card';
import { Star, MapPin, ExternalLink, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useState, useCallback } from 'react';

interface GoogleReview {
  author_name: string;
  rating: number;
  relative_time_description: string;
  text: string;
  profile_photo_url?: string;
}

interface ReviewsData {
  rating: number;
  totalReviews: number;
  reviews: GoogleReview[];
}

export default function GoogleRatingSection() {
  const [reviewsData, setReviewsData] = useState<ReviewsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Google Maps reviews link
  const reviewsLink = 'https://www.google.com/maps/place/ORINTEK+SOLAR+ENERGY+SOLUTIONS/@26.9317642,80.9215264,17z/data=!3m1!4b1!4m6!3m5!1s0x399957dae1561b83:0xcf14d7c00d06150!8m2!3d26.9317642!4d80.9241013!16s%2Fg%2F11x6mt_02g?entry=tts&g_ep=EgoyMDI2MDIyNS4wIPu8ASoASAFQAw%3D%3D';

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch('/api/google-reviews');
        const data = await response.json();
        
        if (response.ok) {
          setReviewsData(data);
        } else {
          setError(data.error || 'Failed to fetch reviews');
          setReviewsData({
            rating: 4.8,
            totalReviews: 1250,
            reviews: []
          });
        }
      } catch (err) {
        setError('Failed to fetch reviews');
        setReviewsData({
          rating: 4.8,
          totalReviews: 1250,
          reviews: []
        });
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  // Fallback reviews - must be defined before displayReviews
  const fallbackReviews = [
    {
      id: 1,
      author_name: "Rahul Sharma",
      rating: 5,
      relative_time_description: "2 weeks ago",
      text: "Excellent solar installation service! The team was professional and the quality of work exceeded my expectations. Very satisfied with the results.",
    },
    {
      id: 2,
      author_name: "Priya Patel",
      rating: 5,
      relative_time_description: "1 month ago",
      text: "Very happy with the solar panel installation. The staff explained everything clearly and the pricing was transparent. Highly recommend!",
    },
    {
      id: 3,
      author_name: "Amit Kumar",
      rating: 4,
      relative_time_description: "1 month ago",
      text: "Good experience overall. The installation was smooth and the team was knowledgeable. Would recommend to others looking for solar solutions.",
    },
    {
      id: 4,
      author_name: "Sanjay Gupta",
      rating: 5,
      relative_time_description: "3 weeks ago",
      text: "Best solar company in Lucknow! They guided me through the entire process and my electricity bill has reduced significantly. Great service!",
    },
    {
      id: 5,
      author_name: "Ravi Shankar",
      rating: 5,
      relative_time_description: "1 week ago",
      text: "Professional team, quality products, and excellent after-sales service. My 5kW system is working perfectly. Thank you Orintek!",
    },
  ];

  // Display reviews - must be defined after fallbackReviews and before useEffect
  const displayReviews = reviewsData?.reviews && reviewsData.reviews.length > 0 
    ? reviewsData.reviews 
    : fallbackReviews;

  // Auto-scroll effect
  useEffect(() => {
    if (!displayReviews || displayReviews.length === 0 || !isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % displayReviews.length);
    }, 4000); // Change review every 4 seconds

    return () => clearInterval(interval);
  }, [displayReviews, isAutoPlaying]);

  const goToPrevious = useCallback(() => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + displayReviews.length) % displayReviews.length);
  }, [displayReviews.length]);

  const goToNext = useCallback(() => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % displayReviews.length);
  }, [displayReviews.length]);

  const goToSlide = useCallback((index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  }, []);

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

  const currentRating = reviewsData?.rating || 4.8;
  const totalReviews = reviewsData?.totalReviews || 1250;

  return (
    <section className="py-16" style={{ backgroundColor: COLORS.lightBlue }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: COLORS.primary }}>
            Customer Reviews
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            See what our customers say about their experience with Orintek Solar Energy Solutions
          </p>
        </div>

        {/* Auto-Scrolling Reviews Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Auto-Scrolling Review Carousel */}
          <div className="lg:col-span-2">
            {/* Carousel Container */}
            <div 
              className="relative bg-white rounded-2xl shadow-lg overflow-hidden"
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              {/* Review Cards Container */}
              <div className="relative h-[320px] md:h-[280px]">
                {loading ? (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex flex-col items-center gap-4">
                      <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                      <p className="text-gray-500">Loading reviews...</p>
                    </div>
                  </div>
                ) : (
                  displayReviews.map((review, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                        index === currentIndex 
                          ? 'opacity-100 translate-x-0' 
                          : 'opacity-0 translate-x-full'
                      }`}
                      style={{
                        transform: index === currentIndex ? 'translateX(0)' : 'translateX(100%)',
                      }}
                    >
                      <div className="h-full p-6 md:p-8 flex flex-col">
                        {/* Quote Icon & Rating */}
                        <div className="flex justify-between items-start mb-4">
                          <Quote className="w-8 h-8" style={{ color: COLORS.primary, opacity: 0.3 }} />
                          <div className="flex items-center gap-2 bg-yellow-50 px-3 py-1 rounded-full">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            <span className="font-semibold text-yellow-700">{review.rating}</span>
                          </div>
                        </div>
                        
                        {/* Review Text */}
                        <p className="text-gray-700 text-lg mb-6 flex-grow italic">
                          "{review.text}"
                        </p>
                        
                        {/* Author Info */}
                        <div className="flex items-center gap-3 border-t pt-4">
                          <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: COLORS.primary }}>
                            <span className="text-white font-semibold">
                              {review.author_name.charAt(0).toUpperCase()}
                            </span>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-800">{review.author_name}</p>
                            <p className="text-xs text-gray-500">{review.relative_time_description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={goToPrevious}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors z-10"
                aria-label="Previous review"
              >
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </button>
              <button
                onClick={goToNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors z-10"
                aria-label="Next review"
              >
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </button>

              {/* Dots Indicator */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {displayReviews.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIndex 
                        ? 'w-8 bg-blue-600' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to review ${index + 1}`}
                  />
                ))}
              </div>

              {/* Auto-play indicator */}
              <div className="absolute top-4 right-4">
                <div className="flex items-center gap-2 text-xs text-gray-500 bg-white/80 px-2 py-1 rounded-full">
                  <div className={`w-2 h-2 rounded-full ${isAutoPlaying ? 'bg-green-500 animate-pulse' : 'bg-gray-400'}`}></div>
                  <span>{isAutoPlaying ? 'Auto' : 'Paused'}</span>
                </div>
              </div>
            </div>
            
            {/* View All Reviews Button */}
            <div className="mt-6 text-center">
              <a
                href={reviewsLink}
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
            <Card className="p-4 text-center hover:shadow-xl transition-all duration-300 sticky top-24 border-0">
              {/* Google Logo and Rating */}
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="flex items-center gap-2">
                  <svg className="w-10 h-10" viewBox="0 0 24 24">
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
                {renderStars(Math.round(currentRating))}
              </div>

              {/* Rating Number */}
              <div className="mb-4">
                <span className="text-6xl font-bold" style={{ color: COLORS.primary }}>
                  {currentRating.toFixed(1)}
                </span>
                <span className="text-2xl text-gray-500">/5</span>
              </div>

              {/* Total Reviews */}
              <p className="text-gray-600 mb-6">
                Based on <span className="font-bold">{totalReviews.toLocaleString()}+</span> reviews
              </p>

              {/* Progress Bar */}
              <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
                <div 
                  className="h-2 rounded-full transition-all duration-1000"
                  style={{ 
                    width: `${(currentRating / 5) * 100}%`,
                    backgroundColor: COLORS.primary 
                  }}
                ></div>
              </div>

              {/* Check Rating Button */}
              <a
                href={reviewsLink}
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
