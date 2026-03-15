'use client';

import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Phone, Mail, MapPin } from 'lucide-react';
import { SITE_CONFIG, COLORS } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="" style={{ backgroundColor: COLORS.darkBlue, color: 'white' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">{SITE_CONFIG.name}</h3>
            <p className="text-gray-300 text-sm mb-4">
              {SITE_CONFIG.description}
            </p>
            <div className="flex gap-4">
              <Link href={SITE_CONFIG.links.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors">
                <Facebook size={20} />
              </Link>
              <Link href={SITE_CONFIG.links.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors">
                <Twitter size={20} />
              </Link>
              <Link href={SITE_CONFIG.links.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors">
                <Instagram size={20} />
              </Link>
              <Link href={SITE_CONFIG.links.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors">
                <Linkedin size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><Link href="/about" className="hover:text-yellow-400 transition-colors">About Us</Link></li>
              <li><Link href="/solar-solutions" className="hover:text-yellow-400 transition-colors">Solutions</Link></li>
              <li><Link href="/services" className="hover:text-yellow-400 transition-colors">Services</Link></li>
              <li><Link href="/career" className="hover:text-yellow-400 transition-colors">Careers</Link></li>
              <li><Link href="/blog" className="hover:text-yellow-400 transition-colors">Blog</Link></li>
              <li><Link href="/faq" className="hover:text-yellow-400 transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><Link href="/portfolio" className="hover:text-yellow-400 transition-colors">Portfolio</Link></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Sitemap</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="flex gap-2 items-start">
                <Phone size={16} className="mt-0.5 flex-shrink-0" />
                <a href="tel:+918888999999" className="hover:text-yellow-400 transition-colors">+918933814898</a>
              </li>
              <li className="flex gap-2 items-start">
                <Mail size={16} className="mt-0.5 flex-shrink-0" />
                <a href="mailto:hello@Orintek Solar.in" className="hover:text-yellow-400 transition-colors">contact@OrintekSolar.in</a>
              </li>
              <li className="flex gap-2 items-start">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <span>Lucknow, Uttar Pradesh, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8 mt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-gray-300 text-xs mb-4">
            <div>© 2024 {SITE_CONFIG.name}. All rights reserved.</div>
            <div className="text-center">Made with ❤️ in India</div>
            <div className="text-right">Powered by <Link href="https://procotech.in"
            >
              Proco Technologies
            </Link>
            </div>
          </div>
        </div>

        {/* SEO Keywords Section - Hidden from view but visible to search engines */}
        <div className="hidden" aria-hidden="true">
          <h2>Solar Panel in Lucknow</h2>
          <h2>Solar Panel Installation Lucknow</h2>
          <h2>Rooftop Solar Lucknow</h2>
          <h2>Solar Energy Company Lucknow</h2>
          <h2>Best Solar Panel Dealer Lucknow</h2>
          <h2>Solar Inverter Lucknow</h2>
          <h2>Solar Battery Lucknow</h2>
          <h2>Residential Solar Lucknow</h2>
          <h2>Commercial Solar Lucknow</h2>
          <h2>Solar Power Plant Lucknow</h2>
          <h2>MNRE Approved Solar Lucknow</h2>
          <h2>UPNEDA Solar Lucknow</h2>
          <h2>Solar Subsidy Lucknow</h2>
          <h2>Solar Maintenance Lucknow</h2>
          <h2>Solar Panel Price Lucknow</h2>
          <h2>Cheapest Solar Panel Lucknow</h2>
          <h2>Best Solar Company Lucknow</h2>
          <h2>Solar Solutions Lucknow</h2>
          <h2>Renewable Energy Lucknow</h2>
          <h2>Green Energy Lucknow</h2>
          <h2>Solar Panel for Home Lucknow</h2>
          <h2>Solar Panel for Housing Society Lucknow</h2>
          <h2>Solar for Apartment Lucknow</h2>
          <h2>Solar for Factory Lucknow</h2>
          <h2>Solar for School Lucknow</h2>
          <h2>Solar for Hospital Lucknow</h2>
          <h2>Solar for Hotel Lucknow</h2>
          <h2>Solar for Office Lucknow</h2>
          <h2>1KW Solar Panel Price Lucknow</h2>
          <h2>2KW Solar System Lucknow</h2>
          <h2>3KW Solar Panel Lucknow</h2>
          <h2>5KW Solar System Lucknow</h2>
          <h2>10KW Solar Panel Lucknow</h2>
          <h2>On Grid Solar System Lucknow</h2>
          <h2>Off Grid Solar System Lucknow</h2>
          <h2>Hybrid Solar System Lucknow</h2>
          <h2>Solar Panel Brands Lucknow</h2>
          <h2>Tata Solar Panel Lucknow</h2>
          <h2>Adani Solar Panel Lucknow</h2>
          <h2>Luminous Solar Panel Lucknow</h2>
          <h2>Exide Solar Panel Lucknow</h2>
          <h2>Amaron Solar Panel Lucknow</h2>
          <h2>Vikram Solar Panel Lucknow</h2>
          <h2>Waree Solar Panel Lucknow</h2>
          <h2>Loom Solar Panel Lucknow</h2>
          <h2>UTL Solar Panel Lucknow</h2>
          <h2>Solar Panel Dealer Near Me Lucknow</h2>
          <h2>Solar Installation Near Me Lucknow</h2>
          <h2>Solar Company Near Me Lucknow</h2>
          <h2>Best Solar Panel in Uttar Pradesh</h2>
          <h2>Solar Panel Installation in Uttar Pradesh</h2>
          <h2>Solar Energy Solutions India</h2>
          <h2>Solar Rooftop Installation India</h2>
          <h2>EV Charging Station Lucknow</h2>
          <h2>Solar Pump Lucknow</h2>
          <h2>Solar Water Heater Lucknow</h2>
          <h2>Solar AC Lucknow</h2>
          <h2>Solar Street Light Lucknow</h2>
          <h2>Solar Panel for Shop Lucknow</h2>
          <h2>Solar Panel for Warehouse Lucknow</h2>
          <h2>Industrial Solar Lucknow</h2>
          <h2>Institutional Solar Lucknow</h2>
          <h2>Government Solar Project Lucknow</h2>
          <h2>Solar EPC Contractor Lucknow</h2>
          <h2>Solar O&M Services Lucknow</h2>
          <h2>Solar AMC Lucknow</h2>
          <h2>Net Metering Lucknow</h2>
          <h2>Solar Net Metering Policy Lucknow</h2>
          <h2>Solar Loan Lucknow</h2>
          <h2>Solar Finance Lucknow</h2>
          <h2>SBI Solar Loan Lucknow</h2>
          <h2>HDFC Solar Loan Lucknow</h2>
          <h2>Solar Panel Installation Cost Lucknow</h2>
          <h2>Solar Panel Return on Investment Lucknow</h2>
          <h2>Solar Panel Saving Lucknow</h2>
          <h2>Solar Electricity Bill Reduction Lucknow</h2>
          <h2>Solar Panel Warranty Lucknow</h2>
          <h2>Solar Panel Performance Guarantee Lucknow</h2>
          <h2>Solar Panel Efficiency Lucknow</h2>
          <h2>Bifacial Solar Panel Lucknow</h2>
          <h2>Monocrystalline Solar Panel Lucknow</h2>
          <h2>Polycrystalline Solar Panel Lucknow</h2>
          <h2>PERC Solar Panel Lucknow</h2>
          <h2>Topcon Solar Panel Lucknow</h2>
          <h2>Solar Inverter Price Lucknow</h2>
          <h2>String Inverter Lucknow</h2>
          <h2>Micro Inverter Lucknow</h2>
          <h2>Hybrid Inverter Lucknow</h2>
          <h2>Solar Battery Price Lucknow</h2>
          <h2>Lead Acid Battery Lucknow</h2>
          <h2>Li-ion Battery Lucknow</h2>
          <h2>Tubular Battery Lucknow</h2>
          <h2>Solar Mounting Structure Lucknow</h2>
          <h2>Solar Panel Cleaning Lucknow</h2>
          <h2>Solar Panel Monitoring System Lucknow</h2>
          <h2>Solar App Lucknow</h2>
          <h2>Solar Portal Lucknow</h2>
          <h2>ORINTEK Solar Energy Solutions</h2>
          <h2>ORINTEK Solar Lucknow</h2>
        </div>
      </div>
    </footer>
  );
}
