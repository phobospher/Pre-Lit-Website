import React from 'react';
import type { Metadata } from 'next';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'Why Pre-Lit | Pre-Lit Institutional ODR',
  description: 'Moving beyond fragmented software to provide true institutional resolution infrastructure.',
};

export default function WhyPreLit() {
  return (
    <div className="animate-in fade-in duration-500">
      <Section background="light" className="border-b border-slate-200 pt-32 pb-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-semibold mb-6 text-slate-900">Why Pre-Lit</h1>
          <p className="text-xl text-slate-600">Moving beyond fragmented software to provide true institutional resolution infrastructure.</p>
        </div>
      </Section>

      <Section>
        <div className="mb-16">
          <h2 className="text-3xl font-semibold mb-6 text-slate-900">Differentiators</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <Card 
              title="Institutional Approach" 
              description="Unlike purely software-as-a-service models, Pre-Lit acts as an administering institution, providing procedural certainty, established rules, and quality control over the arbitral process."
            />
            <Card 
              title="Resolution-First Model" 
              description="Our workflows are optimized not just to host hearings, but to actively drive settlements early in the lifecycle through dedicated conciliation and mediation layers."
            />
            <Card 
              title="Technology + Human Expertise" 
              description="A robust digital platform coupled with a highly vetted, pan-India network of retired judges, senior advocates, and domain-expert arbitrators."
            />
            <Card 
              title="Designed for Scale" 
              description="Engineered to process thousands of simultaneous matters without degradation in procedural quality or statutory compliance, essential for modern retail portfolios."
            />
          </div>
        </div>
      </Section>
    </div>
  );
}