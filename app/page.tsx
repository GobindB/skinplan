'use client';

import { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { FeatureSection } from './components/FeatureSection';
import { ProgressChart } from './components/ProgressChart';
import { Footer } from './components/Footer';
import { CallToAction } from './components/CallToAction';
import { HowItWorks } from './components/HowItWorks';
import { ComparisonTable } from './components/ComparisonTable';
import { IsThisForYou } from './components/IsThisForYou';
import { ScienceSection } from './components/ScienceSection';
import { AppStoreSection } from './components/AppStoreSection';
import { PricingSection } from './components/PricingSection';

export default function Page() {
    const [isVisible, setIsVisible] = useState(false);
    const [waitlistCount, setWaitlistCount] = useState(13127);

    useEffect(() => {
        setIsVisible(true);

        // Simulate waitlist count increasing occasionally
        const interval = setInterval(() => {
            setWaitlistCount((prev) => prev + 1);
        }, 30000);

        return () => clearInterval(interval);
    }, []);
    
    return (
        <main>
            <Navigation />
            <HeroSection isVisible={isVisible} waitlistCount={waitlistCount} />
            <AppStoreSection />
            <HowItWorks />
            <ComparisonTable />
            <IsThisForYou />
            <ScienceSection />
            <PricingSection />
            <CallToAction waitlistCount={waitlistCount} />
            <Footer />
        </main>
    );
}
