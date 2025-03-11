import React from 'react';
import Image from 'next/image';
import SkinCareCalendar from './SkinCareCalendar';
import { EmailSignupForm } from './EmailSignupForm';

interface HeroSectionProps {
  isVisible: boolean;
  waitlistCount: number;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ isVisible, waitlistCount }) => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-[#0A0A0E] text-white overflow-hidden py-12 lg:py-16">
      {/* Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[800px] h-[800px] rounded-full bg-gradient-to-r from-[#FF3BFF] to-[#5C24FF] opacity-[0.15] blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-[#5C24FF] to-[#D94DFF] opacity-[0.15] blur-[120px]" />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-4 lg:px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column */}
          <div className="relative z-10 max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
            {/* Beta Tag */}
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 mb-6">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#FF3BFF] animate-pulse" />
                <span className="text-xs font-medium tracking-wide text-white/80">
                  Early Access Beta
                </span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              <span className="block mb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#FF3BFF] via-[#D94DFF] to-[#5C24FF]">
                Unlock Your Skin's
              </span>
              <span className="block">
                Full Potential
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg lg:text-xl text-white/60 mb-8 max-w-xl mx-auto lg:mx-0">
              Experience personalized skincare that adapts to you.
            </p>

            {/* Email Signup Form */}
            <div className="mb-6">
              <EmailSignupForm waitlistCount={waitlistCount} />
            </div>

            {/* Satisfaction Guarantee */}
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 rounded-full border border-white/10">
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#FF3BFF] to-[#5C24FF] flex items-center justify-center">
                <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-sm text-white/80">30-Day Satisfaction Guarantee</span>
            </div>
          </div>

          {/* Right Column - Calendar */}
          <div className="relative">
            <div className="relative max-w-[380px] mx-auto">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF3BFF] to-[#5C24FF] opacity-30 blur-2xl -z-10" />
              
              {/* Calendar Container */}
              <div className="relative rounded-2xl bg-[#0A0A0E] p-2.5 border border-white/10">
                <div className="relative rounded-xl overflow-hidden">
                  <SkinCareCalendar />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 