'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const HeroSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
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
    console.log('Form submitted:', formData);
  };

  return (
    <section className="relative w-full flex flex-col">
      {/* Hero Main Section */}
      <div className="relative w-full h-fit flex flex-col">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/main/logo-banner.jpeg"
            alt="Hero Banner"
            fill
            priority
            style={{ objectFit: 'cover' }}
            quality={100}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/70 via-cyan-500/50 to-gray-900/80"></div>
        </div>

        {/* Main Content Container */}
        <div className="relative z-10 flex-1 w-full max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center" style={{ paddingTop: '100px' }}>

        {/* Left Content */}
        <div className="text-white space-y-6">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight drop-shadow-lg">
            PROFESSIONAL LOGO
            <br />
            DESIGN FOR YOUR
            <br />
            BUSINESS
            <br />
            <span className="block mt-3 text-3xl md:text-4xl">
              STARTS FROM <span className="text-cyan-400">$29</span>
            </span>
          </h1>

          {/* Features Grid */}
          <div className="space-y-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="flex items-center gap-2">
                <span className="text-cyan-400 text-xl">✓</span>
                <span className="text-sm font-semibold">3 Custom Logos & 3 Revisions</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-cyan-400 text-xl">✓</span>
                <span className="text-sm font-semibold">100% Ownership</span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="flex items-center gap-2">
                <span className="text-cyan-400 text-xl">✓</span>
                <span className="text-sm font-semibold">100% Money Back Guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-cyan-400 text-xl">✓</span>
                <span className="text-sm font-semibold">Dedicated Designer</span>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-start gap-4 mt-6">
            <button className="bg-gradient-to-r from-purple-600 to-cyan-400 hover:from-purple-700 hover:to-cyan-500 text-white font-bold px-7 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm">
              Chat Now To Avail Discounts
            </button>
            <a href="tel:6469939010" className="flex items-center gap-2 text-white font-bold text-base">
              <span>Call Us</span>
              <span className="text-cyan-400">(646) 993-9010</span>
            </a>
          </div>

          {/* Trust Badge */}
          <div className="flex items-center gap-4 mt-8">
            <Image
              src="/main/score.png"
              alt="Trustpilot Score"
              width={250}
              height={80}
              style={{ objectFit: 'contain' }}
            />
          </div>
        </div>

        {/* Right Form */}
        <div className="flex justify-center lg:justify-end">
          <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md border-4 border-purple-600">
            <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-6">
              Chat With Us to
              <br />
              Avail 70% Discount
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Name *"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-700 placeholder-gray-500"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address *"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-700 placeholder-gray-500"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone No. *"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-700 placeholder-gray-500"
              />

              <textarea
                name="description"
                placeholder="To help us understand better, enter a brief description about your project."
                value={formData.description}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-700 placeholder-gray-500 resize-none"
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
                  <a href="/terms" className="text-purple-600 font-semibold hover:underline">Terms of Use</a> and the{' '}
                  <a href="/privacy" className="text-purple-600 font-semibold hover:underline">Privacy Policy</a>
                </span>
              </label>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-cyan-400 hover:from-purple-700 hover:to-cyan-500 text-white font-bold py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl uppercase text-sm"
              >
                ACTIVATE YOUR COUPON NOW
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* End Hero Main Section - Content Grid */}

        {/* Client Logos Section - At Bottom of Hero */}
        <div className="relative z-20 w-full py-6 mt-auto">
          <div className="max-w-7xl mx-auto px-6">
            <Image
              src="/main/logos.png"
              alt="Client Logos"
              width={1400}
              height={80}
              style={{ objectFit: 'contain', width: '100%', height: 'auto', display: 'block' }}
            />
          </div>
        </div>
      </div>

      {/* Features Banner */}
      <div className="relative z-20 w-full">
        <div className="relative w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {/* Feature 1 - Blue */}
          <div className="bg-blue-600 px-6 py-8 flex items-center gap-4">
            <div className="text-5xl">🏆</div>
            <div>
              <h3 className="text-white font-extrabold text-sm uppercase leading-tight">
                UNIQUE LOGO DESIGNS BY AWARD WINNING DESIGNERS ENSURING 100% CUSTOMER SATISFACTION
              </h3>
            </div>
          </div>

          {/* Feature 2 - Purple */}
          <div className="bg-purple-600 px-6 py-8 flex items-center gap-4">
            <div className="text-5xl">🌍</div>
            <div>
              <h3 className="text-white font-extrabold text-sm uppercase leading-tight">
                10+ YEARS OF EXPERIENCE PROVIDING COMPETENT SERVICES ALL OVER THE WORLD
              </h3>
            </div>
          </div>

          {/* Feature 3 - Cyan */}
          <div className="bg-cyan-500 px-6 py-8 flex items-center gap-4">
            <div className="text-5xl">👨‍💼</div>
            <div>
              <h3 className="text-white font-extrabold text-sm uppercase leading-tight">
                TAKING CUSTOMER SUPPORT TO THE NEXT LEVEL WITH OUR 24/7 LIVE ASSISTANCE
              </h3>
            </div>
          </div>

          {/* Feature 4 - Green */}
          <div className="bg-green-500 px-6 py-8 flex items-center gap-4">
            <div className="text-5xl">💰</div>
            <div>
              <h3 className="text-white font-extrabold text-sm uppercase leading-tight">
                100% MONEY BACK GUARANTEE! WE WILL REFUND 100% OF YOUR PAYMENT IF WE FAIL TO DELIVER.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
