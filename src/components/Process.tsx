import React from 'react';
import { motion } from 'framer-motion';
import { Search, PenTool, Code, Rocket } from 'lucide-react';

const Process: React.FC = () => {
  const steps = [
    {
      icon: Search,
      title: 'Assess',
      subtitle: 'Understand Your Problem',
      description: 'We dive deep into your business challenges, analyze your current processes, and identify the root causes of inefficiency.',
      timeline: 'Days 1-3',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: PenTool,
      title: 'Design',
      subtitle: 'Create Solution Blueprint',
      description: 'We design a custom solution tailored to your exact needs, with clear specifications and implementation roadmap.',
      timeline: 'Days 4-7',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Code,
      title: 'Build',
      subtitle: 'Develop Your Solution',
      description: 'Our expert developers build your solution using modern, proven technologies with regular progress updates.',
      timeline: 'Days 8-25',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Rocket,
      title: 'Deliver',
      subtitle: 'Launch & Support',
      description: 'We deploy your solution, provide comprehensive training, and offer 30 days of free support to ensure success.',
      timeline: 'Days 26-30',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  return (
    <section id="process" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-inter font-bold text-4xl text-neutral-900 mb-6">
            Our <span className="text-primary-800">4-Step Process</span>
          </h2>
          <p className="font-opensans text-xl text-neutral-600 max-w-3xl mx-auto">
            From problem identification to solution delivery in just 30 days. 
            Here's exactly how we transform your business challenges into competitive advantages.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 via-green-500 to-orange-500 transform -translate-y-1/2" />
          
          <div className="grid lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative"
              >
                {/* Step Number - Desktop */}
                <div className="hidden lg:flex absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white border-4 border-primary-800 rounded-full items-center justify-center font-inter font-bold text-primary-800 text-lg z-10">
                  {index + 1}
                </div>

                <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300">
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-xl flex items-center justify-center mb-6 mx-auto lg:mx-0`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <div className="text-center lg:text-left">
                    <div className="flex items-center justify-center lg:justify-start space-x-2 mb-3">
                      <h3 className="font-inter font-bold text-2xl text-neutral-900">
                        {step.title}
                      </h3>
                      <span className="lg:hidden bg-primary-100 text-primary-800 px-2 py-1 rounded-full text-xs font-medium">
                        Step {index + 1}
                      </span>
                    </div>
                    
                    <h4 className="font-opensans font-semibold text-lg text-primary-800 mb-4">
                      {step.subtitle}
                    </h4>
                    
                    <p className="font-opensans text-neutral-600 mb-6 leading-relaxed">
                      {step.description}
                    </p>

                    <div className="inline-flex items-center bg-gray-100 px-4 py-2 rounded-full">
                      <span className="font-opensans font-medium text-neutral-700 text-sm">
                        {step.timeline}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Mobile Arrow */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center mt-6 mb-2">
                    <div className="w-8 h-8 border-r-2 border-b-2 border-primary-800 transform rotate-45" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-primary-800 rounded-2xl p-8 text-white max-w-4xl mx-auto">
            <h3 className="font-inter font-bold text-3xl mb-4">
              Ready to Get Started?
            </h3>
            <p className="font-opensans text-xl mb-6 opacity-90">
              Your 30-day transformation begins with a simple conversation. 
              Let's discuss your business challenges and how we can solve them.
            </p>
            <motion.a
              href="#consultation"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center bg-white text-primary-800 px-8 py-4 rounded-lg font-opensans font-semibold text-lg hover:bg-gray-50 transition-colors shadow-lg"
            >
              Book My Strategy Session
              <Rocket className="w-5 h-5 ml-2" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;