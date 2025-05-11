
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const TargetAudienceSection = () => {
  const audiences = [
    'Donos de pequenos e médios negócios',
    'Profissionais liberais (nutricionistas, psicólogos, dentistas…)',
    'Agências que desejam terceirizar',
    'Quem está começando no digital e quer escalar com anúncios'
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-6 heading-gradient">
            Para quem é esse Site?
          </h2>
          
          <Card className="border-none shadow-lg">
            <CardContent className="pt-6">
              <ul className="space-y-4 text-left">
                {audiences.map((audience, index) => (
                  <li key={index} className="flex items-start">
                    <div className="mr-3 mt-1 text-rise-orange">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check-circle">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                        <polyline points="22 4 12 14.01 9 11.01"/>
                      </svg>
                    </div>
                    <span className="text-lg text-gray-700">{audience}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TargetAudienceSection;
