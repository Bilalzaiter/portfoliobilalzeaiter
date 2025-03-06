
import React from 'react';
import FadeIn from './transitions/FadeIn';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: 'Learning Platform',
      description: 'Contributed to a web-based learning platform with features including user authentication, course management, and progress tracking.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      image: '',
    },
    {
      title: 'Food Delivery Platform',
      description: 'A JustEat-like platform connecting independent cooks with customers, featuring user authentication, order tracking, and payment processing.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Authentication'],
      image: '',
    },
    {
      title: 'Password Reset Feature',
      description: 'Implemented a secure password reset functionality for a web application, including email notifications and token-based verification.',
      technologies: ['Node.js', 'JWT', 'MongoDB', 'Express'],
      image: '',
    },
  ];
  
  return (
    <section id="projects" className="bg-secondary/30 section-padding">
      <div className="container mx-auto">
        <FadeIn>
          <span className="chip bg-background text-foreground mb-4">My Work</span>
          <h2 className="heading-lg mb-12">Featured Projects</h2>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <FadeIn key={index} delay={index * 100 + 200}>
              <ProjectCard 
                title={project.title} 
                description={project.description}
                technologies={project.technologies}
                image={project.image}
              />
            </FadeIn>
          ))}
        </div>
        
        <FadeIn delay={600} className="mt-12 text-center">
          <p className="text-muted-foreground mb-6">
            These are just a few highlights from my portfolio. I'm constantly working on new projects 
            and expanding my skills.
          </p>
          <a href="#contact" className="button-primary">
            Discuss Your Project
          </a>
        </FadeIn>
      </div>
    </section>
  );
};

export default Projects;
