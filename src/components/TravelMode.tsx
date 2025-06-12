import React, { useState } from 'react';
import { Plane, MapPin, CreditCard, AlertTriangle, ChevronDown, ChevronUp } from 'lucide-react';
import { getRandomTravelTip, POPULAR_CURRENCIES } from '../utils/currencyUtils';

const TravelMode: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentTip, setCurrentTip] = useState(getRandomTravelTip());

  const popularDestinations = [
    { country: 'United States', currency: 'USD', flag: '🇺🇸', tip: 'Tipping is customary (15-20%)' },
    { country: 'United Kingdom', currency: 'GBP', flag: '🇬🇧', tip: 'Contactless payments widely accepted' },
    { country: 'Japan', currency: 'JPY', flag: '🇯🇵', tip: 'Cash is still king in many places' },
    { country: 'European Union', currency: 'EUR', flag: '🇪🇺', tip: 'Single currency across 19 countries' },
    { country: 'Switzerland', currency: 'CHF', flag: '🇨🇭', tip: 'Expensive country, budget accordingly' },
    { country: 'Australia', currency: 'AUD', flag: '🇦🇺', tip: 'Card payments preferred over cash' },
  ];

  const financialTips = [
    { icon: <CreditCard className="text-blue-400" size={20} />, tip: 'Use contactless payments when available' },
    { icon: <AlertTriangle className="text-orange-400" size={20} />, tip: 'Avoid dynamic currency conversion' },
    { icon: <MapPin className="text-green-400" size={20} />, tip: 'Research local tipping customs' },
    { icon: <Plane className="text-purple-400" size={20} />, tip: 'Notify banks of travel plans' },
  ];

  return (
    <div className="glass-card p-6 rounded-xl">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <Plane className="text-yellow-400" size={24} />
          <h3 className="font-playfair font-semibold text-yellow-400 text-xl">
            Travel Mode
          </h3>
        </div>
        
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="bg-yellow-400/20 hover:bg-yellow-400/30 text-yellow-400 p-2 rounded-lg transition-colors"
        >
          {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>
      </div>

      {/* Travel Tip */}
      <div className="bg-gradient-to-r from-yellow-400/10 to-orange-400/10 p-4 rounded-lg mb-4">
        <div className="flex items-start gap-3">
          <AlertTriangle className="text-yellow-400 mt-1" size={20} />
          <div>
            <h4 className="font-inter font-medium text-yellow-400 mb-1">Travel Tip</h4>
            <p className="text-yellow-200 font-inter text-sm">{currentTip}</p>
            <button
              onClick={() => setCurrentTip(getRandomTravelTip())}
              className="text-yellow-400 hover:text-yellow-300 font-inter text-xs mt-2 underline"
            >
              Get another tip
            </button>
          </div>
        </div>
      </div>

      <div className={`transition-all duration-300 ${isExpanded ? 'block' : 'hidden'}`}>
        {/* Popular Destinations */}
        <div className="mb-6">
          <h4 className="font-playfair font-medium text-yellow-400 text-lg mb-3">
            Popular Destinations
          </h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {popularDestinations.map((dest, index) => (
              <div
                key={index}
                className="bg-black/20 p-4 rounded-lg border border-yellow-400/10 hover:border-yellow-400/30 transition-colors"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">{dest.flag}</span>
                  <div>
                    <h5 className="font-inter font-medium text-yellow-400 text-sm">
                      {dest.country}
                    </h5>
                    <p className="text-yellow-300 text-xs">{dest.currency}</p>
                  </div>
                </div>
                <p className="text-yellow-200 font-inter text-xs">{dest.tip}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Financial Safety Tips */}
        <div>
          <h4 className="font-playfair font-medium text-yellow-400 text-lg mb-3">
            Financial Safety
          </h4>
          
          <div className="space-y-3">
            {financialTips.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 bg-black/10 p-3 rounded-lg"
              >
                {item.icon}
                <p className="text-yellow-200 font-inter text-sm">{item.tip}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelMode;