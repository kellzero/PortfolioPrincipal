import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { UserInfo } from "@/types";

const contactFormSchema = z.object({
  name: z.string().min(2, "Nome precisa ter pelo menos 2 characteres"),
  email: z.string().email("Por favor entre com um email valido"),
  subject: z.string().min(5, " O assunto precisa ter pelo menos 5 caracteres"),
  message: z
    .string()
    .min(10, "A mensagem precisa ter pelo menos 10 caracteres"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

interface ContactProps {
  userInfo: UserInfo;
}

export default function Contact({ userInfo }: ContactProps) {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const mutation = useMutation({
    mutationFn: (data: ContactFormValues) =>
      apiRequest("POST", "/api/contact", data),
    onSuccess: () => {
      toast({
        title: "Mensagem enviada!",
        description:
          "Obrigado pela sua mensagem. entrarei em contato de volta em breve!.",
      });
      form.reset();
      setIsSubmitted(true);
    },
    onError: (error) => {
      toast({
        title: "falha ao enviar a mensagem",
        description: error.message || "Tente novamente mais tarde.",
        variant: "destructive",
      });
    },
  });

  function onSubmit(data: ContactFormValues) {
    // For demonstration, just show a success message without an actual API call
    toast({
      title: "Mensagem enviada!",
      description:
        "Obrigado pela sua mensagem. entrarei em contato de volta em breve!.",
    });
    form.reset();
    setIsSubmitted(true);

    // In a real implementation, uncomment the below to use the API
    // mutation.mutate(data);
  }

  return (
    <section
      id="contact"
      className="container mx-auto px-4 md:px-6 py-16 bg-muted/30"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-center">
          Entre em contato comigo
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto mt-4 mb-8 rounded-full"></div>
      </motion.div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-6">
                Informações de contato
              </h3>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 p-2 bg-primary/10 rounded-md text-primary">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-medium text-muted-foreground">
                      Email
                    </h4>
                    <a
                      href={`mailto:${userInfo.email}`}
                      className="text-primary hover:underline"
                    >
                      {userInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 p-2 bg-primary/10 rounded-md text-primary">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-medium text-muted-foreground">
                      Telefone
                    </h4>
                    <a
                      href={`tel:${userInfo.phone.replace(/\s+/g, "")}`}
                      className="text-primary hover:underline"
                    >
                      {userInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 p-2 bg-primary/10 rounded-md text-primary">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-medium text-muted-foreground">
                      Localização
                    </h4>
                    <p className="text-muted-foreground">{userInfo.location}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Socials</h3>
                <div className="flex space-x-4">
                  <Button size="icon" variant="outline" asChild>
                    <a
                      href={userInfo.socialLinks.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button size="icon" variant="outline" asChild>
                    <a
                      href={userInfo.socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-6">
                Me envie uma mensagem
              </h3>

              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="mx-auto w-12 h-12 bg-green-100 dark:bg-green-800 rounded-full flex items-center justify-center mb-4">
                    <svg
                      className="w-6 h-6 text-green-600 dark:text-green-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                  <h4 className="text-lg font-medium mb-2">Obrigado!</h4>
                  <p className="text-muted-foreground">
                    Sua mensagem foi enviada com sucesso, entrarei em contato de
                    volta em breve!.
                  </p>
                  <Button
                    className="mt-6"
                    onClick={() => setIsSubmitted(false)}
                  >
                    Enviar outra mensagem
                  </Button>
                </div>
              ) : (
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-4"
                  >
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Seu nome</FormLabel>
                          <FormControl>
                            <Input placeholder="Ex: pedro paulo" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Seu Email</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Ex: pedro@example.com"
                              type="email"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Assunto</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Ex: Oportunidade de serviço"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Mensagem</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Ex: Eu gostaria de discutir um projeto"
                              rows={4}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      className="w-full"
                      disabled={mutation.isPending}
                    >
                      {mutation.isPending ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </Form>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
