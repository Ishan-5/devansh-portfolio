import { motion } from 'motion/react';
import { GraduationCap } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-8 rounded-2xl bg-white/5 border border-white/10 flex flex-col md:flex-row gap-8 items-start"
          >
            <div className="p-4 rounded-xl bg-primary/10 text-primary">
              <GraduationCap size={32} />
            </div>
            <div>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-bold">Harcourt Butler Technical University</h3>
                  <p className="text-lg text-primary font-medium">B.Tech Electronics Engineering</p>
                </div>
                <span className="px-4 py-1 rounded-full bg-primary/20 text-primary text-sm font-bold border border-primary/20">
                  2024 — 2028
                </span>
              </div>
              <div className="space-y-4 text-foreground/60">
                <p>Focused on core electronics, embedded systems, and intelligent hardware design.</p>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-foreground">CGPA:</span>
                  <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-sm font-bold">8.545 (First Year)</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
