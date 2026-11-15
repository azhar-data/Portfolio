import SkipToContent from '@/components/SkipToContent';
import ScrollProgress from '@/components/ScrollProgress';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TechMarquee from '@/components/TechMarquee';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Services from '@/components/Services';
import Process from '@/components/Process';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Resume from '@/components/Resume';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <SkipToContent />
      <ScrollProgress />
      <Navbar />
      <main id="main-content" className="relative flex flex-col">
        <Hero />
        <TechMarquee />
        <Skills />
        <Projects />
        <Services />
        <Process />
        <About />
        <Experience />
        <Education />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
