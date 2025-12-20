'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const ContactHero = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
  };

  return (
    <div className="relative w-full">
      {/* Hero Section */}
      <section className="relative w-full min-h-[60vh] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/main/logo-banner.jpeg"
            alt="Contact Hero Background"
            fill
            priority
            style={{ objectFit: 'cover' }}
            quality={100}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/80 via-cyan-500/60 to-gray-900/90"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 w-full h-full">
          <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-center text-center" style={{ minHeight: '60vh', paddingTop: '100px' }}>
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight drop-shadow-lg">
                We Love To Hear
                <br />
                <span className="text-cyan-400">From You</span>
              </h1>
              <p className="text-white text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
                Have a question or ready to start your project? We're here to help! Reach out to our team and let's discuss how we can bring your vision to life with our expert logo design, branding, and digital solutions.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <button className="bg-gradient-to-r from-purple-600 to-cyan-400 hover:from-purple-700 hover:to-cyan-500 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  Get Started
                </button>
                <button className="bg-white text-purple-600 hover:bg-gray-100 font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  Live Chat
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="relative w-full py-20 bg-gradient-to-br from-purple-600 via-purple-700 to-cyan-600">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* Left Side - Heading and Description */}
            <div className="text-white">
              <p className="text-sm font-bold tracking-widest uppercase mb-4">Contact Us</p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
                Let's Start Your
                <br />
                Project
              </h2>
              <p className="text-lg leading-relaxed">
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
                  className="w-full px-6 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-700 placeholder-gray-400"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-700 placeholder-gray-400"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-700 placeholder-gray-400"
                />
                <textarea
                  name="message"
                  placeholder="Send Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  className="w-full px-6 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-700 placeholder-gray-400 resize-none"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-black hover:bg-gray-900 text-white font-bold py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl uppercase text-sm"
                >
                  Send Us Message
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative w-full py-16 bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            {/* Left - Call Toll Free */}
            <div className="text-center bg-white rounded-3xl p-12 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
              <div className="w-24 h-24 bg-gradient-to-br from-purple-600 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-5xl text-white">🎧</span>
              </div>
              <h3 className="text-3xl font-extrabold text-gray-900 mb-4">Call Toll Free</h3>
              <p className="text-gray-600 mb-6">For any queries that you may have.</p>
              <a href="tel:8665097909" className="text-3xl font-bold text-gray-900 hover:text-purple-600 transition-colors">
                866-509-7909
              </a>
            </div>

            {/* Right - Start Live Chat */}
            <div className="text-center bg-white rounded-3xl p-12 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
              <div className="w-24 h-24 bg-gradient-to-br from-purple-600 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-5xl text-white">💬</span>
              </div>
              <h3 className="text-3xl font-extrabold text-gray-900 mb-4">Start Live Chat</h3>
              <p className="text-gray-600 mb-6">With one of our representatives and get all the assistance that you need.</p>
              <button className="bg-gradient-to-r from-purple-600 to-cyan-400 hover:from-purple-700 hover:to-cyan-500 text-white font-bold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
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
              <span className="text-4xl font-light text-gray-600 italic">Salvatore</span>
              <p className="text-xs text-gray-500">new york</p>
            </div>
            <div className="text-center">
              <span className="text-5xl font-serif text-gray-600">R</span>
              <p className="text-xs text-gray-500 tracking-widest uppercase">Rovella</p>
            </div>
            <div className="text-center">
              <span className="text-4xl font-light text-gray-600 tracking-wider">LLOYD</span>
              <p className="text-xs text-gray-500 tracking-widest uppercase">Management</p>
            </div>
            <div className="text-center">
              <span className="text-4xl font-light text-gray-600 italic">JIMMY</span>
              <p className="text-xs text-gray-500">CO.</p>
            </div>
            <div className="text-center">
              <span className="text-4xl font-script text-gray-600 italic">Cupcakes</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ContactHero;
