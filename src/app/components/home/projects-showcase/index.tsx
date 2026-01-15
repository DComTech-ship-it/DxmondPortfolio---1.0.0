"use client";

import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";

type Project = {
  id: number;
  title: string;
  description: string;
  images: {
    id: number;
    src: string;
    alt: string;
  }[];
  messages: {
    id: number;
    sender: 'me' | 'client';
    text: string;
    time: string;
  }[];
  links: {
    type: 'demo' | 'github' | 'other';
    label: string;
    url: string;
  }[];
  tags: string[];
};

const ProjectsShowcase = () => {
  // Sample projects data - replace with your actual projects
  const projects: Project[] = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A full-featured online store with product catalog and cart functionality",
      images: [
        { id: 1, src: "/images/projects/ecommerce-1.jpg", alt: "E-commerce homepage" },
        { id: 2, src: "/images/projects/ecommerce-2.jpg", alt: "Product page" },
        { id: 3, src: "/images/projects/ecommerce-3.jpg", alt: "Shopping cart" },
      ],
      messages: [
        {
          id: 1,
          sender: 'client',
          text: 'I love the design! Can we make the product images larger?',
          time: '10:30 AM'
        },
        {
          id: 2,
          sender: 'me',
          text: 'Absolutely! I can increase the image size. What do you think about adding a zoom feature as well?',
          time: '10:35 AM'
        },
        {
          id: 3,
          sender: 'client',
          text: 'That would be perfect!',
          time: '10:40 AM'
        }
      ],
      links: [
        { type: 'demo', label: 'Live Demo', url: '#' },
        { type: 'github', label: 'View Code', url: '#' },
      ],
      tags: ['React', 'Next.js', 'Node.js', 'MongoDB']
    },
    // Add more projects as needed
  ];

  return (
    <section className="py-12 md:py-16">
      <div className="container">
        <SectionHeading
          title="Project Showcase"
          description="Explore my recent work and client interactions"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              images={project.images}
              messages={project.messages}
              links={project.links}
              tags={project.tags}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;
