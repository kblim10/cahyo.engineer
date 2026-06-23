import type { ReactNode, HTMLAttributes } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  interactive?: boolean;
}

export function Card({ children, interactive = false, className = '', ...props }: CardProps) {
  return (
    <div
      className={`card ${interactive ? 'card-interactive' : ''} ${className}`.trim()}
      {...props}
    >
      {children}
    </div>
  );
}
