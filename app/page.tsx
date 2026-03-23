import React from 'react';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Step } from '@/components/ui/Step';

export default function Home() {
  return (
    <div className="animate-in fade-in duration-500">
      <Section className="min-h-[85vh] flex items-center pt-32">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-semibold leading-tight tracking-tight mb-8 text-slate-900">
            Institutional dispute resolution, built for speed and enforceability.
          </h1>
          <p className="text-xl text-slate-600 mb-10 max-w-3xl leading-relaxed">
            Pre-Lit is an institutional ODR platform combining conciliation, mediation, and arbitration with technology-driven execution to deliver fast, transparent, and enforceable outcomes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button href="/contact">Request Demo</Button>
            <Button href="/process" variant="outline">View Process</Button>
          </div>
        </div>
      </Section>

      <Section background="light" className="py-12 md:py-16 border-y border-slate-200">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-slate-200">
          <div>
            <div className="text-3xl font-bold text-slate-900 mb-2">Institutional</div>
            <div className="text-sm text-slate-500 font-medium">Framework Design</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-slate-900 mb-2">Scalable</div>
            <div className="text-sm text-slate-500 font-medium">Technology Layer</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-slate-900 mb-2">Compliant</div>
            <div className="text-sm text-slate-500 font-medium">ACA 1996 Aligned</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-slate-900 mb-2">Enforceable</div>
            <div className="text-sm text-slate-500 font-medium">Legal Outcomes</div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-slate-900">Structured Resolution Flow</h2>
          <p className="text-lg text-slate-600 max-w-2xl">A deterministic, 6-step institutional process designed to transition contested matters into legally binding resolutions.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16">
          <Step number="01" title="Case intake & validation" description="Secure ingestion of case data and supporting documents via API or batch upload, followed by automated compliance validation." />
          <Step number="02" title="Notice issuance & initiation" description="Automated generation and multi-channel dispatch of legally compliant notices to all responding parties." />
          <Step number="03" title="Conciliation & outreach" description="Structured communication workflows aiming for early-stage settlement without proceeding to formal tribunals." />
          <Step number="04" title="Mediation layer" description="Engagement of neutral, empaneled experts to facilitate negotiated agreements between counterparties." />
          <Step number="05" title="Arbitration proceedings" description="Formal transition to arbitration under the ACA 1996, managed entirely through secure digital hearing rooms." />
          <Step number="06" title="Award & execution" description="Issuance of stamped, digitally signed arbitral awards, ready for execution in the appropriate judicial forum." />
        </div>
      </Section>

      <Section background="dark" className="text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-white">Standardize your legal recoveries today.</h2>
        <p className="text-slate-300 mb-10 max-w-2xl mx-auto text-lg">
          Deploy enterprise-grade dispute resolution infrastructure for your legal and collections teams.
        </p>
        <Button href="/contact" variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-slate-900">
          Schedule Consultation
        </Button>
      </Section>
    </div>
  );
}