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
        isSelected ? 'bg-[#1A1A1E] border border-white/10' : 'hover:bg-[#1A1A1E]/50'
      }`}
    >
      <div className="flex items-center justify-between mb-4">
        <span className="text-lg font-medium">{date.toLocaleDateString()}</span>
        <ChevronRightIcon className={`w-5 h-5 transition-transform duration-300 ${isSelected ? 'rotate-90' : ''}`} />
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
                <h4 className="text-sm font-medium text-white/60 mb-3">
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
                    <span className="text-sm text-white/40">{step.order}</span>
                    <div>
                      <p className="text-sm font-medium">
                        {step.koreanName} • {step.name}
                      </p>
                      <span className="text-xs text-white/40">{step.time}</span>
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
      return <ExclamationCircleIcon className="w-5 h-5 text-amber-400" />;
    case 'suggestion':
      return <LightBulbIcon className="w-5 h-5 text-blue-400" />;
    case 'insight':
      return <SparklesIcon className="w-5 h-5 text-purple-400" />;
    case 'progress':
      return <ChartBarIcon className="w-5 h-5 text-green-400" />;
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
        className="w-full flex items-center justify-between p-2 rounded-lg bg-[#1A1A1E] hover:bg-[#242428] transition-colors"
      >
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-[#FF3BFF]" />
          <div className="text-left">
            <h4 className="text-sm font-medium">{step.product.name}</h4>
            <p className="text-xs text-white/60">{step.time}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {step.insights.length > 0 && (
            <span className={`text-xs px-2 py-0.5 rounded-full ${
              step.insights[0].type === 'warning' 
                ? 'bg-amber-500/10 text-amber-400'
                : 'bg-[#FF3BFF]/10 text-[#FF3BFF]'
            }`}>
              {step.insights[0].type === 'warning' ? '!' : '✓'}
            </span>
          )}
          <ChevronRightIcon className={`w-4 h-4 transition-transform ${showDetails ? 'rotate-90' : ''}`} />
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
                <span key={i} className="text-xs px-2 py-0.5 rounded-full bg-[#1A1A1E] border border-white/10">
                  {ingredient}
                </span>
              ))}
      </div>

            {step.product.warnings.length > 0 && (
              <div className="p-1.5 rounded-lg bg-amber-500/10 border border-amber-500/20 mb-1.5">
                <div className="flex items-start gap-1.5">
                  <ExclamationCircleIcon className="w-3.5 h-3.5 text-amber-400 mt-0.5" />
                  <div className="flex-1">
                    {step.product.warnings.map((warning, i) => (
                      <p key={i} className="text-[10px] text-amber-400">{warning}</p>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {step.insights.map((insight, i) => (
              <div key={i} className="p-1.5 rounded-lg bg-[#242428] border border-white/5 mb-1.5 last:mb-0">
                <div className="flex items-start gap-1.5">
                  <InsightIcon type={insight.type} />
                  <p className="text-[10px] text-white/60">{insight.description}</p>
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
    <motion.div
      drag="y"
      dragControls={dragControls}
      dragConstraints={{ top: 0, bottom: 0 }}
      dragElastic={0.2}
      onDragEnd={(event, info) => {
        if (Math.abs(info.offset.y) > 50) {
          console.log('Swiped', info.offset.y > 0 ? 'down' : 'up');
        }
      }}
      className="touch-pan-y"
    >
      <div className="w-full max-w-[375px] mx-auto bg-transparent text-white flex flex-col h-[700px] relative">
        {/* Header with Tabs - Fixed at top */}
        <div className="bg-[#0A0A0E]/80 backdrop-blur-md border-b border-white/10 sticky top-0 z-10 flex-none">
          <div className="px-3 pt-3 pb-1">
            <div className="flex flex-col items-center">
              <h1 className="text-base font-medium">Your Skincare Journey</h1>
              <p className="text-sm text-white/60 mt-1">In your pocket</p>
              {/* Interactive Demo Badge */}
              <div className="mt-2 inline-flex items-center gap-2 px-2 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs text-emerald-400">Interactive Preview</span>
              </div>
            </div>
          </div>
          
          {/* Navigation Tabs */}
          <div className="flex px-2 gap-1 py-1.5">
            {(['calendar', 'routine', 'insights', 'plans'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => updateState({ view: tab })}
                className={`relative flex-1 py-1.5 px-2 rounded-lg text-sm font-medium transition-colors ${
                  state.view === tab
                    ? 'bg-[#1A1A1E] text-[#FF3BFF]'
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <Suspense fallback={
          <div className="flex-1 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-[#FF3BFF] animate-ping" />
          </div>
        }>
          {state.showCreatePlan ? (
            <CreatePlanView onClose={() => updateState({ showCreatePlan: false })} />
        ) : (
          <>
              {/* Main scrollable content */}
              <div className="flex-1 overflow-y-auto overscroll-y-contain scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/10 hover:scrollbar-thumb-white/20">
                <div className="p-2 space-y-2">
                  {state.view === 'calendar' && (
                    <motion.div
                      initial={false}
                      className="space-y-3"
                    >
                  {/* Month Navigation */}
                  <div className="flex items-center justify-between">
                    <button 
                      onClick={() => navigateMonth('prev')}
                          className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 active:bg-white/15 touch-manipulation"
                    >
                      <ArrowLeftIcon className="w-4 h-4" />
                    </button>
                        <h2 className="text-sm font-medium">
                          {state.currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' })}
                    </h2>
                    <button 
                      onClick={() => navigateMonth('next')}
                          className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 active:bg-white/15 touch-manipulation"
                    >
                      <ArrowRightIcon className="w-4 h-4" />
                    </button>
                  </div>

                      {/* Calendar Grid */}
                      <div className="grid grid-cols-7 gap-0.5 text-center text-xs mb-1">
                        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
                          <div key={i} className="text-white/40 py-1">
                            {day}
                          </div>
                        ))}
                      </div>

                      <div className="grid grid-cols-7 gap-0.5">
                        {calendarDays.map((day, i) => (
                      <motion.button
                        key={i}
                            onClick={() => updateState({ selectedDay: day.date })}
                            className={`aspect-square rounded-lg relative touch-manipulation ${
                              day.date.getMonth() !== state.currentMonth.getMonth()
                                ? 'opacity-30'
                                : ''
                            } ${
                              state.selectedDay?.toDateString() === day.date.toDateString()
                                ? 'bg-gradient-to-br from-[#FF3BFF] via-[#FF3BFF] to-[#5C24FF] shadow-[0_0_30px_rgba(255,59,255,0.3)]'
                                : 'hover:bg-white/5 active:bg-white/10'
                      }`}
                      >
                        <div className="w-full h-full rounded-md flex flex-col items-center justify-center">
                              <span className={`text-sm ${
                                state.currentMonth.getMonth() !== day.date.getMonth()
                              ? 'text-white/20'
                              : day.isToday
                              ? 'text-[#FF3BFF] font-bold'
                              : 'text-white'
                          }`}>
                            {day.date.getDate()}
                          </span>
                          {day.hasRoutine && (
                                <div className="flex gap-0.5 mt-1">
                                  <div className="w-1 h-1 rounded-full bg-[#FF3BFF] shadow-[0_0_10px_rgba(255,59,255,0.5)]" />
                              {day.hasInsights && (
                                    <div className="w-1 h-1 rounded-full bg-[#5C24FF] shadow-[0_0_10px_rgba(92,36,255,0.5)]" />
                              )}
                            </div>
                          )}
                        </div>
                      </motion.button>
                    ))}
                  </div>

                      {/* Selected Day View */}
                      {state.selectedDay && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                          className="space-y-3"
                    >
                          <div className="p-2 rounded-xl bg-[#1A1A1E] border border-white/10">
                            <div className="flex items-center justify-between mb-2">
                          <h3 className="text-sm font-medium">
                                {state.selectedDay.toLocaleDateString('en-US', { 
                              weekday: 'long',
                              month: 'short',
                              day: 'numeric'
                            })}
                          </h3>
                          <button 
                                onClick={() => updateState({ view: 'routine' })}
                            className="text-xs text-[#FF3BFF] font-medium hover:text-[#5C24FF] transition-colors"
                          >
                            View Full Routine →
                          </button>
                        </div>
                        <div className="space-y-2">
                          {demoDayRoutine.morning.map((step) => (
                            <div key={step.id} className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#FF3BFF] shadow-[0_0_10px_rgba(255,59,255,0.5)]" />
                              <span className="text-sm text-white/80">{step.name}</span>
                              <span className="text-xs text-white/40 ml-auto">{step.time}</span>
                              {step.insights.length > 0 && (
                                <span className={`text-xs px-2 py-0.5 rounded-full ${
                                  step.insights[0].type === 'warning' 
                                    ? 'bg-amber-500/20 text-amber-400 shadow-[0_0_10px_rgba(245,158,11,0.1)]'
                                    : step.insights[0].type === 'progress'
                                    ? 'bg-[#5C24FF]/20 text-[#5C24FF] shadow-[0_0_10px_rgba(92,36,255,0.1)]'
                                    : 'bg-[#FF3BFF]/20 text-[#FF3BFF] shadow-[0_0_10px_rgba(255,59,255,0.1)]'
                                }`}>
                                  {step.insights[0].type === 'warning' ? '!' : '✓'}
                                </span>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Notifications Preview */}
                      <div className="p-3 rounded-xl bg-[#1A1A1E] border border-white/10 shadow-[0_0_30px_rgba(255,59,255,0.1)]">
                        <div className="flex items-center gap-2 mb-3">
                          <BellIcon className="w-4 h-4 text-[#FF3BFF]" />
                          <h3 className="text-sm font-medium">Today's Reminders</h3>
                        </div>
                        <div className="space-y-2">
                          {demoNotifications.slice(0, 2).map((notification) => (
                            <div key={notification.id} className="flex items-center gap-2">
                              <div className="w-6 h-6 rounded-lg bg-[#242428] border border-white/5 flex items-center justify-center shadow-[0_0_10px_rgba(255,59,255,0.1)]">
                                {notification.icon}
                              </div>
                              <div className="flex-1">
                                <p className="text-sm font-medium">{notification.title}</p>
                                <p className="text-xs text-white/40">{notification.time}</p>
                              </div>
                              {notification.priority === 'high' && (
                                <div className="w-1.5 h-1.5 rounded-full bg-[#FF3BFF] shadow-[0_0_10px_rgba(255,59,255,0.5)] animate-pulse" />
                              )}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Quick Stats - Inline */}
                      <div className="grid grid-cols-2 gap-3">
                        <div className="p-3 rounded-xl bg-[#1A1A1E] border border-white/10 shadow-[0_0_30px_rgba(255,59,255,0.15)]">
                          <div className="flex items-center gap-2 mb-1">
                            <StarIcon className="w-4 h-4 text-[#FF3BFF]" />
                            <h3 className="text-sm font-medium">Streak</h3>
                          </div>
                          <div className="flex items-baseline gap-1">
                            <span className="text-xl font-bold bg-gradient-to-r from-[#FF3BFF] to-[#5C24FF] bg-clip-text text-transparent">7</span>
                            <span className="text-xs text-white/40">days</span>
                          </div>
                        </div>
                        <div className="p-3 rounded-xl bg-[#1A1A1E] border border-white/10 shadow-[0_0_30px_rgba(92,36,255,0.15)]">
                          <div className="flex items-center gap-2 mb-1">
                            <ArrowTrendingUpIcon className="w-4 h-4 text-[#5C24FF]" />
                            <h3 className="text-sm font-medium">Progress</h3>
                          </div>
                          <div className="flex items-baseline gap-1">
                            <span className="text-xl font-bold bg-gradient-to-r from-[#5C24FF] to-[#FF3BFF] bg-clip-text text-transparent">+12%</span>
                            <span className="text-xs text-white/40">week</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                    </motion.div>
                )}

                    {state.view === 'routine' && (
                  <div className="space-y-3">
                        <div className="p-3 rounded-lg bg-[#1A1A1E] border border-white/10">
                          <h3 className="text-base font-medium mb-3">Morning Routine</h3>
                          <div className="space-y-2.5">
                        {demoDayRoutine.morning.map((step) => (
                          <RoutineStep key={step.id} step={step} />
                        ))}
                      </div>
                    </div>

                        <div className="p-3 rounded-lg bg-[#1A1A1E] border border-white/10">
                          <h3 className="text-base font-medium mb-3">Evening Routine</h3>
                          <div className="space-y-2.5">
                            {demoDayRoutine.evening.map((step) => (
                              <RoutineStep key={step.id} step={step} />
                            ))}
                          </div>
                    </div>

                        <div className="p-3 rounded-lg bg-[#1A1A1E] border border-white/10">
                          <div className="flex items-center gap-2 mb-3">
                        <SparklesIcon className="w-4 h-4 text-[#FF3BFF]" />
                            <h3 className="text-sm font-medium">Why This Routine</h3>
                          </div>
                          <div className="space-y-3">
                                <p className="text-sm text-white/60 leading-relaxed">
                              Based on your skin's sensitivity to retinol and recent progress with barrier repair,
                              we've adjusted your routine to focus on gentle hydration in the morning and repair at night.
                            </p>
                            <div className="p-2 rounded-lg bg-[#242428] border border-white/5">
                              <div className="flex items-start gap-2">
                                <ChartBarIcon className="w-4 h-4 text-[#5C24FF] mt-0.5" />
                                    <p className="text-sm text-white/60">87% of users with similar skin profiles saw improvement with this combination</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {state.view === 'insights' && (
                      <div className="space-y-2.5">
                        {/* Stats Cards */}
                        <div className="grid grid-cols-2 gap-2.5">
                          <div className="p-3 rounded-lg bg-[#1A1A1E] border border-white/10">
                            <div className="flex items-center gap-2 mb-2">
                          <StarIcon className="w-4 h-4 text-[#FF3BFF]" />
                              <h3 className="text-base font-medium">Weekly Score</h3>
                            </div>
                            <div className="flex items-baseline gap-1">
                              <span className="text-xl font-bold">92</span>
                                  <span className="text-sm text-white/40">/ 100</span>
                            </div>
                          </div>
                          <div className="p-3 rounded-lg bg-[#1A1A1E] border border-white/10">
                            <div className="flex items-center gap-2 mb-2">
                          <ChartBarIcon className="w-4 h-4 text-[#5C24FF]" />
                              <h3 className="text-base font-medium">Improvements</h3>
                            </div>
                            <div className="flex items-baseline gap-1">
                                  <span className="text-lg font-bold">4</span>
                                  <span className="text-[10px] text-white/40">areas</span>
                            </div>
                          </div>
                        </div>

                        {demoInsights.map((insight, index) => (
                          <motion.div
                            key={index}
                                initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05 }}
                                className="p-2 rounded-lg bg-[#1A1A1E] border border-white/10 shadow-[0_0_30px_rgba(255,59,255,0.1)]"
                          >
                                <div className="flex items-start gap-2">
                                  <div className="mt-0.5">
                                <InsightIcon type={insight.type} />
                              </div>
                                  <div className="flex-1 min-w-0">
                                    <div className="flex items-center justify-between gap-2 mb-1">
                                      <h4 className="text-xs font-medium truncate">{insight.title}</h4>
                                      <span className={`text-[10px] px-1.5 py-0.5 rounded-full shrink-0 ${
                                    insight.impact === 'high' 
                                      ? 'bg-[#FF3BFF]/20 text-[#FF3BFF] shadow-[0_0_10px_rgba(255,59,255,0.2)]'
                                      : insight.impact === 'medium'
                                      ? 'bg-[#5C24FF]/20 text-[#5C24FF] shadow-[0_0_10px_rgba(92,36,255,0.2)]'
                                      : 'bg-[#D94DFF]/20 text-[#D94DFF] shadow-[0_0_10px_rgba(217,77,255,0.2)]'
                                  }`}>
                                    {insight.impact.charAt(0).toUpperCase() + insight.impact.slice(1)}
                                  </span>
                              </div>
                                  <p className="text-xs text-white/80 leading-snug mb-1.5">{insight.description}</p>
                                  <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-[#242428] border border-white/5 text-white/60 inline-block shadow-[0_0_10px_rgba(255,59,255,0.1)]">
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
                      <div className="space-y-2">
                        <div className="flex justify-between items-center mb-1">
                      <h3 className="text-base font-medium">Available Plans</h3>
                          <button className="text-sm text-[#FF3BFF] font-medium">
                            Get Free 7-Day Plan →
                      </button>
                    </div>
                    {koreanSkincarePlans.map((plan, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="p-4 rounded-xl bg-[#1A1A1E] border border-white/10"
                      >
                        <div className="flex justify-between items-center mb-3">
                          <h4 className="text-sm font-medium">{plan.name}</h4>
                          <span className="text-xs px-2 py-0.5 rounded-full bg-[#FF3BFF]/10 text-[#FF3BFF]">
                            {plan.duration}
                          </span>
                        </div>
                        <p className="text-sm text-white/60 mb-3">{plan.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {plan.benefits.map((benefit, i) => (
                            <span 
                              key={i}
                              className="text-xs px-2 py-0.5 rounded-full bg-[#1A1A1E] border border-white/10"
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
            </div>

              {/* Bottom Action Button - Fixed at bottom */}
              <div className="flex-none p-3 bg-gradient-to-t from-black via-black/95 to-transparent">
                <motion.button 
                  onClick={() => updateState({ showCreatePlan: true })}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: '0 0 50px rgba(255, 59, 255, 0.5), 0 0 100px rgba(92, 36, 255, 0.3)',
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative w-full py-4 px-4 rounded-lg bg-gradient-to-r from-[#FF3BFF] via-[#FF3BFF] to-[#5C24FF] text-white text-lg font-bold tracking-tight touch-manipulation active:opacity-90 shadow-[0_0_30px_rgba(255,59,255,0.3)] border border-white/20 transition-all duration-300 hover:border-white/40"
                >
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-white/30 to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
                  <div className="relative flex items-center justify-center gap-2">
                    <span className="group-hover:text-white transition-colors">Get Your Free 7-Day Plan</span>
                    <motion.div
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      className="text-lg"
                    >
                      →
                    </motion.div>
                  </div>
                </motion.button>
              </div>
          </>
        )}
        </Suspense>
      </div>
    </motion.div>
  );
} 