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
    <section className="relative w-full py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-purple-600 to-cyan-400 bg-clip-text text-transparent mb-6">
            Our clients, our valuable resource
          </h2>
          <p className="text-gray-800 text-base max-w-5xl mx-auto leading-relaxed">
            <span className="font-bold">Beyond the services we provide, our client relationships are integral to our identity. The success of our clients is not just a metric; it's a reflection of our own success.</span> Explore a selection of outstanding customer reviews below, showcasing the testament to our commitment and the impact we make in collaboration with those we proudly serve.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center transition-all duration-300 hover:shadow-2xl hover:scale-105"
            >
              {/* Logo Image */}
              <div className="mb-6 w-32 h-32 relative bg-gray-200 rounded-full flex items-center justify-center">
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

              {/* Review Text */}
              <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">
                {testimonial.text}
              </p>

              {/* Name and Trustpilot */}
              <div className="w-full border-t border-gray-200 pt-4">
                <h4 className="text-gray-900 font-extrabold text-lg mb-2">
                  {testimonial.name}
                </h4>
                {testimonial.trustpilot && (
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-sm font-bold text-gray-700">TRUSTPILOT</span>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-green-600 text-lg">★</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Trustpilot Logo */}
        <div className="text-center mt-16">
          <Image
            src="/main/aut2.jpg"
            alt="Trustpilot Authorized"
            width={200}
            height={80}
            style={{ objectFit: 'contain', margin: '0 auto' }}
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
