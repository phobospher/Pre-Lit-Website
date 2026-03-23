import React from 'react';
import { Section } from './Section';

export function LegalDocument({ title, effectiveDate, children }: any) {
  return (
    <div className="animate-in fade-in duration-500">
      <Section background="light" className="border-b border-slate-200 pt-32 pb-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-semibold mb-4 text-slate-900">{title}</h1>
          <p className="text-lg text-slate-500">Effective from: {effectiveDate}</p>
        </div>
      </Section>
      <Section className="py-16">
        <div className="max-w-4xl mx-auto space-y-8 text-slate-700 leading-relaxed text-base">
          {children}
        </div>
      </Section>
    </div>
  );
}