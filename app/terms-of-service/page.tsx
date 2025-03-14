import React from 'react';

const TermsOfServicePage = () => {
  return (
    <div className="min-h-screen bg-[#FFF1E6] text-[#2C1810] py-20">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <h1 className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[#E68A6C] to-[#B86B4C]">
          Terms of Service
        </h1>

        {/* Last Updated */}
        <p className="text-[#86604A]/60 mb-12">Last Updated: {new Date().toLocaleDateString()}</p>

        {/* Content Sections */}
        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#2C1810]">1. Acceptance of Terms</h2>
            <p className="text-[#5C3D2E] mb-4">
              By accessing and using SkinPlan, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using this service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#2C1810]">2. Use License</h2>
            <p className="text-[#5C3D2E] mb-4">
              Permission is granted to temporarily access SkinPlan for personal, non-commercial use. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc pl-6 text-[#86604A] space-y-2">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose</li>
              <li>Transfer the materials to another person</li>
              <li>Attempt to reverse engineer any software contained on SkinPlan</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#2C1810]">3. Account Terms</h2>
            <p className="text-[#5C3D2E] mb-4">
              To access certain features of SkinPlan, you may be required to create an account. You agree to:
            </p>
            <ul className="list-disc pl-6 text-[#86604A] space-y-2">
              <li>Provide accurate and complete information</li>
              <li>Maintain the security of your account credentials</li>
              <li>Accept responsibility for all activities under your account</li>
              <li>Not share your account with others</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#2C1810]">4. Service Modifications</h2>
            <p className="text-[#5C3D2E]">
              SkinPlan reserves the right to modify or discontinue, temporarily or permanently, the service with or without notice. We shall not be liable to you or any third party for any modification, suspension, or discontinuance of the service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#2C1810]">5. Disclaimer</h2>
            <p className="text-[#5C3D2E]">
              The materials on SkinPlan are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#2C1810]">6. Contact</h2>
            <p className="text-[#5C3D2E]">
              If you have any questions about these Terms of Service, please contact us at support@skinplan.app
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfServicePage; 