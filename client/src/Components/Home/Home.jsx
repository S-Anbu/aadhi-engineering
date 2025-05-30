import React from "react";
import { CarouselDefault } from "./CarouselDefault";
import { CarouselMobile } from "./CarouselMobile";
import ontimeicon from "../../assets/home/always-on-time-icon.svg";
import bookonlineicon from "../../assets/home/book-online-icon.svg";
import excellenticon from "../../assets/home/excellent-service-icon.svg";
import ConsultationButton from "../Navbar/ConsultationButton";

import About from "../../Components/About/About";
import Contact from "../../Components/Contact/Contact";
import Whatsapp from "../../Components/Contact/Whatsapp";
import ElectricalServices from "../../Components/services/ElectricalServices";
import PlumbingServices from "../../Components/services/PlumbingServices";
import Serviceindex from "../../Components/services/Serviceindex";
import WeldingServices from "../../Components/services/WeldingServices";
import { GalleryWithTab } from "../../Components/Works/GalleryWithTab";
import Price from "../../Components/Pricedetails/Price";
import Footerindex from "../../Components/footer/Footerindex";

const Home = () => {
  return (
    <>
      <div className="pt-16 space-y-8 md:space-y-3">
        <CarouselDefault className="hidden md:block " />
        <CarouselMobile className="" />
        <div className=" lg:hidden bg-gray-300 text-center mx-4 rounded-md p-4 my-4 flex items-center justify-center">
          <ConsultationButton />
        </div>
        <div className="bg-black text-white rounded-md flex  items-center justify-around mx-4 py-9 md:py-5">
          <a>
            <div className="flex flex-col items-center">
              <img
                src={excellenticon}
                className="w-12 sm:w-20"
                alt="Excelent"
              />
              <span className=" text-xs font-bold sm:text-xl">
                Excelent service{" "}
              </span>
            </div>
          </a>
          <a>
            <div className="flex   flex-col items-center">
              <img src={ontimeicon} className="w-12 sm:w-20" alt="on time" />
              <span className="text-xs font-bold sm:text-xl">
                Always on time{" "}
              </span>
            </div>
          </a>
          <a>
            <div className="flex flex-col  items-center">
              <img
                src={bookonlineicon}
                className="w-12 sm:w-20"
                alt="Easy to book"
              />
              <span className="text-xs font-bold sm:text-xl">
                {" "}
                Easy to book{" "}
              </span>
            </div>
          </a>
        </div>
      </div>
      <About />
      <ElectricalServices />
      <WeldingServices />
      <PlumbingServices />
      <Whatsapp />
      <GalleryWithTab />
      <Serviceindex />
      <Price />
      <Contact />
      <Footerindex />
    </>
  );
};

export default Home;
