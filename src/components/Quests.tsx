import React from 'react';
import { experiences, projects } from '../data';
import { GlassPanel } from './GlassPanel';
import { ShieldAlert, TerminalSquare } from 'lucide-react';

export const Quests: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      
      <GlassPanel title="[ MAIN_QUESTS // EXPERIENCE ]" icon={<TerminalSquare size={24} />}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {experiences.map((exp, idx) => (
            <div key={idx} style={{ borderLeft: '4px solid var(--border-color)', paddingLeft: '1rem' }}>
              <h3 style={{ fontSize: '1.5rem', margin: 0 }}>{exp.role}</h3>
              <div style={{ fontWeight: 600, color: 'var(--accent)', marginBottom: '0.5rem' }}>{exp.company} // {exp.period}</div>
              <p style={{ textAlign: 'justify', marginBottom: '0.5rem' }}>{exp.description}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {exp.tech.map(t => (
                  <span key={t} style={{ fontSize: '0.8rem', padding: '0.2rem 0.4rem', backgroundColor: 'var(--hover-bg)', color: 'var(--hover-text)' }}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </GlassPanel>

      <GlassPanel title="ACTIVE MISSIONS" icon={<ShieldAlert size={24} />}>
        <div className="grid-2-col">
          {projects.map((proj, idx) => (
            <div key={idx} style={{ border: '1px solid var(--border-color)', padding: '1.5rem', display: 'flex', flexDirection: 'column', height: '100%', backgroundColor: 'rgba(74, 69, 56, 0.02)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>
                <h3 className="glow-text" style={{ margin: 0, fontSize: '1.4rem', color: 'var(--accent)' }}>{proj.title}</h3>
                <span style={{ fontSize: '0.8rem', background: 'var(--accent)', color: '#000', padding: '0.1rem 0.5rem', fontWeight: 600, borderRadius: '4px' }}>{proj.category.toUpperCase()}</span>
              </div>
              <div style={{ fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--accent)' }}>ROLE: {proj.role}</div>
              <p style={{ fontSize: '0.9rem', textAlign: 'justify', marginBottom: '1.5rem', flex: 1 }}>{proj.description}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1rem' }}>
                {proj.tech.map((t, i) => (
                  <span key={i} style={{ border: '1px solid var(--accent)', color: 'var(--accent)', padding: '0.2rem 0.5rem', fontSize: '0.75rem', borderRadius: '4px' }}>{t}</span>
                ))}
              </div>
              <div style={{ marginTop: 'auto', paddingTop: '1rem', display: 'flex', justifyContent: 'flex-end' }}>
                <a href={proj.link} className="hsr-btn" style={{ padding: '0.4rem 1rem', fontSize: '0.9rem' }}>
                  <TerminalSquare size={16} style={{ marginRight: '0.5rem' }} /> RUN_EXECUTABLE
                </a>
              </div>
            </div>
          ))}
        </div>
      </GlassPanel>

    </div>
  );
};
