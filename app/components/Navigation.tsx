import React, { useState, useEffect } from 'react';

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50 ${isScrolled ? 'border-b border-slate-100' : ''}`}>
      <nav className="max-w-[1400px] w-full mx-auto h-14 sm:h-[72px] flex justify-between items-center px-4 sm:px-6 md:px-8">
        <div className="text-lg sm:text-xl font-semibold tracking-tight text-teal-700 hover:text-teal-800 transition-colors cursor-pointer">
          SkinPlan
        </div>
        <button className="px-4 sm:px-6 py-2 sm:py-2.5 bg-teal-600 text-white rounded-full text-xs sm:text-sm font-medium hover:bg-teal-700 transition-colors shadow-sm hover:shadow-md">
          Join Waitlist
        </button>
      </nav>
    </div>
  );
}; 