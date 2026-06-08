import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Lightbulb, ArrowRight, CheckCircle, Clock, ArrowLeft } from 'lucide-react';

interface LeadMagnetModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LeadMagnetModal: React.FC<LeadMagnetModalProps> = ({ isOpen, onClose }) => {
  const [currentSection, setCurrentSection] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    companyName: '',
    industry: '',
    companySize: '',
    problemDescription: '',
    timeWasted: '',
    previousAttempts: '',
    otherAttempts: '',
    idealSolution: '',
    budget: '',
    email: '',
    phone: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    if (currentSection < 4) {
      setCurrentSection(currentSection + 1);
    }
  };

  const handlePrev = () => {
    if (currentSection > 1) {
      setCurrentSection(currentSection - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    
    // Auto-close after 3 seconds
    setTimeout(() => {
      resetModal();
    }, 3000);
  };

  const resetModal = () => {
    setCurrentSection(1);
    setIsSuccess(false);
    setFormData({
      companyName: '',
      industry: '',
      companySize: '',
      problemDescription: '',
      timeWasted: '',
      previousAttempts: '',
      otherAttempts: '',
      idealSolution: '',
      budget: '',
      email: '',
      phone: ''
    });
    onClose();
  };

  const sections = [
    { number: 1, title: 'Quick Company Info', icon: '🏢' },
    { number: 2, title: 'The Problem', icon: '🎯' },
    { number: 3, title: 'Solution Preferences', icon: '✨' },
    { number: 4, title: 'Contact (Optional)', icon: '📧' }
  ];

  const industryOptions = [
    'E-commerce/Online retail',
    'Restaurant/Food service',
    'Professional services',
    'Manufacturing',
    'Healthcare',
    'Real estate',
    'Education',
    'Construction',
    'Logistics/Transportation',
    'Other'
  ];

  const companySizeOptions = [
    'Just me (1 person)',
    'Small team (2-10 people)',
    'Medium business (11-50 people)',
    'Larger business (50+ people)'
  ];

  const timeWastedOptions = [
    '1-5 hours',
    '5-15 hours',
    '15-30 hours',
    '30+ hours'
  ];

  const previousAttemptsOptions = [
    'Nothing yet',
    'Looked for software but couldn\'t find the right fit',
    'Tried generic tools but don\'t work for us',
    'Hired someone but it didn\'t work out',
    'Other'
  ];

  const budgetOptions = [
    'Under €1,000',
    '€1,000-€5,000',
    '€5,000-€15,000',
    '€15,000+',
    'Not sure yet'
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {!isSuccess ? (
              <>
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                      <Lightbulb className="w-5 h-5 text-primary-800" />
                    </div>
                    <div>
                      <h2 className="font-inter font-bold text-2xl text-neutral-900">
                        Tell Us Your Challenge
                      </h2>
                      <p className="font-opensans text-neutral-600">
                        Get Solution Ideas in Minutes
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={onClose}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <X className="w-5 h-5 text-neutral-600" />
                  </button>
                </div>

                {/* Progress Bar */}
                <div className="px-6 py-4 bg-gray-50">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-opensans text-sm text-neutral-600">
                      Section {currentSection} of 4
                    </span>
                    <div className="flex items-center space-x-1 text-primary-800">
                      <Clock className="w-4 h-4" />
                      <span className="font-opensans text-sm">3 min to complete</span>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div
                      className="bg-primary-800 h-2 rounded-full"
                      initial={{ width: '25%' }}
                      animate={{ width: `${(currentSection / 4) * 100}%` }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                  <div className="flex justify-between mt-3">
                    {sections.map((section) => (
                      <div
                        key={section.number}
                        className={`flex items-center space-x-2 ${
                          section.number <= currentSection ? 'text-primary-800' : 'text-neutral-400'
                        }`}
                      >
                        <span className="text-lg">{section.icon}</span>
                        <span className="font-opensans text-xs hidden sm:block">{section.title}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Form Content */}
                <form onSubmit={handleSubmit} className="p-6">
                  {currentSection === 1 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="space-y-4"
                    >
                      <h3 className="font-inter font-semibold text-xl text-neutral-900 mb-4">
                        Quick Company Info
                      </h3>
                      
                      <div>
                        <label className="block font-opensans font-medium text-neutral-700 mb-2">
                          Company Name
                        </label>
                        <input
                          type="text"
                          name="companyName"
                          value={formData.companyName}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="Leave blank to stay anonymous"
                        />
                      </div>

                      <div>
                        <label className="block font-opensans font-medium text-neutral-700 mb-2">
                          Industry *
                        </label>
                        <select
                          name="industry"
                          required
                          value={formData.industry}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        >
                          <option value="">Select your industry</option>
                          {industryOptions.map((option) => (
                            <option key={option} value={option}>{option}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block font-opensans font-medium text-neutral-700 mb-2">
                          Company Size *
                        </label>
                        <select
                          name="companySize"
                          required
                          value={formData.companySize}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        >
                          <option value="">Select company size</option>
                          {companySizeOptions.map((option) => (
                            <option key={option} value={option}>{option}</option>
                          ))}
                        </select>
                      </div>
                    </motion.div>
                  )}

                  {currentSection === 2 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="space-y-4"
                    >
                      <h3 className="font-inter font-semibold text-xl text-neutral-900 mb-4">
                        The Problem (Key Data Mining Section)
                      </h3>
                      
                      <div>
                        <label className="block font-opensans font-medium text-neutral-700 mb-2">
                          What's your biggest business frustration right now? *
                        </label>
                        <textarea
                          name="problemDescription"
                          required
                          rows={4}
                          maxLength={200}
                          value={formData.problemDescription}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="Example: We waste 5 hours weekly doing inventory manually..."
                        />
                        <div className="text-right text-sm text-neutral-500 mt-1">
                          {formData.problemDescription.length}/200 words
                        </div>
                      </div>

                      <div>
                        <label className="block font-opensans font-medium text-neutral-700 mb-2">
                          How much time does this problem cost per week? *
                        </label>
                        <select
                          name="timeWasted"
                          required
                          value={formData.timeWasted}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        >
                          <option value="">Select time wasted</option>
                          {timeWastedOptions.map((option) => (
                            <option key={option} value={option}>{option}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block font-opensans font-medium text-neutral-700 mb-2">
                          What have you tried to solve this? *
                        </label>
                        <select
                          name="previousAttempts"
                          required
                          value={formData.previousAttempts}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        >
                          <option value="">Select what you've tried</option>
                          {previousAttemptsOptions.map((option) => (
                            <option key={option} value={option}>{option}</option>
                          ))}
                        </select>
                      </div>

                      {formData.previousAttempts === 'Other' && (
                        <div>
                          <label className="block font-opensans font-medium text-neutral-700 mb-2">
                            Please specify what you tried:
                          </label>
                          <input
                            type="text"
                            name="otherAttempts"
                            value={formData.otherAttempts}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            placeholder="Describe what you tried..."
                          />
                        </div>
                      )}
                    </motion.div>
                  )}

                  {currentSection === 3 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="space-y-4"
                    >
                      <h3 className="font-inter font-semibold text-xl text-neutral-900 mb-4">
                        Solution Preferences
                      </h3>
                      
                      <div>
                        <label className="block font-opensans font-medium text-neutral-700 mb-2">
                          If you could wave a magic wand, how would this be solved? *
                        </label>
                        <textarea
                          name="idealSolution"
                          required
                          rows={4}
                          value={formData.idealSolution}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="In my ideal world, this would happen automatically..."
                        />
                      </div>

                      <div>
                        <label className="block font-opensans font-medium text-neutral-700 mb-2">
                          What's your rough budget for solving this? *
                        </label>
                        <select
                          name="budget"
                          required
                          value={formData.budget}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        >
                          <option value="">Select budget range</option>
                          {budgetOptions.map((option) => (
                            <option key={option} value={option}>{option}</option>
                          ))}
                        </select>
                      </div>
                    </motion.div>
                  )}

                  {currentSection === 4 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="space-y-4"
                    >
                      <h3 className="font-inter font-semibold text-xl text-neutral-900 mb-4">
                        Contact (Optional)
                      </h3>
                      
                      <div>
                        <label className="block font-opensans font-medium text-neutral-700 mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="your@email.com"
                        />
                        <p className="text-sm text-neutral-600 mt-1">
                          We'll send you relevant solution approaches within 24 hours
                        </p>
                      </div>

                      <div>
                        <label className="block font-opensans font-medium text-neutral-700 mb-2">
                          Phone Number (Optional)
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="+1 (555) 123-4567"
                        />
                        <p className="text-sm text-neutral-600 mt-1">
                          Only if you want a quick call to discuss ideas
                        </p>
                      </div>

                      <div className="bg-primary-50 rounded-lg p-4 mt-6">
                        <div className="flex items-start space-x-3">
                          <Lightbulb className="w-5 h-5 text-primary-800 mt-0.5" />
                          <div>
                            <h4 className="font-opensans font-semibold text-primary-900 mb-1">
                              What happens next?
                            </h4>
                            <p className="font-opensans text-sm text-primary-800">
                              We'll analyze your challenge and send you specific solution approaches within 24 hours. No sales calls, just valuable insights.
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Navigation Buttons */}
                  <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200">
                    <button
                      type="button"
                      onClick={handlePrev}
                      className={`flex items-center space-x-2 px-6 py-2 rounded-lg font-opensans font-medium transition-colors ${
                        currentSection === 1
                          ? 'text-neutral-400 cursor-not-allowed'
                          : 'text-neutral-600 hover:bg-gray-100'
                      }`}
                      disabled={currentSection === 1}
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>Previous</span>
                    </button>

                    {currentSection < 4 ? (
                      <motion.button
                        type="button"
                        onClick={handleNext}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="bg-primary-800 text-white px-8 py-3 rounded-lg font-opensans font-semibold hover:bg-primary-900 transition-colors flex items-center space-x-2"
                      >
                        <span>Next Section</span>
                        <ArrowRight className="w-4 h-4" />
                      </motion.button>
                    ) : (
                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="bg-success-600 text-white px-8 py-3 rounded-lg font-opensans font-semibold hover:bg-success-700 transition-colors flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <span>{isSubmitting ? 'Analyzing...' : 'Get My Solution Ideas'}</span>
                        {!isSubmitting && <Lightbulb className="w-4 h-4" />}
                      </motion.button>
                    )}
                  </div>
                </form>
              </>
            ) : (
              /* Success State */
              <div className="p-8 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", duration: 0.5 }}
                  className="w-20 h-20 bg-success-100 rounded-full flex items-center justify-center mx-auto mb-6"
                >
                  <CheckCircle className="w-10 h-10 text-success-600" />
                </motion.div>
                
                <h3 className="font-inter font-bold text-3xl text-neutral-900 mb-4">
                  🎯 Got it! We're analyzing your challenge...
                </h3>
                
                <div className="space-y-3 mb-8 text-left max-w-md mx-auto">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-success-600" />
                    <span className="font-opensans text-neutral-700">
                      We'll review your situation within 7 hours
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-success-600" />
                    <span className="font-opensans text-neutral-700">
                      If we spot a solution approach, you'll hear from us
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-success-600" />
                    <span className="font-opensans text-neutral-700">
                      No obligations - just helpful ideas
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-success-600" />
                    <span className="font-opensans text-neutral-700">
                      Your info stays private
                    </span>
                  </div>
                </div>

                <div className="bg-primary-50 rounded-lg p-4 mb-6">
                  <p className="font-opensans text-primary-800 text-sm">
                    <strong>PS:</strong> If this looks like something we can definitely solve, 
                    we might reach out with a special consultation offer 😉
                  </p>
                </div>

                <p className="font-opensans text-sm text-neutral-500">
                  This window will close automatically in a few seconds...
                </p>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LeadMagnetModal;