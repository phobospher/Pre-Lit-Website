import React from 'react';
import type { Metadata } from 'next';
import { LegalDocument } from '@/components/ui/LegalDocument';

export const metadata: Metadata = {
  title: 'PRE-LIT Rules | Pre-Lit Institutional ODR',
  description: 'Official PRE-LIT Online Dispute Resolution Rules.',
};

export default function Rules() {
  return (
    <LegalDocument title="PRE-LIT Online Dispute Resolution Rules" effectiveDate="01-01-2026">
      <div>
        <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b pb-2">CHAPTER I: INTRODUCTORY RULES</h2>
        <h3 className="text-lg font-semibold text-slate-900 mb-2">Rule 1: Nature & Scope</h3>
        <ul className="list-none space-y-2 mb-6">
          <li><strong>1.1</strong> These Rules shall be called the PRE-LIT Arbitration Rules ("Rules").</li>
          <li><strong>1.2</strong> These Rules apply where parties have agreed, before or after a dispute has arisen, to submit disputes to PRE-LIT Online Dispute Resolution("PRE-LIT") for arbitration, mediation and conciliation.</li>
          <li><strong>1.3</strong> These Rules shall apply to all arbitrations commenced on or after their date of adoption unless otherwise agreed by the parties.</li>
          <li><strong>1.4</strong> Reference to arbitration under PRE-LIT shall be deemed to incorporate these Rules by reference.</li>
          <li><strong>1.5</strong> In the event of conflict between these Rules and any mandatory provision of applicable law, such mandatory provision shall prevail as per Arbitration and Conciliation Act,1996 (as amended) and Mediation Act 2023.</li>
        </ul>
        
        <h3 className="text-lg font-semibold text-slate-900 mb-2">Rule 2: Definitions</h3>
        <p className="mb-2">Unless the context otherwise requires:</p>
        <ul className="list-none space-y-2 mb-6">
          <li><strong>"Act"</strong> means the Arbitration and Conciliation Act, 1996 (as amended).</li>
          <li><strong>"Arbitral Tribunal" or "Tribunal"</strong> means a sole arbitrator or a panel of arbitrators.</li>
          <li><strong>"Arbitration Agreement"</strong> means a written agreement between both Claimant and Respondent.</li>
          <li><strong>"Award"</strong> means any final, interim, or consent award of the Tribunal.</li>
          <li><strong>"Case"</strong> means the workspace created with a unique case id, on the PRE-LIT ODR Platform.</li>
          <li><strong>"Claimant"</strong> means the party initiating arbitration.</li>
          <li><strong>"Respondents"</strong> means the party against whom claims are made.</li>
          <li><strong>"Neutral"</strong> means an arbitrator, mediator or conciliator appointed under these Rules.</li>
          <li><strong>"Secretariat"</strong> means PRE-LIT administrative and technical personnel responsible for coordinating the arbitration.</li>
          <li><strong>"ODR Platform"</strong> means the secure electronic platform designated by PRE-LIT.</li>
          <li><strong>"PRE-LIT"</strong> means PRE-LIT Online Dispute Resolution and its administering entity.</li>
          <li><strong>"Proceedings"</strong> mean arbitration conducted online, virtually, physically, or in hybrid mode.</li>
          <li><strong>"Electronic Signature"</strong> means data in electronic form, used to identify a signer and acknowledge content.</li>
          <li><strong>"Lawyer"</strong> refers to an advocate or legal practitioner licensed to practice in a recognized jurisdiction.</li>
          <li><strong>"Seat of Arbitration"</strong> means the legal jurisdiction determined under Rule 16 unless otherwise agreed.</li>
          <li><strong>"ODR Platform Failure"</strong> means any temporary or permanent disruption of electronic systems due to technical, network, or cybersecurity issues.</li>
          <li><strong>"Data Protection Laws"</strong> means the Digital Personal Data Protection Act, 2023 and applicable international data protection laws.</li>
          <li><strong>"Costs"</strong> includes tribunal fees, administrative fees, legal costs, expert costs, and other arbitration-related expenses.</li>
        </ul>

        <h3 className="text-lg font-semibold text-slate-900 mb-2">Rule 3: Interpretation</h3>
        <ul className="list-disc pl-5 space-y-1 mb-8">
          <li>Words in the singular include the plural and vice versa; words of any gender include all genders.</li>
          <li>Headings are for convenience only and shall not affect interpretation.</li>
        </ul>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b pb-2">CHAPTER II: COMMENCEMENT, SERVICE & RESPONSE</h2>
        <h3 className="text-lg font-semibold text-slate-900 mb-2">Rule 4: Commencement of Arbitration</h3>
        <ul className="list-none space-y-2 mb-6">
          <li><strong>4.1</strong> The Claimant shall submit a Request for Arbitration to the PRE-LIT Secretariat via email or designated ODR Platform or any other mode specified by PRE-LIT.</li>
          <li><strong>4.2</strong> The Request shall include:
            <ol className="list-[lower-alpha] pl-5 mt-1 space-y-1">
              <li>a demand for arbitration;</li>
              <li>details of the arbitration agreement or confirmation of a submission agreement;</li>
              <li>names and contact details of parties and representatives;</li>
              <li>a summary of the dispute with estimated monetary value;</li>
              <li>confirmation of payment of fees per PRE-LIT Schedule of Fees as agreed.</li>
            </ol>
          </li>
          <li><strong>4.3</strong> The date of receipt of a valid Request by the Secretariat shall be deemed the commencement of arbitration.</li>
          <li><strong>4.4</strong> The Secretariat shall create a Case with specific Case ID on the ODR Platform and provide secure access to the Claimant.</li>
        </ul>

        <h3 className="text-lg font-semibold text-slate-900 mb-2">Rule 5: Service of Notice</h3>
        <ul className="list-none space-y-2 mb-6">
          <li><strong>5.1</strong> The Secretariat shall serve notice of arbitration on the Respondent using electronic modes, including but not limited to registered email, SMS, and instant messaging applications (e.g., WhatsApp). Service shall be deemed effective once a 'delivered' status is confirmed by the platform, basis service reports.</li>
          <li><strong>5.2</strong> Proof of service shall be digitally preserved on the ODR Platform.</li>
          <li><strong>5.3</strong> Refusal or failure to respond may result in ex-parte proceedings, provided the Tribunal is satisfied that service was validly effected and reasonable opportunity was afforded, subject to applicable law.</li>
          <li><strong>5.4</strong> The Arbitral Tribunal shall, before proceeding ex-parte, that service was reasonably effected and that the Respondent was afforded a fair opportunity to participate.</li>
        </ul>

        <h3 className="text-lg font-semibold text-slate-900 mb-2">Rule 6: Response & Counterclaims</h3>
        <ul className="list-none space-y-2 mb-8">
          <li><strong>6.1</strong> The Respondent shall submit a Response within the time prescribed by the Tribunal or Secretariat.</li>
          <li><strong>6.2</strong> The Response may include:
            <ol className="list-[lower-alpha] pl-5 mt-1 space-y-1">
              <li>confirmation or denial of claims;</li>
              <li>counterclaims;</li>
              <li>details of parties and representatives;</li>
            </ol>
          </li>
          <li><strong>6.3</strong> Extensions may be granted at the discretion of the Tribunal.</li>
        </ul>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b pb-2">CHAPTER III: ARBITRAL TRIBUNAL & EMERGENCY ARBITRATOR</h2>
        <h3 className="text-lg font-semibold text-slate-900 mb-2">Rule 7: Appointment of Arbitrators</h3>
        <ul className="list-none space-y-2 mb-6">
          <li><strong>7.1</strong> Unless agreed otherwise, PRE-LIT shall appoint a sole arbitrator.</li>
          <li><strong>7.2 Appointment Criteria and Methodology:</strong><br/>
            The Secretariat shall appoint Arbitrators ("Neutrals") based on an evaluation of their requisite expertise, professional experience, independence, and impartiality relative to the specific nature of the dispute. In exercising its appointment power, the Secretariat shall give due weight to:
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>The Arbitrator’s availability to ensure the expeditious conduct of proceedings;</li>
              <li>Specific technical or legal qualifications mandated by the parties' arbitration agreement; and</li>
              <li>The language and nationality of the parties, where such factors are deemed relevant to the neutrality or efficiency of the process.</li>
            </ul>
            <p className="mt-2">PRE-LIT may utilize algorithmic tools to suggest or assign Neutrals based on dispute complexity, neutral expertise, and availability. All such allocations shall be subject to human oversight to ensure compliance with the Fifth and Seventh Schedules of the Act. This optimization process is designed to enhance the neutrality of appointments and to safeguard the procedural integrity of the arbitration.</p>
          </li>
        </ul>

        <h3 className="text-lg font-semibold text-slate-900 mb-2">Rule 8: Disclosure, Challenge & Replacement</h3>
        <ul className="list-none space-y-2 mb-6">
          <li><strong>8.1</strong> Arbitrators must disclose circumstances affecting independence or impartiality.</li>
          <li><strong>8.2</strong> Parties may challenge arbitrators within the prescribed time.</li>
          <li><strong>8.3</strong> Arbitrator shall decide challenges in accordance with law and recuse himself/herself if required.</li>
          <li><strong>8.4</strong> Upon such recusal, Secretariat to appoint or replace the arbitrator.</li>
        </ul>

        <h3 className="text-lg font-semibold text-slate-900 mb-2">Rule 10: Emergency Arbitrator</h3>
        <ul className="list-none space-y-2 mb-8">
          <li><strong>10.1</strong> Parties may request urgent interim measures before tribunal constitution.</li>
          <li><strong>10.2</strong> Secretariat appoints Emergency Arbitrator within 24 hours.</li>
          <li><strong>10.3</strong> Emergency Arbitrator’s orders are binding subject to Tribunal review.</li>
          <li><strong>10.4</strong> Parties may approach courts for interim measures in addition.</li>
          <li><strong>10.5</strong> The Emergency Arbitrator shall render the interim order within 14 days from the date of their appointment. This timeline may be extended by the Secretariat only in exceptional circumstances.</li>
          <li><strong>10.6</strong> The order of the Emergency Arbitrator shall be deemed to be an interim measure under Section 17(1) of the Act, subject to applicable judicial interpretation and enforceability under Indian law.</li>
        </ul>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b pb-2">CHAPTER IV: JURISDICTION, PROCEDURE & INTERIM MEASURES</h2>
        <h3 className="text-lg font-semibold text-slate-900 mb-2">Rule 11: Jurisdiction & Validity</h3>
        <p className="mb-4">Tribunal may rule on its own jurisdiction and the validity of the arbitration agreement.</p>

        <h3 className="text-lg font-semibold text-slate-900 mb-2">Rule 12: Interim Measures</h3>
        <p className="mb-4">Tribunal or Emergency Arbitrator may grant interim relief; parties may seek judicial assistance where allowed by law.</p>

        <h3 className="text-lg font-semibold text-slate-900 mb-2">Rule 13: Preliminary Meeting & Procedural Timetable</h3>
        <p className="mb-2">Tribunal shall conduct a preliminary meeting to establish:</p>
        <ul className="list-disc pl-5 mb-4 space-y-1">
          <li>procedural timetable</li>
          <li>terms of reference (if requested)</li>
          <li>authority of representatives</li>
        </ul>

        <h3 className="text-lg font-semibold text-slate-900 mb-2">Rule 14: Pleadings, Evidence, Hearings & Conduct of Proceedings</h3>
        <ul className="list-disc pl-5 space-y-1 mb-8">
          <li>Claimant submits Statement of Claim; Respondent submits Statement of Defence and Counterclaims.</li>
          <li>Additional pleadings may be ordered by the Tribunal.</li>
          <li>Tribunal decides admissibility, relevance, weight of evidence.</li>
          <li>Hearings may be virtual, physical, or hybrid.</li>
          <li>Recordings require Tribunal consent; parties may not independently record.</li>
          <li>Tribunal ensures proceedings are fair, efficient, and proportionate.</li>
          <li>Tribunal may impose sanctions for failure to comply with rules or directions.</li>
          <li>All submissions may use digital/electronic signatures.</li>
        </ul>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b pb-2">CHAPTER V: CONFIDENTIALITY, SEAT & REPRESENTATION</h2>
        <h3 className="text-lg font-semibold text-slate-900 mb-2">Rule 15: Confidentiality</h3>
        <p className="mb-2">All proceedings, documents, and awards are confidential unless law requires disclosure.</p>
        <p className="mb-4">PRE-LIT shall process and store data in compliance with applicable Data Protection Laws. Parties consent to electronic storage and transmission of data on secure servers, including cross-border data transfer where applicable.</p>

        <h3 className="text-lg font-semibold text-slate-900 mb-2">Rule 16: Representation & Language</h3>
        <ul className="list-disc pl-5 space-y-1 mb-8">
          <li>Parties may be represented by authorized lawyers or representatives.</li>
          <li>Parties must notify Tribunal and Secretariat of any changes.</li>
          <li>Language of proceedings: English.</li>
        </ul>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b pb-2">CHAPTER VI: AWARDS, SETTLEMENT & TERMINATION</h2>
        <h3 className="text-lg font-semibold text-slate-900 mb-2">Rule 17: Awards, Correction, Interpretation & Additional Awards</h3>
        <ul className="list-disc pl-5 space-y-1 mb-4">
          <li>Awards shall be reasoned, in writing, and signed electronically.</li>
          <li>Tribunal aims to issue awards within statutory timelines.</li>
          <li>Secretariat review shall be limited to form, clerical accuracy, and enforceability and shall not extend to merits.</li>
          <li>Parties may request corrections or interpretation within 14 days.</li>
          <li>Tribunal may issue additional awards for omitted claims.</li>
          <li>Digital/Electronic signatures shall comply with the Information Technology Act, 2000 and applicable electronic signature standards.</li>
        </ul>

        <h3 className="text-lg font-semibold text-slate-900 mb-2">Rule 18: Settlement & Consent Awards</h3>
        <p className="mb-4">Settlements may be recorded as consent awards.</p>

        <h3 className="text-lg font-semibold text-slate-900 mb-2">Rule 19: Termination of Proceedings</h3>
        <p className="mb-4">Proceedings terminate upon settlement, withdrawal, or Tribunal declaration.</p>

        <h3 className="text-lg font-semibold text-slate-900 mb-2">Rule 20: Costs & Fees</h3>
        <ul className="list-disc pl-5 space-y-1 mb-8">
          <li>The Arbitral Tribunal's fees shall be strictly in accordance with the PRE-LIT Schedule of Fees as agreed. The Tribunal shall not enter into any direct fee negotiations with the parties.</li>
          <li>The Mediator fees shall be strictly in accordance with the PRE-LIT Schedule of Fees as agreed. The Mediator shall not enter into any direct fee negotiations with the parties.</li>
          <li>The Conciliator fees shall be strictly in accordance with the PRE-LIT Schedule of Fees as agreed. The Conciliator shall not enter into any direct fee negotiations with the parties.</li>
          <li>The Secretariat may require advance deposits on costs. Failure to pay may result in suspension or termination of proceedings.</li>
          <li>The Tribunal shall have discretion to allocate costs in the final award.</li>
        </ul>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b pb-2">CHAPTER VII: MISCELLANEOUS</h2>
        <h3 className="text-lg font-semibold text-slate-900 mb-2">Rule 21: Misconduct, Sanctions & Waiver</h3>
        <ul className="list-disc pl-5 space-y-1 mb-4">
          <li>PRE-LIT may impose sanctions for misuse or misconduct.</li>
          <li>Failure to object timely constitutes waiver.</li>
        </ul>

        <h3 className="text-lg font-semibold text-slate-900 mb-2">Rule 22: Exclusion of Liability</h3>
        <p className="mb-4">PRE-LIT, Tribunal, Emergency Arbitrator not liable except for gross negligence.</p>

        <h3 className="text-lg font-semibold text-slate-900 mb-2">Rule 23: Appointing Authority</h3>
        <p className="mb-4">Parties may request PRE-LIT to act as appointing authority for ad hoc arbitrations.</p>

        <h3 className="text-lg font-semibold text-slate-900 mb-2">Rule 24: Governing Law & Jurisdiction</h3>
        <p className="mb-4">Any dispute or claim arising out of or in connection with this Agreement, including any question regarding its existence, validity, or termination, shall be referred to and finally resolved by Arbitration and Conciliation Act. The seat of arbitration shall be New Delhi, India. The language of the arbitral proceedings shall be English.</p>

        <h3 className="text-lg font-semibold text-slate-900 mb-2">Rule 25: ODR Platform Failure & Force Majeure</h3>
        <p className="mb-4">PRE-LIT shall not be liable for delays or disruptions caused by force majeure events, or third-party service interruptions. The Tribunal may adopt alternative procedures to ensure continuity.</p>

        <h3 className="text-lg font-semibold text-slate-900 mb-2">RULE 26: AMENDMENT & INTERPRETATION</h3>
        <ul className="list-none space-y-2 mb-6">
          <li><strong>26.1</strong> PRE-LIT reserves the right to amend these Rules from time to time.</li>
          <li><strong>26.2</strong> Interpretation of these Rules shall vest with PRE-LIT, subject always to the provisions of the Act and supervisory jurisdiction of competent courts.</li>
        </ul>
        <p className="font-medium text-slate-900 mt-6">These PRE-LIT Rules of Arbitration have been approved and adopted by PRE-LIT Online Dispute Resolution and shall come into force with immediate effect.</p>
      </div>
    </LegalDocument>
  );
}