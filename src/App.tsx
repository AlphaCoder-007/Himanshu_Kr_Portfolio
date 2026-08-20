import { useTheme } from './hooks/useTheme';
import { Header } from './sections/Header';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Skills } from './sections/Skills';
import { Experience } from './sections/Experience';
import { Expertise } from './sections/Expertise';
import { Projects } from './sections/Projects';
import { TestingArchitecture } from './sections/TestingArchitecture';
import { CertificationsEducation } from './sections/CertificationsEducation';
import { Achievements } from './sections/Achievements';
import { Testimonials } from './sections/Testimonials';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100 selection:bg-accent-cyan/30">
      {/* Header / Navigation */}
      <Header theme={theme} toggleTheme={toggleTheme} />

      {/* Main Sections */}
      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Expertise />
        <Projects />
        <TestingArchitecture />
        <CertificationsEducation />
        <Achievements />
        <Testimonials />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
