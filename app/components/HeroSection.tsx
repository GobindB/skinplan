import React from 'react';
import Image from 'next/image';
import SkinCareCalendar from './SkinCareCalendar';
import { EmailSignupForm } from './EmailSignupForm';
import { motion } from 'framer-motion';
import { PrivacyPolicyLink } from './PrivacyPolicyLink';

interface HeroSectionProps {
  isVisible: boolean;
  waitlistCount: number;
  onGetStarted: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ isVisible, waitlistCount, onGetStarted }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#FFF1E6] text-[#5C3D2E] overflow-hidden py-20 lg:py-0">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-[400px] w-[800px] h-[800px] rounded-full bg-gradient-to-r from-[#E68A6C] to-[#B86B4C] opacity-[0.15] blur-[120px]" />
        <div className="absolute bottom-1/4 -right-[300px] w-[600px] h-[600px] rounded-full bg-gradient-to-r from-[#B86B4C] to-[#D4A092] opacity-[0.15] blur-[120px]" />
      </div>

      <div className="relative w-full max-w-[1400px] mx-auto px-4 lg:px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column */}
          <div className="relative z-10 flex flex-col items-center text-center pt-16 lg:pt-0 w-full">
            {/* Early Access Beta Badge */}
            <div className="mb-8">
              <span className="px-3 py-1 text-xs font-medium text-[#B86B4C] bg-[#E68A6C]/10 rounded-full">
              🌱   Early Access Beta  
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 max-w-xl">
              <span className="block mb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#E68A6C] via-[#D4A092] to-[#B86B4C]">
                Unlock Your Skin's
              </span>
              <span className="block text-[#5C3D2E]">
                Full Potential
              </span>
            </h1>

            {/* Product Description */}
            <p className="text-lg lg:text-xl text-[#86604A] mb-8 max-w-xl">
              AI-powered skincare that creates and adapts your personalized routine. Get expert recommendations and track your progress.
            </p>

            {/* Key Features */}
            <div className="flex flex-wrap justify-center gap-4 mb-8 w-full max-w-xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#E8D5C8]/30">
                <svg className="w-5 h-5 text-[#B86B4C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                <span className="text-sm text-[#5C3D2E]">Smart Routines</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#E8D5C8]/30">
                <svg className="w-5 h-5 text-[#B86B4C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm text-[#5C3D2E]">Expert Guidance</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#E8D5C8]/30">
                <svg className="w-5 h-5 text-[#B86B4C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="text-sm text-[#5C3D2E]">Progress Tracking</span>
              </div>
            </div>

            {/* Email Signup Form */}
            <div className="mb-4 w-full max-w-md">
              <EmailSignupForm waitlistCount={waitlistCount} onGetStarted={onGetStarted} />
            </div>

            {/* Privacy Policy Link */}
            <div className="mb-6">
              <PrivacyPolicyLink />
            </div>

            {/* Satisfaction Guarantee */}
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#E8D5C8]/30 rounded-full border border-[#E8D5C8]">
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#E68A6C] to-[#B86B4C] flex items-center justify-center">
                <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-sm text-[#5C3D2E]">30-Day Satisfaction Guarantee</span>
            </div>
          </div>

          {/* Right Column - Calendar */}
          <div className="relative">
            <div className="relative max-w-[420px] mx-auto">
              <div className="group relative rounded-2xl overflow-hidden">
                <div className="relative">
                  <SkinCareCalendar onGetStarted={onGetStarted} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 