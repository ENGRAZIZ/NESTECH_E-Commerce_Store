import React, { useState } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGithub, FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const Footer = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        gender: '',
        feedback: '',
    });
    const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFeedbackSubmit = (e) => {
        e.preventDefault();
        // Handle feedback submission logic here (e.g., sending data to an API)
        setFeedbackSubmitted(true);
        setFormData({ name: '', email: '', mobile: '', gender: '', feedback: '' });
    };

    return (
        <footer className='bg-gray-800 text-white w-full py-10'>
            <div className='container mx-auto px-6 md:px-12'>
                <div className='flex flex-col md:flex-row justify-between'>
                    {/* Company Info Section */}
                    <div className='flex-1 mb-6 md:mb-0'>
                        <h3 className='text-lg font-semibold mb-4'>About Us</h3>
                        <p className='text-gray-400'>
                            NESTECH Pvt. Ltd is dedicated to providing top-notch solutions in technology and engineering. We aim to deliver quality services that meet the unique needs of our clients.
                        </p>
                        <div className='mt-4'>
                            <h3 className='text-lg font-semibold mb-2'>Contact Info</h3>
                            <p className='flex items-center text-gray-400 mb-2'>
                                <FaMapMarkerAlt className='mr-2' /> 123 NESTECH St, Tech City, TX 12345
                            </p>
                            <p className='flex items-center text-gray-400 mb-2'>
                                <FaEnvelope className='mr-2' /> <a href="mailto:info@nesttech.com" className='hover:text-gray-400'>info@nesttech.com</a>
                            </p>
                            <p className='flex items-center text-gray-400 mb-2'>
                                <FaPhoneAlt className='mr-2' /> <a href="tel:+1234567890" className='hover:text-gray-400'>+92 234 567 8900</a>
                            </p>
                        </div>
                    </div>

                    {/* Quick Links Section */}
                    <div className='flex-1 mb-6 md:mb-0 ml-44'>
                        <h3 className='text-lg font-semibold mb-4'>Quick Links</h3>
                        <ul className='list-none space-y-2'>
                            <li><a href="/about" className='hover:text-gray-400'>About Us</a></li>
                            <li><a href="/services" className='hover:text-gray-400'>Services</a></li>
                            <li><a href="/portfolio" className='hover:text-gray-400 '>Portfolio</a></li>
                            <li><a href="/contact" className='hover:text-gray-400'>Contact Us</a></li>
                            <li><a href="/privacy" className='hover:text-gray-400'>Privacy Policy</a></li>
                        </ul>
                    </div>

                    {/* Social Media Links Section */}
                    <div className='flex-1 mb-6 md:mb-0'>
                        <h3 className='text-lg font-semibold mb-4'>Follow Us</h3>
                        <div className='flex flex-col gap-5'>
                            <a href="https://facebook.com" className='flex items-center text-gray-400 hover:text-gray-300'>
                                <FaFacebookF size={20} className='mr-2' />
                                <p className='inline'>Facebook</p>
                            </a>
                            <a href="https://twitter.com" className='flex items-center text-gray-400 hover:text-gray-300'>
                                <FaTwitter size={20} className='mr-2' />
                                <p className='inline'>Twitter</p>
                            </a>
                            <a href="https://instagram.com" className='flex items-center text-gray-400 hover:text-gray-300'>
                                <FaInstagram size={20} className='mr-2' />
                                <p className='inline'>Instagram</p>
                            </a>
                            <a href="https://linkedin.com" className='flex items-center text-gray-400 hover:text-gray-300'>
                                <FaLinkedinIn size={20} className='mr-2' />
                                <p className='inline'>LinkedIn</p>
                            </a>
                            <a href="https://github.com" className='flex items-center text-gray-400 hover:text-gray-300'>
                                <FaGithub size={20} className='mr-2' />
                                <p className='inline'>GitHub</p>
                            </a>
                        </div>
                    </div>


                    {/* Feedback Form Section */}
                    <div className='flex-1'>
                        <h3 className='text-lg font-semibold mb-4'>Feedback</h3>
                        <form onSubmit={handleFeedbackSubmit} className='bg-gray-700 p-6 rounded-md text-black'>
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                className='p-2 rounded-md mb-4 w-full'
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                className='p-2 rounded-md mb-4 w-full'
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="tel"
                                name="mobile"
                                placeholder="Mobile Number"
                                className='p-2 rounded-md mb-4 w-full'
                                value={formData.mobile}
                                onChange={handleChange}
                                required
                            />
                            <select
                                name="gender"
                                className='p-2 rounded-md mb-4 w-full'
                                value={formData.gender}
                                onChange={handleChange}
                                required
                            >
                                <option value="" disabled>Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                            <textarea
                                name="feedback"
                                rows="4"
                                placeholder="Your feedback..."
                                className='p-2 rounded-md mb-4 w-full'
                                value={formData.feedback}
                                onChange={handleChange}
                                required
                            />
                            <button type="submit" className='bg-red-600 hover:bg-red-700 text-white py-2 px-3 rounded-md self-end'>Submit</button>
                        </form>
                        {feedbackSubmitted && <p className='text-green-400 mt-2'>Thank you for your feedback!</p>}
                    </div>
                </div>

                {/* Location Map Section */}
                <div className='mt-10'>
                    <h3 className='text-lg font-semibold mb-4'>Our Location</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d217759.55800924753!2d74.16958128948947!3d31.483127590969605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483e58107d9%3A0xc23abe6ccc7e2462!2sLahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1729377403839!5m2!1sen!2s"
                        width="100%"
                        height="200"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        title="NESTECH Pvt Ltd"
                        referrerpolicy="no-referrer-when-downgrade"
                    />
                </div>

                {/* Copyright Notice Section */}
                <div className='text-center text-gray-400 mt-10'>
                    <p>&copy; {new Date().getFullYear()} NESTECH. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
