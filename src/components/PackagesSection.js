'use client';
import React from 'react';

const PackagesSection = () => {
  const packages = [
    {
      id: 1,
      name: 'Startup Logo Package',
      subtitle: 'Give your startup a kick-start with Visual Logos Startup',
      price: 99,
      originalPrice: 330,
      features: [
        '8 Custom Logo Design Concepts',
        'Unlimited Revisions',
        '5 Dedicated Creative Designers',
        'Files Format (PSD, PNG, GIF, JPG, PDF)',
        'Color & Font Options',
        'Icon Design',
        'Grayscale Format',
        '24 to 48 hours TAT',
        '– Value Added Services',
        'Dedicated Account Manager',
        '100% Ownership',
        '100% Unique Design Guarantee',
        '100% Satisfaction Guarantee',
        '100% Money Back Guarantee*'
      ]
    },
    {
      id: 2,
      name: 'Professional Logo Package',
      subtitle: 'Get set for brand success with Visual Logo Professional',
      price: 149,
      originalPrice: 499,
      features: [
        '12 Logo Design Concepts',
        'Unlimited Revisions',
        'By 6 Top-Notch Designers',
        'All Final Files Format (AI, PSD, EPS, PNG, GIF, JPG, PDF)',
        'Complete Stationery Design (Business Card, Letterhead, Envelope)',
        'MS Word Letterhead Design',
        'Color & Font Options',
        'Icon Design',
        'Grayscale Format',
        '24 to 48 hours TAT',
        '– Value Added Services',
        'Dedicated Account Manager',
        '100% Ownership',
        '100% Unique Design Guarantee',
        '100% Satisfaction Guarantee',
        '100% Money Back Guarantee*'
      ]
    },
    {
      id: 3,
      name: 'Infinity Logo Package',
      subtitle: 'Upscale your brand persona with the Visual Logo Infinity',
      price: 199,
      originalPrice: 669,
      features: [
        'Unlimited Logo Design Concepts',
        'Unlimited Revisions',
        'By 8 Award Winning Designers',
        'Complete Stationery Design',
        'Flyer/Brochure Design',
        'MS Word Letterhead Design',
        'Branded Email Signature Design',
        'All File Formats including (AI & EPS)',
        'Color & Font Options',
        'Icon Design',
        'Grayscale Format',
        '– Value Added Services',
        'Dedicated Account Manager',
        'Fastest Turnaround Time',
        '100% Ownership',
        '100% Unique Design Guarantee',
        '100% Satisfaction Guarantee',
        '100% Money Back Guarantee*'
      ]
    },
    {
      id: 4,
      name: 'Social Logo Package',
      subtitle: 'Best for startup companies, crafted for great Social Media Presence',
      price: 299,
      originalPrice: 830,
      features: [
        'Unlimited Logo Design Concepts',
        'Unlimited Revisions',
        'By 8 Award Winning Designers',
        'Social Media Welcome Banner Design',
        'Social Media Cover Design',
        'Social Media Logo Sizes',
        'Complete Stationery Design',
        'MS Word Letterhead Design',
        'Branded Email Signature Design',
        'All File Formats including (AI & EPS)',
        'Color & Font Options',
        'Icon Design',
        'Grayscale Format',
        '– Value Added Services',
        'Dedicated Account Manager',
        'Fastest Turnaround Time',
        '100% Ownership',
        '100% Unique Design Guarantee',
        '100% Satisfaction Guarantee',
        '100% Money Back Guarantee*'
      ]
    },
    {
      id: 5,
      name: 'Logo + Website Package',
      subtitle: 'Buckle up for your new business success with Visual Digital Startup',
      price: 799,
      originalPrice: 1330,
      features: [
        'Upto 5 Page Customized Website',
        'Complete Designing & Deployment',
        'Unlimited Logo Design Concepts',
        'Unlimited Revisions',
        'Complete Stationery Design',
        'Social Media Banner Design',
        'All File Formats including (AI & EPS)',
        'Free Favicon Design',
        '– Value Added Services',
        'Dedicated Account Manager',
        'Fastest Turnaround Time',
        '100% Ownership',
        '100% Unique Design Guarantee',
        '100% Satisfaction Guarantee',
        '100% Money Back Guarantee*'
      ]
    },
    {
      id: 6,
      name: 'Logo + Ecommerce Web Package',
      subtitle: 'Suitable for potential ecommerce startups and brands, crafted for great Online Presence',
      price: 1499,
      originalPrice: 3330,
      features: [
        'E-Commerce Website Design',
        'CMS (Wordpress/Woocommerce)',
        'Product Detail Page Design',
        'Unlimited Products & Categories',
        'Full Shopping Cart Integration',
        'Payment Gateway Integration',
        'Product Rating & Reviews',
        'Unlimited Logo Design Concepts',
        'Unlimited Revisions',
        'Complete Stationery Design',
        'Social Media Banner Design',
        'All File Formats including (AI & EPS)',
        'Free Favicon Design',
        '– Value Added Services',
        'Dedicated Account Manager',
        'Fastest Turnaround Time',
        '100% Ownership',
        '100% Unique Design Guarantee',
        '100% Satisfaction Guarantee',
        '100% Money Back Guarantee*'
      ]
    }
  ];

  return (
    <section className="relative w-full py-20 bg-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-cyan-400 text-white text-xs font-bold px-4 py-2 rounded-full">
              PRICING PLANS
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black bg-gradient-to-r from-purple-600 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-6 leading-tight">
            Optimize your business with our
            <br />
            tailored packages
          </h2>
          <p className="text-gray-600 text-lg max-w-5xl mx-auto leading-relaxed">
            <span className="font-bold text-gray-900">At Blendwise INC.,</span> We serve the industry with persuasive and conceptual designs that rock the market.
            Creating an impact is what we do best and what we like to provide to every client with our pocket-friendly packages.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={pkg.id}
              className="group relative bg-white rounded-3xl shadow-xl border-2 border-gray-100 overflow-visible flex flex-col h-full"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              {/* Badge */}
              {pkg.badge && (
                <div className={`absolute -top-3 -right-3 bg-gradient-to-r ${pkg.badgeColor} text-white px-6 py-2 font-black text-xs uppercase shadow-lg transform rotate-12 z-10 rounded-br-2xl`}>
                  {pkg.badge}
                </div>
              )}

              {/* Gradient Top Border */}
              <div className="h-2 bg-gradient-to-r from-purple-600 to-cyan-400"></div>

              <div className="p-8 flex flex-col flex-1">
                {/* Package Name */}
                <div className="mb-6">
                  <h3 className="text-2xl font-black bg-gradient-to-r from-purple-600 to-cyan-400 bg-clip-text text-transparent mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {pkg.subtitle}
                  </p>
                </div>

                {/* Price */}
                <div className="mb-6 bg-gradient-to-br from-purple-50 to-cyan-50 p-6 rounded-2xl">
                  <div className="flex items-end gap-2">
                    <span className="text-5xl font-black bg-gradient-to-r from-purple-600 to-cyan-400 bg-clip-text text-transparent">
                      ${pkg.price}
                    </span>
                    <span className="text-gray-400 line-through text-xl mb-2">
                      ${pkg.originalPrice}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mt-2">One-time payment</p>
                </div>

                {/* Features List */}
                <div className="mb-6 flex-1 max-h-64 overflow-y-auto custom-scrollbar pr-2">
                  <ul className="space-y-3">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-gray-700">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br from-purple-600 to-cyan-400 flex items-center justify-center mt-0.5">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="leading-relaxed flex-1">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Contact Info */}
                <div className="flex justify-between items-center mb-6 text-xs bg-gray-50 p-4 rounded-xl mt-auto">
                  <div>
                    <p className="text-gray-500 font-semibold">Speak with us</p>
                    <p className="text-gray-900 font-bold">(646) 993-9010</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-500 font-semibold">Want to discuss?</p>
                    <button className="text-purple-600 font-bold hover:underline">
                      Live Chat
                    </button>
                  </div>
                </div>

                {/* CTA Button */}
                <button className="group/btn relative w-full bg-gradient-to-r from-purple-600 to-cyan-400 hover:from-purple-700 hover:to-cyan-500 text-white font-bold py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl uppercase text-sm overflow-hidden">
                  <span className="relative z-10">START PROJECT</span>
                  <div className="absolute inset-0 bg-white opacity-0 group-hover/btn:opacity-20 transition-opacity duration-300"></div>
                </button>
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

        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #9333ea #f1f1f1;
        }

        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
          margin-right: 2px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #9333ea, #06b6d4);
          border-radius: 10px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #7c3aed, #0891b2);
        }
      `}</style>
    </section>
  );
};

export default PackagesSection;
