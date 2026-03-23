"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from './ui/Button';

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Platform', path: '/platform' },
    { name: 'Process', path: '/process' },
    { name: 'Why Pre-Lit', path: '/why-pre-lit' },
    { name: 'Use Cases', path: '/use-cases' },
    { name: 'About', path: '/about' },
  ];

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-slate-200 z-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold tracking-tighter text-slate-900">
          Pre-Lit<span className="text-slate-400">.</span>
        </Link>
        
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              href={link.path} 
              className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>
        
        <div className="hidden md:block">
          <Button href="/contact" variant="primary">Contact Us</Button>
        </div>

        <button 
          className="md:hidden p-2 text-slate-600"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-6 py-4 space-y-4">
          {navLinks.map((link) => (
            <div key={link.path}>
              <Link 
                href={link.path} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-base font-medium text-slate-600 hover:text-slate-900"
              >
                {link.name}
              </Link>
            </div>
          ))}
          <div className="pt-4 border-t border-slate-100">
            <Button href="/contact" variant="primary" className="w-full" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Button>
          </div>
        </div>
      )}
    </header>
  );
}