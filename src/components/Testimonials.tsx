import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '../data/content';

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-inter font-bold text-4xl text-neutral-900 mb-6">
            What Our <span className="text-primary-800">Clients Say</span>
          </h2>
          <p className="font-opensans text-xl text-neutral-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what business owners say about working with us.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Quote Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <Quote className="w-6 h-6 text-primary-800" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex justify-center space-x-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <blockquote className="font-opensans text-neutral-700 text-lg leading-relaxed mb-8 text-center">
                "{testimonial.content}"
              </blockquote>

              {/* Metric */}
              {testimonial.metric && (
                <div className="text-center mb-6">
                  <div className="bg-success-100 rounded-lg p-4">
                    <span className="font-inter font-bold text-success-600 text-lg">
                      {testimonial.metric}
                    </span>
                  </div>
                </div>
              )}

              {/* Author */}
              <div className="text-center border-t border-gray-100 pt-6">
                <div className="font-opensans font-semibold text-neutral-900 text-lg">
                  {testimonial.name}
                </div>
                <div className="font-opensans text-primary-800 font-medium">
                  {testimonial.role}
                </div>
                <div className="font-opensans text-neutral-600 text-sm">
                  {testimonial.company}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div>
                <div className="font-inter font-bold text-4xl text-primary-800 mb-2">98%</div>
                <div className="font-opensans text-neutral-600">Client Satisfaction</div>
              </div>
              <div>
                <div className="font-inter font-bold text-4xl text-primary-800 mb-2">50+</div>
                <div className="font-opensans text-neutral-600">Solutions Delivered</div>
              </div>
              <div>
                <div className="font-inter font-bold text-4xl text-primary-800 mb-2">€2M+</div>
                <div className="font-opensans text-neutral-600">Client Revenue Generated</div>
              </div>
              <div>
                <div className="font-inter font-bold text-4xl text-primary-800 mb-2">12+</div>
                <div className="font-opensans text-neutral-600">Verticals Transformed</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Client Industry Logos Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16"
        >
          <div className="text-center mb-12">
            <h3 className="font-inter font-bold text-2xl text-neutral-900 mb-4">
              Trusted by Leading Companies Across <span className="text-primary-800">Industries</span>
            </h3>
            <p className="font-opensans text-neutral-600">
              Placeholder logos for client companies across diverse sectors
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="text-center group">
              <div className="w-24 h-16 bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:border-primary-300 transition-colors duration-300">
                <div className="text-center">
                  <div className="w-8 h-8 bg-blue-600 rounded mx-auto mb-1"></div>
                  <span className="text-xs text-gray-500 font-medium">LOGO</span>
                </div>
              </div>
              <h4 className="font-opensans font-semibold text-neutral-900 text-sm">SaaS & Technology</h4>
            </div>

            <div className="text-center group">
              <div className="w-24 h-16 bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:border-primary-300 transition-colors duration-300">
                <div className="text-center">
                  <div className="w-8 h-8 bg-green-600 rounded mx-auto mb-1"></div>
                  <span className="text-xs text-gray-500 font-medium">LOGO</span>
                </div>
              </div>
              <h4 className="font-opensans font-semibold text-neutral-900 text-sm">Healthcare</h4>
            </div>

            <div className="text-center group">
              <div className="w-24 h-16 bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:border-primary-300 transition-colors duration-300">
                <div className="text-center">
                  <div className="w-8 h-8 bg-purple-600 rounded mx-auto mb-1"></div>
                  <span className="text-xs text-gray-500 font-medium">LOGO</span>
                </div>
              </div>
              <h4 className="font-opensans font-semibold text-neutral-900 text-sm">Manufacturing</h4>
            </div>

            <div className="text-center group">
              <div className="w-24 h-16 bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:border-primary-300 transition-colors duration-300">
                <div className="text-center">
                  <div className="w-8 h-8 bg-orange-600 rounded mx-auto mb-1"></div>
                  <span className="text-xs text-gray-500 font-medium">LOGO</span>
                </div>
              </div>
              <h4 className="font-opensans font-semibold text-neutral-900 text-sm">Retail & E-commerce</h4>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;