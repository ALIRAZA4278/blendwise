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
    <section className="relative w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Side - Image */}
          <div className="flex justify-center">
            <Image
              src="/main/hp2.png"
              alt="Brand Excellence Illustration"
              width={600}
              height={500}
              style={{ objectFit: 'contain', width: '100%', height: 'auto' }}
            />
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-purple-600 to-cyan-400 bg-clip-text text-transparent leading-tight">
              Empower Your Brand with
              <br />
              Custom
              <br />
              Logo Excellence
            </h2>

            <p className="text-gray-700 text-base leading-relaxed">
              <span className="font-bold">Our unwavering commitment is to deliver professional logo designs meticulously tailored to coat your brand's culture, core values, and distinctive identity.</span> Employing a strategic approach, we specialize in crafting unique brand identities that leave a lasting impression. <span className="font-bold">Logowise INC</span> boasts a track record of <span className="font-bold">50,000+ successfully completed projects</span>, marked by an impressive <span className="font-bold">98.99% success rate.</span> Choose excellence, choose <span className="font-bold">Logowise INC</span> for a logo that truly speaks to your brand's essence.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="text-3xl">{feature.icon}</div>
                  <div>
                    <p className="text-gray-900 font-bold text-sm leading-tight">
                      {feature.title}
                    </p>
                    {feature.subtitle && (
                      <p className="text-gray-900 font-bold text-sm leading-tight">
                        {feature.subtitle}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Purple-Cyan Banner */}
      <div className="relative w-full mt-16 bg-gradient-to-r from-purple-600 to-cyan-400 py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Left - Contact Info */}
          <div className="text-white space-y-2">
            <div className="flex items-center gap-3">
              <span className="text-2xl">📞</span>
              <a href="tel:6469939010" className="text-xl font-bold hover:underline">
                (646) 993-9010
              </a>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl">✉️</span>
              <a href="mailto:info@logowiseinc.com" className="text-lg font-semibold hover:underline">
                info@logowiseinc.com
              </a>
            </div>
          </div>

          {/* Center - Heading */}
          <div className="text-center">
            <h3 className="text-white text-3xl md:text-4xl font-extrabold">
              Get Free Consultancy
            </h3>
          </div>

          {/* Right - CTA Button */}
          <div>
            <button className="bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white font-bold px-12 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl uppercase text-sm">
              LET'S TALK
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandExcellenceSection;
