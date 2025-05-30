import React, { useState } from 'react';


// Privacy Policy Content
const PrivacyPolicy = () => (
  <div>
    <h2 className="text-2xl font-bold mb-4">Privacy Policy</h2>
    <p className="mb-4">
      We at AADHI ENGINEERING WORKS value your privacy and are committed to protecting your personal data. 
      This Privacy Policy outlines how we collect, use, and protect the information you provide when using 
      our website and services, including Razorpay as our payment gateway.
    </p>
    <h3 className="text-xl font-semibold">Data We Collect</h3>
    <p className="mb-4">
      - Personal information (name, email, etc.) for account setup or transactions.<br />
      - Payment details processed through Razorpay (we do not store card or banking details).
    </p>
    <h3 className="text-xl font-semibold">How We Use Your Data</h3>
    <p className="mb-4">
      - To process your payment through Razorpay.<br />
      - To communicate with you about your order.<br />
      - To comply with legal obligations and prevent fraud.
    </p>
    <h3 className="text-xl font-semibold">Third-Party Services</h3>
    <p className="mb-4">
      We use Razorpay for payment processing. Razorpay has its own privacy policies, which you can review 
      on their website.
    </p>
    <h3 className="text-xl font-semibold">Security</h3>
    <p className="mb-4">
      We implement industry-standard security measures to protect your data. However, no method of transmission 
      over the Internet is 100% secure.
    </p>
    <h3 className="text-xl font-semibold">Changes to This Policy</h3>
    <p className="mb-4">
      We reserve the right to update this Privacy Policy as needed. The latest version will always be available 
      on this page.
    </p>
    <p>
      For more, visit <a href="https://razorpay.com/privacy/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Razorpay Privacy Policy</a>.
    </p>
  </div>
);

// Terms and Conditions Content
const TermsAndConditions = () => (
  <div>
    <h2 className="text-2xl font-bold mb-4">Terms and Conditions</h2>
    <p className="mb-4">
      By using AADHI ENGINEERING WORKS, you agree to these Terms and Conditions. Please read them carefully before 
      proceeding with any transactions on our platform.
    </p>
    <h3 className="text-xl font-semibold">Payment Terms</h3>
    <p className="mb-4">
      - We use Razorpay as our payment gateway for secure payments.<br />
      - All payments must be completed in full before any services or products are provided.
    </p>
    <h3 className="text-xl font-semibold">Refund & Cancellation Policy</h3>
    <p className="mb-4">
      - <span className='font-bold'>No Refunds:</span> Due to the nature of our services/products, we do not offer any refunds once payment has been made.<br />
      - <span className='font-bold'>No Cancellations:</span> Once a transaction has been completed, it cannot be canceled.
    </p>
    <h3 className="text-xl font-semibold">Delivery Policy</h3>
    <p className="mb-4">
      As our services/products are digital/non-physical, there are no delivery obligations.
    </p>
    <h3 className="text-xl font-semibold">Limitation of Liability</h3>
    <p className="mb-4">
      We are not liable for any issues related to Razorpay payment processing. Please contact Razorpay directly for payment disputes or issues.
    </p>
    <h3 className="text-xl font-semibold">Changes to Terms</h3>
    <p className="mb-4">
      We reserve the right to modify these Terms and Conditions at any time. Any changes will be updated on this page.
    </p>
  </div>
);

// Main Component
const PolicyComponent = () => {
  const [view, setView] = useState('terms'); // To manage which content is visible

  return (
    <div className="container mx-auto ">

      {/* Buttons to toggle views */}
      <div className="flex justify-center mb-6 space-x-4">
        <button 
          className="bg-gray-900 text-white px-6 py-2 rounded-md hover:bg-gray-700 transition duration-300" 
          onClick={() => setView('privacy')}
        >
          Privacy Policy
        </button>
        <button 
          className="bg-gray-500 text-white  px-6 py-2 rounded-md hover:bg-gray-400 transition duration-300" 
          onClick={() => setView('terms')}
        >
          Terms & Conditions
        </button>
      </div>

      {/* Conditional rendering of content */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
        {view === 'privacy' && <PrivacyPolicy />}
        {view === 'terms' && <TermsAndConditions />}
      </div>
    </div>
  );
};

export default PolicyComponent;
