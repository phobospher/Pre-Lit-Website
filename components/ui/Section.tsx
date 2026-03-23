import React from 'react';

export function Section({ children, className = '', background = 'white', id }: any) {
  const bgColors = {
    white: 'bg-white',
    light: 'bg-slate-50',
    dark: 'bg-slate-900 text-white',
  };

  return (
    <section id={id} className={`py-20 md:py-32 ${bgColors[background as keyof typeof bgColors]} ${className}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {children}
      </div>
    </section>
  );
}