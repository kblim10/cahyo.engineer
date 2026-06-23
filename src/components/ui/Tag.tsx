import type { ReactNode } from 'react';

interface TagProps {
  children: ReactNode;
}

export function Tag({ children }: TagProps) {
  return <span className="tag">{children}</span>;
}
