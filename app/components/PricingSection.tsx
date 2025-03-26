import React from 'react';

const features = {
  basic: [
    "Personalized skincare routine",
    "Progress tracking dashboard",
    "Basic product recommendations",
    "Community access"
  ],
  premium: [
    "Advanced AI recommendations",
    "Ingredient analysis & alerts",
    "Product interplay warnings",
    "Priority feature updates",
    "Detailed progress analytics",
    "Custom routine adjustments",
    "Premium community features",
    "Priority support"
  ]
};

interface PricingSectionProps {
  onGetStarted: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onGetStarted }) => {
  return (
    <section id="pricing" className="relative py-20 bg-gradient-to-b from-white via-[#FFF1E6] to-[#FFE4D6] overflow-x-hidden">
      {/* Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-[400px] w-[800px] h-[800px] rounded-full bg-gradient-to-r from-[#E8C5B0] to-[#FFD6C4] opacity-[0.15] blur-[140px]" />
        <div className="absolute bottom-1/4 -right-[300px] w-[600px] h-[600px] rounded-full bg-gradient-to-r from-[#FFE4D6] to-[#E8C5B0] opacity-[0.15] blur-[140px]" />
      </div>

      {/* Section Transition - Top */}
      <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-white via-white/50 to-transparent pointer-events-none" />
      
      {/* Section Transition - Bottom */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#FFE4D6] via-[#FFE4D6]/50 to-transparent pointer-events-none" />

      <div className="relative w-full max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="text-center mb-16 w-full">
          {/* Beta Tag */}
          <div className="inline-flex items-center gap-4 px-3 py-1.5 rounded-full bg-[#E8D5C8]/30 border border-[#E8C5B0] mb-8 max-w-full overflow-hidden">
            <span className="text-xs font-medium tracking-wide text-[#5C3D2E]">
              Early Access Pricing
            </span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#E68A6C] via-[#D4A092] to-[#B86B4C]">
              Choose Your Journey
            </span>
            <span className="block text-[#2C1810] mt-2">
              To Better Skin ✨
            </span>
          </h2>
          <p className="text-xl text-[#86604A] max-w-2xl mx-auto">
            Transform your skincare routine with personalized, science-backed recommendations and advanced tracking tools.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Basic Plan */}
          <div className="relative bg-white/95 backdrop-blur-sm rounded-[32px] p-8 border border-[#E8C5B0]/20 transition-transform duration-300 hover:translate-y-[-4px] shadow-[0_8px_32px_-4px_rgba(139,69,19,0.1)]">
            <div className="absolute -top-3 left-4">
              <span className="px-3 py-1 rounded-full bg-[#E8D5C8]/30 text-[#5C3D2E] text-xs font-medium border border-[#E8C5B0]">
                BASIC
              </span>
            </div>
            
            <h3 className="text-xl font-semibold text-[#2C1810] mb-2">Basic Plan</h3>
            <div className="flex items-baseline gap-2 mb-8">
              <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#E68A6C] to-[#B86B4C]">Free</span>
              <span className="text-[#86604A]">forever</span>
            </div>

            <ul className="space-y-4 mb-8">
              {features.basic.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded bg-[#E8D5C8]/30 border border-[#E8C5B0] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-[#E8855B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-[#5C3D2E]">{feature}</span>
                </li>
              ))}
            </ul>

            <button 
              onClick={onGetStarted}
              className="w-full py-3 px-6 rounded-xl bg-[#E8D5C8]/30 hover:bg-[#E8D5C8]/50 border border-[#E8C5B0] text-[#5C3D2E] font-medium transition-colors"
            >
              Get Started Free
            </button>
          </div>

          {/* Premium Plan */}
          <div className="relative bg-white/95 backdrop-blur-sm rounded-[32px] p-8 border border-[#E8C5B0]/20 transition-transform duration-300 hover:translate-y-[-4px] shadow-[0_8px_32px_-4px_rgba(139,69,19,0.1)]">
            <div className="absolute -top-3 left-4">
              <span className="px-3 py-1 rounded-full bg-gradient-to-r from-[#E68A6C] to-[#B86B4C] text-white text-xs font-medium">
                MOST POPULAR
              </span>
            </div>

            <h3 className="text-xl font-semibold text-[#2C1810] mb-2">Premium</h3>
            <div className="flex items-baseline gap-2 mb-8">
              <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#E68A6C] to-[#B86B4C]">$4.99</span>
              <span className="text-[#86604A]">/month</span>
            </div>

            <ul className="space-y-4 mb-8">
              {features.premium.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded bg-gradient-to-r from-[#E68A6C] to-[#B86B4C] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-[#5C3D2E]">{feature}</span>
                </li>
              ))}
            </ul>

            <button 
              onClick={onGetStarted}
              className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-[#E68A6C] to-[#B86B4C] hover:opacity-90 text-white font-medium transition-opacity"
            >
              Upgrade to Premium
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}; 