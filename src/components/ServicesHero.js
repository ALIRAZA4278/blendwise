'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const ServicesHero = () => {
  const [selectedCard, setSelectedCard] = useState(1);
  const [seoContent, setSeoContent] = useState('ON-PAGE SEO');
  const [wordpressContent, setWordpressContent] = useState('CUSTOM THEMES');
  const [socialContent, setSocialContent] = useState('FACEBOOK');

  const customizedServices = [
    { id: 1, icon: '📦', title: 'Custom Package', description: 'It is a long established fact that a reader will' },
    { id: 2, icon: '💬', title: 'Live Chat', description: 'It is a long established fact that a reader will' },
    { id: 3, icon: '🎧', title: 'Call +124-567-890', description: 'It is a long established fact that a reader will' },
    { id: 4, icon: '📞', title: 'Request Call Back', description: 'It is a long established fact that a reader will' }
  ];

  const serviceContent = {
    seo: {
      'ON-PAGE SEO': {
        title: 'On-Page SEO Optimization',
        description: 'Comprehensive on-page SEO services including keyword optimization, meta tag creation, content optimization, internal linking, and technical HTML improvements. Optimize every element of your website for better search engine rankings.'
      },
      'OFF-PAGE SEO': {
        title: 'Off-Page SEO Services',
        description: 'Build your website authority with high-quality backlinks, social media engagement, guest posting, and influencer outreach. Enhance your online reputation and drive traffic through strategic off-page optimization techniques.'
      },
      'TECHNICAL SEO': {
        title: 'Technical SEO Solutions',
        description: 'Improve your website technical foundation with site speed optimization, mobile responsiveness, structured data implementation, XML sitemaps, and crawlability enhancements. Ensure search engines can effectively index your content.'
      },
      'LOCAL SEO': {
        title: 'Local SEO Marketing',
        description: 'Dominate local search results with Google My Business optimization, local citations, review management, and location-based content strategies. Connect with customers in your area and drive foot traffic to your business.'
      },
      'SEO ANALYTICS': {
        title: 'SEO Analytics & Reporting',
        description: 'Track your SEO performance with comprehensive analytics, keyword ranking reports, traffic analysis, and conversion tracking. Make data-driven decisions to continuously improve your search engine visibility and ROI.'
      }
    },
    wordpress: {
      'CUSTOM THEMES': {
        title: 'Custom WordPress Themes',
        description: 'Bespoke WordPress theme development tailored to your brand including responsive design, custom post types, advanced custom fields, and unique functionality. Create a distinctive website that perfectly represents your business identity.'
      },
      'PLUGIN DEV': {
        title: 'WordPress Plugin Development',
        description: 'Custom plugin development to extend WordPress functionality with features specific to your business needs. From simple widgets to complex integrations, we build scalable and secure solutions that enhance your website capabilities.'
      },
      'WP E-COMMERCE': {
        title: 'WordPress E-Commerce Solutions',
        description: 'Build powerful online stores with WooCommerce integration, payment gateway setup, inventory management, and custom checkout experiences. Create seamless shopping experiences that convert visitors into customers.'
      },
      'MAINTENANCE': {
        title: 'WordPress Maintenance Services',
        description: 'Keep your WordPress site secure, updated, and performing optimally with regular maintenance, security monitoring, backup management, and performance optimization. Focus on your business while we handle the technical details.'
      },
      'OPTIMIZATION': {
        title: 'WordPress Speed Optimization',
        description: 'Dramatically improve your WordPress site performance with caching implementation, image optimization, database cleanup, and code minification. Deliver lightning-fast page loads that improve user experience and search rankings.'
      }
    },
    social: {
      'FACEBOOK': {
        title: 'Facebook Marketing',
        description: 'Comprehensive Facebook marketing strategies including targeted ad campaigns, engaging content creation, community management, and audience growth. We help businesses build strong social presence and drive meaningful engagement with their target audience.'
      },
      'INSTAGRAM': {
        title: 'Instagram Marketing',
        description: 'Create visually stunning Instagram campaigns with strategic content planning, story marketing, reels creation, and influencer collaborations. Build an authentic brand presence and connect with your audience through compelling visuals.'
      },
      'LINKEDIN': {
        title: 'LinkedIn Marketing',
        description: 'Establish thought leadership and generate B2B leads with LinkedIn marketing strategies including profile optimization, content marketing, sponsored posts, and professional networking. Connect with decision-makers and grow your business network.'
      },
      'TWITTER': {
        title: 'Twitter Marketing',
        description: 'Drive real-time engagement with Twitter marketing campaigns featuring trending hashtags, timely content, customer service, and brand awareness strategies. Build conversations and stay connected with your audience 24/7.'
      },
      'YOUTUBE': {
        title: 'YouTube Marketing',
        description: 'Grow your video presence with YouTube marketing including channel optimization, video SEO, thumbnail design, and advertising campaigns. Create compelling video content that educates, entertains, and converts viewers into customers.'
      }
    }
  };

  const detailedServices = [
    {
      id: 1,
      title: serviceContent.seo[seoContent].title,
      description: serviceContent.seo[seoContent].description,
      image: '/services/seo.jpg',
      buttons: ['ON-PAGE SEO →', 'OFF-PAGE SEO →', 'TECHNICAL SEO →', 'LOCAL SEO →', 'SEO ANALYTICS →'],
      imageLeft: true,
      contentType: 'seo'
    },
    {
      id: 2,
      title: serviceContent.wordpress[wordpressContent].title,
      description: serviceContent.wordpress[wordpressContent].description,
      image: '/services/wordpress.jpg',
      buttons: ['CUSTOM THEMES →', 'PLUGIN DEV →', 'WP E-COMMERCE →', 'MAINTENANCE →', 'OPTIMIZATION →'],
      imageLeft: false,
      contentType: 'wordpress'
    },
    {
      id: 3,
      title: serviceContent.social[socialContent].title,
      description: serviceContent.social[socialContent].description,
      image: '/services/facebook.jpg',
      buttons: ['FACEBOOK →', 'INSTAGRAM →', 'LINKEDIN →', 'TWITTER →', 'YOUTUBE →'],
      imageLeft: true,
      contentType: 'social'
    }
  ];

  const handleButtonClick = (contentType, buttonText) => {
    const cleanText = buttonText.replace(' →', '');
    if (contentType === 'seo') {
      setSeoContent(cleanText);
    } else if (contentType === 'wordpress') {
      setWordpressContent(cleanText);
    } else if (contentType === 'social') {
      setSocialContent(cleanText);
    }
  };

  return (
    <div className="relative w-full">
      {/* Hero Section with Background Image */}
      <section className="relative w-full min-h-[80vh] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/main/logo-banner.jpeg"
            alt="Services Hero Background"
            fill
            priority
            style={{ objectFit: 'cover' }}
            quality={100}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black via-[#1a0a2e] to-black"></div>
          {/* Animated Grid Pattern */}
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `linear-gradient(#8a21f0 1px, transparent 1px), linear-gradient(90deg, #8a21f0 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
            animation: 'grid-move 20s linear infinite'
          }}></div>
          {/* Floating Orbs */}
          <div className="absolute top-10 left-5 w-48 h-48 bg-[#35a5e8]/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-10 right-5 w-64 h-64 bg-[#8a21f0]/10 rounded-full blur-3xl animate-float-delayed"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 w-full h-full">
          <div className="max-w-7xl mx-auto px-6 h-full flex items-center" style={{ minHeight: '80vh', paddingTop: '100px' }}>
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

              {/* Left Side - Content */}
              <div className="space-y-6 max-w-xl">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight drop-shadow-lg">
                  Our Creative
                  <br />
                  <span className="text-[#35a5e8]">
                    Services
                  </span>
                </h1>
                <p className="text-white text-sm md:text-base leading-relaxed">
                  We offer a comprehensive range of design and branding services to help your business stand out in the digital landscape.
                </p>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4">
                  <button className="bg-[#8a21f0] hover:bg-[#7a1dd8] text-white font-bold px-6 py-2.5 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-xs uppercase">
                    Get Started
                  </button>
                  <a href="tel:6469939010" className="flex items-center gap-2 text-white font-bold text-sm hover:text-[#35a5e8] transition-colors">
                    <span>📞</span>
                    <span>(646) 993-9010</span>
                  </a>
                </div>
              </div>

              {/* Right Side - Image */}
              <div className="relative flex items-center justify-end">
                <div className="relative w-full max-w-[800px] h-[500px] md:h-[600px] lg:h-[700px]">
                  <Image
                    src="/services-main.png"
                    alt="Services Hero"
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

      {/* Customized Service Section */}
      <section className="relative w-full py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-4">
            <p className="text-[10px] font-black text-[#8a21f0] tracking-widest uppercase mb-4">CUSTOMIZED SERVICE</p>
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-4 leading-tight">
              Looking for customized service?
              <br />
              Let's talk customized design service.
            </h2>
          </div>

          {/* Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {customizedServices.map((service) => (
              <div
                key={service.id}
                onClick={() => setSelectedCard(service.id)}
                className={`${
                  selectedCard === service.id
                    ? 'bg-gradient-to-br from-[#8a21f0] to-[#35a5e8] text-white'
                    : 'bg-white text-gray-900 border border-gray-100'
                } rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 relative overflow-hidden cursor-pointer`}
              >
                {selectedCard === service.id && (
                  <div className="absolute top-4 right-4 text-7xl opacity-10">{service.icon}</div>
                )}
                <div className={`${selectedCard === service.id ? 'relative z-10' : ''} text-center`}>
                  <div className={`w-20 h-20 ${
                    selectedCard === service.id ? 'bg-white/20' : 'bg-gray-100'
                  } rounded-full flex items-center justify-center mx-auto mb-6`}>
                    <span className={`text-4xl ${
                      selectedCard === service.id ? '' : 'text-[#8a21f0]'
                    }`}>{service.icon}</span>
                  </div>
                  <h3 className="text-sm font-black mb-2">{service.title}</h3>
                  <p className={`text-[10px] font-medium leading-relaxed ${
                    selectedCard === service.id ? 'opacity-95' : 'text-gray-600'
                  }`}>
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Services Grid Section */}
      <section className="relative w-full py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-black text-[#8a21f0] mb-4">
              Our Services
            </h2>
            <p className="text-gray-600 text-sm max-w-3xl mx-auto">
              Comprehensive digital solutions tailored to your business needs
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Graphic Design */}
            <div className="group flex flex-col items-center p-6 bg-gray-50 rounded-2xl shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-[#8a21f0] to-[#35a5e8] rounded-xl flex items-center justify-center mb-4">
                <span className="text-3xl">🎨</span>
              </div>
              <h3 className="text-xs font-bold text-gray-900 text-center">
                Graphic Design
              </h3>
            </div>

            {/* UI/UX Design */}
            <div className="group flex flex-col items-center p-6 bg-gray-50 rounded-2xl shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-[#8a21f0] to-[#35a5e8] rounded-xl flex items-center justify-center mb-4">
                <span className="text-3xl">✨</span>
              </div>
              <h3 className="text-xs font-bold text-gray-900 text-center">
                UI/UX Design
              </h3>
            </div>

            {/* Website */}
            <div className="group flex flex-col items-center p-6 bg-gray-50 rounded-2xl shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-[#8a21f0] to-[#35a5e8] rounded-xl flex items-center justify-center mb-4">
                <span className="text-3xl">💻</span>
              </div>
              <h3 className="text-xs font-bold text-gray-900 text-center">
                Website
              </h3>
            </div>

            {/* SMM */}
            <div className="group flex flex-col items-center p-6 bg-gray-50 rounded-2xl shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-[#8a21f0] to-[#35a5e8] rounded-xl flex items-center justify-center mb-4">
                <span className="text-3xl">📱</span>
              </div>
              <h3 className="text-xs font-bold text-gray-900 text-center">
                SMM
              </h3>
            </div>

            {/* SEO */}
            <div className="group flex flex-col items-center p-6 bg-gray-50 rounded-2xl shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-[#8a21f0] to-[#35a5e8] rounded-xl flex items-center justify-center mb-4">
                <span className="text-3xl">🔍</span>
              </div>
              <h3 className="text-xs font-bold text-gray-900 text-center">
                SEO
              </h3>
            </div>

            {/* SEM */}
            <div className="group flex flex-col items-center p-6 bg-gray-50 rounded-2xl shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-[#8a21f0] to-[#35a5e8] rounded-xl flex items-center justify-center mb-4">
                <span className="text-3xl">📊</span>
              </div>
              <h3 className="text-xs font-bold text-gray-900 text-center">
                SEM
              </h3>
            </div>

            {/* Application Development */}
            <div className="group flex flex-col items-center p-6 bg-gray-50 rounded-2xl shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-[#8a21f0] to-[#35a5e8] rounded-xl flex items-center justify-center mb-4">
                <span className="text-3xl">📲</span>
              </div>
              <h3 className="text-xs font-bold text-gray-900 text-center">
                Application Development
              </h3>
            </div>

            {/* Video Animation */}
            <div className="group flex flex-col items-center p-6 bg-gray-50 rounded-2xl shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-[#8a21f0] to-[#35a5e8] rounded-xl flex items-center justify-center mb-4">
                <span className="text-3xl">🎬</span>
              </div>
              <h3 className="text-xs font-bold text-gray-900 text-center">
                Video Animation
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Services Sections */}
      {detailedServices.map((service, index) => (
        <section key={service.id} className={`relative w-full py-20 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${service.imageLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>

              {/* Content Side */}
              <div className={`${service.imageLeft ? 'lg:order-2' : 'lg:order-1'}`}>
                <h2 className="text-2xl md:text-3xl font-black text-[#8a21f0] mb-6">
                  {service.title}
                </h2>
                <p className="text-gray-700 text-sm leading-relaxed mb-8">
                  {service.description}
                </p>

                {/* Buttons */}
                <div className="flex flex-wrap gap-3">
                  {service.buttons.slice(0, 3).map((button, idx) => {
                    const cleanButton = button.replace(' →', '');
                    const isActive = (service.contentType === 'seo' && cleanButton === seoContent) ||
                                   (service.contentType === 'wordpress' && cleanButton === wordpressContent) ||
                                   (service.contentType === 'social' && cleanButton === socialContent);
                    return (
                      <button
                        key={idx}
                        onClick={() => handleButtonClick(service.contentType, button)}
                        className={`${isActive
                          ? 'bg-gradient-to-r from-[#8a21f0] to-[#7a1dd8] text-white'
                          : 'bg-white text-[#8a21f0] border-2 border-[#8a21f0]'
                        } hover:scale-105 font-bold px-6 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg text-sm cursor-pointer`}
                      >
                        {button}
                      </button>
                    );
                  })}
                </div>
                <div className="flex flex-wrap gap-3 mt-3">
                  {service.buttons.slice(3).map((button, idx) => {
                    const cleanButton = button.replace(' →', '');
                    const isActive = (service.contentType === 'seo' && cleanButton === seoContent) ||
                                   (service.contentType === 'wordpress' && cleanButton === wordpressContent) ||
                                   (service.contentType === 'social' && cleanButton === socialContent);
                    return (
                      <button
                        key={idx}
                        onClick={() => handleButtonClick(service.contentType, button)}
                        className={`${isActive
                          ? 'bg-gradient-to-r from-[#8a21f0] to-[#7a1dd8] text-white'
                          : 'bg-white text-[#8a21f0] border-2 border-[#8a21f0]'
                        } hover:scale-105 font-bold px-6 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg text-sm cursor-pointer`}
                      >
                        {button}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Image Side */}
              <div className={`${service.imageLeft ? 'lg:order-1' : 'lg:order-2'}`}>
                <div className="relative w-full h-[400px] rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Shopify Store Development Section */}
      <section className="relative w-full py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left Side - Image */}
            <div className="lg:order-1">
              <div className="relative w-full h-[400px] md:h-[500px]">
                <Image
                  src="/services/shopify.png"
                  alt="Shopify Store Development"
                  fill
                  style={{ objectFit: 'contain' }}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="lg:order-2">
              <h2 className="text-2xl md:text-3xl font-black text-[#8a21f0] mb-6">
                Shopify Store Development
              </h2>
              <p className="text-gray-700 text-sm leading-relaxed mb-8">
                Professional Shopify store setup and customization including theme design, app integration, payment gateway setup, and inventory management. Create a powerful online store that converts visitors into customers and drives sales growth.
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap gap-3">
                <button className="bg-gradient-to-r from-[#8a21f0] to-[#7a1dd8] text-white hover:scale-105 font-bold px-6 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg text-sm">
                  SHOPIFY STORE →
                </button>
                <button className="bg-white text-[#8a21f0] border-2 border-[#8a21f0] hover:scale-105 font-bold px-6 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg text-sm">
                  WOOCOMMERCE →
                </button>
                <button className="bg-white text-[#8a21f0] border-2 border-[#8a21f0] hover:scale-105 font-bold px-6 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg text-sm">
                  MAGENTO →
                </button>
              </div>
              <div className="flex flex-wrap gap-3 mt-3">
                <button className="bg-white text-[#8a21f0] border-2 border-[#8a21f0] hover:scale-105 font-bold px-6 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg text-sm">
                  PAYMENT GATEWAY →
                </button>
                <button className="bg-white text-[#8a21f0] border-2 border-[#8a21f0] hover:scale-105 font-bold px-6 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg text-sm">
                  INVENTORY →
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Print Design Services Section */}
      <section className="relative w-full py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left Side - Content */}
            <div className="lg:order-1">
              <h2 className="text-2xl md:text-3xl font-black text-[#8a21f0] mb-6">
                Print Design Services
              </h2>
              <p className="text-gray-700 text-sm leading-relaxed mb-8">
                Professional print design solutions including business cards, brochures, flyers, banners, and marketing materials. We create visually stunning designs that effectively communicate your brand message and leave lasting impressions on your audience.
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap gap-3">
                <button className="bg-white text-[#8a21f0] border-2 border-[#8a21f0] hover:scale-105 font-bold px-6 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg text-sm">
                  WORDPRESS →
                </button>
                <button className="bg-white text-[#8a21f0] border-2 border-[#8a21f0] hover:scale-105 font-bold px-6 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg text-sm">
                  SHOPIFY →
                </button>
                <button className="bg-gradient-to-r from-[#8a21f0] to-[#7a1dd8] text-white hover:scale-105 font-bold px-6 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg text-sm">
                  PRINT DESIGN →
                </button>
              </div>
              <div className="flex flex-wrap gap-3 mt-3">
                <button className="bg-white text-[#8a21f0] border-2 border-[#8a21f0] hover:scale-105 font-bold px-6 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg text-sm">
                  E-COMMERCE →
                </button>
                <button className="bg-white text-[#8a21f0] border-2 border-[#8a21f0] hover:scale-105 font-bold px-6 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg text-sm">
                  STATIONARY →
                </button>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="lg:order-2">
              <div className="relative w-full h-[400px] md:h-[500px]">
                <Image
                  src="/services/print-design.png"
                  alt="Print Design Services"
                  fill
                  style={{ objectFit: 'contain' }}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative w-full py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-[#8a21f0] hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <h3 className="text-2xl md:text-3xl font-black text-[#8a21f0] mb-3">
                1.5k
              </h3>
              <p className="text-sm font-bold text-gray-900 mb-2">Projects Completed</p>
              <p className="text-[10px] text-gray-600">
                Lorem ipsum available, but majority have suffered alteration in some form, by injected randomised words.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-[#8a21f0] hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <h3 className="text-2xl md:text-3xl font-black text-[#8a21f0] mb-3">
                15+
              </h3>
              <p className="text-sm font-bold text-gray-900 mb-2">Team Members</p>
              <p className="text-[10px] text-gray-600">
                Lorem ipsum available, but majority have suffered alteration in some form, by injected randomised words.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-[#8a21f0] hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <h3 className="text-2xl md:text-3xl font-black text-[#8a21f0] mb-3">
                99%
              </h3>
              <p className="text-sm font-bold text-gray-900 mb-2">5 Ratings</p>
              <p className="text-[10px] text-gray-600">
                Lorem ipsum available, but majority have suffered alteration in some form, by injected randomised words.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-[#8a21f0] hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <h3 className="text-2xl md:text-3xl font-black text-[#8a21f0] mb-3">
                2+
              </h3>
              <p className="text-sm font-bold text-gray-900 mb-2">Awards Achievement</p>
              <p className="text-[10px] text-gray-600">
                Lorem ipsum available, but majority have suffered alteration in some form, by injected randomised words.
              </p>
            </div>
          </div>

          {/* Press Logos */}
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-60">
            <div className="grayscale hover:grayscale-0 transition-all duration-300">
              <span className="text-sm font-bold text-gray-600">Entrepreneur</span>
            </div>
            <div className="grayscale hover:grayscale-0 transition-all duration-300">
              <span className="text-sm font-bold text-gray-600">Inc.</span>
            </div>
            <div className="grayscale hover:grayscale-0 transition-all duration-300">
              <span className="text-sm font-bold text-gray-600">TNW</span>
            </div>
            <div className="grayscale hover:grayscale-0 transition-all duration-300">
              <span className="text-sm font-bold text-gray-600">technasia</span>
            </div>
            <div className="grayscale hover:grayscale-0 transition-all duration-300">
              <span className="text-sm font-bold text-gray-600">Forbes</span>
            </div>
            <div className="grayscale hover:grayscale-0 transition-all duration-300">
              <span className="text-sm font-bold text-gray-600">THE HUFFINGTON POST</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative w-full py-16 bg-[#8a21f0]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-black text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-white text-sm mb-8 max-w-2xl mx-auto">
            Let's bring your vision to life with our creative expertise and dedication to excellence
          </p>
          <button className="bg-white text-[#8a21f0] hover:bg-gray-100 font-bold px-6 py-2.5 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-xs uppercase">
            Get Free Consultation
          </button>
        </div>
      </section>

      <style jsx>{`
        @keyframes grid-move {
          0% { transform: translateY(0); }
          100% { transform: translateY(50px); }
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
    </div>
  );
};

export default ServicesHero;
