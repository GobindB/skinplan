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
      <div className="max-w-[1400px] w-full mx-auto px-4 sm:px-6 md:px-8 pt-16 sm:pt-20 md:pt-[72px] pb-12 sm:pb-16 md:pb-20">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4 sm:mb-6 text-slate-800">
              <span className="block mb-2">Your Personalized Skincare Plan.</span>
              <span className="text-teal-600">
                Based on Science, Not Guesswork.
              </span>
            </h1>
            <p className="text-base sm:text-lg text-slate-600 mb-6 sm:mb-8">
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