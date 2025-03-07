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
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <span className="inline-block px-3 sm:px-4 py-1 rounded-full bg-teal-50 text-teal-600 text-xs sm:text-sm font-medium mb-4">
            Pricing Plans
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
            Choose Your Skincare Journey ✨
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto px-4">
            Transform your skincare routine with personalized, science-backed recommendations and advanced tracking tools.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {/* Free Plan */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100 relative">
            <div className="absolute -top-3 left-4">
              <span className="bg-teal-100 text-teal-700 text-xs font-medium px-3 py-1 rounded-full">
                BASIC
              </span>
            </div>
            
            <h3 className="text-lg sm:text-xl font-semibold mb-2">Basic Plan</h3>
            <div className="flex items-baseline gap-1 mb-4 sm:mb-6">
              <span className="text-2xl sm:text-3xl font-bold">Free</span>
              <span className="text-sm sm:text-base text-slate-500">forever</span>
            </div>

            <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              {features.basic.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <svg
                    className="w-4 sm:w-5 h-4 sm:h-5 text-teal-500 mr-2 mt-0.5 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-sm sm:text-base text-slate-600">{feature}</span>
                </li>
              ))}
            </ul>

            <button className="w-full py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg bg-slate-100 text-slate-700 text-sm sm:text-base font-medium hover:bg-slate-200 transition-colors">
              Get Started Free
            </button>
          </div>

          {/* Premium Plan */}
          <div className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl p-6 sm:p-8 shadow-xl text-white relative overflow-visible">
            <div className="absolute -top-3 left-4 z-10">
              <span className="bg-gradient-to-r from-amber-100 to-amber-200 text-amber-800 text-xs font-semibold px-3 py-1 rounded-full shadow-sm border border-amber-300/50">
                MOST POPULAR
              </span>
            </div>

            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <svg className="w-full h-full" viewBox="0 0 80 80" fill="none">
                <path d="M14 16H9v-2h5V9h2v5h5v2h-5v5h-2v-5zm-4 9v-2h2v2H10zm8 0v-2h2v2h-2zm-8 4v-2h2v2H10zm8 0v-2h2v2h-2zm-8 4v-2h2v2H10zm8 0v-2h2v2h-2z" fill="currentColor"/>
              </svg>
            </div>

            <div className="relative">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Premium</h3>
              <div className="flex items-baseline gap-1 mb-4 sm:mb-6">
                <span className="text-2xl sm:text-3xl font-bold">$4.99</span>
                <span className="text-sm sm:text-base opacity-80">/month</span>
              </div>

              <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                {features.premium.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="w-4 sm:w-5 h-4 sm:h-5 text-teal-200 mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-sm sm:text-base opacity-90">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="w-full py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg bg-white text-teal-600 text-sm sm:text-base font-medium hover:bg-teal-50 transition-colors">
                Upgrade to Premium
              </button>
            </div>
          </div>
        </div>

        {/* Value Props */}
        <div className="mt-12 sm:mt-16 md:mt-20 grid md:grid-cols-3 gap-6 sm:gap-8">
          <div className="text-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-teal-100 text-teal-600 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h4 className="text-base sm:text-lg font-medium mb-2">Advanced Features</h4>
            <p className="text-sm sm:text-base text-slate-600">Get access to premium features like ingredient analysis and product interplay warnings.</p>
          </div>

          <div className="text-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-teal-100 text-teal-600 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 className="text-base sm:text-lg font-medium mb-2">Priority Support</h4>
            <p className="text-sm sm:text-base text-slate-600">Get faster responses and dedicated support for all your skincare questions.</p>
          </div>

          <div className="text-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-teal-100 text-teal-600 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            </div>
            <h4 className="text-base sm:text-lg font-medium mb-2">Premium Analytics</h4>
            <p className="text-sm sm:text-base text-slate-600">Track your progress with detailed analytics and personalized insights.</p>
          </div>
        </div>
      </div>
    </section>
  );
}; 