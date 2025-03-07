import React from 'react';

export const HowItWorks = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          How It Works
        </h2>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          <div className="bg-slate-50 rounded-xl p-6 text-center transition-transform hover:scale-105 duration-300">
            <div className="w-16 h-16 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-bold">1</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Set Your Goal</h3>
            <p className="text-slate-600">
              Choose your skincare focus—whether it&apos;s clearer skin, hydration, or anti-aging.
            </p>
          </div>

          <div className="bg-slate-50 rounded-xl p-6 text-center transition-transform hover:scale-105 duration-300">
            <div className="w-16 h-16 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-bold">2</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Get a Science-Backed Plan</h3>
            <p className="text-slate-600">
              Receive a step-by-step routine with product usage timing, ingredient recommendations, and habit tracking.
            </p>
          </div>

          <div className="bg-slate-50 rounded-xl p-6 text-center transition-transform hover:scale-105 duration-300">
            <div className="w-16 h-16 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-bold">3</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Track and Adjust</h3>
            <p className="text-slate-600">
              Follow your personalized plan, log progress, and adapt with AI-driven insights.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}; 