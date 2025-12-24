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
      <div className="w-full py-12 bg-gray-50 border-t border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {pressLogos.map((logo, index) => (
              <div key={index} className="opacity-60 hover:opacity-100 transition-opacity duration-300">
                <Image
                  src={logo}
                  alt={`Press Logo ${index + 1}`}
                  width={120}
                  height={40}
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
      <div className="w-full py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Left Side - Text */}
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-purple-600 to-cyan-400 bg-clip-text text-transparent mb-6 leading-tight">
              In search of a quote,
              <br />
              simply ask
            </h2>
            <p className="text-gray-500 text-base leading-relaxed mb-8">
              Whether you prefer filling out our form for a tailored response or giving us a call, <span className="font-bold">Blendwise INC</span> is ready to discuss your upcoming project. We're here to ensure the right person promptly connects with you.
            </p>
            <div className="mt-8">
              <svg width="150" height="100" viewBox="0 0 150 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 50 Q 40 10, 80 50 T 140 50" stroke="#d1d5db" strokeWidth="3" fill="none"/>
                <path d="M135 45 L 145 50 L 135 55" fill="#d1d5db"/>
              </svg>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-700 placeholder-gray-400"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-700 placeholder-gray-400"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone No."
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-700 placeholder-gray-400"
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-700 placeholder-gray-400"
                />
              </div>

              <textarea
                name="description"
                placeholder="To help us understand better, enter a brief description about your project."
                value={formData.description}
                onChange={handleChange}
                rows="5"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-700 placeholder-gray-400 resize-none"
              ></textarea>

              <label className="flex items-start gap-2 text-sm text-gray-700">
                <input
                  type="checkbox"
                  name="agreed"
                  checked={formData.agreed}
                  onChange={handleChange}
                  required
                  className="mt-1 w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                />
                <span>
                  I have read & fully understood and agreed to the{' '}
                  <a href="/terms-conditions" className="text-purple-600 font-semibold hover:underline">Terms of Use</a> and the{' '}
                  <a href="/privacy-policy" className="text-purple-600 font-semibold hover:underline">Privacy Policy</a>
                </span>
              </label>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-cyan-400 hover:from-purple-700 hover:to-cyan-500 text-white font-bold py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl uppercase text-sm"
              >
                ● Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="w-full bg-gradient-to-r from-purple-600 to-cyan-400 py-4">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white text-sm">
            Copyright © Blendwise INC. All Rights Reserved 2022
          </p>
          <div className="flex items-center gap-6">
            <a href="/privacy-policy" className="text-white text-sm font-semibold hover:underline">
              Privacy Policy
            </a>
            <span className="text-white">●</span>
            <a href="/terms-conditions" className="text-white text-sm font-semibold hover:underline">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>

      {/* Chat Button */}
      <button className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 py-3 shadow-2xl transition-all duration-300 transform hover:scale-110 flex items-center gap-2 z-50">
        <span className="text-xl">💬</span>
        <span className="font-bold text-sm">Chat</span>
      </button>
    </footer>
  );
};

export default Footer;
