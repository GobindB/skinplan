import React, { useState } from 'react';
import Image from 'next/image';

interface HowItWorksProps {
  waitlistCount: number;
}

const FeatureTag = ({ text }: { text: string }) => (
  <span className="inline-flex items-center px-3 py-1 text-xs tracking-wide font-medium bg-[#E8F1FF] text-[#0A2540] rounded-full">
    {text}
  </span>
);

export const HowItWorks: React.FC<HowItWorksProps> = ({ waitlistCount }) => {
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;

  const handleSwipe = (diff: number) => {
    if (Math.abs(diff) > 50) {
      if (diff > 0 && currentSlide < totalSlides - 1) {
        setCurrentSlide(currentSlide + 1);
      } else if (diff < 0 && currentSlide > 0) {
        setCurrentSlide(currentSlide - 1);
      }
    }
  };

  return (
    <section id="how-it-works" className="relative py-32 bg-[#0A0A0E] text-white overflow-hidden">
      {/* Section Transition - Top */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#0A0A0E] via-[#0A0A0E] to-transparent pointer-events-none" />

      {/* Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[800px] h-[800px] rounded-full bg-gradient-to-r from-[#FF3BFF] to-[#5C24FF] opacity-[0.15] blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-[#5C24FF] to-[#D94DFF] opacity-[0.15] blur-[120px] animate-pulse" />
      </div>

      <div className="relative max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold tracking-tight">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#FF3BFF] via-[#D94DFF] to-[#5C24FF]">
              Your Best Skin,
            </span>
            <span className="block text-white">
              Simplified.
            </span>
          </h2>
          <p className="text-xl text-white/60 max-w-xl mx-auto mt-6">
            Get a personalized routine that works. No more trial and error.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr,auto] gap-20 items-center max-w-6xl mx-auto">
          {/* Left: Features */}
          <div className="space-y-8">
            <div className="flex gap-5">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#925FFF] text-white flex items-center justify-center text-lg font-medium">
                01
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-xl font-bold text-white">Personalized Analysis</h3>
                  <span className="inline-flex px-2.5 py-1 text-xs tracking-wide font-medium bg-white/10 text-white rounded-full backdrop-blur-sm">
                    Expert-Guided
                  </span>
                </div>
                <p className="text-white/60 text-lg leading-relaxed">
                  Share your skin concerns and goals. Our experts create a personalized care plan just for you.
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#925FFF] text-white flex items-center justify-center text-lg font-medium">
                02
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-xl font-bold text-white">Daily Guide</h3>
                  <span className="inline-flex px-2.5 py-1 text-xs tracking-wide font-medium bg-white/10 text-white rounded-full backdrop-blur-sm">
                    Step-by-Step
                  </span>
                </div>
                <p className="text-white/60 text-lg leading-relaxed">
                  Get clear guidance for your routines, with products that actually work together.
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#925FFF] text-white flex items-center justify-center text-lg font-medium">
                03
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-xl font-bold text-white">Seasonal Updates</h3>
                  <span className="inline-flex px-2.5 py-1 text-xs tracking-wide font-medium bg-white/10 text-white rounded-full backdrop-blur-sm">
                    Adaptive Care
                  </span>
                </div>
                <p className="text-white/60 text-lg leading-relaxed">
                  Receive routine updates as seasons change to keep your skin healthy year-round.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Video Demo */}
          <div className="relative">
            <div className="relative max-w-[320px] mx-auto">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF3BFF] to-[#5C24FF] opacity-30 blur-2xl -z-10" />
              
              {/* Phone Frame */}
              <div className="relative rounded-[2.5rem] bg-[#0A0A0E] p-3 border border-white/10 hover:scale-[1.02] transition-all duration-300">
                <div className="relative rounded-[2rem] overflow-hidden bg-[#0A0A0E]">
                  {/* Status Bar */}
                  <div className="absolute top-0 inset-x-0 h-7 px-6 flex justify-between items-center text-white/80 text-xs z-10 bg-[#0A0A0E]/80 backdrop-blur-sm">
                    <span>9:41</span>
                    <div className="flex gap-1">
                      <div className="w-4 h-4 rounded-full bg-current opacity-80" />
                      <div className="w-4 h-4 rounded-full bg-current opacity-80" />
                    </div>
                  </div>
                  
                  {/* App Interface */}
                  <div className="aspect-[9/19.5] relative">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="object-cover w-full h-full"
                    >
                      <source src="/app-demo.mp4" type="video/mp4" />
                    </video>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section Transition - Bottom */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0A0A0E] via-[#0A0A0E] to-transparent pointer-events-none" />
    </section>
  );
}; 