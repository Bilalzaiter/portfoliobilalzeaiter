
import React from 'react';
import FadeIn from './transitions/FadeIn';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      id="home"
      className="min-h-screen relative flex flex-col justify-center items-center overflow-hidden pt-20"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-background/5 backdrop-blur-sm" />
      </div>
      
      <div className="container mx-auto px-6 py-16 flex flex-col items-center text-center">
        <FadeIn delay={100} className="mb-6">
          <span className="chip bg-secondary text-secondary-foreground inline-block mb-4">
            Full-Stack Web Developer
          </span>
        </FadeIn>
        
        <FadeIn delay={200} className="mb-6">
          <h1 className="heading-xl mb-4 max-w-4xl mx-auto text-balance">
            Crafting Digital Experiences with Code & Care
          </h1>
        </FadeIn>
        
        <FadeIn delay={300} className="mb-12">
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto text-balance">
            I'm a dedicated full-stack developer passionate about creating elegant, 
            user-focused web applications with modern technologies.
          </p>
        </FadeIn>
        
        <FadeIn delay={400}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#projects" className="button-primary">
              View My Work
            </a>
            <a href="#contact" className="button-secondary">
              Get In Touch
            </a>
          </div>
        </FadeIn>
      </div>
      
      <FadeIn delay={600} className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll to about section">
          <ArrowDown className="h-6 w-6 text-foreground/60" />
        </a>
      </FadeIn>
    </section>
  );
};

export default Hero;
