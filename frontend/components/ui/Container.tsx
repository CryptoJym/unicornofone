import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  padding?: boolean;
}

const Container: React.FC<ContainerProps> = ({
  children,
  className = '',
  size = 'lg',
  padding = true,
}) => {
  const sizes = {
    sm: 'max-w-3xl',
    md: 'max-w-5xl',
    lg: 'max-w-7xl',
    xl: 'max-w-[1400px]',
    full: 'max-w-full',
  };
  
  const paddingClass = padding ? 'px-4 sm:px-6 lg:px-8' : '';
  
  return (
    <div className={`${sizes[size]} mx-auto ${paddingClass} ${className}`}>
      {children}
    </div>
  );
};

export default Container;