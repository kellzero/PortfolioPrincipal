import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="md:hidden bg-background border-b border-border shadow-md"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
            <a 
              href="#about" 
              className="block py-2 text-muted-foreground hover:text-primary"
              onClick={onClose}
            >
              About
            </a>
            <a 
              href="#skills" 
              className="block py-2 text-muted-foreground hover:text-primary"
              onClick={onClose}
            >
              Skills
            </a>
            <a 
              href="#projects" 
              className="block py-2 text-muted-foreground hover:text-primary"
              onClick={onClose}
            >
              Projects
            </a>
            <a 
              href="#contact" 
              className="block py-2 text-muted-foreground hover:text-primary"
              onClick={onClose}
            >
              Contact
            </a>
            <Button variant="link" asChild className="justify-start px-0">
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
