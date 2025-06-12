import React, { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown, Activity } from 'lucide-react';

interface MarketData {
  pair: string;
  rate: number;
  change: number;
  volume: string;
  flag1: string;
  flag2: string;
}

const MarketOverview: React.FC = () => {
  const [marketData, setMarketData] = useState<MarketData[]>([
    { pair: 'EUR/USD', rate: 1.0847, change: 0.23, volume: '$1.2B', flag1: '🇪🇺', flag2: '🇺🇸' },
    { pair: 'GBP/USD', rate: 1.2634, change: -0.15, volume: '$890M', flag1: '🇬🇧', flag2: '🇺🇸' },
    { pair: 'USD/JPY', rate: 149.82, change: 0.45, volume: '$1.1B', flag1: '🇺🇸', flag2: '🇯🇵' },
    { pair: 'USD/CHF', rate: 0.8923, change: -0.08, volume: '$650M', flag1: '🇺🇸', flag2: '🇨🇭' },
    { pair: 'AUD/USD', rate: 0.6542, change: 0.31, volume: '$420M', flag1: '🇦🇺', flag2: '🇺🇸' },
    { pair: 'USD/CAD', rate: 1.3678, change: -0.12, volume: '$380M', flag1: '🇺🇸', flag2: '🇨🇦' },
  ]);

  const [selectedTimeframe, setSelectedTimeframe] = useState('1D');
  const timeframes = ['1H', '4H', '1D', '1W', '1M'];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="font-playfair font-bold text-3xl text-gold-gradient mb-2">
            Live Market Overview
          </h2>
          <p className="text-gray-400 font-inter">
            Real-time currency exchange rates and market movements
          </p>
        </div>
        
        <div className="flex items-center gap-2 bg-black/40 p-1 rounded-lg">
          {timeframes.map((tf) => (
            <button
              key={tf}
              onClick={() => setSelectedTimeframe(tf)}
              className={`px-4 py-2 rounded-md font-inter text-sm transition-all ${
                selectedTimeframe === tf
                  ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-black'
                  : 'text-gray-400 hover:text-yellow-400'
              }`}
            >
              {tf}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {marketData.map((data, index) => (
          <div
            key={index}
            className="glass-card p-6 rounded-xl hover:gold-glow transition-all duration-300 group cursor-pointer"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                  <span className="text-2xl">{data.flag1}</span>
                  <span className="text-2xl">{data.flag2}</span>
                </div>
                <div>
                  <h3 className="font-inter font-bold text-white text-lg">
                    {data.pair}
                  </h3>
                  <p className="text-gray-400 text-sm">Volume: {data.volume}</p>
                </div>
              </div>
              
              <Activity className="text-yellow-400 group-hover:animate-pulse" size={20} />
            </div>

            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold text-white font-inter">
                {data.rate.toFixed(4)}
              </div>
              
              <div className={`flex items-center gap-1 px-3 py-1 rounded-full text-sm font-inter ${
                data.change >= 0 
                  ? 'bg-green-500/20 text-green-400' 
                  : 'bg-red-500/20 text-red-400'
              }`}>
                {data.change >= 0 ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
                {data.change >= 0 ? '+' : ''}{data.change.toFixed(2)}%
              </div>
            </div>

            {/* Mini Chart Placeholder */}
            <div className="mt-4 h-12 bg-gradient-to-r from-yellow-400/10 to-transparent rounded flex items-end justify-between px-1">
              {Array.from({ length: 20 }, (_, i) => (
                <div
                  key={i}
                  className="w-1 bg-gradient-to-t from-yellow-400/30 to-yellow-400/60 rounded-t"
                  style={{ height: `${Math.random() * 100}%` }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarketOverview;