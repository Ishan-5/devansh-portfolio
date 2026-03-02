import { motion } from 'motion/react';
import { Cpu, Layout, Eye, Zap } from 'lucide-react';

const focusAreas = [
  {
    icon: <Cpu size={24} />,
    title: 'Embedded Systems',
    description: 'Developing firmware and logic for microcontrollers like ESP32 and ESP8266.'
  },
  {
    icon: <Layout size={24} />,
    title: 'PCB Design',
    description: 'Designing professional schematics and layouts using KiCad and Multisim.'
  },
  {
    icon: <Eye size={24} />,
    title: 'Computer Vision',
    description: 'Integrating OpenCV and MediaPipe for intelligent hardware interaction.'
  },
  {
    icon: <Zap size={24} />,
    title: 'Prototyping',
    description: 'Hands-on experience in soldering, circuit testing, and hardware debugging.'
  }
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="text-lg text-foreground/70 leading-relaxed mb-6">
                I am a B.Tech Electronics Engineering student at Harcourt Butler Technical University (2028), focused on building intelligent systems that bridge physical hardware and digital intelligence.
              </p>
              <p className="text-lg text-foreground/70 leading-relaxed">
                My work centers on embedded systems, custom 4-layer PCB design, and computer vision for robotics. I specialize in hands-on prototyping, from soldering complex circuits to developing optimized firmware for microcontrollers.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {focusAreas.map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-colors"
                >
                  <div className="text-primary mb-4">{area.icon}</div>
                  <h3 className="font-bold mb-2">{area.title}</h3>
                  <p className="text-sm text-foreground/50">{area.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
