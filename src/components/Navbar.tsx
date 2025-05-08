
import React, { useState, useEffect } from 'react';

interface NavbarProps {
  scrollToContact: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ scrollToContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);

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
            <div className="text-2xl font-montserrat font-bold">
              <span className="text-rise-blue">Rise</span>
              <span className="text-rise-orange">Digital</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-rise-blue-light hover:text-rise-orange transition-colors">Home</a>
            <a href="#" className="text-rise-blue-light hover:text-rise-orange transition-colors">Serviços</a>
            <a href="#" className="text-rise-blue-light hover:text-rise-orange transition-colors">Portfolio</a>
            <a href="#" className="text-rise-blue-light hover:text-rise-orange transition-colors">Sobre</a>
          </div>
          
          <button 
            onClick={scrollToContact}
            className={`hidden md:block ${
              isScrolled 
                ? 'bg-rise-orange hover:bg-rise-orange-light' 
                : 'bg-white text-rise-orange hover:bg-gray-100'
            } px-5 py-2 rounded-md text-white transition-all duration-300`}
          >
            Fale conosco
          </button>
          
          <button className="md:hidden text-rise-blue">
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
