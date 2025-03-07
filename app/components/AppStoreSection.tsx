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
  },
  {
    text: "Love how it reminds me to apply sunscreen! My future self thanks you 😊",
    author: "Alex R.",
    role: "Premium User",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    tag: "Reminders"
  },
  {
    text: "As someone with sensitive skin, this app is a game-changer! No more guessing what works 🎯",
    author: "Emma T.",
    role: "Early Access User",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    tag: "Sensitive Skin"
  },
  {
    text: "The ingredient analysis feature saved me from so many potential reactions! Thank you! 🙏",
    author: "David W.",
    role: "Premium User",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/6.jpg",
    tag: "Ingredient Analysis"
  },
  {
    text: "My acne is finally clearing up thanks to the personalized routine! Life-changing! ✨",
    author: "Sophie H.",
    role: "Beta Tester",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/7.jpg",
    tag: "Clear Skin"
  }
];

export const AppStoreSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const visibleTestimonials = [...testimonials.slice(activeIndex), ...testimonials.slice(0, activeIndex)];

  const scrollToWaitlist = (e: React.MouseEvent) => {
    e.preventDefault();
    const waitlistSection = document.querySelector('#waitlist-section');
    if (waitlistSection) {
      waitlistSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-8 sm:py-16 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-32 sm:w-64 h-32 sm:h-64 bg-teal-50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-32 sm:w-64 h-32 sm:h-64 bg-amber-50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/3 w-32 sm:w-64 h-32 sm:h-64 bg-rose-50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-8 text-center relative">
        <div className="relative inline-block mb-8 sm:mb-12">
          <svg
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] sm:w-[140%] h-[120%] sm:h-[140%] text-amber-200/40"
            viewBox="0 0 100 100"
            fill="currentColor"
          >
            <path d="M50 5c-1.3 8-3.7 15.8-7 23.2-4.8-6.5-10.4-12.5-16.6-17.8 3.7 7.2 6.5 14.9 8.4 22.8-7.1-4-14.8-7.2-22.8-9.4 7.2 3.7 14.9 6.5 22.8 8.4-6.5 4.8-12.5 10.4-17.8 16.6 7.2-3.7 14.9-6.5 22.8-8.4-4 7.1-7.2 14.8-9.4 22.8 3.7-7.2 6.5-14.9 8.4-22.8 4.8 6.5 10.4 12.5 16.6 17.8-3.7-7.2-6.5-14.9-8.4-22.8 7.1 4 14.8 7.2 22.8 9.4-7.2-3.7-14.9-6.5-22.8-8.4 6.5-4.8 12.5-10.4 17.8-16.6-7.2 3.7-14.9 6.5-22.8 8.4 4-7.1 7.2-14.8 9.4-22.8-3.7 7.2-6.5 14.9-8.4 22.8z" />
          </svg>
          <span className="inline-block px-3 sm:px-4 py-1 rounded-full bg-teal-50 text-teal-600 text-xs sm:text-sm font-medium mb-4">
            Coming Soon
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-teal-600 to-teal-500 bg-clip-text text-transparent">
            Be First in Line ✨
          </h2>
        </div>
        
        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto mb-6 sm:mb-8 px-4">
          Join our exclusive beta waitlist and be among the first to experience the future of personalized skincare
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 sm:mb-20">
          <a 
            href="#waitlist-section" 
            onClick={scrollToWaitlist} 
            className="relative transition-all duration-300 hover:scale-105 hover:-rotate-1 group"
          >
            <div className="relative h-[54px] w-[180px]">
              <Image
                src="/app-store-badge.svg"
                alt="Download on the App Store"
                fill
                className="object-contain filter brightness-90 rounded-lg"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-black/40 to-black/40 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-white text-sm font-medium">Coming Soon</span>
              </div>
            </div>
          </a>
          <a 
            href="#waitlist-section" 
            onClick={scrollToWaitlist} 
            className="relative transition-all duration-300 hover:scale-105 hover:rotate-1 group"
          >
            <div className="relative h-[54px] w-[180px]">
              <Image
                src="/google-play-badge.svg"
                alt="Get it on Google Play"
                fill
                className="object-contain filter brightness-90 rounded-lg"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-black/40 to-black/40 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-white text-sm font-medium">Coming Soon</span>
              </div>
            </div>
          </a>
        </div>

        <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-3 sm:mb-4 bg-gradient-to-r from-teal-600 to-teal-500 bg-clip-text text-transparent">
          Early Access Feedback 💖
        </h3>
        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto mb-8 sm:mb-12">
          Here&apos;s what our beta testers are saying
        </p>

        {/* Testimonials Carousel with updated styling */}
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-1000 ease-out max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            onTouchStart={(e) => {
              const touch = e.touches[0];
              setTouchStart(touch.clientX);
            }}
            onTouchMove={(e) => {
              if (touchStart === null) return;
              const touch = e.touches[0];
              const diff = touchStart - touch.clientX;
              
              // Only prevent default if significant movement
              if (Math.abs(diff) > 5) {
                e.preventDefault();
              }
            }}
            onTouchEnd={(e) => {
              if (touchStart === null) return;
              const touch = e.changedTouches[0];
              const diff = touchStart - touch.clientX;
              
              // Threshold for swipe - 50px
              if (Math.abs(diff) > 50) {
                if (diff > 0 && activeIndex < testimonials.length - 1) {
                  setActiveIndex(activeIndex + 1);
                } else if (diff < 0 && activeIndex > 0) {
                  setActiveIndex(activeIndex - 1);
                }
              }
              setTouchStart(null);
            }}
          >
            {visibleTestimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="w-full flex-shrink-0 px-4"
              >
                <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] h-full border border-slate-100">
                  <div className="flex items-center mb-4">
                    <div className="relative w-10 sm:w-12 h-10 sm:h-12">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.author}
                        fill
                        className="rounded-full object-cover border-2 border-white shadow-md"
                      />
                    </div>
                    <div className="ml-3 sm:ml-4 text-left flex-1">
                      <div className="flex items-center justify-between">
                        <p className="font-medium text-slate-900 text-sm sm:text-base">{testimonial.author}</p>
                        <div className="flex items-center">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <svg
                              key={i}
                              className="w-3 h-3 sm:w-4 sm:h-4 text-amber-400"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-500">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="inline-block px-2 sm:px-3 py-1 rounded-full bg-teal-50 text-teal-600 text-xs font-medium mb-3 sm:mb-4">
                    {testimonial.tag}
                  </div>
                  <blockquote className="text-sm sm:text-base text-slate-700 leading-relaxed italic">
                    &ldquo;{testimonial.text}&rdquo;
                  </blockquote>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Dots with updated styling */}
          <div className="flex justify-center gap-1.5 sm:gap-2 mt-6 sm:mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex 
                    ? 'bg-teal-500 w-4 sm:w-6' 
                    : 'bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0, 0) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}; 