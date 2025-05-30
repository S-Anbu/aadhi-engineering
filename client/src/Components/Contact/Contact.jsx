import { Element } from 'react-scroll';
import emailjs from '@emailjs/browser';
import { useRef, useState, useEffect } from 'react';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';
import sent from '../../assets/Contact/sent.png';
import { Termsandconditions } from '../payment/FinalTerms';

const Contact = () => {
    const [show, setShow] = useState(false);
    const [formError, setFormError] = useState(false); // New state to track form errors

    useEffect(() => {
        if (show) {
            const timer = setTimeout(() => setShow(false), 2000);
            return () => clearTimeout(timer);
        }
    }, [show]);

    const form = useRef();

    // Function to validate form fields
    const validateForm = () => {
        const formData = new FormData(form.current);
        const firstName = formData.get("user_name");
        const lastName = formData.get("last_Name");
        const email = formData.get("user_email");
        const message = formData.get("message");

        if (!firstName || !lastName || !email || !message) {
            setFormError(true); // Show error message if fields are missing
            return false;
        }
        setFormError(false); // No errors, clear error state
        return true;
    };

    // Function to show the success popup
    const sendMessage = () => {
        if (validateForm()) {
            setShow(true); // Only show popup if form is valid
        }
    };

    // Function to handle email sending
    const sendEmail = (e) => {
        e.preventDefault();

        if (validateForm()) {
            emailjs
                .sendForm('service_ysaiwga', 'template_dyjscn3', form.current, {
                    publicKey: 'SQ1CD8GNjOS0JXRuE',
                })
                .then(
                    () => {
                        console.log('SUCCESS!');
                        sendMessage(); // Show success popup after email is sent
                    },
                    (error) => {
                        console.log('FAILED...', error.text);
                    }
                );
        }
    };

    return (
        <>
            <Element id="Contacts" name="Contact">
                <div className="flex justify-center my-5 lg:py-8">
                    <div className="flex flex-col items-center space-y-3 pt-20 lg:pt-12 px-2 text-center">
                        <h1 className="text-3xl font-bold">We are here to assist you</h1>
                        <p>Feel free to contact us or just drop us a line here. Our support staff will reach you very soon</p>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
                    <form
                        ref={form}
                        onSubmit={sendEmail}
                        className="bg-white p-8 rounded-md shadow-xl w-full max-w-sm md:max-w-lg"
                    >
                        <h2 className="text-2xl font-semibold mb-6 text-gray-800">Contact us</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm text-gray-600">First Name</label>
                                <input
                                    type="text"
                                    name="user_name"
                                    className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900"
                                    placeholder="First Name"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm text-gray-600">Last Name</label>
                                <input
                                    type="text"
                                    name="last_Name"
                                    className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900"
                                    placeholder="Last Name"
                                    required
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label className="block text-sm text-gray-600">Email</label>
                            <input
                                type="email"
                                name="user_email"
                                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900"
                                placeholder="Email"
                                required
                            />
                        </div>
                        <div className="mt-4">
                            <label className="block text-sm text-gray-600">Message</label>
                            <textarea
                                name="message"
                                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900"
                                placeholder="Message"
                                rows="4"
                                required
                            ></textarea>
                        </div>

                        {formError && (
                            <p className="text-red-500 text-sm mt-2">All fields are required</p> // Error message
                        )}

                        <div className="mt-6">
                            <button
                                type="submit"
                                className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition duration-300"
                            >
                                SEND MESSAGE
                            </button>
                        </div>
                    </form>

                    {show && (
                        <div className="fixed bottom-10 left-10 animate-bubble z-50">
                            <div className="bg-blue-400 flex items-center text-white py-2 px-4 rounded-full shadow-lg transform transition-all duration-700">
                                <img src={sent} className="w-10" alt="Message Sent" />
                                <span>Message Sent</span>
                            </div>
                        </div>
                    )}

                    <div className="text-xl flex flex-col items-center sm:text-2xl p-6 rounded-lg w-fit">
                        <div className="flex items-center mb-4">
                            <MdEmail className="mr-3 text-2xl fill-blue-700" />
                            <span className="text-sm md:text-2xl font-semibold">aadhiengineeringworks2021@gmail.com</span>
                        </div>
                        <div className="flex items-center mb-4">
                            <MdPhone className="mr-3 text-2xl fill-green-700" />
                            <span className="font-semibold text-sm md:text-2xl">+91 9865219547</span>
                            <span className="font-semibold text-sm md:text-2xl"> / +91 7397089417</span>
                        </div>
                        <div className="flex items-center">
                            <MdLocationOn className="mr-3 text-2xl fill-deep-orange-600" />
                            <div className="font-semibold text-sm md:text-2xl">
                                <p>NO:10 Pillaiyar Kovil Street,</p>
                                <p>Periyakalaprt, Puducherry-14</p>
                                <p>Landmark: Near Fire Station</p>
                            </div>
                        </div>
                        <div className="w-full max-w-xl py-3">
                            <div className="">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d975.5374537002544!2d79.86619890000003!3d12.033205299999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5365006a9b29a1%3A0x9d248ab6f9b18f30!2sAADHI%20Engineering%20Works!5e0!3m2!1sen!2sin!4v1728288363724!5m2!1sen!2sin&zoom=15"
                                    className="w-full h-52 border-0" 
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="AADHI Engineering Works"
                                />
                            </div>
                        </div>

                        <div className=" hidden  md:flex items-center justify-center space-x-5 mt-3 pb-2  ">
                            <a href="https://wa.me/+919865219547" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.7rem" height="1.7rem" viewBox="0 0 128 128"><path fill="#0076b2" d="M116 3H12a8.91 8.91 0 0 0-9 8.8v104.42a8.91 8.91 0 0 0 9 8.78h104a8.93 8.93 0 0 0 9-8.81V11.77A8.93 8.93 0 0 0 116 3"></path><path fill="#fff" d="M21.06 48.73h18.11V107H21.06zm9.06-29a10.5 10.5 0 1 1-10.5 10.49a10.5 10.5 0 0 1 10.5-10.49m20.41 29h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75v32H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53z"></path></svg>
                            </a>
                            <a href="https://wa.me/+919865219547" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.7rem" height="1.7rem" viewBox="0 0 16 16"><path fill="currentColor" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59c.4.07.55-.17.55-.38c0-.19-.01-.82-.01-1.49c-2.01.37-2.53-.49-2.69-.94c-.09-.23-.48-.94-.82-1.13c-.28-.15-.68-.52-.01-.53c.63-.01 1.08.58 1.23.82c.72 1.21 1.87.87 2.33.66c.07-.52.28-.87.51-1.07c-1.78-.2-3.64-.89-3.64-3.95c0-.87.31-1.59.82-2.15c-.08-.2-.36-1.02.08-2.12c0 0 .67-.21 2.2.82c.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82c.44 1.1.16 1.92.08 2.12c.51.56.82 1.27.82 2.15c0 3.07-1.87 3.75-3.65 3.95c.29.25.54.73.54 1.48c0 1.07-.01 1.93-.01 2.2c0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"></path></svg>
                            </a>
                            <a href="https://wa.me/+919865219547" target="_blank">
                                <img src="https://api.iconify.design/logos:whatsapp-icon.svg?color=%23888888" width={27} alt="Whatsapp" />
                            </a>
                            <a href="https://wa.me/+919865219547" target="_blank">
                                <img src="https://api.iconify.design/skill-icons:instagram.svg?color=%23888888" width={25} alt="instagram" />
                            </a>
                        </div>
                        <Termsandconditions/>

                    </div>
                </div>
            </Element>
        </>
    );
};

export default Contact;
