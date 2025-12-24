'use client';
import React from 'react';

const PackageHighlight = () => {
  return (
    <section className="relative w-full py-8 bg-gray-50 overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-4">

        {/* Package Card */}
        <div className="relative bg-white rounded-xl shadow-lg overflow-hidden border-2 border-gray-200">
          {/* Top Border */}
          <div className="h-1 bg-[#0a4d7c]"></div>

          <div className="p-4 md:p-5">

            {/* Header */}
            <div className="text-center mb-4">
              <div className="inline-block mb-1">
                <span className="text-orange-500 font-black text-xs tracking-wider uppercase">
                  🚀 WEB PACKAGE
                </span>
              </div>
              <h2 className="font-black text-[#0a4d7c] mb-2 leading-tight" style={{ fontSize: '36px' }}>
                CUSTOMIZED WEB PORTAL
              </h2>
              <p className="text-gray-700 max-w-2xl mx-auto" style={{ fontSize: '16px' }}>
                Complete web solution tailored for your business success
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">

              {/* Column 1 */}
              <div className="space-y-1.5">
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
              <div className="space-y-1.5">
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
              <div className="space-y-1.5">
                <FeatureItem text="Award Winning Team of Expert Designers and Developers" />
                <FeatureItem text="Complete Deployment" />

                {/* Value Added Services */}
                <div className="mt-2 bg-gray-50 p-2 rounded-lg border border-gray-200">
                  <h3 className="text-orange-500 font-black text-[10px] mb-1.5 flex items-center gap-1 uppercase">
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
            <div className="border-t border-gray-100 pt-3">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-3">

                {/* Left - Contact Info */}
                <div className="text-center lg:text-left">
                  <div className="flex flex-col sm:flex-row items-center gap-2 mb-2">
                    <a href="tel:6469939010" className="group flex items-center gap-1.5 bg-white border border-orange-500 hover:border-orange-600 rounded-full px-3 py-1.5 transition-all duration-300 shadow-sm hover:shadow-md">
                      <div className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center">
                        <span className="text-xs">📞</span>
                      </div>
                      <span className="text-orange-500 font-black text-xs">
                        (646) 993-9010
                      </span>
                    </a>
                    <button className="flex items-center gap-1.5 bg-orange-500 hover:bg-orange-600 text-white font-bold px-3 py-1.5 rounded-full transition-all duration-300 shadow-md text-xs">
                      <span className="text-xs">💬</span>
                      <span>LIVE CHAT</span>
                    </button>
                  </div>
                  <p className="text-gray-700 font-semibold text-[10px]">
                    For more information speak with us
                  </p>
                </div>

                {/* Right - Price & CTA */}
                <div className="text-center">
                  <div className="mb-2 bg-gray-50 p-2 rounded-lg border border-gray-200">
                    <p className="text-gray-400 line-through text-xs mb-0.5">$9,999.88</p>
                    <p className="font-black text-2xl text-[#0a4d7c]">
                      $4,999<span className="text-base">.99</span>
                    </p>
                    <p className="text-gray-600 text-[10px] mt-0.5">One-time payment</p>
                  </div>
                  <button className="group relative bg-[#0a4d7c] hover:bg-[#083d63] text-white font-black px-6 py-2 rounded-full transition-all duration-300 shadow-lg mb-1.5 w-full text-xs">
                    🎉 ORDER NOW
                  </button>
                  <p className="text-[10px] font-bold text-gray-700 mb-1">
                    20% more OFF on Next Order 🎁
                  </p>
                  <button className="text-orange-500 font-bold text-[10px] hover:opacity-80 transition-opacity underline uppercase">
                    VIEW DETAILS →
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

// Feature Item Component
const FeatureItem = ({ text }) => {
  return (
    <div className="flex items-start gap-1.5 group">
      <div className="shrink-0 mt-0.5">
        <div className="w-3 h-3 rounded-full bg-[#0a4d7c] flex items-center justify-center shadow-sm">
          <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
      <p className="text-gray-700 leading-relaxed" style={{ fontSize: '16px' }}>{text}</p>
    </div>
  );
};

export default PackageHighlight;
