import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string; // Umožní ti přidat extra třídy, pokud bude potřeba
}

export default function Container({ children, className = "" }: ContainerProps) {
  return (
    <div className={`max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}