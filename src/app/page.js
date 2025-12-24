import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import PortfolioSection from '@/components/PortfolioSection';
import PackagesSection from '@/components/PackagesSection';
import PackageHighlight from '@/components/PackageHighlight';
import BrandExcellenceSection from '@/components/BrandExcellenceSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';

const page = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <PortfolioSection />
      <PackagesSection />
      <PackageHighlight />
      <BrandExcellenceSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default page;
