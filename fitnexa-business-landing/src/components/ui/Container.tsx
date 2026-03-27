import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export function Container({ children, className = '' }: ContainerProps): React.JSX.Element {
  return (
    <div className={`mx-auto w-full max-w-7xl px-6 ${className}`}>
      {children}
    </div>
  );
}
