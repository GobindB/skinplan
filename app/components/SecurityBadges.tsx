import React from 'react';

export const SecurityBadges = () => {
  return (
    <div className="flex items-center justify-center space-x-6 mt-6 pt-6 border-t border-slate-100">
      <div className="flex items-center">
        <div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-teal-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            />
          </svg>
        </div>
        <span className="ml-2 text-sm text-slate-600">Privacy protected</span>
      </div>
      <div className="flex items-center">
        <div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-teal-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
            />
          </svg>
        </div>
        <span className="ml-2 text-sm text-slate-600">Backed by research</span>
      </div>
    </div>
  );
}; 