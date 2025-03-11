import React from 'react';

const benefits = [
  'Get a personalized skincare routine based on your skin type',
  'Access expert recommendations and ingredient insights',
  'Learn about product combinations and interactions',
  'Receive seasonal routine adjustments'
];

export const BenefitsList = () => {
  return (
    <ul className="space-y-3 mb-8">
      {benefits.map((benefit, index) => (
        <li key={index} className="flex items-start">
          <span className="w-5 h-5 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 mr-3 mt-0.5 flex-shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </span>
          <span className="text-slate-600 text-sm">{benefit}</span>
        </li>
      ))}
    </ul>
  );
}; 