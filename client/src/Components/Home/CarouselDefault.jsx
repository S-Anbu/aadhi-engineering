import { Carousel } from "@material-tailwind/react";
import slider1 from '../../assets/largeImage.webp';
import slider2 from '../../assets/slider3.jpeg';
import slider3 from '../../assets/slider3.webp';
import slider4 from '../../assets/sliderset2.jpg';
import slider5 from '../../assets/sliderset1.jpg';
import slider6 from '../../assets/sliderset4.jpg';
import slider7 from '../../assets/sliderset5.jpg';

export function CarouselDefault() {
  const slides=[
    {
      image: slider1,
      title: "Welcome to AADHI Engineering Works",
      subtitle1: "#1 Welding",
      subtitle2: "Services Provider",
      buttonText: "our services",
      href:'#Welding'
    },
    {
      image: slider2,
      title: "10 Years of high-quality welding services",
      subtitle1: "Certified Welding",
      subtitle2: "Of Any Complexity",
      buttonText: "our services",
      href:'#Welding'

    },
    {
      image: slider3,
      title: "Providing reliable & innovative welding services",
      subtitle1: "Industry Leading",
      subtitle2: "Welding Solutions",
      buttonText: "our services",
      href:'#Welding'

    },
    {
      image: slider4,
      title: "24/7 Emergency Electrical Support",
      subtitle1: " Fast, dependable assistance",
      subtitle2: " when you need it most",
      buttonText: "our services",
      href:'#Electrical'

    },
    {
      image: slider5,
      title: "Expert Electrical Installations",
      subtitle1: " Safe, reliable solutions for",
      subtitle2: " homes and businesses",
      buttonText: "our services",
      href:'#Electrical'

    },
    {
      image: slider6,
      title: "Professional Plumbing Services",
      subtitle1: "Industry Leading",
      subtitle2: "Welding Solutions",
      buttonText: "our services",
      href:'#Plumbing'

    },
    {
      image: slider7,
      title: "Bathroom & Kitchen Installations",
      subtitle1: "Upgrade your space with",
      subtitle2: "modern plumbing fixtures",
      buttonText: "our services",
      href:'#Plumbing'

    }
  ]

  return (
    <Carousel
      className="rounded-xl w-auto mx-4 my-3 h-80 md:h-[450px] hidden lg:flex"
      loop={true}
      autoplay={true}
      transition={{ duration: 1 }}
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
            className="h-full w-full object-cover relative"
          />
          <div className="absolute bg-black/60 w-full h-full top-0 text-white flex flex-col items-center justify-center gap-y-8">
            <h1 className="uppercase text-[20px] text-[#fce200] font-bold">{slide.title}</h1>
            <div className="text-center flex flex-col gap-2">
            <p className="text-3xl sm:text-5xl font-bold">{slide.subtitle1}</p>
            <p className="text-3xl sm:text-5xl font-bold">{slide.subtitle2}</p>
            </div>
            <a href={slide.href}  className="uppercase px-4 py-2 text-black rounded-md font-bold bg-[#fce200] bg-opacity-90 ">
              {slide.buttonText}
            </a>
          </div>
        </div>
      ))}
    </Carousel>
  );
}
