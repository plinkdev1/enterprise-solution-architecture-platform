import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star, ArrowRight } from 'lucide-react';
import { servicePackages } from '../data/content';
import AssessmentModal from './AssessmentModal';
import DevelopmentModal from './DevelopmentModal';

const ServicePackages: React.FC = () => {
  const [isAssessmentModalOpen, setIsAssessmentModalOpen] = React.useState(false);
  const [isDevelopmentModalOpen, setIsDevelopmentModalOpen] = React.useState(false);

  return (
    <section id="services" className="py-20 bg-gray-50">
      <AssessmentModal 
        isOpen={isAssessmentModalOpen} 
        onClose={() => setIsAssessmentModalOpen(false)} 
      />
      <DevelopmentModal 
        isOpen={isDevelopmentModalOpen} 
        onClose={() => setIsDevelopmentModalOpen(false)} 
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-inter font-bold text-4xl text-neutral-900 mb-6">
            Choose Your <span className="text-primary-800">Solution Path</span>
          </h2>
          <p className="font-opensans text-xl text-neutral-600 max-w-3xl mx-auto">
            Whether you need a quick assessment or a complete solution, we have the right package to transform your business.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {servicePackages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`relative bg-white rounded-2xl shadow-xl p-8 ${
                pkg.popular ? 'ring-4 ring-primary-800 ring-opacity-20' : ''
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary-800 text-white px-6 py-2 rounded-full flex items-center space-x-2 shadow-lg">
                    <Star className="w-4 h-4" />
                    <span className="font-opensans font-medium text-sm">Most Popular</span>
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="font-inter font-bold text-2xl text-neutral-900 mb-4">
                  {pkg.name}
                </h3>
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <span className="font-inter font-bold text-4xl text-primary-800">
                    {pkg.price}
                  </span>
                  {pkg.originalPrice && (
                    <span className="font-opensans text-xl text-neutral-400 line-through">
                      {pkg.originalPrice}
                    </span>
                  )}
                </div>
                {pkg.originalPrice && (
                  <p className="font-opensans text-sm text-success-600 font-medium">
                    Save €700 with complete package
                  </p>
                )}
              </div>

              <div className="space-y-4 mb-8">
                {pkg.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-success-500 flex-shrink-0 mt-0.5" />
                    <span className="font-opensans text-neutral-700">{feature}</span>
                  </div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  if (pkg.id === 'assessment') {
                    setIsAssessmentModalOpen(true);
                  } else if (pkg.id === 'development') {
                    setIsDevelopmentModalOpen(true);
                  }
                }}
                className={`w-full py-4 px-6 rounded-lg font-opensans font-semibold text-lg transition-all duration-200 flex items-center justify-center space-x-2 ${
                  pkg.popular
                    ? 'bg-primary-800 text-white hover:bg-primary-900 shadow-lg'
                    : 'bg-primary-100 text-primary-800 hover:bg-primary-200'
                }`}
              >
                <span>{pkg.cta}</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <div className="bg-primary-50 rounded-xl p-6 max-w-4xl mx-auto">
            <p className="font-opensans text-primary-800 text-lg">
              <strong>Money-Back Guarantee:</strong> Not satisfied with your assessment? 
              Get your money back, no questions asked. We're that confident in our ability to help your business.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicePackages;