import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Mail, Phone, MapPin, Shield, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  const quickLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#process' },
    { name: 'Case Studies', href: '#cases' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Consultation', href: '#consultation' },
  ];

  const guarantees = [
    { icon: Shield, text: '100% Money-Back Guarantee' },
    { icon: Clock, text: '30-Day Delivery Promise' },
    { icon: Zap, text: 'Modern Technology Stack' },
  ];

  return (
    <footer className="bg-neutral-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-2 mb-6">
              <div className="flex items-center justify-center w-8 h-8 bg-primary-800 rounded-lg">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="font-inter font-bold text-xl">SolutionCraft</span>
            </div>
            <p className="font-opensans text-neutral-300 mb-6 leading-relaxed">
              We turn your business problems into working solutions in weeks, not months. 
              Custom development for SMEs that need results fast.
            </p>
            <div className="space-y-3">
              {guarantees.map((guarantee, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <guarantee.icon className="w-5 h-5 text-success-500" />
                  <span className="font-opensans text-sm text-neutral-300">
                    {guarantee.text}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="font-inter font-semibold text-lg mb-6">Quick Links</h3>
            <nav className="space-y-3">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block font-opensans text-neutral-300 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-inter font-semibold text-lg mb-6">Our Services</h3>
            <div className="space-y-3">
              <div className="font-opensans text-neutral-300">Problem Assessment</div>
              <div className="font-opensans text-neutral-300">Custom Development</div>
              <div className="font-opensans text-neutral-300">Business Automation</div>
              <div className="font-opensans text-neutral-300">System Integration</div>
              <div className="font-opensans text-neutral-300">Ongoing Support</div>
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="font-inter font-semibold text-lg mb-6">Get In Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-400" />
                <span className="font-opensans text-neutral-300">hello@solutioncraft.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-400" />
                <span className="font-opensans text-neutral-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary-400" />
                <span className="font-opensans text-neutral-300">
                  New York, NY<br />
                  Available Worldwide
                </span>
              </div>
            </div>

            <motion.a
              href="#consultation"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block mt-6 bg-primary-800 text-white px-6 py-3 rounded-lg font-opensans font-medium hover:bg-primary-900 transition-colors"
            >
              Start Your Project
            </motion.a>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-neutral-800 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="font-opensans text-neutral-400 text-sm">
              © 2025 SolutionCraft. All rights reserved. Built with modern security standards.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="font-opensans text-neutral-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="font-opensans text-neutral-400 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="font-opensans text-neutral-400 hover:text-white transition-colors">
                Security
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;