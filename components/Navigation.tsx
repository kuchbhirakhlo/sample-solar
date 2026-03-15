'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { NAV_ITEMS, SITE_CONFIG, COLORS } from '@/lib/constants';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  useEffect(() => {
    // Check if popup was already shown in this session
    const popupShown = sessionStorage.getItem('quotePopupShown');
    if (!popupShown) {
      const timer = setTimeout(() => {
        setIsQuoteOpen(true);
        sessionStorage.setItem('quotePopupShown', 'true');
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/orientek.png"
                alt="Orintek Solar Logo"
                width={120}
                height={40}
                className="h-16 w-auto object-contain"
              />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-sm"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* CTA Button and Mobile Menu */}
            <div className="flex items-center gap-4">
              <Button
                className="hidden sm:inline-flex text-white font-semibold"
                style={{ backgroundColor: COLORS.primary }}
                onClick={() => setIsQuoteOpen(true)}
              >
                Get Your Free Quote
              </Button>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden pb-4 border-t border-gray-200">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block py-2 text-gray-700 hover:text-blue-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button
                className="w-full mt-4 text-white font-semibold"
                style={{ backgroundColor: COLORS.primary }}
                onClick={() => {
                  setIsOpen(false);
                  setIsQuoteOpen(true);
                }}
              >
                Get Your Free Quote
              </Button>
            </div>
          )}
        </div>
      </nav>

      {/* Quote Popup */}
      {isQuoteOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsQuoteOpen(false)}
          />

          {/* Popup Content */}
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md mx-4 overflow-hidden animate-in fade-in zoom-in duration-300">
            {/* Header */}
            <div
              className="px-6 py-4 flex justify-between items-center"
              style={{ backgroundColor: COLORS.primary }}
            >
              <h3 className="text-xl font-bold text-white">Get Free Quote</h3>
              <button
                onClick={() => setIsQuoteOpen(false)}
                className="text-white/80 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Form */}
            <form className="p-6 space-y-4" onSubmit={(e) => {
              e.preventDefault();
              setIsQuoteOpen(false);
              alert('Thank you! We will contact you soon.');
            }}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  required
                  placeholder="Enter your mobile number"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  City
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter your city"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full text-white font-bold py-3 mt-2"
                style={{ backgroundColor: COLORS.primary }}
              >
                Submit
              </Button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
