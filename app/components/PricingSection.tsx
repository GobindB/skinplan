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

export const PricingSection = () => {
  return (
    <section id="pricing" className="relative py-20 bg-gradient-to-b from-[#13131A] via-[#0F0F13] to-[#0A0A0E] text-white">
      {/* Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[800px] h-[800px] rounded-full bg-gradient-to-r from-[#5C24FF] to-[#D94DFF] opacity-[0.08] blur-[140px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-[#FF3BFF] to-[#5C24FF] opacity-[0.08] blur-[140px]" />
      </div>

      {/* Section Transition - Top */}
      <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-[#13131A] via-[#13131A]/50 to-transparent pointer-events-none" />
      
      {/* Section Transition - Bottom */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#0A0A0E] via-[#0A0A0E]/50 to-transparent pointer-events-none" />

      <div className="relative max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          {/* Beta Tag */}
          <div className="inline-flex items-center gap-4 px-3 py-1.5 rounded-full bg-[#1A1A1E] border border-white/10 mb-8">
            <span className="text-xs font-medium tracking-wide text-white/80">
              Early Access Pricing
            </span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#FF3BFF] via-[#D94DFF] to-[#5C24FF]">
              Choose Your Journey
            </span>
            <span className="block text-white mt-2">
              To Better Skin ✨
            </span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Transform your skincare routine with personalized, science-backed recommendations and advanced tracking tools.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Basic Plan */}
          <div className="relative bg-[#1A1A1E] rounded-[32px] p-8 border border-white/10 transition-transform duration-300 hover:translate-y-[-4px]">
            <div className="absolute -top-3 left-4">
              <span className="px-3 py-1 rounded-full bg-[#242428] text-white/80 text-xs font-medium">
                BASIC
              </span>
            </div>
            
            <h3 className="text-xl font-semibold text-white mb-2">Basic Plan</h3>
            <div className="flex items-baseline gap-2 mb-8">
              <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF3BFF] to-[#5C24FF]">Free</span>
              <span className="text-white/60">forever</span>
            </div>

            <ul className="space-y-4 mb-8">
              {features.basic.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded bg-[#242428] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-[#FF3BFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-white/80">{feature}</span>
                </li>
              ))}
            </ul>

            <button className="w-full py-3 px-6 rounded-xl bg-[#242428] hover:bg-[#2A2A2E] border border-white/10 text-white font-medium transition-colors">
              Get Started Free
            </button>
          </div>

          {/* Premium Plan */}
          <div className="relative bg-[#1A1A1E] rounded-[32px] p-8 border border-white/10 transition-transform duration-300 hover:translate-y-[-4px]">
            <div className="absolute -top-3 left-4">
              <span className="px-3 py-1 rounded-full bg-gradient-to-r from-[#FF3BFF] to-[#5C24FF] text-white text-xs font-medium">
                MOST POPULAR
              </span>
            </div>

            <h3 className="text-xl font-semibold text-white mb-2">Premium</h3>
            <div className="flex items-baseline gap-2 mb-8">
              <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF3BFF] to-[#5C24FF]">$4.99</span>
              <span className="text-white/60">/month</span>
            </div>

            <ul className="space-y-4 mb-8">
              {features.premium.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded bg-gradient-to-r from-[#FF3BFF] to-[#5C24FF] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-white/80">{feature}</span>
                </li>
              ))}
            </ul>

            <button className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-[#FF3BFF] to-[#5C24FF] hover:opacity-90 text-white font-medium transition-opacity">
              Upgrade to Premium
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}; 