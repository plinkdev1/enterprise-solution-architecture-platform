import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Target, Zap, CheckCircle } from 'lucide-react';

const ProblemSolution: React.FC = () => {
  const problems = [
    {
      icon: AlertTriangle,
      title: 'Manual processes slowing you down',
      description: 'Wasting hours on tasks that could be automated'
    },
    {
      icon: AlertTriangle,
      title: 'Generic software doesn\'t fit your needs',
      description: 'Forced to adapt your business to inflexible tools'
    },
    {
      icon: AlertTriangle,
      title: 'Development takes months or years',
      description: 'Business opportunities passing while waiting for solutions'
    }
  ];

  const solutions = [
    {
      icon: Target,
      title: 'Custom solutions built for your exact needs',
      description: 'No compromises, just tools that work the way you do'
    },
    {
      icon: Zap,
      title: 'Rapid development in weeks, not months',
      description: 'Modern technology stack for fast, reliable solutions'
    },
    {
      icon: CheckCircle,
      title: 'Guaranteed results with ongoing support',
      description: 'We ensure your solution works perfectly from day one'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-inter font-bold text-4xl text-neutral-900 mb-6">
            From Problem to Profit in <span className="text-primary-800">30 Days</span>
          </h2>
          <p className="font-opensans text-xl text-neutral-600 max-w-3xl mx-auto">
            We understand the frustration of business problems that drain your time and resources. 
            Here's how we transform those challenges into competitive advantages.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Problems Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-8">
              <h3 className="font-inter font-bold text-2xl text-red-600 mb-4">Common Business Problems</h3>
              <p className="font-opensans text-neutral-600">Sound familiar? You're not alone.</p>
            </div>

            <div className="space-y-6">
              {problems.map((problem, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="flex items-start space-x-4 p-6 bg-red-50 rounded-xl border border-red-100"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                    <problem.icon className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-opensans font-semibold text-lg text-neutral-900 mb-2">
                      {problem.title}
                    </h4>
                    <p className="font-opensans text-neutral-600">{problem.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Solutions Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-8">
              <h3 className="font-inter font-bold text-2xl text-success-600 mb-4">Our Solutions</h3>
              <p className="font-opensans text-neutral-600">Built specifically for your business needs.</p>
            </div>

            <div className="space-y-6">
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="flex items-start space-x-4 p-6 bg-success-50 rounded-xl border border-success-100"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-success-100 rounded-lg flex items-center justify-center">
                    <solution.icon className="w-6 h-6 text-success-600" />
                  </div>
                  <div>
                    <h4 className="font-opensans font-semibold text-lg text-neutral-900 mb-2">
                      {solution.title}
                    </h4>
                    <p className="font-opensans text-neutral-600">{solution.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-800 to-primary-600 rounded-2xl p-8 text-white">
            <h3 className="font-inter font-bold text-3xl mb-4">
              Skip the Development Headaches
            </h3>
            <p className="font-opensans text-xl mb-6 opacity-90">
              Get solutions that work from day one. No more waiting, no more frustration.
            </p>
            <motion.a
              href="#consultation"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center bg-white text-primary-800 px-8 py-4 rounded-lg font-opensans font-semibold text-lg hover:bg-gray-50 transition-colors shadow-lg"
            >
              Fix My Business Problem Today
              <Zap className="w-5 h-5 ml-2" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSolution;