import React from 'react';

const RazorpayPayment = () => {
  const handlePayment = () => {
    const options = {
      key: 'rzp_test', // Enter the Key ID generated from Razorpay Dashboard
      amount: 1000, // Amount in paisa (for example, 1000 paisa = INR 10)
      currency: 'INR',
      name: 'Your Company Name',
      description: 'Test Transaction',
      image: 'https://example.com/your_logo', // Replace with your logo
      handler: function (response) {
        // This function gets triggered on successful payment
        alert(`Payment ID: ${response.razorpay_payment_id}`);
        // You can call your backend API here to verify payment if necessary
      },
      prefill: {
        name: 'Customer Name',
        email: 'customer@example.com',
        contact: '9999999999',
      },
      notes: {
        address: 'Some address here',
      },
      theme: {
        color: '#3399cc',
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <div>
      <h1>Razorpay Payment Gateway</h1>
      <button onClick={handlePayment}>Pay Now</button>
    </div>
  );
};

export default RazorpayPayment;
