import React from 'react'

const SEBIDisclaimer: React.FC = () => {
  return (
    <section aria-label="SEBI Regulatory Disclaimer" className="bg-surface-light border-y border-sun/25 px-4 py-8 md:py-10">
      <div className="max-w-7xl mx-auto flex gap-4 md:gap-6">
        <div className="hidden sm:block w-1 shrink-0 rounded-full bg-sun/60" aria-hidden="true" />
        <div className="sebi-disclaimer">
          <p className="mb-3">
            <strong>SEBI Registration:</strong> Chartians Market Research Private Limited | Research Analyst | INH000024231 | BSE Enlistment: 5641
          </p>
          <p className="mb-3">
            Securities market investments are subject to market risks. Research recommendations provided by The Chartians are for informational and educational purposes only and do not constitute investment advice. Past performance is not indicative of future results. Please read all related documents carefully before investing.
          </p>
          <p>
            The Chartians is a SEBI Registered Research Analyst and is NOT a SEBI Registered Investment Adviser. We do not manage client portfolios.
          </p>
        </div>
      </div>
    </section>
  )
}

export default SEBIDisclaimer
