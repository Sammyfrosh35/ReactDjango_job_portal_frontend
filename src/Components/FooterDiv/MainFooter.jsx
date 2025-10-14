import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-between mb-6">
                    <div className="w-full sm:w-1/2 lg:w-1/4 mb-6 sm:mb-0">
                        <h3 className="text-lg font-semibold mb-2">Company</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/about" className="hover:underline">About Us</Link>
                            </li>
                            <li>
                                <Link to="/services" className="hover:underline">Services</Link>
                            </li>
                            <li>
                                <Link to="/contact" className="hover:underline">Contact</Link>
                            </li>
                            <li>
                                <Link to="/privacy" className="hover:underline">Privacy Policy</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="w-full sm:w-1/2 lg:w-1/4 mb-6 sm:mb-0">
                        <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/4 mb-6 sm:mb-0">
                        <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
                        <p className="mb-2">1234 Main St</p>
                        <p className="mb-2">City, State, ZIP</p>
                        <p className="mb-2">Email: <a href="mailto:info@example.com" className="hover:underline">iwanwok@gmail.com</a></p>
                        <p>Phone: <a href="tel:+1234567890" className="hover:underline">+234 8120254201</a></p>
                    </div>

                    <div className="w-full lg:w-1/4 mb-6 sm:mb-0">
                        <h3 className="text-lg font-semibold mb-2">Subscribe</h3>
                        <form action="#" method="POST" className="flex flex-col">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="p-2 mb-2 rounded bg-gray-700 border border-gray-600 text-white"
                            />
                            <button type="submit" className="bg-green-500 p-2 rounded text-white hover:bg-green-600">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
                
                <div className="border-t border-gray-600 pt-4 text-center text-sm">
                    <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
