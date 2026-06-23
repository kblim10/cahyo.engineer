import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Download } from 'lucide-react';
import { personalInfo, heroMeta } from '../../data';
import { Button } from '../ui/Button';
import { PhilosophyStrip } from '../ui/PhilosophyStrip';
import { ease } from '../../lib/motion';

export function Hero() {
  const { scrollY } = useScroll();
  const yText = useTransform(scrollY, [0, 600], [0, 100]);
  const yBg = useTransform(scrollY, [0, 800], [0, 150]);
  const opacity = useTransform(scrollY, [0, 450], [1, 0]);

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <section className="hero" id="top" aria-label="Introduction">
        <div className="hero-bg" />
        <motion.div className="hero-watermark" style={{ y: yBg }} aria-hidden="true">
          {personalInfo.title.split(' ').slice(0, 2).join(' ')}
        </motion.div>

        <div className="container hero-inner">
          <motion.div className="hero-content" style={{ y: yText, opacity }}>
            <div className="hero-meta">
              <span>©{heroMeta.year}</span>
              <span className="hero-meta-sep">/</span>
              <span>Building since {heroMeta.since}</span>
            </div>

            <motion.p
              className="hero-greeting"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease }}
            >
              Hey! I&apos;m {personalInfo.nickname}.
            </motion.p>

            <motion.h1
              className="hero-title"
              initial={{ opacity: 0, y: 48 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease }}
            >
              <span className="hero-title-line">{personalInfo.title.split('&')[0].trim()}</span>
              <span className="hero-title-line hero-title-outline">
                &amp; {personalInfo.title.split('&')[1]?.trim()}
              </span>
            </motion.h1>

            <motion.p
              className="hero-tagline"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease }}
            >
              {personalInfo.tagline}
            </motion.p>

            <motion.div
              className="hero-actions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.65, ease }}
            >
              <Button variant="primary" onClick={() => scrollTo('#projects')}>
                View Projects
              </Button>
              <Button
                variant="outline"
                href="/CV-Muhamad Cahyo.pdf"
                target="_blank"
                rel="noreferrer"
              >
                <Download size={16} />
                Download CV
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.4, ease }}
          >
            <div className="hero-image-frame">
              <img src="/me.png" alt={personalInfo.name} className="hero-image" />
              <div className="hero-image-overlay" />
            </div>
            <div className="hero-visual-meta">
              <span>{personalInfo.location}</span>
              <span className="availability-dot" />
              <span>{personalInfo.availability}</span>
            </div>
          </motion.div>
        </div>

        <motion.button
          type="button"
          className="hero-scroll"
          onClick={() => scrollTo('#about')}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          aria-label="Scroll to about section"
        >
          <span>Scroll</span>
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}>
            <ArrowDown size={14} />
          </motion.div>
        </motion.button>
      </section>

      <PhilosophyStrip />
    </>
  );
}
