import React, { useState } from 'react';

interface HowItWorksProps {
  waitlistCount: number;
}

// Utility function to format numbers with commas
const formatNumber = (num: number): string => {
  return num.toLocaleString('en-US');
};

export const HowItWorks: React.FC<HowItWorksProps> = ({ waitlistCount }) => {
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3; // Number of slides/screens in the demo

  const handleSwipe = (diff: number) => {
    if (Math.abs(diff) > 50) { // 50px threshold for swipe
      if (diff > 0 && currentSlide < totalSlides - 1) {
        setCurrentSlide(currentSlide + 1);
      } else if (diff < 0 && currentSlide > 0) {
        setCurrentSlide(currentSlide - 1);
      }
    }
  };

  return (
    <section className="py-8 sm:py-16 md:py-20 bg-slate-50 relative overflow-hidden">
      {/* Organic background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 left-0 w-48 sm:w-96 h-48 sm:h-96 bg-teal-50/40 rounded-[70%] mix-blend-multiply filter blur-3xl opacity-70 animate-float"></div>
        <div className="absolute top-32 right-0 w-48 sm:w-96 h-48 sm:h-96 bg-teal-50/40 rounded-[60%] mix-blend-multiply filter blur-3xl opacity-70 animate-float animation-delay-2000"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16 sm:mb-20 md:mb-24">
          <span className="inline-block px-3 sm:px-4 py-1 rounded-full bg-teal-50 text-teal-600 text-xs sm:text-sm font-medium mb-4 transform hover:scale-105 transition-transform border border-teal-100/20">
            Join {waitlistCount.toLocaleString('en-US')} others already signed up!
          </span>
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold mb-3 sm:mb-4 md:mb-6 bg-gradient-to-r from-teal-600 to-teal-500 bg-clip-text text-transparent">
            Transform Your Skincare Routine
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto mb-2">
            Experience a personalized approach to achieving your best skin
          </p>
          <p className="text-sm sm:text-base text-slate-600 mb-4">
            Don&apos;t miss out on the future of skincare. Join thousands of others who are already on the waitlist.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-20 items-center max-w-5xl mx-auto">
          {/* iPhone Frame with Video */}
          <div className="relative w-[240px] sm:w-[280px] md:w-[300px] mx-auto order-1 lg:order-none">
            {/* iPhone frame */}
            <div className="relative rounded-[2rem] sm:rounded-[2.5rem] bg-slate-900 p-2 sm:p-3 shadow-xl transform hover:scale-[1.02] transition-transform duration-300">
              {/* iPhone notch */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-4 sm:h-6 w-24 sm:w-32 bg-slate-900 rounded-b-3xl z-20"></div>
              
              {/* Screen content */}
              <div className="relative rounded-[1.75rem] sm:rounded-[2rem] overflow-hidden bg-slate-800">
                {/* Status Bar */}
                <div className="absolute top-0 inset-x-0 h-5 sm:h-7 px-4 sm:px-6 flex justify-between items-center text-white text-[10px] sm:text-xs z-10 bg-slate-800/90">
                  <span>9:41</span>
                  <div className="flex items-center gap-1 sm:gap-2">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 11.5a.5.5 0 01.5-.5h14a.5.5 0 010 1h-14a.5.5 0 01-.5-.5zm0-4a.5.5 0 01.5-.5h14a.5.5 0 010 1h-14a.5.5 0 01-.5-.5zm0-4a.5.5 0 01.5-.5h14a.5.5 0 010 1h-14a.5.5 0 01-.5-.5z"/>
                    </svg>
                    <div className="flex gap-0.5 sm:gap-1">
                      <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full border-2 border-current"></div>
                      <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full border-2 border-current"></div>
                    </div>
                  </div>
                </div>
                
                {/* Main Content Area */}
                <div className="aspect-[9/19.5]"
                  onTouchStart={(e) => {
                    const touch = e.touches[0];
                    setTouchStart(touch.clientX);
                  }}
                  onTouchMove={(e) => {
                    if (touchStart === null) return;
                    const touch = e.touches[0];
                    const diff = touchStart - touch.clientX;
                    
                    if (Math.abs(diff) > 5) {
                      e.preventDefault();
                    }
                  }}
                  onTouchEnd={(e) => {
                    if (touchStart === null) return;
                    const touch = e.changedTouches[0];
                    const diff = touchStart - touch.clientX;
                    handleSwipe(diff);
                    setTouchStart(null);
                  }}
                >
                  <video
                    className="w-full h-full object-cover transition-transform duration-300 ease-out"
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster="/images/video-poster.jpg"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                  >
                    <source src="/demo.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>

                {/* Home Indicator */}
                <div className="absolute bottom-1 sm:bottom-2 left-1/2 transform -translate-x-1/2 w-6 sm:w-8 h-0.5 sm:h-1 bg-white/30 rounded-full"></div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 sm:-top-8 -left-4 sm:-left-8 w-16 sm:w-32 h-16 sm:h-32 bg-teal-100/30 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-4 sm:-bottom-8 -right-4 sm:-right-8 w-16 sm:w-32 h-16 sm:h-32 bg-teal-100/30 rounded-full blur-2xl"></div>
          </div>

          {/* Steps */}
          <div className="space-y-6 sm:space-y-8 md:space-y-12 order-2 lg:order-none">
            {/* Step 1 */}
            <div className="group relative pl-12 sm:pl-14 md:pl-16">
              <div className="absolute left-0 top-0 w-6 sm:w-8 md:w-10 h-6 sm:h-8 md:h-10 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-lg sm:rounded-xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                <span className="text-sm sm:text-base md:text-lg font-bold">1</span>
              </div>
              <div>
                <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 text-slate-800 flex flex-wrap items-center gap-2">
                  <span className="mr-1">Analyze Your Skin</span>
                  <span className="inline-flex items-center px-2 sm:px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-medium bg-teal-50 text-teal-600 border border-teal-100/20 whitespace-nowrap">
                    🔍 Smart AI
                  </span>
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed">
                  Share your skin concerns and goals. Our AI creates a personalized care plan based on your unique needs.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="group relative pl-12 sm:pl-14 md:pl-16">
              <div className="absolute left-0 top-0 w-6 sm:w-8 md:w-10 h-6 sm:h-8 md:h-10 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-lg sm:rounded-xl flex items-center justify-center transform group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300 shadow-lg">
                <span className="text-sm sm:text-base md:text-lg font-bold">2</span>
              </div>
              <div>
                <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 text-slate-800 flex flex-wrap items-center gap-2">
                  <span className="mr-1">Follow Your Routine</span>
                  <span className="inline-flex items-center px-2 sm:px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-medium bg-teal-50 text-teal-600 border border-teal-100/20 whitespace-nowrap">
                    ⭐ Daily Care
                  </span>
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed">
                  Get step-by-step guidance for your morning and night routines, with product recommendations that work together.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="group relative pl-12 sm:pl-14 md:pl-16">
              <div className="absolute left-0 top-0 w-6 sm:w-8 md:w-10 h-6 sm:h-8 md:h-10 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-lg sm:rounded-xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                <span className="text-sm sm:text-base md:text-lg font-bold">3</span>
              </div>
              <div>
                <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 text-slate-800 flex flex-wrap items-center gap-2">
                  <span className="mr-1">Track Progress</span>
                  <span className="inline-flex items-center px-2 sm:px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-medium bg-teal-50 text-teal-600 border border-teal-100/20 whitespace-nowrap">
                    ✨ Results
                  </span>
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed">
                  See your transformation with smart photo comparisons and get data-driven insights about what&apos;s working.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button - Moved outside the grid and centered */}
        <div className="flex justify-center mt-8 sm:mt-12 md:mt-16">
          <button className="inline-flex items-center px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-lg sm:rounded-xl bg-gradient-to-r from-teal-500 to-teal-600 text-white text-xs sm:text-sm md:text-base font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300">
            Get Started Free
            <svg className="ml-2 w-3 sm:w-4 md:w-5 h-3 sm:h-4 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
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