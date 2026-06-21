import type { FC } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { personalInfo } from '../data';

export const Hero: FC = () => {
  return (
    <div style={{
      position: 'relative',
      height: '100vh',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      padding: '2rem'
    }}>
      {/* Background Grid & Ornaments */}
      <div className="hero-grid"></div>
      
      {/* Floating Coordinates / HUD Elements */}
      <motion.div 
        className="hud-element"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 0.5, x: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        style={{ position: 'absolute', top: '10%', left: '5%', color: 'var(--accent)', fontFamily: 'monospace', fontSize: '0.8rem', letterSpacing: '2px' }}
      >
        SYS.INIT: OK<br/>
        COORD: 34.0522° N, 118.2437° W<br/>
        SYNC_RATE: 99.9%
      </motion.div>

      <motion.div 
        className="hud-element"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 0.3, x: 0 }}
        transition={{ delay: 0.8, duration: 1 }}
        style={{ position: 'absolute', bottom: '15%', right: '5%', color: 'var(--text-primary)', fontFamily: 'monospace', fontSize: '0.7rem', textAlign: 'right' }}
      >
        ASTRAL.EXPRESS.MANIFEST<br/>
        LOADING_DATA_BANKS...<br/>
        [0x00A1F]
      </motion.div>

      {/* Main Content (Split Layout) */}
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        maxWidth: '1200px',
        zIndex: 10,
        gap: '4rem'
      }} className="hero-content">
        
        {/* Text Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '1rem' }}
        >
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: '100px' }}
            transition={{ delay: 0.5, duration: 0.8 }}
            style={{ height: '4px', background: 'var(--accent)', marginBottom: '1rem' }}
          />
          <h1 className="glow-text" style={{ fontSize: '4rem', lineHeight: 1.1, margin: 0, textTransform: 'uppercase' }}>
            {personalInfo.name.split(' ').map((word, i) => (
              <span key={i} style={{ display: 'block', color: i === 0 ? 'var(--text-primary)' : 'var(--accent)' }}>
                {word}
              </span>
            ))}
          </h1>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 500, letterSpacing: '4px', opacity: 0.8, marginTop: '1rem' }}>
            {personalInfo.title}
          </h2>
          <p style={{ fontSize: '1.1rem', maxWidth: '500px', opacity: 0.7, marginTop: '1rem', fontStyle: 'italic' }}>
            "{personalInfo.tagline}"
          </p>
        </motion.div>

        {/* Image Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          style={{ flex: 1, display: 'flex', justifyContent: 'center', position: 'relative' }}
        >
          {/* Glowing circle behind image */}
          <div style={{
            position: 'absolute',
            width: '300px',
            height: '300px',
            background: 'var(--accent)',
            borderRadius: '50%',
            filter: 'blur(100px)',
            opacity: 0.2,
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 0
          }}></div>
          
          <img 
            src="/me.png" 
            alt="Profile" 
            style={{
              maxWidth: '100%',
              height: 'auto',
              maxHeight: '70vh',
              objectFit: 'contain',
              position: 'relative',
              zIndex: 1,
              filter: 'drop-shadow(0 0 20px rgba(0,0,0,0.5))'
            }}
          />
        </motion.div>

      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        style={{
          position: 'absolute',
          bottom: '2rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
          color: 'var(--accent)',
          cursor: 'pointer'
        }}
        className="scroll-indicator"
        onClick={() => {
          window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
          });
        }}
      >
        <span style={{ fontSize: '0.8rem', letterSpacing: '3px', fontWeight: 600 }}>SYSTEM.START</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown size={24} />
        </motion.div>
      </motion.div>
    </div>
  );
};
