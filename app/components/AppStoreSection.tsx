import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const testimonials = [
  {
    text: "This app completely transformed my skincare routine. My skin has never looked better! 🌟",
    author: "Sarah M.",
    role: "Early Access User",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    tag: "Transformation"
  },
  {
    text: "Finally, a skincare app that actually understands my needs. The personalization is incredible!",
    author: "Michael K.",
    role: "Beta Tester",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    tag: "Personalization"
  },
  {
    text: "The progress tracking feature keeps me motivated. I can actually see the improvement! 📈",
    author: "Jessica L.",
    role: "Early Access User",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    tag: "Progress Tracking"
  }
];

const betaUsers = [
  { image: "https://randomuser.me/api/portraits/women/4.jpg" },
  { image: "https://randomuser.me/api/portraits/men/5.jpg" },
  { image: "https://randomuser.me/api/portraits/women/6.jpg" },
  { image: "https://randomuser.me/api/portraits/men/7.jpg" },
];

export const AppStoreSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-32 bg-gradient-to-b from-[#0A0A0E] via-[#13131A] to-[#0F0F13] text-white">
      {/* Section Transition - Top */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#0A0A0E] via-[#0A0A0E] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Content */}
          <div>
            {/* Beta Tag */}
            <div className="inline-flex items-center gap-4 px-3 py-1.5 rounded-full bg-[#1A1A1E] border border-white/10 mb-8">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#FF3BFF]" />
                <div className="flex items-center -space-x-2">
                  {betaUsers.map((user, index) => (
                    <div key={index} className="relative w-6 h-6 rounded-full border-2 border-[#1A1A1E]">
              <Image
                        src={user.image}
                        alt="Beta user"
                fill
                        className="rounded-full object-cover"
              />
              </div>
                  ))}
            </div>
                <span className="text-xs font-medium tracking-wide text-white/80">
                  Join 13,214 others already signed up!
                </span>
              </div>
            </div>

            {/* Main Headline */}
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#FF3BFF] via-[#D94DFF] to-[#5C24FF]">
                Your Skincare Journey
              </span>
              <span className="block text-white mt-2">
                In Your Pocket ✨
              </span>
            </h2>

            <p className="text-xl text-white/60 mb-12">
              Get ready for a revolutionary skincare experience. Download the app and transform your routine with AI-powered personalization.
            </p>

            {/* App Store Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              {/* App Store Button */}
              <button className="flex items-center gap-3 px-6 py-3 bg-[#1A1A1E] rounded-lg border border-white/10 hover:bg-[#242428] transition-colors">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs text-white/60">Coming Soon on</div>
                  <div className="text-sm font-semibold text-white">App Store</div>
                </div>
              </button>

              {/* Play Store Button */}
              <button className="flex items-center gap-3 px-6 py-3 bg-[#1A1A1E] rounded-lg border border-white/10 hover:bg-[#242428] transition-colors">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 20.5V3.5C3 2.91 3.34 2.39 3.84 2.15L13.69 12L3.84 21.85C3.34 21.6 3 21.09 3 20.5ZM16.81 15.12L6.05 21.34L14.54 12.85L16.81 15.12ZM20.16 12.86C20.5 13.07 20.75 13.5 20.75 14C20.75 14.5 20.53 14.9 20.18 15.11L17.89 16.5L15.39 14L17.89 11.5L20.16 12.86ZM6.05 2.66L16.81 8.88L14.54 11.15L6.05 2.66Z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs text-white/60">Coming Soon on</div>
                  <div className="text-sm font-semibold text-white">Play Store</div>
                </div>
              </button>
            </div>

            {/* Feature Tags */}
            <div className="flex flex-wrap gap-2">
              {['AI-Powered', 'Progress Tracking', 'Personalized', 'Smart Reminders'].map((tag) => (
                <div 
                  key={tag}
                  className="px-3 py-1.5 rounded-lg bg-[#1A1A1E] border border-white/10 text-sm text-white/80"
                >
                  {tag}
                </div>
              ))}
            </div>
                    </div>

          {/* Right Column - Testimonials */}
          <div className="relative">
            <div className="bg-[#1A1A1E] rounded-[32px] p-8 border border-white/10">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xl font-semibold text-white">Early Access Reviews</h3>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                      className="w-4 h-4 text-[#FF3BFF]"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                      </div>

              <div className="space-y-6">
                {testimonials.map((testimonial, index) => (
                  <div 
                    key={index}
                    className={`transition-all duration-500 ${
                      index === activeIndex ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                    style={{ display: index === activeIndex ? 'block' : 'none' }}
                  >
                    <div className="bg-[#242428] rounded-2xl p-6 mb-6">
                      <blockquote className="text-lg text-white/80">
                        "{testimonial.text}"
                      </blockquote>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="relative w-10 h-10">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.author}
                          fill
                          className="rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="font-medium text-white">{testimonial.author}</div>
                        <div className="text-sm text-white/60">{testimonial.role}</div>
                  </div>
                      <span className="ml-auto text-sm text-white/40 px-3 py-1 rounded-full bg-[#242428] border border-white/5">
                    {testimonial.tag}
                      </span>
                    </div>
                  </div>
                ))}
          </div>

              {/* Testimonial Navigation */}
              <div className="flex items-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                    className={`h-1 rounded-full transition-all duration-300 ${
                  index === activeIndex 
                        ? 'w-8 bg-white/20' 
                        : 'w-1.5 bg-white/5 hover:bg-white/10'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section Transition - Bottom */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0F0F13] via-[#0F0F13] to-transparent pointer-events-none" />
    </section>
  );
}; 