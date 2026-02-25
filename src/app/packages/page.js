'use client';
import React from 'react';
import Navbar from '@/components/Navbar';
import PackagesHero from '@/components/PackagesHero';
import Footer from '@/components/Footer';

const PackagesPage = () => {
  return (
    <>
      <Navbar />
      <div id="main-content">
        <PackagesHero />
        <Footer />
      </div>
    </>
  );
};

export default PackagesPage;
