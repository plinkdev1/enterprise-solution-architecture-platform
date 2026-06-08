import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Code, ArrowRight, ArrowLeft, CheckCircle, Clock, Upload, Save } from 'lucide-react';

interface DevelopmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DevelopmentModal: React.FC<DevelopmentModalProps> = ({ isOpen, onClose }) => {
  const [currentSection, setCurrentSection] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    // Section 1: Detailed Company Profile
    companyName: '',
    websiteUrl: '',
    industry: '',
    subSector: '',
    companyStructure: '',
    employeeCount: '',
    annualRevenue: '',
    growthTrajectory: '',
    revenueStreams: '',
    targetCustomers: '',
    businessGoals: '',
    techStack: '',
    
    // Section 2: Comprehensive Problem Analysis
    primaryChallenge: '',
    secondaryChallenges: '',
    problemFrequency: '',
    currentWorkflow: '',
    stakeholdersAffected: '',
    currentTools: '',
    dataFlow: '',
    painPoints: '',
    impactMetrics: '',
    
    // Section 3: Solution Requirements Matrix
    functionalRequirements: '',
    technicalRequirements: '',
    uxRequirements: '',
    performanceRequirements: '',
    scalabilityRequirements: '',
    complianceRequirements: '',
    integrationRequirements: '',
    reportingNeeds: '',
    
    // Section 4: Business Context
    competitionAnalysis: '',
    industryBestPractices: '',
    regulatoryConsiderations: '',
    budgetParameters: '',
    decisionMaking: '',
    implementationTimeline: '',
    successCriteria: '',
    riskTolerance: '',
    
    // Section 5: Technical Specifications
    currentInfrastructure: '',
    dataVolume: '',
    userAccessPatterns: '',
    mobileRequirements: '',
    backupNeeds: '',
    maintenancePreferences: '',
    
    // Section 6: Strategic Alignment
    strategicAlignment: '',
    transformationOutcomes: '',
    changeManagement: '',
    trainingRequirements: '',
    longTermVision: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Save to localStorage for progress persistence
    localStorage.setItem('developmentModalData', JSON.stringify({ ...formData, [name]: value }));
  };

  // Load saved progress on mount
  useEffect(() => {
    if (isOpen) {
      const savedData = localStorage.getItem('developmentModalData');
      if (savedData) {
        try {
          const parsedData = JSON.parse(savedData);
          setFormData(parsedData);
        } catch (error) {
          console.error('Error loading saved form data:', error);
        }
      }
    }
  }, [isOpen]);

  const handleNext = () => {
    if (currentSection < 6) {
      setCurrentSection(currentSection + 1);
    }
  };

  const handlePrev = () => {
    if (currentSection > 1) {
      setCurrentSection(currentSection - 1);
    }
  };

  const handleSaveProgress = () => {
    localStorage.setItem('developmentModalData', JSON.stringify(formData));
    // Show brief confirmation
    alert('Progress saved successfully!');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form processing
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    
    // Clear saved progress
    localStorage.removeItem('developmentModalData');
    
    // Auto-close after 5 seconds
    setTimeout(() => {
      resetModal();
    }, 5000);
  };

  const resetModal = () => {
    setCurrentSection(1);
    setIsSuccess(false);
    setFormData({
      companyName: '', websiteUrl: '', industry: '', subSector: '', companyStructure: '',
      employeeCount: '', annualRevenue: '', growthTrajectory: '', revenueStreams: '',
      targetCustomers: '', businessGoals: '', techStack: '', primaryChallenge: '',
      secondaryChallenges: '', problemFrequency: '', currentWorkflow: '', stakeholdersAffected: '',
      currentTools: '', dataFlow: '', painPoints: '', impactMetrics: '', functionalRequirements: '',
      technicalRequirements: '', uxRequirements: '', performanceRequirements: '', scalabilityRequirements: '',
      complianceRequirements: '', integrationRequirements: '', reportingNeeds: '', competitionAnalysis: '',
      industryBestPractices: '', regulatoryConsiderations: '', budgetParameters: '', decisionMaking: '',
      implementationTimeline: '', successCriteria: '', riskTolerance: '', currentInfrastructure: '',
      dataVolume: '', userAccessPatterns: '', mobileRequirements: '', backupNeeds: '',
      maintenancePreferences: '', strategicAlignment: '', transformationOutcomes: '', changeManagement: '',
      trainingRequirements: '', longTermVision: ''
    });
    onClose();
  };

  const sections = [
    { number: 1, title: 'Company Profile', icon: '🏢' },
    { number: 2, title: 'Problem Analysis', icon: '🎯' },
    { number: 3, title: 'Requirements Matrix', icon: '📋' },
    { number: 4, title: 'Business Context', icon: '💼' },
    { number: 5, title: 'Technical Specs', icon: '⚙️' },
    { number: 6, title: 'Strategic Alignment', icon: '🎯' }
  ];

  const revenueOptions = [
    'Under €100K',
    '€100K-€500K',
    '€500K-€2M',
    '€2M-€10M',
    '€10M+'
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
            {!isSuccess ? (
              <>
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                      <Code className="w-5 h-5 text-primary-800" />
                    </div>
                    <div>
                      <h2 className="font-inter font-bold text-2xl text-neutral-900">
                        Complete Solution Development - Comprehensive Analysis
                      </h2>
                      <p className="font-opensans text-neutral-600">
                        Full project specification for custom solution development
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={handleSaveProgress}
                      className="p-2 hover:bg-gray-100 rounded-lg transition-colors flex items-center space-x-1 text-primary-800"
                      title="Save Progress"
                    >
                      <Save className="w-4 h-4" />
                      <span className="text-sm font-opensans">Save</span>
                    </button>
                    <button
                      onClick={onClose}
                      className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      <X className="w-5 h-5 text-neutral-600" />
                    </button>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="px-6 py-4 bg-gray-50">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-opensans text-sm text-neutral-600">
                      Section {currentSection} of 6
                    </span>
                    <div className="flex items-center space-x-1 text-primary-800">
                      <Clock className="w-4 h-4" />
                      <span className="font-opensans text-sm">15-20 min to complete</span>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div
                      className="bg-primary-800 h-2 rounded-full"
                      initial={{ width: '16.67%' }}
                      animate={{ width: `${(currentSection / 6) * 100}%` }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                  <div className="flex justify-between mt-3">
                    {sections.map((section) => (
                      <div
                        key={section.number}
                        className={`flex items-center space-x-1 ${
                          section.number <= currentSection ? 'text-primary-800' : 'text-neutral-400'
                        }`}
                      >
                        <span className="text-sm">{section.icon}</span>
                        <span className="font-opensans text-xs hidden lg:block">{section.title}</span>
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
                      className="space-y-6"
                    >
                      <h3 className="font-inter font-semibold text-xl text-neutral-900 mb-4">
                        Detailed Company Profile
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
                            Website URL
                          </label>
                          <input
                            type="url"
                            name="websiteUrl"
                            value={formData.websiteUrl}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            placeholder="https://yourcompany.com"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block font-opensans font-medium text-neutral-700 mb-2">
                            Industry *
                          </label>
                          <input
                            type="text"
                            name="industry"
                            required
                            value={formData.industry}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            placeholder="e.g., E-commerce, Healthcare, Manufacturing"
                          />
                        </div>
                        <div>
                          <label className="block font-opensans font-medium text-neutral-700 mb-2">
                            Sub-sector
                          </label>
                          <input
                            type="text"
                            name="subSector"
                            value={formData.subSector}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            placeholder="Specific niche or specialization"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block font-opensans font-medium text-neutral-700 mb-2">
                          Company Structure (Locations, Departments) *
                        </label>
                        <textarea
                          name="companyStructure"
                          required
                          rows={3}
                          value={formData.companyStructure}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="Describe your company structure, locations, main departments..."
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block font-opensans font-medium text-neutral-700 mb-2">
                            Employee Count & Key Roles *
                          </label>
                          <textarea
                            name="employeeCount"
                            required
                            rows={3}
                            value={formData.employeeCount}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            placeholder="Number of employees and key roles/departments"
                          />
                        </div>
                        <div>
                          <label className="block font-opensans font-medium text-neutral-700 mb-2">
                            Annual Revenue Range *
                          </label>
                          <select
                            name="annualRevenue"
                            required
                            value={formData.annualRevenue}
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
                          Growth Trajectory
                        </label>
                        <input
                          type="text"
                          name="growthTrajectory"
                          value={formData.growthTrajectory}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="Growth rate, expansion plans, market trends"
                        />
                      </div>

                      <div>
                        <label className="block font-opensans font-medium text-neutral-700 mb-2">
                          Main Revenue Streams (Detailed Breakdown) *
                        </label>
                        <textarea
                          name="revenueStreams"
                          required
                          rows={4}
                          value={formData.revenueStreams}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="Describe your main revenue sources, pricing models, customer segments..."
                        />
                      </div>

                      <div>
                        <label className="block font-opensans font-medium text-neutral-700 mb-2">
                          Target Customers/Market *
                        </label>
                        <textarea
                          name="targetCustomers"
                          required
                          rows={3}
                          value={formData.targetCustomers}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="Who are your customers? Market segments, demographics, business types..."
                        />
                      </div>

                      <div>
                        <label className="block font-opensans font-medium text-neutral-700 mb-2">
                          Key Business Goals for Next 12 Months *
                        </label>
                        <textarea
                          name="businessGoals"
                          required
                          rows={3}
                          value={formData.businessGoals}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="Strategic objectives, growth targets, operational improvements..."
                        />
                      </div>

                      <div>
                        <label className="block font-opensans font-medium text-neutral-700 mb-2">
                          Current Technology Stack Overview
                        </label>
                        <textarea
                          name="techStack"
                          rows={3}
                          value={formData.techStack}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="Current software, platforms, tools, hosting, databases..."
                        />
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
                        Comprehensive Problem Analysis
                      </h3>
                      
                      <div>
                        <label className="block font-opensans font-medium text-neutral-700 mb-2">
                          Primary Business Challenge (Detailed Description) *
                        </label>
                        <textarea
                          name="primaryChallenge"
                          required
                          rows={6}
                          maxLength={500}
                          value={formData.primaryChallenge}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="Provide a comprehensive description of your main business challenge..."
                        />
                        <div className="text-right text-sm text-neutral-500 mt-1">
                          {formData.primaryChallenge.length}/500 characters
                        </div>
                      </div>

                      <div>
                        <label className="block font-opensans font-medium text-neutral-700 mb-2">
                          Secondary Challenges Related to This Problem
                        </label>
                        <textarea
                          name="secondaryChallenges"
                          rows={4}
                          value={formData.secondaryChallenges}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="Other related issues, downstream effects, connected problems..."
                        />
                      </div>

                      <div>
                        <label className="block font-opensans font-medium text-neutral-700 mb-2">
                          Problem Frequency and Patterns *
                        </label>
                        <textarea
                          name="problemFrequency"
                          required
                          rows={3}
                          value={formData.problemFrequency}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="How often does this occur? Are there patterns, triggers, seasonal variations?"
                        />
                      </div>

                      <div>
                        <label className="block font-opensans font-medium text-neutral-700 mb-2">
                          Complete Current Workflow Documentation *
                        </label>
                        <textarea
                          name="currentWorkflow"
                          required
                          rows={6}
                          value={formData.currentWorkflow}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="Step-by-step description of how things currently work, from start to finish..."
                        />
                      </div>

                      <div>
                        <label className="block font-opensans font-medium text-neutral-700 mb-2">
                          All Stakeholders Affected (Internal and External) *
                        </label>
                        <textarea
                          name="stakeholdersAffected"
                          required
                          rows={4}
                          value={formData.stakeholdersAffected}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="Who is impacted? Employees, customers, partners, suppliers..."
                        />
                      </div>

                      <div>
                        <label className="block font-opensans font-medium text-neutral-700 mb-2">
                          Current Tools, Systems, and Processes in Use *
                        </label>
                        <textarea
                          name="currentTools"
                          required
                          rows={4}
                          value={formData.currentTools}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="List all software, tools, manual processes currently used..."
                        />
                      </div>

                      <div>
                        <label className="block font-opensans font-medium text-neutral-700 mb-2">
                          Data Flow and Information Management *
                        </label>
                        <textarea
                          name="dataFlow"
                          required
                          rows={4}
                          value={formData.dataFlow}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="How does information flow through your organization? Data sources, storage, access..."
                        />
                      </div>

                      <div>
                        <label className="block font-opensans font-medium text-neutral-700 mb-2">
                          Specific Pain Points and Failure Modes *
                        </label>
                        <textarea
                          name="painPoints"
                          required
                          rows={4}
                          value={formData.painPoints}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="Where exactly do things break down? What causes the most frustration?"
                        />
                      </div>

                      <div>
                        <label className="block font-opensans font-medium text-neutral-700 mb-2">
                          Quantified Impact Metrics (Time, Money, Opportunities) *
                        </label>
                        <textarea
                          name="impactMetrics"
                          required
                          rows={4}
                          value={formData.impactMetrics}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="Specific numbers: hours wasted, revenue lost, opportunities missed..."
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
                        Solution Requirements Matrix
                      </h3>
                      
                      <div>
                        <label className="block font-opensans font-medium text-neutral-700 mb-2">
                          Functional Requirements (Detailed List) *
                        </label>
                        <textarea
                          name="functionalRequirements"
                          required
                          rows={5}
                          value={formData.functionalRequirements}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="What should the solution do? List all required features and capabilities..."
                        />
                      </div>

                      <div>
                        <label className="block font-opensans font-medium text-neutral-700 mb-2">
                          Technical Requirements (Platforms, Integrations, Security) *
                        </label>
                        <textarea
                          name="technicalRequirements"
                          required
                          rows={4}
                          value={formData.technicalRequirements}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="Technical constraints, platform preferences, security requirements..."
                        />
                      </div>

                      <div>
                        <label className="block font-opensans font-medium text-neutral-700 mb-2">
                          User Experience Requirements *
                        </label>
                        <textarea
                          name="uxRequirements"
                          required
                          rows={3}
                          value={formData.uxRequirements}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="Usability needs, user interface preferences, accessibility requirements..."
                        />
                      </div>

                      <div>
                        <label className="block font-opensans font-medium text-neutral-700 mb-2">
                          Performance Requirements (Speed, Capacity, Availability) *
                        </label>
                        <textarea
                          name="performanceRequirements"
                          required
                          rows={3}
                          value={formData.performanceRequirements}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="Response times, concurrent users, uptime requirements, data volumes..."
                        />
                      </div>

                      <div>
                        <label className="block font-opensans font-medium text-neutral-700 mb-2">
                          Scalability Requirements (Future Growth Plans) *
                        </label>
                        <textarea
                          name="scalabilityRequirements"
                          required
                          rows={3}
                          value={formData.scalabilityRequirements}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="Expected growth, future user volumes, expansion plans..."
                        />
                      </div>

                      <div>
                        <label className="block font-opensans font-medium text-neutral-700 mb-2">
                          Compliance and Security Requirements *
                        </label>
                        <textarea
                          name="complianceRequirements"
                          required
                          rows={3}
                          value={formData.complianceRequirements}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="GDPR, industry regulations, security standards, data protection..."
                        />
                      </div>

                      <div>
                        <label className="block font-opensans font-medium text-neutral-700 mb-2">
                          Integration Requirements (Detailed System Map) *
                        </label>
                        <textarea
                          name="integrationRequirements"
                          required
                          rows={4}
                          value={formData.integrationRequirements}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="Systems to integrate with, APIs, data synchronization needs..."
                        />
                      </div>

                      <div>
                        <label className="block font-opensans font-medium text-neutral-700 mb-2">
                          Reporting and Analytics Needs *
                        </label>
                        <textarea
                          name="reportingNeeds"
                          required
                          rows={3}
                          value={formData.reportingNeeds}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="What reports do you need? KPIs to track, dashboard requirements..."
                        />
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
                        Business Context
                      </h3>
                      
                      <div>
                        <label className="block font-opensans font-medium text-neutral-700 mb-2">
                          Competition Analysis (How Competitors Handle This) *
                        </label>
                        <textarea
                          name="competitionAnalysis"
                          required
                          rows={4}
                          value={formData.competitionAnalysis}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="How do your competitors solve similar problems? What advantages do they have?"
                        />
                      </div>

                      <div>
                        <label className="block font-opensans font-medium text-neutral-700 mb-2">
                          Industry Best Practices Awareness *
                        </label>
                        <textarea
                          name="industryBestPractices"
                          required
                          rows={3}
                          value={formData.industryBestPractices}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="What are the industry standards? Best practices you're aware of?"
                        />
                      </div>

                      <div>
                        <label className="block font-opensans font-medium text-neutral-700 mb-2">
                          Regulatory Considerations *
                        </label>
                        <textarea
                          name="regulatoryConsiderations"
                          required
                          rows={3}
                          value={formData.regulatoryConsiderations}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="Industry regulations, compliance requirements, legal considerations..."
                        />
                      </div>

                      <div>
                        <label className="block font-opensans font-medium text-neutral-700 mb-2">
                          Budget Parameters and ROI Expectations *
                        </label>
                        <textarea
                          name="budgetParameters"
                          required
                          rows={4}
                          value={formData.budgetParameters}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="Budget range, ROI expectations, payback period requirements..."
                        />
                      </div>

                      <div>
                        <label className="block font-opensans font-medium text-neutral-700 mb-2">
                          Decision-Making Process and Stakeholders *
                        </label>
                        <textarea
                          name="decisionMaking"
                          required
                          rows={3}
                          value={formData.decisionMaking}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="Who makes the final decision? Approval process, key stakeholders..."
                        />
                      </div>

                      <div>
                        <label className="block font-opensans font-medium text-neutral-700 mb-2">
                          Implementation Timeline and Constraints *
                        </label>
                        <textarea
                          name="implementationTimeline"
                          required
                          rows={3}
                          value={formData.implementationTimeline}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="Preferred timeline, deadlines, seasonal constraints, busy periods..."
                        />
                      </div>

                      <div>
                        <label className="block font-opensans font-medium text-neutral-700 mb-2">
                          Success Criteria and Measurement Methods *
                        </label>
                        <textarea
                          name="successCriteria"
                          required
                          rows={3}
                          value={formData.successCriteria}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="How will you measure success? KPIs, metrics, goals..."
                        />
                      </div>

                      <div>
                        <label className="block font-opensans font-medium text-neutral-700 mb-2">
                          Risk Tolerance and Mitigation Preferences *
                        </label>
                        <textarea
                          name="riskTolerance"
                          required
                          rows={3}
                          value={formData.riskTolerance}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="Risk appetite, backup plans, contingency preferences..."
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
                        Technical Specifications
                      </h3>
                      
                      <div>
                        <label className="block font-opensans font-medium text-neutral-700 mb-2">
                          Current Infrastructure and Hosting *
                        </label>
                        <textarea
                          name="currentInfrastructure"
                          required
                          rows={4}
                          value={formData.currentInfrastructure}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="Current hosting, servers, cloud platforms, IT infrastructure..."
                        />
                      </div>

                      <div>
                        <label className="block font-opensans font-medium text-neutral-700 mb-2">
                          Data Volume and Complexity *
                        </label>
                        <textarea
                          name="dataVolume"
                          required
                          rows={3}
                          value={formData.dataVolume}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="Amount of data, types of data, complexity, growth rate..."
                        />
                      </div>

                      <div>
                        <label className="block font-opensans font-medium text-neutral-700 mb-2">
                          User Access Patterns and Locations *
                        </label>
                        <textarea
                          name="userAccessPatterns"
                          required
                          rows={3}
                          value={formData.userAccessPatterns}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="When and where do users access the system? Peak times, geographic distribution..."
                        />
                      </div>

                      <div>
                        <label className="block font-opensans font-medium text-neutral-700 mb-2">
                          Mobile and Remote Work Requirements *
                        </label>
                        <textarea
                          name="mobileRequirements"
                          required
                          rows={3}
                          value={formData.mobileRequirements}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="Mobile app needs, remote access requirements, offline capabilities..."
                        />
                      </div>

                      <div>
                        <label className="block font-opensans font-medium text-neutral-700 mb-2">
                          Backup and Disaster Recovery Needs *
                        </label>
                        <textarea
                          name="backupNeeds"
                          required
                          rows={3}
                          value={formData.backupNeeds}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="Backup frequency, recovery time objectives, disaster recovery plans..."
                        />
                      </div>

                      <div>
                        <label className="block font-opensans font-medium text-neutral-700 mb-2">
                          Maintenance and Support Preferences *
                        </label>
                        <textarea
                          name="maintenancePreferences"
                          required
                          rows={3}
                          value={formData.maintenancePreferences}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="Preferred maintenance windows, support level needs, update preferences..."
                        />
                      </div>

                      <div className="bg-primary-50 rounded-lg p-4">
                        <div className="flex items-start space-x-3">
                          <Upload className="w-5 h-5 text-primary-800 mt-0.5" />
                          <div>
                            <h4 className="font-opensans font-semibold text-primary-900 mb-1">
                              Supporting Documents
                            </h4>
                            <p className="font-opensans text-sm text-primary-800 mb-3">
                              Upload any relevant technical documentation, system diagrams, or requirements documents.
                            </p>
                            <input
                              type="file"
                              multiple
                              accept=".pdf,.doc,.docx,.txt,.png,.jpg"
                              className="text-sm text-primary-800 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-primary-100 file:text-primary-800 hover:file:bg-primary-200"
                            />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {currentSection === 6 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="space-y-6"
                    >
                      <h3 className="font-inter font-semibold text-xl text-neutral-900 mb-4">
                        Strategic Alignment
                      </h3>
                      
                      <div>
                        <label className="block font-opensans font-medium text-neutral-700 mb-2">
                          How This Solution Fits Broader Business Strategy *
                        </label>
                        <textarea
                          name="strategicAlignment"
                          required
                          rows={4}
                          value={formData.strategicAlignment}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="How does this solution support your overall business strategy and goals?"
                        />
                      </div>

                      <div>
                        <label className="block font-opensans font-medium text-neutral-700 mb-2">
                          Expected Business Transformation Outcomes *
                        </label>
                        <textarea
                          name="transformationOutcomes"
                          required
                          rows={4}
                          value={formData.transformationOutcomes}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="What changes do you expect in your business operations, culture, capabilities?"
                        />
                      </div>

                      <div>
                        <label className="block font-opensans font-medium text-neutral-700 mb-2">
                          Change Management Considerations *
                        </label>
                        <textarea
                          name="changeManagement"
                          required
                          rows={3}
                          value={formData.changeManagement}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="How will you manage the transition? Resistance to change, communication plans..."
                        />
                      </div>

                      <div>
                        <label className="block font-opensans font-medium text-neutral-700 mb-2">
                          Training and Adoption Requirements *
                        </label>
                        <textarea
                          name="trainingRequirements"
                          required
                          rows={3}
                          value={formData.trainingRequirements}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="Training needs, user adoption strategies, support requirements..."
                        />
                      </div>

                      <div>
                        <label className="block font-opensans font-medium text-neutral-700 mb-2">
                          Long-term Vision for This Solution Area *
                        </label>
                        <textarea
                          name="longTermVision"
                          required
                          rows={4}
                          value={formData.longTermVision}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="Where do you see this solution in 3-5 years? Future enhancements, evolution..."
                        />
                      </div>

                      <div className="bg-success-50 rounded-lg p-6 mt-8">
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="w-6 h-6 text-success-600 mt-0.5" />
                          <div>
                            <h4 className="font-opensans font-semibold text-success-900 mb-2">
                              Ready to Submit Your Comprehensive Analysis
                            </h4>
                            <p className="font-opensans text-sm text-success-800 mb-4">
                              You've provided detailed information across all critical areas. Our solution architects will use this to create a comprehensive proposal tailored to your specific needs.
                            </p>
                            <div className="space-y-2 text-sm text-success-700">
                              <div className="flex items-center space-x-2">
                                <CheckCircle className="w-4 h-4" />
                                <span>Detailed technical analysis and architecture recommendations</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <CheckCircle className="w-4 h-4" />
                                <span>Custom development timeline and milestone plan</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <CheckCircle className="w-4 h-4" />
                                <span>Accurate cost estimation and ROI projections</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <CheckCircle className="w-4 h-4" />
                                <span>Risk assessment and mitigation strategies</span>
                              </div>
                            </div>
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

                    {currentSection < 6 ? (
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
                        <span>{isSubmitting ? 'Submitting Analysis...' : 'Submit Comprehensive Analysis'}</span>
                        {!isSubmitting && <Code className="w-4 h-4" />}
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
                
                <h3 className="font-inter font-bold text-3xl text-neutral-900 mb-6">
                  Comprehensive Analysis Submitted Successfully!
                </h3>
                
                <div className="bg-primary-50 rounded-lg p-6 mb-8 max-w-2xl mx-auto">
                  <p className="font-opensans text-primary-800 text-lg leading-relaxed">
                    Thank you for providing comprehensive project details. Our solution architects will review your requirements 
                    and contact you within <strong>48 hours</strong> with a detailed proposal and timeline.
                  </p>
                </div>

                <div className="space-y-3 mb-8 text-left max-w-md mx-auto">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-success-600" />
                    <span className="font-opensans text-neutral-700">
                      Technical architecture analysis and recommendations
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-success-600" />
                    <span className="font-opensans text-neutral-700">
                      Custom development timeline and milestone plan
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-success-600" />
                    <span className="font-opensans text-neutral-700">
                      Accurate cost estimation and ROI projections
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-success-600" />
                    <span className="font-opensans text-neutral-700">
                      Risk assessment and mitigation strategies
                    </span>
                  </div>
                </div>

                <div className="bg-neutral-50 rounded-lg p-4 mb-6">
                  <p className="font-opensans text-neutral-600 text-sm">
                    <strong>Next Steps:</strong> Our team will analyze your comprehensive requirements and prepare a detailed 
                    technical proposal. You'll receive a follow-up email within 48 hours to schedule a strategy session.
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

export default DevelopmentModal;