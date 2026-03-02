import { motion } from 'motion/react';
import { Mail, Github, Linkedin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h3 className="text-2xl font-bold mb-6">Let's discuss your next project</h3>
            <p className="text-foreground/60 mb-12 leading-relaxed max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out through any of the platforms below.
            </p>

            <div className="grid sm:grid-cols-3 gap-6">
              <a
                href="mailto:devansh.7711@email.com"
                className="flex flex-col items-center gap-4 p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all group"
              >
                <div className="p-4 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <Mail size={24} />
                </div>
                <div className="text-center">
                  <p className="text-[10px] text-foreground/40 uppercase font-bold tracking-widest mb-1">Email</p>
                  <p className="font-medium text-sm">devansh.7711@email.com</p>
                </div>
              </a>

              <a
                href="https://github.com/Ishan-5"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-4 p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all group"
              >
                <div className="p-4 rounded-xl bg-white/5 text-foreground/60 group-hover:bg-foreground group-hover:text-background transition-colors">
                  <Github size={24} />
                </div>
                <div className="text-center">
                  <p className="text-[10px] text-foreground/40 uppercase font-bold tracking-widest mb-1">GitHub</p>
                  <p className="font-medium text-sm">github.com/Ishan-5</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/devansh584"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-4 p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all group"
              >
                <div className="p-4 rounded-xl bg-blue-500/10 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                  <Linkedin size={24} />
                </div>
                <div className="text-center">
                  <p className="text-[10px] text-foreground/40 uppercase font-bold tracking-widest mb-1">LinkedIn</p>
                  <p className="font-medium text-sm">www.linkedin.com/in/devansh584</p>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
