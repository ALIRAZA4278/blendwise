import React from 'react';
import Navbar from '@/components/Navbar';
import ContactHero from '@/components/ContactHero';
import Footer from '@/components/Footer';

const ContactPage = () => {
  return (
    <div>
      <Navbar />
      <div id="main-content">
        <ContactHero />
        <Footer />
      </div>
    </div>
  );
};

export default ContactPage;
