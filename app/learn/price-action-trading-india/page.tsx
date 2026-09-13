import type { Metadata } from 'next'
import Link from 'next/link'
import SchemaMarkup from '@/components/SchemaMarkup'

export const metadata: Metadata = {
  title: 'Price Action Trading India — Complete Guide | The Chartians',
  description:
    'The complete guide to price action trading in Indian markets — support, resistance, breakouts, candlestick patterns, and risk management. Free educational resource by SEBI RA INH000024231.',
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://thechartians.com/learn/price-action-trading-india',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://thechartians.com' },
    { '@type': 'ListItem', position: 2, name: 'Learn', item: 'https://thechartians.com/learn' },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Price Action Trading India',
      item: 'https://thechartians.com/learn/price-action-trading-india',
    },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Price Action Trading India — The Complete Guide',
  description:
    'Complete guide to price action trading in Indian markets — concepts, setups, and risk management.',
  author: {
    '@type': 'Organization',
    name: 'The Chartians',
    url: 'https://thechartians.com',
  },
  publisher: {
    '@type': 'Organization',
    name: 'The Chartians',
    logo: {
      '@type': 'ImageObject',
      url: 'https://thechartians.com/images/chartians-logo.svg',
    },
  },
  datePublished: '2026-06-06',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://thechartians.com/learn/price-action-trading-india',
  },
}

export default function PriceActionPage() {
  return (
    <>
      <SchemaMarkup schema={breadcrumbSchema} />
      <SchemaMarkup schema={articleSchema} />

      <div className="pt-40 pb-24 px-4 bg-paper min-h-screen">
        <div className="max-w-3xl mx-auto">

          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="text-sm text-ink/70 mb-8">
            <ol className="flex flex-wrap gap-2">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/blog" className="hover:text-primary transition-colors">Learn</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-primary font-medium">Price Action Trading India</li>
            </ol>
          </nav>

          <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold mb-6">
            Price Action | Complete Guide
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-ink mb-6 leading-tight">
            Price Action Trading India — The Complete Guide
          </h1>

          <p className="text-xl text-ink/70 mb-10 leading-relaxed">
            Price action trading is the method of analysing a market&apos;s historical price movement to make
            trading decisions — with no indicators, no oscillators, and no algorithmic guesswork. This guide
            covers everything you need to understand and apply price action in Indian equity and F&amp;O markets.
          </p>

          {/* TOC */}
          <nav aria-label="Table of contents" className="bg-primary/10 rounded-2xl p-6 border border-primary/20 mb-12">
            <h2 className="font-bold text-primary mb-4">Contents</h2>
            <ol className="space-y-2 text-ink/70">
              <li><a href="#what-is-price-action" className="hover:text-primary transition-colors">1. What is Price Action Trading?</a></li>
              <li><a href="#why-no-indicators" className="hover:text-primary transition-colors">2. Why No Indicators — The Chartians Philosophy</a></li>
              <li><a href="#core-concepts" className="hover:text-primary transition-colors">3. Core Concepts: Support, Resistance, and Trend</a></li>
              <li><a href="#breakouts" className="hover:text-primary transition-colors">4. How to Identify a Breakout Setup</a></li>
              <li><a href="#candlestick" className="hover:text-primary transition-colors">5. Key Candlestick Patterns for Indian Markets</a></li>
              <li><a href="#risk-management" className="hover:text-primary transition-colors">6. Risk Management: Position Sizing, SL, and R:R</a></li>
              <li><a href="#related" className="hover:text-primary transition-colors">7. Related Articles</a></li>
            </ol>
          </nav>

          <article className="prose prose-lg max-w-none text-ink/70 prose-headings:text-ink prose-headings:font-bold prose-a:text-primary prose-strong:text-ink">

            <section id="what-is-price-action">
              <h2>1. What is Price Action Trading?</h2>
              <p>
                Price action trading is the practice of making buy and sell decisions based solely on
                a market&apos;s historical price movement — as shown on a chart — without the use of lagging
                indicators like RSI, MACD, Bollinger Bands, or moving averages.
              </p>
              <p>
                The premise is simple: <strong>price is the only truth in the market.</strong> Every piece
                of information — earnings reports, economic data, FII flows, global cues — ultimately gets
                reflected in the price. By reading price directly, a trader can understand market sentiment
                in real time.
              </p>
              <p>
                In Indian markets, price action is particularly powerful because of the high retail
                participation and the predictable behaviour of Indian large-cap and mid-cap stocks at key
                technical levels. When a Nifty 50 stock breaks a multi-week resistance level with volume,
                other price action traders take note — and the momentum becomes self-reinforcing.
              </p>
            </section>

            <section id="why-no-indicators">
              <h2>2. Why No Indicators — The Chartians Philosophy</h2>
              <p>
                At The Chartians, we made a deliberate choice to use <strong>zero lagging indicators</strong>.
                Here&apos;s why:
              </p>
              <h3>Indicators lag the price</h3>
              <p>
                RSI, MACD, and most common indicators are derived from price itself — they are mathematical
                calculations applied to historical price data. By definition, they tell you what happened, not
                what is happening. In fast-moving Indian F&amp;O markets, this lag is costly.
              </p>
              <h3>Indicators create noise</h3>
              <p>
                Multiple indicators on a chart often contradict each other. One says &ldquo;overbought&rdquo;, another
                says &ldquo;bullish crossover&rdquo;. This creates analysis paralysis and indecision. Price action gives
                a single, clear read.
              </p>
              <h3>Institutional traders don&apos;t use indicators</h3>
              <p>
                Large institutional participants — FIIs, mutual funds, prop desks — make decisions based on
                price levels, liquidity zones, and market structure. They don&apos;t react to RSI crossovers.
                Price action allows retail traders to align with institutional intent.
              </p>
              <blockquote>
                <p>
                  &ldquo;The chart is the market&apos;s memory. Every support held, every resistance broken, every
                  false breakout — it&apos;s all recorded in price. You just have to learn to read it.&rdquo;
                </p>
              </blockquote>
            </section>

            <section id="core-concepts">
              <h2>3. Core Concepts: Support, Resistance, and Trend</h2>

              <h3>Support</h3>
              <p>
                A <strong>support level</strong> is a price zone where buying interest has historically
                emerged — where buyers have stepped in and prevented the price from falling further.
                Support is not a precise number; it is a zone.
              </p>
              <p>
                In Indian markets, support levels are often formed at:
              </p>
              <ul>
                <li>Previous swing lows</li>
                <li>Round numbers (22,000, 22,500 on Nifty)</li>
                <li>Prior breakout levels that become support (old resistance flips to support)</li>
                <li>High-volume accumulation zones visible on daily/weekly charts</li>
              </ul>

              <h3>Resistance</h3>
              <p>
                A <strong>resistance level</strong> is where selling pressure has historically emerged —
                where sellers have stepped in and prevented the price from rising further.
              </p>

              <h3>Trend Structure</h3>
              <p>
                A market is in an <strong>uptrend</strong> when it makes higher highs and higher lows.
                A market is in a <strong>downtrend</strong> when it makes lower highs and lower lows.
                A <strong>sideways/consolidating</strong> market shows no clear pattern of higher/lower highs and lows.
              </p>
              <p>
                The most important skill in price action is identifying which phase the market is in
                — trend or range — before taking a trade. Never fight the trend.
              </p>
            </section>

            <section id="breakouts">
              <h2>4. How to Identify a Breakout Setup</h2>
              <p>
                A <strong>breakout</strong> occurs when price moves beyond a defined support or resistance
                level with conviction — usually confirmed by above-average volume.
              </p>
              <p>Our process for identifying a valid breakout setup:</p>
              <ol>
                <li>
                  <strong>Identify the key level:</strong> Find a resistance level that has been tested
                  2+ times without breaking. The more times a level has been tested and held, the more
                  significant the breakout when it eventually breaks.
                </li>
                <li>
                  <strong>Look for a consolidation near the level:</strong> A stock consolidating just
                  below resistance — building energy — is a far stronger setup than a stock approaching
                  resistance in a straight vertical move.
                </li>
                <li>
                  <strong>Wait for the close above:</strong> A candle closing above the resistance level
                  (not just a wick) is the confirmation. The close must be definitive.
                </li>
                <li>
                  <strong>Confirm with volume:</strong> A breakout on above-average volume signals
                  institutional participation. A breakout on weak volume may be a false breakout.
                </li>
                <li>
                  <strong>Set entry, SL, and target before entry:</strong> Entry just above the breakout
                  candle. Stop-loss below the consolidation low. Target at the next major resistance
                  (minimum 1:2 R:R).
                </li>
              </ol>
            </section>

            <section id="candlestick">
              <h2>5. Key Candlestick Patterns for Indian Markets</h2>
              <p>
                Candlestick patterns are most useful when they appear at <strong>key support/resistance
                levels</strong>. A bullish engulfing pattern in the middle of a range is meaningless.
                The same pattern at a major support level is a high-probability entry signal.
              </p>

              <h3>Most reliable patterns in Indian equity markets:</h3>
              <ul>
                <li>
                  <strong>Bullish Engulfing at Support:</strong> A large bullish candle that completely
                  engulfs the previous bearish candle at a support level. Strong reversal signal.
                </li>
                <li>
                  <strong>Inside Bar (NR4/NR7) Breakout:</strong> A narrow range candle contained within
                  the prior candle&apos;s range. Breakout above the high = entry signal. Very common in
                  Indian mid-caps before a directional move.
                </li>
                <li>
                  <strong>Pin Bar / Hammer at Support:</strong> A candle with a long lower wick and small
                  body — shows rejection of lower prices. Particularly powerful on weekly charts.
                </li>
                <li>
                  <strong>Bearish Engulfing at Resistance:</strong> The inverse of the bullish engulfing —
                  a strong signal to avoid longs or consider shorts.
                </li>
              </ul>
            </section>

            <section id="risk-management">
              <h2>6. Risk Management: Position Sizing, SL, and R:R</h2>
              <p>
                Profitable trading is not about win rate alone — it is about the relationship between
                wins and losses. A strategy with 40% win rate can be profitable if the average win is
                3x the average loss.
              </p>

              <h3>Stop-Loss (SL)</h3>
              <p>
                Every trade must have a <strong>defined stop-loss before entry</strong>. The stop-loss
                is placed at a level where, if reached, the original trade thesis is invalidated.
                For breakout trades: the stop goes below the consolidation low.
              </p>
              <p>
                At The Chartians, we typically use 2–4% SL for cash stock swing trades and 15–25 points
                SL for Nifty option trades. Never move a stop wider after entry — that is the most common
                fatal mistake retail traders make.
              </p>

              <h3>Risk:Reward Ratio (R:R)</h3>
              <p>
                We only take setups with a minimum <strong>1:2 Risk:Reward</strong>. This means for every
                ₹1 risked, the potential reward is at least ₹2. With a 50% win rate and 1:2 R:R, the
                strategy has a positive expected value over time.
              </p>

              <h3>Position Sizing</h3>
              <p>
                Never risk more than 1–2% of your total trading capital on a single trade. If your stop
                is 4% from entry on a cash stock position, and you want to risk 1% of your ₹5 lakh capital
                (₹5,000), then your position size is ₹5,000 ÷ 4% = ₹1,25,000 worth of the stock.
              </p>

              <blockquote>
                <p>
                  <strong>Rule:</strong> Define risk first. If you can&apos;t define where you are wrong, you
                  cannot take the trade.
                </p>
              </blockquote>
            </section>

          </article>

          {/* Related Articles */}
          <section id="related" className="mt-16">
            <h2 className="text-2xl font-bold text-primary mb-6">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link
                href="/blog/swing-trading-vs-intraday-trading-india"
                className="block p-5 bg-paper border border-surface-dark rounded-2xl hover:border-primary/30 hover:shadow-md transition-all group"
              >
                <p className="text-xs font-bold text-primary mb-2 uppercase tracking-wide">Swing Trading</p>
                <p className="font-bold text-ink group-hover:text-primary transition-colors text-sm leading-snug">
                  Swing Trading vs Intraday: Which is Better for Indian Traders?
                </p>
              </Link>
              <Link
                href="/blog/banknifty-vs-nifty-which-to-trade"
                className="block p-5 bg-paper border border-surface-dark rounded-2xl hover:border-primary/30 hover:shadow-md transition-all group"
              >
                <p className="text-xs font-bold text-primary mb-2 uppercase tracking-wide">F&O Strategy</p>
                <p className="font-bold text-ink group-hover:text-primary transition-colors text-sm leading-snug">
                  BankNifty vs Nifty: Which Index Should You Trade?
                </p>
              </Link>
              <Link
                href="/blog/how-to-read-nifty-option-chain"
                className="block p-5 bg-paper border border-surface-dark rounded-2xl hover:border-primary/30 hover:shadow-md transition-all group"
              >
                <p className="text-xs font-bold text-primary mb-2 uppercase tracking-wide">F&O Strategy</p>
                <p className="font-bold text-ink group-hover:text-primary transition-colors text-sm leading-snug">
                  How to Read the Nifty Option Chain: Complete Guide
                </p>
              </Link>
            </div>
          </section>

          {/* CTA */}
          <div className="mt-12 p-6 bg-primary/10 rounded-2xl border border-primary/20 text-center">
            <h3 className="text-xl font-bold text-primary mb-2">
              Want research-backed setups delivered to your Telegram?
            </h3>
            <p className="text-ink/70 mb-4">
              Join India&apos;s transparent trading research community. SEBI RA INH000024231.
            </p>
            <Link
              href="/our-plans"
              className="inline-block bg-primary text-canvas px-8 py-3 rounded-full font-bold hover:bg-primary/90 transition-colors"
            >
              Explore Research Plans →
            </Link>
          </div>

          {/* SEBI Disclaimer */}
          <div className="mt-10 p-6 bg-surface-light rounded-2xl border border-surface-dark text-sm text-ink/55">
            <p>
              <strong className="text-ink/70">Disclaimer:</strong> The Chartians is a SEBI Registered
              Research Analyst (INH000024231). This content is for educational purposes only and does not
              constitute personalised investment advice. Securities market investments are subject to market
              risks. Please read all related documents carefully before investing. Past performance is not
              indicative of future results.
            </p>
          </div>

        </div>
      </div>
    </>
  )
}
