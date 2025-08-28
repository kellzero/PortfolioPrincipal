import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Database, Server, Code, Terminal } from "lucide-react";
import { motion } from "framer-motion";

export default function Skills() {
  const skillCategories = [
    {
      title: "Backend Development",
      icon: <Server className="h-5 w-5 mr-2 text-primary" />,
      skills: [
        {
          name: "Python",
          color:
            "bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-200",
        },
        {
          name: "Django",
          color:
            "bg-green-100 dark:bg-green-900/40 text-green-800 dark:text-green-200",
        },
        {
          name: "Flask",
          color: "bg-red-100 dark:bg-red-900/40 text-red-800 dark:text-red-200",
        },
        {
          name: "FastAPI",
          color:
            "bg-purple-100 dark:bg-purple-900/40 text-purple-800 dark:text-purple-200",
        },

        {
          name: "RESTful APIs",
          color:
            "bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-200",
        },
      ],
    },
    {
      title: "Frontend Development",
      icon: <Code className="h-5 w-5 mr-2 text-primary" />,
      skills: [
        {
          name: "JavaScript",
          color:
            "bg-yellow-100 dark:bg-yellow-900/40 text-yellow-800 dark:text-yellow-200",
        },
        {
          name: "React",
          color:
            "bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-200",
        },
        {
          name: "Vue.js",
          color:
            "bg-green-100 dark:bg-green-900/40 text-green-800 dark:text-green-200",
        },
        {
          name: "TypeScript",
          color:
            "bg-purple-100 dark:bg-purple-900/40 text-purple-800 dark:text-purple-200",
        },

        {
          name: "HTML5/CSS3",
          color:
            "bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-200",
        },
        {
          name: "Responsive Design",
          color: "bg-red-100 dark:bg-red-900/40 text-red-800 dark:text-red-200",
        },
      ],
    },
    {
      title: "Database & Storage",
      icon: <Database className="h-5 w-5 mr-2 text-primary" />,
      skills: [
        {
          name: "PostgreSQL",
          color:
            "bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-200",
        },
        {
          name: "MySQL",
          color:
            "bg-green-100 dark:bg-green-900/40 text-green-800 dark:text-green-200",
        },
      ],
    },
    {
      title: "DevOps & Tools",
      icon: <Terminal className="h-5 w-5 mr-2 text-primary" />,
      skills: [
        {
          name: "Git",
          color:
            "bg-purple-100 dark:bg-purple-900/40 text-purple-800 dark:text-purple-200",
        },
        {
          name: "GitHub Actions",
          color:
            "bg-pink-100 dark:bg-pink-900/40 text-pink-800 dark:text-pink-200",
        },
        {
          name: "Nginx",
          color:
            "bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-200",
        },
        {
          name: "Linux",
          color: "bg-red-100 dark:bg-red-900/40 text-red-800 dark:text-red-200",
        },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="container mx-auto px-4 md:px-6 py-16 bg-muted/30"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-center">
          Skills & Tecnologias
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto mt-4 mb-8 rounded-full"></div>
      </motion.div>

      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    {category.icon} {category.title}
                  </h3>
                  <ScrollArea className="h-full w-full">
                    <div className="flex flex-wrap gap-3">
                      {category.skills.map((skill) => (
                        <span
                          key={skill.name}
                          className={`py-1.5 px-3 rounded-full text-sm transition-transform hover:-translate-y-1 ${skill.color}`}
                        >
                          {skill.name}
                        </span>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
