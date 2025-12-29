'use client';
import React, { useState } from 'react';
import QuoteModal from './QuoteModal';

const PackageHighlight = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const packageInfo = {
    name: 'Customized Web Portal',
    price: 4999.99,
    subtitle: 'Complete web solution tailored for your business success'
  };

  return (
    <>
    <section className="relative w-full py-8 bg-gray-50 overflow-hidden">
      <div className="relative z-10 max-w-5xl mx-auto px-4">

        {/* Package Card */}
        <div className="relative bg-white rounded-xl shadow-lg overflow-hidden border-2 border-gray-200 animate-scaleIn hover-lift">
          {/* Top Border */}
          <div className="h-1 bg-[#8a21f0] animate-slideInFromBottom"></div>

          <div className="p-4 md:p-5">

            {/* Header */}
            <div className="text-center mb-4 animate-fadeInDown">
              <div className="inline-block mb-1">
                <span className="text-[#35a5e8] font-black text-xs tracking-wider uppercase">
                  🚀 WEB PACKAGE
                </span>
              </div>
              <h2 className="font-black text-[#8a21f0] mb-2 leading-tight animate-fadeInUp animation-delay-200" style={{ fontSize: '36px' }}>
                CUSTOMIZED WEB PORTAL
              </h2>
              <p className="text-gray-700 max-w-2xl mx-auto animate-fadeInUp animation-delay-300" style={{ fontSize: '14px' }}>
                Complete web solution tailored for your business success
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">

              {/* Column 1 */}
              <div className="space-y-1.5 animate-fadeInLeft animation-delay-400">
                <FeatureItem text="Complete Custom Design & Development" />
                <FeatureItem text="Dating Portal, Job Portal, Professional Network Portal, Social Network Portal, Restaurant Portal, Medical Portal, Enterprise Portal (Any One)" />
                <FeatureItem text="Unique, User Friendly, Interactive, Dynamic, High End UI Design" />
                <FeatureItem text="Unlimited Banner Designs" />
                <FeatureItem text="Interactive Sliding Banners" />
                <FeatureItem text="Special Hover Effects" />
                <FeatureItem text="Unlimited Stock Images" />
                <FeatureItem text="User Signup Area" />
                <FeatureItem text="Client/User Dashboard Area" />
                <FeatureItem text="Custom Coding and Development" />
                <FeatureItem text="Content Management System (Custom)" />
                <FeatureItem text="Online Appointment/Scheduling/Online Ordering Integration (Optional)" />
              </div>

              {/* Column 2 */}
              <div className="space-y-1.5 animate-fadeInUp animation-delay-500">
                <FeatureItem text="Online Payment Integration (Optional)" />
                <FeatureItem text="Multi Lingual (Optional)" />
                <FeatureItem text="Custom Dynamic Forms (Optional)" />
                <FeatureItem text="Shopping Cart Integration (Optional)" />
                <FeatureItem text="Complete Database Creation" />
                <FeatureItem text="Signup Automated Email Authentication" />
                <FeatureItem text="Web Traffic Analytics Integration" />
                <FeatureItem text="3rd Party API Integrations" />
                <FeatureItem text="Signup Area (For Newsletters, Offers etc.)" />
                <FeatureItem text="Search Bar for Easy Search" />
                <FeatureItem text="Live Feeds of Social Networks integration (Optional)" />
                <FeatureItem text="Search Engine Submission" />
                <FeatureItem text="Module-wise Architecture" />
                <FeatureItem text="Extensive Admin Panel" />
              </div>

              {/* Column 3 */}
              <div className="space-y-1.5 animate-fadeInRight animation-delay-600">
                <FeatureItem text="Award Winning Team of Expert Designers and Developers" />
                <FeatureItem text="Complete Deployment" />

                {/* Value Added Services */}
                <div className="mt-2 bg-gray-50 p-2 rounded-lg border border-gray-200 hover-lift">
                  <h3 className="text-[#35a5e8] font-black text-[10px] mb-1.5 flex items-center gap-1 uppercase">
                    <span>✨</span> Value Added Services
                  </h3>
                  <div className="space-y-1.5">
                    <FeatureItem text="Complete Source Files" />
                    <FeatureItem text="Dedicated Project Manager" />
                    <FeatureItem text="100% Ownership Rights" />
                    <FeatureItem text="100% Satisfaction Guarantee" />
                    <FeatureItem text="100% Money Back Guarantee" />
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="border-t border-gray-100 pt-3 animate-fadeInUp animation-delay-700">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-3">

                {/* Left - Contact Info */}
                <div className="text-center lg:text-left animate-fadeInLeft animation-delay-800">
                  <div className="flex flex-col sm:flex-row items-center gap-2 mb-2">
                    <a href="tel:6469939010" className="group flex items-center gap-1.5 bg-white border border-[#35a5e8] hover:border-[#2590d8] rounded-full px-3 py-1.5 transition-all duration-300 shadow-sm hover:shadow-md hover-scale" style={{ textDecoration: 'none' }}>
                      <div className="w-5 h-5 bg-[#35a5e8] rounded-full flex items-center justify-center">
                        <span className="text-xs">📞</span>
                      </div>
                      <span className="text-[#35a5e8] font-black text-xs">
                        (646) 993-9010
                      </span>
                    </a>
                    <button onClick={() => setIsModalOpen(true)} className="flex items-center gap-1.5 bg-[#8a21f0] hover:bg-[#7a1dd8] text-white font-bold px-3 py-1.5 rounded-full transition-all duration-300 shadow-md text-xs hover-scale">
                      <span className="text-xs">💬</span>
                      <span>LIVE CHAT</span>
                    </button>
                  </div>
                  <p className="text-gray-700 font-semibold text-[10px]">
                    For more information speak with us
                  </p>
                </div>

                {/* Right - Price & CTA */}
                <div className="text-center animate-fadeInRight animation-delay-800">
                  <div className="mb-2 bg-gray-50 p-2 rounded-lg border border-gray-200 hover-lift">
                    <p className="text-gray-400 line-through text-xs mb-0.5">$9,999.88</p>
                    <p className="font-black text-2xl text-[#8a21f0]">
                      $4,999<span className="text-base">.99</span>
                    </p>
                    <p className="text-gray-600 text-[10px] mt-0.5">One-time payment</p>
                  </div>
                  <button onClick={() => setIsModalOpen(true)} className="group relative bg-[#8a21f0] hover:bg-[#7a1dd8] text-white font-black px-6 py-2 rounded-full transition-all duration-300 shadow-lg mb-1.5 w-full text-xs hover-scale">
                    🎉 ORDER NOW
                  </button>
                  <p className="text-[10px] font-bold text-gray-700 mb-1">
                    20% more OFF on Next Order 🎁
                  </p>
                  <button onClick={() => setIsModalOpen(true)} className="text-[#35a5e8] font-bold text-[10px] hover:opacity-80 transition-opacity underline uppercase hover-scale">
                    VIEW DETAILS →
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>

    {/* Quote Modal */}
    <QuoteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} packageInfo={packageInfo} />
    </>
  );
};

// Feature Item Component
const FeatureItem = ({ text }) => {
  return (
    <div className="flex items-start gap-1.5 group hover:translate-x-1 transition-transform duration-300">
      <div className="shrink-0 mt-0.5">
        <div className="w-3 h-3 rounded-full bg-[#8a21f0] flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
          <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
      <p className="text-gray-700 leading-relaxed group-hover:text-[#8a21f0] transition-colors duration-300" style={{ fontSize: '14px' }}>{text}</p>
    </div>
  );
};

export default PackageHighlight;
