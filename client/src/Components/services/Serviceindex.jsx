import React from 'react';
import { FaShieldAlt, FaHandshake, FaFileInvoiceDollar, FaClock } from 'react-icons/fa';

const Serviceindex = () => {
  const promoItems = [
    {
      icon: <FaShieldAlt />,
      title: '100% Satisfaction Guarantee',
      description: 'You’ll get an extra level of protection and peace of mind with our UWIN Guarantee.',
    },
    {
      icon: <FaHandshake />,
      title: 'Local Technicians You Can Trust',
      description: 'All AADHI techs are trained, licensed, insured, and local.',
    },
    {
      icon: <FaFileInvoiceDollar />,
      title: 'StraightForward Pricing®',
      description: 'We’ll give you options for your service so you know exactly what you’re getting.',
    },
    {
      icon: <FaClock />,
      title: '24/7 Emergency Services',
      description: 'Our electricians are here for you, no matter the time of day...or night!',
    },
  ];

  return (
    <div className="bg-black text-white py-12 px-6 mx-4 my-4 rounded">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold">
          Play It Safe & Choose
          <span className='text-[#fce200]'> AADHI</span>®
        </h1>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {promoItems.map((item, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="text-[#fce200] text-5xl mb-4">
              {item.icon}
            </div>
            <h2 className="text-xl font-bold">{item.title}</h2>
            <p className="mt-2">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Serviceindex;
