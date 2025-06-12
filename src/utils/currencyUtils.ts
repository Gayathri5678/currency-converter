import { Currency, CurrencyFact } from '../types/currency';

export const POPULAR_CURRENCIES: Currency[] = [
  { code: 'USD', name: 'US Dollar', symbol: '$', flag: '🇺🇸', country: 'United States' },
  { code: 'EUR', name: 'Euro', symbol: '€', flag: '🇪🇺', country: 'European Union' },
  { code: 'GBP', name: 'British Pound', symbol: '£', flag: '🇬🇧', country: 'United Kingdom' },
  { code: 'JPY', name: 'Japanese Yen', symbol: '¥', flag: '🇯🇵', country: 'Japan' },
  { code: 'CAD', name: 'Canadian Dollar', symbol: 'C$', flag: '🇨🇦', country: 'Canada' },
  { code: 'AUD', name: 'Australian Dollar', symbol: 'A$', flag: '🇦🇺', country: 'Australia' },
  { code: 'CHF', name: 'Swiss Franc', symbol: 'CHF', flag: '🇨🇭', country: 'Switzerland' },
  { code: 'CNY', name: 'Chinese Yuan', symbol: '¥', flag: '🇨🇳', country: 'China' },
  { code: 'INR', name: 'Indian Rupee', symbol: '₹', flag: '🇮🇳', country: 'India' },
  { code: 'SGD', name: 'Singapore Dollar', symbol: 'S$', flag: '🇸🇬', country: 'Singapore' },
  { code: 'HKD', name: 'Hong Kong Dollar', symbol: 'HK$', flag: '🇭🇰', country: 'Hong Kong' },
  { code: 'NOK', name: 'Norwegian Krone', symbol: 'kr', flag: '🇳🇴', country: 'Norway' },
  { code: 'SEK', name: 'Swedish Krona', symbol: 'kr', flag: '🇸🇪', country: 'Sweden' },
  { code: 'DKK', name: 'Danish Krone', symbol: 'kr', flag: '🇩🇰', country: 'Denmark' },
  { code: 'PLN', name: 'Polish Zloty', symbol: 'zł', flag: '🇵🇱', country: 'Poland' },
  { code: 'CZK', name: 'Czech Koruna', symbol: 'Kč', flag: '🇨🇿', country: 'Czech Republic' },
  { code: 'HUF', name: 'Hungarian Forint', symbol: 'Ft', flag: '🇭🇺', country: 'Hungary' },
  { code: 'BGN', name: 'Bulgarian Lev', symbol: 'лв', flag: '🇧🇬', country: 'Bulgaria' },
  { code: 'RON', name: 'Romanian Leu', symbol: 'lei', flag: '🇷🇴', country: 'Romania' },
  { code: 'HRK', name: 'Croatian Kuna', symbol: 'kn', flag: '🇭🇷', country: 'Croatia' },
  { code: 'RUB', name: 'Russian Ruble', symbol: '₽', flag: '🇷🇺', country: 'Russia' },
  { code: 'TRY', name: 'Turkish Lira', symbol: '₺', flag: '🇹🇷', country: 'Turkey' },
  { code: 'BRL', name: 'Brazilian Real', symbol: 'R$', flag: '🇧🇷', country: 'Brazil' },
  { code: 'MXN', name: 'Mexican Peso', symbol: '$', flag: '🇲🇽', country: 'Mexico' },
  { code: 'ARS', name: 'Argentine Peso', symbol: '$', flag: '🇦🇷', country: 'Argentina' },
  { code: 'CLP', name: 'Chilean Peso', symbol: '$', flag: '🇨🇱', country: 'Chile' },
  { code: 'COP', name: 'Colombian Peso', symbol: '$', flag: '🇨🇴', country: 'Colombia' },
  { code: 'PEN', name: 'Peruvian Sol', symbol: 'S/', flag: '🇵🇪', country: 'Peru' },
  { code: 'ZAR', name: 'South African Rand', symbol: 'R', flag: '🇿🇦', country: 'South Africa' },
  { code: 'KRW', name: 'South Korean Won', symbol: '₩', flag: '🇰🇷', country: 'South Korea' },
  { code: 'THB', name: 'Thai Baht', symbol: '฿', flag: '🇹🇭', country: 'Thailand' },
  { code: 'MYR', name: 'Malaysian Ringgit', symbol: 'RM', flag: '🇲🇾', country: 'Malaysia' },
  { code: 'IDR', name: 'Indonesian Rupiah', symbol: 'Rp', flag: '🇮🇩', country: 'Indonesia' },
  { code: 'PHP', name: 'Philippine Peso', symbol: '₱', flag: '🇵🇭', country: 'Philippines' },
  { code: 'VND', name: 'Vietnamese Dong', symbol: '₫', flag: '🇻🇳', country: 'Vietnam' },
];

export const CURRENCY_FACTS: CurrencyFact[] = [
  { currency: 'USD', fact: 'The US Dollar is the most traded currency in the world, accounting for about 88% of all forex trades.' },
  { currency: 'EUR', fact: 'The Euro is the second most traded currency and is used by 19 of the 27 European Union countries.' },
  { currency: 'JPY', fact: 'The Japanese Yen is the most traded Asian currency and is known for its stability during market volatility.' },
  { currency: 'GBP', fact: 'The British Pound is the oldest currency still in use today, dating back over 1,200 years.' },
  { currency: 'CHF', fact: 'The Swiss Franc is considered a "safe haven" currency due to Switzerland\'s political stability.' },
  { currency: 'CAD', fact: 'The Canadian Dollar is known as the "Loonie" due to the loon bird featured on the one-dollar coin.' },
  { currency: 'AUD', fact: 'Australian Dollar banknotes are made from polymer, making them extremely durable and difficult to counterfeit.' },
  { currency: 'CNY', fact: 'The Chinese Yuan is rapidly growing in international trade and is part of the IMF\'s Special Drawing Rights basket.' },
  { currency: 'INR', fact: 'The Indian Rupee symbol ₹ was officially adopted in 2010 and combines the Devanagari letter "र" and Latin "R".' },
  { currency: 'SGD', fact: 'Singapore Dollar banknotes feature unique security features including microtext that can only be seen with a magnifying glass.' },
];

export const TRAVEL_TIPS = [
  'Avoid currency exchange at airports - they typically offer the worst rates with high fees.',
  'Use ATMs abroad for better exchange rates, but check with your bank about international fees first.',
  'Credit cards often offer competitive exchange rates, but watch out for foreign transaction fees.',
  'Exchange a small amount before traveling for immediate expenses like transport and tips.',
  'Keep currency exchange receipts - you might need them to exchange money back when returning.',
  'Use currency converter apps to stay updated on real-time rates while traveling.',
  'Consider getting a multi-currency travel card for convenience and better rates.',
  'Notify your bank before traveling to prevent your cards from being blocked.',
];

export const formatCurrency = (amount: number, currency: Currency): string => {
  try {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency.code,
      minimumFractionDigits: 2,
      maximumFractionDigits: 6,
    }).format(amount);
  } catch {
    return `${currency.symbol}${amount.toFixed(2)}`;
  }
};

export const getCurrencyByCode = (code: string): Currency | undefined => {
  return POPULAR_CURRENCIES.find(currency => currency.code === code);
};

export const getCurrencyFact = (currencyCode: string): string => {
  const fact = CURRENCY_FACTS.find(f => f.currency === currencyCode);
  return fact?.fact || 'This currency plays an important role in global trade and commerce.';
};

export const getRandomTravelTip = (): string => {
  return TRAVEL_TIPS[Math.floor(Math.random() * TRAVEL_TIPS.length)];
};