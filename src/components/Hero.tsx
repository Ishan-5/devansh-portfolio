import { motion } from 'motion/react';
import { Link } from 'react-scroll';
import { ArrowRight, Download } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wider uppercase mb-6">
              Electronics Engineering Student
            </span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              Building <span className="text-gradient">Embedded Intelligence</span> from Silicon to Software.
            </h1>
            <p className="text-lg md:text-xl text-foreground/60 mb-10 max-w-2xl mx-auto leading-relaxed">
              I’m <span className="text-foreground font-medium">Devansh Kumar Pandey</span>, an electronics engineer building intelligent embedded systems integrating firmware, custom 4-layer PCB design, and computer vision.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="projects"
                smooth={true}
                duration={500}
                className="group w-full sm:w-auto px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-xl font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                View Projects
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="/resume.pdf"
                className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl font-semibold transition-all flex items-center justify-center gap-2"
              >
                Download Resume
                <Download size={18} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
