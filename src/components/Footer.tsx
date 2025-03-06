
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary/30 py-12 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-xl font-display font-semibold tracking-tight">
              Developer
            </a>
            <p className="text-sm text-muted-foreground mt-2">
              Crafting digital experiences with modern technologies
            </p>
          </div>
          
          <div className="flex space-x-8 mb-6 md:mb-0">
            <a href="#home" className="text-sm text-foreground/80 hover:text-foreground transition-colors">
              Home
            </a>
            <a href="#about" className="text-sm text-foreground/80 hover:text-foreground transition-colors">
              About
            </a>
            <a href="#projects" className="text-sm text-foreground/80 hover:text-foreground transition-colors">
              Projects
            </a>
            <a href="#contact" className="text-sm text-foreground/80 hover:text-foreground transition-colors">
              Contact
            </a>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-background hover:bg-background/80 transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-background hover:bg-background/80 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="mailto:your.email@example.com" 
              className="p-2 rounded-full bg-background hover:bg-background/80 transition-colors"
              aria-label="Email Contact"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-border/50 mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© {currentYear} Your Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
