'use client';

import { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { FeatureSection } from './components/FeatureSection';
import { Footer } from './components/Footer';
import { CallToAction } from './components/CallToAction';
import { HowItWorks } from './components/HowItWorks';
import { ComparisonTable } from './components/ComparisonTable';
import { AppStoreSection } from './components/AppStoreSection';
import { PricingSection } from './components/PricingSection';

export default function Page() {
    const [isVisible, setIsVisible] = useState(false);
    const [waitlistCount, setWaitlistCount] = useState(13192);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsVisible(true);
        setIsLoading(false);

        // Simulate waitlist count increasing occasionally
        const interval = setInterval(() => {
            setWaitlistCount((prev) => prev + 1);
        }, 30000);

        return () => clearInterval(interval);
    }, []);
    
    if (isLoading) {
        return (
            <div className="fixed inset-0 bg-[#0A0A0E] flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-[#FF3BFF] animate-ping" />
            </div>
        );
    }

    return (
        <main className="bg-[#0A0A0E]">
            <Navigation />
            <HeroSection isVisible={isVisible} waitlistCount={waitlistCount} />
            <AppStoreSection />
            <PricingSection />
            <CallToAction waitlistCount={waitlistCount} />
            <Footer />
        </main>
    );
}
