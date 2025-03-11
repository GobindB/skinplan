'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

const CalendarDay: React.FC<CalendarDayProps> = ({ date, routines, isSelected, onClick }) => {
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
};

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

const RoutineStep: React.FC<{ step: RoutineStep }> = ({ step }) => {
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
};

interface CalendarDay {
  date: Date;
  hasRoutine: boolean;
  hasInsights: boolean;
  progress: number;
  isToday?: boolean;
}

const CreatePlanView: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [selectedConcerns, setSelectedConcerns] = useState<string[]>([]);
  const [skinType, setSkinType] = useState<string>('');
  const [sensitivities, setSensitivities] = useState<string[]>([]);
  const [currentProducts, setCurrentProducts] = useState<string[]>([]);
  const [ethnicity, setEthnicity] = useState<string>('');
  
  const ethnicityOptions = [
    { label: 'Asian', description: 'East Asian, South Asian, Southeast Asian' },
    { label: 'Black', description: 'African, African American, Caribbean' },
    { label: 'Hispanic/Latino', description: 'Latin American, Spanish' },
    { label: 'Middle Eastern', description: 'Arab, Persian, Turkish' },
    { label: 'White', description: 'European, Caucasian' },
    { label: 'Mixed/Other', description: 'Multiple ethnicities or other background' }
  ];

  const concerns = [
    { icon: '✨', label: 'Brightening', description: 'Uneven tone, dark spots, dullness' },
    { icon: '💧', label: 'Hydration', description: 'Dryness, tightness, dehydration' },
    { icon: '🛡️', label: 'Barrier Repair', description: 'Sensitivity, redness, irritation' },
    { icon: '⏰', label: 'Anti-Aging', description: 'Fine lines, loss of firmness' },
    { icon: '🧴', label: 'Acne Control', description: 'Breakouts, excess oil, congestion' }
  ];

  const skinTypes = [
    { icon: '🫧', label: 'Oily', description: 'Shiny, prone to breakouts' },
    { icon: '🌵', label: 'Dry', description: 'Tight, flaky, rough' },
    { icon: '🔄', label: 'Combination', description: 'Oily T-zone, dry cheeks' },
    { icon: '🌱', label: 'Normal', description: 'Balanced, few concerns' },
    { icon: '🌸', label: 'Sensitive', description: 'Reactive, easily irritated' }
  ];

  const sensitivitiesList = [
    { icon: '☀️', label: 'Sun Sensitivity', description: 'Burns easily, hyperpigmentation' },
    { icon: '🧪', label: 'Product Sensitivity', description: 'Reacts to new products' },
    { icon: '🌿', label: 'Fragrance Sensitivity', description: 'Irritation from scents' },
    { icon: '💊', label: 'Medication Effects', description: 'On treatments affecting skin' }
  ];

  const commonProducts = [
    { category: 'Actives', items: ['Retinol', 'Vitamin C', 'AHA/BHA', 'Niacinamide'] },
    { category: 'Treatments', items: ['Benzoyl Peroxide', 'Prescription Tretinoin', 'Hydroquinone'] },
    { category: 'Moisturizers', items: ['Hyaluronic Acid', 'Ceramides', 'Peptides'] }
  ];

  const handleConcernToggle = (label: string) => {
    setSelectedConcerns(prev => 
      prev.includes(label) 
        ? prev.filter(c => c !== label)
        : [...prev, label]
    );
  };

  const handleSensitivityToggle = (label: string) => {
    setSensitivities(prev =>
      prev.includes(label)
        ? prev.filter(s => s !== label)
        : [...prev, label]
    );
  };

  const handleProductToggle = (product: string) => {
    setCurrentProducts(prev =>
      prev.includes(product)
        ? prev.filter(p => p !== product)
        : [...prev, product]
    );
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch('/api/submit-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          skinType,
          ethnicity,
          selectedConcerns,
          sensitivities,
          currentProducts
        }),
      });

      const data = await response.json();
      if (data.success) {
        setStep(7); // Move to success step
      } else {
        console.error('Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-medium">What's your ethnicity?</h3>
            <p className="text-sm text-white/60">This helps us understand your skin's characteristics and needs.</p>
            <div className="space-y-2">
              {ethnicityOptions.map((option) => (
                <button
                  key={option.label}
                  onClick={() => setEthnicity(option.label)}
                  className={`w-full p-4 rounded-xl bg-[#1A1A1E] border transition-colors ${
                    ethnicity === option.label
                      ? 'border-[#FF3BFF]'
                      : 'border-white/10 hover:border-[#FF3BFF]/50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="text-left flex-1">
                      <h4 className="text-sm font-medium">{option.label}</h4>
                      <p className="text-xs text-white/60">{option.description}</p>
                    </div>
                    {ethnicity === option.label && (
                      <DocumentCheckIcon className="w-5 h-5 text-[#FF3BFF]" />
                    )}
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        );
      case 2:
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-medium">What's your skin type?</h3>
            <p className="text-sm text-white/60">This helps us understand your skin's natural state.</p>
            <div className="space-y-2">
              {skinTypes.map((type) => (
                <button
                  key={type.label}
                  onClick={() => setSkinType(type.label)}
                  className={`w-full p-4 rounded-xl bg-[#1A1A1E] border transition-colors ${
                    skinType === type.label
                      ? 'border-[#FF3BFF]'
                      : 'border-white/10 hover:border-[#FF3BFF]/50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{type.icon}</span>
                    <div className="text-left flex-1">
                      <h4 className="text-sm font-medium">{type.label}</h4>
                      <p className="text-xs text-white/60">{type.description}</p>
                    </div>
                    {skinType === type.label && (
                      <DocumentCheckIcon className="w-5 h-5 text-[#FF3BFF]" />
                    )}
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        );
      case 3:
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-medium">What are your main concerns?</h3>
            <p className="text-sm text-white/60">Select all that apply. This helps us prioritize your needs.</p>
            <div className="space-y-2">
              {concerns.map((concern) => (
                <button
                  key={concern.label}
                  onClick={() => handleConcernToggle(concern.label)}
                  className={`w-full p-4 rounded-xl bg-[#1A1A1E] border transition-colors ${
                    selectedConcerns.includes(concern.label)
                      ? 'border-[#FF3BFF]'
                      : 'border-white/10 hover:border-[#FF3BFF]/50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{concern.icon}</span>
                    <div className="text-left flex-1">
                      <h4 className="text-sm font-medium">{concern.label}</h4>
                      <p className="text-xs text-white/60">{concern.description}</p>
                    </div>
                    {selectedConcerns.includes(concern.label) && (
                      <DocumentCheckIcon className="w-5 h-5 text-[#FF3BFF]" />
                    )}
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        );
      case 4:
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-medium">Any sensitivities we should know about?</h3>
            <p className="text-sm text-white/60">This helps us avoid potential irritants.</p>
            <div className="space-y-2">
              {sensitivitiesList.map((sensitivity) => (
                <button
                  key={sensitivity.label}
                  onClick={() => handleSensitivityToggle(sensitivity.label)}
                  className={`w-full p-4 rounded-xl bg-[#1A1A1E] border transition-colors ${
                    sensitivities.includes(sensitivity.label)
                      ? 'border-[#FF3BFF]'
                      : 'border-white/10 hover:border-[#FF3BFF]/50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{sensitivity.icon}</span>
                    <div className="text-left flex-1">
                      <h4 className="text-sm font-medium">{sensitivity.label}</h4>
                      <p className="text-xs text-white/60">{sensitivity.description}</p>
                    </div>
                    {sensitivities.includes(sensitivity.label) && (
                      <DocumentCheckIcon className="w-5 h-5 text-[#FF3BFF]" />
                    )}
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        );
      case 5:
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-medium">What products are you currently using?</h3>
            <p className="text-sm text-white/60">Select active ingredients or choose "None" if you're not using any products.</p>
            
            <button
              onClick={() => setCurrentProducts([])}
              className={`w-full p-4 rounded-xl bg-[#1A1A1E] border transition-colors mb-4 ${
                currentProducts.length === 0
                  ? 'border-[#FF3BFF]'
                  : 'border-white/10 hover:border-[#FF3BFF]/50'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="text-left flex-1">
                  <h4 className="text-sm font-medium">None</h4>
                  <p className="text-xs text-white/60">I'm not using any skincare products currently</p>
                </div>
                {currentProducts.length === 0 && (
                  <DocumentCheckIcon className="w-5 h-5 text-[#FF3BFF]" />
                )}
              </div>
            </button>

            <div className="space-y-4">
              {commonProducts.map((group) => (
                <div key={group.category} className="space-y-2">
                  <h4 className="text-sm font-medium text-white/60">{group.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <button
                        key={item}
                        onClick={() => {
                          if (currentProducts.length === 0) {
                            handleProductToggle(item);
                          } else {
                            handleProductToggle(item);
                          }
                        }}
                        className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                          currentProducts.includes(item)
                            ? 'bg-[#FF3BFF] text-white'
                            : 'bg-[#1A1A1E] text-white/60 hover:bg-[#242428]'
                        }`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        );
      case 6:
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-medium">Get Your Free Custom Plan</h3>
            <div className="p-4 rounded-xl bg-[#1A1A1E] border border-white/10 space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-[#FF3BFF]/10 flex items-center justify-center">
                  <SparklesIcon className="w-5 h-5 text-[#FF3BFF]" />
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-medium mb-2">Your Profile Summary</h4>
                  <div className="space-y-2">
                    <p className="text-xs text-white/60">
                      <span className="text-white">Ethnicity:</span> {ethnicity}
                    </p>
                    <p className="text-xs text-white/60">
                      <span className="text-white">Skin Type:</span> {skinType}
                    </p>
                    {selectedConcerns.length > 0 && (
                      <div>
                        <p className="text-xs text-white/60 mb-1">Main Concerns:</p>
                        <div className="flex flex-wrap gap-1">
                          {selectedConcerns.map(concern => (
                            <span key={concern} className="text-xs px-2 py-0.5 rounded-full bg-[#242428]">
                              {concern}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    {sensitivities.length > 0 && (
                      <div>
                        <p className="text-xs text-white/60 mb-1">Sensitivities:</p>
                        <div className="flex flex-wrap gap-1">
                          {sensitivities.map(sensitivity => (
                            <span key={sensitivity} className="text-xs px-2 py-0.5 rounded-full bg-[#242428]">
                              {sensitivity}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm text-white/60">Get your free personalized plan</label>
                <div className="relative">
                  <EnvelopeIcon className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full pl-10 pr-4 py-3 rounded-lg bg-[#242428] border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-[#FF3BFF]"
                  />
                </div>
              </div>

              <div className="p-3 rounded-lg bg-[#242428] border border-white/5">
                <div className="flex items-start gap-2">
                  <LightBulbIcon className="w-4 h-4 text-[#FF3BFF] mt-0.5" />
                  <p className="text-xs text-white/60">
                    Join thousands achieving their dream skin with personalized skincare routines tailored just for you. Start your journey today!
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        );
      case 7:
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center space-y-4"
          >
            <div className="w-16 h-16 mx-auto rounded-full bg-[#FF3BFF]/10 flex items-center justify-center">
              <SparklesIcon className="w-8 h-8 text-[#FF3BFF]" />
            </div>
            <h3 className="text-lg font-medium">Your 7-Day Journey Begins!</h3>
            <p className="text-sm text-white/60">
              We've crafted your perfect routine with:
            </p>
            <div className="space-y-2">
              <div className="p-3 rounded-lg bg-[#1A1A1E] border border-white/10 text-left">
                <div className="flex items-start gap-2">
                  <CheckIcon className="w-4 h-4 text-[#FF3BFF] mt-0.5" />
                  <p className="text-xs text-white/60">
                    Personalized product recommendations
                  </p>
                </div>
              </div>
              <div className="p-3 rounded-lg bg-[#1A1A1E] border border-white/10 text-left">
                <div className="flex items-start gap-2">
                  <CheckIcon className="w-4 h-4 text-[#FF3BFF] mt-0.5" />
                  <p className="text-xs text-white/60">
                    Daily morning & evening routines
                  </p>
                </div>
              </div>
              <div className="p-3 rounded-lg bg-[#1A1A1E] border border-white/10 text-left">
                <div className="flex items-start gap-2">
                  <CheckIcon className="w-4 h-4 text-[#FF3BFF] mt-0.5" />
                  <p className="text-xs text-white/60">
                    Smart reminders & progress tracking
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 rounded-xl bg-[#1A1A1E] border border-white/10">
              <p className="text-xs text-white/40">Check your email at: {email}</p>
            </div>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 bg-[#0A0A0E] z-50">
      <div className="relative h-full flex flex-col">
        {/* Header */}
        <div className="bg-[#0A0A0E] border-b border-white/10 p-4">
          <div className="flex items-center justify-between">
            <button onClick={onClose} className="p-2 hover:bg-white/5 rounded-lg">
              <ArrowLeftIcon className="w-5 h-5" />
            </button>
            <h1 className="text-lg font-medium">Get Your Free 7-Day Plan</h1>
            <div className="w-9" /> {/* Spacer for alignment */}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4 scrollbar-thin scrollbar-track-[#1A1A1E] scrollbar-thumb-white/10 hover:scrollbar-thumb-white/20">
          {renderStepContent()}
        </div>
        
        {/* Footer */}
        <div className="p-4 bg-gradient-to-t from-[#0A0A0E]/90 via-[#0A0A0E]/80 to-transparent backdrop-blur-sm">
          <div className="flex items-center justify-between mb-3">
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                <div
                  key={i}
                  className={`w-7 h-1 rounded-full ${
                    i === step ? 'bg-[#FF3BFF]' : 'bg-white/10'
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-white/40">Step {step} of 7</span>
          </div>
          <button 
            onClick={() => {
              if (step === 1 && !ethnicity) return;
              if (step === 2 && !skinType) return;
              if (step === 3 && selectedConcerns.length === 0) return;
              if (step === 6) {
                if (!email) return;
                handleSubmit();
                return;
              }
              if (step === 7) {
                onClose();
                return;
              }
              setStep(prev => Math.min(prev + 1, 7));
            }}
            className={`w-full py-3 px-6 rounded-xl bg-gradient-to-r from-[#FF3BFF] to-[#5C24FF] text-white font-medium ${
              (step === 1 && !ethnicity) ||
              (step === 2 && !skinType) ||
              (step === 3 && selectedConcerns.length === 0) ||
              (step === 6 && !email)
                ? 'opacity-50 cursor-not-allowed'
                : ''
            }`}
          >
            {step === 7 ? 'Back to Calendar' : 'Continue'}
          </button>
        </div>
      </div>
    </div>
  );
}; 

export default function SkinCareCalendar() {
  const [selectedDay, setSelectedDay] = useState<Date | null>(new Date());
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [view, setView] = useState<'calendar' | 'routine' | 'insights' | 'plans'>('calendar');
  const [showCreatePlan, setShowCreatePlan] = useState(false);
  const [activeInsight, setActiveInsight] = useState<InsightCard | null>(null);

  const generateCalendarDays = (): CalendarDay[] => {
    const days: CalendarDay[] = [];
    const start = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1);
    const end = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0);
    
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

  const navigateMonth = (direction: 'prev' | 'next') => {
    setCurrentMonth(prev => {
      const newDate = new Date(prev);
      if (direction === 'prev') {
        newDate.setMonth(prev.getMonth() - 1);
      } else {
        newDate.setMonth(prev.getMonth() + 1);
      }
      return newDate;
    });
  };

  return (
    <div className="w-full max-w-[375px] mx-auto bg-transparent text-white flex flex-col h-[700px] relative">
      {/* Header with Tabs - Fixed at top */}
      <div className="bg-[#0A0A0E]/80 backdrop-blur-md border-b border-white/10 sticky top-0 z-10 flex-none">
        <div className="px-3 pt-3 pb-1">
          <h1 className="text-base font-medium text-center">Your Skincare Journey</h1>
          <div className="flex items-center justify-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-[#FF3BFF]" />
            <span className="text-sm text-white/60">In Your Pocket ✨</span>
          </div>
        </div>
        
        {/* Navigation Tabs */}
        <div className="flex px-2 gap-1 py-1.5">
          {(['calendar', 'routine', 'insights', 'plans'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setView(tab)}
              className={`flex-1 py-1.5 px-2 rounded-lg text-sm font-medium transition-colors touch-manipulation ${
                view === tab
                  ? 'bg-[#1A1A1E] text-[#FF3BFF]'
                  : 'text-white/60 hover:text-white active:bg-white/5'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {showCreatePlan ? (
        <CreatePlanView onClose={() => setShowCreatePlan(false)} />
      ) : (
        <>
          {/* Main scrollable content */}
          <div className="flex-1 overflow-y-auto overscroll-y-contain scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/10 hover:scrollbar-thumb-white/20">
            <div className="p-2 space-y-2">
              {view === 'calendar' && (
                <div className="space-y-3">
                  {/* Month Navigation */}
                  <div className="flex items-center justify-between">
                    <button 
                      onClick={() => navigateMonth('prev')}
                      className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 active:bg-white/15 touch-manipulation"
                    >
                      <ArrowLeftIcon className="w-4 h-4" />
                    </button>
                    <h2 className="text-sm font-medium">
                      {currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' })}
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
                    {generateCalendarDays().map((day, i) => (
                      <motion.button
                        key={i}
                        onClick={() => setSelectedDay(day.date)}
                        className={`aspect-square rounded-lg relative touch-manipulation ${
                          day.date.getMonth() !== currentMonth.getMonth()
                            ? 'opacity-30'
                            : ''
                        } ${
                          selectedDay?.toDateString() === day.date.toDateString()
                            ? 'bg-gradient-to-br from-[#FF3BFF] to-[#5C24FF]'
                            : 'hover:bg-white/5 active:bg-white/10'
                        }`}
                      >
                        <div className="w-full h-full rounded-md flex flex-col items-center justify-center">
                          <span className={`text-sm ${
                            currentMonth.getMonth() !== day.date.getMonth()
                              ? 'text-white/20'
                              : day.isToday
                              ? 'text-[#FF3BFF]'
                              : 'text-white'
                          }`}>
                            {day.date.getDate()}
                          </span>
                          {day.hasRoutine && (
                            <div className="flex gap-0.5 mt-1">
                              <div className="w-1 h-1 rounded-full bg-[#FF3BFF]" />
                              {day.hasInsights && (
                                <div className="w-1 h-1 rounded-full bg-[#5C24FF]" />
                              )}
                            </div>
                          )}
                        </div>
                      </motion.button>
                    ))}
                  </div>

                  {/* Selected Day View */}
                  {selectedDay && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-3"
                    >
                      <div className="p-2 rounded-xl bg-[#1A1A1E] border border-white/10">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-sm font-medium">
                            {selectedDay.toLocaleDateString('en-US', { 
                              weekday: 'long',
                              month: 'short',
                              day: 'numeric'
                            })}
                          </h3>
                          <button 
                            onClick={() => setView('routine')}
                            className="text-xs text-[#FF3BFF] font-medium"
                          >
                            View Full Routine →
                          </button>
                        </div>
                        <div className="space-y-2">
                          {demoDayRoutine.morning.map((step) => (
                            <div key={step.id} className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#FF3BFF]" />
                              <span className="text-sm text-white/60">{step.name}</span>
                              <span className="text-xs text-white/40 ml-auto">{step.time}</span>
                              {step.insights.length > 0 && (
                                <span className={`text-xs px-2 py-0.5 rounded-full ${
                                  step.insights[0].type === 'warning' 
                                    ? 'bg-amber-500/10 text-amber-400'
                                    : step.insights[0].type === 'progress'
                                    ? 'bg-green-500/10 text-green-400'
                                    : 'bg-blue-500/10 text-blue-400'
                                }`}>
                                  {step.insights[0].type === 'warning' ? '!' : '✓'}
                                </span>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Notifications Preview */}
                      <div className="p-3 rounded-xl bg-[#1A1A1E] border border-white/10">
                        <div className="flex items-center gap-2 mb-3">
                          <BellIcon className="w-4 h-4 text-[#FF3BFF]" />
                          <h3 className="text-sm font-medium">Today's Reminders</h3>
                        </div>
                        <div className="space-y-2">
                          {demoNotifications.slice(0, 2).map((notification) => (
                            <div key={notification.id} className="flex items-center gap-2">
                              <div className="w-6 h-6 rounded-lg bg-[#242428] flex items-center justify-center">
                                {notification.icon}
                              </div>
                              <div className="flex-1">
                                <p className="text-sm">{notification.title}</p>
                                <p className="text-xs text-white/40">{notification.time}</p>
                              </div>
                              {notification.priority === 'high' && (
                                <div className="w-1.5 h-1.5 rounded-full bg-[#FF3BFF] animate-pulse" />
                              )}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Quick Stats - Inline */}
                      <div className="grid grid-cols-2 gap-3">
                        <div className="p-3 rounded-xl bg-[#1A1A1E] border border-white/10">
                          <div className="flex items-center gap-2 mb-1">
                            <StarIcon className="w-4 h-4 text-[#FF3BFF]" />
                            <h3 className="text-sm font-medium">Streak</h3>
                          </div>
                          <div className="flex items-baseline gap-1">
                            <span className="text-xl font-bold">7</span>
                            <span className="text-xs text-white/40">days</span>
                          </div>
                        </div>
                        <div className="p-3 rounded-xl bg-[#1A1A1E] border border-white/10">
                          <div className="flex items-center gap-2 mb-1">
                            <ArrowTrendingUpIcon className="w-4 h-4 text-[#5C24FF]" />
                            <h3 className="text-sm font-medium">Progress</h3>
                          </div>
                          <div className="flex items-baseline gap-1">
                            <span className="text-xl font-bold">+12%</span>
                            <span className="text-xs text-white/40">week</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              )}

              {view === 'routine' && (
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

              {view === 'insights' && (
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
                      className="p-2 rounded-lg bg-[#1A1A1E] border border-white/10"
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
                                ? 'bg-[#FF3BFF]/10 text-[#FF3BFF]'
                                : insight.impact === 'medium'
                                ? 'bg-[#5C24FF]/10 text-[#5C24FF]'
                                : 'bg-[#D94DFF]/10 text-[#D94DFF]'
                            }`}>
                              {insight.impact.charAt(0).toUpperCase() + insight.impact.slice(1)}
                            </span>
                          </div>
                          <p className="text-xs text-white/60 leading-snug mb-1.5">{insight.description}</p>
                          <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-white/5 text-white/40 inline-block">
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

              {view === 'plans' && (
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
          <div className="flex-none p-3 bg-gradient-to-t from-[#0A0A0E]/90 via-[#0A0A0E]/80 to-transparent backdrop-blur-sm">
            <button 
              onClick={() => setShowCreatePlan(true)}
              className="w-full py-2.5 px-4 rounded-lg bg-gradient-to-r from-[#FF3BFF] to-[#5C24FF] text-white text-sm font-medium touch-manipulation active:opacity-90 shadow-lg shadow-[#FF3BFF]/10"
            >
              Get Your Free 7-Day Plan →
            </button>
          </div>
        </>
      )}
    </div>
  );
} 