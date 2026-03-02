import { motion } from 'motion/react';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    role: 'Joint Secretary – Technical Hardware',
    organization: 'AutoRob (HBTU)',
    period: 'Present',
    description: 'Leading hardware development initiatives and organizing technical workshops for the robotics club.'
  },
  {
    role: 'Associate Head',
    organization: 'Technical Sub Council (HBTU)',
    period: 'Present',
    description: 'Coordinating technical events and managing sub-council activities within the university.'
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Leadership & Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 border-l border-white/10"
            >
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background" />
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/30 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                    <p className="text-primary font-medium">{exp.organization}</p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-white/5 text-xs font-semibold text-foreground/40 border border-white/5 w-fit">
                    {exp.period}
                  </span>
                </div>
                <p className="text-foreground/60 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
