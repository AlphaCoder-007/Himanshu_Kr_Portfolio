import { Terminal, Github, Linkedin, Heart } from 'lucide-react';
import { heroData } from '../data/portfolioData';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="border-t border-slate-200/50 bg-white/40 py-12 dark:border-slate-800/50 dark:bg-slate-950/40 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-100 dark:border-slate-800/50">
          
          {/* Logo / Brand */}
          <div className="flex items-center gap-2 font-mono text-base font-bold text-slate-900 dark:text-white">
            <Terminal className="h-4.5 w-4.5 text-accent-cyan" />
            <span>
              alex_mercer<span className="text-accent-cyan">.sh</span>
            </span>
          </div>

          {/* Quick Nav Anchors */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
            <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="hover:text-accent-cyan transition-colors">Home</a>
            <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="hover:text-accent-cyan transition-colors">About</a>
            <a href="#skills" onClick={(e) => handleNavClick(e, 'skills')} className="hover:text-accent-cyan transition-colors">Skills</a>
            <a href="#experience" onClick={(e) => handleNavClick(e, 'experience')} className="hover:text-accent-cyan transition-colors">Experience</a>
            <a href="#projects" onClick={(e) => handleNavClick(e, 'projects')} className="hover:text-accent-cyan transition-colors">Projects</a>
            <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="hover:text-accent-cyan transition-colors">Contact</a>
          </nav>

          {/* Social icons */}
          <div className="flex gap-4">
            <a
              href={heroData.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              aria-label="GitHub Link"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href={heroData.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-sky-600 transition-colors"
              aria-label="LinkedIn Link"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>

        </div>

        {/* Copyright notice */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-400 font-mono">
          <span>
            &copy; {currentYear} {heroData.name}. All rights reserved.
          </span>
          <span className="flex items-center gap-1">
            Built with <Heart className="h-3.5 w-3.5 text-red-500 fill-red-500" /> using React, TypeScript & Tailwind CSS.
          </span>
        </div>

      </div>
    </footer>
  );
}
