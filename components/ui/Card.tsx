import React from 'react';

export function Card({ title, description, className = '' }: any) {
  return (
    <div className={`p-8 border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow ${className}`}>
      <h3 className="text-xl font-semibold mb-4 text-slate-900">{title}</h3>
      <p className="text-slate-600 leading-relaxed">{description}</p>
    </div>
  );
}