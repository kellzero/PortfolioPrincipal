import { Card } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import { Project } from "@/types";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden h-full group">
      <div className="relative">
        <div className="w-full h-48 overflow-hidden">
          <img 
            src={project.imageSrc} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
          <div>
            <h3 className="text-white text-lg font-semibold">{project.title}</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {project.technologies.map((tech, index) => {
                // Assign different colors to different tech categories
                const colors = [
                  "bg-primary/80", "bg-green-500/80", "bg-blue-500/80", 
                  "bg-purple-500/80", "bg-yellow-500/80", "bg-red-500/80", 
                  "bg-pink-500/80"
                ];
                const colorIndex = index % colors.length;
                
                return (
                  <span 
                    key={`${project.id}-${tech}`} 
                    className={`py-1 px-2 ${colors[colorIndex]} text-white text-xs rounded`}
                  >
                    {tech}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
        <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Button size="icon" variant="secondary" className="rounded-full" asChild>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="View GitHub Repository">
                <Github className="h-4 w-4" />
              </a>
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Button size="icon" variant="secondary" className="rounded-full" asChild>
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" aria-label="View Live Demo">
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
      <div className="p-4">
        <p className="text-muted-foreground text-sm">{project.description}</p>
      </div>
    </Card>
  );
}
