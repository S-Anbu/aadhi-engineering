import React, { useState } from 'react';

const PolicyTerms = () => {
  const [activeTab, setActiveTab] = useState('privacy');

  const handleTabSwitch = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="policy-terms-container">
      {/* Tabs for Navigation */}
      <div className="tab-buttons">
        <button
          className={activeTab === 'privacy' ? 'active' : ''}
          onClick={() => handleTabSwitch('privacy')}
        >
          Privacy Policy
        </button>
        <button
          className={activeTab === 'terms' ? 'active' : ''}
          onClick={() => handleTabSwitch('terms')}
        >
          Terms & Conditions
        </button>
      </div>

      {/* Content */}
      <div className="content">
        {activeTab === 'privacy' && (
          <div className="privacy-policy">
            <h2>Privacy Policy</h2>
            <p>
              We collect personal data to process payments, prevent fraud, and improve our services.
              Payment information is securely handled by Razorpay, in compliance with its privacy
              policy.
            </p>
            <h3>Data Collection</h3>
            <p>
              We collect personal information such as name, email, address, and payment details when
              you make a purchase using Razorpay.
            </p>
            <h3>Data Usage</h3>
            <p>
              The data collected is used for processing payments, fraud detection, and improving our
              services. Razorpay handles your payment information and processes it securely.
            </p>
            <h3>Third-Party Disclosure</h3>
            <p>
              Razorpay is our payment gateway provider. Your payment data is handled by them and
              stored in compliance with their privacy policies.
            </p>
            <h3>Data Security</h3>
            <p>
              We ensure the security of your data through SSL encryption and secure payment gateways
              like Razorpay.
            </p>
            <h3>User Rights</h3>
            <p>
              You have the right to request access or deletion of your data. For any queries, you can
              contact us at [Your Contact Information].
            </p>
          </div>
        )}

        {activeTab === 'terms' && (
          <div className="terms-conditions">
            <h2>Terms & Conditions</h2>
            <p>
              By using our services and making payments through our website, you agree to the
              following terms and conditions.
            </p>
            <h3>Payment Terms</h3>
            <p>
              Payments are processed securely via Razorpay. You are responsible for providing
              accurate payment information.
            </p>
            <h3>User Obligations</h3>
            <p>
              Users must ensure all payment details are correct and comply with applicable laws when
              using the Razorpay payment gateway.
            </p>
            <h3>Refunds and Cancellations</h3>
            <p>no refund p</p>

            <p>
              All refunds and cancellations are governed by our refund policy. Payments made through
              Razorpay will be processed based on these policies.
            </p>
            <h3>Liabilities</h3>
            <p>
              We are not liable for any issues caused by Razorpay. Any disputes related to payments
              must be resolved based on Razorpay’s terms.
            </p>
            <h3>Changes to the Terms</h3>
            <p>
              These terms may change over time. It is the user's responsibility to review the terms
              regularly.
            </p>
          </div>
        )}
      </div>

      <style jsx>{`
        .policy-terms-container {
          max-width: 800px;
          margin: auto;
          padding: 20px;
          font-family: Arial, sans-serif;
        }
        .tab-buttons {
          display: flex;
          justify-content: center;
          margin-bottom: 20px;
        }
        .tab-buttons button {
          padding: 10px 20px;
          margin: 0 10px;
          cursor: pointer;
          background-color: #f1f1f1;
          border: none;
          border-radius: 5px;
          transition: background-color 0.3s ease;
        }
        .tab-buttons button.active {
          background-color: #4caf50;
          color: white;
        }
        .content {
          border: 1px solid #ddd;
          padding: 20px;
          border-radius: 10px;
        }
        h2 {
          color: #333;
        }
        h3 {
          color: #555;
        }
        p {
          line-height: 1.6;
          color: #666;
        }
      `}</style>
    </div>
  );
};

export default PolicyTerms;
