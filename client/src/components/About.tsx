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
          <h2 className="text-2xl md:text-3xl font-bold text-center">
            Sobre mim
          </h2>
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
                Desenvolvedor em formação, atualmente cursando um programa
                profissionalizante de Full-Stack em Python. Com experiência em
                front-end e projetos em andamento no GitHub, busco aprimorar
                minhas habilidades constantemente e expandir meu conhecimento em
                novas tecnologias. Desenvolvi, acompanhei e também participei de
                diversos projetos ao longo do curso, com foco no desenvolvimento
                de páginas web e pequenas aplicações, como: Listas de tarefas
                Sorteadores Contadores regressivos em tempo real webpages de
                venda de produtos e serviços
              </p>

              <p className="text-muted-foreground leading-relaxed mt-4">
                Além disso, estudei e continuo estudando inglês em paralelo,
                estando atualmente no nível avançado em conversação e
                compreensão auditiva. Sou uma pessoa paciente, que gosta de
                aprofundar na resolução de problemas e sempre busca otimizar o
                tempo da melhor forma possível.
              </p>

              <p className="text-muted-foreground leading-relaxed mt-4">
                Gosto da área porque sempre tive proximidade com hardware e,
                agora, estou desenvolvendo interesse também na parte de
                software.
              </p>

              <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="flex flex-col items-center p-4 bg-muted rounded-lg">
                  <span className="text-2xl font-bold text-primary">
                    0 (ainda)
                  </span>
                  <span className="text-sm text-muted-foreground text-center">
                    Anos de experiencia
                  </span>
                </div>
                <div className="flex flex-col items-center p-4 bg-muted rounded-lg">
                  <span className="text-2xl font-bold text-primary">4</span>
                  <span className="text-sm text-muted-foreground text-center">
                    Projetos concluidos
                  </span>
                </div>
                <div className="flex flex-col items-center p-4 bg-muted rounded-lg">
                  <span className="text-2xl font-bold text-primary">
                    0 (ainda)
                  </span>
                  <span className="text-sm text-muted-foreground text-center">
                    Clientes satisfeitos
                  </span>
                </div>
                <div className="flex flex-col items-center p-4 bg-muted rounded-lg">
                  <span className="text-2xl font-bold text-primary">56</span>
                  <span className="text-sm text-muted-foreground text-center">
                    Contribuições pro GitHub
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
