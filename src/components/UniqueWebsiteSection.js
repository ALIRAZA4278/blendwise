'use client';
import React from 'react';
import Image from 'next/image';

const UniqueWebsiteSection = () => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Top Banner - Blue Background */}
      <div className="relative bg-[#0a4d7c] py-6">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="font-black text-white mb-2" style={{ fontSize: '36px' }}>
            All you need to create a website.
          </h2>
          <p className="text-white/90 mb-3" style={{ fontSize: '16px' }}>
            Creating a website should be easy and fun — this is our philosophy here at Custom Web Guru.
          </p>
          <a
            href="#"
            className="inline-block text-orange-500 hover:text-orange-400 font-bold text-[10px] underline transition-colors duration-300"
          >
            Build A Professional Website
          </a>
        </div>
      </div>

      {/* Main Content - White Background */}
      <div className="relative bg-white py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

            {/* Left Side - Device Mockups */}
            <div className="relative">
              <div className="relative flex items-center justify-center">
                {/* Desktop Device */}
                <div className="relative z-10 w-full max-w-md">
                  <div className="relative bg-gray-200 rounded-lg shadow-lg overflow-hidden p-2">
                    <div className="bg-white rounded-md overflow-hidden">
                      {/* Mockup Header */}
                      <div className="bg-gray-100 p-1 flex items-center gap-1">
                        <div className="flex gap-0.5">
                          <div className="w-1.5 h-1.5 bg-red-400 rounded-full"></div>
                          <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>
                          <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                        </div>
                      </div>
                      {/* Mockup Content */}
                      <div className="bg-[#d4a89e] p-4">
                        <div className="text-white text-center mb-4">
                          <h3 className="text-base font-black mb-1">Savvy Glasses</h3>
                          <p className="text-[10px]">Premium Eyewear Collection</p>
                        </div>
                        <div className="bg-white/90 rounded-md p-2 space-y-1">
                          <div className="flex justify-between items-center text-[10px]">
                            <span className="font-bold">Stats</span>
                            <span className="text-gray-500">Today</span>
                          </div>
                          <div className="space-y-0.5">
                            <div className="flex justify-between text-xs">
                              <span>2,563</span>
                              <span className="text-[#0a4d7c]">↗</span>
                            </div>
                            <div className="flex justify-between text-xs">
                              <span>5,963</span>
                              <span className="text-[#0a4d7c]">↗</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mobile Device - Overlapping */}
                <div className="absolute -bottom-6 -right-4 z-20 w-32">
                  <div className="relative bg-gray-800 rounded-xl shadow-lg overflow-hidden p-1">
                    <div className="bg-white rounded-lg overflow-hidden">
                      <div className="bg-[#d4a89e] p-2">
                        <div className="bg-white rounded-md p-2 space-y-1">
                          <div className="text-[10px] font-bold mb-1">Product Details</div>
                          <div className="space-y-0.5 text-[10px]">
                            <div className="flex justify-between">
                              <span>2,563</span>
                              <span>5,963</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Content & Features */}
            <div className="space-y-3">
              <div>
                <h2 className="font-black text-[#0a4d7c] leading-tight mb-2" style={{ fontSize: '36px' }}>
                  Create a Unique Website that Sells Your Business Online!
                </h2>
                <p className="text-gray-700 leading-relaxed" style={{ fontSize: '16px' }}>
                  We have a combination of both professional design and development expertise that gives us the capabilities of building some complex and custom web solutions for you.
                </p>
              </div>

              {/* Features List */}
              <div className="space-y-2">
                {/* Feature 1 */}
                <div className="flex gap-2 items-start">
                  <div className="shrink-0">
                    <div className="w-8 h-8 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[#0a4d7c] font-black mb-0.5" style={{ fontSize: '16px' }}>
                      Wireframe & Design
                    </h3>
                    <p className="text-gray-600 leading-relaxed" style={{ fontSize: '16px' }}>
                      Our design craftsmen lay down some of the best visual concepts and strategies to make sure your brand stands out in the competition, resulting in better ROI.
                    </p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="flex gap-2 items-start">
                  <div className="shrink-0">
                    <div className="w-8 h-8 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[#0a4d7c] font-black mb-0.5" style={{ fontSize: '16px' }}>
                      Good Web Design & Development
                    </h3>
                    <p className="text-gray-600 leading-relaxed" style={{ fontSize: '16px' }}>
                      After our design team is finished with the visuals, the development team comes into action and makes sure that each and every functionality blended in perfectly and goes with the design.
                    </p>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="flex gap-2 items-start">
                  <div className="shrink-0">
                    <div className="w-8 h-8 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[#0a4d7c] font-black mb-0.5" style={{ fontSize: '16px' }}>
                      Launch
                    </h3>
                    <p className="text-gray-600 leading-relaxed" style={{ fontSize: '16px' }}>
                      After your business website finally looks and feels just the way you wanted it, we make it visible to all of your targeted viewers online.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UniqueWebsiteSection;
