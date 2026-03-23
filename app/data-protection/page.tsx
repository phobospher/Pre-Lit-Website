import React from 'react';
import { LegalDocument } from '@/components/ui/LegalDocument';

export default function DataProtection() {
  return (
    <LegalDocument title="Data Protection, Cybersecurity & Digital Operations Policy" effectiveDate="01-01-2026">
      <div>
        <h2 className="text-xl font-bold text-slate-900 mb-3">1. Purpose</h2>
        <p>This Policy establishes a unified framework for data protection, cybersecurity, electronic records, virtual hearings, and digital dispute resolution processes undertaken under PRE-LIT Online Dispute Resolution ("PRE-LIT") mechanisms. [cite: 203]</p>
      </div>
      <div>
        <h2 className="text-xl font-bold text-slate-900 mb-3">2. Scope</h2>
        <p className="mb-2">This Policy applies to: [cite: 205]</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>ODR administrators, neutrals, mediators, arbitrators, case managers, technical staff, and empanelled professionals [cite: 206]</li>
          <li>Parties to disputes, representatives, witnesses, experts, and third-party service providers [cite: 207]</li>
          <li>All personal, confidential, and sensitive data processed through the PRE-LIT ODR platform [cite: 208]</li>
          <li>All electronic records, virtual hearings, recordings, communications, and digital evidence [cite: 209]</li>
        </ul>
      </div>
      <div>
        <h2 className="text-xl font-bold text-slate-900 mb-3">3. Definitions</h2>
        <ul className="list-none space-y-2">
          <li><strong>Data Fiduciary:</strong> PRE-LIT ODR (platform operator / administering entity) [cite: 211]</li>
          <li><strong>ODR Participant:</strong> Parties, neutrals, representatives, or authorised users [cite: 212]</li>
          <li><strong>Personal Data:</strong> Any data about an identifiable individual [cite: 213]</li>
          <li><strong>Processing:</strong> Collection, storage, sharing, use, or deletion of data [cite: 214]</li>
          <li><strong>Electronic Record:</strong> Any record generated, stored, or transmitted electronically through the ODR system [cite: 215]</li>
        </ul>
      </div>
      {/* Continue applying the rest of the text from the single file here */}
      <p className="font-medium text-slate-900 mt-8">This Data Protection, Cybersecurity & Digital Operations Policy has been approved and adopted by PRE-LIT Online Dispute Resolution and shall come into force with immediate effect. [cite: 254]</p>
    </LegalDocument>
  );
}