import type { FC } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { personalInfo } from '../data';

export const Hero: FC = () => {
  const { scrollY } = useScroll();
  const yText = useTransform(scrollY, [0, 1000], [0, 400]);
  const yImage = useTransform(scrollY, [0, 1000], [0, 200]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section style={{ position: 'relative', height: '100vh', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
      
      {/* Background ambient light */}
      <div style={{ position: 'absolute', top: '20%', left: '10%', width: '40vw', height: '40vw', background: 'radial-gradient(circle, rgba(212,175,55,0.1) 0%, transparent 70%)', filter: 'blur(60px)', zIndex: 0 }} />

      <div className="container" style={{ position: 'relative', zIndex: 2, width: '100%' }}>
        <motion.div style={{ y: yText, opacity }}>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            style={{ color: 'var(--accent)', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '1rem' }}
          >
            System Architect & Engineer
          </motion.p>
          
          <motion.h1 
            className="hero-text-huge"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            MUHAMAD<br />CAHYO
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            style={{ display: 'flex', gap: '2rem', marginTop: '4rem', alignItems: 'center' }}
          >
            <div style={{ width: '50px', height: '1px', background: 'var(--text-secondary)' }} />
            <p style={{ maxWidth: '400px', color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '1.1rem' }}>
              {personalInfo.tagline}
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Image */}
      <motion.div className="hero-image-wrapper" style={{ y: yImage }}>
        <motion.img 
          src="/me.png" 
          alt="Cahyo" 
          initial={{ opacity: 0, scale: 1.1, filter: 'blur(20px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        />
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        style={{ position: 'absolute', bottom: '3rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', zIndex: 10 }}
      >
        <div style={{ fontSize: '0.75rem', letterSpacing: '0.2em', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Discover</div>
        <motion.div 
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          style={{ width: '1px', height: '40px', background: 'linear-gradient(to bottom, var(--accent), transparent)' }}
        />
      </motion.div>

    </section>
  );
};
