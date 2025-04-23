import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GitHubRepo } from "@/types";
import { Github, Star, GitFork } from "lucide-react";
import { motion } from "framer-motion";
import { Skeleton } from "@/components/ui/skeleton";

interface GitHubReposProps {
  repos: GitHubRepo[];
  isLoading: boolean;
}

export default function GitHubRepos({ repos, isLoading }: GitHubReposProps) {
  return (
    <div className="mt-16 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h3 className="text-xl md:text-2xl font-bold mb-6 flex items-center">
          <Github className="mr-2 h-6 w-6" /> GitHub Repositories
        </h3>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {isLoading ? (
          Array(4).fill(0).map((_, i) => (
            <Card key={i}>
              <CardContent className="p-4 flex flex-col">
                <div className="flex justify-between items-start">
                  <Skeleton className="h-6 w-2/5" />
                  <div className="flex items-center space-x-2">
                    <Skeleton className="h-4 w-12" />
                    <Skeleton className="h-4 w-12" />
                  </div>
                </div>
                <Skeleton className="h-4 w-full mt-2" />
                <Skeleton className="h-4 w-5/6 mt-1" />
                <div className="mt-auto pt-3 flex items-center space-x-2">
                  <Skeleton className="h-6 w-16 rounded-md" />
                  <Skeleton className="h-4 w-24" />
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          repos.map((repo, index) => (
            <motion.div
              key={repo.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="p-4 flex flex-col h-full">
                  <div className="flex justify-between items-start">
                    <h4 className="font-semibold text-primary hover:underline">
                      <a href={repo.url} target="_blank" rel="noopener noreferrer">{repo.name}</a>
                    </h4>
                    <div className="flex items-center space-x-2">
                      <span className="flex items-center text-sm text-muted-foreground">
                        <Star className="h-3.5 w-3.5 mr-1" /> {repo.stars}
                      </span>
                      <span className="flex items-center text-sm text-muted-foreground">
                        <GitFork className="h-3.5 w-3.5 mr-1" /> {repo.forks}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">{repo.description}</p>
                  <div className="mt-auto pt-3 flex flex-wrap items-center gap-2">
                    {repo.language && (
                      <span className="py-1 px-2 bg-primary-100 dark:bg-primary-900/40 text-primary-700 dark:text-primary-300 text-xs rounded">
                        {repo.language}
                      </span>
                    )}
                    {repo.languages && repo.languages.map((lang) => (
                      <span 
                        key={lang} 
                        className="py-1 px-2 bg-primary-100 dark:bg-primary-900/40 text-primary-700 dark:text-primary-300 text-xs rounded"
                      >
                        {lang}
                      </span>
                    ))}
                    <span className="text-xs text-muted-foreground">Updated {repo.updatedAt}</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))
        )}
      </div>
      
      <div className="mt-6 text-center">
        <Button variant="outline" asChild>
          <a 
            href="https://github.com/username" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center"
          >
            <Github className="mr-2 h-4 w-4" /> View more on GitHub
          </a>
        </Button>
      </div>
    </div>
  );
}
