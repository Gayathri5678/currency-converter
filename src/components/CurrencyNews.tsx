import React, { useState } from 'react';
import { Newspaper, Clock, TrendingUp, Globe, ExternalLink } from 'lucide-react';

interface NewsItem {
  id: string;
  title: string;
  summary: string;
  source: string;
  time: string;
  impact: 'high' | 'medium' | 'low';
  currencies: string[];
  image: string;
}

const CurrencyNews: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: 'All News' },
    { id: 'central-banks', name: 'Central Banks' },
    { id: 'economic-data', name: 'Economic Data' },
    { id: 'market-analysis', name: 'Market Analysis' },
    { id: 'geopolitical', name: 'Geopolitical' },
  ];

  const newsItems: NewsItem[] = [
    {
      id: '1',
      title: 'Federal Reserve Signals Potential Rate Cuts in Q2 2024',
      summary: 'Fed officials hint at possible monetary policy adjustments amid cooling inflation data and labor market stabilization.',
      source: 'Reuters',
      time: '2 hours ago',
      impact: 'high',
      currencies: ['USD', 'EUR', 'GBP'],
      image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: '2',
      title: 'ECB Maintains Hawkish Stance Despite Economic Slowdown',
      summary: 'European Central Bank emphasizes commitment to fighting inflation, keeping rates elevated despite growth concerns.',
      source: 'Bloomberg',
      time: '4 hours ago',
      impact: 'high',
      currencies: ['EUR', 'USD'],
      image: 'https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: '3',
      title: 'Japanese Yen Strengthens on Intervention Speculation',
      summary: 'USD/JPY retreats from multi-decade highs as market participants anticipate potential Bank of Japan intervention.',
      source: 'Financial Times',
      time: '6 hours ago',
      impact: 'medium',
      currencies: ['JPY', 'USD'],
      image: 'https://images.pexels.com/photos/6801642/pexels-photo-6801642.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: '4',
      title: 'UK Inflation Data Beats Expectations, Pound Rallies',
      summary: 'British pound gains ground against major currencies following better-than-expected CPI figures from the ONS.',
      source: 'MarketWatch',
      time: '8 hours ago',
      impact: 'medium',
      currencies: ['GBP', 'USD', 'EUR'],
      image: 'https://images.pexels.com/photos/6801647/pexels-photo-6801647.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: '5',
      title: 'Emerging Market Currencies Under Pressure',
      summary: 'Risk-off sentiment weighs on EM currencies as investors seek safe-haven assets amid global uncertainty.',
      source: 'CNBC',
      time: '12 hours ago',
      impact: 'low',
      currencies: ['BRL', 'MXN', 'ZAR'],
      image: 'https://images.pexels.com/photos/6801650/pexels-photo-6801650.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: '6',
      title: 'Swiss Franc Gains Haven Status Amid Market Volatility',
      summary: 'CHF strengthens across the board as investors flock to traditional safe-haven currencies during uncertain times.',
      source: 'Wall Street Journal',
      time: '1 day ago',
      impact: 'medium',
      currencies: ['CHF', 'USD', 'EUR'],
      image: 'https://images.pexels.com/photos/6801645/pexels-photo-6801645.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'high': return 'text-red-400 bg-red-500/20';
      case 'medium': return 'text-yellow-400 bg-yellow-500/20';
      case 'low': return 'text-green-400 bg-green-500/20';
      default: return 'text-gray-400 bg-gray-500/20';
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-lg">
            <Newspaper className="text-yellow-400" size={24} />
          </div>
          <div>
            <h2 className="font-playfair font-bold text-3xl text-gold-gradient">
              Market News & Analysis
            </h2>
            <p className="text-gray-400 font-inter">
              Stay informed with the latest currency market developments
            </p>
          </div>
        </div>
        
        <div className="flex items-center gap-2 text-yellow-400">
          <Globe size={16} />
          <span className="font-inter text-sm">Live Updates</span>
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
        </div>
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-4 py-2 rounded-lg font-inter text-sm transition-all ${
              selectedCategory === category.id
                ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-black'
                : 'bg-black/20 text-gray-400 hover:text-yellow-400 border border-yellow-400/20'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* News Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {newsItems.map((news) => (
          <article
            key={news.id}
            className="glass-card rounded-xl overflow-hidden hover:gold-glow transition-all duration-300 group cursor-pointer"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={news.image}
                alt={news.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-4 left-4">
                <span className={`px-2 py-1 rounded-full text-xs font-inter font-medium ${getImpactColor(news.impact)}`}>
                  {news.impact.toUpperCase()} IMPACT
                </span>
              </div>
              <div className="absolute top-4 right-4 flex gap-1">
                {news.currencies.slice(0, 3).map((currency) => (
                  <span key={currency} className="bg-black/60 text-yellow-400 px-2 py-1 rounded text-xs font-inter">
                    {currency}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3 text-gray-400 text-sm font-inter">
                <Clock size={14} />
                <span>{news.time}</span>
                <span>•</span>
                <span>{news.source}</span>
              </div>
              
              <h3 className="font-playfair font-semibold text-white text-lg mb-3 line-clamp-2 group-hover:text-yellow-400 transition-colors">
                {news.title}
              </h3>
              
              <p className="text-gray-400 font-inter text-sm leading-relaxed mb-4 line-clamp-3">
                {news.summary}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <TrendingUp className="text-yellow-400" size={16} />
                  <span className="text-yellow-400 font-inter text-sm">Market Moving</span>
                </div>
                
                <button className="flex items-center gap-1 text-yellow-400 hover:text-yellow-300 font-inter text-sm transition-colors">
                  Read More
                  <ExternalLink size={14} />
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Load More Button */}
      <div className="text-center mt-8">
        <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-3 rounded-lg font-inter font-semibold hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 hover:scale-105">
          Load More News
        </button>
      </div>
    </div>
  );
};

export default CurrencyNews;