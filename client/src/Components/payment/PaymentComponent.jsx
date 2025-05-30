import React, { useState } from 'react';
import { NotificationDialog } from './NotificationDialog';

const PaymentComponent = () => {
    const [amount, setAmount] = useState(0);
    const [currency, setCurrency] = useState('INR');
    const [paymentId, setPaymentId] = useState('');
    const [paymentStatus, setPaymentStatus] = useState('');

    const handleAmountChange = (event) => {
        setAmount(event.target.value);
    };

    const handleCurrencyChange = (event) => {
        setCurrency(event.target.value);
    };

    const handlePayment = () => {
        // Create a new Razorpay order
        const options = {
            key: 'YOUR_RAZORPAY_KEY_ID', // Replace with your Razorpay key ID
            amount: amount * 100, // Convert amount to paise
            currency: currency,
            name: 'Payment',
            description: 'Payment for services',
            image: 'https://example.com/logo.png',
            handler: (response) => {
                // Handle payment response
                setPaymentId(response.razorpay_payment_id);
                setPaymentStatus(response.razorpay_payment_status);
            },
            prefill: {
                name: 'John Doe',
                email: 'johndoe@example.com',
                contact: '9999999999',
            },
            notes: {
                address: 'Hello, World!',
            },
            theme: {
                color: '#F37254',
            },
        };

        const rzp1 = new window.Razorpay(options);
        rzp1.open();
    };

    return (
        <div className='bg-black '>
            <div>
                <h2 className='text-[#fce200]'>Make a Payment</h2>
                <form>
                    <div className='mb-3'>
                    <label className='text-white '>Amount:</label>
                    <input className='bg-blue-gray-50 px-4 py-1 w-24 outline-none' type="number" value={amount} onChange={handleAmountChange} />
                    </div>
                    <div>
                    <label className='text-white '>Currency:</label>
                    <select className='bg-blue-gray-50 px-4 py-1 outline-none' value={currency} onChange={handleCurrencyChange}>
                        <option value="INR">INR</option>
                        <option value="USD">USD</option>
                    </select>
                    </div>
                    <br />
                    <button className='bg-[#fce200] rounded-full px-4 py-2' onClick={handlePayment}>Make Payment</button>
                </form>
                {paymentId && (
                    <p>
                        Payment ID: {paymentId}
                        <br />
                        Payment Status: {paymentStatus}
                    </p>
                )}
            </div>
            <div>
                <NotificationDialog/>
            </div>
        </div>
    );
};

export default PaymentComponent;