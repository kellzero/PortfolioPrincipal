import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="container mx-auto px-4 md:px-6 py-16">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-center">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-4 mb-8 rounded-full"></div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card>
            <CardContent className="p-6 md:p-8">
              <p className="text-muted-foreground leading-relaxed">
                I'm a passionate Full Stack Python Developer with expertise in building scalable web applications. My journey in software development began with a fascination for creating solutions that solve real-world problems.
              </p>
              
              <p className="text-muted-foreground leading-relaxed mt-4">
                With a strong foundation in Python and modern JavaScript frameworks, I've developed applications that prioritize both functionality and user experience. I believe in writing clean, maintainable code and keeping up with industry best practices.
              </p>
              
              <p className="text-muted-foreground leading-relaxed mt-4">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, and sharing knowledge with the developer community.
              </p>
              
              <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="flex flex-col items-center p-4 bg-muted rounded-lg">
                  <span className="text-2xl font-bold text-primary">4+</span>
                  <span className="text-sm text-muted-foreground text-center">Years Experience</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-muted rounded-lg">
                  <span className="text-2xl font-bold text-primary">25+</span>
                  <span className="text-sm text-muted-foreground text-center">Projects Completed</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-muted rounded-lg">
                  <span className="text-2xl font-bold text-primary">15+</span>
                  <span className="text-sm text-muted-foreground text-center">Happy Clients</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-muted rounded-lg">
                  <span className="text-2xl font-bold text-primary">100+</span>
                  <span className="text-sm text-muted-foreground text-center">GitHub Contributions</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
