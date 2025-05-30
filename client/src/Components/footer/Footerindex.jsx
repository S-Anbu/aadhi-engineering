import React from 'react'
import AADHI3 from "../../assets/AADHI3.png"
import plumbing from '../../assets/About/plumbing.svg';
import drilling from '../../assets/About/drilling.svg';
import welding from '../../assets/About/welding.svg';
const Footerindex = () => {
    return (
        <div className='hidden md:block m-4 px-2 '>
            <div className='flex flex-col lg:flex-row items-center justify-around'>
                <div className=" ">
                    <img src={AADHI3} alt="" className=' w-sm sm:w-24 rounded-xl' />
                </div>
                <div className="flex flex-col md:flex-row justify-between p-4  gap-8 space-y-4 md:space-y-0">
                    {/* Welding Card */}
                    <a href="#Welding" className="flex items-center justify-center gap-2 bg-white shadow-lg rounded-lg p-4 w-full md:w-1/3">
                        <img src={welding} alt="" className='w-12' />
                        <h2 className="text-xl font-semibold text-gray-800">Welding</h2>
                    </a>

                    {/* Plumbing Card */}
                    <a href="#Plumbing" className="flex items-center justify-center gap-2  bg-white shadow-lg rounded-lg p-4 w-full md:w-1/3">
                        <img src={plumbing} alt="" className='w-12' />
                        <h2 className="text-xl font-semibold text-gray-800">Plumbing</h2>
                    </a>

                    {/* Electrical Card */}
                    <a href="#Electrical" className="flex items-center justify-center gap-2 bg-white shadow-lg rounded-lg p-4 w-full md:w-1/3">
                        <img src={drilling} alt="" className='w-12' />
                        <h2 className="text-xl font-semibold text-gray-800">Electrical</h2>
                    </a>
                </div>
                <div className="flex items-center space-x-4">
                    <a href='https://wa.me/+919865219547' className="bg-yellow-700 text-white px-4 py-2 font-semibold rounded-lg ">
                        {/* Calendar Icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 inline-block">
                            <path d="M19 4h-1V2h-2v2H8V2H6v2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z" />
                        </svg>
                        <span className='text-sm md:text-lg'> BOOK ONLINE</span>
                    </a>
                    <div className="flex items-center text-black font-semibold">
                        {/* Phone Icon */}
                        <a href="tel:+919865219547" target="_blank" className='px-1 md:px-4 py-2 rounded-lg bg-blue-gray-100'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 inline-block mr-1">
                                <path d="M22 16.92V21a2 2 0 0 1-2.18 2A19.83 19.83 0 0 1 3 5.18 2 2 0 0 1 5 3h4.09a2 2 0 0 1 2 1.72l.55 4.1a2 2 0 0 1-1 2.12l-2.43 1.21a16 16 0 0 0 7.15 7.16l1.21-2.43a2 2 0 0 1 2.12-1l4.1.55a2 2 0 0 1 1.72 2z" />
                            </svg>
                            <span className='text-sm md:text-lg'>
                                (+91) 9865219547
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footerindex