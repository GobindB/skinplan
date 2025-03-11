import React, { useState, useEffect } from 'react';

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#0A0A0E]/95 backdrop-blur-md' : 'bg-transparent'
    }`}>
      <div className="w-full px-6">
        <nav className="h-20 flex items-center justify-between">
          {/* Left Side */}
          <div className="flex items-center gap-12">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-9 h-9 rounded-lg bg-[#1A1A1E] border border-white/10 flex items-center justify-center transition-colors group-hover:bg-[#242428]">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              </div>
              <span className="text-lg font-semibold text-white">SkinPlan</span>
            </a>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('features')} className="text-sm text-white/60 hover:text-white transition-colors">
                Features
              </button>
              <button onClick={() => scrollToSection('how-it-works')} className="text-sm text-white/60 hover:text-white transition-colors">
                How it Works
              </button>
              <button onClick={() => scrollToSection('pricing')} className="text-sm text-white/60 hover:text-white transition-colors">
                Pricing
              </button>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            <button className="px-4 py-2 text-sm font-medium text-white bg-[#1A1A1E] hover:bg-[#242428] rounded-lg border border-white/10 transition-colors">
              Join Waitlist
            </button>

            {/* Mobile Menu Button */}
            <button className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg bg-[#1A1A1E] border border-white/10">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}; 