import React from "react";
import { Pservices } from "./data/Pservices";
const PlumbingServices = () => {
  return (
    <section id="Plumbing" name="Plumbing" className="pt-16">
      <div
        id="Plumbing"
        className="bg-gray-900 text-white py-10 mx-4 rounded "
      >
        <div className="text-center">
          <h2 className="text-[#fce200] text-3xl md:text-4xl font-bold mb-4">
            Plumbing Services
          </h2>
          <p className=" text-md md:text-lg px-2 md:px-0">
            Get Professional Plumbing Help Today
          </p>
        </div>

        <div className=" grid grid-cols-2 md:grid-cols-4 place-items-center mt-5 gap-y-8 gap-4- px-4 ">
          {Pservices.map((service, index) => (
            <div
              key={index}
              className="group  bg- w-36 md:w-42 lg:w-44 h-36 md:h-42 lg:h-44 flex shadow-[0_0_25px_8px_rgba(0,0,0,0.7)] flex-col items-center justify-center rounded-full  transition-shadow  hover:shadow-[0_0_25px_8px_rgba(255,255,0,0.7)] hover:bg-[#fce200] hover:text-black hover:fill-black"
            >
              <div className="text-[#fce200] text-5xl mb-3 ">
                {service.icon}
              </div>
              <p className="text-center   group-hover:text-black font-bold ">
                {service.name}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <a href="tel:+919865219547">
            <button className="bg-[#fce200] text-black py-2 px-6 rounded-full font-bold text-lg shadow-lg">
              Book a Call ⚡
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default PlumbingServices;
