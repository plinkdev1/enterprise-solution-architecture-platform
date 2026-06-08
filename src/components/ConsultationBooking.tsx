import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Shield, CreditCard, CheckCircle } from 'lucide-react';

const ConsultationBooking: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    challenge: '',
    timeline: '',
    budget: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPayment, setShowPayment] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setShowPayment(true);
  };

  const handleStripePayment = () => {
    // This is where Stripe integration would be implemented
    // For now, we'll show a placeholder
    alert('Stripe payment integration would be implemented here. This is a demo.');
  };

  return (
    <section id="consultation" className="py-20 bg-gradient-to-br from-neutral-900 to-neutral-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-inter font-bold text-4xl mb-6">
            Book Your <span className="text-yellow-400">Consultation</span>
          </h2>
          <p className="font-opensans text-xl text-neutral-300 max-w-3xl mx-auto">
            Ready to transform your business? Start with a 30-minute consultation where we'll analyze your challenges and provide actionable insights.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Benefits Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="font-inter font-bold text-2xl mb-8">What You'll Get:</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-success-500 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-opensans font-semibold text-lg mb-2">Problem Analysis</h4>
                  <p className="font-opensans text-neutral-300">We'll identify the root causes of your business challenges and inefficiencies.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-opensans font-semibold text-lg mb-2">Custom Solution Roadmap</h4>
                  <p className="font-opensans text-neutral-300">Get a detailed plan outlining exactly how we'll solve your problems.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-opensans font-semibold text-lg mb-2">Timeline & Cost Estimate</h4>
                  <p className="font-opensans text-neutral-300">Know exactly how long it will take and what it will cost.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-opensans font-semibold text-lg mb-2">100% Money-Back Guarantee</h4>
                  <p className="font-opensans text-neutral-300">If you're not satisfied with the consultation, get your money back.</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-yellow-500 bg-opacity-20 border border-yellow-500 rounded-lg">
              <p className="font-opensans text-yellow-100">
                <strong>Limited Time:</strong> 30-minute consultation included with every assessment package. 
                Book now to secure your spot in our development queue.
              </p>
            </div>
          </motion.div>

          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl shadow-2xl p-8 text-neutral-900"
          >
            {!showPayment ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="text-center mb-6">
                  <h3 className="font-inter font-bold text-2xl text-neutral-900 mb-2">
                    Start Your Transformation
                  </h3>
                  <p className="font-opensans text-neutral-600">
                    Fill out this form to book your consultation
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-opensans font-medium text-neutral-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block font-opensans font-medium text-neutral-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-opensans font-medium text-neutral-700 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Your company"
                    />
                  </div>
                  <div>
                    <label className="block font-opensans font-medium text-neutral-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-opensans font-medium text-neutral-700 mb-2">
                    Business Challenge *
                  </label>
                  <textarea
                    name="challenge"
                    required
                    rows={4}
                    value={formData.challenge}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Describe the main business problem you need solved..."
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-opensans font-medium text-neutral-700 mb-2">
                      Timeline
                    </label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="">Select timeline</option>
                      <option value="urgent">ASAP (Urgent)</option>
                      <option value="month">Within 1 month</option>
                      <option value="quarter">Within 3 months</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-opensans font-medium text-neutral-700 mb-2">
                      Budget Range
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="">Select budget</option>
                      <option value="under-5k">Under €5,000</option>
                      <option value="5k-25k">€5,000 - €25,000</option>
                      <option value="25k-50k">€25,000 - €50,000</option>
                      <option value="50k-plus">€50,000+</option>
                    </select>
                  </div>
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-primary-800 text-white px-8 py-4 rounded-lg font-opensans font-semibold text-lg hover:bg-primary-900 transition-colors shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Processing...' : 'Book My Consultation'}
                </motion.button>

                <p className="text-xs text-neutral-500 text-center">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </form>
            ) : (
              <div className="text-center">
                <div className="w-16 h-16 bg-success-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-success-600" />
                </div>
                
                <h3 className="font-inter font-bold text-2xl text-neutral-900 mb-4">
                  Consultation Booked!
                </h3>
                
                <p className="font-opensans text-neutral-600 mb-8">
                  Thank you for booking your consultation. To secure your spot and get detailed assessment, 
                  please complete the payment for your solution blueprint.
                </p>

                <div className="bg-primary-50 rounded-lg p-6 mb-8">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <CreditCard className="w-5 h-5 text-primary-800" />
                    <span className="font-inter font-bold text-2xl text-primary-800">€500</span>
                  </div>
                  <p className="font-opensans text-primary-700">
                    Problem Assessment & Solution Blueprint
                  </p>
                  <p className="font-opensans text-sm text-primary-600 mt-2">
                    100% Money-back guarantee if not satisfied
                  </p>
                </div>

                <motion.button
                  onClick={handleStripePayment}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-primary-800 text-white px-8 py-4 rounded-lg font-opensans font-semibold text-lg hover:bg-primary-900 transition-colors shadow-lg flex items-center justify-center space-x-2"
                >
                  <CreditCard className="w-5 h-5" />
                  <span>Complete Payment with Stripe</span>
                </motion.button>

                {/* Trust Badges */}
                <div className="flex items-center justify-center space-x-4 mt-6 text-sm text-neutral-500">
                  <div className="flex items-center space-x-1">
                    <Shield className="w-4 h-4" />
                    <span>Secure Payment</span>
                  </div>
                  <div>SSL Encrypted</div>
                  <div>256-bit Security</div>
                  <div className="flex items-center space-x-1">
                    <CheckCircle className="w-4 h-4" />
                    <span>GDPR Compliant</span>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationBooking;