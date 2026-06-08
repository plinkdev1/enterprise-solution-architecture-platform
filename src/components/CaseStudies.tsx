import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, TrendingUp, Clock, Building2 } from 'lucide-react';
import { caseStudies } from '../data/content';

const CaseStudies: React.FC = () => {
  const [currentCase, setCurrentCase] = useState(0);

  const nextCase = () => {
    setCurrentCase((prev) => (prev + 1) % caseStudies.length);
  };

  const prevCase = () => {
    setCurrentCase((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };

  const currentStudy = caseStudies[currentCase];

  return (
    <section id="cases" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-inter font-bold text-4xl text-neutral-900 mb-6">
            Real Results from <span className="text-primary-800">Real Businesses</span>
          </h2>
          <p className="font-opensans text-xl text-neutral-600 max-w-3xl mx-auto">
            See how we've transformed challenges into competitive advantages for businesses just like yours.
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          <motion.div
            key={currentCase}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-primary-50 to-white rounded-2xl shadow-xl p-8 md:p-12"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <Building2 className="w-5 h-5 text-primary-600" />
                  <span className="font-opensans text-primary-600 font-medium">
                    {currentStudy.industry}
                  </span>
                </div>
                
                <h3 className="font-inter font-bold text-3xl text-neutral-900 mb-6">
                  {currentStudy.title}
                </h3>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-opensans font-semibold text-red-600 mb-2">Challenge:</h4>
                    <p className="font-opensans text-neutral-700">{currentStudy.challenge}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-opensans font-semibold text-primary-800 mb-2">Solution:</h4>
                    <p className="font-opensans text-neutral-700">{currentStudy.solution}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-opensans font-semibold text-success-600 mb-2">Result:</h4>
                    <p className="font-opensans text-neutral-700">{currentStudy.result}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center space-x-3 mb-4">
                    <TrendingUp className="w-6 h-6 text-success-600" />
                    <span className="font-opensans font-semibold text-neutral-900">Key Metric</span>
                  </div>
                  <div className="font-inter font-bold text-3xl text-success-600 mb-2">
                    {currentStudy.metric}
                  </div>
                  <p className="font-opensans text-neutral-600">Measurable business impact</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center space-x-3 mb-4">
                    <Clock className="w-6 h-6 text-primary-600" />
                    <span className="font-opensans font-semibold text-neutral-900">Delivery Time</span>
                  </div>
                  <div className="font-inter font-bold text-3xl text-primary-600 mb-2">
                    {currentStudy.timeframe}
                  </div>
                  <p className="font-opensans text-neutral-600">From start to finish</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <motion.button
              onClick={prevCase}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow"
            >
              <ChevronLeft className="w-6 h-6 text-primary-800" />
            </motion.button>

            <div className="flex space-x-2">
              {caseStudies.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentCase(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentCase ? 'bg-primary-800' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>

            <motion.button
              onClick={nextCase}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow"
            >
              <ChevronRight className="w-6 h-6 text-primary-800" />
            </motion.button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="font-opensans text-lg text-neutral-600 mb-6">
            Ready to write your own success story?
          </p>
          <motion.a
            href="#consultation"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center bg-primary-800 text-white px-8 py-4 rounded-lg font-opensans font-semibold text-lg hover:bg-primary-900 transition-colors shadow-lg"
          >
            Start My Solution Assessment
            <TrendingUp className="w-5 h-5 ml-2" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudies;