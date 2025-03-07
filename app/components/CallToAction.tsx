import React, { useState } from 'react';

interface CallToActionProps {
  waitlistCount: number;
}

export const CallToAction: React.FC<CallToActionProps> = ({ waitlistCount }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Email submitted:', email);
  };

  return (
    <section id="waitlist-section" className="py-12 sm:py-16 md:py-24 bg-teal-600 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
          Join the Waitlist – Be the First to Try It!
        </h2>
        <p className="text-sm sm:text-base text-teal-100 mb-6 sm:mb-8 max-w-2xl mx-auto">
          Get early access to our skincare planning platform and start your journey to
          healthier, more radiant skin.
        </p>

        <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg">
          <h3 className="text-xl sm:text-2xl font-semibold text-slate-800 mb-4 sm:mb-6">
            Get Your Personalized Skincare Plan
          </h3>

          <ul className="text-left text-slate-700 mb-6 sm:mb-8 max-w-md mx-auto space-y-3 sm:space-y-4">
            <li className="flex items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 sm:h-5 w-4 sm:w-5 text-teal-500 mr-2 mt-0.5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm sm:text-base">Structured plans tailored to YOUR skin</span>
            </li>
            <li className="flex items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 sm:h-5 w-4 sm:w-5 text-teal-500 mr-2 mt-0.5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm sm:text-base">Measurable results without expensive trial & error</span>
            </li>
            <li className="flex items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 sm:h-5 w-4 sm:w-5 text-teal-500 mr-2 mt-0.5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm sm:text-base">Science-backed, AI-powered personalization</span>
            </li>
          </ul>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              placeholder="Enter your email for early access"
              className="px-4 py-3 rounded-lg border border-slate-200 flex-grow focus:outline-none focus:ring-2 focus:ring-teal-500 text-slate-800 text-sm sm:text-base"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              className="px-4 sm:px-6 py-3 bg-teal-600 text-white rounded-lg font-medium hover:bg-teal-700 transition-colors text-sm sm:text-base whitespace-nowrap"
            >
              Join the Waitlist
            </button>
          </form>

          <p className="text-xs sm:text-sm text-slate-500 mt-4">
            Join {waitlistCount.toLocaleString('en-US')} others already signed up!
          </p>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-6">
            <div className="inline-flex items-center px-2.5 sm:px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-[10px] sm:text-xs">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 sm:h-4 w-3 sm:w-4 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
              Backed by research
            </div>
            <div className="inline-flex items-center px-2.5 sm:px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-[10px] sm:text-xs">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 sm:h-4 w-3 sm:w-4 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
              Privacy protected
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 