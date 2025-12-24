'use client';
import React from 'react';

const PackageHighlight = () => {
  return (
    <section className="relative w-full py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Package Card */}
        <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Gradient Top Border */}
          <div className="h-3 bg-gradient-to-r from-purple-600 via-purple-400 to-cyan-400"></div>

          <div className="p-8 md:p-12">

            {/* Header */}
            <div className="text-center mb-12">
              <div className="inline-block mb-3">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-400 font-black text-xl tracking-wider">
                  🚀 WEB PACKAGE
                </span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black bg-gradient-to-r from-purple-600 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight">
                CUSTOMIZED WEB PORTAL
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                Complete web solution tailored for your business success
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">

              {/* Column 1 */}
              <div className="space-y-4">
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
              <div className="space-y-4">
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
              <div className="space-y-4">
                <FeatureItem text="Award Winning Team of Expert Designers and Developers" />
                <FeatureItem text="Complete Deployment" />

                {/* Value Added Services */}
                <div className="mt-8 bg-gradient-to-br from-purple-50 to-cyan-50 p-6 rounded-2xl">
                  <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-400 font-black text-lg mb-4 flex items-center gap-2">
                    <span>✨</span> Value Added Services
                  </h3>
                  <div className="space-y-4">
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
            <div className="border-t-2 border-gray-100 pt-8">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

                {/* Left - Contact Info */}
                <div className="text-center lg:text-left">
                  <div className="flex flex-col sm:flex-row items-center gap-4 mb-4">
                    <a href="tel:6469939010" className="group flex items-center gap-3 bg-white border-2 border-purple-200 hover:border-purple-400 rounded-full px-6 py-3 transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg">
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-cyan-400 rounded-full flex items-center justify-center">
                        <span className="text-xl">📞</span>
                      </div>
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-400 font-black text-lg">
                        (646) 993-9010
                      </span>
                    </a>
                    <button className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-cyan-400 hover:from-purple-700 hover:to-cyan-500 text-white font-bold px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                      <span className="text-xl">💬</span>
                      <span>LIVE CHAT</span>
                    </button>
                  </div>
                  <p className="text-gray-600 font-semibold text-base">
                    For more information speak with us
                  </p>
                </div>

                {/* Right - Price & CTA */}
                <div className="text-center">
                  <div className="mb-6 bg-gradient-to-br from-purple-50 to-cyan-50 p-6 rounded-2xl">
                    <p className="text-gray-400 line-through text-xl mb-2">$9,999.88</p>
                    <p className="font-black text-6xl bg-gradient-to-r from-purple-600 to-cyan-400 bg-clip-text text-transparent">
                      $4,999<span className="text-4xl">.99</span>
                    </p>
                    <p className="text-gray-600 text-sm mt-2">One-time payment</p>
                  </div>
                  <button className="group relative bg-gradient-to-r from-purple-600 to-cyan-400 hover:from-purple-700 hover:to-cyan-500 text-white font-black px-12 py-5 rounded-full transition-all duration-300 transform hover:scale-110 shadow-2xl hover:shadow-purple-500/50 mb-3 w-full overflow-hidden">
                    <span className="relative z-10">🎉 ORDER NOW</span>
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  </button>
                  <p className="text-sm font-bold text-gray-700 mb-3">
                    20% more OFF on Next Order 🎁
                  </p>
                  <button className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-400 font-bold text-sm hover:opacity-80 transition-opacity underline">
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
    <div className="flex items-start gap-3 group">
      <div className="flex-shrink-0 mt-1">
        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-600 to-cyan-400 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
          <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
      <p className="text-gray-700 text-sm leading-relaxed group-hover:text-gray-900 transition-colors duration-300">{text}</p>
    </div>
  );
};

export default PackageHighlight;
