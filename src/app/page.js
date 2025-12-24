import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import PortfolioSection from '@/components/PortfolioSection';
import PackagesSection from '@/components/PackagesSection';
import PackageHighlight from '@/components/PackageHighlight';
import BrandExcellenceSection from '@/components/BrandExcellenceSection';
import WebsiteCreationSection from '@/components/WebsiteCreationSection';
import UniqueWebsiteSection from '@/components/UniqueWebsiteSection';
import WebDesignServicesSection from '@/components/WebDesignServicesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FAQsSection from '@/components/FAQsSection';
import Footer from '@/components/Footer';

const page = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <PortfolioSection />
      <PackagesSection />
      <PackageHighlight />
      <WebsiteCreationSection />
      <UniqueWebsiteSection />
      <WebDesignServicesSection />
      {/* <BrandExcellenceSection /> */}
      {/* <TestimonialsSection /> */}
      <FAQsSection />
      <Footer />
    </div>
  );
};

export default page;
