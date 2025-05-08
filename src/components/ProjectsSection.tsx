
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "Página para Arquiteta – estrutura pensada para conversão",
      image: "/placeholder.svg",
    },
    {
      id: 2,
      title: "Página para Psicóloga – conversão direta via WhatsApp",
      image: "/placeholder.svg",
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-12 text-center heading-gradient">
            Alguns projetos que já entregamos
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="flex flex-col">
                <Card className="h-full border-none shadow-lg overflow-hidden">
                  <div className="relative aspect-[16/9] bg-muted">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-medium text-rise-blue">
                      {project.title}
                    </h3>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-500 italic">
              *Imagens reais dos projetos serão adicionadas posteriormente
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
