import React from 'react';
import type { Metadata } from 'next';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'Platform | Pre-Lit Institutional ODR',
  description: 'Enterprise architecture engineered to manage high-volume dispute resolution with uncompromising data security and auditability.',
};

export default function Platform() {
  return (
    <div className="animate-in fade-in duration-500">
      <Section background="light" className="border-b border-slate-200 pt-32 pb-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-semibold mb-6 text-slate-900">Platform Overview</h1>
          <p className="text-xl text-slate-600">Enterprise architecture engineered to manage high-volume dispute resolution with uncompromising data security and auditability.</p>
        </div>
      </Section>

      <Section>
        <h2 className="text-3xl font-semibold mb-12 text-slate-900">Core Capabilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card 
            title="Case Lifecycle Management" 
            description="End-to-end tracking from ingestion to final award. Maintain a unified, immutable ledger of all case activities, document uploads, and party interactions."
          />
          <Card 
            title="Communication Engine" 
            description="Omnichannel notice delivery via SMS, Email, and WhatsApp with integrated tracking, ensuring verifiable proof of service for legal compliance."
          />
          <Card 
            title="Workflow Automation" 
            description="Rule-based transitions between conciliation, mediation, and arbitration phases, removing manual bottlenecks and enforcing standard operating procedures."
          />
          <Card 
            title="Arbitration Management" 
            description="Secure digital hearing rooms, transcript management, and evidence presentation interfaces designed specifically for remote arbitral proceedings."
          />
          <Card 
            title="MIS & Reporting" 
            description="Real-time institutional dashboards providing granular visibility into recovery rates, arbitrator performance, and timeline adherence."
          />
        </div>
      </Section>
    </div>
  );
}