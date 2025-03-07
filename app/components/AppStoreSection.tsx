import React, { useEffect, useState } from 'react';

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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000); // Rotate every 5 seconds

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
    <section className="py-16 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-8 text-center">
        <div className="relative inline-block mb-12">
          {/* Laurel Wreath SVG */}
          <svg
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] text-amber-200/30"
            viewBox="0 0 100 100"
            fill="currentColor"
          >
            <path d="M50 5c-1.3 8-3.7 15.8-7 23.2-4.8-6.5-10.4-12.5-16.6-17.8 3.7 7.2 6.5 14.9 8.4 22.8-7.1-4-14.8-7.2-22.8-9.4 7.2 3.7 14.9 6.5 22.8 8.4-6.5 4.8-12.5 10.4-17.8 16.6 7.2-3.7 14.9-6.5 22.8-8.4-4 7.1-7.2 14.8-9.4 22.8 3.7-7.2 6.5-14.9 8.4-22.8 4.8 6.5 10.4 12.5 16.6 17.8-3.7-7.2-6.5-14.9-8.4-22.8 7.1 4 14.8 7.2 22.8 9.4-7.2-3.7-14.9-6.5-22.8-8.4 6.5-4.8 12.5-10.4 17.8-16.6-7.2 3.7-14.9 6.5-22.8 8.4 4-7.1 7.2-14.8 9.4-22.8-3.7 7.2-6.5 14.9-8.4 22.8z" />
          </svg>
          <h2 className="text-3xl md:text-4xl font-light mb-4 relative">
            Ready to Transform Your Skin? ✨
          </h2>
        </div>
        
        <p className="text-slate-600 max-w-2xl mx-auto mb-8">
          Download our app to start your personalized skincare journey today
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <a href="#waitlist-section" onClick={scrollToWaitlist} className="h-[54px] transition-opacity hover:opacity-90">
            <img
              src="/app-store-badge.svg"
              alt="Download on the App Store"
              className="h-full w-auto"
            />
          </a>
          <a href="#waitlist-section" onClick={scrollToWaitlist} className="h-[54px] transition-opacity hover:opacity-90">
            <img
              src="/google-play-badge.svg"
              alt="Get it on Google Play"
              className="h-full w-auto"
            />
          </a>
        </div>

        <h3 className="text-2xl font-light text-slate-800 mb-4">
          See Why People Love Us 💖
        </h3>
        <p className="text-slate-600 max-w-2xl mx-auto mb-12">
          Join thousands of happy users who have transformed their skincare routine
        </p>

        {/* Testimonials Carousel */}
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-1000 ease-out"
            style={{ transform: `translateX(-${activeIndex * (100 / 3)}%)` }}
          >
            {visibleTestimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="w-full md:w-1/3 flex-shrink-0 px-4"
              >
                <div className="bg-white p-6 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] h-full">
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md"
                    />
                    <div className="ml-4 text-left">
                      <p className="font-medium text-slate-900">{testimonial.author}</p>
                      <p className="text-sm text-slate-500">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="inline-block px-3 py-1 rounded-full bg-teal-50 text-teal-600 text-xs font-medium mb-4">
                    {testimonial.tag}
                  </div>
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 text-amber-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="text-slate-700 leading-relaxed">
                    {testimonial.text}
                  </blockquote>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex 
                    ? 'bg-teal-500 w-4' 
                    : 'bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}; 