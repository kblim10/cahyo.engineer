import React from 'react';
import { education, awards } from '../data';
import { NierBox } from './NierBox';

export const Intel: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      
      <NierBox title="[ EDUCATION ]">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {education.map((edu, idx) => (
            <div key={idx} style={{ borderLeft: '4px solid var(--border-color)', paddingLeft: '1rem' }}>
              <h3 style={{ fontSize: '1.5rem', margin: 0 }}>{edu.institution}</h3>
              <div style={{ fontWeight: 600, color: 'var(--accent)', marginBottom: '0.5rem' }}>{edu.degree} // {edu.year}</div>
              <p style={{ textAlign: 'justify' }}>{edu.description}</p>
            </div>
          ))}
        </div>
      </NierBox>

      <NierBox title="[ ACHIEVEMENTS ]">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {awards.map((aw, idx) => (
            <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>
              <div>
                <h3 style={{ fontSize: '1.2rem', margin: 0 }}>{aw.title}</h3>
                <div style={{ fontSize: '0.9rem' }}>{aw.event} — {aw.organizer} ({aw.year})</div>
              </div>
              <span style={{ padding: '0.2rem 0.5rem', backgroundColor: 'var(--hover-bg)', color: 'var(--hover-text)', fontSize: '0.8rem' }}>
                {aw.scope.toUpperCase()}
              </span>
            </div>
          ))}
        </div>
      </NierBox>

    </div>
  );
};
