import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import axios from "axios";

export async function registerRoutes(app: Express): Promise<Server> {
  // API endpoint to get user info
  app.get("/api/user-info", (req, res) => {
    const userInfo = {
      firstName: "John",
      lastName: "Doe",
      email: "contact@example.com",
      phone: "+1 (234) 567-890",
      location: "San Francisco, CA, USA",
      socialLinks: {
        github: "https://github.com/",
        linkedin: "https://linkedin.com/",
        twitter: "https://twitter.com/",
        dev: "https://dev.to/",
      },
    };
    
    res.json(userInfo);
  });

  // API endpoint to get projects
  app.get("/api/projects", (req, res) => {
    const projects = [
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
    
    res.json(projects);
  });

  // API endpoint to get GitHub repositories
  // This would normally use the GitHub API with authentication
  // For demonstration purposes, we're returning sample data
  app.get("/api/github-repos", async (req, res) => {
    try {
      // If we had a GitHub token, we could use it like this:
      // const response = await axios.get('https://api.github.com/user/repos', {
      //   headers: {
      //     Authorization: `token ${process.env.GITHUB_TOKEN}`
      //   },
      //   params: {
      //     sort: 'updated',
      //     per_page: 4
      //   }
      // });
      
      // Sample GitHub repos
      const repos = [
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
      
      res.json(repos);
    } catch (error) {
      console.error("Error fetching GitHub repos:", error);
      res.status(500).json({ message: "Failed to fetch GitHub repositories" });
    }
  });

  // Handle contact form submissions
  app.post("/api/contact", (req, res) => {
    try {
      const { name, email, subject, message } = req.body;
      
      // Here you would normally handle the email sending
      // For example, using nodemailer or an email API
      
      // For this demo, we'll just log the data and return success
      console.log("Contact form submission:", { name, email, subject, message });
      
      res.status(200).json({ 
        success: true, 
        message: "Message received. Thank you for reaching out!" 
      });
    } catch (error) {
      console.error("Error processing contact form submission:", error);
      res.status(500).json({ 
        success: false, 
        message: "Failed to process your message. Please try again later." 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
