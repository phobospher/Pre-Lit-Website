import React from 'react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-5 gap-12">
        <div className="col-span-1 md:col-span-2">
          <Link href="/" className="text-2xl font-bold tracking-tighter text-white mb-6 inline-block">
            Pre-Lit<span className="text-slate-500">.</span>
          </Link>
          <p className="text-slate-400 max-w-sm text-sm leading-relaxed mb-6">
            Institutional dispute resolution, built for speed and enforceability. Standardizing conciliation, mediation, and arbitration through technology.
          </p>
          <p className="text-slate-400 max-w-sm text-sm leading-relaxed">
            <strong className="text-slate-300">Headquarters:</strong><br />
            407, KG Marg, Barakhamba,<br />
            New Delhi, Delhi 110001
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-slate-300">Platform</h4>
          <ul className="space-y-3">
            <li><Link href="/platform" className="text-sm text-slate-400 hover:text-white transition-colors">Capabilities</Link></li>
            <li><Link href="/process" className="text-sm text-slate-400 hover:text-white transition-colors">The Process</Link></li>
            <li><Link href="/use-cases" className="text-sm text-slate-400 hover:text-white transition-colors">Use Cases</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-slate-300">Company</h4>
          <ul className="space-y-3">
            <li><Link href="/about" className="text-sm text-slate-400 hover:text-white transition-colors">About Us</Link></li>
            <li><Link href="/why-pre-lit" className="text-sm text-slate-400 hover:text-white transition-colors">Why Pre-Lit</Link></li>
            <li><Link href="/contact" className="text-sm text-slate-400 hover:text-white transition-colors">Contact</Link></li>
            <li><a href="mailto:info@pre-lit.in" className="text-sm text-slate-400 hover:text-white transition-colors">info@pre-lit.in</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-slate-300">Legal</h4>
          <ul className="space-y-3">
            <li><Link href="/rules" className="text-sm text-slate-400 hover:text-white transition-colors">PRE-LIT Rules</Link></li>
            <li><Link href="/data-protection" className="text-sm text-slate-400 hover:text-white transition-colors">Data Protection</Link></li>
            <li><Link href="/code-of-conduct" className="text-sm text-slate-400 hover:text-white transition-colors">Code of Conduct</Link></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-16 pt-8 border-t border-slate-800 text-sm text-slate-500">
        © {new Date().getFullYear()} Pre-Lit Institutional ODR. All rights reserved.
      </div>
    </footer>
  );
}