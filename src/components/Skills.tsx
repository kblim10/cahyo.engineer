import { skills } from '../data';
import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';

export const Skills = () => {
  return (
    <section className="section container">
      <motion.h2 
        className="section-title" 
        data-title="Technical Skills"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        Technical Skills
      </motion.h2>

      <div className="grid-2">
        {Object.entries(skills).map(([category, items], idx) => (
          <motion.div 
            key={category}
            className="glass-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem' }}>
              <Code2 size={24} color="var(--accent)" />
              <h3 style={{ fontSize: '1.5rem', textTransform: 'capitalize', margin: 0 }}>
                {category.replace(/_/g, ' ')}
              </h3>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
              {items.map(item => (
                <span 
                  key={item} 
                  style={{ 
                    padding: '0.6rem 1.2rem', 
                    background: 'rgba(255,255,255,0.03)', 
                    border: '1px solid rgba(255,255,255,0.1)', 
                    borderRadius: '100px',
                    fontSize: '0.95rem',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'var(--accent)';
                    e.currentTarget.style.color = 'var(--accent)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                    e.currentTarget.style.color = 'var(--text-primary)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
