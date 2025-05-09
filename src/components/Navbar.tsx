
import React, { useState, useEffect } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import { openWhatsAppChat } from '@/utils/whatsappUtils';

interface NavbarProps {
  scrollToContact?: () => void; // Made optional by adding '?'
}

const Navbar: React.FC<NavbarProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleContactClick = () => {
    openWhatsAppChat("Olá! Gostaria de mais informações sobre os serviços da Rise Digital.");
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-3' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/78fca218-adda-45e6-adde-cf275178b074.png" 
                alt="Rise Digital Logo"
                className={`transition-all duration-300 ${
                  isMobile ? 'h-10' : (isScrolled ? 'h-12' : 'h-14')
                }`}
              />
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-rise-blue-light hover:text-rise-blue-bright transition-colors">Home</a>
            <a href="#" className="text-rise-blue-light hover:text-rise-blue-bright transition-colors">Serviços</a>
            <a href="#" className="text-rise-blue-light hover:text-rise-blue-bright transition-colors">Portfolio</a>
            <a href="#" className="text-rise-blue-light hover:text-rise-blue-bright transition-colors">Sobre</a>
          </div>
          
          <button 
            onClick={handleContactClick}
            className={`hidden md:block ${
              isScrolled 
                ? 'bg-rise-blue-bright hover:bg-rise-blue-sky text-white' 
                : 'bg-white text-rise-blue-bright hover:bg-gray-100'
            } px-5 py-2 rounded-md transition-all duration-300`}
          >
            Fale conosco
          </button>
          
          <button className="md:hidden text-rise-blue-bright">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
