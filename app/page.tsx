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
import CreatePlanView from './components/CreatePlanView';

export default function Page() {
    const [isVisible, setIsVisible] = useState(false);
    const [waitlistCount, setWaitlistCount] = useState(13192);
    const [isLoading, setIsLoading] = useState(true);
    const [showCreatePlan, setShowCreatePlan] = useState(false);
    const [userEmail, setUserEmail] = useState('');

    useEffect(() => {
        setIsVisible(true);
        setIsLoading(false);

        // Simulate waitlist count increasing occasionally
        const interval = setInterval(() => {
            setWaitlistCount((prev) => prev + 1);
        }, 30000);

        return () => clearInterval(interval);
    }, []);
    
    const handleGetStarted = (email?: string) => {
        if (email) {
            setUserEmail(email);
        }
        setShowCreatePlan(true);
    };
    
    if (isLoading) {
        return (
            <div className="fixed inset-0 bg-[#FFF1E6] flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-[#E68A6C] animate-ping" />
            </div>
        );
    }

    return (
        <main className="bg-[#0A0A0E] overflow-x-hidden relative w-full">
            <Navigation onGetStarted={() => handleGetStarted()} />
            <HeroSection isVisible={isVisible} waitlistCount={waitlistCount} onGetStarted={handleGetStarted} />
            <AppStoreSection />
            <PricingSection onGetStarted={() => handleGetStarted()} />
            <CallToAction waitlistCount={waitlistCount} onGetStarted={handleGetStarted} />
            <Footer />
            {showCreatePlan && (
                <CreatePlanView 
                    onClose={() => setShowCreatePlan(false)} 
                    initialEmail={userEmail}
                />
            )}
        </main>
    );
}
