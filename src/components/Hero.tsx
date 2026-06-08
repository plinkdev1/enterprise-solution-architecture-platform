import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Clock, TrendingUp, Lightbulb } from 'lucide-react';
import LeadMagnetModal from './LeadMagnetModal';

interface HeroProps {
  isLeadMagnetOpen: boolean;
  setIsLeadMagnetOpen: (open: boolean) => void;
}

const Hero: React.FC<HeroProps> = ({ isLeadMagnetOpen, setIsLeadMagnetOpen }) => {
  const stats = [
    { icon: TrendingUp, value: '300%+', label: 'Average Project ROI' },
    { icon: CheckCircle, value: '95%', label: 'Client Retention Rate' },
    { icon: Clock, value: '50+', label: 'Solutions Delivered' },
  ];

  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-primary-50 to-white">
      <LeadMagnetModal 
        isOpen={isLeadMagnetOpen} 
        onClose={() => setIsLeadMagnetOpen(false)} 
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="font-inter font-bold text-4xl md:text-6xl text-neutral-900 leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Turn Your Business Problems Into{' '}
              <span className="text-primary-800">Working Solutions</span>
            </motion.h1>
            
            <motion.p 
              className="font-opensans text-xl text-neutral-600 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Stop struggling with tech problems. Get custom solutions that actually work. 
              We build what your business actually needs, not generic software.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <motion.a
                href="#consultation"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary-800 text-white px-8 py-4 rounded-lg font-opensans font-semibold text-lg hover:bg-primary-900 transition-all duration-200 flex items-center justify-center gap-2 shadow-lg"
              >
                Get My Consultation
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              
              <motion.button
                onClick={() => setIsLeadMagnetOpen(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-primary-800 text-primary-800 px-8 py-4 rounded-lg font-opensans font-semibold text-lg hover:bg-primary-50 transition-all duration-200 flex items-center justify-center gap-2"
              >
                Get Free Business Insights
                <Lightbulb className="w-5 h-5" />
              </motion.button>
              
              <motion.a
                href="#process"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-neutral-300 text-neutral-700 px-8 py-4 rounded-lg font-opensans font-medium text-lg hover:bg-neutral-50 transition-all duration-200 flex items-center justify-center"
              >
                See How It Works
              </motion.a>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              className="flex flex-wrap justify-center gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200">
                <CheckCircle className="w-4 h-4 text-success-600" />
                <span className="font-opensans text-sm text-neutral-700 font-medium">100% Money-Back Guarantee</span>
              </div>
              <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200">
                <CheckCircle className="w-4 h-4 text-primary-600" />
                <span className="font-opensans text-sm text-neutral-700 font-medium">GDPR Compliant</span>
              </div>
              <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200">
                <CheckCircle className="w-4 h-4 text-neutral-600" />
                <span className="font-opensans text-sm text-neutral-700 font-medium">Enterprise Security</span>
              </div>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              className="flex flex-wrap justify-center gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200">
                <CheckCircle className="w-4 h-4 text-success-600" />
                <span className="font-opensans text-sm text-neutral-700 font-medium">100% Money-Back Guarantee</span>
              </div>
              <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200">
                <CheckCircle className="w-4 h-4 text-primary-600" />
                <span className="font-opensans text-sm text-neutral-700 font-medium">GDPR Compliant</span>
              </div>
              <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200">
                <CheckCircle className="w-4 h-4 text-neutral-600" />
                <span className="font-opensans text-sm text-neutral-700 font-medium">Enterprise Security</span>
              </div>
            </motion.div>
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-3 gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-success-100 rounded-lg flex items-center justify-center">
                    <stat.icon className="w-5 h-5 text-success-600" />
                  </div>
                  <div>
                    <div className="font-inter font-bold text-2xl text-neutral-900">{stat.value}</div>
                    <div className="font-opensans text-sm text-neutral-600">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="font-opensans text-neutral-600">Success Rate</span>
                  <span className="font-inter font-bold text-success-600">98%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <motion.div 
                    className="bg-success-500 h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: '98%' }}
                    transition={{ duration: 2, delay: 1 }}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="text-center">
                    <div className="font-inter font-bold text-2xl text-primary-800">12+</div>
                    <div className="font-opensans text-sm text-neutral-600">Industries Served</div>
                  </div>
                  <div className="text-center">
                    <div className="font-inter font-bold text-2xl text-primary-800">100%</div>
                    <div className="font-opensans text-sm text-neutral-600">Money-Back Guarantee</div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-16 h-16 bg-success-500 rounded-full flex items-center justify-center shadow-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <CheckCircle className="w-8 h-8 text-white" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;