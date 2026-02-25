'use client';
import React from 'react';
import Navbar from '@/components/Navbar';
import ServicesHero from '@/components/ServicesHero';
import Footer from '@/components/Footer';

const ServicesPage = () => {
  return (
    <>
      <Navbar />
      <div id="main-content">
        <ServicesHero />
        <Footer />
      </div>
    </>
  );
};

export default ServicesPage;
