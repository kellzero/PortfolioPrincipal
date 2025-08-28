export interface UserInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  location: string;
  socialLinks: {
    github: string;
    linkedin: string;
  };
}

export interface Project {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
  githubUrl: string;
  demoUrl: string;
  technologies: string[];
  categories: string[];
}

export interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  url: string;
  stars: number;
  forks: number;
  language: string;
  languages?: string[];
  updatedAt: string;
}

export interface Skill {
  name: string;
  proficiency: number;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
