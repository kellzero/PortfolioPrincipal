import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import ProjectCard from "./ProjectCard";
import GitHubRepos from "./GitHubRepos";
import { Project, GitHubRepo } from "@/types";
import { motion } from "framer-motion";
import { Skeleton } from "@/components/ui/skeleton";

interface ProjectsProps {
  projects: Project[];
  isLoading: boolean;
  githubRepos: GitHubRepo[];
  isLoadingRepos: boolean;
}

export default function Projects({ projects, isLoading, githubRepos, isLoadingRepos }: ProjectsProps) {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);

  // Default projects if none are fetched
  const defaultProjects: Project[] = [
    {
      id: 1,
      title: "Python E-commerce API",
      description: "A fully-featured RESTful API for e-commerce platforms with authentication, product management, and order processing.",
      imageSrc: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      demoUrl: "https://vercel.com/",
      githubUrl: "https://github.com/",
      technologies: ["Python", "Django", "PostgreSQL"],
      categories: ["python", "fullstack"]
    },
    {
      id: 2,
      title: "Real-time Dashboard",
      description: "Interactive dashboard with real-time data visualization for monitoring system performance and user analytics.",
      imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      demoUrl: "https://vercel.com/",
      githubUrl: "https://github.com/",
      technologies: ["React", "Socket.io", "Python"],
      categories: ["react", "fullstack"]
    },
    {
      id: 3,
      title: "AI Content Generator",
      description: "AI-powered application that generates unique content for blogs, social media, and marketing materials.",
      imageSrc: "https://images.unsplash.com/photo-1526498460520-4c246339dccb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      demoUrl: "https://vercel.com/",
      githubUrl: "https://github.com/",
      technologies: ["Python", "Flask", "TensorFlow"],
      categories: ["python", "fullstack"]
    },
    {
      id: 4,
      title: "React Task Manager",
      description: "Elegant task management application with drag-and-drop interface, task prioritization, and deadline tracking.",
      imageSrc: "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      demoUrl: "https://vercel.com/",
      githubUrl: "https://github.com/",
      technologies: ["React", "Redux", "Tailwind CSS"],
      categories: ["react"]
    },
    {
      id: 5,
      title: "Data Analysis Tool",
      description: "Advanced data analysis tool for processing large datasets, generating insightful visualizations, and creating reports.",
      imageSrc: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      demoUrl: "https://vercel.com/",
      githubUrl: "https://github.com/",
      technologies: ["Python", "Pandas", "Matplotlib"],
      categories: ["python"]
    },
    {
      id: 6,
      title: "Social Media Platform",
      description: "Feature-rich social media platform with real-time messaging, content sharing, and user engagement analytics.",
      imageSrc: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      demoUrl: "https://vercel.com/",
      githubUrl: "https://github.com/",
      technologies: ["React", "Python", "Redis"],
      categories: ["fullstack", "react"]
    },
  ];

  const displayProjects = projects.length > 0 ? projects : defaultProjects;

  // Filter projects based on category and search term
  useEffect(() => {
    let results = displayProjects;
    
    if (activeFilter !== "all") {
      results = results.filter(project => 
        project.categories.includes(activeFilter)
      );
    }

    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      results = results.filter(project => 
        project.title.toLowerCase().includes(term) || 
        project.description.toLowerCase().includes(term) ||
        project.technologies.some(tech => tech.toLowerCase().includes(term))
      );
    }

    setFilteredProjects(results);
  }, [displayProjects, activeFilter, searchTerm]);

  // Default GitHub repos if none are fetched
  const defaultGithubRepos: GitHubRepo[] = [
    {
      id: 1,
      name: "Advanced Python Utils",
      description: "A collection of advanced Python utilities for data processing, file operations, and more.",
      url: "https://github.com/username/repo-name",
      stars: 48,
      forks: 15,
      language: "Python",
      updatedAt: "2 weeks ago"
    },
    {
      id: 2,
      name: "React Component Library",
      description: "Reusable and accessible React components with TypeScript support and comprehensive documentation.",
      url: "https://github.com/username/repo-name",
      stars: 76,
      forks: 23,
      language: "TypeScript",
      languages: ["React", "TypeScript"],
      updatedAt: "3 days ago"
    },
    {
      id: 3,
      name: "Django REST Framework Boilerplate",
      description: "Production-ready Django REST API boilerplate with authentication, permissions, and documentation.",
      url: "https://github.com/username/repo-name",
      stars: 112,
      forks: 37,
      language: "Python",
      languages: ["Django", "Python"],
      updatedAt: "1 month ago"
    },
    {
      id: 4,
      name: "Machine Learning Cookbook",
      description: "Practical recipes for common machine learning tasks using Python, TensorFlow, and scikit-learn.",
      url: "https://github.com/username/repo-name",
      stars: 89,
      forks: 18,
      language: "Python",
      languages: ["Python", "ML"],
      updatedAt: "2 months ago"
    }
  ];

  const displayRepos = githubRepos.length > 0 ? githubRepos : defaultGithubRepos;

  return (
    <section id="projects" className="container mx-auto px-4 md:px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-center">Projects</h2>
        <div className="w-20 h-1 bg-primary mx-auto mt-4 mb-8 rounded-full"></div>
      </motion.div>
      
      {/* Project Filters */}
      <div className="max-w-3xl mx-auto mb-10">
        <div className="flex justify-center flex-wrap gap-2 mb-6">
          <Button 
            onClick={() => setActiveFilter("all")}
            variant={activeFilter === "all" ? "default" : "outline"}
          >
            All
          </Button>
          <Button 
            onClick={() => setActiveFilter("python")}
            variant={activeFilter === "python" ? "default" : "outline"}
          >
            Python
          </Button>
          <Button 
            onClick={() => setActiveFilter("react")}
            variant={activeFilter === "react" ? "default" : "outline"}
          >
            React
          </Button>
          <Button 
            onClick={() => setActiveFilter("fullstack")}
            variant={activeFilter === "fullstack" ? "default" : "outline"}
          >
            Full Stack
          </Button>
        </div>
        <div className="flex justify-center">
          <div className="relative w-full max-w-xl">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input 
              type="text" 
              placeholder="Search projects..." 
              className="pl-10" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>
      
      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {isLoading ? (
          Array(6).fill(0).map((_, i) => (
            <div key={i} className="rounded-xl overflow-hidden">
              <Skeleton className="h-48 w-full" />
              <div className="p-4 space-y-3">
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
              </div>
            </div>
          ))
        ) : (
          filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))
        )}
      </div>

      {/* GitHub Repositories Section */}
      <GitHubRepos repos={displayRepos} isLoading={isLoadingRepos} />
    </section>
  );
}
