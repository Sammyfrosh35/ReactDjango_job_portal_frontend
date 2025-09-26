import React, { useState } from "react";
import { FaUser, FaEnvelope, FaComment, FaPhone, FaWhatsapp, FaInstagram, FaYoutube, FaFacebook, FaTwitter } from "react-icons/fa";
import "./ContactUs.css"; 
import { MdOutlineTopic } from "react-icons/md";
import {  Link } from "react-router-dom";


const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
   
  };

  return (
    <div className="contact-us-container transition duration-300" data-aos="fade-up">
      <h1>Contact Us</h1>
      <p>We'd love to hear from you! Reach out to us via the details below or send us a message.</p>
      <div className="contact-content">

        {/* Contact Details Section */}
        <div className="contact-details">
          <h2>Contact Information</h2>
          <div className="contact-info">
            <div className="info-item">
              <div className="icon-circle">
                <FaEnvelope className="icon" />
              </div>
              <span> www.iwanwok@gmail.com</span>
            </div>
            <div className="info-item">
              <div className="icon-circle">
                <FaPhone className="icon" />
              </div>
              <span> +234-705-291-8783 </span>
            </div>

            <div className="info-item">
              <div className="icon-circle">
                <Link to="https://www.facebook.com/">
                <FaFacebook className="icon" />
                </Link>
                
              </div>

              <div className="socials mt-20">
            </div>
            <div className="info-item ml-10">
              <div className="icon-circle">
                <Link to="https://wa.me/2348120254201">
                <FaWhatsapp className="icon" />
                </Link>
              </div>
              <span></span>
            </div>
            <div className="info-item ml-10">
              <div className="icon-circle">
                <Link to="https://www.instagram.com/iwanwoklimited?igsh=YzljYTk1ODg3Zg==">
                <FaInstagram className="icon" />
                </Link>
              </div>
              
            </div>
            <div className="info-item ml-10">
              <div className="icon-circle">
                <FaYoutube className="icon" />
              </div>
            
            </div>
            
            <div className="info-item ml-10">
              <div className="icon-circle">
                 <Link to="https://x.com/i_wan_wok?s=21">
                <FaTwitter className="icon" />
              </div>
              
            </div>
          </div>
        </div>
        </div>

        {/* Contact Form Section */}
        <div className="contact-form-section">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">

            <div className="info-item">
              <div className="icon-circle form-icon">
                <FaUser className="icon" />
              </div>
              <span>Full Name</span>
            </div>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </div>


            <div className="form-group">
              <div className="info-item">
                <div className="icon-circle form-icon">
                  <MdOutlineTopic className="icon" />
                </div>
                 <span>Subject</span>
              </div>
                <input type="text" id="subject" name="subject" value={formData.subject} 
                onChange={handleChange} placeholder="Please tell us the Purpose" required/>
          </div>


           
          <div className="form-group">
              <div className="info-item">
                <div className="icon-circle form-icon">
                  <FaEnvelope className="icon" />
                </div>
                 <span>Email</span>
              </div>
                <input type="text" id="email" name="email" value={formData.name} 
                onChange={handleChange} placeholder="Enter your Email" required/>
          </div>

         

          
            <div className="form-group">
              <div className="info-item">
              <div className="icon-circle form-icon">
                <FaComment className="icon" />
              </div>
              <span>Message Body</span>
              </div>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your message"
                rows="5"
                required
              />
            </div>
            <button type="submit" className="w-full md:w-auto bg-green-500 text-white px-4 py-2 rounded">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
