
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import BenefitsSection from '@/components/BenefitsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import TargetAudienceSection from '@/components/TargetAudienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import EssentialPlanSection from '@/components/EssentialPlanSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        <HeroSection />
        <BenefitsSection />
        <TargetAudienceSection />
        <ProjectsSection />
        <EssentialPlanSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
