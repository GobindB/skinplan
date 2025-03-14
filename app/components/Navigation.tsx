'use client';

import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';

interface NavigationProps {
  onGetStarted: () => void;
}

export function Navigation({ onGetStarted }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navigationItems = [
    { name: 'How it Works', href: '#how-it-works' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'App Store', href: '#app-store' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FFF1E6]/95 backdrop-blur-md border-b border-[#E8D5C8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-xl font-bold bg-gradient-to-r from-[#E68A6C] to-[#B86B4C] text-transparent bg-clip-text">
              SkinPlan
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm text-[#86604A] hover:text-[#5C3D2E] transition-colors"
              >
                {item.name}
              </a>
            ))}
            <button 
              onClick={onGetStarted}
              className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-[#E68A6C] to-[#B86B4C] rounded-lg hover:opacity-90 transition-opacity"
            >
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-[#86604A] hover:text-[#5C3D2E] hover:bg-[#E8D5C8]/20 transition-colors"
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-[#E8D5C8]"
          >
            <div className="px-4 pt-2 pb-3 space-y-1 bg-[#FFF1E6]">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 text-base text-[#86604A] hover:text-[#5C3D2E] hover:bg-[#E8D5C8]/20 rounded-lg transition-colors"
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-2">
                <button 
                  onClick={() => {
                    setIsOpen(false);
                    onGetStarted();
                  }}
                  className="w-full px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-[#E68A6C] to-[#B86B4C] rounded-lg hover:opacity-90 transition-opacity"
                >
                  Get Started
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
} 