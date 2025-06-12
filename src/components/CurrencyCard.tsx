import React from 'react';
import { Currency } from '../types/currency';
import { getCurrencyFact } from '../utils/currencyUtils';

interface CurrencyCardProps {
  currency: Currency;
  className?: string;
}

const CurrencyCard: React.FC<CurrencyCardProps> = ({ currency, className = '' }) => {
  const fact = getCurrencyFact(currency.code);

  return (
    <div className={`glass-card p-4 rounded-xl transition-all duration-300 hover:gold-glow ${className}`}>
      <div className="flex items-center gap-3 mb-3">
        <span className="text-3xl">{currency.flag}</span>
        <div>
          <h3 className="font-playfair font-semibold text-yellow-400 text-lg">
            {currency.name}
          </h3>
          <p className="text-yellow-300 text-sm font-inter">
            {currency.code} • {currency.symbol}
          </p>
        </div>
      </div>
      
      <div className="border-t border-yellow-400/20 pt-3">
        <p className="text-yellow-200 text-sm font-inter leading-relaxed">
          {fact}
        </p>
      </div>
      
      <div className="mt-3 text-xs text-yellow-400/70 font-inter">
        {currency.country}
      </div>
    </div>
  );
};

export default CurrencyCard;