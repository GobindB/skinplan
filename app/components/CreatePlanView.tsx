'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { isValidEmail, getEmailValidationError } from '../utils/validation';
import { LegalLinks } from './LegalLinks';
import { 
  XMarkIcon,
  ChevronRightIcon,
  SparklesIcon,
  BeakerIcon,
  SunIcon,
  MoonIcon,
  HeartIcon,
  FaceSmileIcon,
  CloudIcon,
  FireIcon
} from '@heroicons/react/24/outline';

interface FormStep {
  title: string;
  description: string;
  emoji: string;
}

const steps: FormStep[] = [
  {
    title: "Let's talk about your skin type",
    description: "Understanding your skin type helps us recommend the right products and routines",
    emoji: "✨"
  },
  {
    title: "What are your main skin concerns?",
    description: "Select all that apply - this helps us focus on what matters most to you",
    emoji: "🔍"
  },
  {
    title: "Any skin sensitivities?",
    description: "We'll make sure to avoid ingredients that might irritate your skin",
    emoji: "🌱"
  },
  {
    title: "What's your current routine level?",
    description: "We'll tailor the complexity of your routine accordingly",
    emoji: "⭐"
  },
  {
    title: "Almost there!",
    description: "Where should we send your personalized plan?",
    emoji: "📧"
  }
];

const skinTypes = [
  { id: 'oily', name: 'Oily', icon: <BeakerIcon className="w-5 h-5" />, description: 'Shiny, especially in T-zone' },
  { id: 'dry', name: 'Dry', icon: <SunIcon className="w-5 h-5" />, description: 'Feels tight and flaky' },
  { id: 'combination', name: 'Combination', icon: <MoonIcon className="w-5 h-5" />, description: 'Oily T-zone, dry cheeks' },
  { id: 'sensitive', name: 'Sensitive', icon: <HeartIcon className="w-5 h-5" />, description: 'Easily irritated' },
  { id: 'normal', name: 'Normal', icon: <FaceSmileIcon className="w-5 h-5" />, description: 'Generally balanced' }
];

const skinConcerns = [
  { id: 'acne', name: 'Acne', icon: '🔍', description: 'Breakouts and blemishes' },
  { id: 'aging', name: 'Anti-aging', icon: '⏳', description: 'Fine lines and wrinkles' },
  { id: 'pigmentation', name: 'Pigmentation', icon: '🎨', description: 'Dark spots and uneven tone' },
  { id: 'texture', name: 'Texture', icon: '✨', description: 'Rough or uneven texture' },
  { id: 'redness', name: 'Redness', icon: '🌹', description: 'Redness and inflammation' },
  { id: 'pores', name: 'Large Pores', icon: '🔎', description: 'Visible or enlarged pores' }
];

const sensitivities = [
  { id: 'fragrance', name: 'Fragrance', icon: '🌸', description: 'Sensitive to artificial fragrances' },
  { id: 'alcohol', name: 'Alcohol', icon: '🚫', description: 'Reacts to alcohol in products' },
  { id: 'essential-oils', name: 'Essential Oils', icon: '🌿', description: 'Sensitive to essential oils' },
  { id: 'none', name: 'No Sensitivities', icon: '✅', description: 'No known sensitivities' }
];

const routineLevels = [
  { id: 'beginner', name: 'Beginner', icon: '🌱', description: 'New to skincare (3-4 steps)' },
  { id: 'intermediate', name: 'Intermediate', icon: '🌿', description: 'Some experience (5-7 steps)' },
  { id: 'advanced', name: 'Advanced', icon: '🌳', description: 'Experienced (8+ steps)' }
];

export default function CreatePlanView({ onClose, initialEmail = '' }: { onClose: () => void; initialEmail?: string }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    skinType: '',
    concerns: [] as string[],
    sensitivities: [] as string[],
    routineLevel: '',
    email: initialEmail
  });
  const [errorMessage, setErrorMessage] = useState('');

  // Handle click outside
  const modalRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  useEffect(() => {
    if (currentStep === steps.length - 1 && initialEmail) {
      const syntheticEvent = {
        preventDefault: () => {},
      } as React.FormEvent;
      handleSubmit(syntheticEvent);
    }
  }, [currentStep]);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const validationError = getEmailValidationError(formData.email);
    if (validationError) {
      setErrorMessage(validationError);
      return;
    }

    // Format the selections as a readable string
    const notes = [
      `Skin Type: ${skinTypes.find(t => t.id === formData.skinType)?.name || formData.skinType}`,
      `Concerns: ${formData.concerns.map(c => skinConcerns.find(sc => sc.id === c)?.name).join(', ')}`,
      `Sensitivities: ${formData.sensitivities.map(s => sensitivities.find(ss => ss.id === s)?.name).join(', ')}`,
      `Routine Level: ${routineLevels.find(r => r.id === formData.routineLevel)?.name || formData.routineLevel}`
    ].join('\n');

    try {
      const response = await fetch('/api/submit-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          notes: notes
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      // Show success message and close
      onClose();
    } catch (error) {
      console.error('Error submitting form:', error);
      setErrorMessage(error instanceof Error ? error.message : 'An unknown error occurred');
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, email: e.target.value }));
    if (errorMessage) {
      setErrorMessage('');
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="grid grid-cols-1 gap-3">
            {skinTypes.map((type) => (
              <motion.button
                key={type.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  setFormData(prev => ({ ...prev, skinType: type.id }));
                  handleNext();
                }}
                className={`p-4 rounded-xl border ${
                  formData.skinType === type.id
                    ? 'border-[#E8855B] bg-[#E8D5C8]/30'
                    : 'border-[#E8C5B0]/20 hover:border-[#E8C5B0]'
                } flex items-center gap-4`}
              >
                <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center text-[#5C3D2E]">
                  {type.icon}
                </div>
                <div className="text-left">
                  <h4 className="text-sm font-medium text-[#2C1810]">{type.name}</h4>
                  <p className="text-xs text-[#86604A]">{type.description}</p>
                </div>
                <ChevronRightIcon className="w-4 h-4 ml-auto text-[#5C3D2E]" />
              </motion.button>
            ))}
          </div>
        );

      case 1:
        return (
          <div className="grid grid-cols-2 gap-3">
            {skinConcerns.map((concern) => (
              <motion.button
                key={concern.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  setFormData(prev => ({
                    ...prev,
                    concerns: prev.concerns.includes(concern.id)
                      ? prev.concerns.filter(id => id !== concern.id)
                      : [...prev.concerns, concern.id]
                  }));
                }}
                className={`p-4 rounded-xl border ${
                  formData.concerns.includes(concern.id)
                    ? 'border-[#E8855B] bg-[#E8D5C8]/30'
                    : 'border-[#E8C5B0]/20 hover:border-[#E8C5B0]'
                } flex flex-col items-center gap-2 text-center`}
              >
                <span className="text-2xl">{concern.icon}</span>
                <div>
                  <h4 className="text-sm font-medium text-[#2C1810]">{concern.name}</h4>
                  <p className="text-xs text-[#86604A]">{concern.description}</p>
                </div>
              </motion.button>
            ))}
          </div>
        );

      case 2:
        return (
          <div className="grid grid-cols-2 gap-3">
            {sensitivities.map((sensitivity) => (
              <motion.button
                key={sensitivity.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  setFormData(prev => ({
                    ...prev,
                    sensitivities: prev.sensitivities.includes(sensitivity.id)
                      ? prev.sensitivities.filter(id => id !== sensitivity.id)
                      : [...prev.sensitivities, sensitivity.id]
                  }));
                }}
                className={`p-4 rounded-xl border ${
                  formData.sensitivities.includes(sensitivity.id)
                    ? 'border-[#E8855B] bg-[#E8D5C8]/30'
                    : 'border-[#E8C5B0]/20 hover:border-[#E8C5B0]'
                } flex flex-col items-center gap-2 text-center`}
              >
                <span className="text-2xl">{sensitivity.icon}</span>
                <div>
                  <h4 className="text-sm font-medium text-[#2C1810]">{sensitivity.name}</h4>
                  <p className="text-xs text-[#86604A]">{sensitivity.description}</p>
                </div>
              </motion.button>
            ))}
          </div>
        );

      case 3:
        return (
          <div className="grid grid-cols-1 gap-3">
            {routineLevels.map((level) => (
              <motion.button
                key={level.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  setFormData(prev => ({ ...prev, routineLevel: level.id }));
                  handleNext();
                }}
                className={`p-4 rounded-xl border ${
                  formData.routineLevel === level.id
                    ? 'border-[#E8855B] bg-[#E8D5C8]/30'
                    : 'border-[#E8C5B0]/20 hover:border-[#E8C5B0]'
                } flex items-center gap-4`}
              >
                <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center text-[#5C3D2E]">
                  {level.icon}
                </div>
                <div className="text-left">
                  <h4 className="text-sm font-medium text-[#2C1810]">{level.name}</h4>
                  <p className="text-xs text-[#86604A]">{level.description}</p>
                </div>
                <ChevronRightIcon className="w-4 h-4 ml-auto text-[#5C3D2E]" />
              </motion.button>
            ))}
          </div>
        );

      case 4:
        return (
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[#5C3D2E] mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleEmailChange}
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-xl bg-white border border-[#E8C5B0]/20 text-[#2C1810] placeholder-[#86604A]/40 focus:outline-none focus:ring-2 focus:ring-[#E8855B] focus:border-transparent transition-colors"
                required
              />
              {errorMessage && (
                <p className="mt-2 text-sm text-red-500">{errorMessage}</p>
              )}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <motion.div
        ref={modalRef}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="relative w-full max-w-2xl bg-[#FFF1E6] rounded-2xl shadow-xl overflow-hidden"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg hover:bg-[#E8D5C8]/30 transition-colors"
        >
          <XMarkIcon className="w-5 h-5 text-[#5C3D2E]" />
        </button>

        {/* Header */}
        <div className="p-6 border-b border-[#E8C5B0]/20">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-[#E68A6C] to-[#B86B4C] flex items-center justify-center">
              <SparklesIcon className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-xl font-semibold text-[#2C1810]">Create Your Plan</h2>
          </div>
          <p className="text-[#86604A]">
            {steps[currentStep].description}
          </p>
        </div>

        {/* Progress Bar */}
        <div className="h-1 bg-[#E8D5C8]/30">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
            className="h-full bg-gradient-to-r from-[#E68A6C] to-[#B86B4C]"
          />
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="mb-6">
            <h3 className="text-lg font-medium text-[#2C1810] mb-2">
              {steps[currentStep].title}
            </h3>
            <p className="text-[#86604A]">
              {steps[currentStep].description}
            </p>
          </div>

          {renderStepContent()}

          {/* Navigation */}
          <div className="mt-8 flex justify-between items-center">
            {currentStep > 0 && (
              <button
                onClick={handleBack}
                className="px-4 py-2 text-[#5C3D2E] hover:text-[#2C1810] transition-colors"
              >
                Back
              </button>
            )}
            {currentStep < steps.length - 1 ? (
              <button
                onClick={handleNext}
                className="ml-auto px-6 py-2 rounded-xl bg-gradient-to-r from-[#E68A6C] to-[#B86B4C] text-white font-medium hover:opacity-90 transition-opacity shadow-lg shadow-[#E8855B]/25"
              >
                Next
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                className="ml-auto px-6 py-2 rounded-xl bg-gradient-to-r from-[#E68A6C] to-[#B86B4C] text-white font-medium hover:opacity-90 transition-opacity shadow-lg shadow-[#E8855B]/25"
              >
                Create Plan
              </button>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 bg-[#E8D5C8]/30 border-t border-[#E8C5B0]/20">
          <LegalLinks />
        </div>
      </motion.div>
    </div>
  );
}
