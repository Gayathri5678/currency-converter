import React, { useState, useEffect } from 'react';
import { ArrowUpDown, RefreshCw, TrendingUp, Info, Zap, Star } from 'lucide-react';
import { Currency, Conversion } from '../types/currency';
import { POPULAR_CURRENCIES, formatCurrency, getCurrencyByCode } from '../utils/currencyUtils';
import { useCurrency } from '../hooks/useCurrency';
import VoiceInput from './VoiceInput';
import CurrencyCard from './CurrencyCard';
/* Removed ExchangeChart import as per request */
// import ExchangeChart from './ExchangeChart';

const CurrencyConverter: React.FC = () => {
  const [fromCurrency, setFromCurrency] = useState<Currency>(POPULAR_CURRENCIES[0]); // USD
  const [toCurrency, setToCurrency] = useState<Currency>(POPULAR_CURRENCIES[1]); // EUR
  const [amount, setAmount] = useState<string>('1000');
  const [result, setResult] = useState<number>(0);
  const [rate, setRate] = useState<number>(0);
  const [showCurrencyInfo, setShowCurrencyInfo] = useState(false);
  const [isConverting, setIsConverting] = useState(false);
  
  const { fetchExchangeRate, loading, error } = useCurrency();

  const handleConvert = async () => {
    if (!amount || isNaN(Number(amount))) {
      alert('Please enter a valid amount');
      return;
    }

    try {
      setIsConverting(true);
      const exchangeRate = await fetchExchangeRate(fromCurrency.code, toCurrency.code);
      const convertedAmount = Number(amount) * exchangeRate;
      
      setRate(exchangeRate);
      setResult(convertedAmount);

      // Save to history
      const conversion: Conversion = {
        id: Date.now().toString(),
        from: fromCurrency,
        to: toCurrency,
        amount: Number(amount),
        result: convertedAmount,
        rate: exchangeRate,
        timestamp: Date.now(),
      };

      const existing = JSON.parse(localStorage.getItem('currencyConversions') || '[]');
      const updated = [conversion, ...existing].slice(0, 50); // Keep last 50
      localStorage.setItem('currencyConversions', JSON.stringify(updated));
      
      // Trigger storage event for other components
      window.dispatchEvent(new Event('storage'));
      
    } catch (err) {
      console.error('Conversion failed:', err);
    } finally {
      setIsConverting(false);
    }
  };

  const swapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setResult(0);
    setRate(0);
  };

  const handleVoiceResult = (voiceAmount: string) => {
    setAmount(voiceAmount);
  };

  // Auto-convert when currencies change
  useEffect(() => {
    if (amount && !isNaN(Number(amount))) {
      handleConvert();
    }
  }, [fromCurrency, toCurrency]);

  const quickAmounts = [100, 500, 1000, 5000, 10000];

  return (
    <div className="space-y-8" id="converter">
      {/* Main Converter Card */}
      <div className="glass-card p-8 md:p-12 rounded-3xl shadow-2xl relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 via-transparent to-orange-500"></div>
        </div>
        
        <div className="relative z-10">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="p-3 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-full">
                <TrendingUp className="text-yellow-400" size={32} />
              </div>
              <h2 className="font-playfair font-bold text-4xl md:text-5xl text-gold-gradient">
                Currency Exchange
              </h2>
            </div>
            <p className="text-xl text-gray-300 font-inter max-w-2xl mx-auto leading-relaxed">
              Professional-grade currency conversion with real-time rates and advanced analytics
            </p>
          </div>

          {/* Quick Amount Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <span className="text-gray-400 font-inter text-sm self-center">Quick amounts:</span>
            {quickAmounts.map((quickAmount) => (
              <button
                key={quickAmount}
                onClick={() => setAmount(quickAmount.toString())}
                className="px-4 py-2 bg-black/20 hover:bg-yellow-400/20 border border-yellow-400/20 hover:border-yellow-400/40 rounded-lg text-yellow-400 font-inter text-sm transition-all duration-300"
              >
                {quickAmount.toLocaleString()}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            {/* From Currency */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-3">
                <Star className="text-yellow-400" size={16} />
                <label className="text-yellow-400 font-inter font-semibold text-lg">From</label>
              </div>
              
              <select
                value={fromCurrency.code}
                onChange={(e) => {
                  const currency = getCurrencyByCode(e.target.value);
                  if (currency) setFromCurrency(currency);
                }}
                className="w-full bg-black/40 border border-yellow-400/30 rounded-xl px-4 py-4 text-yellow-100 font-inter text-lg focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/20 transition-all"
              >
                {POPULAR_CURRENCIES.map((currency) => (
                  <option key={currency.code} value={currency.code} className="bg-black">
                    {currency.flag} {currency.code} - {currency.name}
                  </option>
                ))}
              </select>
              
              <div className="flex gap-3">
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="Enter amount"
                  className="flex-1 bg-black/40 border border-yellow-400/30 rounded-xl px-4 py-4 text-yellow-100 font-inter text-xl focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/20 transition-all"
                />
                <VoiceInput onResult={handleVoiceResult} />
              </div>
              
              <div className="text-center text-gray-400 font-inter text-sm">
                {fromCurrency.flag} {fromCurrency.name}
              </div>
            </div>

            {/* Swap Button */}
            <div className="flex items-center justify-center">
              <button
                onClick={swapCurrencies}
                className="bg-gradient-to-br from-yellow-400/20 to-orange-500/20 hover:from-yellow-400/30 hover:to-orange-500/30 p-4 rounded-full transition-all duration-300 hover:rotate-180 hover:scale-110 group"
                title="Swap currencies"
              >
                <ArrowUpDown className="text-yellow-400 group-hover:text-yellow-300" size={28} />
              </button>
            </div>

            {/* To Currency */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-3">
                <Star className="text-yellow-400" size={16} />
                <label className="text-yellow-400 font-inter font-semibold text-lg">To</label>
              </div>
              
              <select
                value={toCurrency.code}
                onChange={(e) => {
                  const currency = getCurrencyByCode(e.target.value);
                  if (currency) setToCurrency(currency);
                }}
                className="w-full bg-black/40 border border-yellow-400/30 rounded-xl px-4 py-4 text-yellow-100 font-inter text-lg focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/20 transition-all"
              >
                {POPULAR_CURRENCIES.map((currency) => (
                  <option key={currency.code} value={currency.code} className="bg-black">
                    {currency.flag} {currency.code} - {currency.name}
                  </option>
                ))}
              </select>
              
              <div className="bg-gradient-to-r from-black/40 to-gray-900/40 border border-yellow-400/30 rounded-xl px-4 py-4 min-h-[64px] flex items-center">
                <span className="text-yellow-100 font-inter text-xl font-semibold">
                  {result > 0 ? formatCurrency(result, toCurrency) : '0.00'}
                </span>
              </div>
              
              <div className="text-center text-gray-400 font-inter text-sm">
                {toCurrency.flag} {toCurrency.name}
              </div>
            </div>
          </div>

          {/* Convert Button */}
          <div className="text-center mb-8">
            <button
              onClick={handleConvert}
              disabled={loading || isConverting}
              className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 px-12 py-4 rounded-xl font-inter font-bold text-xl text-black disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-3 mx-auto transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-yellow-400/25"
            >
              {loading || isConverting ? (
                <>
                  <RefreshCw className="animate-spin" size={24} />
                  Converting...
                </>
              ) : (
                <>
                  <Zap size={24} />
                  Convert Currency
                </>
              )}
            </button>
          </div>

          {/* Exchange Rate Display */}
          {rate > 0 && (
            <div className="bg-gradient-to-r from-yellow-400/10 via-orange-400/10 to-yellow-400/10 p-6 rounded-xl text-center border border-yellow-400/20">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                <div>
                  <p className="text-yellow-400 font-inter text-sm mb-1">Exchange Rate</p>
                  <p className="text-yellow-100 font-inter text-lg font-semibold">
                    1 {fromCurrency.code} = {rate.toFixed(6)} {toCurrency.code}
                  </p>
                </div>
                <div>
                  <p className="text-yellow-400 font-inter text-sm mb-1">Converted Amount</p>
                  <p className="text-white font-playfair text-2xl font-bold">
                    {formatCurrency(result, toCurrency)}
                  </p>
                </div>
                <div>
                  <p className="text-yellow-400 font-inter text-sm mb-1">Last Updated</p>
                  <p className="text-yellow-300 font-inter text-sm">
                    {new Date().toLocaleTimeString()}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Error Display */}
          {error && (
            <div className="bg-red-500/20 border border-red-500/50 p-4 rounded-xl text-center">
              <p className="text-red-400 font-inter">{error}</p>
            </div>
          )}

          {/* Currency Info Toggle */}
          <div className="text-center mt-8">
            <button
              onClick={() => setShowCurrencyInfo(!showCurrencyInfo)}
              className="text-yellow-400 hover:text-yellow-300 font-inter text-sm flex items-center gap-2 mx-auto transition-colors"
            >
              <Info size={16} />
              {showCurrencyInfo ? 'Hide' : 'Show'} Currency Information
            </button>
          </div>
        </div>
      </div>

      {/* Currency Information Cards */}
      {showCurrencyInfo && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <CurrencyCard currency={fromCurrency} />
          <CurrencyCard currency={toCurrency} />
        </div>
      )}

      {/* Exchange Rate Chart */}
      {/* Removed ExchangeChart component as per request */}
      {/*
      {rate > 0 && (
        <ExchangeChart fromCurrency={fromCurrency} toCurrency={toCurrency} />
      )}
      */}
    </div>
  );
};

export default CurrencyConverter;