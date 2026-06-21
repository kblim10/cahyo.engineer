import { databank } from '../data';
import { GlassPanel } from './GlassPanel';
import { Activity, Gamepad2, Film, Monitor } from 'lucide-react';

export const Databank = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <GlassPanel title="HOBBIES & ROUTINE" icon={<Activity size={24} />}>
        <div className="grid-2-col">
          {databank.hobbies.map((item, idx) => (
            <div key={idx} style={{ padding: '1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '8px' }}>
              <div style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--accent)', marginBottom: '0.5rem' }}>{item.name}</div>
              <div style={{ color: 'var(--text-secondary)' }}>{item.desc}</div>
            </div>
          ))}
        </div>
      </GlassPanel>

      <GlassPanel title="GAMING LOG" icon={<Gamepad2 size={24} />}>
        <div className="grid-3-col">
          {databank.games.map((item, idx) => (
            <div key={idx} style={{ padding: '1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '8px' }}>
              <div style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--accent)', marginBottom: '0.5rem' }}>{item.name}</div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{item.desc}</div>
            </div>
          ))}
        </div>
      </GlassPanel>

      <GlassPanel title="ENTERTAINMENT" icon={<Film size={24} />}>
        <div className="grid-3-col">
          {databank.entertainment.map((item, idx) => (
            <div key={idx} style={{ padding: '1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '8px' }}>
              <div style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--accent)', marginBottom: '0.5rem' }}>{item.name}</div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{item.desc}</div>
            </div>
          ))}
        </div>
      </GlassPanel>

      <GlassPanel title="EQUIPPED GEAR" icon={<Monitor size={24} />}>
        <div className="grid-3-col">
          {databank.gear.map((item, idx) => (
            <div key={idx} style={{ padding: '1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', borderLeft: '3px solid var(--accent)' }}>
              <div style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-primary)' }}>{item.name}</div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '0.25rem' }}>{item.desc}</div>
            </div>
          ))}
        </div>
      </GlassPanel>
    </div>
  );
};
