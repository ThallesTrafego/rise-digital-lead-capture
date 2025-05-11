
import React from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { openWhatsAppChat } from '@/utils/whatsappUtils';

const EssentialPlanSection = () => {
  const features = [
    '1 Site responsivo',
    'Copy persuasiva incluída',
    'Integração com WhatsApp ou formulário',
    'Prazo de entrega: até 7 dias úteis',
  ];

  const handleWhatsAppContact = () => {
    openWhatsAppChat("Olá! Estou interessado no Plano Essencial para Site.");
  };

  return (
    <section className="py-20 bg-gradient-to-br from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <Card className="border-none shadow-xl overflow-hidden">
            <div className="bg-rise-blue-bright p-4 text-center">
              <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-white">
                Plano Essencial
              </h2>
            </div>
            
            <CardContent className="p-8">
              <div className="space-y-6">
                <ul className="space-y-4">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="mr-3 mt-1 text-rise-blue-bright">
                        <Check size={20} />
                      </div>
                      <span className="text-lg text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="py-6 border-t border-b border-gray-100">
                  <div className="flex items-center justify-center">
                    <span className="text-lg text-gray-500 line-through mr-3">R$997</span>
                    <span className="text-4xl font-bold text-rise-blue-bright">R$797</span>
                  </div>
                  <p className="text-center text-gray-500 mt-2">Pagamento único</p>
                </div>
                
                <div className="text-center">
                  <Button 
                    onClick={handleWhatsAppContact}
                    className="btn-primary w-full text-lg py-6"
                  >
                    Quero esse plano
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </Button>
                  <p className="text-sm text-gray-500 mt-4">
                    Sem taxas extras ou cobranças recorrentes
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EssentialPlanSection;
