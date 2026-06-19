import React from 'react';
import { experiences, projects } from '../data';
import { NierBox } from './NierBox';

export const Quests: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      
      <NierBox title="[ MAIN_QUESTS // EXPERIENCE ]">
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
      </NierBox>

      <NierBox title="[ SIDE_QUESTS // PROJECTS ]">
        <div className="grid-2-col">
          {projects.map((proj, idx) => (
            <div key={idx} style={{ border: '1px solid var(--border-color)', padding: '1.5rem', display: 'flex', flexDirection: 'column', height: '100%', backgroundColor: 'rgba(74, 69, 56, 0.02)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <h3 style={{ fontSize: '1.3rem', margin: 0, paddingRight: '1rem' }}>{proj.title}</h3>
                <span style={{ fontSize: '0.8rem', padding: '0.2rem 0.4rem', border: '1px solid var(--border-color)', whiteSpace: 'nowrap' }}>{proj.category.toUpperCase()}</span>
              </div>
              <div style={{ fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--accent)' }}>ROLE: {proj.role}</div>
              <p style={{ fontSize: '0.9rem', textAlign: 'justify', marginBottom: '1.5rem', flex: 1 }}>{proj.description}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: 'auto' }}>
                {proj.tech.map(t => (
                  <span key={t} style={{ fontSize: '0.75rem', padding: '0.2rem 0.4rem', border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-color)' }}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </NierBox>

    </div>
  );
};
