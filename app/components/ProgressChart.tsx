import React from 'react';

export const ProgressChart = () => {
  const weeks = [1, 2, 3, 4, 5, 6];
  const values = [30, 45, 55, 65, 75, 85]; // Sample progress values

  return (
    <div className="flex-1">
      <div className="text-center mb-2">
        <h3 className="text-xl font-semibold text-slate-800">Hydration Improvement</h3>
        <p className="text-sm text-slate-500">Sample progress tracking</p>
      </div>
      
      <div className="relative h-64 mt-8">
        {/* Y-axis labels */}
        <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-sm text-slate-400">
          <span>100%</span>
          <span>75%</span>
          <span>50%</span>
          <span>25%</span>
          <span>0%</span>
        </div>

        {/* Chart area */}
        <div className="ml-12 h-full flex items-end">
          <div className="flex-1 h-full flex items-end justify-around relative">
            {/* Grid lines */}
            <div className="absolute inset-0 flex flex-col justify-between">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="border-b border-slate-200 w-full"
                />
              ))}
            </div>

            {/* Bars */}
            {weeks.map((week, index) => (
              <div key={week} className="relative flex flex-col items-center group">
                <div
                  className="w-12 bg-teal-500 rounded-t transition-all duration-300 ease-out hover:bg-teal-600"
                  style={{
                    height: `${values[index]}%`,
                    opacity: 0.8 + (index * 0.05), // Gradually increase opacity
                  }}
                />
                <div className="mt-2 text-sm text-slate-600">Week {week}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Results disclaimer */}
      <div className="flex items-center gap-2 justify-center mt-6 text-xs text-slate-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
            clipRule="evenodd"
          />
        </svg>
        Results vary by individual and consistency
      </div>
    </div>
  );
}; 