import React from "react";

const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="w-screen bg-black">
      <div className="min-h-screen bg-gray-50 px-4 py-12">
        <div className="max-w-3xl mx-auto">
          {/* TITLE */}
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-12 text-center">
            Privacy Policy
          </h1>

          {/* CARD */}
          <div className="space-y-10 bg-white rounded-2xl shadow-sm p-8 md:p-10">
            {/* INTRO */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Introduction
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Welcome to <span className="font-medium">slicePDF</span>. We are
                committed to protecting your privacy and ensuring you have a
                positive experience while using our application. This Privacy
                Policy explains how we collect, use, and protect your
                information.
              </p>
            </section>

            {/* NO COLLECTION */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Information We Do Not Collect
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                slicePDF is designed with privacy in mind. We want to be clear:
              </p>

              <ul className="space-y-3 text-gray-600 leading-relaxed list-disc list-inside">
                <li>
                  <strong>No Personal Data:</strong> We do not collect any
                  personally identifiable information such as names, email
                  addresses, IP addresses, or identifiers of any kind.
                </li>
                <li>
                  <strong>No Document Content:</strong> All PDF processing is
                  performed locally on your device. Your documents are never
                  uploaded, stored, or transmitted.
                </li>
                <li>
                  <strong>No Usage Analytics:</strong> We do not track usage,
                  behavior, or feature interaction.
                </li>
              </ul>
            </section>

            {/* USAGE */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                How We Use Information
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We do not collect any information, so there is nothing to use,
                share, or sell. Your activity in slicePDF remains completely
                private.
              </p>
            </section>

            {/* CHANGES */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Changes to This Policy
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We may update this Privacy Policy from time to time. Any changes
                will be posted on this page. We recommend reviewing this policy
                periodically.
              </p>
            </section>

            {/* CONTACT */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
