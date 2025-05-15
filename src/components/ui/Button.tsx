import { ReactNode, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  fullWidth = false,
  className = '',
  ...props 
}: ButtonProps) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-md font-sans font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green';
  
  const variantStyles = {
    primary: 'bg-green text-navy-dark hover:bg-opacity-80 focus:ring-opacity-50',
    outline: 'bg-transparent border border-green text-green hover:bg-green hover:bg-opacity-10 focus:ring-opacity-50',
    ghost: 'bg-transparent text-slate-dark dark:text-slate hover:bg-slate-dark/10 dark:hover:bg-slate/10 focus:ring-opacity-0',
  };
  
  const sizeStyles = {
    sm: 'text-sm px-3 py-2',
    md: 'text-base px-5 py-2.5',
    lg: 'text-lg px-6 py-3',
  };
  
  const widthStyles = fullWidth ? 'w-full' : '';
  
  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyles} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;