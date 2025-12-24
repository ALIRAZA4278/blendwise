'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    description: '',
    agreed: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Footer form submitted:', formData);
  };

  const pressLogos = [
    '/main/entrepreneur.png',
    '/main/inc.png',
    '/main/tdw.png',
    '/main/technasia.png',
    '/main/forbes.png',
    '/main/huffpost.png'
  ];

  return (
    <footer className="relative w-full bg-white">
      {/* Press Logos Section */}
      <div className="w-full py-6 bg-gray-50 border-t border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            {pressLogos.map((logo, index) => (
              <div key={index} className="opacity-60 hover:opacity-100 transition-opacity duration-300">
                <Image
                  src={logo}
                  alt={`Press Logo ${index + 1}`}
                  width={80}
                  height={30}
                  style={{ objectFit: 'contain' }}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="w-full py-8 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">

          {/* Left Side - Text */}
          <div>
            <h2 className="font-black text-[#8a21f0] mb-2 leading-tight" style={{ fontSize: '36px' }}>
              In search of a quote,
              <br />
              simply ask
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4" style={{ fontSize: '16px' }}>
              Whether you prefer filling out our form for a tailored response or giving us a call, <span className="font-bold text-[#8a21f0]">Blendwise INC</span> is ready to discuss your upcoming project. We're here to ensure the right person promptly connects with you.
            </p>
            <div className="mt-4">
              <svg width="100" height="60" viewBox="0 0 150 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 50 Q 40 10, 80 50 T 140 50" stroke="#d1d5db" strokeWidth="3" fill="none"/>
                <path d="M135 45 L 145 50 L 135 55" fill="#d1d5db"/>
              </svg>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="bg-white rounded-xl shadow-xl p-4">
            <form onSubmit={handleSubmit} className="space-y-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-2.5 py-1.5 text-xs border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8a21f0] text-gray-700 placeholder-gray-400"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-2.5 py-1.5 text-xs border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8a21f0] text-gray-700 placeholder-gray-400"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone No."
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-2.5 py-1.5 text-xs border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8a21f0] text-gray-700 placeholder-gray-400"
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-2.5 py-1.5 text-xs border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8a21f0] text-gray-700 placeholder-gray-400"
                />
              </div>

              <textarea
                name="description"
                placeholder="To help us understand better, enter a brief description about your project."
                value={formData.description}
                onChange={handleChange}
                rows="3"
                className="w-full px-2.5 py-1.5 text-xs border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8a21f0] text-gray-700 placeholder-gray-400 resize-none"
              ></textarea>

              <label className="flex items-start gap-1.5 text-[10px] text-gray-700">
                <input
                  type="checkbox"
                  name="agreed"
                  checked={formData.agreed}
                  onChange={handleChange}
                  required
                  className="mt-0.5 w-3 h-3 text-[#8a21f0] border-gray-300 rounded focus:ring-[#8a21f0]"
                />
                <span>
                  I have read & fully understood and agreed to the{' '}
                  <a href="/terms-conditions" className="text-[#8a21f0] font-semibold hover:underline">Terms of Use</a> and the{' '}
                  <a href="/privacy-policy" className="text-[#8a21f0] font-semibold hover:underline">Privacy Policy</a>
                </span>
              </label>

              <button
                type="submit"
                className="w-full bg-[#8a21f0] hover:bg-[#7a1dd8] text-white font-bold py-2 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl uppercase text-[10px]"
              >
                ● Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="w-full bg-black py-3">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-white text-[10px]">
            Copyright © Blendwise INC. All Rights Reserved 2022
          </p>
          <div className="flex items-center gap-3">
            <a href="/privacy-policy" className="text-white text-[10px] font-semibold hover:underline hover:text-[#35a5e8] transition-colors duration-300">
              Privacy Policy
            </a>
            <span className="text-white text-[10px]">●</span>
            <a href="/terms-conditions" className="text-white text-[10px] font-semibold hover:underline hover:text-[#35a5e8] transition-colors duration-300">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
