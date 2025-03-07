import React from 'react';

const features = {
  basic: [
    "Personalized skincare routine",
    "Basic progress tracking",
    "Product recommendations",
    "Reminders & notifications",
  ],
  premium: [
    "AI-powered routine optimization",
    "Advanced progress analytics",
    "Ingredient compatibility analysis",
    "Virtual shelf management",
    "Product interplay insights",
    "Skin concern tracking",
    "Priority customer support",
    "Early access to new features"
  ]
};

export const PricingSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Your Skin Journey, Simplified ✨
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Stop guessing what works for your skin. Get personalized, science-backed recommendations and track your progress.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Free Plan */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 relative">
            <div className="absolute -top-3 left-4">
              <span className="bg-teal-100 text-teal-700 text-xs font-medium px-3 py-1 rounded-full">
                EARLY ACCESS
              </span>
            </div>
            
            <h3 className="text-xl font-semibold mb-2">Basic</h3>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-3xl font-bold">Free</span>
              <span className="text-slate-500">forever</span>
            </div>

            <ul className="space-y-4 mb-8">
              {features.basic.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <svg
                    className="w-5 h-5 text-teal-500 mr-2 mt-0.5 flex-shrink-0"
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
                  <span className="text-slate-600">{feature}</span>
                </li>
              ))}
            </ul>

            <button className="w-full py-3 px-6 rounded-lg bg-slate-100 text-slate-700 font-medium hover:bg-slate-200 transition-colors">
              Join Waitlist
            </button>
          </div>

          {/* Premium Plan */}
          <div className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl p-8 shadow-xl text-white relative overflow-hidden">
            <div className="absolute -top-3 left-4">
              <span className="bg-white text-teal-600 text-xs font-medium px-3 py-1 rounded-full">
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
              <h3 className="text-xl font-semibold mb-2">Premium</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-3xl font-bold">$4.99</span>
                <span className="opacity-80">/month</span>
              </div>

              <ul className="space-y-4 mb-8">
                {features.premium.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-teal-200 mr-2 mt-0.5 flex-shrink-0"
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
                    <span className="opacity-90">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="w-full py-3 px-6 rounded-lg bg-white text-teal-600 font-medium hover:bg-teal-50 transition-colors">
                Join Premium Waitlist
              </button>
            </div>
          </div>
        </div>

        {/* Value Props */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h4 className="text-lg font-medium mb-2">Smart Product Management</h4>
            <p className="text-slate-600">Track your products, get expiration reminders, and manage your skincare inventory effortlessly.</p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h4 className="text-lg font-medium mb-2">Progress Analytics</h4>
            <p className="text-slate-600">Visualize your skin's improvement with detailed analytics and progress tracking.</p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <h4 className="text-lg font-medium mb-2">Ingredient Analysis</h4>
            <p className="text-slate-600">Understand product compatibility and get alerts for potential ingredient conflicts.</p>
          </div>
        </div>

        {/* FAQ Teaser */}
        <div className="mt-16 text-center">
          <p className="text-slate-600">
            Have questions? Check out our{' '}
            <a href="#faq" className="text-teal-600 hover:text-teal-700 font-medium">
              FAQ section
            </a>
            {' '}or{' '}
            <a href="#contact" className="text-teal-600 hover:text-teal-700 font-medium">
              contact our team
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}; 