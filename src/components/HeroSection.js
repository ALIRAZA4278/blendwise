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
      <div className="relative w-full min-h-[85vh] flex flex-col">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-[#1a0a2e] to-black"></div>

          {/* Animated Grid Pattern */}
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `linear-gradient(#8a21f0 1px, transparent 1px), linear-gradient(90deg, #8a21f0 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
            animation: 'grid-move 20s linear infinite'
          }}></div>

          {/* Floating Orbs */}
          <div className="absolute top-10 left-5 w-48 h-48 bg-[#35a5e8]/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-10 right-5 w-64 h-64 bg-[#8a21f0]/10 rounded-full blur-3xl animate-float-delayed"></div>
          <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-[#35a5e8]/5 rounded-full blur-2xl animate-float"></div>

          {/* Decorative circles */}
          <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-white/5 rounded-full blur-2xl"></div>
          <div className="absolute bottom-1/3 right-1/3 w-24 h-24 bg-white/5 rounded-full blur-2xl"></div>

          {/* Diagonal Lines */}
          <div className="absolute top-0 left-0 w-full h-full opacity-5">
            <div className="absolute top-1/4 -left-1/4 w-[150%] h-px bg-gradient-to-r from-transparent via-[#35a5e8] to-transparent rotate-12"></div>
            <div className="absolute top-2/3 -right-1/4 w-[150%] h-px bg-gradient-to-r from-transparent via-[#8a21f0] to-transparent -rotate-12"></div>
          </div>
        </div>

        {/* Main Content Container */}
        <div className="relative z-10 flex-1 w-full max-w-6xl mx-auto px-4 py-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center" style={{ paddingTop: '90px', paddingBottom: '40px' }}>

          {/* Left Content */}
          <div className="text-white space-y-4 animate-fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5">
              <span className="text-[#35a5e8] text-base">⭐</span>
              <span className="text-xs font-bold">Award Winning Design Agency</span>
            </div>

            <h1 className="text-2xl md:text-3xl lg:text-4xl font-black leading-tight drop-shadow-2xl">
              <span className="text-white">
                PROFESSIONAL
              </span>
              <br />
              <span className="text-white">
                LOGO DESIGN
              </span>
              <br />
              <span className="text-white">
                FOR YOUR BUSINESS
              </span>
            </h1>

            {/* Price Tag */}
            <div className="flex items-baseline gap-2">
              <p className="text-white text-sm font-semibold">Starting From</p>
              <p className="text-3xl font-black text-[#35a5e8]">$29</p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {[
                '3 Custom Logos & 3 Revisions',
                '100% Ownership Rights',
                '100% Money Back Guarantee',
                'Dedicated Designer'
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-3 py-2 hover:bg-white/20 transition-all duration-300">
                  <div className="shrink-0 w-4 h-4 rounded-full bg-[#8a21f0] flex items-center justify-center">
                    <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-xs font-bold">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-start gap-3">
              <button className="group relative bg-[#8a21f0] hover:bg-[#7a1dd8] text-white font-bold px-6 py-2.5 rounded-full transition-all duration-300 shadow-lg text-xs uppercase">
                <span className="relative z-10">Chat Now to Avail Discounts</span>
              </button>
              <a href="tel:6469939010" className="flex items-center gap-2 bg-white/10 backdrop-blur-md border-2 border-white/30 rounded-full px-3 py-1.5 hover:bg-white/20 transition-all duration-300">
                <span className="text-base">📞</span>
                <div>
                  <p className="text-[10px] font-semibold">Call Us: </p>
                  <p className="text-xs font-black text-[#35a5e8]">(646) 993-9010</p>
                </div>
              </a>
            </div>

            {/* Trust Badge */}
            <div className="flex items-center gap-3 pt-2">
              <Image
                src="/main/score.png"
                alt="Trustpilot Score"
                width={180}
                height={60}
                style={{ objectFit: 'contain' }}
                className="drop-shadow-xl"
              />
            </div>
          </div>

          {/* Right Form */}
          <div className="flex justify-center lg:justify-end animate-fade-in-up-delayed">
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-[#8a21f0]/50 rounded-2xl blur-lg opacity-75 animate-pulse"></div>

              <div className="relative bg-white rounded-2xl shadow-2xl p-4 w-full max-w-sm">
                <div className="text-center mb-3">
                  <div className="inline-block bg-[#8a21f0] text-white text-[10px] font-bold px-2 py-1 rounded-full mb-1.5">
                    LIMITED TIME OFFER
                  </div>
                  <h2 className="text-lg font-black text-[#8a21f0]">
                    Get 70% Discount
                  </h2>
                  <p className="text-gray-600 text-[10px] mt-0.5">Fill the form & activate your coupon</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-2">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name *"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-2.5 py-1.5 text-xs border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#8a21f0] text-gray-700 placeholder-gray-400 transition-all duration-300"
                  />

                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address *"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-2.5 py-1.5 text-xs border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#8a21f0] text-gray-700 placeholder-gray-400 transition-all duration-300"
                  />

                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number *"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-2.5 py-1.5 text-xs border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#8a21f0] text-gray-700 placeholder-gray-400 transition-all duration-300"
                  />

                  <textarea
                    name="description"
                    placeholder="Brief description about your project..."
                    value={formData.description}
                    onChange={handleChange}
                    rows="2"
                    className="w-full px-2.5 py-1.5 text-xs border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#8a21f0] text-gray-700 placeholder-gray-400 resize-none transition-all duration-300"
                  ></textarea>

                  <label className="flex items-start gap-1.5 text-[10px] text-gray-600">
                    <input
                      type="checkbox"
                      name="agreed"
                      checked={formData.agreed}
                      onChange={handleChange}
                      required
                      className="mt-0.5 w-3 h-3 text-[#8a21f0] border-gray-300 rounded focus:ring-[#8a21f0]"
                    />
                    <span className="text-[10px]">
                      I agree to the{' '}
                      <a href="/terms-conditions" className="text-[#8a21f0] font-semibold hover:underline">Terms</a> and{' '}
                      <a href="/privacy-policy" className="text-[#8a21f0] font-semibold hover:underline">Privacy Policy</a>
                    </span>
                  </label>

                  <button
                    type="submit"
                    className="w-full bg-[#8a21f0] hover:bg-[#7a1dd8] text-white font-bold py-2 rounded-lg transition-all duration-300 shadow-lg uppercase text-[10px]"
                  >
                    🎉 ACTIVATE COUPON NOW
                  </button>
                </form>

                {/* Security Badge */}
                <div className="flex items-center justify-center gap-1.5 mt-2 text-gray-500 text-[10px]">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                  <span>Your information is 100% secure</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Client Logos Section */}
        <div className="relative z-20 w-full py-4 bg-white/10 backdrop-blur-md">
          <div className="max-w-6xl mx-auto px-4">
            <Image
              src="/main/logos.png"
              alt="Client Logos"
              width={1000}
              height={50}
              style={{ objectFit: 'contain', width: '100%', height: 'auto', display: 'block' }}
              className="opacity-80 hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        </div>
      </div>

      {/* Features Banner */}
      <div className="relative z-20 w-full shadow-xl">
        <div className="relative w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {/* Feature 1 */}
          <div className="group relative bg-[#8a21f0] px-4 py-5 flex items-center gap-3 hover:bg-[#7a1dd8] transition-all duration-300 overflow-hidden">
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            <div className="text-3xl transform group-hover:scale-110 transition-all duration-300">🏆</div>
            <div className="relative z-10">
              <h3 className="text-white font-black text-[10px] uppercase leading-relaxed">
                Award Winning Designers Ensuring 100% Satisfaction
              </h3>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="group relative bg-[#6a1ac8] px-4 py-5 flex items-center gap-3 hover:bg-[#5a15a8] transition-all duration-300 overflow-hidden">
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            <div className="text-3xl transform group-hover:scale-110 transition-all duration-300">🌍</div>
            <div className="relative z-10">
              <h3 className="text-white font-black text-[10px] uppercase leading-relaxed">
                10+ Years Experience Serving Clients Worldwide
              </h3>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="group relative bg-[#35a5e8] px-4 py-5 flex items-center gap-3 hover:bg-[#2590d8] transition-all duration-300 overflow-hidden">
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            <div className="text-3xl transform group-hover:scale-110 transition-all duration-300">👨‍💼</div>
            <div className="relative z-10">
              <h3 className="text-white font-black text-[10px] uppercase leading-relaxed">
                24/7 Live Customer Support Always Available
              </h3>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="group relative bg-[#1585c8] px-4 py-5 flex items-center gap-3 hover:bg-[#1070b0] transition-all duration-300 overflow-hidden">
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            <div className="text-3xl transform group-hover:scale-110 transition-all duration-300">💰</div>
            <div className="relative z-10">
              <h3 className="text-white font-black text-[10px] uppercase leading-relaxed">
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

        @keyframes grid-move {
          0% { transform: translateY(0); }
          100% { transform: translateY(50px); }
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
