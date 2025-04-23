import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter } from "lucide-react";
import { motion } from "framer-motion";
import { UserInfo } from "@/types";

interface HeroProps {
  userInfo: UserInfo;
}

export default function Hero({ userInfo }: HeroProps) {
  return (
    <section className="container mx-auto px-4 md:px-6 py-16 flex flex-col-reverse md:flex-row items-center">
      <motion.div 
        className="w-full md:w-1/2 mt-8 md:mt-0"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
          Full Stack Python Developer
        </h1>
        <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-lg">
          Building robust web applications with Python and modern frontend technologies. Turning complex problems into elegant solutions.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Button size="lg" asChild>
            <a href="#contact">Get in touch</a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="#projects">View projects</a>
          </Button>
        </div>
        <div className="mt-8 flex items-center space-x-4">
          <Button variant="ghost" size="icon" asChild>
            <a href={userInfo.socialLinks.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href={userInfo.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href={userInfo.socialLinks.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <Twitter className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </motion.div>
      <motion.div 
        className="w-full md:w-1/2 flex justify-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative w-64 h-64 md:w-72 md:h-72 lg:w-96 lg:h-96 bg-gradient-to-br from-primary to-purple-600 rounded-full flex items-center justify-center">
          <div className="w-60 h-60 md:w-68 md:h-68 lg:w-92 lg:h-92 rounded-full overflow-hidden border-4 border-background">
            <svg className="w-full h-full text-muted" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
