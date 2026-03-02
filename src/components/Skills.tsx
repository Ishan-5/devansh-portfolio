import { motion } from 'motion/react';

const skillGroups = [
  {
    title: 'Embedded Systems',
    skills: ['ESP32', 'Microcontrollers', 'UART / Communication', 'Firmware Development']
  },
  {
    title: 'PCB & Hardware',
    skills: ['KiCad', '4-Layer Routing', 'Soldering', 'Circuit Design', 'Power Electronics']
  },
  {
    title: 'Programming',
    skills: ['C', 'C++', 'Python']
  },
  {
    title: 'AI & Vision',
    skills: ['OpenCV', 'MediaPipe', 'Basic Machine Learning']
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={groupIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
              className="p-8 rounded-2xl bg-white/5 border border-white/10"
            >
              <h3 className="text-lg font-bold mb-6 text-primary">{group.title}</h3>
              <ul className="space-y-4">
                {group.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                    <span className="text-foreground/70 font-medium">{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
