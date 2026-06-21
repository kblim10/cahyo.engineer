import { databank } from '../data';
import { motion } from 'framer-motion';
import { Activity, Gamepad2, Film, Monitor } from 'lucide-react';

export const Databank = () => {
  const sections = [
    { title: 'Hobbies & Routine', icon: <Activity size={24} />, data: databank.hobbies },
    { title: 'Gaming Log', icon: <Gamepad2 size={24} />, data: databank.games },
    { title: 'Entertainment', icon: <Film size={24} />, data: databank.entertainment },
    { title: 'Equipped Gear', icon: <Monitor size={24} />, data: databank.gear },
  ];

  return (
    <section className="section container">
      <motion.h2 
        className="section-title" 
        data-title="Databank"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        Databank
      </motion.h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
        {sections.map((sec, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
              <div style={{ color: 'var(--accent)' }}>{sec.icon}</div>
              <h3 style={{ fontSize: '2rem', margin: 0, fontWeight: 500 }}>{sec.title}</h3>
            </div>
            
            <div className="grid-3">
              {sec.data.map((item, i) => (
                <div key={i} className="glass-card" style={{ padding: '2rem' }}>
                  <h4 style={{ fontSize: '1.2rem', marginBottom: '0.8rem', color: 'var(--text-primary)' }}>{item.name}</h4>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.95rem' }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Footer */}
      <footer style={{ marginTop: '8rem', textAlign: 'center', padding: '4rem 0', borderTop: '1px solid rgba(255,255,255,0.1)', color: 'var(--text-secondary)' }}>
        <p>© 2026 Muhamad Cahyo. All Rights Reserved.</p>
      </footer>
    </section>
  );
};
