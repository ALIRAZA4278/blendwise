'use client';
import React, { useState } from 'react';
import QuoteModal from './QuoteModal';

const PackagesSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);

  const handlePackageSelect = (pkg) => {
    setSelectedPackage(pkg);
    setIsModalOpen(true);
  };

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
    <section className="relative w-full py-8 bg-gray-50 overflow-hidden">
      <div className="relative z-10 max-w-5xl mx-auto px-4">

        {/* Section Header */}
        <div className="text-center mb-6 animate-fadeInDown">
          <h2 className="font-black text-[#8a21f0] mb-2 leading-tight animate-fadeInUp animation-delay-200" style={{ fontSize: '30px' }}>
            Optimize your business with our
            <br />
            tailored packages
          </h2>
          <p className="text-gray-700 max-w-5xl mx-auto leading-relaxed" style={{ fontSize: '14px' }}>
            <span className="font-bold text-gray-900">At Blendwise INC.,</span> We serve the industry with persuasive and conceptual designs that rock the market.
            Creating an impact is what we do best and what we like to provide to every client with our pocket-friendly packages.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {packages.map((pkg, index) => (
            <div
              key={pkg.id}
              className="group relative bg-white rounded-xl shadow-xl border-2 border-gray-100 overflow-visible flex flex-col h-full hover-lift animate-scaleIn"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              {/* Top Border */}
              <div className="h-1 bg-[#8a21f0]"></div>

              <div className="p-3 flex flex-col flex-1">
                {/* Package Name */}
                <div className="mb-2">
                  <h3 className="font-black text-[#8a21f0] mb-0.5" style={{ fontSize: '14px' }}>
                    {pkg.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed" style={{ fontSize: '14px' }}>
                    {pkg.subtitle}
                  </p>
                </div>

                {/* Price */}
                <div className="mb-2">
                  <div className="flex items-end gap-1.5">
                    <span className="text-lg font-black text-[#8a21f0]">
                      ${pkg.price}
                    </span>
                    <span className="text-gray-400 line-through text-xs mb-0.5">
                      ${pkg.originalPrice}
                    </span>
                  </div>
                  <p className="text-gray-600 text-[10px] mt-0.5">One-time payment</p>
                </div>

                {/* Features List */}
                <div className="mb-2 flex-1 max-h-32 overflow-y-auto custom-scrollbar pr-1">
                  <ul className="space-y-1">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-1.5 text-[10px] text-gray-700">
                        <div className="shrink-0 w-3 h-3 rounded-full bg-[#8a21f0] flex items-center justify-center mt-0.5">
                          <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="leading-relaxed flex-1">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <button onClick={() => handlePackageSelect(pkg)} className="group/btn relative w-full bg-[#8a21f0] hover:bg-[#7a1dd8] text-white font-bold py-2 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl uppercase text-[10px] overflow-hidden mb-1.5 animate-pulse">
                  <span className="relative z-10">ORDER NOW</span>
                  <div className="absolute inset-0 bg-white opacity-0 group-hover/btn:opacity-20 transition-opacity duration-300"></div>
                </button>

                {/* View Details Link */}
                <div className="text-center mb-2">
                  <button onClick={() => handlePackageSelect(pkg)} className="text-[#35a5e8] font-bold hover:underline text-[10px] uppercase">
                    VIEW DETAILS
                  </button>
                </div>

                {/* Contact Info */}
                <div className="flex justify-between items-center text-[8px] border-t pt-2">
                  <div>
                    <p className="text-[#8a21f0] font-semibold">Share your idea?</p>
                    <a href="tel:8444156378" className="text-[#35a5e8] font-bold hover:text-[#8a21f0] transition-colors">+(844) 415-6378</a>
                  </div>
                  <div className="text-right">
                    <p className="text-[#8a21f0] font-semibold">Want to discuss?</p>
                    <button onClick={() => handlePackageSelect(pkg)} className="text-[#35a5e8] font-bold hover:underline">
                      Live Chat Now
                    </button>
                  </div>
                </div>
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
          scrollbar-color: #8a21f0 #f1f1f1;
        }

        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
          margin-right: 2px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #8a21f0;
          border-radius: 10px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #7a1dd8;
        }
      `}</style>

      {/* Quote Modal */}
      <QuoteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} packageInfo={selectedPackage} />
    </section>
  );
};

export default PackagesSection;
