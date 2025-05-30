import React, { useEffect } from "react";
const RazorpayButton = () => {
  useEffect(() => {
    const existingScript = document.getElementById("razorpay-script");

    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/payment-button.js";
      script.setAttribute("data-payment_button_id", import.meta.env.VITE_PAYMENT_BUTTON_ID);
      script.id = "razorpay-script";
      script.async = true;
      document.getElementById("razorpay-button-container").appendChild(script);

      return () => {
        if (script) {
          script.remove();
        }
      };
    }
  }, []);

  return (
    <form id="razorpay-button-container">
      {/* Razorpay button will be inserted here */}
    </form>
  );
};

export default RazorpayButton;
