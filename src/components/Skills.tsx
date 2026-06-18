import React from 'react';
import { skills } from '../data';
import { NierBox } from './NierBox';

export const Skills: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignItems: 'stretch' }}>
        {Object.entries(skills).map(([category, items]) => (
          <NierBox key={category} title={`[ ${category.toUpperCase().replace(/_/g, ' ')} ]`}>
            {(category === 'languages' || category === 'tools') ? (
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {items.map(item => (
                  <span key={item} style={{ padding: '0.3rem 0.6rem', border: '1px solid var(--border-color)', fontSize: '0.9rem', backgroundColor: 'rgba(74, 69, 56, 0.05)' }}>{item}</span>
                ))}
              </div>
            ) : (
              <ul style={{ listStyleType: 'square', paddingLeft: '1.5rem', margin: 0 }}>
                {items.map(item => (
                  <li key={item} style={{ marginBottom: '0.5rem', lineHeight: '1.4' }}>{item}</li>
                ))}
              </ul>
            )}
          </NierBox>
        ))}
      </div>

    </div>
  );
};
