'use client';
import React from 'react';
import Image from 'next/image';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      logo: '/main/no3.jpg',
      text: 'Blendwise INC surpassed our expectations in crafting a modern logo that perfectly aligned with our vision. Their adept team swiftly incorporated feedback, delivering revised designs promptly. Collaborating with such an open-minded and responsive partner has been truly rewarding. Thank you for your exceptional work!',
      name: 'Mark Jordan',
      trustpilot: true
    },
    {
      id: 2,
      logo: '/main/no2.jpg',
      text: 'I am thoroughly impressed with the designs I received from Blendwise INC. Their attentive listening, creative design ideas, timely execution, and excellent communication skills exceeded my expectations. Without hesitation, I unequivocally recommend Blendwise INC and would gladly hire them again.',
      name: 'Nick Anderson',
      trustpilot: true
    },
    {
      id: 3,
      logo: '/main/no3.jpg',
      text: 'The perfect blend of creativity and professionalism, Blendwise INC delivered precisely what our project demanded. Despite our team\'s strong opinions, the Blendwise INC team adeptly incorporated their ideas, guiding us towards an outcome that fills us with pride.',
      name: 'Jessica Smith',
      trustpilot: true
    }
  ];

  return (
    <section className="relative w-full py-20 bg-white overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-orange-500 text-white text-xs font-bold px-4 py-2 rounded-full uppercase">
              TESTIMONIALS
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[#0a4d7c] mb-6 leading-tight">
            Our clients, our valuable resource
          </h2>
          <p className="text-gray-700 text-base max-w-5xl mx-auto leading-relaxed">
            <span className="font-bold text-gray-900">Beyond the services we provide, our client relationships are integral to our identity. The success of our clients is not just a metric; it's a reflection of our own success.</span> Explore a selection of outstanding customer reviews below.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="group relative bg-white rounded-3xl shadow-xl p-8 flex flex-col items-center text-center border-2 border-gray-100"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.2}s both`
              }}
            >
              {/* Logo Image */}
              <div className="mb-6 w-24 h-24 relative bg-gray-100 rounded-full flex items-center justify-center overflow-hidden shadow-lg">
                <Image
                  src={testimonial.logo}
                  alt={`${testimonial.name} Logo`}
                  fill
                  style={{ objectFit: 'contain' }}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>

              {/* Quote Icon */}
              <div className="text-5xl text-[#0a4d7c]/20 mb-4">&quot;</div>

              {/* Review Text */}
              <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">
                {testimonial.text}
              </p>

              {/* Name and Trustpilot */}
              <div className="w-full border-t-2 border-gray-100 pt-6">
                <h4 className="text-gray-900 font-black text-lg mb-3">
                  {testimonial.name}
                </h4>
                {testimonial.trustpilot && (
                  <div className="flex flex-col items-center gap-2">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-green-500 text-xl">★</span>
                      ))}
                    </div>
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Trustpilot Review</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
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
    </section>
  );
};

export default TestimonialsSection;
