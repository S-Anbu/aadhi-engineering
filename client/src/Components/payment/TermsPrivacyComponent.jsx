import React, { useState } from "react";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const TermsPrivacyComponent = () => {
  const [view, setView] = useState("terms"); // State to switch between views

  return (
    <div className="p-6 ">
      {/* Main Title */}
      <h1 className="text-3xl font-bold mb-6">
        Terms and Conditions and Privacy Policy
      </h1>

      {/* Buttons to switch between views */}
      <div className="mb-6">
        <button
          className={`px-4 py-2 mr-4 mb-4 font-semibold rounded ${
            view === "terms"
              ? "bg-green-500 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => setView("terms")}
        >
          Terms & Conditions
        </button>
        <button
          className={`px-4 py-2 mb-4 font-semibold rounded ${
            view === "privacy"
              ? "bg-gray-200 text-gray-700" 
              : "bg-green-500 text-white"
          }`}
          onClick={() => setView("privacy")}
        >
          Privacy Policy
        </button>
      </div>

      {/* Content Section */}
      <div className="mb-8">
        {view === "terms" ? (
          <>
            <h2 className="text-2xl font-semibold mb-4">Terms and Conditions</h2>
            <p className="mb-4">
              This section will contain the Terms and Conditions of your
              business. You can elaborate on usage policies, disclaimers, and
              user agreements.
            </p>
            <img
              src="https://via.placeholder.com/200x150?text=Terms+Image"
              alt="Terms and Conditions"
              className="w-full max-w-sm mt-4"
            />
          </>
        ) : (
          <>
            <h2 className="text-2xl font-semibold mb-4">Privacy Policy</h2>
            <p className="mb-4">
              This section will contain your Privacy Policy. You can explain how
              user data is collected, stored, and managed in this section.
            </p>
            <img
              src="https://via.placeholder.com/200x150?text=Privacy+Image"
              alt="Privacy Policy"
              className="w-full max-w-sm mt-4"
            />
          </>
        )}
      </div>

      {/* Contact Section */}
      <h2 className="text-2xl font-semibold mb-4">Contact</h2>
      <div className="flex flex-col space-y-4">
        <div className="flex items-center">
          <FaEnvelope className="text-gray-600 mr-2" />
          <span>Email: contact@example.com</span>
        </div>
        <div className="flex items-center">
          <FaPhoneAlt className="text-gray-600 mr-2" />
          <span>Phone: +1 234 567 890</span>
        </div>
      </div>
    </div>
  );
};

export default TermsPrivacyComponent;
