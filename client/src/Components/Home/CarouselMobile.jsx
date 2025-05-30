import { Carousel } from "@material-tailwind/react";
import slider1 from '../../assets/smallImage.webp';
import slider3 from '../../assets/slider3.webp';
import slider2 from '../../assets/slider3.jpeg';
import slider5 from '../../assets/sliderset1.jpg';
import slider6 from '../../assets/sliderset4.jpg';
import slider7 from '../../assets/sliderset5.jpg';
import slider4 from '../../assets/sliderset2.jpg';


export function CarouselMobile() {
  const slides=[
    {
      image: slider1,
      title: "Welcome to AADHI Engineering Works",
      subtitle1: "#1 Welding",
      subtitle2: "Services Provider",
      buttonText: "our services"
    },
    {
      image: slider2,
      title: "10 Years of high-quality welding services",
      subtitle1: "Certified Welding",
      subtitle2: "Of Any Complexity",
      buttonText: "our services"
    },
    {
      image: slider3,
      title: "Providing reliable & innovative welding services",
      subtitle1: "Industry Leading",
      subtitle2: "Welding Solutions",
      buttonText: "our services"
    },
    {
      image: slider4,
      title: "24/7 Emergency Electrical Support",
      subtitle1: " Fast, dependable assistance",
      subtitle2: " when you need it most",
      buttonText: "our services"
    },
    {
      image: slider5,
      title: "Expert Electrical Installations",
      subtitle1: " Safe, reliable solutions for",
      subtitle2: " homes and businesses",
      buttonText: "our services"
    },
    {
      image: slider6,
      title: "Professional Plumbing Services",
      subtitle1: "Industry Leading",
      subtitle2: "Welding Solutions",
      buttonText: "our services"
    },
    {
      image: slider7,
      title: "Bathroom & Kitchen Installations",
      subtitle1: "Upgrade your space with",
      subtitle2: "modern plumbing fixtures",
      buttonText: "our services"
    }
  ]
  return (
    <Carousel
      className="rounded-xl w-auto mx-4 my-3 h-80 md:h-96 lg:hidden"
      loop={true}
      autoplay={true}
      transition={{ duration: 2 }}
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      {slides.map((slide, index) => (
        <div key={index} className="w-full h-full">
          <img
            src={slide.image}
            alt={`slide ${index + 1}`}
            className="h-full w-full object-cover object-center relative"
          />
          <div className="absolute bg-black/60 w-full h-full top-0 text-white flex flex-col items-center justify-center gap-y-5">
            <h1 className="uppercase font-bold text-[16px] sm:text-[18px] text-center text-yellow-600 " data-aos="fade-up" data-aos-easing="ease-in-back" data-aos-anchor-placement="top-center" data-aos-delay="300">
              {slide.title}
            </h1>
            <div className="text-center gap-y-3 flex flex-col">
            <p className="text-3xl sm:text-5xl font-bold">{slide.subtitle1}</p>
            <p className="text-3xl sm:text-5xl font-bold">{slide.subtitle2}</p>
            </div>
            <button className="uppercase px-4 py-2 font-bold rounded-md bg-[#ffc107] bg-opacity-90">
              {slide.buttonText}
            </button>
          </div>
        </div>
      ))}
    </Carousel>
  );
}
