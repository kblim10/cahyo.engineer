import React from 'react';

interface NierBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
}

export const NierBox: React.FC<NierBoxProps> = ({ children, title, className = '', ...props }) => {
  return (
    <div className={`nier-box ${className}`} {...props}>
      {title && (
        <h2 style={{ marginBottom: '1rem', borderBottom: '2px solid var(--border-color)', paddingBottom: '0.5rem' }}>
          {title}
        </h2>
      )}
      {children}
    </div>
  );
};
