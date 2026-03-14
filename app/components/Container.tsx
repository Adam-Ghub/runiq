import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string; 
}

export default function Container({ children, className = "" }: ContainerProps) {
  return (
    <div className={`max-w-[1600px] mx-auto px-8 max-lg:px-6 max-sm:px-4 ${className}`}>
      {children}
    </div>
  );
}