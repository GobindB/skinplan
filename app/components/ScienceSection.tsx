import React from 'react';

export const ScienceSection = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-light text-center mb-6">
          Powered by Science, Not Hype
        </h2>
        <p className="text-center text-slate-600 max-w-2xl mx-auto mb-8">
          Our platform uses dermatologist-backed research to generate effective
          skincare routines.
        </p>
        
        <div className="grid md:grid-cols-2 gap-10 items-center mt-16">
          <div>
            <div className="mb-8">
              <h3 className="text-xl font-medium mb-3 flex items-center">
                <span className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
                Evidence-Based Recommendations
              </h3>
              <p className="text-slate-600 pl-11">
                No guesswork—ingredient timing, frequency, and layering are
                optimized based on clinical studies.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-medium mb-3 flex items-center">
                <span className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
                Measurable Progress Tracking
              </h3>
              <p className="text-slate-600 pl-11">
                Track hydration levels, redness reduction, and other key metrics
                to see real improvements.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-3 flex items-center">
                <span className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
                Adaptive AI Technology
              </h3>
              <p className="text-slate-600 pl-11">
                Our system learns from your feedback and adjusts recommendations
                for continuously improving results.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="text-center mb-6">
              <h3 className="text-lg font-medium">
                Hydration Improvement
              </h3>
              <p className="text-sm text-slate-500">
                Sample progress tracking
              </p>
            </div>

            <div className="h-64 relative px-4">
              <div className="absolute bottom-8 left-0 right-0 h-[calc(100%-2rem)] flex items-end justify-between">
                <div className="w-[14%] h-[20%] bg-teal-100 rounded-t"></div>
                <div className="w-[14%] h-[30%] bg-teal-200 rounded-t"></div>
                <div className="w-[14%] h-[45%] bg-teal-300 rounded-t"></div>
                <div className="w-[14%] h-[60%] bg-teal-400 rounded-t"></div>
                <div className="w-[14%] h-[75%] bg-teal-500 rounded-t"></div>
                <div className="w-[14%] h-[85%] bg-teal-600 rounded-t"></div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 border-t border-slate-200">
                <div className="flex justify-between text-xs text-slate-500 pt-2 px-1">
                  <span className="text-center w-[14%]">Week 1</span>
                  <span className="text-center w-[14%]">Week 2</span>
                  <span className="text-center w-[14%]">Week 3</span>
                  <span className="text-center w-[14%]">Week 4</span>
                  <span className="text-center w-[14%]">Week 5</span>
                  <span className="text-center w-[14%]">Week 6</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-slate-100 flex items-center justify-center">
              <div className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-teal-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <span className="ml-2 text-sm text-slate-600">
                  Results vary by individual and consistency
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 