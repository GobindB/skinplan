import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Head from 'next/head';

const testimonials = [
  {
    text: "This AI-powered skincare planner transformed my routine. The smart recommendations and daily planning features helped me achieve consistent, visible results! 🌟",
    author: "Sarah M.",
    role: "Early Access User",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    tag: "AI Planning"
  },
  {
    text: "The personalized skincare calendar adapts to my skin's needs. It's like having a dermatologist in my pocket that adjusts my routine as my skin changes!",
    author: "Michael K.",
    role: "Beta Tester",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    tag: "Smart Planning"
  },
  {
    text: "The AI tracking system helps me manage my skincare progress. The detailed analytics and progress photos show real improvement! 📈",
    author: "Jessica L.",
    role: "Early Access User",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    tag: "Progress Tracking"
  },
  {
    text: "The intelligent ingredient analysis and routine management features are game-changing. Perfect for organizing complex skincare routines!",
    author: "David R.",
    role: "Premium Member",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    tag: "Smart Analysis"
  },
  {
    text: "Best skincare management app! The AI calendar and smart reminders keep my routine organized. Perfect for busy professionals! ⭐",
    author: "Emma T.",
    role: "Beta Tester",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    tag: "Routine Planning"
  },
  {
    text: "The AI-powered community features match you with users having similar skin concerns. Great for personalized skincare advice!",
    author: "Alex W.",
    role: "Premium Member",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/6.jpg",
    tag: "AI Community"
  }
];

const betaUsers = [
  { image: "https://randomuser.me/api/portraits/women/4.jpg" },
  { image: "https://randomuser.me/api/portraits/men/5.jpg" },
  { image: "https://randomuser.me/api/portraits/women/6.jpg" },
  { image: "https://randomuser.me/api/portraits/men/7.jpg" },
];

// SEO Schema for JSON-LD
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  "name": "AI-Powered Skincare Planning & Management App",
  "applicationCategory": "HealthAndFitnessApplication",
  "operatingSystem": ["iOS", "Android"],
  "description": "Revolutionary AI-powered skincare planning and management app that creates personalized routines, tracks progress, and provides smart recommendations for your unique skin needs.",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "ratingCount": "13214",
    "bestRating": "5",
    "worstRating": "1"
  },
  "featureList": [
    "AI-powered skincare planning",
    "Smart routine management",
    "Progress tracking and analytics",
    "Personalized skincare calendar",
    "Ingredient analysis",
    "Smart reminders and notifications",
    "Community features and recommendations"
  ]
};

export const AppStoreSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Head>
        <title>AI Skincare Planner | Smart Routine Management & Progress Tracking App</title>
        <meta name="description" content="Transform your skincare routine with AI-powered planning, smart management, and progress tracking. Get personalized recommendations, ingredient analysis, and a custom calendar for your unique skin needs." />
        <meta name="keywords" content="AI skincare planner, skincare management app, skincare routine tracker, personalized skincare calendar, smart skincare planning, AI beauty assistant, skincare progress tracking, ingredient analysis app" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="AI Skincare Planner | Smart Routine Management App" />
        <meta property="og:description" content="Revolutionary AI-powered skincare planning app with smart routine management, progress tracking, and personalized recommendations." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/og-image.jpg" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Skincare Planner | Smart Beauty Management" />
        <meta name="twitter:description" content="Transform your skincare routine with AI-powered planning and smart management features." />
        <meta name="twitter:image" content="/twitter-image.jpg" />
        
        {/* Additional Meta Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://yourdomain.com/app" />
        
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <section id="app-store" className="relative py-20 bg-gradient-to-b from-[#FFE4D6] via-[#FFF1E6] to-white overflow-x-hidden">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
            {/* Left Column - Content */}
            <div className="flex-1 text-center lg:text-left w-full max-w-xl mx-auto lg:mx-0">
              {/* Beta Tag */}
              <div className="inline-flex items-center gap-3 px-3 py-1.5 rounded-full bg-[#E8D5C8]/30 border border-[#E8C5B0] mb-8 max-w-full overflow-hidden">
                <div className="flex items-center gap-2 overflow-hidden">
                  <div className="w-2 h-2 rounded-full bg-[#E8855B] animate-pulse flex-shrink-0" />
                  <div className="flex items-center -space-x-1.5 flex-shrink-0">
                    {betaUsers.map((user, index) => (
                      <div key={index} className="relative w-5 h-5 rounded-full border-2 border-[#FFF1E6] overflow-hidden flex-shrink-0">
                        <Image
                          src={user.image}
                          alt=""
                          fill
                          className="rounded-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <span className="text-sm font-medium text-[#5C3D2E] whitespace-nowrap truncate">
                    Join 13,214 others in smart skincare planning!
                  </span>
                </div>
              </div>

              {/* Main Headline */}
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#E68A6C] via-[#D4A092] to-[#B86B4C]">
                  AI-Powered Skincare Planning
                </span>
                <span className="block text-[#2C1810] mt-2">
                  Your Smart Beauty Assistant ✨
                </span>
              </h2>

              <p className="text-lg text-[#86604A] mb-8">
                Experience revolutionary skincare management with AI-driven personalization. Our smart planning system creates the perfect routine for your unique skin needs.
              </p>

              {/* App Store Buttons */}
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 mb-10 w-full">
                <button className="flex items-center justify-center sm:justify-start gap-3 px-5 py-2.5 bg-[#E8D5C8]/30 rounded-lg border border-[#E8C5B0] hover:bg-[#E8D5C8]/50 transition-colors">
                  <svg className="w-7 h-7 text-[#5C3D2E]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-xs text-[#86604A]">Coming Soon on</div>
                    <div className="text-sm font-semibold text-[#5C3D2E]">App Store</div>
                  </div>
                </button>

                <button className="flex items-center justify-center sm:justify-start gap-3 px-5 py-2.5 bg-[#E8D5C8]/30 rounded-lg border border-[#E8C5B0] hover:bg-[#E8D5C8]/50 transition-colors">
                  <svg className="w-7 h-7 text-[#5C3D2E]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3 20.5V3.5C3 2.91 3.34 2.39 3.84 2.15L13.69 12L3.84 21.85C3.34 21.6 3 21.09 3 20.5ZM16.81 15.12L6.05 21.34L14.54 12.85L16.81 15.12ZM20.16 12.86C20.5 13.07 20.75 13.5 20.75 14C20.75 14.5 20.53 14.9 20.18 15.11L17.89 16.5L15.39 14L17.89 11.5L20.16 12.86ZM6.05 2.66L16.81 8.88L14.54 11.15L6.05 2.66Z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-xs text-[#86604A]">Coming Soon on</div>
                    <div className="text-sm font-semibold text-[#5C3D2E]">Play Store</div>
                  </div>
                </button>
              </div>

              {/* Feature Tags */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                {['AI-Powered Planning', 'Smart Reminders', 'Progress Tracking', 'Personalized AI'].map((tag) => (
                  <span key={tag} className="px-3 py-1 text-sm font-medium text-[#5C3D2E] bg-[#E8D5C8]/30 rounded-full border border-[#E8C5B0]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Column - Testimonials */}
            <div className="lg:w-[400px] w-full">
              <div className="relative">
                {/* Testimonial Card */}
                <div className="p-6 bg-white/95 backdrop-blur-sm rounded-2xl shadow-[0_8px_32px_-4px_rgba(139,69,19,0.1)] border border-[#E8C5B0]/20">
                  {/* Testimonial Header */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#E8C5B0]/20">
                      <Image
                        src={testimonials[activeIndex].image}
                        alt=""
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-base font-medium text-[#2C1810]">
                        {testimonials[activeIndex].author}
                      </h4>
                      <p className="text-sm text-[#86604A]">
                        {testimonials[activeIndex].role}
                      </p>
                    </div>
                    <div className="ml-auto">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#E8D5C8]/30 border border-[#E8C5B0]">
                        <span className="text-xs font-medium text-[#5C3D2E]">
                          {testimonials[activeIndex].tag}
                        </span>
                      </span>
                    </div>
                  </div>

                  {/* Testimonial Content */}
                  <div className="relative">
                    <svg className="absolute -top-2 -left-2 w-8 h-8 text-[#E8C5B0]/40" fill="currentColor" viewBox="0 0 32 32">
                      <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H6c0-2.2 1.8-4 4-4V8zm16 0c-3.3 0-6 2.7-6 6v10h10V14h-8c0-2.2 1.8-4 4-4V8z"/>
                    </svg>
                    <p className="text-[#5C3D2E] text-lg leading-relaxed pl-6">
                      {testimonials[activeIndex].text}
                    </p>
                  </div>

                  {/* Rating */}
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-5 h-5 text-[#E8855B]"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <div className="flex items-center gap-2">
                      {testimonials.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setActiveIndex(index)}
                          className={`w-2 h-2 rounded-full transition-all ${
                            index === activeIndex
                              ? 'bg-[#E8855B] w-4'
                              : 'bg-[#E8C5B0]/40 hover:bg-[#E8C5B0]'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#FFE4D6] rounded-full opacity-40 blur-xl" />
                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-[#FFD6C4] rounded-full opacity-30 blur-xl" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}; 