import React from 'react';
import type { Metadata } from 'next';
import { Section } from '@/components/ui/Section';

export const metadata: Metadata = {
  title: 'Process | Pre-Lit Institutional ODR',
  description: 'A deterministic timeline ensuring fast, enforceable outcomes compliant with Indian jurisprudence.',
};

export default function Process() {
  return (
    <div className="animate-in fade-in duration-500">
      <Section background="light" className="border-b border-slate-200 pt-32 pb-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-semibold mb-6 text-slate-900">The Resolution Process</h1>
          <p className="text-xl text-slate-600">A deterministic timeline ensuring fast, enforceable outcomes compliant with Indian jurisprudence.</p>
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-semibold mb-8 text-slate-900">Full Lifecycle Timeline (~90 Days)</h2>
            <div className="space-y-8 border-l-2 border-slate-900 pl-8 ml-4 relative">
              <div>
                <span className="absolute -left-3 top-1 w-6 h-6 rounded-full bg-slate-900 border-4 border-white"></span>
                <h3 className="text-xl font-medium mb-2 text-slate-900">Days 0-15: Pre-Institution</h3>
                <p className="text-slate-600">Data ingestion, conflict checks, and issuance of initial notices. Conciliation efforts commence to establish contact with the respondent.</p>
              </div>
              <div>
                <span className="absolute -left-3 top-1 w-6 h-6 rounded-full bg-slate-900 border-4 border-white"></span>
                <h3 className="text-xl font-medium mb-2 text-slate-900">Days 16-45: Mediation & Negotiation</h3>
                <p className="text-slate-600">Empaneled mediators facilitate structured dialogue. If settlement is reached, terms are drafted and executed. If not, formal Notice of Arbitration is issued.</p>
              </div>
              <div>
                <span className="absolute -left-3 top-1 w-6 h-6 rounded-full bg-slate-900 border-4 border-white"></span>
                <h3 className="text-xl font-medium mb-2 text-slate-900">Days 46-75: Arbitral Proceedings</h3>
                <p className="text-slate-600">Tribunal constitution. Submission of Statement of Claim and Defense. Conduct of digital hearings and evidence examination.</p>
              </div>
              <div>
                <span className="absolute -left-3 top-1 w-6 h-6 rounded-full bg-slate-900 border-4 border-white"></span>
                <h3 className="text-xl font-medium mb-2 text-slate-900">Days 76-90: Award & Execution</h3>
                <p className="text-slate-600">Closure of hearings. Drafting and digital signing of the Arbitral Award. Dispatch of stamped award copies for civil court execution.</p>
              </div>
            </div>
          </div>
          
          <div className="bg-slate-50 p-8 border border-slate-200 self-start">
            <h3 className="text-xl font-semibold mb-4 text-slate-900">Statutory Compliance</h3>
            <p className="text-slate-600 mb-6 text-sm leading-relaxed">
              The Pre-Lit process is strictly governed by the <strong className="text-slate-900">Arbitration and Conciliation Act, 1996</strong> (and subsequent amendments). 
            </p>
            <ul className="space-y-3 text-sm text-slate-600">
              <li className="flex items-start">
                <span className="mr-2 text-slate-900 font-bold">•</span> Validated electronic signatures (IT Act, 2000).
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-slate-900 font-bold">•</span> Legally recognized proof of digital service.
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-slate-900 font-bold">•</span> Stamping and execution readiness across Indian jurisdictions.
              </li>
            </ul>
          </div>
        </div>
      </Section>
    </div>
  );
}