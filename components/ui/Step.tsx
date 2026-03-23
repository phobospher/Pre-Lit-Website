import React from 'react';

export function Step({ number, title, description }: any) {
  return (
    <div className="flex flex-col border-t border-slate-200 pt-6">
      <span className="text-sm font-bold text-slate-400 mb-2">{number}</span>
      <h4 className="text-lg font-semibold text-slate-900 mb-2">{title}</h4>
      <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
}