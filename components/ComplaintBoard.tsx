'use client'

import React, { useEffect } from 'react';

const ComplaintBoard: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Generate Monthly Trend Data
  const generateMonthlyData = () => {
    const months = [
        "Dec-25",
        "Jan-26",
      "Feb-26",
      "Mar-26",
      "Apr-26",
      "May-26",
    ];

    return months.map((month, index) => ({
        sn: index + 1,
        month,
        carried: 0,
        received: 0,
        resolved: 0,
        pending: 0
    }));
  };

  const monthlyRows = generateMonthlyData();

  const annualRows = [
    { sn: 1, year: '2025-26', carried: 0, received: 0, resolved: 0, pending: 0 },
  ];

  return (
    <div className="pt-40 pb-24 px-4 bg-paper min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-ink mb-4 text-center">
          Complaint Board
        </h1>
        <div className="bg-sun/10 border border-sun/30 p-6 rounded-2xl mb-12 text-center">
            <h2 className="text-lg md:text-xl font-semibold text-ink leading-relaxed">
              Investor Charter – Annexure- B as per Circular No SEBI/HO/IMD/IMD-II CIS/P/CIR/2021/0685 dated December 13, 2021
            </h2>
            <p className="text-ink/70 mt-2">Complaint Data to be displayed by Research Analyst</p>
        </div>

        {/* Table 1: Current Month Data */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-primary mb-6 border-l-4 border-primary pl-4">
            Complaint Data to be displayed by RAs
          </h3>
          <p className="text-ink/60 mb-4 italic">
            Formats for investors complaints data to be disclosed monthly by RAs on their website/mobile application:
            <br/>Data for the month ending May 2026.
          </p>
          <div className="overflow-x-auto rounded-xl border border-surface-dark shadow-sm">
            <table className="min-w-full divide-y divide-surface-dark text-sm md:text-base">
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
          <p className="text-xs text-ink/50 mt-2">
            ^Average Resolution time is the sum total of time taken to resolve each complaint in days, in the current month divided by total number of complaints resolved in the current month.
          </p>
        </div>

        {/* Table 2: Monthly Trend */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-primary mb-6 border-l-4 border-primary pl-4">
             Trend of Monthly Disposal of Complaints
          </h3>
          <div className="overflow-x-auto rounded-xl border border-surface-dark shadow-sm">
            <table className="min-w-full divide-y divide-surface-dark text-sm md:text-base">
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
          <p className="text-xs text-ink/50 mt-2">
            *Inclusive of complaints of previous months resolved in the current month.<br/>
            #Inclusive of complaints pending as on the last day of the month.
          </p>
        </div>

        {/* Table 3: Annual Trend */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-primary mb-6 border-l-4 border-primary pl-4">
             Trend of Annual Disposal of Complaints
          </h3>
          <div className="overflow-x-auto rounded-xl border border-surface-dark shadow-sm">
            <table className="min-w-full divide-y divide-surface-dark text-sm md:text-base">
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
           <p className="text-xs text-ink/50 mt-2">
            *Inclusive of complaints of previous years resolved in the current year.<br/>
            #Inclusive of complaints pending as on the last day of the year.
          </p>
        </div>

      </div>
    </div>
  );
};

export default ComplaintBoard;
