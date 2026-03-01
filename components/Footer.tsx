'use client';

import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Phone, Mail, MapPin } from 'lucide-react';
import { SITE_CONFIG, COLORS } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="mt-20" style={{ backgroundColor: COLORS.darkBlue, color: 'white' }}>
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
                <a href="tel:+918888999999" className="hover:text-yellow-400 transition-colors">+91 8888 999 999</a>
              </li>
              <li className="flex gap-2 items-start">
                <Mail size={16} className="mt-0.5 flex-shrink-0" />
                <a href="mailto:hello@solarsquare.in" className="hover:text-yellow-400 transition-colors">hello@solarsquare.in</a>
              </li>
              <li className="flex gap-2 items-start">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <span>India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8 mt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-gray-300 text-xs mb-4">
            <div>© 2024 {SITE_CONFIG.name}. All rights reserved.</div>
            <div className="text-center">Made with ❤️ in India</div>
            <div className="text-right">Powered by renewable energy</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
