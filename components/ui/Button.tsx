import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'outline' | 'ghost';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

export function Button({ children, href, variant = 'primary', className = '', type = 'button', onClick }: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer";
  
  const variants = {
    primary: "bg-slate-900 text-white hover:bg-slate-800 focus:ring-slate-900",
    outline: "border border-slate-900 text-slate-900 hover:bg-slate-50 focus:ring-slate-900",
    ghost: "text-slate-900 hover:bg-slate-100 focus:ring-slate-900",
  };

  const combinedStyles = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return <Link href={href} className={combinedStyles} onClick={onClick}>{children}</Link>;
  }

  return <button type={type} className={combinedStyles} onClick={onClick}>{children}</button>;
}