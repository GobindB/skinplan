import React from 'react';
import { EmailSignupForm } from './EmailSignupForm';

interface CallToActionProps {
  waitlistCount: number;
}

export const CallToAction: React.FC<CallToActionProps> = ({ waitlistCount }) => {
  return (
    <section className="py-16 md:py-24 bg-teal-600 text-white">
      <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Join the Waitlist – Be the First to Try It!
        </h2>
        <p className="text-teal-100 mb-8 max-w-2xl mx-auto">
          Get early access to our skincare planning platform and start your journey to
          healthier, more radiant skin.
        </p>
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <h3 className="text-2xl font-semibold text-slate-800 mb-6">
            Get Your Personalized Skincare Plan
          </h3>
          <EmailSignupForm waitlistCount={waitlistCount} />
        </div>
      </div>
    </section>
  );
}; 