import React, { useEffect, useState } from 'react';
import { TrendingUp, TrendingDown, DollarSign, Globe } from 'lucide-react';

interface StatItem {
  label: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
  icon: React.ReactNode;
}

const GlobalStats: React.FC = () => {
  const [stats, setStats] = useState<StatItem[]>([
    {
      label: 'Daily Volume',
      value: '$6.6T',
      change: '+2.4%',
      trend: 'up',
      icon: <DollarSign size={20} />
    },
    {
      label: 'Active Currencies',
      value: '180+',
      change: '+5',
      trend: 'up',
      icon: <Globe size={20} />
    },
    {
      label: 'Market Cap',
      value: '$2.1T',
      change: '-0.8%',
      trend: 'down',
      icon: <TrendingUp size={20} />
    },
    {
      label: 'Conversions Today',
      value: '2.4M',
      change: '+12.3%',
      trend: 'up',
      icon: <TrendingUp size={20} />
    }
  ]);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="glass-card p-6 rounded-xl text-center hover:gold-glow transition-all duration-300 group"
        >
          <div className="flex justify-center mb-3">
            <div className="p-3 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-full text-yellow-400 group-hover:scale-110 transition-transform">
              {stat.icon}
            </div>
          </div>
          
          <div className="text-2xl md:text-3xl font-bold text-white mb-1 font-playfair">
            {stat.value}
          </div>
          
          <div className="text-sm text-gray-400 mb-2 font-inter">
            {stat.label}
          </div>
          
          <div className={`flex items-center justify-center gap-1 text-xs font-inter ${
            stat.trend === 'up' ? 'text-green-400' : 'text-red-400'
          }`}>
            {stat.trend === 'up' ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
            {stat.change}
          </div>
        </div>
      ))}
    </div>
  );
};

export default GlobalStats;