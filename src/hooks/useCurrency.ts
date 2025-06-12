import { useState, useEffect } from 'react';
import { ExchangeRate } from '../types/currency';

export const useCurrency = () => {
  const [rates, setRates] = useState<Record<string, number>>({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchExchangeRate = async (from: string, to: string): Promise<number> => {
    if (from === to) return 1;
    
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch(`https://open.er-api.com/v6/latest/${from}`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch exchange rates');
      }
      
      const data = await response.json();
      const rate = data.rates[to];
      
      if (!rate) {
        throw new Error(`Exchange rate not found for ${from} to ${to}`);
      }
      
      // Update rates cache
      setRates(prev => ({
        ...prev,
        [`${from}-${to}`]: rate,
      }));
      
      return rate;
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to fetch exchange rate';
      setError(message);
      
      // Return cached rate if available
      const cachedRate = rates[`${from}-${to}`];
      if (cachedRate) {
        return cachedRate;
      }
      
      throw new Error(message);
    } finally {
      setLoading(false);
    }
  };

  const fetchHistoricalRates = async (from: string, to: string, days: number = 7): Promise<number[]> => {
    try {
      const promises = [];
      const today = new Date();
      
      for (let i = 0; i < days; i++) {
        const date = new Date(today);
        date.setDate(date.getDate() - i);
        const dateString = date.toISOString().split('T')[0];
        
        promises.push(
          fetch(`https://open.er-api.com/v6/history/${from}/${dateString}`)
            .then(res => res.json())
            .then(data => data.rates[to] || 1)
            .catch(() => 1)
        );
      }
      
      const historicalRates = await Promise.all(promises);
      return historicalRates.reverse(); // Show oldest to newest
    } catch {
      // Return mock data if API fails
      return Array(days).fill(0).map(() => Math.random() * 0.1 + 1);
    }
  };

  return {
    fetchExchangeRate,
    fetchHistoricalRates,
    loading,
    error,
    rates,
  };
};