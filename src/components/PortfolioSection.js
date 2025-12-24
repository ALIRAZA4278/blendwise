'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState('2D Animations');

  const filters = [
    '2D Animations',
    '3D Logos',
    'Iconic',
    'Illustrative',
    'Symbolic',
    'Typographic'
  ];

  // Portfolio items organized by category from public/portfolio/port/
  const portfolioItems = [
    // 2D Animations (GIFs from 2d folder)
    ...Array.from({ length: 12 }, (_, i) => ({
      id: `2d-${i + 1}`,
      category: '2D Animations',
      image: `/portfolio/port/2d/${String(i + 1).padStart(2, '0')}.gif`
    })),

    // 3D Logos (JPGs from 3d folder)
    ...Array.from({ length: 6 }, (_, i) => ({
      id: `3d-00${i + 1}`,
      category: '3D Logos',
      image: `/portfolio/port/3d/00${i + 1}.jpg`
    })),
    ...Array.from({ length: 12 }, (_, i) => ({
      id: `3d-${i + 1}`,
      category: '3D Logos',
      image: `/portfolio/port/3d/${String(i + 1).padStart(2, '0')}.jpg`
    })),

    // Iconic (JPGs from iconic folder)
    ...Array.from({ length: 6 }, (_, i) => ({
      id: `iconic-00${i + 1}`,
      category: 'Iconic',
      image: `/portfolio/port/iconic/00${i + 1}.jpg`
    })),
    ...Array.from({ length: 12 }, (_, i) => ({
      id: `iconic-${i + 1}`,
      category: 'Iconic',
      image: `/portfolio/port/iconic/${String(i + 1).padStart(2, '0')}.jpg`
    })),

    // Illustrative (JPGs from illustrative folder)
    ...Array.from({ length: 6 }, (_, i) => ({
      id: `illustrative-00${i + 1}`,
      category: 'Illustrative',
      image: `/portfolio/port/illustrative/00${i + 1}.jpg`
    })),
    ...Array.from({ length: 12 }, (_, i) => ({
      id: `illustrative-${i + 1}`,
      category: 'Illustrative',
      image: `/portfolio/port/illustrative/${String(i + 1).padStart(2, '0')}.jpg`
    })),

    // Symbolic (JPGs from symbolic folder)
    ...Array.from({ length: 6 }, (_, i) => ({
      id: `symbolic-00${i + 1}`,
      category: 'Symbolic',
      image: `/portfolio/port/symbolic/00${i + 1}.jpg`
    })),
    ...Array.from({ length: 12 }, (_, i) => ({
      id: `symbolic-${i + 1}`,
      category: 'Symbolic',
      image: `/portfolio/port/symbolic/${String(i + 1).padStart(2, '0')}.jpg`
    })),

    // Typographic (JPGs from typographic folder)
    ...Array.from({ length: 6 }, (_, i) => ({
      id: `typographic-00${i + 1}`,
      category: 'Typographic',
      image: `/portfolio/port/typographic/00${i + 1}.jpg`
    })),
    ...Array.from({ length: 12 }, (_, i) => ({
      id: `typographic-${i + 1}`,
      category: 'Typographic',
      image: `/portfolio/port/typographic/${String(i + 1).padStart(2, '0')}.jpg`
    })),
  ];

  const filteredItems = portfolioItems.filter(
    item => item.category === activeFilter
  );

  return (
    <section className="relative w-full py-12 bg-white overflow-hidden">
      <div className="relative z-10 max-w-5xl mx-auto px-4">

        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="font-black text-[#8a21f0] mb-3 leading-tight" style={{ fontSize: '30px' }}>
            Our Outstanding Portfolio
          </h2>
          <p className="text-gray-700 text-xs max-w-3xl mx-auto leading-relaxed" style={{ fontSize: '14px' }}>
            We take an integrated approach to creating highly engaging digital properties &
            brand focused creative solutions. We believe in providing highly creative and
            exclusive brand identities giving your business an edge over its competitors.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`relative px-4 py-1.5 rounded-full font-bold text-[10px] transition-all duration-300 border-2 ${
                activeFilter === filter
                  ? 'bg-[#8a21f0] text-white border-[#8a21f0] shadow-md'
                  : 'bg-white text-[#8a21f0] border-[#8a21f0] hover:bg-[#8a21f0] hover:text-white'
              }`}
            >
              <span className="relative z-10">{filter}</span>
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-500 cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden rounded-xl bg-white">
                <Image
                  src={item.image}
                  alt={`Portfolio ${item.category} ${item.id}`}
                  width={400}
                  height={300}
                  style={{ objectFit: 'cover', width: '100%', height: '100%', display: 'block' }}
                  unoptimized
                  className="transform group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-[#8a21f0]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                  <div className="text-white">
                    <p className="text-[10px] font-semibold mb-0.5">{item.category}</p>
                    <p className="text-xs">View Details →</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-8">
          <button className="group relative bg-[#8a21f0] hover:bg-[#7a1dd8] text-white font-bold px-8 py-2.5 rounded-full transition-all duration-300 shadow-lg uppercase text-xs">
            <span className="relative z-10">View All Portfolio</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
