import React from 'react';
import { EmailSignupForm } from './EmailSignupForm';

interface WaitlistSectionProps {
  waitlistCount: number;
}

export const WaitlistSection: React.FC<WaitlistSectionProps> = ({ waitlistCount }) => {
  return (
    <section className="relative py-32 bg-[#0A0A0E] text-white overflow-hidden">
      {/* Section Transition - Top */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#0A0A0E] via-[#0A0A0E] to-transparent pointer-events-none" />

      {/* Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[800px] h-[800px] rounded-full bg-gradient-to-r from-[#FF3BFF] to-[#5C24FF] opacity-[0.15] blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-[#5C24FF] to-[#D94DFF] opacity-[0.15] blur-[120px] animate-pulse" />
      </div>

      <div className="relative max-w-[1200px] mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          {/* Beta Tag */}
          <div className="inline-flex items-center gap-4 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 mb-8">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#FF3BFF] animate-pulse" />
              <span className="text-xs font-medium tracking-wide text-white/80">
                Coming Soon
              </span>
            </div>
            {/* Profile Avatars */}
            <div className="flex -space-x-2">
              <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#FF3BFF] to-[#5C24FF] border border-[#0A0A0E]" />
              <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#5C24FF] to-[#D94DFF] border border-[#0A0A0E]" />
              <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#D94DFF] to-[#FF3BFF] border border-[#0A0A0E]" />
              <div className="w-5 h-5 rounded-full bg-[#1A1A1E] border border-[#0A0A0E] flex items-center justify-center">
                <span className="text-[10px] font-medium text-white/60">+12</span>
              </div>
            </div>
          </div>

          {/* Main Headline */}
          <h2 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#FF3BFF] via-[#D94DFF] to-[#5C24FF]">
              Be First in Line
            </span>
            <span className="block text-white mt-2">
              Join Our Beta ✨
            </span>
          </h2>

          {/* Subheadline */}
          <p className="text-xl text-white/60 mb-12 max-w-xl mx-auto">
            Join our exclusive beta waitlist and be among the first to experience the future of personalized skincare.
          </p>

          {/* Email Signup Form */}
          <div className="max-w-md mx-auto mb-8">
            <EmailSignupForm waitlistCount={waitlistCount} />
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-3 gap-6 mt-16">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FF3BFF] to-[#5C24FF] flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Early Access</h3>
              <p className="text-sm text-white/60">Be the first to try our AI-powered skincare analysis and personalized routines.</p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#5C24FF] to-[#D94DFF] flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Exclusive Pricing</h3>
              <p className="text-sm text-white/60">Get special beta pricing and keep it forever when we launch publicly.</p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#D94DFF] to-[#FF3BFF] flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Direct Access</h3>
              <p className="text-sm text-white/60">Shape the future of the app with direct feedback to our team.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Section Transition - Bottom */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0A0A0E] via-[#0A0A0E] to-transparent pointer-events-none" />
    </section>
  );
}; 