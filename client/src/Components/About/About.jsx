import React from 'react'
import slider2 from '../../assets/slider3.jpeg';
import slider3 from '../../assets/slider3.webp';
import slider4 from '../../assets/sliderset2.jpg';
import slider5 from '../../assets/sliderset1.jpg';
import slider6 from '../../assets/sliderset4.jpg';
import slider7 from '../../assets/sliderset5.jpg';
import aboutus from '../../assets/About/aboutus.jpg';
import plumbing from '../../assets/About/plumbing.svg';
import drilling from '../../assets/About/drilling.svg';
import welding from '../../assets/About/welding.svg';

const About = () => {
    const images = [
        { id: 1, src: slider2, alt: 'Image 1' },
        { id: 2, src: slider3, alt: 'Image 2' },
        { id: 3, src: slider4, alt: 'Image 3' },
        { id: 4, src: slider5, alt: 'Image 4' },
        { id: 5, src: slider6, alt: 'Image 5' },
        { id: 6, src: slider7, alt: 'Image 6' },
    ];
    return (
        <section id='About' name='About' className='pt-20  mx-4' >
            <div className="bg-gray-100 p-8 lg:px-20 pt-10 rounded-lg max-w-full mx-auto">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">About Us</h1>
                <h2 className=" text-md md:text-2xl font-semibold text-gray-800 mb-4">
                    Our goal is to bring the highest quality, integrity, & customer service.
                </h2>
                <div className='flex flex-col lg:flex-row items-center h-auto justify-center lg:gap-x-10'>
                    <ul className="list-disc pl-5 text-sm md:text-lg text-gray-600 leading-relaxed space-y-2">
                        <li>Over 10 years of experience in welding, plumbing, and electrical services.</li>
                        <li>Specialize in delivering top-quality solutions for all types of projects.</li>
                        <li>Trusted partner for all home and business service needs.</li>
                        <li>Focus on customer satisfaction and safety as top priorities.</li>
                        <li>We offer 24/7 service for your convenience.</li>
                        <li>For service or more information, call +919865219547 for all inquiries.</li>
                        <li>Schedule an appointment online, and we will call you back for confirmation.</li>
                    </ul>
                    <div className=' md:w-[300px] '>
                        <img src={aboutus} alt="" className='   rounded-xl' />
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between p-4 pt-10 space-y-4 md:space-y-0">
                    {/* Welding Card */}
                    
                        <a href="#Welding" className="flex items-center justify-center gap-2 bg-white shadow-lg rounded-lg p-4 w-full md:w-1/4">
                            
                            <img src={welding} alt="" className='w-12' />
                            <h2 className="text-xl font-semibold text-gray-800">Welding</h2>
                        </a>
                  

                    {/* Plumbing Card */}
                    
                        <a href="#Plumbing" className="flex items-center justify-center gap-2  bg-white shadow-lg rounded-lg p-4 w-full md:w-1/4">
                            <img src={plumbing} alt="" className='w-12' />
                            <h2 className="text-xl font-semibold text-gray-800">Plumbing</h2>
                        </a>
                    

                    {/* Electrical Card */}
                    
                        <a href="#Electrical" className="flex items-center justify-center gap-2 bg-white shadow-lg rounded-lg p-4 w-full md:w-1/4">
                            <img src={drilling} alt="" className='w-12' />
                            <h2 className="text-xl font-semibold text-gray-800">Electrical</h2>
                        </a>
                    
                </div>
            </div>
            <div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4">
                    {images.map((image) => (
                        <div key={image.id} className="overflow-hidden rounded-lg">
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300 ease-in-out"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default About