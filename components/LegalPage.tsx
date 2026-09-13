'use client'

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { FileText, Shield, Lock, CreditCard } from 'lucide-react';

/* ------------------------------------------------------------------ */
/*  Tab Data                                                           */
/* ------------------------------------------------------------------ */

interface TabItem {
  id: string;
  label: string;
  icon: React.ReactNode;
}

const TABS: TabItem[] = [
  { id: 'disclaimer', label: 'Disclaimer & MITC', icon: <Shield size={18} aria-hidden="true" /> },
  { id: 'terms', label: 'Terms & Conditions', icon: <FileText size={18} aria-hidden="true" /> },
  { id: 'privacy', label: 'Privacy Policy', icon: <Lock size={18} aria-hidden="true" /> },
  { id: 'refund', label: 'Refund Policy', icon: <CreditCard size={18} aria-hidden="true" /> },
];

/* ------------------------------------------------------------------ */
/*  Tab Content Panels                                                 */
/* ------------------------------------------------------------------ */

const DisclaimerContent: React.FC = () => (
  <div className="legal-content space-y-6">
    <p>The purpose of the document is to provide essential information about the Research Services in a manner to assist and enable the prospective client/client in making an informed decision for engaging in Research services before onboarding.</p>

    <h3 className="text-xl font-bold text-ink mt-10 mb-4">History, Present business and Background</h3>
    <p>Chartians Market Research Private Limited is registered with SEBI as Research Analyst with registration no. INH000024231. The Research Analyst got its registration on 15th December, 2025 and is engaged in offering research and recommendation services.</p>

    <h3 className="text-xl font-bold text-ink mt-10 mb-4">Terms and conditions of Research Services</h3>
    <p>The Research Services will be limited to providing independent research recommendation and shall not be involved in any advisory or portfolio allocation services.</p>
    <p>The Research Analyst never guarantees the returns on the recommendation provided. Investor shall take note that Investment/trading in stocks/Index or other securities is always subject to market risk. Past performance is never a guarantee of same future results.</p>
    <p>The Research Analyst shall not be responsible for any loss to the Investors.</p>

    <h3 className="text-xl font-bold text-ink mt-10 mb-4">Disciplinary history</h3>
    <p>There are no pending material litigations or legal proceedings against the Research Analyst.</p>
    <p>As on date, no penalties / directions have been issued by SEBI under the SEBI Act or Regulations made there under against the Research Analyst relating to Research Analyst services.</p>

    <h3 className="text-xl font-bold text-ink mt-10 mb-4">Details of its associates</h3>
    <p>No associates</p>

    <h3 className="text-xl font-bold text-ink mt-10 mb-4">Disclosures with respect to Research and Recommendations Services</h3>
    <ul className="list-disc pl-6 space-y-3">
      <li>The Research Analyst or any of its officer/employee does not trade in securities which are subject matter of recommendation.</li>
      <li>There are no actual or potential conflicts of interest arising from any connection to or association with any issuer of products/ securities, including any material information or facts that might compromise its objectivity or independence in the carrying on of Research Analyst services. Such conflict of interest shall be disclosed to the client as and when they arise.</li>
      <li>Research Analyst or its employee or its associates have not received any compensation from the company which is subject matter of recommendation.</li>
      <li>Research Analyst or its employee or its associates have not managed or co-managed the public offering of any company.</li>
      <li>Research Analyst or its employee or its associates have not received any compensation for investment banking or merchant banking of brokerage services from the subject company.</li>
      <li>Research Analyst or its employee or its associates have not received any compensation for products or services other than above from the subject company.</li>
      <li>Research Analyst or its employee or its associates have not received any compensation or other benefits from the Subject Company or 3rd party in connection with the research report/ recommendation.</li>
      <li>The subject company was not a client of Research Analyst or its employee or its associates during twelve months preceding the date of recommendation services provided.</li>
      <li>Research Analysts or its employee or its associates has not served as an officer, director or employee of the subject company.</li>
      <li>Research Analysts has not been engaged in market making activity of the subject company.</li>
    </ul>

    <h3 className="text-xl font-bold text-ink mt-10 mb-4">Standard Warning</h3>
    <p>"Investment in securities market are subject to market risks. Read all the related documents carefully before investing."</p>

    <h3 className="text-xl font-bold text-ink mt-10 mb-4">Disclaimer</h3>
    <p>"Registration granted by SEBI, and certification from NISM in no way guarantee performance of the Research Analyst or provide any assurance of returns to investors.</p>

    <h3 className="text-xl font-bold text-ink mt-10 mb-4">Please read the following very carefully</h3>
    <ul className="list-disc pl-6 space-y-3">
      <li>Investments in securities market are subject to market risks. Read all the related documents carefully before investing.</li>
      <li>Registration granted by SEBI and certification from NISM in no way guarantee performance of the intermediary or provide any assurance of returns to investors.</li>
      <li>The fees is paid for research recommendations and is not refundable or cancellable under any circumstances.</li>
      <li>We do not provide any guaranteed profit or fixed returns or any other services. We charge fixed fees and do not operate on any profit sharing model.</li>
      <li>Images shared are for illustration purposes only.</li>
      <li>We are not responsible for any financial loss or any other loss incurred by the client.</li>
      <li>Please be fully informed about the risk and costs involved in trading and investing. Please consult your investment advisor before trading. Trade only as per your risk appetite and risk profile.</li>
      <li>Trading in options is risky due to its volatile nature. Upon accepting our service, you hereby accept that you fully understand the risks involved in trading.</li>
      <li>We advise the viewers to apply own discretion while referring testimonials shared by the client. Past performances and results are no guarantee of future performance.</li>
      <li>All recommendations shared are confidential and for the reference of paid members only. Any unapproved distribution of sensitive data will be considered as a breach of confidentiality and appropriate legal action shall be initiated.</li>
      <li>The recommendations must not be used as a singular basis of any investment decision. The views do not consider the risk appetite or the particular circumstances of an individual investor; readers are requested to take professional advice before investing and trading. Our recommendations should not be construed as investment advice.</li>
      <li>In case of any query, please email on <a href="mailto:chartiansresearch@gmail.com" className="text-primary underline focus:outline-none focus:ring-2 focus:ring-primary/40 rounded">chartiansresearch@gmail.com</a> Be rest assured, our team will get back to you and resolve your query. Please state your registered phone number while mailing us.</li>
      <li>Reports based on technical and derivative analysis center on studying charts of a stock's price movement, outstanding positions and trading volume, as opposed to focusing on a company's fundamentals and, as such, may not match with a report on a company's fundamentals.</li>
      <li>The research analyst or research entity or his associate or his relative do not have financial interest in the subject company.</li>
      <li>The research analyst or its associates or relatives, do not have actual/beneficial ownership of one per cent or more securities of the subject company, at the end of the month immediately preceding the date of publication of the research report or date of the public appearance.</li>
      <li>The research analyst or his associate or his relative do not have any other material conflict of interest at the time of publication of the research report or at the time of public appearance.</li>
      <li>The research analyst or its associates have not received any compensation from the subject company in the past twelve months.</li>
      <li>The research analyst or its associates have not managed or co-managed public offering of securities for the subject company in the past twelve months.</li>
      <li>The research analyst or its associates have not received any compensation for investment banking or merchant banking or brokerage services from the subject company in the past twelve months.</li>
      <li>The research analyst or its associates have not received any compensation for products or services other than investment banking or merchant banking or brokerage services from the subject company in the past twelve months.</li>
      <li>The research analyst or its associates have not received any compensation or other benefits from the subject company or third party in connection with the research report.</li>
      <li>The research analyst has not been engaged in market making activity for the subject company.</li>
      <li>The research analyst has not served as an officer, director or employee of the subject company.</li>
      <li>The research analyst did not receive any compensation or other benefits from the companies mentioned in the documents or third party in connection with preparation of the research documents. Accordingly, research Analyst does not have any material conflict of interest at the time of publication of the research documents.</li>
    </ul>
  </div>
);

const TermsContent: React.FC = () => (
  <div className="legal-content space-y-6">
    <p>Welcome to The Chartians ! By accessing and using this website, you agree to the following terms and conditions.</p>

    <p>We tailor our research recommendations based on the package you select, using comprehensive analysis to generate insights. However, the final decision on whether to follow them is up to you. The Chartians is not liable for any gains or losses resulting from your trading choices.</p>

    <h3 className="text-xl font-bold text-ink mt-10 mb-4">Market Risks & Liability</h3>
    <p>Trading and investing involve inherent risks, including market fluctuations, delays in recommendations, and technical issues. The Chartians does not accept responsibility for any financial losses or inaccuracies in the information provided.</p>

    <h3 className="text-xl font-bold text-ink mt-10 mb-4">Confidentiality & Compliance</h3>
    <ul className="list-disc pl-6 space-y-3">
      <li>Sharing our research reports or confidential information is strictly prohibited. Legal action will be taken in cases of non-compliance.</li>
      <li>Employees and associates are not allowed to accept gifts or personal benefits from clients.</li>
      <li>All payments should be made only to the official account listed on our website—never to an individual account.</li>
    </ul>

    <h3 className="text-xl font-bold text-ink mt-10 mb-4">Account Security</h3>
    <p>We do not manage Demat or trading accounts. Never share your user ID, password, security answers, or OTPs with any of our staff members. The Chartians is not responsible for any issues arising from sharing such details.</p>

    <h3 className="text-xl font-bold text-ink mt-10 mb-4">Modifications to Terms & Conditions</h3>
    <p>We reserve the right to update these terms at any time without prior notice. Changes take effect immediately upon posting on the website.</p>

    <h3 className="text-xl font-bold text-ink mt-10 mb-4">User Acknowledgment & Restrictions</h3>
    <p>By using this website, you confirm that you have read, understood, and accepted these terms. Trading carries financial risk, and you accept full responsibility for your investment decisions and any potential loss of capital.</p>
    
    <p>All content, research, and recommendations are for personal use only. Reproducing or distributing any content without prior written consent from The Chartians is strictly prohibited.</p>

    <p className="mt-8">By continuing to use this website, you confirm your acceptance of these terms. If you have any concerns, feel free to reach out—we're happy to help!</p>
  </div>
);

const PrivacyContent: React.FC = () => (
  <div className="legal-content space-y-6">
    <h3 className="text-xl font-bold text-ink mt-4 mb-4">Overview</h3>
    <p><strong>Your Privacy Matters to Us</strong></p>
    <p>We appreciate your trust and are committed to protecting your privacy with the highest security standards. This Privacy Policy explains what information we collect and how we use it.</p>

    <h3 className="text-xl font-bold text-ink mt-10 mb-4">Who This Policy Applies To</h3>
    <ul className="list-disc pl-6 space-y-3">
      <li><strong>"You"</strong> refers to anyone using our website.</li>
      <li><strong>"We"</strong> or <strong>"Us"</strong> refers to The Chartians.</li>
    </ul>

    <h3 className="text-xl font-bold text-ink mt-10 mb-4">Staying Updated</h3>
    <p>Our Privacy Policy may be updated from time to time. To stay informed, please review it periodically. By using our website, you agree to the terms outlined here. If you do not agree, you may choose not to use the website and can contact us with any concerns—we're happy to assist!</p>
    <p className="mt-4">By simply using our website, you consent to the collection and appropriate use of your personal information as described in this policy.</p>

    <h3 className="text-xl font-bold text-ink mt-10 mb-4">Key Disclaimers & User Agreement</h3>
    <p>The provided text is a disclaimer and user agreement from The Chartians, a SEBI registered Research Entity. Here is a summary of the key points:</p>
    
    <div className="space-y-5 mt-6 text-lg">
      <p><strong>SEBI Registration:</strong> The Chartians is registered with SEBI (Securities and Exchange Board of India) as a Research Entity.</p>
      <p><strong>Nature of Business:</strong> The company provides fundamental and technical reports, including charts and tools, to identify market patterns for investors.</p>
      <p><strong>Disclaimer on Information Accuracy:</strong> The information and views in the reports are believed to be reliable, but the company does not guarantee their accuracy, completeness, or reliability. Investors are advised to independently evaluate market conditions and risks.</p>
      <p><strong>Confidentiality:</strong> The reports are confidential and intended solely for the selected recipient. Unauthorized distribution or alteration is prohibited without prior written consent.</p>
      <p><strong>Data Source:</strong> The information in the reports is derived from publicly available data, and the company does not guarantee the accuracy or completeness of the data.</p>
      <p><strong>Risk Disclaimer:</strong> The disclaimer emphasizes that investment in securities is subject to market risks, and past performance is not indicative of future results.</p>
      <p><strong>Independence and Conflict of Interest:</strong> The company strives to minimize conflicts of interest in preparing research reports. It discloses that it or its partners may have financial interests but did not receive compensation from the subject companies mentioned in the report.</p>
      <p><strong>Ownership Disclosure:</strong> The company and its partners do not collectively own 1% or more of the equity securities of the subject companies mentioned in the report.</p>
      <p><strong>Disciplinary Action:</strong> The document confirms that no material disciplinary action has been taken against the company by any regulatory authority impacting equity research activities.</p>
      <p><strong>Website Disclaimer:</strong> The website (<a href="https://thechartians.com" className="text-primary underline focus:outline-none focus:ring-2 focus:ring-primary/40 rounded">https://thechartians.com</a>) is not responsible for errors, omissions, or representations on its pages. It disclaims liability for risks associated with internet and SMS-based information dissemination.</p>
      <p><strong>Warranty Disclaimer:</strong> The website expressly disclaims any implied warranties and considers itself subject to the jurisdiction of the court of Gujarat in India.</p>
      <p><strong>Geographical Limitation:</strong> The website is specifically for users in the territory of India, and while access for users outside India is not denied, the website disclaims legal liabilities in jurisdictions other than India.</p>
      <p><strong>User Authorization:</strong> By using the website, users authorize The Chartians to contact them and send promotional and transactional communication.</p>
      <p><strong>Termination of Accounts:</strong> The company reserves the right to terminate accounts of subscribers/customers violating proprietary rights.</p>
      <p><strong>Communication Authorization:</strong> Users authorize the company to contact them, even if registered under the National Do Not Call Registry or other related regulations.</p>
    </div>

    <h3 className="text-xl font-bold text-ink mt-10 mb-4">Cookies</h3>
    <p>A "cookie" is a small piece of information stored by a web server on a web browser so it can be later read back from that browser. Cookies are useful for enabling the browser to remember information specific to a given user. We place both permanent and temporary cookies in your computer's hard drive. The cookies do not contain any of your personally identifiable information.</p>

    <h3 className="text-xl font-bold text-ink mt-10 mb-4">Links to Other Sites</h3>
    <p>Our website may contain links to other external websites that may collect personally identifiable information about you. <a href="https://thechartians.com" className="text-primary underline focus:outline-none focus:ring-2 focus:ring-primary/40 rounded">https://thechartians.com</a> is not responsible for the privacy practices or the content of those linked Services.</p>

    <h3 className="text-xl font-bold text-ink mt-10 mb-4">Your Consent</h3>
    <p>By using the website and/ or by providing your information, you consent to the collection and use of the information you disclose on the website in accordance with this Privacy Policy, including but not limited to Your consent for sharing your information as per this privacy policy.</p>

    <p className="mt-8">If we decide to change our privacy policy, we will post those changes on this page so that you are always aware of what information we collect, how we use it, and under what circumstances we disclose it.</p>
    
    <p className="mt-6 font-semibold">It is crucial for users and investors to carefully read and understand these disclaimers and agreements before using the services or relying on the provided information.</p>
  </div>
);

const RefundContent: React.FC = () => (
  <div className="legal-content space-y-6">
    <p>All sales are final, and we do not offer refunds for the paid period of services already availed by the client. Complaints or dissatisfaction regarding the quality of services during the paid period shall not entitle the client to any refund or compensation. It is important to understand that we do not provide a 100% guarantee on our calls.</p>

    <p>As per SEBI guidelines, if a client requests to cancel the subscription, a refund shall only be issued for the unused portion of the subscription period. The refund will be calculated on a pro-rata basis, deducting the charges for the services already availed, including applicable taxes and administrative fees.</p>

    <p>Refunds will not be provided for the period of services already availed, irrespective of the client's satisfaction with the recommendations or the outcome of trades.</p>

    <p>Always remember Trading/Investment in Securities Markets are always subjected to Market Risk.</p>

    <h3 className="text-xl font-bold text-ink mt-10 mb-4">Before Making a Payment</h3>
    <p>We strongly recommend that before making a payment, our visitors and potential clients please:</p>
    <ul className="list-disc pl-6 space-y-3">
      <li>Read all information about our services and support given to our clients. Read our Terms and Conditions.</li>
      <li>Read our Privacy Policy and Refund Policy.</li>
      <li>There is no refund possible in any case whatsoever.</li>
    </ul>

    <p className="mt-6">Kindly make the payment after reading all terms and conditions, disclaimers and refund policy.</p>

    <p>If you still have any query, contact us on: <strong>+91 9274387982</strong> or mail us: <a href="mailto:chartiansresearch@gmail.com" className="text-primary underline focus:outline-none focus:ring-2 focus:ring-primary/40 rounded">chartiansresearch@gmail.com</a></p>
  </div>
);

/* ------------------------------------------------------------------ */
/*  Accessible Tab Components                                          */
/* ------------------------------------------------------------------ */

const TAB_CONTENT: Record<string, React.FC> = {
  disclaimer: DisclaimerContent,
  terms: TermsContent,
  privacy: PrivacyContent,
  refund: RefundContent,
};

const TAB_TITLES: Record<string, string> = {
  disclaimer: 'Disclaimer & MITC (Most Important Terms & Conditions)',
  terms: 'Terms & Conditions',
  privacy: 'Privacy Policy',
  refund: 'Refund & Cancellation Policy',
};

const LegalPage: React.FC = () => {
  const tabListRef = useRef<HTMLDivElement>(null);

  // Determine initial tab from URL hash (client-side only)
  const getTabFromHash = useCallback((): string => {
    if (typeof window === 'undefined') return 'disclaimer';
    const hash = window.location.hash.replace('#', '');
    return TABS.find(t => t.id === hash)?.id || 'disclaimer';
  }, []);

  const [activeTab, setActiveTab] = useState<string>('disclaimer');

  // Sync tab with URL hash on mount and hash changes
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
    window.history.replaceState(null, '', `/legal#${tabId}`);
  };

  // Arrow key navigation for tabs — WCAG 2.1.1
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
    // Focus the new tab button
    const tabList = tabListRef.current;
    if (tabList) {
      const buttons = tabList.querySelectorAll<HTMLButtonElement>('[role="tab"]');
      buttons[newIndex]?.focus();
    }
  };

  const ActiveContent = TAB_CONTENT[activeTab];

  return (
    <div className="pt-40 pb-24 px-4 bg-paper min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-ink mb-4 pb-6 border-b border-surface-dark">
          Legal & Policies
        </h1>
        <p className="text-ink/70 text-lg mb-8">
          All legal documents and policies of Chartians Market Research Private Limited (SEBI RA: INH000024231).
        </p>

        {/* Accessible Tab List */}
        <div
          ref={tabListRef}
          role="tablist"
          aria-label="Legal document sections"
          className="flex flex-wrap gap-2 mb-10 border-b border-surface-dark pb-4"
        >
          {TABS.map((tab, index) => (
            <button
              key={tab.id}
              id={`tab-${tab.id}`}
              role="tab"
              aria-selected={activeTab === tab.id}
              aria-controls={`panel-${tab.id}`}
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
          id={`panel-${activeTab}`}
          role="tabpanel"
          aria-labelledby={`tab-${activeTab}`}
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

export default LegalPage;
