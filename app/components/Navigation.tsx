import React from 'react';

export const Navigation = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50 border-b border-slate-100">
      <nav className="max-w-[1400px] w-full mx-auto h-[72px] flex justify-between items-center px-4 md:px-8">
        <div className="text-xl font-semibold tracking-tight text-teal-700 hover:text-teal-800 transition-colors cursor-pointer">
          SkinPlan
        </div>
        <button className="px-6 py-2.5 bg-teal-600 text-white rounded-full text-sm font-medium hover:bg-teal-700 transition-colors shadow-sm hover:shadow-md">
          Join Waitlist
        </button>
      </nav>
    </div>
  );
}; 