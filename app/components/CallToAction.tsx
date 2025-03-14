import React, { useState } from 'react';
import { isValidEmail, getEmailValidationError } from '../utils/validation';
import { LegalLinks } from './LegalLinks';

interface CallToActionProps {
  waitlistCount: number;
  onGetStarted: () => void;
}

export const CallToAction: React.FC<CallToActionProps> = ({ waitlistCount, onGetStarted }) => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const validationError = getEmailValidationError(email);
    if (validationError) {
      setErrorMessage(validationError);
      return;
    }

    setSubmitStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/submit-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to join waitlist');
      }

      setSubmitStatus('success');
      setIsSubmitted(true);
      setEmail(''); // Clear the form after successful submission
      
      // Show success message briefly before opening the create plan view
      setTimeout(() => {
        onGetStarted();
      }, 2000);
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Failed to join waitlist');
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (errorMessage) {
      setErrorMessage('');
    }
  };

  return (
    <section id="waitlist-section" className="relative py-20 bg-gradient-to-b from-[#0A0A0E] via-[#0A0A0E] to-[#0A0A0E] text-white overflow-hidden">
      {/* Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-[800px] h-[800px] rounded-full bg-gradient-to-r from-[#D94DFF] to-[#5C24FF] opacity-[0.08] blur-[140px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-[#FF3BFF] to-[#D94DFF] opacity-[0.08] blur-[140px]" />
      </div>

      {/* Section Transition - Top */}
      <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-[#0A0A0E] via-[#0A0A0E]/50 to-transparent pointer-events-none" />

      <div className="relative max-w-[1200px] mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-16">
          {/* Beta Tag */}
          <div className="inline-flex items-center gap-4 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 mb-8">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#FF3BFF]" />
              <span className="text-xs font-medium tracking-wide text-white/80">
                Limited Time Offer
              </span>
            </div>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#FF3BFF] via-[#D94DFF] to-[#5C24FF]">
              Transform Your Skincare
            </span>
            <span className="block text-white mt-2">
              Journey Today ✨
            </span>
          </h2>

          <p className="text-xl text-white/60 mb-12">
            Our AI creates personalized skincare routines that evolve with your skin. Get expert guidance and track your progress.
          </p>

          {/* How It Works Section */}
          <div className="max-w-3xl mx-auto mb-16">
            <h3 className="text-2xl font-semibold text-white mb-8 text-center">How It Works</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FF3BFF] to-[#5C24FF] flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-white">1</span>
                </div>
                <h4 className="text-lg font-medium text-white mb-2">Analyze Your Skin</h4>
                <p className="text-sm text-white/60">Take our comprehensive skin assessment to help us understand your unique needs</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FF3BFF] to-[#5C24FF] flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-white">2</span>
                </div>
                <h4 className="text-lg font-medium text-white mb-2">Get Your Plan</h4>
                <p className="text-sm text-white/60">Receive a personalized routine tailored to your skin type and concerns</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FF3BFF] to-[#5C24FF] flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-white">3</span>
                </div>
                <h4 className="text-lg font-medium text-white mb-2">Track Progress</h4>
                <p className="text-sm text-white/60">Monitor your improvement and adjust your routine as needed</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="relative bg-[#1A1A1E] rounded-[32px] p-8 lg:p-12 border border-white/10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
              {/* Left Column - Features */}
              <div>
                <h3 className="text-2xl font-semibold text-white mb-8">
                  What You'll Get
                </h3>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-[#FF3BFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white/80">Personalized skincare routine</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-[#FF3BFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white/80">Expert recommendations</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-[#FF3BFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white/80">Progress tracking tools</span>
                  </div>
                </div>
              </div>

              {/* Right Column - Form */}
              <div className="lg:border-l lg:border-white/10 lg:pl-20">
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-white mb-4">Ready to Start?</h3>
                  <p className="text-white/60 mb-4">Join our waitlist to be among the first to experience personalized skincare. You'll receive:</p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2 text-white/60">
                      <svg className="w-5 h-5 text-[#FF3BFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Early access to the platform
                    </li>
                    <li className="flex items-center gap-2 text-white/60">
                      <svg className="w-5 h-5 text-[#FF3BFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Exclusive skincare tips and guides
                    </li>
                    <li className="flex items-center gap-2 text-white/60">
                      <svg className="w-5 h-5 text-[#FF3BFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Special launch offers
                    </li>
                  </ul>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
                      Join the Waitlist
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="you@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#FF3BFF] focus:border-transparent transition-colors"
                      value={email}
                      onChange={handleEmailChange}
                      required
                    />
                  </div>

                  {errorMessage && (
                    <div className="text-red-500 text-sm">{errorMessage}</div>
                  )}

                  <button
                    type="submit"
                    className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-[#FF3BFF] to-[#5C24FF] text-white font-medium hover:opacity-90 transition-opacity shadow-lg shadow-[#FF3BFF]/25 relative"
                  >
                    {submitStatus === 'loading' ? (
                      <div className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </div>
                    ) : submitStatus === 'success' ? (
                      <div className="flex items-center justify-center gap-2">
                        <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Success! Creating your plan...
                      </div>
                    ) : (
                      'Get Early Access'
                    )}
                  </button>

                  <div className="flex flex-wrap gap-3 pt-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-sm text-white/80">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      Research Backed
                    </div>
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-sm text-white/80">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                      Privacy Protected
                    </div>
                  </div>

                  {/* Legal Links */}
                  <div className="mt-4 text-center">
                    <LegalLinks />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 