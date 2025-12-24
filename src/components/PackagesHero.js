'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const PackagesHero = () => {
  const [selectedCategory, setSelectedCategory] = useState('LOGO');

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
    <div className="relative w-full">
      {/* Hero Section */}
      <section className="relative w-full min-h-[80vh] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/main/logo-banner.jpeg"
            alt="Packages Hero Background"
            fill
            priority
            style={{ objectFit: 'cover' }}
            quality={100}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/80 via-cyan-500/60 to-gray-900/90"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 w-full h-full">
          <div className="max-w-7xl mx-auto px-6 h-full flex items-center" style={{ minHeight: '80vh', paddingTop: '100px' }}>
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

              {/* Left Side - Content */}
              <div className="space-y-6 max-w-xl">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight drop-shadow-lg">
                  Our Affordable
                  <br />
                  <span className="text-cyan-400">Packages</span>
                </h1>
                <p className="text-white text-lg md:text-xl leading-relaxed">
                  Choose from our carefully crafted packages designed to meet your business needs. From startups to enterprises, we have the perfect solution for everyone at competitive prices.
                </p>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4">
                  <button className="bg-gradient-to-r from-purple-600 to-cyan-400 hover:from-purple-700 hover:to-cyan-500 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                    Get Started
                  </button>
                  <a href="tel:6469939010" className="flex items-center gap-2 text-white font-bold text-lg hover:text-cyan-400 transition-colors">
                    <span>📞</span>
                    <span>(646) 993-9010</span>
                  </a>
                </div>
              </div>

              {/* Right Side - Image */}
              <div className="relative flex items-center justify-end">
                <div className="relative w-full max-w-[700px] h-[400px] md:h-[500px] lg:h-[600px]">
                  <Image
                    src="/packages-main.png"
                    alt="Digital Experiences"
                    fill
                    priority
                    style={{ objectFit: 'contain' }}
                    quality={100}
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Category Filter Section */}
      <section className="relative w-full py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-12">
            <p className="text-sm font-bold text-purple-600 tracking-widest uppercase mb-4">OUR PRICING</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Optimize Your Business With Our
              <br />
              <span className="bg-gradient-to-r from-purple-600 to-cyan-400 bg-clip-text text-transparent">Tailored Packages</span>
            </h2>
            <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed mt-6" style={{ fontSize: '16px' }}>
              <span className="font-bold">At Blendwise INC.,</span> We serve the industry with persuasive and conceptual designs
              <br />
              that rock the market.
              <br />
              Creating an impact is what we do best and what we like to provide to every client with
              <br />
              our pocket-friendly packages.
            </p>
          </div>

          {/* Category Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-12">
            <button
              onClick={() => setSelectedCategory('LOGO')}
              className={`${selectedCategory === 'LOGO' ? 'bg-gradient-to-r from-purple-600 to-cyan-400 text-white' : 'bg-white text-purple-600 border-2 border-purple-600'} hover:from-purple-700 hover:to-cyan-500 hover:bg-purple-50 font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg text-sm uppercase`}>
              LOGO ↗
            </button>
            <button
              onClick={() => setSelectedCategory('WEBSITE')}
              className={`${selectedCategory === 'WEBSITE' ? 'bg-gradient-to-r from-purple-600 to-cyan-400 text-white' : 'bg-white text-purple-600 border-2 border-purple-600'} hover:bg-purple-50 font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md text-sm uppercase`}>
              WEBSITE ↗
            </button>
            <button
              onClick={() => setSelectedCategory('SOCIAL MEDIA')}
              className={`${selectedCategory === 'SOCIAL MEDIA' ? 'bg-gradient-to-r from-purple-600 to-cyan-400 text-white' : 'bg-white text-purple-600 border-2 border-purple-600'} hover:bg-purple-50 font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md text-sm uppercase`}>
              SOCIAL MEDIA ↗
            </button>
            <button
              onClick={() => setSelectedCategory('SEO')}
              className={`${selectedCategory === 'SEO' ? 'bg-gradient-to-r from-purple-600 to-cyan-400 text-white' : 'bg-white text-purple-600 border-2 border-purple-600'} hover:bg-purple-50 font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md text-sm uppercase`}>
              SEO (SEARCH ENGINE OPTIMIZATION) ↗
            </button>
            <button
              onClick={() => setSelectedCategory('SEM')}
              className={`${selectedCategory === 'SEM' ? 'bg-gradient-to-r from-purple-600 to-cyan-400 text-white' : 'bg-white text-purple-600 border-2 border-purple-600'} hover:bg-purple-50 font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md text-sm uppercase`}>
              SEM (SEARCH ENGINE MARKETING) ↗
            </button>
          </div>

          {/* Second Row */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
            <button
              onClick={() => setSelectedCategory('PRINT DESIGN')}
              className={`${selectedCategory === 'PRINT DESIGN' ? 'bg-gradient-to-r from-purple-600 to-cyan-400 text-white' : 'bg-white text-purple-600 border-2 border-purple-600'} hover:bg-purple-50 font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md text-sm uppercase`}>
              PRINT DESIGN ↗
            </button>
            <button
              onClick={() => setSelectedCategory('E-COMMERCE')}
              className={`${selectedCategory === 'E-COMMERCE' ? 'bg-gradient-to-r from-purple-600 to-cyan-400 text-white' : 'bg-white text-purple-600 border-2 border-purple-600'} hover:bg-purple-50 font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md text-sm uppercase`}>
              E-COMMERCE ↗
            </button>
            <button
              onClick={() => setSelectedCategory('STATIONARY')}
              className={`${selectedCategory === 'STATIONARY' ? 'bg-gradient-to-r from-purple-600 to-cyan-400 text-white' : 'bg-white text-purple-600 border-2 border-purple-600'} hover:bg-purple-50 font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md text-sm uppercase`}>
              STATIONARY ↗
            </button>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="relative w-full py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          {/* Packages Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className="relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-200 overflow-hidden flex flex-col h-full"
              >
                {/* Badge */}
                {pkg.badge && (
                  <div className={`absolute top-0 right-0 ${pkg.badgeColor} text-white px-6 py-2 font-bold text-xs uppercase transform rotate-45 translate-x-8 translate-y-4 w-40 text-center`}>
                    {pkg.badge}
                  </div>
                )}

                <div className="p-8 flex flex-col flex-1">
                  {/* Package Name */}
                  <h3 className="text-2xl font-extrabold text-purple-600 mb-2">
                    {pkg.name}
                  </h3>

                  {/* Subtitle */}
                  <p className="text-gray-600 text-sm mb-6">
                    {pkg.subtitle}
                  </p>

                  {/* Price */}
                  <div className="mb-6">
                    <span className="text-5xl font-extrabold bg-gradient-to-r from-purple-600 to-cyan-400 bg-clip-text text-transparent">
                      ${pkg.price}
                    </span>
                    <span className="text-gray-500 line-through ml-3 text-xl">
                      ${pkg.originalPrice}
                    </span>
                    <span className="block text-gray-500 text-sm mt-1">Only</span>
                  </div>

                  {/* Features List */}
                  <div className="mb-6 flex-1 max-h-64 overflow-y-auto border-t border-b border-gray-200 py-4">
                    <ul className="space-y-2">
                      {pkg.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                          <span className="text-cyan-400 mt-1">●</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Contact Info */}
                  <div className="flex justify-between items-center mb-6 text-sm mt-auto">
                    <div>
                      <p className="text-gray-600 font-semibold">Speak with us</p>
                      <p className="text-gray-900 font-bold">(646) 993-9010</p>
                    </div>
                    <div>
                      <p className="text-gray-600 font-semibold">Want to discuss?</p>
                      <button className="text-purple-600 font-bold hover:underline">
                        Live Chat Now
                      </button>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button className="w-full bg-gradient-to-r from-purple-600 to-cyan-400 hover:from-purple-700 hover:to-cyan-500 text-white font-bold py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl uppercase text-sm">
                    START PROJECT
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PackagesHero;
