"use client";

import React from 'react';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Inquiry submitted successfully. Our team will reach out shortly.");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="animate-in fade-in duration-500">
      <Section background="light" className="min-h-[85vh] pt-32">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h1 className="text-4xl md:text-5xl font-semibold mb-6 text-slate-900">Get in touch</h1>
            <p className="text-lg text-slate-600 mb-8">
              Discuss how Pre-Lit can standardize and accelerate your institutional dispute resolution workflows.
            </p>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-1">Email</h4>
                <a href="mailto:info@pre-lit.in" className="text-xl text-slate-900 hover:underline">info@pre-lit.in</a>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-1">Headquarters</h4>
                <p className="text-lg text-slate-900">
                  407, KG Marg, Barakhamba<br/>
                  New Delhi, Delhi 110001<br/>
                  India
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 border border-slate-200 shadow-sm">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                <input type="text" id="name" className="w-full px-4 py-3 border border-slate-300 rounded-none focus:ring-2 focus:ring-slate-900 focus:border-slate-900 outline-none transition-colors" placeholder="Jane Doe" required />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Organization Email</label>
                <input type="email" id="email" className="w-full px-4 py-3 border border-slate-300 rounded-none focus:ring-2 focus:ring-slate-900 focus:border-slate-900 outline-none transition-colors" placeholder="jane@institution.com" required />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                <textarea id="message" rows={4} className="w-full px-4 py-3 border border-slate-300 rounded-none focus:ring-2 focus:ring-slate-900 focus:border-slate-900 outline-none transition-colors" placeholder="How can we help?" required></textarea>
              </div>
              <Button type="submit" className="w-full">Submit Inquiry</Button>
            </form>
          </div>
        </div>
      </Section>
    </div>
  );
}