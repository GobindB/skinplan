import React from 'react';

export const Navigation = () => {
  return (
    <div className="bg-slate-50">
      <nav className="py-6 px-4 md:px-8 flex justify-between items-center">
        <div className="text-xl font-semibold tracking-tight text-teal-700">
          SkinPlan
        </div>
        <button className="px-4 py-2 bg-teal-600 text-white rounded-full text-sm hover:bg-teal-700 transition-colors">
          Join Waitlist
        </button>
      </nav>
    </div>
  );
}; 