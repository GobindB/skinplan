import React from 'react';

export const AppStoreButtons = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
      <a
        href="#"
        className="inline-flex items-center px-6 py-3 bg-slate-800 text-white rounded-xl hover:bg-slate-700 transition-colors"
      >
        <svg className="w-8 h-8 mr-3" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.53 4.08zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.27 2.33-2.02 4.13-3.74 4.25z" />
        </svg>
        <div className="flex flex-col">
          <span className="text-xs">Download on the</span>
          <span className="text-lg font-semibold -mt-1">App Store</span>
        </div>
      </a>
      <a
        href="#"
        className="inline-flex items-center px-6 py-3 bg-slate-800 text-white rounded-xl hover:bg-slate-700 transition-colors"
      >
        <svg className="w-8 h-8 mr-3" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3.609 1.814L13.792 12l-10.183 10.186L3.61 12zm15.183 0L8.609 12l10.183 10.186L18.792 12zM3.609 1.814L13.792 12 3.609 22.186 18.792 12z" />
        </svg>
        <div className="flex flex-col">
          <span className="text-xs">GET IT ON</span>
          <span className="text-lg font-semibold -mt-1">Google Play</span>
        </div>
      </a>
    </div>
  );
}; 