import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { Project, GitHubRepo, UserInfo } from "@/types";

export default function Home() {
  const [userInfo, setUserInfo] = useState<UserInfo>({
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
  });

  // Fetch GitHub repos
  const { data: githubRepos = [], isLoading: isLoadingRepos } = useQuery<GitHubRepo[]>({
    queryKey: ['/api/github-repos'],
  });

  // Fetch projects
  const { data: projects = [], isLoading: isLoadingProjects } = useQuery<Project[]>({
    queryKey: ['/api/projects'],
  });

  // Fetch user info from API
  const { data: apiUserInfo } = useQuery<UserInfo>({
    queryKey: ['/api/user-info'],
    enabled: false, // Disabled initially as we're using default data
  });

  useEffect(() => {
    if (apiUserInfo) {
      setUserInfo(apiUserInfo);
    }
  }, [apiUserInfo]);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header userInfo={userInfo} />

      <main className="flex-grow pt-20">
        <Hero userInfo={userInfo} />
        <About />
        <Skills />
        <Projects 
          projects={projects} 
          isLoading={isLoadingProjects} 
          githubRepos={githubRepos}
          isLoadingRepos={isLoadingRepos}
        />
        <Contact userInfo={userInfo} />
      </main>

      <Footer userInfo={userInfo} />
    </div>
  );
}
