import React from 'react';

export const ComparisonTable = () => {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Why This Works When Other Methods Fail
        </h2>
        <p className="text-slate-600 text-center max-w-3xl mx-auto mb-16">
          No unrealistic promises—just measurable improvements over time with science-backed routines.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="p-4 text-left"></th>
                <th className="p-4 text-center bg-slate-200 rounded-tl-lg">
                  Traditional Skincare Advice
                </th>
                <th className="p-4 text-center bg-teal-600 text-white rounded-tr-lg">
                  SkinPlan
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-200">
                <td className="p-4 font-medium">Personalization</td>
                <td className="p-4 text-center bg-slate-100">
                  <span className="inline-flex items-center justify-center w-8 h-8 bg-red-100 text-red-600 rounded-full">
                    ❌
                  </span>
                  <span className="ml-2">One-size-fits-all</span>
                </td>
                <td className="p-4 text-center bg-teal-50">
                  <span className="inline-flex items-center justify-center w-8 h-8 bg-green-100 text-green-600 rounded-full">
                    ✓
                  </span>
                  <span className="ml-2">Tailored to your skin & goals</span>
                </td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="p-4 font-medium">Scientific Basis</td>
                <td className="p-4 text-center bg-slate-100">
                  <span className="inline-flex items-center justify-center w-8 h-8 bg-red-100 text-red-600 rounded-full">
                    ❌
                  </span>
                  <span className="ml-2">Trend-based</span>
                </td>
                <td className="p-4 text-center bg-teal-50">
                  <span className="inline-flex items-center justify-center w-8 h-8 bg-green-100 text-green-600 rounded-full">
                    ✓
                  </span>
                  <span className="ml-2">Backed by research</span>
                </td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="p-4 font-medium">Structure & Tracking</td>
                <td className="p-4 text-center bg-slate-100">
                  <span className="inline-flex items-center justify-center w-8 h-8 bg-red-100 text-red-600 rounded-full">
                    ❌
                  </span>
                  <span className="ml-2">Self-managed</span>
                </td>
                <td className="p-4 text-center bg-teal-50">
                  <span className="inline-flex items-center justify-center w-8 h-8 bg-green-100 text-green-600 rounded-full">
                    ✓
                  </span>
                  <span className="ml-2">Guided planning & progress tracking</span>
                </td>
              </tr>
              <tr>
                <td className="p-4 font-medium">Adjustments Over Time</td>
                <td className="p-4 text-center bg-slate-100 rounded-bl-lg">
                  <span className="inline-flex items-center justify-center w-8 h-8 bg-red-100 text-red-600 rounded-full">
                    ❌
                  </span>
                  <span className="ml-2">Manual changes</span>
                </td>
                <td className="p-4 text-center bg-teal-50 rounded-br-lg">
                  <span className="inline-flex items-center justify-center w-8 h-8 bg-green-100 text-green-600 rounded-full">
                    ✓
                  </span>
                  <span className="ml-2">Smart AI-driven adjustments</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}; 