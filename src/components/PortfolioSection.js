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
    item => activeFilter === 'all' || item.category === activeFilter
  );

  return (
    <section className="relative w-full py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-purple-600 to-cyan-400 bg-clip-text text-transparent mb-4">
            Our Outstanding Portfolio
          </h2>
          <p className="text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed">
            We take an integrated approach to creating highly engaging digital properties &
            brand focused creative solutions. We believe in providing highly creative and
            exclusive brand identities giving your business an edge over its competitors.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-8 py-3 rounded-full font-bold text-sm transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-purple-600 to-cyan-400 text-white shadow-lg scale-105'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              {/* Display GIF/Image - No background, fills the card completely */}
              <Image
                src={item.image}
                alt={`Portfolio Logo ${item.id}`}
                width={600}
                height={450}
                style={{ objectFit: 'cover', width: '100%', height: '100%', display: 'block' }}
                unoptimized // For GIF support
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-purple-600 to-cyan-400 hover:from-purple-700 hover:to-cyan-500 text-white font-bold px-10 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            View All Portfolio
          </button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
