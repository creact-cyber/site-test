'use client'

import React, { useEffect } from 'react';

const LegalLayout: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-40 pb-24 px-4 bg-paper min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-ink mb-8 pb-6 border-b border-surface-dark">
          {title}
        </h1>
        <div className="prose prose-lg md:prose-xl prose-blue max-w-none text-ink/80 space-y-6">
          {children}
        </div>
      </div>
    </div>
  );
};

export const TermsConditions: React.FC = () => (
  <LegalLayout title="Terms & Conditions">
    <p>Welcome to The Chartians ! By accessing and using this website, you agree to the following terms and conditions.</p>

    <p>We tailor our research recommendations based on the package you select, using comprehensive analysis to generate insights. However, the final decision on whether to follow them is up to you. The Chartians is not liable for any gains or losses resulting from your trading choices.</p>

    <h3 className="text-2xl font-bold text-ink mt-10 mb-6">Market Risks & Liability</h3>
    <p>Trading and investing involve inherent risks, including market fluctuations, delays in recommendations, and technical issues. The Chartians does not accept responsibility for any financial losses or inaccuracies in the information provided.</p>

    <h3 className="text-2xl font-bold text-ink mt-10 mb-6">Confidentiality & Compliance</h3>
    <ul className="list-disc pl-6 space-y-3">
        <li>Sharing our research reports or confidential information is strictly prohibited. Legal action will be taken in cases of non-compliance.</li>
        <li>Employees and associates are not allowed to accept gifts or personal benefits from clients.</li>
        <li>All payments should be made only to the official account listed on our website—never to an individual account.</li>
    </ul>

    <h3 className="text-2xl font-bold text-ink mt-10 mb-6">Account Security</h3>
    <p>We do not manage Demat or trading accounts. Never share your user ID, password, security answers, or OTPs with any of our staff members. The Chartians is not responsible for any issues arising from sharing such details.</p>

    <h3 className="text-2xl font-bold text-ink mt-10 mb-6">Modifications to Terms & Conditions</h3>
    <p>We reserve the right to update these terms at any time without prior notice. Changes take effect immediately upon posting on the website.</p>

    <h3 className="text-2xl font-bold text-ink mt-10 mb-6">User Acknowledgment & Restrictions</h3>
    <p>By using this website, you confirm that you have read, understood, and accepted these terms. Trading carries financial risk, and you accept full responsibility for your investment decisions and any potential loss of capital.</p>
    
    <p>All content, research, and recommendations are for personal use only. Reproducing or distributing any content without prior written consent from The Chartians is strictly prohibited.</p>

    <p className="mt-8">By continuing to use this website, you confirm your acceptance of these terms. If you have any concerns, feel free to reach out—we’re happy to help!</p>
  </LegalLayout>
);

export const Disclaimer: React.FC = () => (
  <LegalLayout title="Disclaimer">
    <p>The purpose of the document is to provide essential information about the Research Services in a manner to assist and enable the prospective client/client in making an informed decision for engaging in Research services before onboarding.</p>

    <h3 className="text-2xl font-bold text-ink mt-10 mb-6">History, Present business and Background</h3>
    <p>Chartians Market Research Private Limited is registered with SEBI as Research Analyst with registration no. INH000024231. The Research Analyst got its registration on 15th December, 2025 and is engaged in offering research and recommendation services.</p>

    <h3 className="text-2xl font-bold text-ink mt-10 mb-6">Terms and conditions of Research Services</h3>
    <p>The Research Services will be limited to providing independent research recommendation and shall not be involved in any advisory or portfolio allocation services.</p>
    <p>The Research Analyst never guarantees the returns on the recommendation provided. Investor shall take note that Investment/trading in stocks/Index or other securities is always subject to market risk. Past performance is never a guarantee of same future results.</p>
    <p>The Research Analyst shall not be responsible for any loss to the Investors.</p>

    <h3 className="text-2xl font-bold text-ink mt-10 mb-6">Disciplinary history</h3>
    <p>There are no pending material litigations or legal proceedings against the Research Analyst.</p>
    <p>As on date, no penalties / directions have been issued by SEBI under the SEBI Act or Regulations made there under against the Research Analyst relating to Research Analyst services.</p>

    <h3 className="text-2xl font-bold text-ink mt-10 mb-6">Details of its associates</h3>
    <p>No associates</p>

    <h3 className="text-2xl font-bold text-ink mt-10 mb-6">Disclosures with respect to Research and Recommendations Services</h3>
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

    <h3 className="text-2xl font-bold text-ink mt-10 mb-6">Standard Warning</h3>
    <p>“Investment in securities market are subject to market risks. Read all the related documents carefully before investing.”</p>

    <h3 className="text-2xl font-bold text-ink mt-10 mb-6">Disclaimer</h3>
    <p>“Registration granted by SEBI, and certification from NISM in no way guarantee performance of the Research Analyst or provide any assurance of returns to investors.</p>

    <h3 className="text-2xl font-bold text-ink mt-10 mb-6">Please read the following very carefully</h3>
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
        <li>In case of any query, please email on <a href="mailto:chartiansresearch@gmail.com" className="text-primary hover:underline">chartiansresearch@gmail.com</a> Be rest assured, our team will get back to you and resolve your query. Please state your registered phone number while mailing us.</li>
        <li>Reports based on technical and derivative analysis center on studying charts of a stock’s price movement, outstanding positions and trading volume, as opposed to focusing on a company’s fundamentals and, as such, may not match with a report on a company’s fundamentals.</li>
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
  </LegalLayout>
);

export const GrievanceRedressal: React.FC = () => (
  <LegalLayout title="Grievance Redressal Policy">
    <p>Clients can seek clarification to their query and are further entitled to make a complaint in writing, orally or telephonically. An email may be sent at <a href="mailto:chartiansresearch@gmail.com" className="text-primary hover:underline">chartiansresearch@gmail.com</a>.</p>

    <p>Alternatively, the Investor may call on <strong>+91 – 9274387982</strong></p>
    
    <p>A letter may also be written with their query/complaint and posted at the below mentioned address:<br/>
    <strong>509, Laxmi Enclave – 2, Near Gajera School, Katargam, Surat – 395004</strong></p>
    
    <p>The client can expect a reply within 21 days of approaching the Research Analyst.</p>
    
    <p>In case client is not satisfied with our response they can lodge grievance with SEBI at <a href="https://scores.sebi.gov.in/" target="_blank" rel="noreferrer" className="text-primary hover:underline">https://scores.sebi.gov.in/</a> or may also write to the office of SEBI.</p>
    
    <p>After exhausting the above options for resolution of the grievance, if the investor/client is still not satisfied with the outcome, they can initiate dispute resolution through the ODR Portal.</p>
    
    <p>For more details about the ODR mechanism, fees, timelines etc., kindly visit: <a href="https://smartodr.in/login" target="_blank" rel="noreferrer" className="text-primary hover:underline">https://smartodr.in/login</a></p>
    
    <h3 className="text-2xl font-bold text-ink mt-10 mb-6">Details of Compliance Officer</h3>
    <p>
      <strong>Name:</strong> Rajnikant K. Bhalani<br/>
      <strong>Contact No.:</strong> +91-9274387982<br/>
      <strong>Email:</strong> <a href="mailto:chartiansresearch@gmail.com" className="text-primary hover:underline">chartiansresearch@gmail.com</a>
    </p>

    <h3 className="text-2xl font-bold text-ink mt-10 mb-6">Contact Details for Grievances</h3>
    <div className="overflow-x-auto border border-surface-dark rounded-xl shadow-sm mb-8">
      <table className="min-w-full divide-y divide-surface-dark text-sm lg:text-base">
        <thead className="bg-surface-light">
          <tr>
            <th className="px-6 py-4 text-left font-bold text-ink whitespace-nowrap">Designation</th>
            <th className="px-6 py-4 text-left font-bold text-ink whitespace-nowrap">Contact Person</th>
            <th className="px-6 py-4 text-left font-bold text-ink min-w-[200px]">Address</th>
            <th className="px-6 py-4 text-left font-bold text-ink whitespace-nowrap">Contact No.</th>
            <th className="px-6 py-4 text-left font-bold text-ink">Email-ID</th>
            <th className="px-6 py-4 text-left font-bold text-ink min-w-[150px]">Working Hours</th>
          </tr>
        </thead>
        <tbody className="bg-paper divide-y divide-surface-dark">
          <tr>
            <td className="px-6 py-4 align-top font-medium">Customer Care</td>
            <td className="px-6 py-4 align-top">RAJNIKANT BHALANI</td>
            <td className="px-6 py-4 align-top">Corresponds Office Address : 509, Laxmi Enclave – 2, Near Gajera School, Katargam, Surat – 395004</td>
            <td className="px-6 py-4 align-top">9274387982</td>
            <td className="px-6 py-4 align-top break-all">chartiansresearch@gmail.com</td>
            <td className="px-6 py-4 align-top">Monday to Saturday.<br/>9:00 am to 5:00 pm.</td>
          </tr>
          <tr>
            <td className="px-6 py-4 align-top font-medium">Head of Customer Care</td>
            <td className="px-6 py-4 align-top">RAJNIKANT BHALANI</td>
            <td className="px-6 py-4 align-top">Corresponds Office Address : 509, Laxmi Enclave – 2, Near Gajera School, Katargam, Surat – 395004</td>
            <td className="px-6 py-4 align-top">9274387982</td>
            <td className="px-6 py-4 align-top break-all">chartiansresearch@gmail.com</td>
            <td className="px-6 py-4 align-top">Monday to Saturday.<br/>9:00 am to 5:00 pm.</td>
          </tr>
          <tr>
            <td className="px-6 py-4 align-top font-medium">Compliance Officer</td>
            <td className="px-6 py-4 align-top">RAJNIKANT BHALANI</td>
            <td className="px-6 py-4 align-top">Corresponds Office Address : 509, Laxmi Enclave – 2, Near Gajera School, Katargam, Surat – 395004</td>
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
            <td className="px-6 py-4 align-top">Corresponds Office Address : 509, Laxmi Enclave – 2, Near Gajera School, Katargam, Surat – 395004</td>
            <td className="px-6 py-4 align-top">9274387982</td>
            <td className="px-6 py-4 align-top break-all">chartiansresearch@gmail.com</td>
            <td className="px-6 py-4 align-top">Monday to Saturday.<br/>9:00 am to 5:00 pm.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p>The abovementioned details would facilitate the complainants to approach the concerned RA before filing complaint to SEBI. For more details go to:</p>
    <p><a href="https://www.bseindia.com/markets/MarketInfo/DispNewNoticesCirculars.aspx?page=20241209-41" target="_blank" rel="noreferrer" className="text-primary hover:underline break-all">https://www.bseindia.com/markets/MarketInfo/DispNewNoticesCirculars.aspx?page=20241209-41</a></p>
    
    <p className="mt-8">We aim to resolve all grievances within <strong>21 working days</strong> from the date of receipt.</p>
    
    <p>If your grievance is not resolved within this timeframe, you can escalate it to SEBI’s SCORES Platform (SEBI Complaints Redress System).</p>
    <p><strong>SCORES Portal:</strong> <a href="https://scores.sebi.gov.in" target="_blank" rel="noreferrer" className="text-primary hover:underline">scores.sebi.gov.in</a></p>
    
    <p>In case you are unsatisfied with the resolution provided through our support or the SCORES platform, you can access the Online Dispute Resolution (ODR) Portal.</p>
    <p><strong>ODR Portal:</strong> <a href="https://smartodr.in" target="_blank" rel="noreferrer" className="text-primary hover:underline">smartodr.in</a></p>
  </LegalLayout>
);

export const RefundPolicy: React.FC = () => (
  <LegalLayout title="Refund & Cancellation Policy">
    <p>All sales are final, and we do not offer refunds for the paid period of services already availed by the client. Complaints or dissatisfaction regarding the quality of services during the paid period shall not entitle the client to any refund or compensation. It is important to understand that we do not provide a 100% guarantee on our calls.</p>

    <p>As per SEBI guidelines, if a client requests to cancel the subscription, a refund shall only be issued for the unused portion of the subscription period. The refund will be calculated on a pro-rata basis, deducting the charges for the services already availed, including applicable taxes and administrative fees.</p>

    <p>Refunds will not be provided for the period of services already availed, irrespective of the client's satisfaction with the recommendations or the outcome of trades.</p>

    <p>Always remember Trading/Investment in Securities Markets are always subjected to Market Risk.</p>

    <h3 className="text-2xl font-bold text-ink mt-10 mb-6">Before Making a Payment</h3>
    <p>We strongly recommend that before making a payment, our visitors and potential clients please:</p>
    <ul className="list-disc pl-6 space-y-3">
        <li>Read all information about our services and support given to our clients. Read our Terms and Conditions.</li>
        <li>Read our Privacy Policy and Refund Policy.</li>
        <li>There is no refund possible in any case whatsoever.</li>
    </ul>

    <p className="mt-6">Kindly make the payment after reading all terms and conditions, disclaimers and refund policy.</p>

    <p>If you still have any query, contact us on: <strong>+91 9274387982</strong> or mail us: <a href="mailto:chartiansresearch@gmail.com" className="text-primary hover:underline">chartiansresearch@gmail.com</a></p>
  </LegalLayout>
);

export const PrivacyPolicy: React.FC = () => (
  <LegalLayout title="Privacy Policy">
    <h3 className="text-2xl font-bold text-ink mt-8 mb-4">Overview</h3>
    <p><strong>Your Privacy Matters to Us</strong></p>
    <p>We appreciate your trust and are committed to protecting your privacy with the highest security standards. This Privacy Policy explains what information we collect and how we use it.</p>

    <h3 className="text-2xl font-bold text-ink mt-10 mb-6">Who This Policy Applies To</h3>
    <ul className="list-disc pl-6 space-y-3">
        <li><strong>“You”</strong> refers to anyone using our website.</li>
        <li><strong>“We”</strong> or <strong>“Us”</strong> refers to The Chartians.</li>
    </ul>

    <h3 className="text-2xl font-bold text-ink mt-10 mb-6">Staying Updated</h3>
    <p>Our Privacy Policy may be updated from time to time. To stay informed, please review it periodically. By using our website, you agree to the terms outlined here. If you do not agree, you may choose not to use the website and can contact us with any concerns—we’re happy to assist!</p>
    <p className="mt-4">By simply using our website, you consent to the collection and appropriate use of your personal information as described in this policy.</p>

    <h3 className="text-2xl font-bold text-ink mt-10 mb-6">Key Disclaimers & User Agreement</h3>
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
        
        <p><strong>Website Disclaimer:</strong> The website (<a href="https://thechartians.com" className="text-primary hover:underline">https://thechartians.com</a>) is not responsible for errors, omissions, or representations on its pages. It disclaims liability for risks associated with internet and SMS-based information dissemination.</p>
        
        <p><strong>Warranty Disclaimer:</strong> The website expressly disclaims any implied warranties and considers itself subject to the jurisdiction of the court of Gujarat in India.</p>
        
        <p><strong>Geographical Limitation:</strong> The website is specifically for users in the territory of India, and while access for users outside India is not denied, the website disclaims legal liabilities in jurisdictions other than India.</p>
        
        <p><strong>User Authorization:</strong> By using the website, users authorize The Chartians to contact them and send promotional and transactional communication.</p>
        
        <p><strong>Termination of Accounts:</strong> The company reserves the right to terminate accounts of subscribers/customers violating proprietary rights.</p>
        
        <p><strong>Communication Authorization:</strong> Users authorize the company to contact them, even if registered under the National Do Not Call Registry or other related regulations.</p>
    </div>

    <h3 className="text-2xl font-bold text-ink mt-10 mb-6">Cookies</h3>
    <p>A “cookie” is a small piece of information stored by a web server on a web browser so it can be later read back from that browser. Cookies are useful for enabling the browser to remember information specific to a given user. We place both permanent and temporary cookies in your computer’s hard drive. The cookies do not contain any of your personally identifiable information.</p>

    <h3 className="text-2xl font-bold text-ink mt-10 mb-6">Links to Other Sites</h3>
    <p>Our website may contain links to other external websites that may collect personally identifiable information about you. <a href="https://thechartians.com" className="text-primary hover:underline">https://thechartians.com</a> is not responsible for the privacy practices or the content of those linked Services.</p>

    <h3 className="text-2xl font-bold text-ink mt-10 mb-6">Your Consent</h3>
    <p>By using the website and/ or by providing your information, you consent to the collection and use of the information you disclose on the website in accordance with this Privacy Policy, including but not limited to Your consent for sharing your information as per this privacy policy.</p>

    <p className="mt-8">If we decide to change our privacy policy, we will post those changes on this page so that you are always aware of what information we collect, how we use it, and under what circumstances we disclose it.</p>
    
    <p className="mt-6 font-semibold">It is crucial for users and investors to carefully read and understand these disclaimers and agreements before using the services or relying on the provided information.</p>
  </LegalLayout>
);