
import React, { useRef } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import BenefitsSection from '@/components/BenefitsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <Navbar scrollToContact={scrollToContact} />
      
      <main>
        <HeroSection scrollToContact={scrollToContact} />
        <BenefitsSection />
        <ContactSection ref={contactRef} id="contact" />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
