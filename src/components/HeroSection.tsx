
import React from 'react';
import { openWhatsAppChat } from '@/utils/whatsappUtils';

interface HeroSectionProps {
  scrollToContact?: () => void; // Made optional by adding '?'
}

const HeroSection: React.FC<HeroSectionProps> = () => {
  const handleContactClick = () => {
    openWhatsAppChat("Olá! Estou interessado em ter uma Landing Page para minha empresa.");
  };

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/b9df69f6-4b32-4a08-bcba-ce348a9c4745.png" 
          alt="Digital Marketing Background" 
          className="absolute inset-0 w-full h-full object-cover blur-[3px]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-montserrat font-bold text-4xl md:text-5xl lg:text-6xl mb-6 animate-fade-in-up text-white">
            Transforme visitantes em clientes com um Site feito para converter
          </h1>
          
          <p className="text-gray-100 text-lg md:text-xl mb-10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Tenha uma página otimizada, rápida e focada em resultado para captar mais clientes no digital. 
            Desenvolvida pela Rise Digital, especialista em performance.
          </p>
          
          <button 
            onClick={handleContactClick} 
            className="btn-primary animate-fade-in-up"
            style={{ animationDelay: '0.4s' }}
          >
            Quero minha Landing Page
          </button>
          
          <div className="mt-12 grid grid-cols-3 gap-4 text-sm text-gray-200 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="flex flex-col items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-rise-orange mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span>Rápido e Responsivo</span>
            </div>
            <div className="flex flex-col items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-rise-orange mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span>Seguro e Confiável</span>
            </div>
            <div className="flex flex-col items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-rise-orange mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <span>Focado em Resultados</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
