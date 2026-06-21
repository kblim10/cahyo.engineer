import { projects } from '../data';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

export const Quests = () => {
  return (
    <section className="section container">
      <motion.h2 
        className="section-title" 
        data-title="Featured Projects"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        Featured Projects
      </motion.h2>

      <div className="grid-2">
        {projects.map((proj, idx) => (
          <motion.div 
            key={idx}
            className="glass-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            style={{ display: 'flex', flexDirection: 'column' }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
              <div>
                <h3 style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>{proj.title}</h3>
                <span style={{ fontSize: '0.85rem', color: 'var(--accent)', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase' }}>
                  {proj.category}
                </span>
              </div>
              <a href={proj.link} target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s ease' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--text-primary)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}>
                <ExternalLink size={24} />
              </a>
            </div>
            
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '2rem', flex: 1 }}>
              {proj.description}
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
              {proj.tech.map((t, i) => (
                <span key={i} style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', background: 'rgba(255,255,255,0.05)', padding: '0.3rem 0.8rem', borderRadius: '4px' }}>
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
