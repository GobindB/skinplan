import React from 'react';

export const Navigation = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bg-slate-50 z-50">
      <nav className="max-w-[1400px] w-full mx-auto h-[72px] flex justify-between items-center">
        <div className="text-xl font-semibold tracking-tight text-teal-700 pl-8">
          SkinPlan
        </div>
        <button className="px-6 py-2.5 bg-teal-600 text-white rounded-full text-sm font-medium hover:bg-teal-700 transition-colors mr-8">
          Join Waitlist
        </button>
      </nav>
    </div>
  );
}; 