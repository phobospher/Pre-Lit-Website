import React from 'react';
import type { Metadata } from 'next';
import { Section } from '@/components/ui/Section';

export const metadata: Metadata = {
  title: 'Use Cases | Pre-Lit Institutional ODR',
  description: 'Tailored resolution strategies for high-volume, institutional stakeholders.',
};

export default function UseCases() {
  return (
    <div className="animate-in fade-in duration-500">
      <Section background="light" className="border-b border-slate-200 pt-32 pb-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-semibold mb-6 text-slate-900">Use Cases</h1>
          <p className="text-xl text-slate-600">Tailored resolution strategies for high-volume, institutional stakeholders.</p>
        </div>
      </Section>

      <Section>
        <div className="space-y-16">
          <div className="border-b border-slate-200 pb-12">
            <h2 className="text-2xl font-semibold mb-4 text-slate-900">Banks & NBFCs</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-medium text-slate-900 mb-2">The Problem</h4>
                <p className="text-slate-600 text-sm leading-relaxed">High-volume retail loan defaults create a massive backlog. Traditional civil litigation is too slow, and physical arbitration is logistically impossible at scale.</p>
              </div>
              <div>
                <h4 className="font-medium text-slate-900 mb-2">The Pre-Lit Solution</h4>
                <p className="text-slate-600 text-sm leading-relaxed">Batch-upload default portfolios. Pre-Lit automates notice generation, initiates simultaneous conciliation, and seamlessly transitions unresolved matters to digital arbitration, delivering executable awards within 90 days.</p>
              </div>
            </div>
          </div>

          <div className="border-b border-slate-200 pb-12">
            <h2 className="text-2xl font-semibold mb-4 text-slate-900">Fintech Lenders</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-medium text-slate-900 mb-2">The Problem</h4>
                <p className="text-slate-600 text-sm leading-relaxed">Small ticket sizes mean traditional legal recovery costs exceed the principal outstanding, leading to write-offs.</p>
              </div>
              <div>
                <h4 className="font-medium text-slate-900 mb-2">The Pre-Lit Solution</h4>
                <p className="text-slate-600 text-sm leading-relaxed">API-driven ingestion directly from loan management systems. Low-cost, high-efficiency digital mediation prioritizes rapid settlement, preserving unit economics.</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4 text-slate-900">Enterprise Legal Teams</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-medium text-slate-900 mb-2">The Problem</h4>
                <p className="text-slate-600 text-sm leading-relaxed">Managing distributed vendor, supplier, and franchise disputes across multiple jurisdictions with fragmented documentation and external counsel.</p>
              </div>
              <div>
                <h4 className="font-medium text-slate-900 mb-2">The Pre-Lit Solution</h4>
                <p className="text-slate-600 text-sm leading-relaxed">A centralized command center. Standardized arbitration clauses route all commercial disputes to the Pre-Lit institutional framework, ensuring uniform procedural handling and centralized MIS tracking.</p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}