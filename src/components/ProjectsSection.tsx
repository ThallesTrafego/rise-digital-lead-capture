
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
      description: "Landing page profissional desenvolvida para arquitetos, com design moderno que destaca projetos e facilita o contato para potenciais clientes.",
      image: "/lovable-uploads/78fca218-adda-45e6-adde-cf275178b074.png",
      hasCarousel: true
    },
    {
      id: 2,
      title: "Página para Psicóloga – conversão direta via WhatsApp",
      description: "Landing page profissional desenvolvida para conversão direta via WhatsApp, com apresentação clara dos serviços e informações de contato.",
      image: "/lovable-uploads/04aa3f48-4aa0-49e8-98e1-29744df1ca22.png",
      hasCarousel: true
    }
  ];

  // Architect project images
  const architectImages = [
    {
      id: 1,
      image: "/lovable-uploads/78fca218-adda-45e6-adde-cf275178b074.png",
      alt: "Header do site da arquiteta mostrando serviços oferecidos"
    },
    {
      id: 2,
      image: "/lovable-uploads/b0c3886a-385b-4dc0-a724-4e75f051b08c.png",
      alt: "Seção de projetos do site da arquiteta"
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

  // Function to determine which images to use based on project id
  const getProjectImages = (projectId) => {
    switch(projectId) {
      case 1:
        return architectImages;
      case 2:
        return psychologistImages;
      default:
        return [];
    }
  };

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
                  {project.hasCarousel ? (
                    <div className="relative">
                      <Carousel className="w-full">
                        <CarouselContent>
                          {getProjectImages(project.id).map((item) => (
                            <CarouselItem key={item.id}>
                              <div className="relative aspect-[16/9]">
                                <img
                                  src={item.image}
                                  alt={item.alt}
                                  className="object-cover w-full h-full"
                                />
                              </div>
                            </CarouselItem>
                          ))}
                        </CarouselContent>
                        <CarouselPrevious className="left-2 h-8 w-8" />
                        <CarouselNext className="right-2 h-8 w-8" />
                      </Carousel>
                    </div>
                  ) : (
                    <div className="relative aspect-[16/9] bg-muted">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  )}
                  <CardContent className="p-6">
                    <h3 className="text-lg font-medium text-rise-blue mb-2">
                      {project.title}
                    </h3>
                    {project.description && (
                      <p className="text-gray-600 text-sm">
                        {project.description}
                      </p>
                    )}
                  </CardContent>
                </Card>
              </div>
            ))}
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
