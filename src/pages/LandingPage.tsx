import { useEffect } from 'react';
import { Hero } from '../components/sections/Hero';
import { About } from '../components/sections/About';
import { Experience } from '../components/sections/Experience';
import { Skills } from '../components/sections/Skills';
import { Projects } from '../components/sections/Projects';
import { Awards } from '../components/sections/Awards';
import { Contact } from '../components/sections/Contact';
import { SectionDivider } from '../components/ui/SectionDivider';

export function LandingPage() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const timer = setTimeout(() => {
        document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' });
      }, 300);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      <Hero />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Experience />
      <SectionDivider />
      <Skills />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <Awards />
      <SectionDivider />
      <Contact />
    </>
  );
}
