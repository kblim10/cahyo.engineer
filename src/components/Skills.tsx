import React from 'react';
import { skills } from '../data';
import { GlassPanel } from './GlassPanel';
import { Code2 } from 'lucide-react';

export const Skills: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>

      <div className="grid-2-col">
        {Object.entries(skills).map(([category, items]) => (
          <GlassPanel key={category} title={category.toUpperCase().replace(/_/g, ' ')} icon={<Code2 size={20} />}>
            {(category === 'languages' || category === 'tools') ? (
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {items.map(item => (
                  <span key={item} style={{ border: '1px solid var(--border-color)', padding: '0.5rem 1rem', whiteSpace: 'nowrap', borderRadius: '4px', background: 'rgba(255,255,255,0.03)' }}>{item}</span>
                ))}
              </div>
            ) : (
              <ul style={{ listStyleType: 'square', paddingLeft: '1.5rem', margin: 0 }}>
                {items.map(item => (
                  <li key={item} style={{ marginBottom: '0.5rem', lineHeight: '1.4' }}>{item}</li>
                ))}
              </ul>
            )}
          </GlassPanel>
        ))}
      </div>

    </div>
  );
};
