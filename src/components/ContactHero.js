'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import QuoteModal from './QuoteModal';

const ContactHero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, formType: 'contact' }),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <div className="relative w-full">
      {/* Hero Section */}
      <section className="relative w-full min-h-[60vh] overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
          {/* Base Gradient */}
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

          {/* Diagonal Lines */}
          <div className="absolute top-0 left-0 w-full h-full opacity-5">
            <div className="absolute top-1/4 -left-1/4 w-[150%] h-px bg-gradient-to-r from-transparent via-[#35a5e8] to-transparent rotate-12"></div>
            <div className="absolute top-2/3 -right-1/4 w-[150%] h-px bg-gradient-to-r from-transparent via-[#8a21f0] to-transparent -rotate-12"></div>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 w-full h-full">
          <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-center text-center" style={{ minHeight: '60vh', paddingTop: '100px' }}>
            <div className="space-y-6 animate-fadeInUp">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight drop-shadow-lg animate-fadeInUp animation-delay-200">
                We Love To Hear
                <br />
                <span className="text-[#35a5e8]">From You</span>
              </h1>
              <p className="text-white text-sm leading-relaxed max-w-3xl mx-auto">
                Have a question or ready to start your project? We're here to help! Reach out to our team and let's discuss how we can bring your vision to life with our expert logo design, branding, and digital solutions.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <button onClick={() => setIsModalOpen(true)} className="bg-gradient-to-r from-[#8a21f0] to-[#35a5e8] hover:from-[#7a1dd8] hover:to-[#2a94d8] text-white font-bold px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-xs">
                  Get Started
                </button>
                <button onClick={() => setIsModalOpen(true)} className="bg-white text-[#8a21f0] hover:bg-gray-100 font-bold px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-xs">
                  Live Chat
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="relative w-full py-20 bg-gradient-to-br from-[#8a21f0] via-[#7a1dd8] to-[#35a5e8]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* Left Side - Heading and Description */}
            <div className="text-white">
              <p className="text-[10px] font-black tracking-widest uppercase mb-4">Contact Us</p>
              <h2 className="text-2xl md:text-3xl font-black mb-6 leading-tight">
                Let's Start Your
                <br />
                Project
              </h2>
              <p className="text-sm leading-relaxed">
                Ready to elevate your brand with exceptional logo design and digital solutions? Fill out the form below and our expert team will get back to you within 24 hours to discuss your project requirements and provide a custom solution.
              </p>
            </div>

            {/* Right Side - Form */}
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8a21f0] text-gray-700 placeholder-gray-400 text-sm"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8a21f0] text-gray-700 placeholder-gray-400 text-sm"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8a21f0] text-gray-700 placeholder-gray-400 text-sm"
                />
                <textarea
                  name="message"
                  placeholder="Send Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8a21f0] text-gray-700 placeholder-gray-400 resize-none text-sm"
                ></textarea>
                {status === 'success' && (
                  <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg text-sm text-center font-semibold">
                    Message sent successfully! We'll get back to you within 24 hours.
                  </div>
                )}
                {status === 'error' && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm text-center font-semibold">
                    Something went wrong. Please try again.
                  </div>
                )}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-black hover:bg-gray-900 text-white font-bold py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl uppercase text-xs disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {loading ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg>
                      Sending...
                    </span>
                  ) : 'Send Us Message'}
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative w-full py-16 bg-gradient-to-br from-[#8a21f0] via-[#7a1dd8] to-[#6a15c0]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">

            {/* USA Office */}
            <div className="text-center bg-white rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 animate-fadeInLeft hover-lift">
              <div className="w-16 h-16 bg-gradient-to-br from-[#8a21f0] to-[#35a5e8] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">🇺🇸</span>
              </div>
              <h3 className="text-lg font-black text-gray-900 mb-2">USA Office</h3>
              <p className="text-gray-600 mb-3 text-xs leading-relaxed">10300 National Blvd<br />Los Angeles, CA 90034</p>
              <a href="tel:+17866190117" className="text-xl font-bold text-gray-900 hover:text-[#8a21f0] transition-colors">
                +1 (786) 619-0117
              </a>
            </div>

            {/* Australia Office */}
            <div className="text-center bg-white rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 animate-fadeInUp animation-delay-200 hover-lift">
              <div className="w-16 h-16 bg-gradient-to-br from-[#8a21f0] to-[#35a5e8] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">🇦🇺</span>
              </div>
              <h3 className="text-lg font-black text-gray-900 mb-2">Australia Office</h3>
              <p className="text-gray-600 mb-3 text-xs leading-relaxed">Seville Grove<br />Perth, Australia</p>
              <a href="tel:+61426676432" className="text-xl font-bold text-gray-900 hover:text-[#8a21f0] transition-colors">
                +61 426 676 432
              </a>
            </div>

            {/* Start Live Chat */}
            <div className="text-center bg-white rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 animate-fadeInRight animation-delay-400 hover-lift">
              <div className="w-16 h-16 bg-gradient-to-br from-[#8a21f0] to-[#35a5e8] rounded-full flex items-center justify-center mx-auto mb-4 animate-float">
                <span className="text-2xl text-white">💬</span>
              </div>
              <h3 className="text-lg font-black text-gray-900 mb-2">Start Live Chat</h3>
              <p className="text-gray-600 mb-3 text-xs leading-relaxed">With one of our representatives<br />and get all the assistance you need.</p>
              <button onClick={() => setIsModalOpen(true)} className="bg-gradient-to-r from-[#8a21f0] to-[#35a5e8] hover:from-[#7a1dd8] hover:to-[#2a94d8] text-white font-bold px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg text-xs">
                Start Chat Now
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* Portfolio Logos Section */}
      <section className="relative w-full py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-12 opacity-40 grayscale">
            <div className="text-center">
              <span className="text-2xl font-light text-gray-600 italic">Salvatore</span>
              <p className="text-[10px] text-gray-500">new york</p>
            </div>
            <div className="text-center">
              <span className="text-3xl font-serif text-gray-600">R</span>
              <p className="text-[10px] text-gray-500 tracking-widest uppercase">Rovella</p>
            </div>
            <div className="text-center">
              <span className="text-2xl font-light text-gray-600 tracking-wider">LLOYD</span>
              <p className="text-[10px] text-gray-500 tracking-widest uppercase">Management</p>
            </div>
            <div className="text-center">
              <span className="text-2xl font-light text-gray-600 italic">JIMMY</span>
              <p className="text-[10px] text-gray-500">CO.</p>
            </div>
            <div className="text-center">
              <span className="text-2xl font-script text-gray-600 italic">Cupcakes</span>
            </div>
          </div>
        </div>
      </section>

    </div>

    <style jsx>{`
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

      .animate-float {
        animation: float 6s ease-in-out infinite;
      }

      .animate-float-delayed {
        animation: float-delayed 8s ease-in-out infinite;
      }
    `}</style>

    {/* Quote Modal */}
    <QuoteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default ContactHero;
