import React from 'react';
import type { Metadata } from 'next';
import { Section } from '@/components/ui/Section';

export const metadata: Metadata = {
  title: 'About | Pre-Lit Institutional ODR',
  description: 'Pioneering institutional infrastructure for the future of Indian dispute resolution.',
};

export default function About() {
  return (
    <div className="animate-in fade-in duration-500">
      <Section background="light" className="border-b border-slate-200 pt-32 pb-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-semibold mb-6 text-slate-900">About Pre-Lit</h1>
          <p className="text-xl text-slate-600">Pioneering institutional infrastructure for the future of Indian dispute resolution.</p>
        </div>
      </Section>

      <Section>
        <div className="max-w-4xl space-y-16">
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-slate-900">Our Vision</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              We believe that justice delayed is commerce denied. Pre-Lit was founded to bridge the gap between traditional legal rigor and modern technological scale. By institutionalizing the ODR process, we aim to clear the backlog of commercial disputes in India, providing businesses with the certainty they need to operate and grow.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-6 text-slate-900">The Network</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Technology is only as effective as the minds wielding it. Pre-Lit maintains a stringent empanelment process for our neutral professionals.
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <li className="border-t border-slate-200 pt-4">
                <span className="block font-semibold text-slate-900 mb-1">Arbitrators</span>
                <span className="text-sm text-slate-600">Retired High Court & Supreme Court Justices, Senior Advocates.</span>
              </li>
              <li className="border-t border-slate-200 pt-4">
                <span className="block font-semibold text-slate-900 mb-1">Mediators</span>
                <span className="text-sm text-slate-600">Certified professionals specialized in commercial negotiation.</span>
              </li>
              <li className="border-t border-slate-200 pt-4">
                <span className="block font-semibold text-slate-900 mb-1">Case Managers</span>
                <span className="text-sm text-slate-600">Dedicated legal officers ensuring procedural compliance.</span>
              </li>
            </ul>
          </div>
        </div>
      </Section>
    </div>
  );
}