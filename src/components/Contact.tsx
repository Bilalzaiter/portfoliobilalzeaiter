
import React from 'react';
import FadeIn from './transitions/FadeIn';
import { Mail, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="bg-background section-padding">
      <div className="container mx-auto">
        <FadeIn>
          <span className="chip bg-secondary text-secondary-foreground mb-4">Contact</span>
          <h2 className="heading-lg mb-4">Let's Work Together</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
            I'm currently open to new opportunities and collaborations. Whether you have a project in mind 
            or just want to connect, I'd love to hear from you.
          </p>
        </FadeIn>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <FadeIn direction="right" delay={100}>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Your email"
                    className="w-full px-4 py-3 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  placeholder="Subject"
                  className="w-full px-4 py-3 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Your message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                  required
                />
              </div>
              
              <button 
                type="submit" 
                className="button-primary w-full flex items-center justify-center"
              >
                <span>Send Message</span>
                <Send className="ml-2 h-4 w-4" />
              </button>
            </form>
          </FadeIn>
          
          <FadeIn direction="left" delay={200} className="lg:pl-12">
            <div className="space-y-8">
              <div>
                <h3 className="heading-md mb-4">Get in Touch</h3>
                <p className="text-muted-foreground mb-6">
                  Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
                </p>
                
                <div className="flex items-center gap-3 mb-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <a 
                    href="mailto:your.email@example.com" 
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    your.email@example.com
                  </a>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Let's Connect</h3>
                <p className="text-muted-foreground mb-6">
                  Whether you need a website, web application, or consultation, I'm here to help bring your ideas to life.
                </p>
              </div>
              
              <div className="p-6 rounded-lg bg-secondary/30 border border-border/50">
                <h4 className="text-lg font-semibold mb-3">Response Time</h4>
                <p className="text-muted-foreground">
                  I typically respond to inquiries within 24-48 hours. I look forward to discussing how we can work together!
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Contact;
