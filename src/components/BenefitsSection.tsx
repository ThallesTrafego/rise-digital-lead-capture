
import React from 'react';

interface BenefitCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ title, description, icon, delay }) => {
  return (
    <div 
      className="card-benefit animate-fade-in-up" 
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="flex items-center mb-4">
        <div className="text-rise-orange mr-3">
          {icon}
        </div>
        <h3 className="font-montserrat font-semibold text-xl text-rise-blue">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const BenefitsSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl heading-gradient mb-4 animate-fade-in-up">
            Benefícios de uma Landing Page Profissional
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Invista em uma página otimizada especificamente para converter visitantes em leads qualificados
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <BenefitCard 
            title="Foco 100% na conversão"
            description="Layout e conteúdo estrategicamente desenvolvidos para maximizar as chances de conversão dos seus visitantes."
            delay={0.2}
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>}
          />
          
          <BenefitCard 
            title="Design atrativo e envolvente"
            description="Design pensado para atrair e reter a atenção dos visitantes, criando uma experiência que incentiva a ação."
            delay={0.3}
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>}
          />
          
          <BenefitCard 
            title="Carregamento rápido e responsivo"
            description="Páginas otimizadas para carregarem rapidamente e funcionarem perfeitamente em qualquer dispositivo e tamanho de tela."
            delay={0.4}
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>}
          />
          
          <BenefitCard 
            title="Estrutura ideal para anúncios"
            description="Totalmente compatível com Google Ads e Meta Ads, maximizando o retorno dos seus investimentos em publicidade."
            delay={0.5}
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
            </svg>}
          />
          
          <BenefitCard 
            title="SEO básico incluso"
            description="Otimização básica para mecanismos de busca, ajudando sua página a ser encontrada organicamente por potenciais clientes."
            delay={0.6}
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>}
          />
          
          <BenefitCard 
            title="Suporte técnico especializado"
            description="Equipe de suporte pronta para ajudar com quaisquer dúvidas ou ajustes necessários após a entrega do projeto."
            delay={0.7}
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>}
          />
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
