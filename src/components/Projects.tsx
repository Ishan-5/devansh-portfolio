import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Github, ExternalLink, X, FileText, Cpu, Layers, Zap, Info, Wrench, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { cn } from '../lib/utils';

interface ProjectChallenge {
  title: string;
  description: string;
}

interface ProjectDetails {
  summary: string;
  objective: string[];
  specifications: {
    [key: string]: string | string[];
  };
  challenges: ProjectChallenge[];
  tools: string[];
  files: string[];
  future: string[];
  images: string[];
}

interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  github: string;
  placeholder: string;
  isDetailed: boolean;
  details: ProjectDetails;
}

const projects: Project[] = [
  {
    id: 'esp32-4layer',
    title: 'Custom 4-Layer ESP32 Development Board',
    description: 'Designed and routed a fabrication-ready 4-layer PCB based on the ESP32-WROOM-32 module, focusing on power integrity, RF layout constraints, and manufacturability.',
    tags: ['PCB', 'Embedded', 'Hardware'],
    github: 'https://github.com/Ishan-5/ESP32-Development-Board-4Layer',
    placeholder: 'Custom 4-Layer ESP32 PCB Design',
    isDetailed: true,
    details: {
      summary: 'Designed and routed a fabrication-ready 4-layer PCB based on the ESP32-WROOM-32 module, focusing on power integrity, RF layout constraints, and manufacturability.',
      objective: [
        'PCB stackup planning',
        'Ground plane implementation',
        'Power regulation design',
        'USB-to-UART interface design',
        'RF antenna layout constraints',
        'Manufacturability validation'
      ],
      specifications: {
        'Module': 'ESP32-WROOM-32 (WiFi + Bluetooth)',
        'PCB Stackup': [
          'Layer 1 – Top (Components + Signals)',
          'Layer 2 – Dedicated Ground Plane',
          'Layer 3 – Power Plane',
          'Layer 4 – Bottom (Signals)'
        ],
        'Power System': [
          '5V input via Micro USB',
          'AMS1117-3.3 linear regulator',
          'Input and output bulk capacitors',
          'Local decoupling capacitors near ESP32 VCC pins',
          'Wider 3.3V traces for current handling'
        ],
        'USB Interface': [
          'CP2102 USB-to-UART bridge',
          'DTR and RTS connections for auto-reset',
          'Micro USB interface'
        ],
        'RF Considerations': [
          'Antenna keep-out zone implemented',
          'No copper under antenna region',
          'Continuous ground reference for return current stability',
          'Ground stitching vias for EMI control'
        ],
        'Design Validation': [
          'DRC verification',
          'Fabrication-ready Gerber files generated',
          'Drill files and BOM prepared'
        ]
      },
      challenges: [
        {
          title: 'Power Integrity',
          description: 'Managing peak current demand of ESP32 during WiFi transmission through wider power traces and strategic decoupling capacitor placement.'
        },
        {
          title: 'Thermal Management',
          description: 'Thermal considerations of linear regulators, ensuring adequate copper area for heat dissipation.'
        },
        {
          title: 'Stackup Planning',
          description: 'Ground plane planning in 4-layer PCB to minimize loop area and control impedance.'
        },
        {
          title: 'RF Layout',
          description: 'Maintaining antenna clearance across all layers to ensure signal integrity and prevent EMI.'
        }
      ],
      tools: ['EasyEDA (Schematic + PCB Design)', 'Manual routing', 'DRC verification'],
      files: ['Gerber files', 'Drill files', 'Bill of Materials (BOM)', 'Schematic PDF', 'PCB layout renders'],
      future: [
        'Replace linear regulator with switching regulator for efficiency',
        'Add USB ESD protection',
        'Improve regulator heat dissipation copper area',
        'Add debugging test points',
        'Refine trace width optimization'
      ],
      images: [
        '/assets/projects/esp32-4layer/Schematic_ESP32_ISHAN.jpg',
        '/assets/projects/esp32-4layer/pcb.jpg',
        '/assets/projects/esp32-4layer/3d.jpg'
      ]
    }
  },
  {
    id: 'handrover',
    title: 'AI Vision HandRover Bot',
    description: 'Gesture-controlled robot using OpenCV and MediaPipe for hand tracking, interfaced with ESP8266 for wireless motor control.',
    tags: ['Embedded', 'Computer Vision', 'Firmware'],
    github: 'https://github.com/Ishan-5/AI-Vision-Handrover-bot',
    placeholder: 'AI Vision HandRover Bot',
    isDetailed: true,
    details: {
      summary: 'A sophisticated robotics project integrating computer vision with embedded hardware to create a gesture-responsive rover.',
      objective: [
        'Real-time hand gesture recognition',
        'Wireless command transmission via UDP/TCP',
        'Low-latency motor control response',
        'Integration of Python-based CV with C++ firmware'
      ],
      specifications: {
        'Controller': 'ESP8266 (NodeMCU)',
        'Vision Engine': 'OpenCV + MediaPipe (Python)',
        'Communication': 'WiFi (Socket Programming)',
        'Motor Driver': 'L298N Dual H-Bridge',
        'Power': '7.4V Li-ion Battery Pack'
      },
      challenges: [
        {
          title: 'Network Latency',
          description: 'Optimizing packet size and transmission frequency to ensure smooth real-time control.'
        },
        {
          title: 'Gesture Accuracy',
          description: 'Filtering noise from hand tracking data to prevent erratic movements.'
        }
      ],
      tools: ['Python', 'C++', 'Arduino IDE', 'OpenCV', 'MediaPipe'],
      files: ['Python Controller Script', 'ESP8266 Firmware', 'Circuit Diagram'],
      future: [
        'Implement PID control for smoother movement',
        'Add ultrasonic sensors for obstacle avoidance',
        'Migrate to ESP32 for dual-core processing'
      ],
      images: [
        '/assets/projects/handrover/bot.jpg',
        '/assets/projects/handrover/Circuit_Diagram_AI_rover.jpg'
      ]
    }
  },
  {
    id: 'inverter',
    title: '12V DC to 220V AC Inverter',
    description: 'Designed and tested a DC–AC inverter prototype under controlled load conditions.',
    tags: ['Power Electronics', 'Hardware'],
    github: 'https://github.com/Ishan-5/dc-ac-inverter',
    placeholder: '12V DC–AC Inverter',
    isDetailed: true,
    details: {
      summary: 'A power electronics project focused on converting low-voltage DC from a battery to high-voltage AC for household appliances.',
      objective: [
        'High-frequency oscillation generation',
        'Power MOSFET switching logic',
        'Voltage step-up through transformer',
        'Efficiency analysis under load'
      ],
      specifications: {
        'Oscillator': 'CD4047 or 555 Timer IC',
        'Switching': 'IRFZ44N Power MOSFETs',
        'Transformer': '12-0-12V to 220V Step-up',
        'Input': '12V DC Battery',
        'Output': '220V AC (Square Wave)'
      },
      challenges: [
        {
          title: 'Heat Dissipation',
          description: 'Managing thermal output of MOSFETs during high-current switching.'
        },
        {
          title: 'Waveform Stability',
          description: 'Maintaining a consistent 50Hz frequency under varying load conditions.'
        }
      ],
      tools: ['Multisim', 'Breadboard Prototyping', 'Oscilloscope'],
      files: ['Circuit Schematic', 'BOM', 'Test Results'],
      future: [
        'Implement Pure Sine Wave output using SPWM',
        'Add overload and short-circuit protection',
        'Improve efficiency with toroidal transformer'
      ],
      images: [
        '/assets/projects/inverter/inverter.jpg'
      ]
    }
  },
  {
    id: 'power-supply',
    title: '5V Regulated Power Supply',
    description: 'Linear voltage regulator circuit for stable electronics testing.',
    tags: ['Power Electronics', 'Analog Circuits'],
    github: 'https://github.com/Ishan-5/5v-regulated-power-supply',
    placeholder: '5V Regulated Power Supply',
    isDetailed: true,
    details: {
      summary: 'A fundamental analog electronics project providing a stable 5V DC output from an AC source.',
      objective: [
        'AC to DC rectification',
        'Voltage regulation using LM7805',
        'Ripple reduction through filtering',
        'Short-circuit protection'
      ],
      specifications: {
        'Transformer': '220V to 12V Step-down',
        'Rectifier': 'Full-wave Bridge (1N4007)',
        'Regulator': 'LM7805 Linear Regulator',
        'Output': '5V DC, 1A Max'
      },
      challenges: [
        {
          title: 'Voltage Drop',
          description: 'Ensuring sufficient input-output differential for the regulator to function.'
        },
        {
          title: 'Filtering',
          description: 'Selecting appropriate capacitor values to minimize output ripple.'
        }
      ],
      tools: ['Soldering Iron', 'Multimeter', 'KiCad'],
      files: ['PCB Layout', 'Schematic', 'BOM'],
      future: [
        'Add variable output voltage (LM317)',
        'Include digital voltage/current display',
        'Design a custom 3D-printed enclosure'
      ],
      images: [
        '/assets/projects/power-supply/5V DC Regulated Power Supply.jpg'
      ]
    }
  },
  {
    id: 'people-counter',
    title: 'Automatic People Counter',
    description: 'IR sensor-based system for room occupancy monitoring.',
    tags: ['Embedded', 'Digital Logic', 'Sensors'],
    github: 'https://github.com/Ishan-5/automatic-people-counter',
    placeholder: 'Automatic People Counter',
    isDetailed: true,
    details: {
      summary: 'A digital logic project that tracks the number of people entering or leaving a room using infrared sensors.',
      objective: [
        'Directional sensing logic',
        'Digital counting and display',
        'Sensor debouncing',
        'Low-power operation'
      ],
      specifications: {
        'Sensors': 'IR Transmitter/Receiver Pairs',
        'Logic': 'CD4026 or Microcontroller (ATmega328P)',
        'Display': '7-Segment LED Display',
        'Power': '9V DC'
      },
      challenges: [
        {
          title: 'Ambient Light Interference',
          description: 'Calibrating IR sensors to ignore sunlight and indoor lighting.'
        },
        {
          title: 'Double Counting',
          description: 'Implementing logic to prevent multiple counts for a single person.'
        }
      ],
      tools: ['Arduino IDE', 'Proteus', 'Breadboard'],
      files: ['Firmware Code', 'Circuit Diagram', 'User Manual'],
      future: [
        'Add IoT connectivity for remote monitoring',
        'Implement bi-directional counting with high accuracy',
        'Use ultrasonic sensors for better range'
      ],
      images: [
        '/assets/projects/people-counter/people 1.jpg',
        '/assets/projects/people-counter/people 2.jpg'
      ]
    }
  },
  {
    id: 'dice',
    title: 'Digital Dice',
    description: 'Random number generator using logic gates and LEDs.',
    tags: ['Digital Logic', 'Hardware'],
    github: 'https://github.com/Ishan-5/digital-dice-555-4017',
    placeholder: 'Digital Dice',
    isDetailed: true,
    details: {
      summary: 'A fun digital electronics project that simulates a 6-sided die using a random pulse generator and a counter.',
      objective: [
        'Random pulse generation',
        'Sequential counting (1-6)',
        'LED pattern mapping',
        'Push-button trigger logic'
      ],
      specifications: {
        'Timer': 'NE555 (Astable mode)',
        'Counter': 'CD4017 Decade Counter',
        'Display': '7 LEDs in Dice Pattern',
        'Logic': 'Diode-based pattern mapping'
      },
      challenges: [
        {
          title: 'Randomness',
          description: 'Ensuring the high-frequency clock stops at a truly random position.'
        },
        {
          title: 'Switch Debouncing',
          description: 'Preventing multiple triggers from a single button press.'
        }
      ],
      tools: ['Multisim', 'Soldering', 'Perfboard'],
      files: ['Schematic', 'BOM', 'Assembly Guide'],
      future: [
        'Add sound effects (buzzer)',
        'Design a compact PCB version',
        'Implement a dual-dice version'
      ],
      images: [
        '/assets/projects/dice/digital dice 1.jpg',
        '/assets/projects/dice/dice back.jpg'
      ]
    }
  },
  {
    id: 'voltage-doubler',
    title: 'Full-Wave Voltage Doubler',
    description: 'Analog circuit designed to double the input peak voltage using diodes and capacitors.',
    tags: ['Analog Circuits', 'Power Electronics'],
    github: 'https://github.com/Ishan-5/full-wave-voltage-doubler',
    placeholder: 'Full-Wave Voltage Doubler',
    isDetailed: true,
    details: {
      summary: 'A classic analog power circuit that generates a DC voltage approximately twice the peak AC input voltage.',
      objective: [
        'Voltage multiplication principles',
        'Capacitive charge storage',
        'Diode rectification',
        'Load regulation analysis'
      ],
      specifications: {
        'Diodes': '1N4007 High Voltage Diodes',
        'Capacitors': 'Electrolytic (High Voltage rated)',
        'Input': '12V AC (Transformer)',
        'Output': 'Approx. 30-34V DC (Unloaded)'
      },
      challenges: [
        {
          title: 'Voltage Ripple',
          description: 'Managing high ripple content under heavy load conditions.'
        },
        {
          title: 'Component Rating',
          description: 'Selecting capacitors with sufficient voltage headroom to prevent failure.'
        }
      ],
      tools: ['Multisim', 'Oscilloscope', 'Breadboard'],
      files: ['Circuit Schematic', 'Simulation Data', 'BOM'],
      future: [
        'Cascade for higher multiplication (Tripler/Quadrupler)',
        'Add voltage regulation to the output',
        'Implement in a high-voltage discharge circuit'
      ],
      images: [
        '/assets/projects/voltage-doubler/schematic.jpg',
        '/assets/projects/voltage-doubler/simulation.jpg',
        '/assets/projects/voltage-doubler/breadboard.jpg'
      ]
    }
  }
];

const filters = ['All', 'Embedded', 'PCB', 'Power Electronics', 'Computer Vision', 'Digital Logic', 'Analog Circuits'];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedImage, setSelectedImage] = useState<{ url: string; index: number } | null>(null);

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.tags.includes(activeFilter));

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-8" />
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={cn(
                  "px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all border",
                  activeFilter === filter
                    ? "bg-primary border-primary text-white"
                    : "bg-white/5 border-white/10 text-foreground/40 hover:border-primary/50 hover:text-foreground"
                )}
              >
                {filter}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-primary/50 transition-all flex flex-col"
              >
                <div 
                  className="relative aspect-video overflow-hidden bg-secondary/50 flex items-center justify-center p-6 text-center cursor-pointer"
                  onClick={() => project.isDetailed && setSelectedProject(project)}
                >
                  <span className="text-foreground/30 font-bold text-lg tracking-tight group-hover:text-primary/50 transition-colors">
                    {project.placeholder}
                  </span>
                  {project.isDetailed && (
                    <div className="absolute top-4 right-4 p-2 bg-primary/20 rounded-full text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowUpRight size={16} />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-primary rounded-full text-white hover:bg-primary/90 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    {project.isDetailed && (
                      <button 
                        onClick={() => setSelectedProject(project)}
                        className="text-xs font-bold text-primary hover:underline flex items-center gap-1 whitespace-nowrap"
                      >
                        Details <ArrowUpRight size={12} />
                      </button>
                    )}
                  </div>
                  <p className="text-foreground/60 text-sm mb-6 flex-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 rounded-md bg-primary/10 text-[10px] font-bold uppercase tracking-wider text-primary border border-primary/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent transition-colors"
                  >
                    View Code <ExternalLink size={14} />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Project Details Modal */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="absolute inset-0 bg-background/90 backdrop-blur-sm"
              />
              
              <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 50, scale: 0.95 }}
                className="relative w-full max-w-5xl max-h-full overflow-y-auto bg-white rounded-3xl shadow-2xl text-slate-900"
              >
                {/* Modal Header */}
                <div className="sticky top-0 z-10 flex items-center justify-between p-6 bg-white border-b border-slate-100">
                  <h2 className="text-2xl font-bold tracking-tight">{selectedProject.title}</h2>
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="p-2 hover:bg-slate-100 rounded-full transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>

                {/* Modal Content */}
                <div className="p-8 md:p-12 space-y-16">
                  {/* Summary */}
                  <section>
                    <p className="text-xl text-slate-600 leading-relaxed font-medium">
                      {selectedProject.details.summary}
                    </p>
                  </section>

                  {/* Visuals Section */}
                  <section>
                    <div className="flex items-center gap-3 mb-8">
                      <div className="w-8 h-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center">
                        <Layers size={18} />
                      </div>
                      <h3 className="text-xl font-bold">Project Visuals</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {selectedProject.details.images.map((img: string, index: number) => (
                        <div 
                          key={index} 
                          className="group/img relative aspect-square overflow-hidden bg-slate-100 border border-slate-200 rounded-2xl cursor-pointer"
                          onClick={() => setSelectedImage({ url: img, index })}
                        >
                          <img 
                            src={img} 
                            alt={`${selectedProject.title} visual ${index + 1}`}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-110"
                            onError={(e) => {
                              // Fallback to placeholder if image not found
                              const fallbackUrl = `https://picsum.photos/seed/${selectedProject.id}-${index}/1200/1200`;
                              (e.target as HTMLImageElement).src = fallbackUrl;
                            }}
                          />
                          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                            <span className="text-white text-xs font-bold uppercase tracking-widest bg-black/40 px-3 py-1.5 rounded-full backdrop-blur-sm">
                              View Full Size
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Objective */}
                  <section>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-8 h-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center">
                        <Info size={18} />
                      </div>
                      <h3 className="text-xl font-bold">Project Objective</h3>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {selectedProject.details.objective.map((item: string) => (
                        <div key={item} className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                          <CheckCircle2 size={16} className="text-primary" />
                          <span className="text-sm font-medium text-slate-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Specifications */}
                  <section>
                    <div className="flex items-center gap-3 mb-8">
                      <div className="w-8 h-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center">
                        <Cpu size={18} />
                      </div>
                      <h3 className="text-xl font-bold">Technical Specifications</h3>
                    </div>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {Object.entries(selectedProject.details.specifications).map(([key, value]) => (
                        <div key={key}>
                          <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">{key}</p>
                          {Array.isArray(value) ? (
                            <ul className="space-y-2">
                              {value.map((item: string) => (
                                <li key={item} className="text-sm text-slate-600 flex items-center gap-2">
                                  <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          ) : (
                            <p className="text-slate-700 font-medium">{value}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Challenges */}
                  <section>
                    <div className="flex items-center gap-3 mb-8">
                      <div className="w-8 h-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center">
                        <Zap size={18} />
                      </div>
                      <h3 className="text-xl font-bold">Engineering Challenges</h3>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-6">
                      {selectedProject.details.challenges.map((challenge: ProjectChallenge) => (
                        <div key={challenge.title} className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                          <h4 className="font-bold text-slate-900 mb-2">{challenge.title}</h4>
                          <p className="text-sm text-slate-600 leading-relaxed">{challenge.description}</p>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Tools & Files */}
                  <section className="grid md:grid-cols-2 gap-12">
                    <div>
                      <h3 className="text-lg font-bold mb-6">Tools Used</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.details.tools.map((tool: string) => (
                          <span key={tool} className="px-3 py-1.5 bg-slate-100 text-slate-600 rounded-lg text-xs font-bold uppercase tracking-wider">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-6">Files Included</h3>
                      <div className="grid grid-cols-2 gap-3">
                        {selectedProject.details.files.map((file: string) => (
                          <div key={file} className="flex items-center gap-2 text-sm text-slate-500">
                            <FileText size={14} className="text-slate-300" />
                            {file}
                          </div>
                        ))}
                      </div>
                    </div>
                  </section>

                  {/* Future Improvements */}
                  <section className="bg-slate-900 text-white p-8 md:p-12 rounded-3xl">
                    <h3 className="text-xl font-bold mb-8">Future Improvements</h3>
                    <div className="grid sm:grid-cols-2 gap-x-12 gap-y-4">
                      {selectedProject.details.future.map((item: string) => (
                        <div key={item} className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          <span className="text-sm text-white/70">{item}</span>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Modal Footer */}
                  <div className="pt-8 flex items-center justify-center gap-4">
                    <a 
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-8 py-4 bg-primary text-white rounded-xl font-bold flex items-center gap-2 hover:bg-primary/90 transition-colors"
                    >
                      <Github size={20} />
                      View Repository
                    </a>
                    <button 
                      onClick={() => setSelectedProject(null)}
                      className="px-8 py-4 bg-slate-100 text-slate-600 rounded-xl font-bold hover:bg-slate-200 transition-colors"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
        {/* Image Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
            >
              <motion.button
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <X size={24} />
              </motion.button>

              <motion.img
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                src={selectedImage.url}
                alt="Full size view"
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                onClick={(e) => e.stopPropagation()}
                onError={(e) => {
                  // Fallback for lightbox too, using the same seed logic as thumbnails
                  if (selectedProject) {
                    (e.target as HTMLImageElement).src = `https://picsum.photos/seed/${selectedProject.id}-${selectedImage.index}/1600/1200`;
                  }
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
