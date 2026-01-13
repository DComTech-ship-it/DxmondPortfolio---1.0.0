import React from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react';

export default function ForexSection() {
  const currencyPairs = [
    { pair: 'EUR/USD', change: '+0.12%' },
    { pair: 'GBP/USD', change: '-0.05%' },
    { pair: 'USD/JPY', change: '+0.08%' },
    { pair: 'AUD/USD', change: '-0.15%' },
  ];

  return (
    <section>
      <div className="container">
        <div className="border-x border-primary/10">
          <div className="flex flex-col max-w-3xl mx-auto py-10 px-4 sm:px-7">
            <div className="flex flex-col xs:flex-row gap-5 items-center justify-between">
              <p className="text-sm tracking-[2px] text-primary uppercase font-medium">Forex Trading</p>
              <Button asChild variant={"outline"} className="h-auto group">
                <Link href="/forex" className="py-3 px-5 flex items-center">
                  View Full Journal
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 border-t border-primary/10">
            <div className="p-6 border-b border-primary/10 md:border-b-0 md:border-r border-primary/10">
              <h3 className="text-xl font-medium mb-4">Market Specialization</h3>
              <p className="text-muted-foreground mb-6">
                Focused on major and minor currency pairs with high liquidity and predictable patterns. 
                My strategy combines technical analysis with fundamental factors for optimal entry and exit points.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {[{
                  title: 'Win Rate',
                  value: '78%',
                  change: '+5%',
                }, {
                  title: 'Monthly Return',
                  value: '8.2%',
                  change: '+1.2%',
                }].map((stat, i) => (
                  <div key={i} className="border border-primary/10 p-4">
                    <p className="text-sm text-muted-foreground">{stat.title}</p>
                    <div className="flex items-baseline gap-2 mt-1">
                      <span className="text-xl font-medium">{stat.value}</span>
                      <span className="text-xs text-green-500">{stat.change}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-medium mb-4">Active Pairs</h3>
              <div className="space-y-3">
                {currencyPairs.map((item, i) => (
                  <div 
                    key={i} 
                    className="flex justify-between items-center py-2 border-b border-primary/5 last:border-0"
                  >
                    <span className="font-medium">{item.pair}</span>
                    <span className={`text-sm ${item.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                      {item.change}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
