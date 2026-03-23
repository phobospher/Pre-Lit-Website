import React from 'react';
import type { Metadata } from 'next';
import { LegalDocument } from '@/components/ui/LegalDocument';

export const metadata: Metadata = {
  title: 'Code of Conduct | Pre-Lit Institutional ODR',
  description: 'Code of Conduct, Conflict of Interest & Disclosure Policy.',
};

export default function CodeOfConduct() {
  return (
    <LegalDocument title="Code of Conduct, Conflict of Interest & Disclosure Policy" effectiveDate="01-01-2026">
      <div>
        <h2 className="text-xl font-bold text-slate-900 mb-3">1. PURPOSE & OBJECTIVE</h2>
        <p className="mb-2">This Policy sets out the ethical standards, conduct requirements, conflict of interest norms, and disclosure obligations applicable to all persons associated with PRE-LIT Online Dispute Resolution (ODR) ("PRE-LIT").</p>
        <p className="mb-2">The objective of this Policy is to:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Ensure independence, impartiality, integrity, and fairness in dispute resolution</li>
          <li>Comply with the Arbitration and Conciliation Act, 1996 (as amended)</li>
          <li>Maintain institutional credibility, transparency, and trust</li>
          <li>Prevent actual, potential, or perceived conflicts of interest</li>
        </ul>
      </div>
      
      <div>
        <h2 className="text-xl font-bold text-slate-900 mb-3">2. APPLICABILITY</h2>
        <p className="mb-2">This Policy applies to:</p>
        <ul className="list-disc pl-5 space-y-1 mb-4">
          <li>Arbitrators, Mediators, Conciliators, and Neutrals empanelled with PRE-LIT</li>
          <li>Presiding, Co-Arbitrators, Sole Arbitrators, and Emergency Arbitrators</li>
          <li>Case Managers, Officers, Employees, Consultants, and Interns of PRE-LIT</li>
          <li>Experts, Advisors, and Vendors engaged in proceedings administered by PRE-LIT</li>
        </ul>
        <p className="mb-2">Acceptance of any appointment or engagement with PRE-LIT constitutes deemed acceptance of this Policy.</p>
        <p>All third-party vendors shall be contractually bound to confidentiality, data protection, and neutrality obligations consistent with PRE-LIT policies.</p>
      </div>

      <div>
        <h2 className="text-xl font-bold text-slate-900 mb-3">3. CORE PRINCIPLES</h2>
        <p className="mb-2">All covered persons shall adhere to the following principles:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Independence & Impartiality</li>
          <li>Natural Justice & Equal Treatment</li>
          <li>Integrity & Professionalism</li>
          <li>Confidentiality & Data Protection</li>
          <li>Transparency & Accountability</li>
          <li>Efficiency & Timeliness</li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-bold text-slate-900 mb-3">4. CODE OF CONDUCT – ARBITRATORS & NEUTRALS</h2>
        <h3 className="text-lg font-semibold text-slate-900 mb-2">4.1 Independence and Impartiality</h3>
        <p className="mb-2">PRE-LIT shall operate as an administering institution. It strictly prohibits any client, user, or repeat appointing party from exerting influence over the appointment, procedural conduct, or substantive decision-making of any Neutral. Every Arbitrator and Neutral shall maintain absolute independence and impartiality throughout the proceedings, exercising judgment free from bias or external influence while ensuring equal treatment of all parties.</p>
        <p className="mb-4">All arbitral awards and settlement decisions are rendered independently by the appointed Neutrals. The PRE-LIT Secretariat’s role is limited to administrative coordination and the formal scrutiny of awards; it shall not interfere with the merits of any dispute. While the PRE-LIT ODR Platform facilitates a transparent process, the institution does not guarantee specific legal outcomes or the success of any party’s claims.</p>
        
        <h3 className="text-lg font-semibold text-slate-900 mb-2">4.2 Disclosure Obligations</h3>
        <p className="mb-2">Arbitrators shall make full, continuous, and timely disclosures of any circumstances that may give rise to justifiable doubts as to their independence or impartiality, in accordance with:</p>
        <ul className="list-disc pl-5 space-y-1 mb-2">
          <li>Section 12 of the Arbitration and Conciliation Act, 1996</li>
          <li>Fifth and Seventh Schedules to the Act</li>
          <li>PRE-LIT Disclosure Requirements</li>
        </ul>
        <p className="mb-4">Arbitrators must specifically confirm that they are not ineligible under the Seventh Schedule of the Act to act as an arbitrator, unless such ineligibility is waived by the parties in writing after the dispute has arisen.</p>

        <h3 className="text-lg font-semibold text-slate-900 mb-2">4.3 Fair Conduct of Proceedings</h3>
        <p className="mb-4">Provide equal opportunity to all parties to present their case, avoid unnecessary adjournments and to Conduct proceedings efficiently and proportionately.</p>

        <h3 className="text-lg font-semibold text-slate-900 mb-2">4.4 Prohibition on Improper Conduct</h3>
        <p className="mb-4">Arbitrators shall not Seek or accept any gift, benefit, inducement, or hospitality from parties and do not delegate decision-making responsibilities.</p>

        <h3 className="text-lg font-semibold text-slate-900 mb-2">4.5 Competence & Diligence</h3>
        <p className="mb-4">Arbitrators shall accept appointments only when they possess the required expertise, availability, and ability to complete proceedings within prescribed timelines.</p>
      </div>

      <div>
        <h2 className="text-xl font-bold text-slate-900 mb-3">5. CODE OF CONDUCT – PRE-LIT STAFF & CASE MANAGERS</h2>
        <p className="mb-2">Neutrality, Non-Interference, Confidentiality & Professional Behaviour</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Staff shall act in a neutral, non-adjudicatory, and professional manner at all times.</li>
          <li>Staff shall not influence arbitral decision-making or provide legal advice to parties.</li>
          <li>Staff shall maintain strict confidentiality of all case-related information.</li>
          <li>Staff shall avoid conflicts of interest, misuse of information, or any conduct that may compromise PRE-LIT’s independence.</li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-bold text-slate-900 mb-3">6. CONFLICT OF INTEREST POLICY</h2>
        <h3 className="text-lg font-semibold text-slate-900 mb-2">6.1 Definition</h3>
        <p className="mb-4">A conflict of interest includes any financial, personal, or business relationship that could impair or reasonably appear to impair independence or objectivity.</p>

        <h3 className="text-lg font-semibold text-slate-900 mb-2">6.2 Mandatory Disclosure</h3>
        <p className="mb-4">All conflicts including direct and existing conflict, possible conflict arising in future or Circumstances creating an appearance of bias must be disclosed promptly in writing to PRE-LIT.</p>

        <h3 className="text-lg font-semibold text-slate-900 mb-2">6.3 Prohibited Conflicts</h3>
        <p className="mb-4">Arbitrators’ ineligible under the Seventh Schedule of the Arbitration Act shall not be appointed.</p>
      </div>

      <div>
        <h2 className="text-xl font-bold text-slate-900 mb-3">7. DISCLOSURE POLICY</h2>
        <p>At the time of appointment, prior to accepting appointment or on a continuous basis if circumstances change disclosures shall be made in writing using PRE-LIT’s Section 12 Disclosure Form.</p>
      </div>

      <div>
        <h2 className="text-xl font-bold text-slate-900 mb-3">8. CONFIDENTIALITY & DATA PROTECTION</h2>
        <ul className="list-disc pl-5 space-y-1 mb-4">
          <li>All proceedings, documents, communications, deliberations, and awards are confidential</li>
          <li>Information shall not be disclosed except as required by law or with party consent</li>
          <li>Digital data shall be handled in accordance with PRE-LIT’s Information Security and Privacy Policies</li>
        </ul>
        <p>PRE-LIT shall ensure that all data processed on the ODR Platform complies with the Digital Personal Data Protection Act. Parties have the right to request the deletion of their personal data upon the final conclusion of the proceedings, subject to statutory record-keeping requirements.</p>
      </div>

      <div>
        <h2 className="text-xl font-bold text-slate-900 mb-3">9. BREACH & DISCIPLINARY ACTION</h2>
        <h3 className="text-lg font-semibold text-slate-900 mb-2">9.1 Reporting of Breach</h3>
        <p className="mb-4">Any breach of this Policy may be reported to PRE-LIT in writing.</p>

        <h3 className="text-lg font-semibold text-slate-900 mb-2">9.2 Disciplinary Measures</h3>
        <p className="mb-2">PRE-LIT may impose:</p>
        <ul className="list-disc pl-5 space-y-1 mb-2">
          <li>Warning or censure</li>
          <li>Suspension or removal from panel</li>
          <li>Termination of engagement</li>
        </ul>
        <p className="mb-4">Such action shall be without prejudice to remedies under law.</p>
      </div>

      <div>
        <h2 className="text-xl font-bold text-slate-900 mb-3">10. Review & Amendments</h2>
        <p>This Policy shall be reviewed annually or upon changes in law, technology, or ODR operational requirements.</p>
      </div>

      <div>
        <h2 className="text-xl font-bold text-slate-900 mb-3">RULE 11: GRIEVANCE REDRESSAL MECHANISM</h2>
        <ul className="list-none space-y-2 mb-6">
          <li><strong>11.1 Objective:</strong> To resolve complaints regarding professional misconduct, ethical breaches, or administrative failures by PRE-LIT Neutrals or the Secretariat.</li>
          <li><strong>11.2 Submission:</strong> Complaints must be emailed to info@prelit.in within 30 days of the incident, including the Complainant’s details, Case ID, and evidence of the breach.</li>
          <li><strong>11.3 Timelines:</strong> Receipt is acknowledged within 48 hours. A final decision is rendered by the Grievance Committee within 30 days (extendable by 15 days for complex matters).</li>
          <li><strong>11.4 Outcomes:</strong> Proven misconduct may result in a formal warning, temporary suspension, or permanent removal from the PRE-LIT panel. Vexatious claims will be dismissed.</li>
          <li><strong>11.5 Appeals:</strong> Parties may file a Request for Reconsideration with the PRE-LIT Board of Directors within 15 days of the decision.</li>
        </ul>
        <p className="font-medium text-slate-900 mt-6">This Code of Conduct, Conflict of Interest & Disclosure Policy has been approved and adopted by PRE-LIT Online Dispute Resolution and shall come into force with immediate effect.</p>
      </div>
    </LegalDocument>
  );
}