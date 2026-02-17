import React from 'react';
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';

const Footer = () => {
  return (
    <div className="footer p-10 mb-4 bg-gray-800 rounded-2xl gap-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 m-auto items-start justify-center">
      <div>
        <div className="longDiv">
          <h1 className="logo text-2xl text-white pb-4">
            <span>Job</span> Search
          </h1>
        </div>
        <p className="text-white pb-4 opacity-70 leading-7">
          We will always make our Job seekers find the best jobs while the companies find the best talents!!
        </p>
      </div>
      <div className="grid">
        <span className="divTitle text-lg font-semibold pb-4 text-white">
          Company
        </span>
        <div className="grid gap-2">
          <li className="text-white opacity-70 hover:opacity-100">About Us</li>
          <li className="text-white opacity-70 hover:opacity-100">Features</li>
          <li className="text-white opacity-70 hover:opacity-100">News</li>
          <li className="text-white opacity-70 hover:opacity-100">FAQ</li>
        </div>
      </div>

      <div className="grid">
        <span className="divTitle text-lg font-semibold pb-4 text-white">
          Resources
        </span>
        <div className="grid gap-2">
          <li className="text-white opacity-70 hover:opacity-100">Account</li>
          <li className="text-white opacity-70 hover:opacity-100">Support Center</li>
          <li className="text-white opacity-70 hover:opacity-100">Feedback</li>
          <li className="text-white opacity-70 hover:opacity-100">Contact Us</li>
        </div>
      </div>

      <div className="grid">
        <span className="divTitle text-lg font-semibold pb-4 text-white">
          Support
        </span>
        <div className="grid gap-2">
          <li className="text-white opacity-70 hover:opacity-100">Events</li>
          <li className="text-white opacity-70 hover:opacity-100">Promo</li>
          <li className="text-white opacity-70 hover:opacity-100">More Info</li>
          <li className="text-white opacity-70 hover:opacity-100">FAQ</li>
        </div>
      </div>

      <div className="grid">
        <span className="divTitle text-lg font-semibold pb-4 text-white">
          Contact Us
        </span>

        <div>
          <small className="text-sm text-white">i-wan-wok@gmail.com</small>
          <div className="icons flex gap-4 py-4">
            <AiFillInstagram className="bg-white p-2 h-9 w-9 rounded-full icon text-green-600" />
            <BsFacebook className="bg-white p-2 h-9 w-9 rounded-full icon text-green-600" />
            <AiOutlineTwitter className="bg-white p-2 h-9 w-9 rounded-full icon text-green-600" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
