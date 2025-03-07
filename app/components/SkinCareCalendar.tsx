import React from 'react';

interface CalendarDayProps {
  day: string;
  date: string;
  routines: {
    type: 'basic' | 'spf' | 'exfoliate' | 'mask' | 'reset';
    label: string;
  }[];
}

const CalendarDay: React.FC<CalendarDayProps> = ({ day, date, routines }) => (
  <div className="flex items-center gap-2">
    <div className="w-12 text-center">
      <div className="text-xs text-slate-500">{day}</div>
      <div className="text-xl">{date}</div>
    </div>
    <div className="flex-1 flex gap-2 overflow-x-auto pb-1">
      {routines.map((routine, index) => (
        <div
          key={index}
          className={`
            px-3 py-2 rounded text-sm whitespace-nowrap
            ${routine.type === 'basic' ? 'bg-slate-700 text-white' : ''}
            ${routine.type === 'spf' ? 'bg-amber-700 text-white' : ''}
            ${routine.type === 'exfoliate' ? 'bg-teal-600 text-white' : ''}
            ${routine.type === 'mask' ? 'bg-slate-500 text-white' : ''}
            ${routine.type === 'reset' ? 'bg-indigo-600 text-white' : ''}
          `}
        >
          {routine.label}
        </div>
      ))}
    </div>
  </div>
);

export const SkinCareCalendar = () => {
  const calendarData: CalendarDayProps[] = [
    {
      day: 'MON',
      date: '10',
      routines: [
        { type: 'basic', label: 'Cleanser + Moisturizer' },
        { type: 'spf', label: 'SPF Sunscreen' }
      ]
    },
    {
      day: 'WED',
      date: '12',
      routines: [
        { type: 'basic', label: 'Cleanser + Moisturizer' },
        { type: 'spf', label: 'SPF Sunscreen' },
        { type: 'exfoliate', label: 'Exfoliation + Serum' }
      ]
    },
    {
      day: 'FRI',
      date: '14',
      routines: [
        { type: 'basic', label: 'Cleanser + Moisturizer' },
        { type: 'spf', label: 'SPF Sunscreen' },
        { type: 'mask', label: 'Mask + Serum' }
      ]
    },
    {
      day: 'SUN',
      date: '16',
      routines: [
        { type: 'basic', label: 'Cleanser + Moisturizer' },
        { type: 'spf', label: 'SPF Sunscreen' },
        { type: 'reset', label: 'Full Routine Reset' }
      ]
    }
  ];

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100">
      <div className="bg-slate-800 text-white p-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
          <h3 className="font-medium">Skincare Calendar</h3>
        </div>
        <button className="text-sm text-teal-300">Save</button>
      </div>

      <div className="p-4 bg-slate-900 text-white">
        <div className="flex justify-between items-center mb-4">
          <div className="bg-teal-600 text-white px-3 py-1 rounded-full text-sm inline-flex items-center">
            <span>Hydration boost</span>
            <span className="ml-2 bg-white text-teal-600 px-1.5 py-0.5 rounded-full text-xs font-medium">
              WEEK 1
            </span>
          </div>
          <button className="text-xs border border-slate-700 rounded-full px-3 py-1 flex items-center gap-1 text-slate-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1z"
                clipRule="evenodd"
              />
            </svg>
            Reset
          </button>
        </div>
        <p className="text-sm text-slate-400 mb-4">
          Routine Focus: Hydration + Acne Control
        </p>

        <div className="space-y-3">
          {calendarData.map((day, index) => (
            <CalendarDay key={index} {...day} />
          ))}
        </div>

        <div className="mt-6 pt-4 border-t border-slate-700">
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center gap-2">
              <span>Glow & Repair</span>
              <span className="bg-white text-slate-800 px-1.5 py-0.5 rounded-full text-xs font-medium">
                WEEK 2
              </span>
            </div>
            <button className="text-xs border border-slate-700 rounded-full px-3 py-1 flex items-center gap-1 text-slate-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
              Reset
            </button>
          </div>
          <p className="text-sm text-slate-400 mb-4">
            Routine Focus: Brighten + Restore
          </p>

          <button className="w-full mt-4 bg-white text-slate-800 py-3 rounded-lg font-medium">
            GO TO THIS WEEK
          </button>
        </div>
      </div>
    </div>
  );
}; 