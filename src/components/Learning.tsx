import { motion } from 'motion/react';

const learningItems = [
  'Control Systems Simulation',
  'Embedded AI Optimization',
  'Advanced PCB Layout Techniques'
];

export default function Learning() {
  return (
    <section id="learning" className="py-12 bg-secondary/10">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row items-center justify-between gap-8"
          >
            <h2 className="text-xl font-bold uppercase tracking-widest text-foreground/40 whitespace-nowrap">
              Currently Learning
            </h2>
            
            <div className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-8">
              {learningItems.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span className="text-sm font-medium text-foreground/60">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
