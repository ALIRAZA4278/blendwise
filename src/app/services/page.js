import React from 'react';
import Navbar from '@/components/Navbar';
import ServicesHero from '@/components/ServicesHero';
import Footer from '@/components/Footer';

const ServicesPage = () => {
  return (
    <div>
      <Navbar />
      <div id="main-content">
        <ServicesHero />
        <Footer />
      </div>
    </div>
  );
};

export default ServicesPage;
