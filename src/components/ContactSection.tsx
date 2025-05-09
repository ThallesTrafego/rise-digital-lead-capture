
import React from 'react';
import { Button } from '@/components/ui/button';
import { MessageSquare } from 'lucide-react';
import { openWhatsAppChat } from '@/utils/whatsappUtils';

const ContactSection: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ id, ...props }) => {
  const handleContactClick = () => {
    openWhatsAppChat("Olá! Gostaria de mais informações sobre os serviços da Rise Digital.");
  };

  return (
    <section id={id} className="py-20 bg-white" {...props}>
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl heading-gradient mb-4 animate-fade-in-up">
              Entre em contato
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Estamos prontos para atender sua empresa e transformar sua presença digital. 
              Clique no botão abaixo para iniciar uma conversa no WhatsApp.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-xl p-8 animate-fade-in-up text-center" style={{ animationDelay: '0.3s' }}>
            <div className="max-w-md mx-auto">
              <p className="text-lg text-gray-700 mb-8">
                Respondemos rapidamente! Converse diretamente com um especialista e obtenha um orçamento personalizado para seu projeto.
              </p>
              
              <Button 
                onClick={handleContactClick}
                className="btn-primary text-lg py-6 px-10 w-full sm:w-auto"
              >
                <MessageSquare className="mr-2" />
                Conversar no WhatsApp
              </Button>
              
              <p className="mt-6 text-sm text-gray-500">
                Disponível de segunda a sexta, das 9h às 18h
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
