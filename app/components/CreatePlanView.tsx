import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeftIcon, DocumentCheckIcon, SparklesIcon, LightBulbIcon, EnvelopeIcon, CheckIcon } from '@heroicons/react/24/outline';

interface CreatePlanViewProps {
  onClose: () => void;
}

const CreatePlanView: React.FC<CreatePlanViewProps> = ({ onClose }) => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [selectedConcerns, setSelectedConcerns] = useState<string[]>([]);
  const [skinType, setSkinType] = useState<string>('');
  const [sensitivities, setSensitivities] = useState<string[]>([]);
  const [currentProducts, setCurrentProducts] = useState<string[]>([]);
  const [ethnicity, setEthnicity] = useState<string>('');

  const handleSubmit = async () => {
    try {
      const response = await fetch("/api/submit-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          skinType,
          ethnicity,
          selectedConcerns,
          sensitivities,
          currentProducts,
          source: 'Custom Plan Form'
        }),
      });

      const data = await response.json();
      if (data.success) {
        setStep(7); // Move to success step
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to submit. Please check your connection.");
    }
  };

  return (
    <div className="w-full h-full bg-[#0A0A0E] flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-white/10">
        <button
          onClick={onClose}
          className="p-2 rounded-lg hover:bg-white/5 transition-colors"
        >
          <ArrowLeftIcon className="w-5 h-5 text-white" />
        </button>
        <div className="flex items-center gap-2">
          <span className="text-sm text-white/60">Step {step} of 6</span>
          <div className="w-1 h-1 rounded-full bg-[#FF3BFF]" />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-4">
        {step === 1 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <h2 className="text-xl font-medium">What's your skin type?</h2>
            <div className="grid grid-cols-2 gap-3">
              {['Dry', 'Oily', 'Combination', 'Normal'].map((type) => (
                <button
                  key={type}
                  onClick={() => {
                    setSkinType(type);
                    setStep(2);
                  }}
                  className={`p-4 rounded-xl border ${
                    skinType === type
                      ? 'border-[#FF3BFF] bg-[#FF3BFF]/10'
                      : 'border-white/10 hover:border-white/20'
                  } transition-colors`}
                >
                  <span className="text-sm font-medium">{type}</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <h2 className="text-xl font-medium">Select your main skin concerns</h2>
            <div className="grid grid-cols-2 gap-3">
              {[
                'Acne',
                'Dark spots',
                'Fine lines',
                'Dryness',
                'Redness',
                'Large pores',
                'Dullness',
                'Uneven texture'
              ].map((concern) => (
                <button
                  key={concern}
                  onClick={() => {
                    setSelectedConcerns((prev) =>
                      prev.includes(concern)
                        ? prev.filter((c) => c !== concern)
                        : [...prev, concern]
                    );
                  }}
                  className={`p-4 rounded-xl border ${
                    selectedConcerns.includes(concern)
                      ? 'border-[#FF3BFF] bg-[#FF3BFF]/10'
                      : 'border-white/10 hover:border-white/20'
                  } transition-colors`}
                >
                  <span className="text-sm font-medium">{concern}</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {step === 6 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <h2 className="text-xl font-medium">Last step!</h2>
              <p className="text-sm text-white/60">Enter your email to get your personalized plan.</p>
            </div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/40"
            />
          </motion.div>
        )}

        {step === 7 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6 text-center"
          >
            <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-[#FF3BFF] to-[#5C24FF] flex items-center justify-center">
              <CheckIcon className="w-8 h-8 text-white" />
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-medium">Your 7-Day Journey Begins!</h2>
              <p className="text-white/60">
                We'll email you your personalized skincare plan within the next 24 hours.
              </p>
            </div>
          </motion.div>
        )}
      </div>

      {/* Footer */}
      {step !== 7 && (
        <div className="p-4 border-t border-white/10">
          {step === 6 ? (
            <button
              onClick={handleSubmit}
              disabled={!email}
              className="w-full py-3 rounded-lg bg-gradient-to-r from-[#FF3BFF] to-[#5C24FF] text-white font-medium disabled:opacity-50"
            >
              Get Your Plan
            </button>
          ) : (
            <button
              onClick={() => setStep((prev) => prev + 1)}
              disabled={step === 2 && selectedConcerns.length === 0}
              className="w-full py-3 rounded-lg bg-gradient-to-r from-[#FF3BFF] to-[#5C24FF] text-white font-medium disabled:opacity-50"
            >
              Continue
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default CreatePlanView; 