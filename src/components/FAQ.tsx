import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp, CheckCircle } from 'lucide-react';
import { faqs } from '../data/content';

const FAQ: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-inter font-bold text-4xl text-neutral-900 mb-6">
            Frequently Asked <span className="text-primary-800">Questions</span>
          </h2>
          <p className="font-opensans text-xl text-neutral-600 max-w-3xl mx-auto">
            Get answers to common questions about our process, delivery times, and guarantees.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full px-8 py-6 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50 rounded-xl"
              >
                <h3 className="font-opensans font-semibold text-lg text-neutral-900 pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openFAQ === faq.id ? (
                    <ChevronUp className="w-6 h-6 text-primary-800" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-primary-800" />
                  )}
                </div>
              </button>

              <motion.div
                initial={false}
                animate={{
                  height: openFAQ === faq.id ? 'auto' : 0,
                  opacity: openFAQ === faq.id ? 1 : 0
                }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="px-8 pb-6">
                  <div className="border-t border-gray-100 pt-6">
                    <p className="font-opensans text-neutral-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="font-inter font-bold text-2xl text-neutral-900 mb-4">
              Still Have Questions?
            </h3>
            <p className="font-opensans text-neutral-600 mb-6">
              Can't find the answer you're looking for? We're here to help with your specific situation.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              <div className="flex items-center space-x-1 bg-white px-3 py-1 rounded-full shadow-sm border border-gray-200">
                <CheckCircle className="w-3 h-3 text-success-600" />
                <span className="font-opensans text-xs text-neutral-700 font-medium">100% Money-Back Guarantee</span>
              </div>
              <div className="flex items-center space-x-1 bg-white px-3 py-1 rounded-full shadow-sm border border-gray-200">
                <CheckCircle className="w-3 h-3 text-primary-600" />
                <span className="font-opensans text-xs text-neutral-700 font-medium">GDPR Compliant</span>
              </div>
              <div className="flex items-center space-x-1 bg-white px-3 py-1 rounded-full shadow-sm border border-gray-200">
                <CheckCircle className="w-3 h-3 text-neutral-600" />
                <span className="font-opensans text-xs text-neutral-700 font-medium">Enterprise Security</span>
              </div>
            </div>
            <motion.a
              href="#consultation"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center bg-primary-800 text-white px-8 py-4 rounded-lg font-opensans font-semibold text-lg hover:bg-primary-900 transition-colors shadow-lg"
            >
              Get My Custom Solution Quote
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;