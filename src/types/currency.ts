export interface Currency {
  code: string;
  name: string;
  symbol: string;
  flag: string;
  country: string;
}

export interface ExchangeRate {
  base: string;
  target: string;
  rate: number;
  timestamp: number;
}

export interface Conversion {
  id: string;
  from: Currency;
  to: Currency;
  amount: number;
  result: number;
  rate: number;
  timestamp: number;
}

export interface CurrencyFact {
  currency: string;
  fact: string;
}

export interface ChartData {
  labels: string[];
  datasets: Array<{
    label: string;
    data: number[];
    borderColor: string;
    backgroundColor: string;
    tension: number;
  }>;
}