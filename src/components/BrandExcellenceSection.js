'use client';
import React from 'react';
import Image from 'next/image';

const BrandExcellenceSection = () => {
  const features = [
    {
      icon: '⏰',
      title: 'Constant Client',
      subtitle: 'Coordination'
    },
    {
      icon: '⭐',
      title: 'Supreme Customer',
      subtitle: 'Satisfaction'
    },
    {
      icon: '📋',
      title: '100% Ownership',
      subtitle: ''
    },
    {
      icon: '💰',
      title: '100% Money Back',
      subtitle: 'Guarantee'
    },
    {
      icon: '⭐',
      title: 'Industry Proven',
      subtitle: 'Professionals'
    }
  ];

  return (
    <section className="relative w-full py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Side - Image */}
          <div className="relative group">
            {/* Glow effect behind image */}
            <div className="absolute -inset-4 "></div>

            <div className="relative">
              <Image
                src="/main/hp2.png"
                alt="Brand Excellence Illustration"
                width={600}
                height={500}
                style={{ objectFit: 'contain', width: '100%', height: 'auto' }}
                className=""
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8">
            <div>
              <div className="inline-block mb-4">
                <span className="bg-gradient-to-r from-purple-600 to-cyan-400 text-white text-xs font-bold px-4 py-2 rounded-full">
                  WHY CHOOSE US
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-purple-600 via-purple-400 to-cyan-400 bg-clip-text text-transparent leading-tight mb-6">
                Empower Your Brand with
                Custom Logo Excellence
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed">
                <span className="font-bold text-gray-900">Our unwavering commitment is to deliver professional logo designs meticulously tailored to your brand's culture, core values, and distinctive identity.</span> Employing a strategic approach, we specialize in crafting unique brand identities that leave a lasting impression.
              </p>

              <div className="bg-gradient-to-br from-purple-50 to-cyan-50 p-6 rounded-2xl mt-6">
                <p className="text-gray-700 leading-relaxed">
                  <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-400">Blendwise INC</span> boasts a track record of <span className="font-bold text-gray-900">50,000+ successfully completed projects</span>, marked by an impressive <span className="font-bold text-gray-900">98.99% success rate.</span>
                </p>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white hover:bg-gradient-to-br hover:from-purple-600 hover:to-cyan-400 rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100 hover:border-transparent"
                >
                  <div className="flex items-center gap-3">
                    <div className="text-4xl transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                      {feature.icon}
                    </div>
                    <div>
                      <p className="text-gray-900 group-hover:text-white font-bold text-sm leading-tight transition-colors duration-300">
                        {feature.title}
                      </p>
                      {feature.subtitle && (
                        <p className="text-gray-900 group-hover:text-white font-bold text-sm leading-tight transition-colors duration-300">
                          {feature.subtitle}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA Banner */}
      <div className="relative w-full mt-20">
        <div className="relative bg-gradient-to-r from-purple-600 via-purple-500 to-cyan-400 py-12 overflow-hidden">
          {/* Animated background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute w-96 h-96 bg-white rounded-full -top-48 -left-48 animate-pulse"></div>
            <div className="absolute w-96 h-96 bg-white rounded-full -bottom-48 -right-48 animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-8">

              {/* Left - Contact Info */}
              <div className="text-white space-y-3">
                <div className="flex items-center gap-3 group">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all duration-300">
                    <span className="text-2xl">📞</span>
                  </div>
                  <a href="tel:6469939010" className="text-2xl font-black hover:scale-105 transition-transform duration-300">
                    (646) 993-9010
                  </a>
                </div>
                <div className="flex items-center gap-3 group">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all duration-300">
                    <span className="text-2xl">✉️</span>
                  </div>
                  <a href="mailto:info@blendwise.com" className="text-xl font-bold hover:scale-105 transition-transform duration-300">
                    info@blendwise.com
                  </a>
                </div>
              </div>

              {/* Center - Heading */}
              <div className="text-center">
                <h3 className="text-white text-4xl md:text-5xl font-black mb-2 drop-shadow-lg">
                  Get Free Consultancy
                </h3>
                <p className="text-white/90 text-lg">Let's discuss your project</p>
              </div>

              {/* Right - CTA Button */}
              <div>
                <button className="group relative bg-white hover:bg-gray-50 text-purple-600 font-black px-12 py-5 rounded-full transition-all duration-300 transform hover:scale-110 shadow-2xl hover:shadow-white/50 uppercase text-sm overflow-hidden">
                  <span className="relative z-10 flex items-center gap-2">
                    <span>LET'S TALK</span>
                    <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandExcellenceSection;
