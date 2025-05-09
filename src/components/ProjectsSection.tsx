
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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

  // Psychologist project images
  const psychologistImages = [
    {
      id: 1,
      image: "/lovable-uploads/c1b3dd0c-460d-4bc7-b435-79626ccb00f8.png",
      alt: "Seção de contato da psicóloga com horários de atendimento"
    },
    {
      id: 2,
      image: "/lovable-uploads/f5436ef9-1770-4253-bfb9-34aa0e542d00.png",
      alt: "Seção explicando para quem é o trabalho da psicóloga"
    },
    {
      id: 3,
      image: "/lovable-uploads/783f40da-db79-48b7-9067-cc3aacfea0d2.png",
      alt: "Seção sobre a psicóloga Natália Michelena"
    },
    {
      id: 4,
      image: "/lovable-uploads/04aa3f48-4aa0-49e8-98e1-29744df1ca22.png",
      alt: "Header do site da psicóloga Natália Michelena"
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
          
          {/* Psychologist Project Carousel */}
          <div className="mt-16">
            <h3 className="text-2xl md:text-3xl font-montserrat font-bold mb-8 text-center text-rise-blue">
              Site para Psicóloga - Natália Michelena
            </h3>
            <p className="text-gray-600 text-center mb-8">
              Landing page profissional desenvolvida para conversão direta via WhatsApp, 
              com apresentação clara dos serviços e informações de contato.
            </p>
            
            <div className="relative px-12 mb-12">
              <Carousel className="w-full">
                <CarouselContent>
                  {psychologistImages.map((item) => (
                    <CarouselItem key={item.id} className="md:basis-2/3 lg:basis-1/2">
                      <div className="p-1">
                        <Card className="border-none shadow-md overflow-hidden">
                          <div className="relative aspect-[4/3]">
                            <img
                              src={item.image}
                              alt={item.alt}
                              className="object-cover w-full h-full"
                            />
                          </div>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="md:-left-4" />
                <CarouselNext className="md:-right-4" />
              </Carousel>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-500 italic">
              *Outros projetos reais serão adicionados posteriormente
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
