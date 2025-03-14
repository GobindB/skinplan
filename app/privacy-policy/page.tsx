import React from 'react';

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-[#FFF1E6] text-[#2C1810] py-20">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <h1 className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[#E68A6C] to-[#B86B4C]">
          Privacy Policy
        </h1>

        {/* Last Updated */}
        <p className="text-[#86604A]/60 mb-12">Last Updated: {new Date().toLocaleDateString()}</p>

        {/* Content Sections */}
        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#2C1810]">Information We Collect</h2>
            <p className="text-[#5C3D2E] mb-4">
              We collect information that you provide directly to us, including:
            </p>
            <ul className="list-disc pl-6 text-[#86604A] space-y-2">
              <li>Email address when you sign up for our waitlist or create an account</li>
              <li>Skin type, concerns, and preferences when you create your personalized skincare plan</li>
              <li>Usage data and interaction with our platform</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#2C1810]">How We Use Your Information</h2>
            <p className="text-[#5C3D2E] mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 text-[#86604A] space-y-2">
              <li>Create and personalize your skincare routine</li>
              <li>Send you product recommendations and updates</li>
              <li>Improve our AI algorithms and service quality</li>
              <li>Communicate with you about your account and our services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#2C1810]">Data Security</h2>
            <p className="text-[#5C3D2E]">
              We implement appropriate technical and organizational measures to protect your personal information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#2C1810]">Your Rights</h2>
            <p className="text-[#5C3D2E] mb-4">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 text-[#86604A] space-y-2">
              <li>Access your personal information</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Opt-out of marketing communications</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#2C1810]">Contact Us</h2>
            <p className="text-[#5C3D2E]">
              If you have any questions about this Privacy Policy, please contact us at support@skinplan.app
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage; 