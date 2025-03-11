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
    <section id="waitlist-section" className="relative py-32 bg-[#0A0A0E] text-white overflow-hidden">
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
            Join {waitlistCount.toLocaleString('en-US')} others who are already on their way to healthier, more radiant skin with AI-powered personalization.
          </p>
        </div>

        <div className="relative">
          <div className="relative bg-[#1A1A1E] rounded-[32px] p-8 lg:p-12 border border-white/10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
              {/* Left Column - Features */}
              <div>
                <h3 className="text-2xl font-semibold text-white mb-8">
                  Get Your Personalized Plan
                </h3>

                <div className="space-y-6">
                  {[
                    {
                      icon: (
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                      ),
                      title: "Structured Plans",
                      description: "Tailored routines based on your unique skin needs"
                    },
                    {
                      icon: (
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      ),
                      title: "Expert Guidance",
                      description: "Professional skincare recommendations"
                    },
                    {
                      icon: (
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                        </svg>
                      ),
                      title: "Personalized Care",
                      description: "Routines that adapt to your needs"
                    }
                  ].map((feature, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-[#FF3BFF] to-[#5C24FF] flex items-center justify-center flex-shrink-0">
                        {feature.icon}
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-white mb-1">{feature.title}</h4>
                        <p className="text-white/60">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column - Form */}
              <div className="lg:border-l lg:border-white/10 lg:pl-20">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="you@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#FF3BFF] focus:border-transparent transition-colors"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-[#FF3BFF] to-[#5C24FF] text-white font-medium hover:opacity-90 transition-opacity shadow-lg shadow-[#FF3BFF]/25"
                  >
                    Join the Waitlist
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
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 