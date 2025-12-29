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
      badge: 'BEST SELLER',
      badgeColor: 'bg-red-600',
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
      badge: 'GREAT DEAL',
      badgeColor: 'bg-purple-700',
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
    <section className="relative w-full py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-[10px] font-black text-[#8a21f0] tracking-widest uppercase mb-4">OUR PRICING</p>
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-4">
            Optimize Your Business With Our
            <br />
            <span className="bg-gradient-to-r from-[#8a21f0] to-[#35a5e8] bg-clip-text text-transparent">Tailored Packages</span>
          </h2>
          <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed mt-6 text-sm">
            <span className="font-bold">At Blendwise INC.,</span> We serve the industry with persuasive and conceptual designs
            <br />
            that rock the market.
            <br />
            Creating an impact is what we do best and what we like to provide to every client with
            <br />
            our pocket-friendly packages.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={pkg.id}
              className={`relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-200 overflow-hidden flex flex-col h-full animate-fadeInUp hover-lift animation-delay-${(index % 3 + 1) * 100}`}
            >
              {/* Badge */}
              {pkg.badge && (
                <div className={`absolute top-0 right-0 ${pkg.badgeColor} text-white px-6 py-2 font-bold text-xs uppercase transform rotate-45 translate-x-8 translate-y-4 w-40 text-center`}>
                  {pkg.badge}
                </div>
              )}

              <div className="p-8 flex flex-col flex-1">
                {/* Package Name */}
                <h3 className="text-lg font-black text-[#8a21f0] mb-2">
                  {pkg.name}
                </h3>

                {/* Subtitle */}
                <p className="text-gray-600 text-[10px] mb-6">
                  {pkg.subtitle}
                </p>

                {/* Price */}
                <div className="mb-6">
                  <span className="text-3xl font-black bg-gradient-to-r from-[#8a21f0] to-[#35a5e8] bg-clip-text text-transparent">
                    ${pkg.price}
                  </span>
                  <span className="text-gray-500 line-through ml-3 text-sm">
                    ${pkg.originalPrice}
                  </span>
                  <span className="block text-gray-500 text-[10px] mt-1">Only</span>
                </div>

                {/* Features List */}
                <div className="mb-6 flex-1 max-h-64 overflow-y-auto border-t border-b border-gray-200 py-4">
                  <ul className="space-y-2">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-[10px] text-gray-700">
                        <span className="text-[#35a5e8] mt-1">●</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Contact Info */}
                <div className="flex justify-between items-center mb-6 text-[10px] mt-auto">
                  <div>
                    <p className="text-gray-600 font-semibold">Speak with us</p>
                    <a href="tel:6469939010" className="text-gray-900 font-bold hover:text-[#8a21f0] transition-colors">(646) 993-9010</a>
                  </div>
                  <div>
                    <p className="text-gray-600 font-semibold">Want to discuss?</p>
                    <button onClick={() => handlePackageSelect(pkg)} className="text-[#8a21f0] font-bold hover:underline">
                      Live Chat Now
                    </button>
                  </div>
                </div>

                {/* CTA Button */}
                <button onClick={() => handlePackageSelect(pkg)} className="w-full bg-gradient-to-r from-[#8a21f0] to-[#35a5e8] hover:from-[#7a1dd8] hover:to-[#2a94d8] text-white font-bold py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl uppercase text-xs">
                  START PROJECT
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>


      {/* Quote Modal */}
      <QuoteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} packageInfo={selectedPackage} />
    </section>
  );
};

export default PackagesSection;
