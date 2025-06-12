import React, { useState } from 'react';
import { Calculator, PieChart, Target, Zap, TrendingUp, AlertTriangle } from 'lucide-react';

const TradingTools: React.FC = () => {
  const [activeTab, setActiveTab] = useState('calculator');

  const tools = [
    {
      id: 'calculator',
      name: 'Position Calculator',
      icon: <Calculator size={20} />,
      description: 'Calculate position sizes and risk management'
    },
    {
      id: 'portfolio',
      name: 'Portfolio Tracker',
      icon: <PieChart size={20} />,
      description: 'Track your currency portfolio performance'
    },
    {
      id: 'alerts',
      name: 'Rate Alerts',
      icon: <Target size={20} />,
      description: 'Set custom exchange rate alerts'
    },
    {
      id: 'signals',
      name: 'Trading Signals',
      icon: <Zap size={20} />,
      description: 'AI-powered trading recommendations'
    }
  ];

  const renderCalculator = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-yellow-400 font-inter font-medium mb-2">Account Balance</label>
          <input
            type="number"
            placeholder="10,000"
            className="w-full bg-black/40 border border-yellow-400/30 rounded-lg px-4 py-3 text-white font-inter focus:border-yellow-400 focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-yellow-400 font-inter font-medium mb-2">Risk Percentage</label>
          <input
            type="number"
            placeholder="2"
            className="w-full bg-black/40 border border-yellow-400/30 rounded-lg px-4 py-3 text-white font-inter focus:border-yellow-400 focus:outline-none"
          />
        </div>
      </div>
      
      <div className="bg-gradient-to-r from-yellow-400/10 to-orange-400/10 p-4 rounded-lg">
        <div className="flex items-center gap-2 mb-2">
          <TrendingUp className="text-green-400" size={16} />
          <span className="text-green-400 font-inter font-medium">Recommended Position Size</span>
        </div>
        <div className="text-2xl font-bold text-white font-inter">$200.00</div>
        <div className="text-sm text-gray-400 font-inter">Based on 2% risk of $10,000 balance</div>
      </div>
    </div>
  );

  const renderPortfolio = () => (
    <div className="space-y-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { currency: 'USD', amount: '$5,420', change: '+2.3%', flag: '🇺🇸' },
          { currency: 'EUR', amount: '€3,210', change: '-0.8%', flag: '🇪🇺' },
          { currency: 'GBP', amount: '£2,150', change: '+1.2%', flag: '🇬🇧' },
          { currency: 'JPY', amount: '¥45,000', change: '+0.5%', flag: '🇯🇵' },
        ].map((item, index) => (
          <div key={index} className="bg-black/20 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl">{item.flag}</span>
              <span className="text-yellow-400 font-inter font-medium">{item.currency}</span>
            </div>
            <div className="text-white font-inter font-bold">{item.amount}</div>
            <div className={`text-sm font-inter ${item.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
              {item.change}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderAlerts = () => (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h4 className="text-yellow-400 font-inter font-medium">Active Alerts</h4>
        <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-lg font-inter text-sm">
          Add Alert
        </button>
      </div>
      
      {[
        { pair: 'EUR/USD', target: '1.0900', current: '1.0847', status: 'active' },
        { pair: 'GBP/USD', target: '1.2700', current: '1.2634', status: 'triggered' },
      ].map((alert, index) => (
        <div key={index} className="bg-black/20 p-4 rounded-lg flex items-center justify-between">
          <div>
            <div className="text-white font-inter font-medium">{alert.pair}</div>
            <div className="text-gray-400 text-sm">Target: {alert.target} | Current: {alert.current}</div>
          </div>
          <div className={`px-3 py-1 rounded-full text-xs font-inter ${
            alert.status === 'active' ? 'bg-blue-500/20 text-blue-400' : 'bg-green-500/20 text-green-400'
          }`}>
            {alert.status}
          </div>
        </div>
      ))}
    </div>
  );

  const renderSignals = () => (
    <div className="space-y-4">
      {[
        { pair: 'EUR/USD', signal: 'BUY', confidence: 85, reason: 'Technical breakout pattern' },
        { pair: 'GBP/JPY', signal: 'SELL', confidence: 72, reason: 'Overbought conditions' },
        { pair: 'USD/CHF', signal: 'HOLD', confidence: 60, reason: 'Consolidation phase' },
      ].map((signal, index) => (
        <div key={index} className="bg-black/20 p-4 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <div className="text-white font-inter font-medium">{signal.pair}</div>
            <div className={`px-3 py-1 rounded-full text-xs font-inter font-bold ${
              signal.signal === 'BUY' ? 'bg-green-500/20 text-green-400' :
              signal.signal === 'SELL' ? 'bg-red-500/20 text-red-400' :
              'bg-yellow-500/20 text-yellow-400'
            }`}>
              {signal.signal}
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex-1">
              <div className="text-gray-400 text-sm mb-1">Confidence</div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 h-2 rounded-full"
                  style={{ width: `${signal.confidence}%` }}
                />
              </div>
              <div className="text-yellow-400 text-sm mt-1">{signal.confidence}%</div>
            </div>
          </div>
          <div className="text-gray-400 text-sm mt-2">{signal.reason}</div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="glass-card p-6 rounded-xl">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-lg">
          <Zap className="text-yellow-400" size={24} />
        </div>
        <div>
          <h3 className="font-playfair font-bold text-2xl text-gold-gradient">
            Professional Tools
          </h3>
          <p className="text-gray-400 font-inter text-sm">
            Advanced trading and analysis tools
          </p>
        </div>
      </div>

      {/* Tool Tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {tools.map((tool) => (
          <button
            key={tool.id}
            onClick={() => setActiveTab(tool.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-inter text-sm transition-all ${
              activeTab === tool.id
                ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-black'
                : 'bg-black/20 text-gray-400 hover:text-yellow-400'
            }`}
          >
            {tool.icon}
            {tool.name}
          </button>
        ))}
      </div>

      {/* Tool Content */}
      <div className="min-h-[300px]">
        {activeTab === 'calculator' && renderCalculator()}
        {activeTab === 'portfolio' && renderPortfolio()}
        {activeTab === 'alerts' && renderAlerts()}
        {activeTab === 'signals' && renderSignals()}
      </div>
    </div>
  );
};

export default TradingTools;