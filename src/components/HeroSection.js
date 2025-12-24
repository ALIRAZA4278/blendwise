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
    <section className="relative w-full flex flex-col overflow-hidden">
      {/* Hero Main Section */}
      <div className="relative w-full min-h-screen flex flex-col">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/main/logo-banner.jpeg"
            alt="Hero Banner"
            fill
            priority
            style={{ objectFit: 'cover' }}
            quality={100}
          />
          {/* Gradient Overlay with Animation */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/85 via-purple-600/60 to-cyan-500/70 animate-gradient-shift"></div>

          {/* Floating Orbs */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-400/30 rounded-full blur-3xl animate-float-delayed"></div>
        </div>

        {/* Main Content Container */}
        <div className="relative z-10 flex-1 w-full max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" style={{ paddingTop: '120px', paddingBottom: '60px' }}>

          {/* Left Content */}
          <div className="text-white space-y-8 animate-fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-2">
              <span className="text-cyan-400 text-xl">⭐</span>
              <span className="text-sm font-bold">Award Winning Design Agency</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight drop-shadow-2xl">
              <span className="bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent">
                PROFESSIONAL
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-purple-300 bg-clip-text text-transparent">
                LOGO DESIGN
              </span>
              <br />
              <span className="text-white">
                FOR YOUR BUSINESS
              </span>
            </h1>

            {/* Price Tag */}
            <div className="flex items-baseline gap-2">
              <p className="text-white text-lg font-semibold">Starting From</p>
              <p className="text-4xl font-black bg-gradient-to-r from-cyan-400 to-white bg-clip-text text-transparent">$29</p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                '3 Custom Logos & 3 Revisions',
                '100% Ownership Rights',
                '100% Money Back Guarantee',
                'Dedicated Designer'
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-3 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm font-bold">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <button className="group relative bg-gradient-to-r from-purple-600 to-cyan-400 hover:from-purple-700 hover:to-cyan-500 text-white font-bold px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-110 shadow-2xl hover:shadow-purple-500/50 text-sm">
                <span className="relative z-10">Chat Now - Get 70% OFF</span>
                <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </button>
              <a href="tel:6469939010" className="flex items-center gap-2 bg-white/10 backdrop-blur-md border-2 border-white/30 rounded-full px-4 py-2 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                <span className="text-xl">📞</span>
                <div>
                  <p className="text-xs font-semibold">Call Us Now</p>
                  <p className="text-sm font-black text-cyan-400">(646) 993-9010</p>
                </div>
              </a>
            </div>

            {/* Trust Badge */}
            <div className="flex items-center gap-4 pt-4">
              <Image
                src="/main/score.png"
                alt="Trustpilot Score"
                width={250}
                height={80}
                style={{ objectFit: 'contain' }}
                className="drop-shadow-xl"
              />
            </div>
          </div>

          {/* Right Form */}
          <div className="flex justify-center lg:justify-end animate-fade-in-up-delayed">
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-cyan-400 to-purple-600 rounded-3xl blur-xl opacity-75 animate-pulse"></div>

              <div className="relative bg-white rounded-3xl shadow-2xl p-6 w-full max-w-md">
                <div className="text-center mb-5">
                  <div className="inline-block bg-gradient-to-r from-purple-600 to-cyan-400 text-white text-xs font-bold px-3 py-1 rounded-full mb-2">
                    LIMITED TIME OFFER
                  </div>
                  <h2 className="text-2xl font-black bg-gradient-to-r from-purple-600 to-cyan-400 bg-clip-text text-transparent">
                    Get 70% Discount
                  </h2>
                  <p className="text-gray-600 text-xs mt-1">Fill the form & activate your coupon</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-3">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name *"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2.5 text-sm border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-500 text-gray-700 placeholder-gray-400 transition-all duration-300 hover:border-gray-300"
                  />

                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address *"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2.5 text-sm border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-500 text-gray-700 placeholder-gray-400 transition-all duration-300 hover:border-gray-300"
                  />

                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number *"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2.5 text-sm border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-500 text-gray-700 placeholder-gray-400 transition-all duration-300 hover:border-gray-300"
                  />

                  <textarea
                    name="description"
                    placeholder="Brief description about your project..."
                    value={formData.description}
                    onChange={handleChange}
                    rows="3"
                    className="w-full px-3 py-2.5 text-sm border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-500 text-gray-700 placeholder-gray-400 resize-none transition-all duration-300 hover:border-gray-300"
                  ></textarea>

                  <label className="flex items-start gap-2 text-xs text-gray-600">
                    <input
                      type="checkbox"
                      name="agreed"
                      checked={formData.agreed}
                      onChange={handleChange}
                      required
                      className="mt-0.5 w-3.5 h-3.5 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                    />
                    <span className="text-xs">
                      I agree to the{' '}
                      <a href="/terms-conditions" className="text-purple-600 font-semibold hover:underline">Terms</a> and{' '}
                      <a href="/privacy-policy" className="text-purple-600 font-semibold hover:underline">Privacy Policy</a>
                    </span>
                  </label>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-cyan-400 hover:from-purple-700 hover:to-cyan-500 text-white font-bold py-3 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl uppercase text-xs relative overflow-hidden group"
                  >
                    <span className="relative z-10">🎉 ACTIVATE COUPON NOW</span>
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  </button>
                </form>

                {/* Security Badge */}
                <div className="flex items-center justify-center gap-2 mt-4 text-gray-500 text-xs">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                  <span>Your information is 100% secure</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Client Logos Section */}
        <div className="relative z-20 w-full py-8 bg-white/10 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-6">
            <Image
              src="/main/logos.png"
              alt="Client Logos"
              width={1400}
              height={80}
              style={{ objectFit: 'contain', width: '100%', height: 'auto', display: 'block' }}
              className="opacity-80 hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        </div>
      </div>

      {/* Features Banner */}
      <div className="relative z-20 w-full shadow-2xl">
        <div className="relative w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {/* Feature 1 */}
          <div className="group relative bg-gradient-to-br from-blue-600 to-blue-700 px-6 py-10 flex items-center gap-4 hover:from-blue-700 hover:to-blue-800 transition-all duration-300 overflow-hidden">
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            <div className="text-6xl transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">🏆</div>
            <div className="relative z-10">
              <h3 className="text-white font-black text-xs uppercase leading-relaxed">
                Award Winning Designers Ensuring 100% Satisfaction
              </h3>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="group relative bg-gradient-to-br from-purple-600 to-purple-700 px-6 py-10 flex items-center gap-4 hover:from-purple-700 hover:to-purple-800 transition-all duration-300 overflow-hidden">
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            <div className="text-6xl transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">🌍</div>
            <div className="relative z-10">
              <h3 className="text-white font-black text-xs uppercase leading-relaxed">
                10+ Years Experience Serving Clients Worldwide
              </h3>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="group relative bg-gradient-to-br from-cyan-500 to-cyan-600 px-6 py-10 flex items-center gap-4 hover:from-cyan-600 hover:to-cyan-700 transition-all duration-300 overflow-hidden">
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            <div className="text-6xl transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">👨‍💼</div>
            <div className="relative z-10">
              <h3 className="text-white font-black text-xs uppercase leading-relaxed">
                24/7 Live Customer Support Always Available
              </h3>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="group relative bg-gradient-to-br from-green-500 to-green-600 px-6 py-10 flex items-center gap-4 hover:from-green-600 hover:to-green-700 transition-all duration-300 overflow-hidden">
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            <div className="text-6xl transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">💰</div>
            <div className="relative z-10">
              <h3 className="text-white font-black text-xs uppercase leading-relaxed">
                100% Money Back Guarantee on All Services
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* Add animations in a style tag */}
      <style jsx>{`
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-20px) scale(1.1); }
        }

        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(20px) scale(1.1); }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-gradient-shift {
          background-size: 200% 200%;
          animation: gradient-shift 8s ease infinite;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }

        .animate-fade-in-up-delayed {
          animation: fade-in-up 0.8s ease-out 0.3s both;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
