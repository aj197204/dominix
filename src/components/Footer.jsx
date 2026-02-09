
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '#about' },
    { name: 'Services', path: '#services' },
    { name: 'Approach', path: '#approach' },
    { name: 'Contact', path: '#contact' }
  ];

  const handleNavClick = (e, path) => {
    if (path.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(path);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <span className="text-2xl font-bold text-white mb-4 block">
              Dominix Inc.
            </span>
            <p className="text-gray-400 leading-relaxed">
              Design-Led Transformation for Businesses Ready to Scale
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <span className="text-white font-semibold mb-4 block">
              Quick Links
            </span>
            <nav className="space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={(e) => handleNavClick(e, link.path)}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Information */}
          <div>
            <span className="text-white font-semibold mb-4 block">
              Contact Us
            </span>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:contact@dominix.com"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  contact@dominix.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <a
                  href="tel:+1234567890"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  +1 (234) 567-890
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <p className="text-gray-400">
                  123 Business Ave, Suite 100<br />
                  San Francisco, CA 94105
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-500 text-sm">
            © {currentYear} Dominix Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
