import React from 'react';
import Image from 'next/image';
import SkinCareCalendar from './SkinCareCalendar';
import { EmailSignupForm } from './EmailSignupForm';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  isVisible: boolean;
  waitlistCount: number;
  onGetStarted: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ isVisible, waitlistCount, onGetStarted }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#0A0A0E] text-white overflow-hidden py-20 lg:py-0">
      {/* Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[800px] h-[800px] rounded-full bg-gradient-to-r from-[#FF3BFF] to-[#5C24FF] opacity-[0.15] blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-[#5C24FF] to-[#D94DFF] opacity-[0.15] blur-[120px]" />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-4 lg:px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column */}
          <div className="relative z-10 flex flex-col items-center text-center pt-16 lg:pt-0">
            {/* Early Access Beta Badge */}
            <div className="mb-8">
              <span className="px-3 py-1 text-xs font-medium text-[#FF3BFF] bg-[#FF3BFF]/10 rounded-full">
                Early Access Beta
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 max-w-xl">
              <span className="block mb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#FF3BFF] via-[#D94DFF] to-[#5C24FF]">
                Unlock Your Skin's
              </span>
              <span className="block">
                Full Potential
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg lg:text-xl text-white/60 mb-8 max-w-xl">
              Experience personalized skincare that adapts to you.
            </p>

            {/* Email Signup Form */}
            <div className="mb-6 w-full max-w-md">
              <EmailSignupForm waitlistCount={waitlistCount} onGetStarted={onGetStarted} />
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
              {/* Calendar Container */}
              <div className="group relative rounded-2xl bg-[#0A0A0E] overflow-hidden shadow-2xl shadow-[#FF3BFF]/10 hover:shadow-[#FF3BFF]/20 transition-shadow duration-300">
                {/* Inner Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF3BFF]/5 via-transparent to-[#5C24FF]/5" />
                
                <div className="relative">
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