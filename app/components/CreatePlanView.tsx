'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

export default function CreatePlanView({ onClose }: { onClose: () => void }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    skinType: '',
    concerns: [] as string[],
    sensitivities: [] as string[],
    routineLevel: '',
    email: ''
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your API
    console.log('Form submitted:', formData);
    // Show success message and close
    onClose();
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
                    ? 'border-[#FF3BFF] bg-[#FF3BFF]/10'
                    : 'border-white/10 hover:border-white/20'
                } flex items-center gap-4`}
              >
                <div className="w-10 h-10 rounded-lg bg-[#1A1A1E] flex items-center justify-center">
                  {type.icon}
                </div>
                <div className="text-left">
                  <h4 className="text-sm font-medium">{type.name}</h4>
                  <p className="text-xs text-white/60">{type.description}</p>
                </div>
                <ChevronRightIcon className="w-4 h-4 ml-auto" />
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
                    ? 'border-[#FF3BFF] bg-[#FF3BFF]/10'
                    : 'border-white/10 hover:border-white/20'
                } flex flex-col items-center gap-2 text-center`}
              >
                <span className="text-2xl">{concern.icon}</span>
                <div>
                  <h4 className="text-sm font-medium">{concern.name}</h4>
                  <p className="text-xs text-white/60">{concern.description}</p>
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
                  if (sensitivity.id === 'none') {
                    setFormData(prev => ({ ...prev, sensitivities: ['none'] }));
                  } else {
                    setFormData(prev => ({
                      ...prev,
                      sensitivities: prev.sensitivities.includes(sensitivity.id)
                        ? prev.sensitivities.filter(id => id !== sensitivity.id)
                        : [...prev.sensitivities.filter(id => id !== 'none'), sensitivity.id]
                    }));
                  }
                }}
                className={`p-4 rounded-xl border ${
                  formData.sensitivities.includes(sensitivity.id)
                    ? 'border-[#FF3BFF] bg-[#FF3BFF]/10'
                    : 'border-white/10 hover:border-white/20'
                } flex flex-col items-center gap-2 text-center`}
              >
                <span className="text-2xl">{sensitivity.icon}</span>
                <div>
                  <h4 className="text-sm font-medium">{sensitivity.name}</h4>
                  <p className="text-xs text-white/60">{sensitivity.description}</p>
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
                    ? 'border-[#FF3BFF] bg-[#FF3BFF]/10'
                    : 'border-white/10 hover:border-white/20'
                } flex items-center gap-4`}
              >
                <span className="text-2xl">{level.icon}</span>
                <div className="text-left">
                  <h4 className="text-sm font-medium">{level.name}</h4>
                  <p className="text-xs text-white/60">{level.description}</p>
                </div>
                <ChevronRightIcon className="w-4 h-4 ml-auto" />
              </motion.button>
            ))}
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="p-4 rounded-xl bg-[#1A1A1E] border border-white/10">
              <h4 className="text-sm font-medium mb-2">What's included:</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-white/60">
                  <SparklesIcon className="w-4 h-4 text-[#FF3BFF]" />
                  Personalized morning & evening routines
                </li>
                <li className="flex items-center gap-2 text-sm text-white/60">
                  <BeakerIcon className="w-4 h-4 text-[#5C24FF]" />
                  Product recommendations based on your skin
                </li>
                <li className="flex items-center gap-2 text-sm text-white/60">
                  <CloudIcon className="w-4 h-4 text-[#FF3BFF]" />
                  Weather-based routine adjustments
                </li>
                <li className="flex items-center gap-2 text-sm text-white/60">
                  <FireIcon className="w-4 h-4 text-[#5C24FF]" />
                  Tips for your specific concerns
                </li>
              </ul>
            </div>
            
            <div>
              <input
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                className="w-full px-4 py-3 rounded-lg bg-[#1A1A1E] border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-[#FF3BFF]"
              />
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-[#0A0A0E]/90 backdrop-blur-sm z-50 flex items-center justify-center"
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-[600px] max-h-[90vh] bg-[#0A0A0E] rounded-2xl border border-white/10 overflow-hidden"
        >
          {/* Header */}
          <div className="flex-none p-4 border-b border-white/10">
            <div className="flex items-center justify-between">
              <button
                onClick={currentStep === 0 ? onClose : handleBack}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10"
              >
                {currentStep === 0 ? (
                  <XMarkIcon className="w-5 h-5" />
                ) : (
                  <ChevronRightIcon className="w-5 h-5 rotate-180" />
                )}
              </button>
              <div className="flex gap-1">
                {steps.map((_, i) => (
                  <div
                    key={i}
                    className={`w-8 h-1 rounded-full transition-colors ${
                      i === currentStep
                        ? 'bg-[#FF3BFF]'
                        : i < currentStep
                        ? 'bg-white/20'
                        : 'bg-white/5'
                    }`}
                  />
                ))}
              </div>
              <div className="w-8 h-8" /> {/* Spacer */}
            </div>
          </div>

          {/* Content */}
          <div className="overflow-y-auto" style={{ maxHeight: 'calc(90vh - 140px)' }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
                className="p-6"
              >
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">{steps[currentStep].emoji}</span>
                    <h2 className="text-xl font-medium">{steps[currentStep].title}</h2>
                  </div>
                  <p className="text-sm text-white/60">{steps[currentStep].description}</p>
                </div>

                <div className="space-y-4">
                  {renderStepContent()}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Footer */}
          {(currentStep === steps.length - 1 || currentStep === 1 || currentStep === 2) && (
            <div className="flex-none p-4 border-t border-white/10 bg-gradient-to-t from-[#0A0A0E] via-[#0A0A0E]/80 to-transparent">
              {currentStep === steps.length - 1 ? (
                <button
                  onClick={handleSubmit}
                  disabled={!formData.email}
                  className="w-full py-3 rounded-lg bg-gradient-to-r from-[#FF3BFF] to-[#5C24FF] text-white font-medium disabled:opacity-50"
                >
                  Get Your Free Plan →
                </button>
              ) : (
                <button
                  onClick={handleNext}
                  disabled={(currentStep === 1 && formData.concerns.length === 0) || 
                           (currentStep === 2 && formData.sensitivities.length === 0)}
                  className="w-full py-3 rounded-lg bg-gradient-to-r from-[#FF3BFF] to-[#5C24FF] text-white font-medium disabled:opacity-50"
                >
                  Continue →
                </button>
              )}
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
