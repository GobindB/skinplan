import React from 'react';
import { EmailSignupForm } from './EmailSignupForm';
import { SkinCareCalendar } from './SkinCareCalendar';

interface HeroSectionProps {
  isVisible: boolean;
  waitlistCount: number;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ isVisible, waitlistCount }) => {
  return (
    <section className="bg-slate-50">
      <div className="max-w-[1400px] w-full mx-auto px-4 sm:px-6 md:px-8 pt-8 sm:pt-16 md:pt-[72px] pb-8 sm:pb-12 md:pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-3 sm:mb-4 md:mb-6 text-slate-800">
              <span className="block mb-1 sm:mb-2">Your Personalized Skincare Plan.</span>
              <span className="text-teal-600">
                Based on Science, Not Guesswork.
              </span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-slate-600 mb-4 sm:mb-6 md:mb-8">
              Achieve better skin through a structured, guided routine tailored to
              your skincare goals. No fads, no fluff—just data-driven skincare
              planning that works.
            </p>
            <EmailSignupForm waitlistCount={waitlistCount} />
          </div>

          <div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <SkinCareCalendar />
          </div>
        </div>
      </div>
    </section>
  );
}; 