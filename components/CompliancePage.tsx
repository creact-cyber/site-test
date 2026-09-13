'use client'

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Mail, ArrowRight, CheckCircle, Clock, Archive, AlertTriangle, Scale, BookOpen } from 'lucide-react';

/* ------------------------------------------------------------------ */
/*  Tab Definitions                                                    */
/* ------------------------------------------------------------------ */

interface TabItem {
  id: string;
  label: string;
  icon: React.ReactNode;
}

const TABS: TabItem[] = [
  { id: 'grievance', label: 'Grievance Redressal', icon: <AlertTriangle size={18} aria-hidden="true" /> },
  { id: 'complaints', label: 'Complaint Board', icon: <Scale size={18} aria-hidden="true" /> },
  { id: 'charter', label: 'Investor Charter', icon: <BookOpen size={18} aria-hidden="true" /> },
];

/* ------------------------------------------------------------------ */
/*  Grievance Redressal Content                                        */
/* ------------------------------------------------------------------ */

const GrievanceContent: React.FC = () => (
  <div className="space-y-6">
    <p>Clients can seek clarification to their query and are further entitled to make a complaint in writing, orally or telephonically. An email may be sent at <a href="mailto:chartiansresearch@gmail.com" className="text-primary underline focus:outline-none focus:ring-2 focus:ring-primary/40 rounded">chartiansresearch@gmail.com</a>.</p>

    <p>Alternatively, the Investor may call on <strong>+91 – 9274387982</strong></p>
    
    <p>A letter may also be written with their query/complaint and posted at the below mentioned address:<br/>
    <strong>509, Laxmi Enclave – 2, Near Gajera School, Katargam, Surat – 395004</strong></p>
    
    <p>The client can expect a reply within 21 days of approaching the Research Analyst.</p>
    
    <p>In case client is not satisfied with our response they can lodge grievance with SEBI at <a href="https://scores.sebi.gov.in/" target="_blank" rel="noopener noreferrer" className="text-primary underline focus:outline-none focus:ring-2 focus:ring-primary/40 rounded">https://scores.sebi.gov.in/</a> or may also write to the office of SEBI.</p>
    
    <p>After exhausting the above options for resolution of the grievance, if the investor/client is still not satisfied with the outcome, they can initiate dispute resolution through the ODR Portal.</p>
    
    <p>For more details about the ODR mechanism, fees, timelines etc., kindly visit: <a href="https://smartodr.in/login" target="_blank" rel="noopener noreferrer" className="text-primary underline focus:outline-none focus:ring-2 focus:ring-primary/40 rounded">https://smartodr.in/login</a></p>
    
    <h3 className="text-xl font-bold text-ink mt-10 mb-4">Details of Compliance Officer</h3>
    <p>
      <strong>Name:</strong> Rajnikant K. Bhalani<br/>
      <strong>Contact No.:</strong> +91-9274387982<br/>
      <strong>Email:</strong> <a href="mailto:chartiansresearch@gmail.com" className="text-primary underline focus:outline-none focus:ring-2 focus:ring-primary/40 rounded">chartiansresearch@gmail.com</a>
    </p>

    <h3 className="text-xl font-bold text-ink mt-10 mb-4">Contact Details for Grievances</h3>
    <div className="overflow-x-auto border border-surface-dark rounded-xl shadow-sm mb-8">
      <table className="min-w-full divide-y divide-surface-dark text-sm lg:text-base">
        <caption className="sr-only">Contact details for grievance redressal at various levels within the organization</caption>
        <thead className="bg-surface-light">
          <tr>
            <th scope="col" className="px-6 py-4 text-left font-bold text-ink whitespace-nowrap">Designation</th>
            <th scope="col" className="px-6 py-4 text-left font-bold text-ink whitespace-nowrap">Contact Person</th>
            <th scope="col" className="px-6 py-4 text-left font-bold text-ink min-w-[200px]">Address</th>
            <th scope="col" className="px-6 py-4 text-left font-bold text-ink whitespace-nowrap">Contact No.</th>
            <th scope="col" className="px-6 py-4 text-left font-bold text-ink">Email-ID</th>
            <th scope="col" className="px-6 py-4 text-left font-bold text-ink min-w-[150px]">Working Hours</th>
          </tr>
        </thead>
        <tbody className="bg-paper divide-y divide-surface-dark">
          <tr>
            <td className="px-6 py-4 align-top font-medium">Customer Care</td>
            <td className="px-6 py-4 align-top">RAJNIKANT BHALANI</td>
            <td className="px-6 py-4 align-top">509, Laxmi Enclave – 2, Near Gajera School, Katargam, Surat – 395004</td>
            <td className="px-6 py-4 align-top">9274387982</td>
            <td className="px-6 py-4 align-top break-all">chartiansresearch@gmail.com</td>
            <td className="px-6 py-4 align-top">Monday to Saturday.<br/>9:00 am to 5:00 pm.</td>
          </tr>
          <tr>
            <td className="px-6 py-4 align-top font-medium">Head of Customer Care</td>
            <td className="px-6 py-4 align-top">RAJNIKANT BHALANI</td>
            <td className="px-6 py-4 align-top">509, Laxmi Enclave – 2, Near Gajera School, Katargam, Surat – 395004</td>
            <td className="px-6 py-4 align-top">9274387982</td>
            <td className="px-6 py-4 align-top break-all">chartiansresearch@gmail.com</td>
            <td className="px-6 py-4 align-top">Monday to Saturday.<br/>9:00 am to 5:00 pm.</td>
          </tr>
          <tr>
            <td className="px-6 py-4 align-top font-medium">Compliance Officer</td>
            <td className="px-6 py-4 align-top">RAJNIKANT BHALANI</td>
            <td className="px-6 py-4 align-top">509, Laxmi Enclave – 2, Near Gajera School, Katargam, Surat – 395004</td>
            <td className="px-6 py-4 align-top">9274387982</td>
            <td className="px-6 py-4 align-top break-all">chartiansresearch@gmail.com</td>
            <td className="px-6 py-4 align-top">Monday to Saturday.<br/>9:00 am to 5:00 pm.</td>
          </tr>
          <tr>
            <td className="px-6 py-4 align-top font-medium">CEO</td>
            <td className="px-6 py-4 align-top">–</td>
            <td className="px-6 py-4 align-top">–</td>
            <td className="px-6 py-4 align-top">–</td>
            <td className="px-6 py-4 align-top">–</td>
            <td className="px-6 py-4 align-top">–</td>
          </tr>
          <tr>
            <td className="px-6 py-4 align-top font-medium">Principal Officer</td>
            <td className="px-6 py-4 align-top">RAJNIKANT BHALANI</td>
            <td className="px-6 py-4 align-top">509, Laxmi Enclave – 2, Near Gajera School, Katargam, Surat – 395004</td>
            <td className="px-6 py-4 align-top">9274387982</td>
            <td className="px-6 py-4 align-top break-all">chartiansresearch@gmail.com</td>
            <td className="px-6 py-4 align-top">Monday to Saturday.<br/>9:00 am to 5:00 pm.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p>The abovementioned details would facilitate the complainants to approach the concerned RA before filing complaint to SEBI. For more details go to:</p>
    <p><a href="https://www.bseindia.com/markets/MarketInfo/DispNewNoticesCirculars.aspx?page=20241209-41" target="_blank" rel="noopener noreferrer" className="text-primary underline focus:outline-none focus:ring-2 focus:ring-primary/40 rounded break-all">https://www.bseindia.com/markets/MarketInfo/DispNewNoticesCirculars.aspx?page=20241209-41</a></p>
    
    <p className="mt-8">We aim to resolve all grievances within <strong>21 working days</strong> from the date of receipt.</p>
    
    <p>If your grievance is not resolved within this timeframe, you can escalate it to SEBI's SCORES Platform (SEBI Complaints Redress System).</p>
    <p><strong>SCORES Portal:</strong> <a href="https://scores.sebi.gov.in" target="_blank" rel="noopener noreferrer" className="text-primary underline focus:outline-none focus:ring-2 focus:ring-primary/40 rounded">scores.sebi.gov.in</a></p>
    
    <p>In case you are unsatisfied with the resolution provided through our support or the SCORES platform, you can access the Online Dispute Resolution (ODR) Portal.</p>
    <p><strong>ODR Portal:</strong> <a href="https://smartodr.in" target="_blank" rel="noopener noreferrer" className="text-primary underline focus:outline-none focus:ring-2 focus:ring-primary/40 rounded">smartodr.in</a></p>
  </div>
);

/* ------------------------------------------------------------------ */
/*  Complaint Board Content                                            */
/* ------------------------------------------------------------------ */

const ComplaintBoardContent: React.FC = () => {
  const monthlyRows = [
    { sn: 1, month: "Dec-25", carried: 0, received: 0, resolved: 0, pending: 0 },
    { sn: 2, month: "Jan-26", carried: 0, received: 0, resolved: 0, pending: 0 },
    { sn: 3, month: "Feb-26", carried: 0, received: 0, resolved: 0, pending: 0 },
    { sn: 4, month: "Mar-26", carried: 0, received: 0, resolved: 0, pending: 0 },
    { sn: 5, month: "Apr-26", carried: 0, received: 0, resolved: 0, pending: 0 },
    { sn: 6, month: "May-26", carried: 0, received: 0, resolved: 0, pending: 0 },
    { sn: 7, month: "Jun-26", carried: 0, received: 0, resolved: 0, pending: 0 },
  ];

  const annualRows = [
    { sn: 1, year: '2025-26', carried: 0, received: 0, resolved: 0, pending: 0 },
  ];

  return (
    <div className="space-y-12">
      <div className="bg-sun/10 border border-sun/30 p-6 rounded-2xl text-center">
        <h3 className="text-lg md:text-xl font-semibold text-ink leading-relaxed">
          Investor Charter – Annexure- B as per Circular No SEBI/HO/IMD/IMD-II CIS/P/CIR/2021/0685 dated December 13, 2021
        </h3>
        <p className="text-ink/70 mt-2">Complaint Data to be displayed by Research Analyst</p>
      </div>

      {/* Table 1: Current Month Data */}
      <div>
        <h3 className="text-xl font-bold text-primary mb-6 border-l-4 border-primary pl-4">
          Complaint Data to be displayed by RAs
        </h3>
        <p className="text-ink/70 mb-4 italic">
          Formats for investors complaints data to be disclosed monthly by RAs on their website/mobile application:
          <br/>Data for the month ending June 2026.
        </p>
        <div className="overflow-x-auto rounded-xl border border-surface-dark shadow-sm">
          <table className="min-w-full divide-y divide-surface-dark text-sm md:text-base">
            <caption className="sr-only">Current month complaint data showing pending, received, resolved and total pending complaints</caption>
            <thead className="bg-surface-light">
              <tr>
                <th scope="col" className="px-6 py-4 text-left font-bold text-ink">Sr. No.</th>
                <th scope="col" className="px-6 py-4 text-left font-bold text-ink">Received From</th>
                <th scope="col" className="px-6 py-4 text-center font-bold text-ink">Pending Last Month</th>
                <th scope="col" className="px-6 py-4 text-center font-bold text-ink">Received</th>
                <th scope="col" className="px-6 py-4 text-center font-bold text-ink">Resolved*</th>
                <th scope="col" className="px-6 py-4 text-center font-bold text-ink">Total Pending #</th>
                <th scope="col" className="px-6 py-4 text-center font-bold text-ink">Pending &gt; 3 Months</th>
                <th scope="col" className="px-6 py-4 text-center font-bold text-ink">Avg Resolution time^ (days)</th>
              </tr>
            </thead>
            <tbody className="bg-paper divide-y divide-surface-dark">
              <tr>
                <td className="px-6 py-4">1</td>
                <td className="px-6 py-4 font-medium">Directly From Investors</td>
                <td className="px-6 py-4 text-center">Nil</td>
                <td className="px-6 py-4 text-center">00</td>
                <td className="px-6 py-4 text-center">00</td>
                <td className="px-6 py-4 text-center">Nil</td>
                <td className="px-6 py-4 text-center">Nil</td>
                <td className="px-6 py-4 text-center">Nil</td>
              </tr>
              <tr>
                <td className="px-6 py-4">2</td>
                <td className="px-6 py-4 font-medium">SEBI (SCORES)</td>
                <td className="px-6 py-4 text-center">Nil</td>
                <td className="px-6 py-4 text-center">00</td>
                <td className="px-6 py-4 text-center">00</td>
                <td className="px-6 py-4 text-center">Nil</td>
                <td className="px-6 py-4 text-center">Nil</td>
                <td className="px-6 py-4 text-center">N.A</td>
              </tr>
              <tr>
                <td className="px-6 py-4">3</td>
                <td className="px-6 py-4 font-medium">Other Sources (If any)</td>
                <td className="px-6 py-4 text-center">Nil</td>
                <td className="px-6 py-4 text-center">Nil</td>
                <td className="px-6 py-4 text-center">Nil</td>
                <td className="px-6 py-4 text-center">Nil</td>
                <td className="px-6 py-4 text-center">Nil</td>
                <td className="px-6 py-4 text-center">Nil</td>
              </tr>
              <tr className="bg-surface-light font-bold">
                <td className="px-6 py-4"></td>
                <td className="px-6 py-4">Grand Total</td>
                <td className="px-6 py-4 text-center">Nil</td>
                <td className="px-6 py-4 text-center">00</td>
                <td className="px-6 py-4 text-center">00</td>
                <td className="px-6 py-4 text-center">Nil</td>
                <td className="px-6 py-4 text-center">Nil</td>
                <td className="px-6 py-4 text-center">N.A</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-ink/55 mt-2">
          ^Average Resolution time is the sum total of time taken to resolve each complaint in days, in the current month divided by total number of complaints resolved in the current month.
        </p>
      </div>

      {/* Table 2: Monthly Trend */}
      <div>
        <h3 className="text-xl font-bold text-primary mb-6 border-l-4 border-primary pl-4">
           Trend of Monthly Disposal of Complaints
        </h3>
        <div className="overflow-x-auto rounded-xl border border-surface-dark shadow-sm">
          <table className="min-w-full divide-y divide-surface-dark text-sm md:text-base">
            <caption className="sr-only">Monthly trend of complaint disposal showing carried forward, received, resolved and pending counts</caption>
            <thead className="bg-surface-light">
              <tr>
                <th scope="col" className="px-6 py-4 text-left font-bold text-ink">Sr. No</th>
                <th scope="col" className="px-6 py-4 text-left font-bold text-ink">Month</th>
                <th scope="col" className="px-6 py-4 text-center font-bold text-ink">Carried Forward</th>
                <th scope="col" className="px-6 py-4 text-center font-bold text-ink">Received</th>
                <th scope="col" className="px-6 py-4 text-center font-bold text-ink">Resolved*</th>
                <th scope="col" className="px-6 py-4 text-center font-bold text-ink">Pending#</th>
              </tr>
            </thead>
            <tbody className="bg-paper divide-y divide-surface-dark">
              {monthlyRows.map((row) => (
                <tr key={row.sn} className="hover:bg-surface-light/50 transition-colors">
                  <td className="px-6 py-3">{row.sn}</td>
                  <td className="px-6 py-3 font-medium">{row.month}</td>
                  <td className="px-6 py-3 text-center">{row.carried}</td>
                  <td className="px-6 py-3 text-center">{row.received}</td>
                  <td className="px-6 py-3 text-center">{row.resolved}</td>
                  <td className="px-6 py-3 text-center">{row.pending}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-ink/55 mt-2">
          *Inclusive of complaints of previous months resolved in the current month.<br/>
          #Inclusive of complaints pending as on the last day of the month.
        </p>
      </div>

      {/* Table 3: Annual Trend */}
      <div>
        <h3 className="text-xl font-bold text-primary mb-6 border-l-4 border-primary pl-4">
           Trend of Annual Disposal of Complaints
        </h3>
        <div className="overflow-x-auto rounded-xl border border-surface-dark shadow-sm">
          <table className="min-w-full divide-y divide-surface-dark text-sm md:text-base">
            <caption className="sr-only">Annual trend of complaint disposal showing year-wise data</caption>
            <thead className="bg-surface-light">
              <tr>
                <th scope="col" className="px-6 py-4 text-left font-bold text-ink">Sr. No</th>
                <th scope="col" className="px-6 py-4 text-left font-bold text-ink">Year</th>
                <th scope="col" className="px-6 py-4 text-center font-bold text-ink">Carried Forward</th>
                <th scope="col" className="px-6 py-4 text-center font-bold text-ink">Received</th>
                <th scope="col" className="px-6 py-4 text-center font-bold text-ink">Resolved*</th>
                <th scope="col" className="px-6 py-4 text-center font-bold text-ink">Pending#</th>
              </tr>
            </thead>
            <tbody className="bg-paper divide-y divide-surface-dark">
              {annualRows.map((row) => (
                <tr key={row.sn} className="hover:bg-surface-light/50 transition-colors">
                  <td className="px-6 py-4">{row.sn}</td>
                  <td className="px-6 py-4 font-medium">{row.year}</td>
                  <td className="px-6 py-4 text-center">{row.carried}</td>
                  <td className="px-6 py-4 text-center">{row.received}</td>
                  <td className="px-6 py-4 text-center">{row.resolved}</td>
                  <td className="px-6 py-4 text-center">{row.pending}</td>
                </tr>
              ))}
              <tr className="bg-surface-light font-bold">
                <td className="px-6 py-4"></td>
                <td className="px-6 py-4">Grand Total</td>
                <td className="px-6 py-4 text-center">0</td>
                <td className="px-6 py-4 text-center">0</td>
                <td className="px-6 py-4 text-center">0</td>
                <td className="px-6 py-4 text-center">0</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-ink/55 mt-2">
          *Inclusive of complaints of previous years resolved in the current year.<br/>
          #Inclusive of complaints pending as on the last day of the year.
        </p>
      </div>
    </div>
  );
};

/* ------------------------------------------------------------------ */
/*  Investor Charter Content (Embedded from SEBI)                      */
/* ------------------------------------------------------------------ */

const InvestorCharterContent: React.FC = () => (
  <div className="space-y-6">
    <div className="bg-primary/5 border border-primary/20 p-6 rounded-2xl mb-8">
      <p className="text-ink font-semibold">
        As per SEBI Circular No. SEBI/HO/OIAE/OIAE_IAD-1/P/CIR/2023/131 dated July 31, 2023 and subsequent amendments.
      </p>
    </div>

    <h3 className="text-xl font-bold text-ink mt-6 mb-4">Vision</h3>
    <p>To invest with confidence in a fair, efficient and transparent securities market ecosystem where investor interests are protected.</p>

    <h3 className="text-xl font-bold text-ink mt-10 mb-4">Mission</h3>
    <ul className="list-disc pl-6 space-y-3">
      <li>The Research Analyst shall provide independent, unbiased and transparent research recommendations based on thorough analysis.</li>
      <li>Every investor should be able to invest in an informed manner with adequate protection of interest.</li>
      <li>Every eligible person who wants to avail research analyst services should be able to do so with ease and efficiency.</li>
    </ul>

    <h3 className="text-xl font-bold text-ink mt-10 mb-4">Services Provided by Research Analyst</h3>
    <ul className="list-disc pl-6 space-y-3">
      <li>Research reports/recommendations covering securities listed on recognized stock exchanges.</li>
      <li>The Research Analyst provides independent research recommendations based on comprehensive technical and fundamental analysis.</li>
      <li>Publications including reports, charts, analyses and recommendations related to securities market.</li>
    </ul>

    <h3 className="text-xl font-bold text-ink mt-10 mb-4">Rights of Investors</h3>
    <ul className="list-disc pl-6 space-y-3">
      <li>Right to receive research recommendations/reports that are unbiased, transparent and in a timely manner.</li>
      <li>Right to receive fair and equitable treatment, without any discrimination.</li>
      <li>Right to complete disclosures regarding conflicts of interest, past performance and methodology used.</li>
      <li>Right to lodge a complaint and expect timely redressal of grievances.</li>
      <li>Right to receive service agreements and understand fees structure before availing services.</li>
    </ul>

    <h3 className="text-xl font-bold text-ink mt-10 mb-4">Responsibilities of Investors</h3>
    <ul className="list-disc pl-6 space-y-3">
      <li>Investors should deal with SEBI registered Research Analysts only.</li>
      <li>Investors should always verify the registration of the Research Analyst on the SEBI website.</li>
      <li>Investors should understand that research recommendations are not guaranteed returns.</li>
      <li>Investors must provide accurate personal and financial information.</li>
      <li>Investors should understand the inherent market risks before investing based on research recommendations.</li>
      <li>Investors must read and understand all disclaimers and risk disclosures provided by the Research Analyst.</li>
    </ul>

    <h3 className="text-xl font-bold text-ink mt-10 mb-4">Grievance Redressal Mechanism</h3>
    <div className="bg-surface-light p-6 rounded-2xl border border-surface-dark space-y-4">
      <div className="flex items-start gap-3">
        <div className="w-8 h-8 bg-primary text-canvas rounded-full flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">1</div>
        <div>
          <p className="font-semibold text-ink">Level 1 — Research Analyst</p>
          <p className="text-ink/70">Write to <a href="mailto:chartiansresearch@gmail.com" className="text-primary underline focus:outline-none focus:ring-2 focus:ring-primary/40 rounded">chartiansresearch@gmail.com</a> or call +91 9274387982. Expect resolution within 21 working days.</p>
        </div>
      </div>
      <div className="flex items-start gap-3">
        <div className="w-8 h-8 bg-primary text-canvas rounded-full flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">2</div>
        <div>
          <p className="font-semibold text-ink">Level 2 — SEBI SCORES</p>
          <p className="text-ink/70">Lodge a complaint at <a href="https://scores.sebi.gov.in" target="_blank" rel="noopener noreferrer" className="text-primary underline focus:outline-none focus:ring-2 focus:ring-primary/40 rounded">scores.sebi.gov.in</a></p>
        </div>
      </div>
      <div className="flex items-start gap-3">
        <div className="w-8 h-8 bg-primary text-canvas rounded-full flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">3</div>
        <div>
          <p className="font-semibold text-ink">Level 3 — Smart ODR Portal</p>
          <p className="text-ink/70">Initiate dispute resolution at <a href="https://smartodr.in" target="_blank" rel="noopener noreferrer" className="text-primary underline focus:outline-none focus:ring-2 focus:ring-primary/40 rounded">smartodr.in</a></p>
        </div>
      </div>
    </div>

    <div className="mt-8 p-6 bg-sun/10 border border-sun/30 rounded-2xl">
      <p className="text-ink font-semibold">
        For the latest Investor Charter published by SEBI, please visit: <a href="https://www.sebi.gov.in/legal/circulars/jun-2025/investor-charter-for-research-analysts_94355.html" target="_blank" rel="noopener noreferrer" className="text-primary underline focus:outline-none focus:ring-2 focus:ring-primary/40 rounded break-all">SEBI Investor Charter for Research Analysts</a>
      </p>
    </div>
  </div>
);

/* ------------------------------------------------------------------ */
/*  Tab Content Map                                                    */
/* ------------------------------------------------------------------ */

const TAB_CONTENT: Record<string, React.FC> = {
  grievance: GrievanceContent,
  complaints: ComplaintBoardContent,
  charter: InvestorCharterContent,
};

const TAB_TITLES: Record<string, string> = {
  grievance: 'Grievance Redressal Policy',
  complaints: 'Complaint Board',
  charter: 'Investor Charter',
};

/* ------------------------------------------------------------------ */
/*  Main Compliance Page                                               */
/* ------------------------------------------------------------------ */

const CompliancePage: React.FC = () => {
  const tabListRef = useRef<HTMLDivElement>(null);

  const getTabFromHash = useCallback((): string => {
    if (typeof window === 'undefined') return 'grievance';
    const hash = window.location.hash.replace('#', '');
    return TABS.find(t => t.id === hash)?.id || 'grievance';
  }, []);

  const [activeTab, setActiveTab] = useState<string>('grievance');

  useEffect(() => {
    setActiveTab(getTabFromHash());
    const handleHashChange = () => setActiveTab(getTabFromHash());
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [getTabFromHash]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const switchTab = (tabId: string) => {
    setActiveTab(tabId);
    window.history.replaceState(null, '', `/compliance#${tabId}`);
  };

  const handleTabKeyDown = (e: React.KeyboardEvent, currentIndex: number) => {
    let newIndex = currentIndex;
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      newIndex = (currentIndex + 1) % TABS.length;
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      newIndex = (currentIndex - 1 + TABS.length) % TABS.length;
    } else if (e.key === 'Home') {
      e.preventDefault();
      newIndex = 0;
    } else if (e.key === 'End') {
      e.preventDefault();
      newIndex = TABS.length - 1;
    } else {
      return;
    }
    switchTab(TABS[newIndex].id);
    const tabList = tabListRef.current;
    if (tabList) {
      const buttons = tabList.querySelectorAll<HTMLButtonElement>('[role="tab"]');
      buttons[newIndex]?.focus();
    }
  };

  const ActiveContent = TAB_CONTENT[activeTab];

  return (
    <div className="pt-40 pb-24 px-4 bg-paper min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-ink mb-4 pb-6 border-b border-surface-dark">
          Compliance
        </h1>
        <p className="text-ink/70 text-lg mb-8">
          Transparency, grievance redressal, and investor protection — Chartians Market Research Private Limited (SEBI RA: INH000024231).
        </p>

        {/* Accessible Tab List */}
        <div
          ref={tabListRef}
          role="tablist"
          aria-label="Compliance sections"
          className="flex flex-wrap gap-2 mb-10 border-b border-surface-dark pb-4"
        >
          {TABS.map((tab, index) => (
            <button
              key={tab.id}
              id={`compliance-tab-${tab.id}`}
              role="tab"
              aria-selected={activeTab === tab.id}
              aria-controls={`compliance-panel-${tab.id}`}
              tabIndex={activeTab === tab.id ? 0 : -1}
              onClick={() => switchTab(tab.id)}
              onKeyDown={(e) => handleTabKeyDown(e, index)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-bold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
                activeTab === tab.id
                  ? 'bg-primary text-canvas shadow-md shadow-primary/20'
                  : 'bg-surface-light text-ink/70 hover:bg-surface-dark hover:text-ink border border-surface-dark'
              }`}
            >
              {tab.icon}
              <span className="hidden sm:inline">{tab.label}</span>
              <span className="sm:hidden">{tab.label.split(' ')[0]}</span>
            </button>
          ))}
        </div>

        {/* Tab Panel */}
        <div
          id={`compliance-panel-${activeTab}`}
          role="tabpanel"
          aria-labelledby={`compliance-tab-${activeTab}`}
          tabIndex={0}
          className="prose prose-lg md:prose-xl prose-blue max-w-none text-ink/70 focus:outline-none"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-ink mb-6">
            {TAB_TITLES[activeTab]}
          </h2>
          <ActiveContent />
        </div>
      </div>
    </div>
  );
};

export default CompliancePage;
