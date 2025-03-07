import React from 'react';

// Utility function to format numbers with commas
const formatNumber = (num: number): string => {
  return num.toLocaleString('en-US');
};

export const HowItWorks = () => {
  // Example number of users - replace with actual dynamic value from your data source
  const userCount = 13155;

  return (
    <section className="py-20 bg-gradient-to-b from-white via-slate-50/30 to-white relative overflow-hidden">
      {/* Organic background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 left-0 w-96 h-96 bg-sky-50/40 rounded-[70%] mix-blend-multiply filter blur-3xl opacity-70 animate-float"></div>
        <div className="absolute top-32 right-0 w-96 h-96 bg-emerald-50/40 rounded-[60%] mix-blend-multiply filter blur-3xl opacity-70 animate-float animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-teal-50 to-emerald-50 text-teal-600 text-sm font-medium mb-4 transform hover:scale-105 transition-transform border border-teal-100/20">
            Join {formatNumber(userCount)} others already signed up!
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
            Transform Your Skincare Routine
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Experience a personalized approach to achieving your best skin
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* iPhone Frame with Video */}
          <div className="relative w-[320px] mx-auto lg:ml-8 lg:mr-auto sticky top-24">
            {/* iPhone frame */}
            <div className="relative rounded-[2.5rem] bg-slate-900 p-3 shadow-xl transform hover:scale-[1.02] transition-transform duration-300">
              {/* iPhone notch */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-6 w-32 bg-slate-900 rounded-b-3xl z-20"></div>
              
              {/* Screen content */}
              <div className="relative rounded-[2rem] overflow-hidden bg-slate-800 aspect-[9/19.5]">
                <video
                  className="absolute inset-0 w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                  poster="/images/video-poster.jpg"
                >
                  <source src="/demo.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-teal-100/30 rounded-full blur-xl"></div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-emerald-100/30 rounded-full blur-xl"></div>
          </div>

          {/* Steps */}
          <div className="space-y-8 lg:pl-12">
            <div className="relative">
              {/* Steps Container */}
              <div className="space-y-12">
                {/* Step 1 */}
                <div className="group relative pl-16">
                  <div className="absolute left-0 top-1 w-10 h-10 bg-gradient-to-br from-teal-500 to-emerald-500 text-white rounded-xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                    <span className="text-lg font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-teal-800 flex items-center gap-2">
                      Analyze Your Skin
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-teal-50 text-teal-600 border border-teal-100/20">
                        🔍 Smart AI
                      </span>
                    </h3>
                    <p className="text-slate-600">
                      Share your skin concerns and goals. Our AI creates a personalized care plan based on your unique needs.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="group relative pl-16">
                  <div className="absolute left-0 top-1 w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-500 text-white rounded-xl flex items-center justify-center transform group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300 shadow-lg">
                    <span className="text-lg font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-emerald-800 flex items-center gap-2">
                      Follow Your Routine
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-600 border border-emerald-100/20">
                        ⭐ Daily Care
                      </span>
                    </h3>
                    <p className="text-slate-600">
                      Get step-by-step guidance for your morning and night routines, with product recommendations that work together.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="group relative pl-16">
                  <div className="absolute left-0 top-1 w-10 h-10 bg-gradient-to-br from-teal-500 to-emerald-500 text-white rounded-xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                    <span className="text-lg font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-teal-800 flex items-center gap-2">
                      Track Progress
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-teal-50 text-teal-600 border border-teal-100/20">
                        ✨ Results
                      </span>
                    </h3>
                    <p className="text-slate-600">
                      See your transformation with smart photo comparisons and get data-driven insights about what's working.
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="mt-12">
                <button className="inline-flex items-center px-6 py-3 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-500 text-white font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300">
                  Get Started Free
                  <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}; 