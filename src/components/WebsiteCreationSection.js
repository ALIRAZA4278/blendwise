'use client';
import React from 'react';
import Image from 'next/image';

const WebsiteCreationSection = () => {
  const features = [
    {
      icon: '📊',
      title: 'Agile Website Development Software Development',
      description: 'We believe in work efficiency and hate waste. That\'s why we are minimizing the risks of website development by releasing early and often and building you a professional web design that reflects brand identity.'
    },
    {
      icon: '🤝',
      title: 'Long-Term Partnership',
      description: 'Our dedicated Website Development Team operates as your partner. Developers breathe your vision, understand your product or services and primarily focus on reaching your business\'s ultimate goals.'
    },
    {
      icon: '⚙️',
      title: 'Software Craftsmanship',
      description: 'P2P - Peer-to-peer code review and automatic testing is our lifeblood. We know how to find the best web design & development solutions and how to handle technical debt wisely.'
    }
  ];

  return (
    <section className="relative w-full py-8 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">

          {/* Left Side - Content & Features */}
          <div className="space-y-3 animate-fadeInLeft">
            <div>
              <h2 className="font-black text-[#8a21f0] leading-tight mb-2 animate-fadeInUp animation-delay-200" style={{ fontSize: '30px' }}>
                Have freedom to launch and grow your business with Custom Website Development Service.
              </h2>
              <p className="text-gray-700 leading-relaxed animate-fadeInUp animation-delay-300" style={{ fontSize: '14px' }}>
                We believe anything is possible with a good website design to engage visitors. Whether you're new to the industry to create a website for the first time or you're a long-time pro, Custom Web Guru got you covered. Just call us and find the best web developer near your region as we offer cheap custom website design packages in the market.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-2">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex gap-2 items-start group hover-lift animate-fadeInUp"
                  style={{ animationDelay: `${(index + 4) * 0.1}s` }}
                >
                  {/* Icon */}
                  <div className="shrink-0">
                    <div className="w-8 h-8 bg-[#8a21f0]/10 rounded-lg flex items-center justify-center group-hover:bg-[#8a21f0] transition-all duration-300 group-hover:scale-110">
                      <span className="text-base group-hover:scale-125 transition-transform duration-300">{feature.icon}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-[#8a21f0] font-black mb-0.5 group-hover:text-[#35a5e8] transition-colors duration-300" style={{ fontSize: '14px' }}>
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed" style={{ fontSize: '14px' }}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Device Mockups */}
          <div className="relative order-first lg:order-last animate-fadeInRight animation-delay-200">
            <div className="relative">
              {/* Main Large Device */}
              <div className="relative z-10 animate-float">
                <div className="relative bg-white rounded-lg shadow-lg overflow-hidden border-2 border-gray-200 hover-lift">
                  <div className="aspect-[4/3] bg-[#8a21f0] p-3">
                    <div className="bg-white/10 backdrop-blur-sm rounded-md p-2 h-full flex flex-col">
                      <div className="flex justify-between items-center mb-1.5">
                        <div className="text-white font-black text-xs">Home Improvement Studio</div>
                        <div className="flex gap-0.5">
                          <div className="w-1.5 h-1.5 bg-white/30 rounded-full animate-pulse"></div>
                          <div className="w-1.5 h-1.5 bg-white/30 rounded-full animate-pulse animation-delay-100"></div>
                          <div className="w-1.5 h-1.5 bg-white/30 rounded-full animate-pulse animation-delay-200"></div>
                        </div>
                      </div>
                      <div className="flex-1 bg-white/20 rounded-sm"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Smaller Overlapping Devices */}
              <div className="absolute -bottom-3 -left-3 z-20 w-24 animate-fadeInLeft animation-delay-400">
                <div className="bg-white rounded-md shadow-md overflow-hidden border border-gray-200 hover-scale">
                  <div className="aspect-square bg-[#35a5e8] p-1.5">
                    <div className="bg-white/20 rounded-sm h-full"></div>
                  </div>
                </div>
              </div>

              <div className="absolute top-1/2 -right-3 z-20 w-20 animate-fadeInRight animation-delay-500">
                <div className="bg-white rounded-md shadow-md overflow-hidden border border-gray-200 hover-scale">
                  <div className="aspect-[3/4] bg-[#8a21f0] p-1.5">
                    <div className="bg-white/20 rounded-sm h-full"></div>
                  </div>
                </div>
              </div>

              {/* Background Decoration */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#35a5e8]/10 rounded-full blur-xl -z-10 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[#8a21f0]/10 rounded-full blur-xl -z-10 animate-pulse animation-delay-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebsiteCreationSection;
