import type { ButtonHTMLAttributes, FC } from 'react';
import { useAudio } from '../hooks/useAudio';

interface HSRButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
  icon?: React.ReactNode;
}

export const HSRButton: FC<HSRButtonProps> = ({ children, active, icon, className = '', onClick, onMouseEnter, ...props }) => {
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
      className={`hsr-btn ${active ? 'active' : ''} ${className}`}
      onMouseEnter={handleMouseEnter}
      onClick={handleClick}
      {...props}
    >
      {icon && <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{icon}</span>}
      <span style={{ flex: 1, textAlign: 'left' }}>{children}</span>
    </button>
  );
};
