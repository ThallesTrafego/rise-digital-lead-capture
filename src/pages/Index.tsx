
import React, { useRef } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import BenefitsSection from '@/components/BenefitsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import TargetAudienceSection from '@/components/TargetAudienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import EssentialPlanSection from '@/components/EssentialPlanSection';

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
        <TargetAudienceSection />
        <ProjectsSection />
        <EssentialPlanSection />
        <div ref={contactRef} id="contact">
          <ContactSection />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
