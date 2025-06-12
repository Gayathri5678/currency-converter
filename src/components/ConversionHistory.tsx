import React, { useState, useEffect } from 'react';
import { History, Download, Trash2, ChevronDown, ChevronUp } from 'lucide-react';
import * as XLSX from 'xlsx';
import { Conversion } from '../types/currency';
import { formatCurrency } from '../utils/currencyUtils';

const ConversionHistory: React.FC = () => {
  const [conversions, setConversions] = useState<Conversion[]>([]);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('currencyConversions');
    if (saved) {
      setConversions(JSON.parse(saved));
    }
  }, []);

  const clearHistory = () => {
    if (window.confirm('Are you sure you want to clear all conversion history?')) {
      localStorage.removeItem('currencyConversions');
      setConversions([]);
    }
  };

  const exportToCSV = () => {
    if (conversions.length === 0) {
      alert('No conversions to export');
      return;
    }

    const exportData = conversions.map(conversion => ({
      Date: new Date(conversion.timestamp).toLocaleDateString(),
      Time: new Date(conversion.timestamp).toLocaleTimeString(),
      From: conversion.from.code,
      To: conversion.to.code,
      Amount: conversion.amount,
      Rate: conversion.rate,
      Result: conversion.result,
      'From Currency': conversion.from.name,
      'To Currency': conversion.to.name,
    }));

    const ws = XLSX.utils.json_to_sheet(exportData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Currency Conversions');
    
    const fileName = `currency-conversions-${new Date().toISOString().split('T')[0]}.xlsx`;
    XLSX.writeFile(wb, fileName);
  };

  if (conversions.length === 0) {
    return (
      <div className="glass-card p-6 rounded-xl">
        <div className="flex items-center gap-3 mb-4">
          <History className="text-yellow-400" size={24} />
          <h3 className="font-playfair font-semibold text-yellow-400 text-xl">
            Conversion History
          </h3>
        </div>
        <p className="text-yellow-200 font-inter text-center py-8">
          No conversions yet. Start converting currencies to see your history here.
        </p>
      </div>
    );
  }

  return (
    <div className="glass-card p-6 rounded-xl">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <History className="text-yellow-400" size={24} />
          <h3 className="font-playfair font-semibold text-yellow-400 text-xl">
            Conversion History
          </h3>
          <span className="bg-yellow-400/20 text-yellow-400 px-2 py-1 rounded-full text-sm font-inter">
            {conversions.length}
          </span>
        </div>
        
        <div className="flex items-center gap-2">
          <button
            onClick={exportToCSV}
            className="btn-gold px-3 py-2 rounded-lg text-black font-inter text-sm flex items-center gap-2"
            title="Export to Excel"
          >
            <Download size={16} />
            Export
          </button>
          
          <button
            onClick={clearHistory}
            className="bg-red-500/20 hover:bg-red-500/30 text-red-400 px-3 py-2 rounded-lg font-inter text-sm flex items-center gap-2 transition-colors"
            title="Clear history"
          >
            <Trash2 size={16} />
            Clear
          </button>
          
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="bg-yellow-400/20 hover:bg-yellow-400/30 text-yellow-400 p-2 rounded-lg transition-colors"
          >
            {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
        </div>
      </div>

      <div className={`transition-all duration-300 ${isExpanded ? 'max-h-96 overflow-y-auto' : 'max-h-32 overflow-hidden'}`}>
        <div className="space-y-3">
          {conversions.slice(0, isExpanded ? undefined : 3).map((conversion) => (
            <div
              key={conversion.id}
              className="bg-black/20 p-4 rounded-lg border border-yellow-400/10 hover:border-yellow-400/30 transition-colors"
            >
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">{conversion.from.flag}</span>
                    <span className="text-yellow-400 font-inter font-medium">
                      {formatCurrency(conversion.amount, conversion.from)}
                    </span>
                    <span className="text-yellow-300">→</span>
                    <span className="text-2xl">{conversion.to.flag}</span>
                    <span className="text-yellow-400 font-inter font-medium">
                      {formatCurrency(conversion.result, conversion.to)}
                    </span>
                  </div>
                  
                  <div className="text-sm text-yellow-300 font-inter">
                    Rate: 1 {conversion.from.code} = {conversion.rate.toFixed(6)} {conversion.to.code}
                  </div>
                </div>
                
                <div className="text-xs text-yellow-400/70 font-inter">
                  {new Date(conversion.timestamp).toLocaleString()}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {!isExpanded && conversions.length > 3 && (
          <div className="text-center mt-3">
            <button
              onClick={() => setIsExpanded(true)}
              className="text-yellow-400 hover:text-yellow-300 font-inter text-sm"
            >
              View {conversions.length - 3} more conversions...
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ConversionHistory;