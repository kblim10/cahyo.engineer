import type { HTMLAttributes, FC } from 'react';

interface GlassPanelProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  icon?: React.ReactNode;
}

export const GlassPanel: FC<GlassPanelProps> = ({ children, title, icon, className = '', ...props }) => {
  return (
    <div className={`glass-panel ${className}`} {...props}>
      {title && (
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.75rem' }}>
          {icon && <span style={{ color: 'var(--accent)' }}>{icon}</span>}
          <h2 style={{ margin: 0, fontSize: '1.25rem', letterSpacing: '2px', color: 'var(--text-primary)' }}>
            {title}
          </h2>
        </div>
      )}
      {children}
    </div>
  );
};
