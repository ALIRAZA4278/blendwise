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
    <section className="relative w-full py-20 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl animate-float-delayed"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-cyan-400 text-white text-xs font-bold px-4 py-2 rounded-full">
              OUR WORK
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black bg-gradient-to-r from-purple-600 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-6 leading-tight">
            Our Outstanding Portfolio
          </h2>
          <p className="text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed">
            We take an integrated approach to creating highly engaging digital properties &
            brand focused creative solutions. We believe in providing highly creative and
            exclusive brand identities giving your business an edge over its competitors.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`relative px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 ${
                activeFilter === filter
                  ? 'text-white shadow-2xl scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md hover:shadow-lg hover:scale-105'
              }`}
            >
              {activeFilter === filter && (
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-400 rounded-full"></div>
              )}
              <span className="relative z-10">{filter}</span>
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:scale-105"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden rounded-2xl bg-white">
                <Image
                  src={item.image}
                  alt={`Portfolio ${item.category} ${item.id}`}
                  width={600}
                  height={450}
                  style={{ objectFit: 'cover', width: '100%', height: '100%', display: 'block' }}
                  unoptimized
                  className="transform group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="text-white">
                    <p className="text-xs font-semibold mb-1">{item.category}</p>
                    <p className="text-sm">View Details →</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <button className="group relative bg-gradient-to-r from-purple-600 to-cyan-400 hover:from-purple-700 hover:to-cyan-500 text-white font-bold px-12 py-5 rounded-full transition-all duration-300 transform hover:scale-110 shadow-2xl hover:shadow-purple-500/50 overflow-hidden">
            <span className="relative z-10">View All Portfolio</span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>

      <style jsx>{`
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
    </section>
  );
};

export default PortfolioSection;
