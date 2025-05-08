
import React, { useState } from 'react';
import { toast } from '@/components/ui/use-toast';

const ContactSection: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ id, ...props }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    // Simulating form submission
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <section id={id} className="py-20 bg-white" {...props}>
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl heading-gradient mb-4 animate-fade-in-up">
              Entre em contato
            </h2>
            <p className="text-gray-600 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Preencha o formulário abaixo e nossa equipe entrará em contato para discutir seu projeto
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-xl p-8 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <form onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="mb-6">
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">
                    Nome completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rise-orange/50"
                    placeholder="Seu nome"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rise-orange/50"
                    placeholder="seu@email.com"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-700">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rise-orange/50"
                    placeholder="(00) 00000-0000"
                  />
                </div>
                <div className="mb-6 md:col-span-2">
                  <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700">
                    Como podemos ajudar?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rise-orange/50"
                    placeholder="Descreva brevemente seu projeto ou necessidade"
                    required
                  />
                </div>
              </div>
              
              <div className="text-center">
                <button type="submit" className="btn-primary">
                  Solicitar Orçamento
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
