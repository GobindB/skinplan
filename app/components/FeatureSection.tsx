import React from 'react';

interface FeatureItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface FeatureSectionProps {
  features: FeatureItemProps[];
}

const FeatureItem: React.FC<FeatureItemProps> = ({ icon, title, description }) => (
  <div className="mb-8">
    <h3 className="text-xl font-medium mb-3 flex items-center">
      <span className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 mr-3">
        {icon}
      </span>
      {title}
    </h3>
    <p className="text-slate-600 pl-11">{description}</p>
  </div>
);

export const FeatureSection: React.FC<FeatureSectionProps> = ({ features }) => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-light text-slate-800 text-center mb-6">
          Powered by Science, Not Hype
        </h2>
        <p className="text-center text-slate-600 max-w-2xl mx-auto mb-16">
          Our platform uses dermatologist-backed research to generate effective
          skincare routines.
        </p>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="space-y-8">
              {features.map((feature, index) => (
                <FeatureItem key={index} {...feature} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 