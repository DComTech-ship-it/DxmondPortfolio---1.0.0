import React from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { ArrowLeft, BarChart2, TrendingUp, Shield, Clock, PieChart, Calendar } from 'lucide-react';

const stats = [
  { name: 'Win Rate', value: '78%', change: '+5%', icon: BarChart2 },
  { name: 'Total Trades', value: '312', change: '+42', icon: TrendingUp },
  { name: 'Risk/Reward', value: '1:2.8', change: '+0.3', icon: Shield },
  { name: 'Avg. Hold Time', value: '2.5 Days', change: '-0.5d', icon: Clock },
];

const tradingPairs = [
  { pair: 'EUR/USD', percentage: 32, pips: '+142', trend: 'up' },
  { pair: 'GBP/USD', percentage: 24, pips: '+87', trend: 'up' },
  { pair: 'USD/JPY', percentage: 18, pips: '-35', trend: 'down' },
  { pair: 'AUD/USD', percentage: 14, pips: '+63', trend: 'up' },
  { pair: 'USD/CAD', percentage: 12, pips: '-21', trend: 'down' },
];

export default function ForexPage() {
  return (
    <main>
      <div className="container">
        <div className="border-x border-primary/10">
          {/* Header */}
          <div className="flex flex-col max-w-3xl mx-auto py-10 px-4 sm:px-7">
            <div className="flex flex-col xs:flex-row gap-5 items-center justify-between">
              <p className="text-sm tracking-[2px] text-primary uppercase font-medium">Forex Trading</p>
              <Button asChild variant={"outline"} className="h-auto">
                <Link href="/" className="py-3 px-5 flex items-center gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Back to Home
                </Link>
              </Button>
            </div>
            <h1 className="text-3xl md:text-4xl font-medium mt-6 mb-4">Trading Performance</h1>
            <p className="text-muted-foreground">
              Data-driven trading strategies and performance analytics in the global forex markets
            </p>
          </div>

          {/* Stats */}
          <div className="border-t border-primary/10 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4 sm:px-7">
              {stats.map((stat, i) => (
                <div key={i} className="border border-primary/10 p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">{stat.name}</span>
                    <stat.icon className="h-4 w-4 text-primary" />
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-xl font-medium">{stat.value}</span>
                    <span className="text-xs text-green-500">{stat.change}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Trading Pairs */}
          <div className="border-t border-primary/10 py-8">
            <div className="px-4 sm:px-7 mb-6">
              <h2 className="text-xl font-medium mb-1">Trading Pairs</h2>
              <p className="text-sm text-muted-foreground">Performance metrics across different currency pairs</p>
            </div>
            
            <div className="border-t border-primary/10">
              {tradingPairs.map((pair, i) => (
                <div 
                  key={i} 
                  className="flex items-center justify-between p-4 border-b border-primary/10 hover:bg-muted/10 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-sm font-medium">{pair.pair.split('/')[0]}</span>
                    </div>
                    <div>
                      <h3 className="font-medium">{pair.pair}</h3>
                      <p className="text-sm text-muted-foreground">{pair.percentage}% of portfolio</p>
                    </div>
                  </div>
                  <div className={`flex items-center gap-2 ${pair.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                    <span className="font-medium">{pair.pips} pips</span>
                    {pair.trend === 'up' ? (
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                      </svg>
                    ) : (
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Trading Strategy */}
          <div className="border-t border-primary/10 py-8">
            <div className="px-4 sm:px-7 mb-8">
              <h2 className="text-2xl font-medium mb-6">Trading Methodology</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="space-y-3">
                    <h3 className="text-lg font-medium flex items-center gap-2">
                      <BarChart2 className="h-5 w-5 text-primary" />
                      Technical Analysis
                    </h3>
                    <p className="text-muted-foreground">
                      Utilizing advanced chart patterns, candlestick formations, and technical indicators to identify high-probability trading setups with optimal risk-reward ratios.
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-lg font-medium flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-primary" />
                      Market Timing
                    </h3>
                    <p className="text-muted-foreground">
                      Aligning trades with key market sessions and economic events to capitalize on increased volatility and liquidity during peak trading hours.
                    </p>
                  </div>
                </div>

                <div className="border border-primary/10 p-6">
                  <h3 className="text-lg font-medium mb-4">Risk Management</h3>
                  <ul className="space-y-3">
                    {[
                      '1-2% risk per trade to preserve capital',
                      'Minimum 1:2 risk-reward ratio',
                      'Daily and weekly loss limits',
                      'Regular portfolio rebalancing',
                      'Continuous performance review'
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="border-t border-primary/10 py-12 px-4 sm:px-7">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-medium mb-4">Let's discuss trading strategies</h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Interested in learning more about my approach to forex trading or discussing potential opportunities?
              </p>
              <Button asChild size="lg">
                <Link href="/contact" className="px-8">
                  Get in Touch
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
