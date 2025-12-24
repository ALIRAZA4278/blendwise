'use client';
import React, { useState } from 'react';

const WebDesignServicesSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const features = [
    {
      icon: '🔄',
      title: 'Constant Client Coordination'
    },
    {
      icon: '⭐',
      title: 'Supreme Customer Satisfaction'
    },
    {
      icon: '👤',
      title: '100% Ownership Rights'
    },
    {
      icon: '🏆',
      title: 'Secure Money Back Guarantee'
    },
    {
      icon: '📦',
      title: 'Industry Proven Professionals'
    }
  ];

  const testimonials = [
    {
      id: 1,
      logo: '🎪',
      companyName: 'BRENTWOOD',
      companySubtitle: 'PARTY RENTALS',
      companyDescription: 'TENTS, PARTY RENTALS & EVENTS SPECIALIST',
      quote: 'Remarkable work on my website',
      text: 'Thanks to Custom Web Guru, my website is now performing excellently. I\'ve worked with them on 5 projects all of them were amazing.',
      author: 'Claire Bennet, Owner',
      rating: 5
    },
    {
      id: 2,
      logo: '🎨',
      companyName: 'CREATIVE ARTS',
      companySubtitle: 'STUDIO & GALLERY',
      companyDescription: 'DESIGN, ART & CREATIVE SOLUTIONS',
      quote: 'Outstanding service and support',
      text: 'The team delivered beyond expectations. Professional, timely, and highly skilled in every aspect of web development.',
      author: 'John Smith, CEO',
      rating: 5
    },
    {
      id: 3,
      logo: '🏆',
      companyName: 'ELITE FITNESS',
      companySubtitle: 'GYM & TRAINING',
      companyDescription: 'FITNESS, WELLNESS & LIFESTYLE CENTER',
      quote: 'Exceeded all expectations',
      text: 'Working with Blendwise INC was a game-changer for our business. Their attention to detail and commitment to excellence is unmatched.',
      author: 'Sarah Johnson, Founder',
      rating: 5
    }
  ];

  return (
    <section className="relative w-full py-8 bg-gray-50 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="font-black text-[#8a21f0] mb-2 leading-tight" style={{ fontSize: '30px' }}>
            Web Design Services
          </h2>
          <p className="text-gray-700 max-w-5xl mx-auto leading-relaxed" style={{ fontSize: '14px' }}>
            Our team of professional web designers is the secret to our success. Each web designer in our team is an expert and fully capable of creating amazing custom web design and development solutions to help your brand grow exponentially. We are determined to get you the best custom Web design services for your business and we work hard to maintain that.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3 mb-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-gray-100 hover:border-[#8a21f0] flex flex-col items-center text-center"
            >
              <div className="w-10 h-10 bg-[#35a5e8]/10 rounded-full flex items-center justify-center mb-2 group-hover:bg-[#35a5e8] transition-colors duration-300">
                <span className="text-xl group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </span>
              </div>
              <h3 className="text-[#8a21f0] font-black text-[10px] leading-tight">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Testimonial Section - Slider Style */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">

          {/* Left Side - Logo/Brand Image */}
          <div className="relative">
            <div className="relative bg-[#8a21f0]/5 rounded-2xl p-6 flex items-center justify-center">
              <div className="text-center">
                <div className="relative inline-block">
                  <div className="absolute inset-0 bg-[#8a21f0]/20 rounded-full blur-xl"></div>
                  <div className="relative w-40 h-40 bg-white rounded-full shadow-xl flex items-center justify-center border-4 border-[#8a21f0]/30 transition-all duration-500">
                    <div className="text-center">
                      <div className="text-3xl mb-2">{testimonials[activeTestimonial].logo}</div>
                      <h3 className="text-sm font-black text-[#8a21f0]">{testimonials[activeTestimonial].companyName}</h3>
                      <p className="text-[10px] font-bold text-gray-600">{testimonials[activeTestimonial].companySubtitle}</p>
                      <p className="text-[8px] text-gray-500 mt-1">{testimonials[activeTestimonial].companyDescription}</p>
                    </div>
                  </div>
                </div>

                {/* Floating decorative elements */}
                <div className="absolute top-4 left-4 w-6 h-6 bg-[#8a21f0]/20 rounded-full animate-float"></div>
                <div className="absolute bottom-4 right-4 w-8 h-8 bg-[#35a5e8]/10 rounded-full animate-float-delayed"></div>
                <div className="absolute top-1/2 right-2 w-4 h-4 bg-[#35a5e8]/30 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Right Side - Testimonial (No Box) */}
          <div className="space-y-3">
            {/* Quote Bar */}
            <div className="flex gap-1">
              <div className="w-1 h-6 bg-[#8a21f0] rounded-full"></div>
              <div className="w-1 h-6 bg-[#8a21f0] rounded-full"></div>
              <div className="w-1 h-6 bg-[#8a21f0] rounded-full"></div>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-black text-[#8a21f0] mb-2 leading-tight transition-all duration-500">
                {testimonials[activeTestimonial].quote}
              </h3>
              <p className="text-gray-700 text-[10px] leading-relaxed mb-3 transition-all duration-500">
                {testimonials[activeTestimonial].text}
              </p>
              <p className="text-gray-600 text-[10px] font-bold mb-3 transition-all duration-500">
                — {testimonials[activeTestimonial].author}
              </p>

              {/* Star Rating */}
              <div className="flex items-center gap-0.5 mb-3">
                {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                  <span key={i} className="text-yellow-500 text-sm">★</span>
                ))}
                {[...Array(6 - testimonials[activeTestimonial].rating)].map((_, i) => (
                  <span key={`empty-${i}`} className="text-gray-300 text-sm">★</span>
                ))}
              </div>

              {/* Pagination Dots */}
              <div className="flex gap-1.5">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                      activeTestimonial === index
                        ? 'bg-[#35a5e8]'
                        : 'bg-gray-300 hover:bg-[#8a21f0]'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(20px); }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default WebDesignServicesSection;
