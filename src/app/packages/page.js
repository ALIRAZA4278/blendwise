import React from 'react';
import Navbar from '@/components/Navbar';
import PackagesHero from '@/components/PackagesHero';
import Footer from '@/components/Footer';

const PackagesPage = () => {
  return (
    <div>
      <Navbar />
      <div id="main-content">
        <PackagesHero />
        <Footer />
      </div>
    </div>
  );
};

export default PackagesPage;
