
import React from 'react';
import FadeIn from './transitions/FadeIn';
import SkillBadge from './SkillBadge';

const About = () => {
  const frontendSkills = [
    'HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Tailwind CSS', 'Bootstrap'
  ];
  
  const backendSkills = [
    'Node.js', 'Express', 'MongoDB', 'REST API', 'Authentication'
  ];
  
  const otherSkills = [
    'Git', 'GitHub', 'Responsive Design', 'Problem Solving'
  ];
  
  return (
    <section id="about" className="bg-background section-padding">
      <div className="container mx-auto">
        <FadeIn>
          <span className="chip bg-secondary text-secondary-foreground mb-4">About Me</span>
          <h2 className="heading-lg mb-12">My Journey & Expertise</h2>
        </FadeIn>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeIn direction="right" delay={100}>
            <div className="rounded-lg overflow-hidden bg-muted aspect-square lg:aspect-auto lg:h-[600px] relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-muted-foreground">Profile Image</span>
              </div>
            </div>
          </FadeIn>
          
          <div className="space-y-8">
            <FadeIn direction="left" delay={200}>
              <h3 className="heading-md mb-4">Intermediate to Advanced Full-Stack Developer</h3>
              <p className="text-muted-foreground mb-4">
                I'm a passionate full-stack developer with a focus on creating elegant, functional web applications. 
                With experience in both frontend and backend technologies, I bring a holistic approach to solving 
                digital challenges.
              </p>
              <p className="text-muted-foreground mb-4">
                After completing a comprehensive 9-month full-stack course, I've worked on various projects 
                that have honed my skills in React, Node.js, and MongoDB. I'm particularly interested in 
                creating seamless user experiences that blend beautiful design with robust functionality.
              </p>
              <p className="text-muted-foreground">
                Currently, I'm developing a platform that connects independent cooks with customers, 
                similar to JustEat, which showcases my ability to design complete systems with complex 
                features like user authentication, payment processing, and real-time updates.
              </p>
            </FadeIn>
            
            <FadeIn direction="left" delay={300}>
              <h4 className="text-lg font-semibold mb-3">Frontend Technologies</h4>
              <div className="flex flex-wrap gap-2 mb-6">
                {frontendSkills.map((skill) => (
                  <SkillBadge key={skill} name={skill} />
                ))}
              </div>
              
              <h4 className="text-lg font-semibold mb-3">Backend Technologies</h4>
              <div className="flex flex-wrap gap-2 mb-6">
                {backendSkills.map((skill) => (
                  <SkillBadge key={skill} name={skill} />
                ))}
              </div>
              
              <h4 className="text-lg font-semibold mb-3">Other Skills</h4>
              <div className="flex flex-wrap gap-2">
                {otherSkills.map((skill) => (
                  <SkillBadge key={skill} name={skill} />
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
