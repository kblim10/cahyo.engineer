import React from 'react';
import { useAudio } from '../hooks/useAudio';

interface NierButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
}

export const NierButton: React.FC<NierButtonProps> = ({ children, active, className = '', onClick, onMouseEnter, ...props }) => {
  const { playHover, playClick } = useAudio();

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    playHover();
    if (onMouseEnter) onMouseEnter(e);
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    playClick();
    if (onClick) onClick(e);
  };

  return (
    <button 
      className={`nier-btn ${active ? 'active' : ''} ${className}`}
      onMouseEnter={handleMouseEnter}
      onClick={handleClick}
      {...props}
    >
      <span>{children}</span>
    </button>
  );
};
