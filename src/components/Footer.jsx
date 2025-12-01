import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Courses', path: '/courses' },
    { name: 'Admission Form', path: '/admission' },
    { name: 'Contact', path: '/contact' },
    { name: 'Book Demo', path: '/book-demo' },
  ];

  const courses = [
    'Web Technology Fullstack',
    'Python Fullstack + Data Science',
    'Java Fullstack Development',
    'Mobile App Development',
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/techclassofeducation', label: 'Facebook' },
    { icon: Instagram, href: 'https://www.instagram.com/techclassofeducation?igsh=MTNwZXhnd2l4eGpxZg==', label: 'Instagram' },
    // { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Youtube, href: 'https://youtube.com/@techclassofeducationtce7598?si=fOu7RjLm4LCWb_aJ', label: 'YouTube' },
  ];

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <img 
              src="/TCE-LOGO.png" 
              alt="Techclass Logo" 
              className="h-16 w-auto mb-4"
            />
            <p className="text-gray-300">
              Leading programming training institute in Nagpur with 9+ years of experience. 
              Providing job-oriented, practical education to 100+ successful students.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="text-gray-400 hover:text-red-600 transition-colors"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-red-600">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-red-600 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-red-600">Our Courses</h3>
            <ul className="space-y-2">
              {courses.map((course, index) => (
                <li key={index} className="text-gray-300">
                  {course}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-red-600">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-red-600 mt-1" />
                <p className="text-gray-300">
                  Plot No. 123, Hudkeshwar Road, Nilkanth Nagar, Nagpur
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-red-600" />
                <a
                  href="tel:+918446561357"
                  className="text-gray-300 hover:text-red-600 transition-colors"
                >
                  +91 8446561357
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-red-600" />
                <a
                  href="mailto:info@techclassofeducation.com"
                  className="text-gray-300 hover:text-red-600 transition-colors"
                >
                  info@techclassofeducation.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Clock size={18} className="text-red-600" />
                <p className="text-gray-300">Mon - Sat: 9:00 AM - 8:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Techclass Of Education. All rights reserved. | Designed and Develop by Sournaksh Buildsoft Pvt. Ltd.
            {/* with ❤️ for students in Nagpur */}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;