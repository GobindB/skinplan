import React from 'react';

export const HowItWorks = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Video Demo Section */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 rounded-full bg-amber-50 text-amber-600 text-sm font-medium mb-4">
              Watch How It Works
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Your Skincare Journey Made Simple
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              See how SkinPlan helps you build and maintain your perfect routine
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative w-full bg-slate-900 rounded-2xl shadow-xl overflow-hidden">
              <div style={{ paddingBottom: '56.25%' }} className="relative">
                <video
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                  poster="/video-poster.jpg"
                >
                  <source src="/demo.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent pointer-events-none" />
                
                {/* Feature highlights */}
                <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-4 px-4">
                  <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-slate-900">
                    ✨ Smart Analysis
                  </div>
                  <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-slate-900">
                    📱 Easy to Use
                  </div>
                  <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-slate-900">
                    📈 Track Progress
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Features Section */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-teal-50 text-teal-600 text-sm font-medium mb-4">
            The SkinPlan Difference
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Your Personal Skincare Assistant
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Stop guessing what products work together. Let our AI help you build the perfect routine.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          <div className="bg-slate-50 rounded-xl p-8 text-center transition-transform hover:scale-105 duration-300">
            <div className="w-16 h-16 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4">Smart Product Analysis</h3>
            <p className="text-slate-600">
              Scan your products and get instant insights. We'll analyze ingredients, check for conflicts, and help you build a safe routine that works.
            </p>
          </div>

          <div className="bg-slate-50 rounded-xl p-8 text-center transition-transform hover:scale-105 duration-300">
            <div className="w-16 h-16 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4">Personalized Routine</h3>
            <p className="text-slate-600">
              Get a custom morning and night routine that works for your skin. We'll tell you what to use, when to use it, and what products work best together.
            </p>
          </div>

          <div className="bg-slate-50 rounded-xl p-8 text-center transition-transform hover:scale-105 duration-300">
            <div className="w-16 h-16 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4">Track Your Progress</h3>
            <p className="text-slate-600">
              See real results with photo tracking, skin health metrics, and detailed progress reports. Know exactly what's working for your skin.
            </p>
          </div>
        </div>

        {/* Additional Value Props */}
        <div className="mt-16 grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="flex items-start p-4">
            <div className="bg-teal-100 rounded-lg p-2 mr-4">
              <svg className="w-5 h-5 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <div>
              <h4 className="font-medium mb-2">Ingredient Warnings</h4>
              <p className="text-slate-600">Get instant alerts about harmful ingredients or product combinations that could irritate your skin.</p>
            </div>
          </div>

          <div className="flex items-start p-4">
            <div className="bg-teal-100 rounded-lg p-2 mr-4">
              <svg className="w-5 h-5 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <h4 className="font-medium mb-2">Safe Product Matching</h4>
              <p className="text-slate-600">Find products that work perfectly with your existing routine and won't cause adverse reactions.</p>
            </div>
          </div>

          <div className="flex items-start p-4">
            <div className="bg-teal-100 rounded-lg p-2 mr-4">
              <svg className="w-5 h-5 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h4 className="font-medium mb-2">Smart Reminders</h4>
              <p className="text-slate-600">Never forget your routine with smart notifications that adapt to your schedule and product timing.</p>
            </div>
          </div>

          <div className="flex items-start p-4">
            <div className="bg-teal-100 rounded-lg p-2 mr-4">
              <svg className="w-5 h-5 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <div>
              <h4 className="font-medium mb-2">Progress Insights</h4>
              <p className="text-slate-600">Get detailed analytics about your skin's improvement and which products are making the biggest impact.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 