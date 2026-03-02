/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Learning from './components/Learning';
import Contact from './components/Contact';
import Footer from './components/Footer';

/**
 * Main Application Component
 * 
 * This portfolio is built for Devansh Kumar Pandey, an Electronics Engineering student.
 * It features a modern, dark-themed design with a focus on embedded systems and hardware engineering.
 * 
 * Tech Stack:
 * - React 19
 * - Vite
 * - Tailwind CSS (v4)
 * - Motion (for animations)
 * - Lucide React (for icons)
 */
export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-primary">
      {/* Navigation */}
      <Navbar />
      
      <main>
        {/* Hero Section: Introduction and CTA */}
        <Hero />
        
        {/* About Section: Professional background and focus areas */}
        <About />
        
        {/* Projects Section: Highlighted hardware and software projects */}
        <Projects />
        
        {/* Skills Section: Grouped technical competencies */}
        <Skills />
        
        {/* Experience Section: Leadership and university roles */}
        <Experience />
        
        {/* Education Section: Academic details */}
        <Education />

        {/* Learning Section: Current areas of study */}
        <Learning />
        
        {/* Contact Section: Networking and inquiries */}
        <Contact />
      </main>
      
      {/* Footer: Copyright and social links */}
      <Footer />
    </div>
  );
}
