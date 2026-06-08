import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Euro, Calendar, Clock, ArrowRight, ArrowLeft, CheckCircle, CreditCard, Shield } from 'lucide-react';

interface AssessmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AssessmentModal: React.FC<AssessmentModalProps> = ({ isOpen, onClose }) => {
  const [currentSection, setCurrentSection] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  
  const [formData, setFormData] = useState({
    // Section 1: Company Overview
    companyName: '',
    industry: '',
    employees: '',
    revenue: '',
    revenueStreams: '',
    role: '',
    yearsInBusiness: '',
    
    // Section 2: Problem Deep-Dive
    mainChallenge: '',
    problemFrequency: '',
    affectedTeams: '',
    currentProcess: '',
    currentTools: '',
    processBreakdown: '',
    previousSolutions: '',
    
    // Section 3: Impact Analysis
    timeWasted: '',
    costImpact: '',
    missedOpportunities: '',
    urgencyScale: 5,
    
    // Section 4: Solution Requirements
    idealScenario: '',
    successMetrics: '',
    mustHaveFeatures: '',
    niceToHaveFeatures: '',
    integrationNeeds: '',
    userRequirements: '',
    
    // Section 5: Implementation
    preferredTimeline: '',
    budgetRange: '',
    decisionMaker: '',
    startDate: '',
    technicalRequirements: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    if (currentSection < 5) {
      setCurrentSection(currentSection + 1);
    } else {
      setShowCalendar(true);
    }
  };

  const handlePrev = () => {
    if (currentSection > 1) {
      setCurrentSection(currentSection - 1);
    }
  };

  const handleCalendarSubmit = () => {
    if (selectedDate && selectedTime) {
      setShowCalendar(false);
      setShowPayment(true);
    }
  };

  const handlePayment = async () => {
    setIsSubmitting(true);
    
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    setIsSubmitting(false);
    setShowPayment(false);
    setIsSuccess(true);
    
    // Auto-close after 5 seconds
    setTimeout(() => {
      resetModal();
    }, 5000);
  };

  const resetModal = () => {
    setCurrentSection(1);
    setShowCalendar(false);
    setShowPayment(false);
    setIsSuccess(false);
    setSelectedDate('');
    setSelectedTime('');
    setFormData({
      companyName: '', industry: '', employees: '', revenue: '', revenueStreams: '',
      role: '', yearsInBusiness: '', mainChallenge: '', problemFrequency: '',
      affectedTeams: '', currentProcess: '', currentTools: '', processBreakdown: '',
      previousSolutions: '', timeWasted: '', costImpact: '', missedOpportunities: '',
      urgencyScale: 5, idealScenario: '', successMetrics: '', mustHaveFeatures: '',
      niceToHaveFeatures: '', integrationNeeds: '', userRequirements: '',
      preferredTimeline: '', budgetRange: '', decisionMaker: '', startDate: '',
      technicalRequirements: ''
    });
    onClose();
  };

  const sections = [
    { number: 1, title: 'Company Overview', icon: '🏢' },
    { number: 2, title: 'Problem Deep-Dive', icon: '🔍' },
    { number: 3, title: 'Impact Analysis', icon: '📊' },
    { number: 4, title: 'Solution Requirements', icon: '⚙️' },
    { number: 5, title: 'Implementation', icon: '🚀' }
  ];

  const industryOptions = [
    'E-commerce/Online retail', 'Restaurant/Food service', 'Professional services',
    'Manufacturing', 'Healthcare', 'Real estate', 'Education', 'Construction',
    'Logistics/Transportation', 'Other'
  ];

  const revenueOptions = [
    'Under €100K', '€100K-€500K', '€500K-€2M', '€2M-€10M', '€10M+'
  ];

  const frequencyOptions = [
    'Multiple times daily', 'Daily', 'Weekly', 'Monthly', 'Occasionally'
  ];

  const timeWastedOptions = [
    '1-5 hours', '5-15 hours', '15-30 hours', '30-50 hours', '50+ hours'
  ];

  const timelineOptions = [
    'ASAP (within 2 weeks)', 'Within 1 month', 'Within 3 months', 
    'Within 6 months', 'Flexible timeline'
  ];

  const budgetOptions = [
    '€5,000-€15,000', '€15,000-€30,000', '€30,000-€50,000', 
    '€50,000-€100,000', '€100,000+'
  ];

  // Generate calendar dates (next 30 days, excluding weekends)
  const generateCalendarDates = () => {
    const dates = [];
    const today = new Date();
    let currentDate = new Date(today);
    
    for (let i = 0; i < 45; i++) {
      currentDate.setDate(today.getDate() + i);
      const dayOfWeek = currentDate.getDay();
      
      // Exclude weekends (0 = Sunday, 6 = Saturday)
      if (dayOfWeek !== 0 && dayOfWeek !== 6) {
        dates.push(new Date(currentDate));
      }
      
      if (dates.length >= 20) break; // Limit to 20 business days
    }
    
    return dates;
  };

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
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
            className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {!showCalendar && !showPayment && !isSuccess ? (
              <>
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                      <Euro className="w-5 h-5 text-primary-800" />
                    </div>
                    <div>
                      <h2 className="font-inter font-bold text-2xl text-neutral-900">
                        Problem Assessment & Solution Blueprint
                      </h2>
                      <p className="font-opensans text-neutral-600">
                        Comprehensive business analysis with detailed solution roadmap - €500
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
                      Section {currentSection} of 5
                    </span>
                    <div className="flex items-center space-x-1 text-primary-800">
                      <Clock className="w-4 h-4" />
                      <span className="font-opensans text-sm">10-15 min to complete</span>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div
                      className="bg-primary-800 h-2 rounded-full"
                      initial={{ width: '20%' }}
                      animate={{ width: `${(currentSection / 5) * 100}%` }}
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
                <form className="p-6">
                  {currentSection === 1 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="space-y-6"
                    >
                      <h3 className="font-inter font-semibold text-xl text-neutral-900 mb-4">
                        Company Overview
                      </h3>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block font-opensans font-medium text-neutral-700 mb-2">
                            Company Name *
                          </label>
                          <input
                            type="text"
                            name="companyName"
                            required
                            value={formData.companyName}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            placeholder="Your company name"
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
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block font-opensans font-medium text-neutral-700 mb-2">
                            Number of Employees *
                          </label>
                          <input
                            type="number"
                            name="employees"
                            required
                            value={formData.employees}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            placeholder="e.g., 25"
                          />
                        </div>
                        <div>
                          <label className="block font-opensans font-medium text-neutral-700 mb-2">
                            Annual Revenue Range *
                          </label>
                          <select
                            name="revenue"
                            required
                            value={formData.revenue}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          >
                            <option value="">Select revenue range</option>
                            {revenueOptions.map((option) => (
                              <option key={option} value={option}>{option}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block font-opensans font-medium text-neutral-700 mb-2">
                          Main Revenue Streams *
                        </label>
                        <textarea
                          name="revenueStreams"
                          required
                          rows={3}
                          value={formData.revenueStreams}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="Brief description of how your company makes money..."
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block font-opensans font-medium text-neutral-700 mb-2">
                            Your Role in the Company *
                          </label>
                          <input
                            type="text"
                            name="role"
                            required
                            value={formData.role}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            placeholder="e.g., CEO, Operations Manager"
                          />
                        </div>
                        <div>
                          <label className="block font-opensans font-medium text-neutral-700 mb-2">
                            Years in Business *
                          </label>
                          <input
                            type="number"
                            name="yearsInBusiness"
                            required
                            value={formData.yearsInBusiness}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            placeholder="e.g., 5"
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {currentSection === 2 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="space-y-6"
                    >
                      <h3 className="font-inter font-semibold text-xl text-neutral-900 mb-4">
                        Problem Deep-Dive
                      </h3>
                      
                      <div>
                        <label className="block font-opensans font-medium text-neutral-700 mb-2">
                          Describe your main business challenge *
                        </label>
                        <textarea
                          name="mainChallenge"
                          required
                          rows={4}
                          maxLength={300}
                          value={formData.mainChallenge}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="Detailed description of the problem you're facing..."
                        />
                        <div className="text-right text-sm text-neutral-500 mt-1">
                          {formData.mainChallenge.length}/300 characters
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block font-opensans font-medium text-neutral-700 mb-2">
                            How often does this problem occur? *
                          </label>
                          <select
                            name="problemFrequency"
                            required
                            value={formData.problemFrequency}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          >
                            <option value="">Select frequency</option>
                            {frequencyOptions.map((option) => (
                              <option key={option} value={option}>{option}</option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="block font-opensans font-medium text-neutral-700 mb-2">
                            What tools/software do you currently use? *
                          </label>
                          <input
                            type="text"
                            name="currentTools"
                            required
                            value={formData.currentTools}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            placeholder="List current tools and software"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block font-opensans font-medium text-neutral-700 mb-2">
                          Which team members are affected? *
                        </label>
                        <textarea
                          name="affectedTeams"
                          required
                          rows={3}
                          value={formData.affectedTeams}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="Describe roles and how they're impacted..."
                        />
                      </div>

                      <div>
                        <label className="block font-opensans font-medium text-neutral-700 mb-2">
                          Current process walkthrough *
                        </label>
                        <textarea
                          name="currentProcess"
                          required
                          rows={4}
                          value={formData.currentProcess}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="Step-by-step description of your current process..."
                        />
                      </div>

                      <div>
                        <label className="block font-opensans font-medium text-neutral-700 mb-2">
                          Where specifically does the process break down? *
                        </label>
                        <textarea
                          name="processBreakdown"
                          required
                          rows={3}
                          value={formData.processBreakdown}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="Identify the specific pain points..."
                        />
                      </div>

                      <div>
                        <label className="block font-opensans font-medium text-neutral-700 mb-2">
                          Previous solutions attempted and why they failed *
                        </label>
                        <textarea
                          name="previousSolutions"
                          required
                          rows={3}
                          value={formData.previousSolutions}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="What you've tried before and what went wrong..."
                        />
                      </div>
                    </motion.div>
                  )}

                  {currentSection === 3 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="space-y-6"
                    >
                      <h3 className="font-inter font-semibold text-xl text-neutral-900 mb-4">
                        Impact Analysis
                      </h3>
                      
                      <div>
                        <label className="block font-opensans font-medium text-neutral-700 mb-2">
                          Time wasted per week due to this problem *
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
                          Estimated cost impact *
                        </label>
                        <textarea
                          name="costImpact"
                          required
                          rows={3}
                          value={formData.costImpact}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="Lost revenue, overtime costs, inefficiency costs..."
                        />
                      </div>

                      <div>
                        <label className="block font-opensans font-medium text-neutral-700 mb-2">
                          What opportunities are you missing because of this? *
                        </label>
                        <textarea
                          name="missedOpportunities"
                          required
                          rows={3}
                          value={formData.missedOpportunities}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="Growth opportunities, new clients, market expansion..."
                        />
                      </div>

                      <div>
                        <label className="block font-opensans font-medium text-neutral-700 mb-2">
                          On a scale 1-10, how urgent is solving this? *
                        </label>
                        <div className="flex items-center space-x-4">
                          <span className="font-opensans text-sm text-neutral-600">Not urgent</span>
                          <input
                            type="range"
                            name="urgencyScale"
                            min="1"
                            max="10"
                            value={formData.urgencyScale}
                            onChange={handleInputChange}
                            className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                          />
                          <span className="font-opensans text-sm text-neutral-600">Very urgent</span>
                          <div className="w-12 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                            <span className="font-inter font-bold text-primary-800">{formData.urgencyScale}</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {currentSection === 4 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="space-y-6"
                    >
                      <h3 className="font-inter font-semibold text-xl text-neutral-900 mb-4">
                        Solution Requirements
                      </h3>
                      
                      <div>
                        <label className="block font-opensans font-medium text-neutral-700 mb-2">
                          In your ideal scenario, describe how this would work *
                        </label>
                        <textarea
                          name="idealScenario"
                          required
                          rows={4}
                          value={formData.idealScenario}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="Paint a picture of your perfect solution..."
                        />
                      </div>

                      <div>
                        <label className="block font-opensans font-medium text-neutral-700 mb-2">
                          Success metrics - what would indicate this is solved? *
                        </label>
                        <textarea
                          name="successMetrics"
                          required
                          rows={3}
                          value={formData.successMetrics}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="Specific, measurable outcomes..."
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block font-opensans font-medium text-neutral-700 mb-2">
                            Must-have features *
                          </label>
                          <textarea
                            name="mustHaveFeatures"
                            required
                            rows={4}
                            value={formData.mustHaveFeatures}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            placeholder="List in priority order..."
                          />
                        </div>
                        <div>
                          <label className="block font-opensans font-medium text-neutral-700 mb-2">
                            Nice-to-have features
                          </label>
                          <textarea
                            name="niceToHaveFeatures"
                            rows={4}
                            value={formData.niceToHaveFeatures}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            placeholder="Features that would be great but not essential..."
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block font-opensans font-medium text-neutral-700 mb-2">
                          Integration needs
                        </label>
                        <input
                          type="text"
                          name="integrationNeeds"
                          value={formData.integrationNeeds}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="Existing tools that need to connect..."
                        />
                      </div>

                      <div>
                        <label className="block font-opensans font-medium text-neutral-700 mb-2">
                          User requirements *
                        </label>
                        <textarea
                          name="userRequirements"
                          required
                          rows={3}
                          value={formData.userRequirements}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="Number of users, mobile needs, access levels..."
                        />
                      </div>
                    </motion.div>
                  )}

                  {currentSection === 5 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="space-y-6"
                    >
                      <h3 className="font-inter font-semibold text-xl text-neutral-900 mb-4">
                        Implementation
                      </h3>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block font-opensans font-medium text-neutral-700 mb-2">
                            Preferred timeline for solution *
                          </label>
                          <select
                            name="preferredTimeline"
                            required
                            value={formData.preferredTimeline}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          >
                            <option value="">Select timeline</option>
                            {timelineOptions.map((option) => (
                              <option key={option} value={option}>{option}</option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="block font-opensans font-medium text-neutral-700 mb-2">
                            Budget range allocated for this solution *
                          </label>
                          <select
                            name="budgetRange"
                            required
                            value={formData.budgetRange}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          >
                            <option value="">Select budget range</option>
                            {budgetOptions.map((option) => (
                              <option key={option} value={option}>{option}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block font-opensans font-medium text-neutral-700 mb-2">
                          Decision maker and approval process *
                        </label>
                        <textarea
                          name="decisionMaker"
                          required
                          rows={3}
                          value={formData.decisionMaker}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="Who makes the final decision? What's the approval process?"
                        />
                      </div>

                      <div>
                        <label className="block font-opensans font-medium text-neutral-700 mb-2">
                          When would you want to start implementation? *
                        </label>
                        <input
                          type="text"
                          name="startDate"
                          required
                          value={formData.startDate}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="e.g., Immediately, Next month, Q2 2025"
                        />
                      </div>

                      <div>
                        <label className="block font-opensans font-medium text-neutral-700 mb-2">
                          Any specific technical requirements or constraints?
                        </label>
                        <textarea
                          name="technicalRequirements"
                          rows={3}
                          value={formData.technicalRequirements}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="Security requirements, compliance needs, technical constraints..."
                        />
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

                    <motion.button
                      type="button"
                      onClick={handleNext}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="bg-primary-800 text-white px-8 py-3 rounded-lg font-opensans font-semibold hover:bg-primary-900 transition-colors flex items-center space-x-2"
                    >
                      <span>{currentSection === 5 ? 'Schedule Consultation' : 'Next Section'}</span>
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </div>
                </form>
              </>
            ) : showCalendar ? (
              /* Calendar Section */
              <div className="p-6">
                <div className="text-center mb-8">
                  <h3 className="font-inter font-bold text-2xl text-neutral-900 mb-2">
                    Schedule Your Consultation
                  </h3>
                  <p className="font-opensans text-neutral-600">
                    Select your preferred date and time for the 1-hour consultation call
                  </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Calendar */}
                  <div>
                    <h4 className="font-opensans font-semibold text-lg text-neutral-900 mb-4">
                      Available Dates
                    </h4>
                    <div className="grid grid-cols-4 gap-2">
                      {generateCalendarDates().map((date, index) => (
                        <button
                          key={index}
                          onClick={() => setSelectedDate(date.toISOString().split('T')[0])}
                          className={`p-3 rounded-lg border text-center transition-colors ${
                            selectedDate === date.toISOString().split('T')[0]
                              ? 'bg-primary-800 text-white border-primary-800'
                              : 'bg-white border-gray-300 hover:border-primary-500'
                          }`}
                        >
                          <div className="font-opensans text-xs text-neutral-600">
                            {date.toLocaleDateString('en-US', { weekday: 'short' })}
                          </div>
                          <div className="font-inter font-semibold">
                            {date.getDate()}
                          </div>
                          <div className="font-opensans text-xs">
                            {date.toLocaleDateString('en-US', { month: 'short' })}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Time Slots */}
                  <div>
                    <h4 className="font-opensans font-semibold text-lg text-neutral-900 mb-4">
                      Available Times
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {timeSlots.map((time) => (
                        <button
                          key={time}
                          onClick={() => setSelectedTime(time)}
                          disabled={!selectedDate}
                          className={`p-3 rounded-lg border text-center transition-colors ${
                            selectedTime === time
                              ? 'bg-primary-800 text-white border-primary-800'
                              : selectedDate
                              ? 'bg-white border-gray-300 hover:border-primary-500'
                              : 'bg-gray-100 border-gray-200 text-gray-400 cursor-not-allowed'
                          }`}
                        >
                          <div className="font-opensans font-medium">{time}</div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {selectedDate && selectedTime && (
                  <div className="mt-8 p-6 bg-primary-50 rounded-lg">
                    <div className="flex items-center space-x-3 mb-4">
                      <Calendar className="w-5 h-5 text-primary-800" />
                      <span className="font-opensans font-semibold text-primary-900">
                        Selected Consultation Time
                      </span>
                    </div>
                    <p className="font-opensans text-primary-800">
                      {new Date(selectedDate).toLocaleDateString('en-US', { 
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })} at {selectedTime}
                    </p>
                  </div>
                )}

                <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200">
                  <button
                    onClick={() => setShowCalendar(false)}
                    className="flex items-center space-x-2 px-6 py-2 rounded-lg font-opensans font-medium text-neutral-600 hover:bg-gray-100 transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back to Form</span>
                  </button>

                  <motion.button
                    onClick={handleCalendarSubmit}
                    disabled={!selectedDate || !selectedTime}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-primary-800 text-white px-8 py-3 rounded-lg font-opensans font-semibold hover:bg-primary-900 transition-colors flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span>Proceed to Payment</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            ) : showPayment ? (
              /* Payment Section */
              <div className="p-6">
                <div className="text-center mb-8">
                  <h3 className="font-inter font-bold text-2xl text-neutral-900 mb-2">
                    Complete Your Assessment Purchase
                  </h3>
                  <p className="font-opensans text-neutral-600">
                    Secure payment for your comprehensive business assessment
                  </p>
                </div>

                <div className="max-w-md mx-auto">
                  {/* Order Summary */}
                  <div className="bg-gray-50 rounded-lg p-6 mb-8">
                    <h4 className="font-opensans font-semibold text-lg text-neutral-900 mb-4">
                      Order Summary
                    </h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="font-opensans text-neutral-700">Assessment & Blueprint</span>
                        <span className="font-inter font-semibold">€500</span>
                      </div>
                      <div className="flex justify-between text-sm text-neutral-600">
                        <span>Consultation Date:</span>
                        <span>{new Date(selectedDate).toLocaleDateString()} at {selectedTime}</span>
                      </div>
                      <div className="border-t border-gray-200 pt-3">
                        <div className="flex justify-between font-inter font-bold text-lg">
                          <span>Total</span>
                          <span>€500</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Payment Form Placeholder */}
                  <div className="bg-white border border-gray-300 rounded-lg p-6 mb-6">
                    <div className="flex items-center space-x-2 mb-4">
                      <CreditCard className="w-5 h-5 text-primary-800" />
                      <span className="font-opensans font-semibold">Stripe Payment</span>
                    </div>
                    <p className="font-opensans text-neutral-600 text-sm mb-4">
                      Secure payment processing powered by Stripe
                    </p>
                    
                    {/* Placeholder for Stripe Elements */}
                    <div className="space-y-4">
                      <div className="h-12 bg-gray-100 rounded border-2 border-dashed border-gray-300 flex items-center justify-center">
                        <span className="font-opensans text-sm text-gray-500">Stripe Card Element</span>
                      </div>
                    </div>
                  </div>

                  {/* Trust Badges */}
                  <div className="flex items-center justify-center space-x-4 mb-6 text-sm text-neutral-500">
                    <div className="flex items-center space-x-1">
                      <Shield className="w-4 h-4" />
                      <span>Secure Payment</span>
                    </div>
                    <div>SSL Encrypted</div>
                    <div>256-bit Security</div>
                  </div>

                  <motion.button
                    onClick={handlePayment}
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-primary-800 text-white px-8 py-4 rounded-lg font-opensans font-semibold text-lg hover:bg-primary-900 transition-colors flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        <span>Processing Payment...</span>
                      </>
                    ) : (
                      <>
                        <CreditCard className="w-5 h-5" />
                        <span>Pay €500 - Complete Assessment</span>
                      </>
                    )}
                  </motion.button>
                </div>
              </div>
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
                  🎉 Assessment Booked Successfully!
                </h3>
                
                <div className="space-y-3 mb-8 text-left max-w-md mx-auto">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-success-600" />
                    <span className="font-opensans text-neutral-700">
                      Payment confirmed - €500 charged
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-success-600" />
                    <span className="font-opensans text-neutral-700">
                      Consultation scheduled for {new Date(selectedDate).toLocaleDateString()} at {selectedTime}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-success-600" />
                    <span className="font-opensans text-neutral-700">
                      Calendar invite sent to your email
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-success-600" />
                    <span className="font-opensans text-neutral-700">
                      Assessment preparation materials will arrive within 24 hours
                    </span>
                  </div>
                </div>

                <div className="bg-primary-50 rounded-lg p-4 mb-6">
                  <p className="font-opensans text-primary-800 text-sm">
                    <strong>What's Next:</strong> We'll analyze your responses and prepare a comprehensive 
                    assessment. During your consultation, we'll present our findings and solution blueprint.
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

export default AssessmentModal;