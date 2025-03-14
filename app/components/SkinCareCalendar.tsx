'use client';

import React, { useState, useMemo, memo, useEffect } from 'react';
import { motion, AnimatePresence, useDragControls } from 'framer-motion';
import { 
  ChevronRightIcon, 
  SparklesIcon, 
  BeakerIcon, 
  ChartBarIcon, 
  ExclamationCircleIcon, 
  LightBulbIcon,
  CalendarIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  StarIcon,
  ArrowTrendingUpIcon,
  EnvelopeIcon,
  DocumentCheckIcon,
  BellIcon,
  ClockIcon,
  SunIcon,
  MoonIcon,
  CheckIcon
} from '@heroicons/react/24/outline';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import CreatePlanView from './CreatePlanView';

interface Product {
  name: string;
  koreanName: string;
  description: string;
  type: 'cleanser' | 'toner' | 'essence' | 'serum' | 'moisturizer' | 'sunscreen' | 'mask';
}

interface Step {
  order: number;
  name: string;
  koreanName: string;
  products: Product[];
  time: string;
}

interface Routine {
  type: 'morning' | 'evening';
  steps: Step[];
}

interface InsightCard {
  type: 'warning' | 'suggestion' | 'insight' | 'progress';
  title: string;
  description: string;
  impact: 'high' | 'medium' | 'low';
  source: 'ai' | 'expert' | 'research';
  category: 'routine' | 'product' | 'lifestyle' | 'progress';
}

interface RoutineStep {
  id: string;
  name: string;
  time: string;
  product: {
    name: string;
    price: number;
    rating: number;
    ingredients: string[];
    warnings: string[];
    alternatives: Array<{
      name: string;
      price: number;
      reason: string;
    }>;
  };
  insights: InsightCard[];
}

interface Adaptation {
  reason: string;
  changes: string[];
  dataPoints: number;
}

interface DayRoutine {
  date: string;
  morning: RoutineStep[];
  evening: RoutineStep[];
  insights: InsightCard[];
  adaptations: Adaptation[];
}

const koreanSkincarePlans = [
  {
    name: 'Complete Skincare',
    duration: '30 days',
    description: 'Experience a full skincare routine customized for your needs',
    benefits: ['Deep cleansing', 'Intense hydration', 'Brightening', 'Anti-aging']
  },
  {
    name: 'Barrier Repair',
    duration: '14 days',
    description: 'Focus on repairing and strengthening your skin barrier',
    benefits: ['Reduced sensitivity', 'Balanced moisture', 'Calmer skin']
  },
  {
    name: 'Glow Boost',
    duration: '21 days',
    description: 'Achieve that coveted healthy skin glow',
    benefits: ['Radiant complexion', 'Even tone', 'Smooth texture']
  }
];

interface CalendarDayProps {
  date: Date;
  routines: Array<{
    type: 'morning' | 'evening';
    steps: Array<{
      order: number;
      name: string;
      koreanName: string;
      products: Product[];
      time: string;
    }>;
  }>;
  isSelected: boolean;
  onClick: () => void;
}

// Memoize child components
const CalendarDay = memo<CalendarDayProps>(({ date, routines, isSelected, onClick }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`relative p-4 rounded-[24px] cursor-pointer transition-colors duration-300 ${
        isSelected ? 'bg-[#FFF8F3] border border-[#E8D5C8]' : 'hover:bg-[#FFF8F3]/50'
      }`}
    >
      <div className="flex items-center justify-between mb-4">
        <span className="text-lg font-medium text-[#5C3D2E]">{date.toLocaleDateString()}</span>
        <ChevronRightIcon className={`w-5 h-5 text-[#86604A] transition-transform duration-300 ${isSelected ? 'rotate-90' : ''}`} />
    </div>
      
      <AnimatePresence>
        {isSelected && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
      {routines.map((routine, index) => (
              <div key={index} className="mb-6 last:mb-0">
                <h4 className="text-sm font-medium text-[#86604A] mb-3">
                  {routine.type === 'morning' ? '아침 케어 • Morning Care' : '저녁 케어 • Evening Care'}
                </h4>
                {routine.steps.map((step, stepIndex) => (
                  <motion.div
                    key={stepIndex}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: stepIndex * 0.1 }}
                    className="flex items-start space-x-3 mb-2 last:mb-0"
                  >
                    <span className="text-sm text-[#86604A]/40">{step.order}</span>
                    <div>
                      <p className="text-sm font-medium text-[#5C3D2E]">
                        {step.koreanName} • {step.name}
                      </p>
                      <span className="text-xs text-[#86604A]/40">{step.time}</span>
        </div>
                  </motion.div>
      ))}
    </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
});

// Demo data to showcase the functionality
const demoInsights: InsightCard[] = [
  {
    type: 'warning',
    title: 'Product Conflict Detected',
    description: 'Using Vitamin C with Retinol can reduce effectiveness. AI suggests separating these into AM/PM routines.',
    impact: 'high',
    source: 'ai',
    category: 'product'
  },
  {
    type: 'progress',
    title: 'Skin Barrier Progress',
    description: 'Hydration levels up 32% this week. Continue with current ceramide routine for optimal results.',
    impact: 'high',
    source: 'ai',
    category: 'progress'
  },
  {
    type: 'insight',
    title: 'Weather Impact Alert',
    description: 'Humidity dropping next week. Consider adding a hydrating toner to prevent moisture loss.',
    impact: 'medium',
    source: 'ai',
    category: 'routine'
  },
  {
    type: 'suggestion',
    title: 'Routine Optimization',
    description: '92% of users saw better results when applying products on damp skin. Try this technique!',
    impact: 'medium',
    source: 'research',
    category: 'routine'
  },
  {
    type: 'progress',
    title: 'Consistency Achievement',
    description: 'You have completed your evening routine 7 days in a row! This consistency is key for results.',
    impact: 'high',
    source: 'ai',
    category: 'progress'
  },
  {
    type: 'insight',
    title: 'Product Synergy',
    description: 'Your niacinamide serum works great with your current moisturizer. Keep this combination!',
    impact: 'medium',
    source: 'expert',
    category: 'product'
  }
];

const demoDayRoutine: DayRoutine = {
  date: 'Today',
  morning: [
    {
      id: '1',
      name: 'Oil Cleanser',
      time: '7:00 AM',
      product: {
        name: 'Gentle Oil Cleanser',
        price: 24.99,
        rating: 4.8,
        ingredients: ['Jojoba Oil', 'Green Tea Extract', 'Vitamin E'],
        warnings: [],
        alternatives: [
          {
            name: 'Sensitive Skin Oil Cleanser',
            price: 19.99,
            reason: 'Better for sensitive skin, fragrance-free'
          }
        ]
      },
      insights: [{
        type: 'suggestion',
        title: 'Application Tip',
        description: 'Massage for 60 seconds to properly break down sunscreen and makeup. Use lukewarm water.',
        impact: 'medium',
        source: 'expert',
        category: 'routine'
      }]
    },
    {
      id: '2',
      name: 'Water Cleanser',
      time: '7:03 AM',
      product: {
        name: 'Hydrating Facial Cleanser',
        price: 18.99,
        rating: 4.7,
        ingredients: ['Ceramides', 'Glycerin', 'Centella Asiatica'],
        warnings: [],
        alternatives: []
      },
      insights: []
    },
    {
      id: '3',
      name: 'Vitamin C Serum',
      time: '7:05 AM',
      product: {
        name: 'Brightening Vitamin C',
        price: 45.99,
        rating: 4.9,
        ingredients: ['15% L-Ascorbic Acid', 'Ferulic Acid', 'Vitamin E'],
        warnings: ['Use within 3 months of opening', 'Keep away from direct sunlight'],
        alternatives: [
          {
            name: 'Gentle Vitamin C Derivative',
            price: 38.99,
            reason: 'More stable, better for sensitive skin'
          }
        ]
      },
      insights: [{
        type: 'warning',
        title: 'Expiration Alert',
        description: 'Your Vitamin C serum was opened 2.5 months ago. Plan to replace within 2 weeks for optimal effectiveness.',
        impact: 'high',
        source: 'ai',
        category: 'product'
      }]
    },
    {
      id: '4',
      name: 'Moisturizer',
      time: '7:08 AM',
      product: {
        name: 'Barrier Repair Cream',
        price: 32.99,
        rating: 4.8,
        ingredients: ['Ceramides', 'Peptides', 'Panthenol'],
        warnings: [],
        alternatives: []
      },
      insights: []
    },
    {
      id: '5',
      name: 'Sunscreen',
      time: '7:10 AM',
      product: {
        name: 'Advanced UV Protection',
        price: 28.99,
        rating: 4.9,
        ingredients: ['Zinc Oxide', 'Titanium Dioxide', 'Niacinamide'],
        warnings: ['Reapply every 2 hours when outdoors'],
        alternatives: []
      },
      insights: [{
        type: 'insight',
        title: 'UV Index Alert',
        description: 'High UV index forecasted today (8/10). Set reminder to reapply sunscreen at 1:00 PM.',
        impact: 'high',
        source: 'ai',
        category: 'lifestyle'
      }]
    }
  ],
  evening: [
    {
      id: '6',
      name: 'Makeup Remover',
      time: '8:00 PM',
      product: {
        name: 'Micellar Water',
        price: 16.99,
        rating: 4.6,
        ingredients: ['Micelles', 'Glycerin', 'Chamomile'],
        warnings: [],
        alternatives: []
      },
      insights: []
    },
    {
      id: '7',
      name: 'Oil Cleanser',
      time: '8:03 PM',
      product: {
        name: 'Gentle Oil Cleanser',
        price: 24.99,
        rating: 4.8,
        ingredients: ['Jojoba Oil', 'Green Tea Extract', 'Vitamin E'],
        warnings: [],
        alternatives: []
      },
      insights: []
    },
    {
      id: '8',
      name: 'Water Cleanser',
      time: '8:06 PM',
      product: {
        name: 'Hydrating Facial Cleanser',
        price: 18.99,
        rating: 4.7,
        ingredients: ['Ceramides', 'Glycerin', 'Centella Asiatica'],
        warnings: [],
        alternatives: []
      },
      insights: []
    },
    {
      id: '9',
      name: 'Retinol Treatment',
      time: '8:10 PM',
      product: {
        name: 'Advanced Retinol 0.5%',
        price: 52.99,
        rating: 4.9,
        ingredients: ['Retinol', 'Peptides', 'Ceramides'],
        warnings: ['Do not use with AHA/BHA', 'Use every other night initially'],
        alternatives: [
          {
            name: 'Gentle Retinol Alternative',
            price: 45.99,
            reason: 'Contains retinyl palmitate, better for beginners'
          }
        ]
      },
      insights: [{
        type: 'progress',
        title: 'Retinol Progress',
        description: 'You have completed 4 weeks of retinol use. Ready to increase frequency to 5 nights per week.',
        impact: 'high',
        source: 'expert',
        category: 'progress'
      }]
    },
    {
      id: '10',
      name: 'Night Cream',
      time: '8:15 PM',
      product: {
        name: 'Recovery Night Cream',
        price: 38.99,
        rating: 4.8,
        ingredients: ['Peptides', 'Niacinamide', 'Ceramides'],
        warnings: [],
        alternatives: []
      },
      insights: [{
        type: 'suggestion',
        title: 'Humidity Alert',
        description: 'Low indoor humidity detected (30%). Apply an extra layer of night cream tonight.',
        impact: 'medium',
        source: 'ai',
        category: 'lifestyle'
      }]
    }
  ],
  insights: [
    {
      type: 'warning',
      title: 'Product Expiration',
      description: 'Your Vitamin C serum will expire in 2 weeks. We will remind you to repurchase next week.',
      impact: 'high',
      source: 'ai',
      category: 'product'
    },
    {
      type: 'progress',
      title: 'Retinol Adaptation',
      description: 'Successfully completed 4-week retinol introduction. Skin barrier strength improved by 45%.',
      impact: 'high',
      source: 'ai',
      category: 'progress'
    },
    {
      type: 'insight',
      title: 'Weather Impact',
      description: 'Humidity dropping to 30% tonight. Added extra hydration step to your evening routine.',
      impact: 'medium',
      source: 'ai',
      category: 'lifestyle'
    },
    {
      type: 'suggestion',
      title: 'Product Synergy',
      description: 'Your ceramide moisturizer pairs well with retinol. This combination reduced irritation for 89% of users.',
      impact: 'medium',
      source: 'research',
      category: 'routine'
    }
  ],
  adaptations: [
    {
      reason: 'Weather Changes',
      changes: ['Added extra moisturizer', 'Increased hydrating toner frequency'],
      dataPoints: 168
    },
    {
      reason: 'Retinol Progress',
      changes: ['Increased retinol frequency', 'Adjusted hydration levels'],
      dataPoints: 720
    }
  ]
};

// Add notification types
const demoNotifications: Array<{
  id: string;
  type: 'reminder' | 'product' | 'insight';
  title: string;
  message: string;
  time: string;
  icon: JSX.Element;
  priority: 'high' | 'medium';
}> = [
  {
    id: 'n1',
    type: 'reminder',
    title: 'Evening Routine',
    message: 'Time to start your evening skincare routine',
    time: '8:00 PM',
    icon: <MoonIcon className="w-5 h-5" />,
    priority: 'high'
  },
  {
    id: 'n2',
    type: 'reminder',
    title: 'Sunscreen Reapplication',
    message: 'UV index is high. Time to reapply sunscreen',
    time: '1:00 PM',
    icon: <SunIcon className="w-5 h-5" />,
    priority: 'high'
  },
  {
    id: 'n3',
    type: 'product',
    title: 'Vitamin C Expiring',
    message: 'Your Vitamin C serum expires in 2 weeks',
    time: 'In 2 weeks',
    icon: <BeakerIcon className="w-5 h-5" />,
    priority: 'medium'
  },
  {
    id: 'n4',
    type: 'insight',
    title: 'Retinol Progress',
    message: 'Ready to increase retinol frequency',
    time: 'Today',
    icon: <ChartBarIcon className="w-5 h-5" />,
    priority: 'medium'
  }
];

const InsightIcon: React.FC<{ type: InsightCard['type'] }> = ({ type }) => {
  switch (type) {
    case 'warning':
      return <ExclamationCircleIcon className="w-5 h-5 text-amber-600" />;
    case 'suggestion':
      return <LightBulbIcon className="w-5 h-5 text-[#E68A6C]" />;
    case 'insight':
      return <SparklesIcon className="w-5 h-5 text-[#B86B4C]" />;
    case 'progress':
      return <ChartBarIcon className="w-5 h-5 text-[#86604A]" />;
    default:
      return null;
  }
};

// Memoize RoutineStep component
const RoutineStep = memo<{ step: RoutineStep }>(({ step }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-2"
    >
      <button 
        onClick={() => setShowDetails(!showDetails)}
        className="w-full flex items-center justify-between p-2 rounded-lg bg-[#FFF8F3] hover:bg-[#E8D5C8]/50 transition-colors border border-[#E8D5C8]"
      >
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-[#E68A6C]" />
          <div className="text-left">
            <h4 className="text-sm font-medium text-[#5C3D2E]">{step.product.name}</h4>
            <p className="text-xs text-[#86604A]/60">{step.time}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {step.insights.length > 0 && (
            <span className={`text-xs px-2 py-0.5 rounded-full ${
              step.insights[0].type === 'warning' 
                ? 'bg-amber-100 text-amber-600'
                : 'bg-[#E8D5C8] text-[#B86B4C]'
            }`}>
              {step.insights[0].type === 'warning' ? '!' : '✓'}
            </span>
          )}
          <ChevronRightIcon className={`w-4 h-4 text-[#86604A] transition-transform ${showDetails ? 'rotate-90' : ''}`} />
        </div>
      </button>

      <AnimatePresence>
        {showDetails && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="px-3"
          >
            <div className="flex flex-wrap gap-1.5 mb-2">
              {step.product.ingredients.map((ingredient, i) => (
                <span key={i} className="text-xs px-2 py-0.5 rounded-full bg-white border border-[#E8D5C8] text-[#86604A]">
                  {ingredient}
                </span>
              ))}
            </div>

            {step.product.warnings.length > 0 && (
              <div className="p-1.5 rounded-lg bg-amber-50 border border-amber-200 mb-1.5">
                <div className="flex items-start gap-1.5">
                  <ExclamationCircleIcon className="w-3.5 h-3.5 text-amber-600 mt-0.5" />
                  <div className="flex-1">
                    {step.product.warnings.map((warning, i) => (
                      <p key={i} className="text-[10px] text-amber-700">{warning}</p>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {step.insights.map((insight, i) => (
              <div key={i} className="p-1.5 rounded-lg bg-white border border-[#E8D5C8] mb-1.5 last:mb-0">
                <div className="flex items-start gap-1.5">
                  <InsightIcon type={insight.type} />
                  <p className="text-[10px] text-[#86604A]">{insight.description}</p>
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
});

interface CalendarDay {
  date: Date;
  hasRoutine: boolean;
  hasInsights: boolean;
  progress: number;
  isToday?: boolean;
}

export default function SkinCareCalendar() {
  const dragControls = useDragControls();
  const [state, setState] = useState({
    view: 'calendar' as 'calendar' | 'routine' | 'insights' | 'plans',
    currentMonth: new Date(),
    selectedDay: new Date(),
    showCreatePlan: false
  });

  const updateState = (updates: Partial<typeof state>) => {
    setState(prev => ({ ...prev, ...updates }));
  };

  const generateCalendarDays = (): CalendarDay[] => {
    const days: CalendarDay[] = [];
    const start = new Date(state.currentMonth.getFullYear(), state.currentMonth.getMonth(), 1);
    const end = new Date(state.currentMonth.getFullYear(), state.currentMonth.getMonth() + 1, 0);
    
    // Add empty days for padding
    const firstDayOfWeek = start.getDay();
    for (let i = 0; i < firstDayOfWeek; i++) {
      days.push({
        date: new Date(start.getTime() - ((firstDayOfWeek - i) * 24 * 60 * 60 * 1000)),
        hasRoutine: false,
        hasInsights: false,
        progress: 0
      });
    }
    
    // Add actual days
    for (let date = new Date(start); date <= end; date.setDate(date.getDate() + 1)) {
      days.push({
        date: new Date(date),
        hasRoutine: Math.random() > 0.2, // Demo data
        hasInsights: Math.random() > 0.7,
        progress: Math.floor(Math.random() * 100),
        isToday: new Date().toDateString() === date.toDateString()
      });
    }
    return days;
  };

  // Use useMemo with correct dependency
  const calendarDays = useMemo(() => generateCalendarDays(), [state.currentMonth]);

  const navigateMonth = (direction: 'prev' | 'next') => {
    setState(prev => {
      const newDate = new Date(prev.currentMonth);
      if (direction === 'prev') {
        newDate.setMonth(prev.currentMonth.getMonth() - 1);
      } else {
        newDate.setMonth(prev.currentMonth.getMonth() + 1);
      }
      return { ...prev, currentMonth: newDate };
    });
  };

  return (
    <div className="relative w-full flex items-center justify-center">
      {/* Decorative Elements */}
      <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#FFE4D6] rounded-full opacity-40 blur-xl" />
      <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-[#FFD6C4] rounded-full opacity-30 blur-xl" />
      
      {/* Main Calendar Container */}
      <div className="relative bg-white/95 backdrop-blur-sm rounded-[32px] shadow-[0_8px_32px_-4px_rgba(139,69,19,0.1)] border border-[#E8C5B0]/20 overflow-hidden flex flex-col h-[700px]">
        {/* Header with Tabs */}
        <div className="bg-gradient-to-b from-[#2C1810] via-[#3D2415] to-[#4A2B1A] relative z-10 flex-none rounded-b-[32px] shadow-lg">
          {/* Soft Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#E8855B]/20 to-transparent opacity-50" />
          
          <div className="px-6 pt-6 pb-3 relative">
            <div className="flex flex-col items-center">
              <h1 className="text-xl font-medium text-[#FAF3EB] tracking-tight">Your Skincare Journey</h1>
              <p className="text-sm text-[#E8C5B0] mt-1 tracking-wide">In your pocket</p>
              {/* Interactive Demo Badge */}
              <div className="mt-2.5 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#4CAF50]/20 border border-[#4CAF50]/30 backdrop-blur-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-[#4CAF50] animate-pulse" />
                <span className="text-xs text-[#4CAF50] font-medium tracking-wide">Try this interactive preview</span>
              </div>
            </div>
          </div>
          
          {/* Navigation Tabs */}
          <div className="flex px-4 gap-2 py-2 relative">
            {(['calendar', 'routine', 'insights', 'plans'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => updateState({ view: tab })}
                className={`relative flex-1 py-2 px-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                  state.view === tab
                    ? 'bg-gradient-to-br from-[#E8855B] to-[#CC4B00] text-white shadow-lg transform -translate-y-0.5'
                    : 'text-[#E8C5B0] hover:text-white hover:bg-white/10'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto overscroll-y-contain px-4 pt-6 pb-24 bg-transparent">
          {state.view === 'calendar' && (
            <div className="space-y-6">
              {/* Month Navigation */}
              <div className="flex items-center justify-between">
                <button 
                  onClick={() => navigateMonth('prev')}
                  className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/50 hover:bg-white/80 active:bg-white text-[#2C1810] transition-all duration-300 shadow-sm"
                >
                  <ArrowLeftIcon className="w-5 h-5" />
                </button>
                <h2 className="text-lg font-medium text-[#2C1810]">
                  {state.currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' })}
                </h2>
                <button 
                  onClick={() => navigateMonth('next')}
                  className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/50 hover:bg-white/80 active:bg-white text-[#2C1810] transition-all duration-300 shadow-sm"
                >
                  <ArrowRightIcon className="w-5 h-5" />
                </button>
              </div>

              {/* Calendar Grid */}
              <div>
                <div className="grid grid-cols-7 gap-1 text-center mb-2">
                  {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
                    <div key={i} className="text-sm font-medium text-[#8B4513] py-2">
                      {day}
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-7 gap-1.5">
                  {calendarDays.map((day, i) => (
                    <motion.button
                      key={i}
                      onClick={() => updateState({ selectedDay: day.date })}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`aspect-square relative rounded-2xl transition-all duration-300 ${
                        day.date.getMonth() !== state.currentMonth.getMonth()
                          ? 'opacity-30'
                          : ''
                      } ${
                        state.selectedDay?.toDateString() === day.date.toDateString()
                          ? 'bg-[#E8855B] text-white shadow-lg transform -translate-y-0.5'
                          : day.hasRoutine
                            ? 'bg-white shadow-sm hover:shadow-md hover:-translate-y-0.5'
                            : 'hover:bg-white/50'
                      }`}
                    >
                      <div className="w-full h-full rounded-2xl flex flex-col items-center justify-center">
                        <span className={`text-base ${
                          state.currentMonth.getMonth() !== day.date.getMonth()
                            ? 'text-[#8B4513]/30'
                            : day.isToday
                              ? 'font-bold'
                              : state.selectedDay?.toDateString() === day.date.toDateString()
                                ? 'text-white font-medium'
                                : 'text-[#2C1810]'
                        }`}>
                          {day.date.getDate()}
                        </span>
                        {day.hasRoutine && (
                          <div className="flex gap-0.5 mt-1">
                            <div className="w-1 h-1 rounded-full bg-[#E8855B]" />
                            {day.hasInsights && (
                              <div className="w-1 h-1 rounded-full bg-[#8B4513]" />
                            )}
                          </div>
                        )}
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Selected Day View */}
              {state.selectedDay && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-4"
                >
                  <div className="p-4 rounded-2xl bg-white shadow-lg border border-[#E8C5B0]/20">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-medium text-[#2C1810]">
                        {state.selectedDay.toLocaleDateString('en-US', { 
                          weekday: 'long',
                          month: 'short',
                          day: 'numeric'
                        })}
                      </h3>
                      <button 
                        onClick={() => updateState({ view: 'routine' })}
                        className="text-sm text-[#E8855B] font-medium hover:text-[#8B4513] transition-colors"
                      >
                        View Full Routine →
                      </button>
                    </div>
                    <div className="space-y-3">
                      {demoDayRoutine.morning.map((step) => (
                        <div key={step.id} className="flex items-center gap-3 p-3 rounded-xl bg-[#FAF3EB] border border-[#E8C5B0]/20">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#E8855B]" />
                          <span className="text-sm font-medium text-[#2C1810] flex-1">{step.name}</span>
                          <span className="text-xs text-[#8B4513]">{step.time}</span>
                          {step.insights.length > 0 && (
                            <span className={`text-xs px-2 py-0.5 rounded-full ${
                              step.insights[0].type === 'warning' 
                                ? 'bg-[#FFDDC9] text-[#CC4B00]'
                                : 'bg-[#E8C5B0] text-[#2C1810]'
                            }`}>
                              {step.insights[0].type === 'warning' ? '!' : '✓'}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Today's Notifications */}
                  <div className="p-4 rounded-2xl bg-white shadow-lg border border-[#E8C5B0]/20">
                    <div className="flex items-center gap-3 mb-4">
                      <BellIcon className="w-5 h-5 text-[#E8855B]" />
                      <h3 className="text-lg font-medium text-[#2C1810]">Today's Reminders</h3>
                    </div>
                    <div className="space-y-3">
                      {demoNotifications.slice(0, 2).map((notification) => (
                        <div key={notification.id} className="flex items-center gap-3 p-3 rounded-xl bg-[#FAF3EB] border border-[#E8C5B0]/20">
                          <div className="w-8 h-8 rounded-xl bg-white border border-[#E8C5B0]/20 flex items-center justify-center">
                            {React.cloneElement(notification.icon, { className: "w-5 h-5 text-[#8B4513]" })}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-[#2C1810] truncate">{notification.title}</p>
                            <p className="text-xs text-[#8B4513]">{notification.time}</p>
                          </div>
                          {notification.priority === 'high' && (
                            <div className="w-2 h-2 rounded-full bg-[#E8855B] animate-pulse" />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-2xl bg-white shadow-lg border border-[#E8C5B0]/20">
                      <div className="flex items-center gap-3 mb-2">
                        <StarIcon className="w-5 h-5 text-[#E8855B]" />
                        <h3 className="text-sm font-medium text-[#2C1810]">Streak</h3>
                      </div>
                      <div className="flex items-baseline gap-1">
                        <span className="text-2xl font-bold text-[#2C1810]">7</span>
                        <span className="text-sm text-[#8B4513]">days</span>
                      </div>
                    </div>
                    <div className="p-4 rounded-2xl bg-white shadow-lg border border-[#E8C5B0]/20">
                      <div className="flex items-center gap-3 mb-2">
                        <ArrowTrendingUpIcon className="w-5 h-5 text-[#E8855B]" />
                        <h3 className="text-sm font-medium text-[#2C1810]">Progress</h3>
                      </div>
                      <div className="flex items-baseline gap-1">
                        <span className="text-2xl font-bold text-[#2C1810]">+12%</span>
                        <span className="text-sm text-[#8B4513]">week</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          )}

          {state.view === 'routine' && (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-white shadow-lg border border-[#E8C5B0]/20">
                <h3 className="text-lg font-medium text-[#2C1810] mb-4">Morning Routine</h3>
                <div className="space-y-3">
                  {demoDayRoutine.morning.map((step) => (
                    <RoutineStep key={step.id} step={step} />
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white shadow-lg border border-[#E8C5B0]/20">
                <h3 className="text-lg font-medium text-[#2C1810] mb-4">Evening Routine</h3>
                <div className="space-y-3">
                  {demoDayRoutine.evening.map((step) => (
                    <RoutineStep key={step.id} step={step} />
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white shadow-lg border border-[#E8C5B0]/20">
                <div className="flex items-center gap-3 mb-4">
                  <SparklesIcon className="w-5 h-5 text-[#E8855B]" />
                  <h3 className="text-lg font-medium text-[#2C1810]">Why This Routine</h3>
                </div>
                <div className="space-y-4">
                  <p className="text-sm text-[#8B4513] leading-relaxed">
                    Based on your skin's sensitivity to retinol and recent progress with barrier repair,
                    we've adjusted your routine to focus on gentle hydration in the morning and repair at night.
                  </p>
                  <div className="p-3 rounded-xl bg-[#FAF3EB] border border-[#E8C5B0]/20">
                    <div className="flex items-start gap-3">
                      <ChartBarIcon className="w-5 h-5 text-[#E8855B] mt-0.5" />
                      <p className="text-sm text-[#8B4513]">87% of users with similar skin profiles saw improvement with this combination</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {state.view === 'insights' && (
            <div className="space-y-4">
              {/* Stats Cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-white shadow-lg border border-[#E8C5B0]/20">
                  <div className="flex items-center gap-3 mb-2">
                    <StarIcon className="w-5 h-5 text-[#E8855B]" />
                    <h3 className="text-base font-medium text-[#2C1810]">Weekly Score</h3>
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-bold text-[#2C1810]">92</span>
                    <span className="text-sm text-[#8B4513]">/ 100</span>
                  </div>
                </div>
                <div className="p-4 rounded-2xl bg-white shadow-lg border border-[#E8C5B0]/20">
                  <div className="flex items-center gap-3 mb-2">
                    <ChartBarIcon className="w-5 h-5 text-[#E8855B]" />
                    <h3 className="text-base font-medium text-[#2C1810]">Improvements</h3>
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-bold text-[#2C1810]">4</span>
                    <span className="text-sm text-[#8B4513]">areas</span>
                  </div>
                </div>
              </div>

              {demoInsights.map((insight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="p-4 rounded-2xl bg-white shadow-lg border border-[#E8C5B0]/20"
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5">
                      <InsightIcon type={insight.type} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <h4 className="text-base font-medium text-[#2C1810]">{insight.title}</h4>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          insight.impact === 'high'
                            ? 'bg-[#FFDDC9] text-[#CC4B00]'
                            : 'bg-[#E8C5B0] text-[#2C1810]'
                        }`}>
                          {insight.impact.toUpperCase()}
                        </span>
                      </div>
                      <p className="text-sm text-[#8B4513] mb-2">{insight.description}</p>
                      <span className="text-xs px-2 py-1 rounded-full bg-[#FAF3EB] text-[#8B4513] inline-block">
                        {insight.source === 'ai' ? '🤖 AI Analysis' : 
                         insight.source === 'expert' ? '👩‍⚕️ Expert Review' : 
                         '📊 Research Based'}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {state.view === 'plans' && (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium text-[#2C1810]">Available Plans</h3>
                <button className="text-sm text-[#E8855B] font-medium hover:text-[#8B4513] transition-colors">
                  Get Free 7-Day Plan →
                </button>
              </div>

              {koreanSkincarePlans.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-4 rounded-2xl bg-white shadow-lg border border-[#E8C5B0]/20"
                >
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="text-base font-medium text-[#2C1810]">{plan.name}</h4>
                    <span className="text-xs px-2 py-1 rounded-full bg-[#FFDDC9] text-[#CC4B00]">
                      {plan.duration}
                    </span>
                  </div>
                  <p className="text-sm text-[#8B4513] mb-3">{plan.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {plan.benefits.map((benefit, i) => (
                      <span 
                        key={i}
                        className="text-xs px-2 py-1 rounded-full bg-[#FAF3EB] text-[#8B4513] border border-[#E8C5B0]/20"
                      >
                        {benefit}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>

        {/* Bottom Action Button - Fixed at bottom with subtle gradient */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-white/95 via-white/95 to-transparent">
          <motion.button 
            onClick={() => updateState({ showCreatePlan: true })}
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-br from-[#2C1810] to-[#3D2415] text-white text-lg font-medium tracking-tight shadow-lg border border-[#E8C5B0]/20 transition-all duration-300"
          >
            <div className="relative flex items-center justify-center gap-3">
              <span>Get Your Free 7-Day Plan</span>
              <motion.div
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                →
              </motion.div>
            </div>
          </motion.button>
        </div>
      </div>
    </div>
  );
} 