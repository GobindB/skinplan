import React from 'react';
import { EmailSignupForm } from './EmailSignupForm';
import { SkinCareCalendar } from './SkinCareCalendar';

interface HeroSectionProps {
  isVisible: boolean;
  waitlistCount: number;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ isVisible, waitlistCount }) => {
  return (
    <section className="bg-white pt-20 md:pt-24 pb-20 md:pb-24">
      <div className="max-w-[1400px] w-full mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className={`transition-all duration-700 pl-0 md:pl-0 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-3 sm:mb-4 text-slate-800">
              <span className="block mb-1">Your Personalized Skincare Plan.</span>
              <span className="text-teal-600">
                Based on Science, Not Guesswork.
              </span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-slate-600 mb-4 sm:mb-6">
              Achieve better skin through a structured, guided routine tailored to
              your skincare goals. No fads, no fluff—just data-driven skincare
              planning that works.
            </p>
            <EmailSignupForm waitlistCount={waitlistCount} />
          </div>

          <div className={`transition-all duration-700 delay-300 px-4 sm:px-6 md:px-8 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <SkinCareCalendar />
          </div>
        </div>
      </div>
    </section>
  );
}; 